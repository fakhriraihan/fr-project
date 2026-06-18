import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Only create a real client if the URL is configured properly
const isValidUrl = supabaseUrl.startsWith("http");

export const supabase = isValidUrl
  ? createClient(supabaseUrl, supabaseAnonKey)
  : ({
      from: () => ({
        insert: async () => ({
          error: new Error("Supabase is not configured yet. Please update .env.local"),
        }),
      }),
    } as any);
