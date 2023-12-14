import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://qcvcxgiqocicvwyoltuj.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjdmN4Z2lxb2NpY3Z3eW9sdHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NzAwOTQsImV4cCI6MjAxODA0NjA5NH0.fZtgKrA9fEkSZGAOK0a5yEptawDaPBXF_kwZv2jkMTc"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})