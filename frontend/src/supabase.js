import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://omumojbqwrirayazmjbu.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tdW1vamJxd3JpcmF5YXptamJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxNzI2MDksImV4cCI6MjA4OTc0ODYwOX0.Y3V17kb3E_QUIYLEqQgAEvwhPOd8UYNlSagsDK17hzg'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)