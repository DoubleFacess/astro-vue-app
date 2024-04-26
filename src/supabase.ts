import { createClient } from '@supabase/supabase-js'

const VITE_SUPABASE_URL = 'https://pssdmcfjxsfhxoaadtvx.supabase.co'
const VITE_SUPABASE_ANON_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzc2RtY2ZqeHNmaHhvYWFkdHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3NDA5MjYsImV4cCI6MjAxNjMxNjkyNn0.Gdyl5mzRnvhm064wk5Gzo-bvsd1eC0O1Q-ilULCXsKI'

const supabaseUrl: string = VITE_SUPABASE_URL//import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey: string = VITE_SUPABASE_ANON_KEY//import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)