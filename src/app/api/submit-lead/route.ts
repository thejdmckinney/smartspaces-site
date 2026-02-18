import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

// Initialize Supabase client with service role key for admin access
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    
    const {
      projectType,
      services,
      budget,
      city,
      name,
      phone,
      email,
      preferredContact,
      message
    } = body

    // Validate required fields
    if (!projectType || !services || !budget || !city || !name || !phone || !email || !preferredContact) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Insert lead into Supabase
    const { data, error: supabaseError } = await supabase
      .from('leads')
      .insert([
        {
          project_type: projectType,
          services: services,
          budget: budget,
          city: city,
          name: name,
          phone: phone,
          email: email,
          preferred_contact: preferredContact,
          message: message || null,
          status: 'new'
        }
      ])
      .select()
      .single()

    if (supabaseError) {
      console.error('Supabase error:', supabaseError)
      return NextResponse.json(
        { error: 'Failed to save lead to database' },
        { status: 500 }
      )
    }

    // Format services array for email
    const servicesFormatted = services.map((s: string) => 
      s.split('-').map((word: string) => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    ).join(', ')

    // Format project type for email
    const projectTypeFormatted = projectType.split('-').map((word: string) => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')

    // Format budget for email
    const budgetFormatted = budget === 'under-1000' 
      ? 'Under $1,000'
      : budget === '1000-3000'
      ? '$1,000 - $3,000'
      : budget === '3000-7500'
      ? '$3,000 - $7,500'
      : '$7,500+'

    // Get current date and time
    const submissionDate = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Chicago'
    })

    // Send email notification via Resend
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #0A1F44 0%, #0066FF 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-weight: bold;
              color: #0A1F44;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
              padding: 10px;
              background: white;
              border-left: 3px solid #0066FF;
              margin-top: 5px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🏠 New Lead from SmartSpacesDFW</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">📅 Submitted:</div>
                <div class="value">${submissionDate}</div>
              </div>

              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">📞 Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>

              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>

              <div class="field">
                <div class="label">📍 City:</div>
                <div class="value">${city}</div>
              </div>

              <div class="field">
                <div class="label">💬 Preferred Contact:</div>
                <div class="value">${preferredContact}</div>
              </div>

              <div class="field">
                <div class="label">🏗️ Project Type:</div>
                <div class="value">${projectTypeFormatted}</div>
              </div>

              <div class="field">
                <div class="label">🛠️ Services Interested In:</div>
                <div class="value">${servicesFormatted}</div>
              </div>

              <div class="field">
                <div class="label">💰 Budget Range:</div>
                <div class="value">${budgetFormatted}</div>
              </div>

              ${message ? `
                <div class="field">
                  <div class="label">📝 Additional Message:</div>
                  <div class="value">${message}</div>
                </div>
              ` : ''}

              <div class="footer">
                <p>This lead was submitted through the SmartSpacesDFW website.</p>
                <p>Lead ID: ${data.id}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    try {
      await resend.emails.send({
        from: 'SmartSpacesDFW Leads <onboarding@resend.dev>', // Change this to your verified domain
        to: ['jeremy@creativejobhub.com'],
        subject: `New SmartSpacesDFW Lead — ${name} — ${city}`,
        html: emailHtml
      })
    } catch (emailError) {
      console.error('Email error:', emailError)
      // Don't fail the request if email fails - lead is already saved
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead submitted successfully',
        leadId: data.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
