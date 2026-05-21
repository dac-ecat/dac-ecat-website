import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

export async function joinWaitlist(email: string): Promise<{ error: string | null }> {
  if (!supabase) {
    // Supabase not configured yet — stub succeeds locally
    console.log('[waitlist] signup (Supabase not configured):', email)
    return { error: null }
  }
  const { error } = await supabase.from('waitlist').insert({ email })
  return { error: error?.message ?? null }
}
