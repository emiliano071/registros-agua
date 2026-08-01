// ============================================================
// CONFIGURACIÓN — edita estos valores
// ============================================================
window.AGUA_CONFIG = {
  // Los sacas en Supabase → Project Settings → API
  SUPABASE_URL: "https://vzecslpqexoituxabwnr.supabase.co", // ej: https://abcxyz.supabase.co
  SUPABASE_ANON_KEY: "sb_publishable_ls2LBG3Y7thDGET9rFBwsQ_tjIARq2v",

  // Debe ser EXACTAMENTE el mismo valor que pusiste en la función
  // log_water() dentro de supabase_setup.sql (v_secret).
  // Ya viene generado con uno seguro — puedes dejarlo así.
  SECRET_TOKEN: "TBGpo6B7_KkNZFNN7BkLdJz9a8_Gs9lW",

  // Tu meta diaria
  DAILY_GOAL_GLASSES: 8,
  GLASS_ML: 250,
};
