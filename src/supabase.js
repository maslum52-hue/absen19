const url = import.meta.env.VITE_SUPABASE_URL?.trim();
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim();

export const supabaseConfig = { url, key, configured: Boolean(url && key) };

export async function checkSupabaseConnection() {
  if (!supabaseConfig.configured) return { connected: false, message: 'Konfigurasi Supabase belum diisi' };
  try {
    const response = await fetch(`${url.replace(/\/$/, '')}/auth/v1/health`, {
      headers: { apikey: key },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return { connected: false, message: `Supabase merespons HTTP ${response.status}` };
    return { connected: true, message: 'Terhubung ke proyek Supabase' };
  } catch {
    return { connected: false, message: 'Supabase tidak dapat dijangkau' };
  }
}
