# SmartSpacesDFW Lead Capture System

## Complete Setup Guide

### Prerequisites
- Node.js 18+ installed
- A Supabase account (free tier works)
- A Resend account (free tier works)

---

## PART 1: Supabase Setup

### Step 1: Create a Supabase Project
1. Go to https://supabase.com and sign up/login
2. Click "New Project"
3. Choose your organization and create a project
4. Wait for the project to be ready (takes ~2 minutes)

### Step 2: Run the SQL Setup
1. In your Supabase dashboard, go to the **SQL Editor** (left sidebar)
2. Click "New Query"
3. Copy and paste the entire contents of `supabase-setup.sql`
4. Click "Run" to execute the SQL
5. This creates the `leads` table with all required columns and indexes

### Step 3: Get Your Supabase Credentials
1. In your Supabase dashboard, go to **Settings** > **API**
2. Copy these values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY` (click "Reveal" to see it)

---

## PART 2: Resend Setup

### Step 1: Create a Resend Account
1. Go to https://resend.com and sign up
2. Verify your email address

### Step 2: Get Your API Key
1. In your Resend dashboard, go to **API Keys**
2. Click "Create API Key"
3. Give it a name (e.g., "SmartSpacesDFW")
4. Copy the API key → `RESEND_API_KEY`

### Step 3: Verify Domain (Optional but Recommended)
1. In Resend dashboard, go to **Domains**
2. Click "Add Domain"
3. Follow DNS verification steps
4. Update the `from` email in `src/app/api/submit-lead/route.ts` line 107 to use your domain
5. If skipping this step, leave it as `onboarding@resend.dev` (will show "via resend.dev")

---

## PART 3: Install Dependencies

Run these commands in your terminal:

```bash
npm install @supabase/supabase-js
npm install resend
npm install js-cookie
npm install --save-dev @types/js-cookie
```

---

## PART 4: Environment Variables

### Step 1: Create .env.local File
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

### Step 2: Fill in Your Values
Open `.env.local` and replace all placeholder values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
RESEND_API_KEY=re_123abc...
ADMIN_PASSWORD=MySecurePassword123!
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Important Notes:**
- `ADMIN_PASSWORD`: Choose a strong password for your admin dashboard
- `NEXT_PUBLIC_SITE_URL`: Use `http://localhost:3000` for development
- For production, update to your actual domain (e.g., `https://smartspacesdfw.com`)

---

## PART 5: Update Email Recipient

In `src/app/api/submit-lead/route.ts`, find line 108 and update the email:

```typescript
to: ['your-email@example.com'], // Replace with your actual email
```

---

## PART 6: Run the Application

### Development Mode
```bash
npm run dev
```

Visit:
- **Lead Form**: http://localhost:3000/start-your-project
- **Admin Dashboard**: http://localhost:3000/admin
- **Thank You Page**: http://localhost:3000/thank-you

### Production Build
```bash
npm run build
npm start
```

---

## File Structure

```
smartspaces-site/
├── src/
│   └── app/
│       ├── start-your-project/
│       │   └── page.tsx                    # Multi-step lead form
│       ├── thank-you/
│       │   └── page.tsx                    # Submission confirmation page
│       ├── admin/
│       │   └── page.tsx                    # Password-protected admin dashboard
│       └── api/
│           ├── submit-lead/
│           │   └── route.ts                # Lead submission API
│           └── admin/
│               └── verify-password/
│                   └── route.ts            # Admin password verification
├── supabase-setup.sql                      # Database table creation script
├── .env.example                            # Environment variables template
├── .env.local                              # Your actual env vars (create this)
└── LEAD-SYSTEM-SETUP.md                    # This file
```

---

## Testing the System

### 1. Test the Lead Form
1. Go to http://localhost:3000/start-your-project
2. Fill out all 5 steps
3. Submit the form
4. You should be redirected to the thank you page
5. Check your email for the notification

### 2. Test the Admin Dashboard
1. Go to http://localhost:3000/admin
2. Enter your `ADMIN_PASSWORD`
3. You should see the lead you just submitted
4. Try updating the status
5. Try adding notes
6. Try exporting to CSV

### 3. Verify Database
1. Go to Supabase dashboard
2. Click "Table Editor" > "leads"
3. You should see your test lead

---

## Troubleshooting

### Email Not Sending
- Check your `RESEND_API_KEY` is correct
- Verify your email address in Resend settings
- Check the console logs for errors
- Remember: leads are still saved even if email fails

### Admin Login Not Working
- Verify `ADMIN_PASSWORD` is set in `.env.local`
- Clear browser cookies and try again
- Check browser console for errors

### Database Errors
- Verify all Supabase environment variables are correct
- Check that the `leads` table was created successfully
- Make sure Row Level Security policies were created

### Form Not Submitting
- Check browser console for errors
- Verify `NEXT_PUBLIC_SUPABASE_URL` starts with `https://`
- Ensure all required fields are filled out

---

## Production Deployment

### Before Deploying to Vercel/Production:

1. **Update Environment Variables in Vercel:**
   - Go to your Vercel project settings
   - Add all environment variables from `.env.local`
   - Update `NEXT_PUBLIC_SITE_URL` to your production domain

2. **Update Email "From" Address:**
   - In `src/app/api/submit-lead/route.ts` line 107
   - Change from `onboarding@resend.dev` to your verified domain

3. **Test Everything:**
   - Submit a test lead
   - Check email notifications
   - Login to admin dashboard
   - Export CSV

---

## Security Notes

- **Never commit `.env.local`** to git (it's in `.gitignore`)
- Keep your `SUPABASE_SERVICE_ROLE_KEY` secret (it has full database access)
- Use a strong `ADMIN_PASSWORD`
- Admin session expires after 24 hours
- Consider adding rate limiting in production

---

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Check terminal/server logs
3. Verify all environment variables are set correctly
4. Ensure all npm packages are installed

---

## Features Summary

✅ Multi-step form with progress bar  
✅ Form validation with inline errors  
✅ Data stored in Supabase  
✅ Email notifications via Resend  
✅ Password-protected admin dashboard  
✅ Lead status management  
✅ Notes on each lead  
✅ CSV export  
✅ Fully responsive design  
✅ Navy blue & electric blue color scheme  
✅ Loading states  
✅ Error handling  

Enjoy your new lead capture system! 🚀
