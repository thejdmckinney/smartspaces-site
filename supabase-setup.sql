-- SmartSpaces DFW Leads Table
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE leads (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  project_type TEXT NOT NULL,
  services TEXT[] NOT NULL,
  budget TEXT NOT NULL,
  city TEXT NOT NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  preferred_contact TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'new',
  notes TEXT
);

-- Create an index on created_at for faster sorting
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);

-- Create an index on status for filtering
CREATE INDEX idx_leads_status ON leads(status);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows service role to do everything
CREATE POLICY "Service role can do everything" ON leads
  FOR ALL
  USING (auth.role() = 'service_role');

-- Optional: Allow anon key to insert only (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON leads
  FOR INSERT
  WITH CHECK (true);
