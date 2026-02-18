'use client'

import { useState, useEffect } from 'react'
import { LogOut, Download, ChevronDown, ChevronUp } from 'lucide-react'
import Cookies from 'js-cookie'

type Lead = {
  id: number
  created_at: string
  name: string
  phone: string
  email: string
  city: string
  services: string[]
  budget: string
  project_type: string
  preferred_contact: string
  status: string
  notes: string | null
  message: string | null
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  // Check for existing auth cookie on mount
  useEffect(() => {
    const authCookie = Cookies.get('admin_auth')
    if (authCookie === 'authenticated') {
      setIsAuthenticated(true)
      fetchLeads()
    } else {
      setLoading(false)
    }
  }, [])

  // Fetch leads from API (uses service role key server-side)
  const fetchLeads = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/admin/leads')
      const data = await response.json()
      
      if (data.error) throw new Error(data.error)
      
      // Sort leads based on sortOrder
      const sortedLeads = (data.leads || []).sort((a: Lead, b: Lead) => {
        const dateA = new Date(a.created_at).getTime()
        const dateB = new Date(b.created_at).getTime()
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
      })
      
      setLeads(sortedLeads)
    } catch (error) {
      console.error('Error fetching leads:', error)
    } finally {
      setLoading(false)
    }
  }

  // Handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/admin/verify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })

      const data = await response.json()

      if (data.success) {
        // Set cookie for 24 hours
        Cookies.set('admin_auth', 'authenticated', { expires: 1 })
        setIsAuthenticated(true)
        setAuthError('')
        fetchLeads()
      } else {
        setAuthError('Invalid password')
      }
    } catch (error) {
      setAuthError('Authentication failed')
    }
  }

  // Handle logout
  const handleLogout = () => {
    Cookies.remove('admin_auth')
    setIsAuthenticated(false)
    setPassword('')
  }

  // Update lead status
  const updateLeadStatus = async (leadId: number, newStatus: string) => {
    try {
      const response = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, status: newStatus })
      })

      const data = await response.json()
      if (data.error) throw new Error(data.error)

      // Update local state
      setLeads(leads.map(lead => 
        lead.id === leadId ? { ...lead, status: newStatus } : lead
      ))
    } catch (error) {
      console.error('Error updating status:', error)
      alert('Failed to update status')
    }
  }

  // Update lead notes
  const updateLeadNotes = async (leadId: number, notes: string) => {
    try {
      const response = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, notes })
      })

      const data = await response.json()
      if (data.error) throw new Error(data.error)

      // Update local state
      setLeads(leads.map(lead => 
        lead.id === leadId ? { ...lead, notes } : lead
      ))
    } catch (error) {
      console.error('Error updating notes:', error)
      alert('Failed to update notes')
    }
  }

  // Export leads as CSV
  const exportToCSV = () => {
    const headers = [
      'ID', 'Date', 'Name', 'Phone', 'Email', 'City', 
      'Services', 'Budget', 'Project Type', 'Preferred Contact', 
      'Status', 'Message', 'Notes'
    ]

    const csvData = leads.map(lead => [
      lead.id,
      new Date(lead.created_at).toLocaleString(),
      lead.name,
      lead.phone,
      lead.email,
      lead.city,
      lead.services.join('; '),
      lead.budget,
      lead.project_type,
      lead.preferred_contact,
      lead.status,
      lead.message || '',
      lead.notes || ''
    ])

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `smartspacesdfw-leads-${new Date().toISOString().split('T')[0]}.csv`
    link.click()
  }

  // Toggle sort order
  const toggleSort = () => {
    const newOrder = sortOrder === 'desc' ? 'asc' : 'desc'
    setSortOrder(newOrder)
    
    setLeads([...leads].sort((a, b) => {
      const dateA = new Date(a.created_at).getTime()
      const dateB = new Date(b.created_at).getTime()
      return newOrder === 'desc' ? dateB - dateA : dateA - dateB
    }))
  }

  // Calculate stats
  const totalLeads = leads.length
  const newLeads = leads.filter(l => l.status === 'new').length
  const contactedLeads = leads.filter(l => l.status === 'contacted').length

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A1F44] via-[#0066FF]/20 to-[#0A1F44] flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
            <h1 className="text-3xl font-bold text-white text-center mb-8">
              SmartSpacesDFW Admin
            </h1>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setAuthError('')
                  }}
                  className="w-full p-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-slate-400 focus:border-[#0066FF] focus:outline-none transition-all"
                  placeholder="Enter admin password"
                  autoFocus
                />
                {authError && (
                  <p className="text-red-400 text-sm mt-2">{authError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full p-4 bg-[#0066FF] text-white rounded-xl font-semibold hover:bg-[#0066FF]/90 transition-all"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F44] via-[#0066FF]/20 to-[#0A1F44] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            SmartSpacesDFW — Lead Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
            <div className="text-slate-300 text-sm mb-2">Total Leads</div>
            <div className="text-4xl font-bold text-white">{totalLeads}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
            <div className="text-slate-300 text-sm mb-2">New Leads</div>
            <div className="text-4xl font-bold text-[#0066FF]">{newLeads}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
            <div className="text-slate-300 text-sm mb-2">Contacted</div>
            <div className="text-4xl font-bold text-green-400">{contactedLeads}</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 px-6 py-3 bg-[#0066FF] text-white rounded-xl hover:bg-[#0066FF]/90 transition-all"
          >
            <Download className="w-5 h-5" />
            Export CSV
          </button>
          <button
            onClick={toggleSort}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all"
          >
            {sortOrder === 'desc' ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
            {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
          </button>
        </div>

        {/* Leads Table */}
        {loading ? (
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-12 text-center">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4" />
            <p className="text-white">Loading leads...</p>
          </div>
        ) : leads.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-12 text-center">
            <p className="text-white text-lg">No leads yet</p>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0A1F44]/50 border-b border-white/10">
                    <th className="px-4 py-4 text-left text-white font-semibold">Date</th>
                    <th className="px-4 py-4 text-left text-white font-semibold">Name</th>
                    <th className="px-4 py-4 text-left text-white font-semibold">Phone</th>
                    <th className="px-4 py-4 text-left text-white font-semibold">Email</th>
                    <th className="px-4 py-4 text-left text-white font-semibold">City</th>
                    <th className="px-4 py-4 text-left text-white font-semibold">Services</th>
                    <th className="px-4 py-4 text-left text-white font-semibold">Budget</th>
                    <th className="px-4 py-4 text-left text-white font-semibold">Project</th>
                    <th className="px-4 py-4 text-left text-white font-semibold">Contact</th>
                    <th className="px-4 py-4 text-left text-white font-semibold">Status</th>
                    <th className="px-4 py-4 text-left text-white font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-4 py-4 text-slate-300 whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4 text-white font-medium whitespace-nowrap">
                        {lead.name}
                      </td>
                      <td className="px-4 py-4 text-slate-300 whitespace-nowrap">
                        <a href={`tel:${lead.phone}`} className="hover:text-[#0066FF]">
                          {lead.phone}
                        </a>
                      </td>
                      <td className="px-4 py-4 text-slate-300">
                        <a href={`mailto:${lead.email}`} className="hover:text-[#0066FF]">
                          {lead.email}
                        </a>
                      </td>
                      <td className="px-4 py-4 text-slate-300 whitespace-nowrap">
                        {lead.city}
                      </td>
                      <td className="px-4 py-4 text-slate-300">
                        <div className="max-w-xs">
                          {lead.services.join(', ')}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-slate-300 whitespace-nowrap">
                        {lead.budget}
                      </td>
                      <td className="px-4 py-4 text-slate-300 whitespace-nowrap">
                        {lead.project_type}
                      </td>
                      <td className="px-4 py-4 text-slate-300 whitespace-nowrap">
                        {lead.preferred_contact}
                      </td>
                      <td className="px-4 py-4">
                        <select
                          value={lead.status}
                          onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium border-0 focus:outline-none focus:ring-2 focus:ring-[#0066FF] cursor-pointer ${
                            lead.status === 'new'
                              ? 'bg-blue-500/20 text-blue-300'
                              : lead.status === 'contacted'
                              ? 'bg-yellow-500/20 text-yellow-300'
                              : lead.status === 'quoted'
                              ? 'bg-purple-500/20 text-purple-300'
                              : lead.status === 'won'
                              ? 'bg-green-500/20 text-green-300'
                              : 'bg-red-500/20 text-red-300'
                          }`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="quoted">Quoted</option>
                          <option value="won">Won</option>
                          <option value="lost">Lost</option>
                        </select>
                      </td>
                      <td className="px-4 py-4">
                        <input
                          type="text"
                          value={lead.notes || ''}
                          onChange={(e) => updateLeadNotes(lead.id, e.target.value)}
                          placeholder="Add notes..."
                          className="w-full min-w-[200px] px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:border-[#0066FF] focus:outline-none"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
