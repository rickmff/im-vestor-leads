import { createClient } from "@supabase/supabase-js";
import { env } from "@/env";

/**
 * Supabase client configured with the publishable key (safe for the browser).
 *
 * Auth is handled by Clerk, so this client is used for Storage, Edge
 * Functions, and Data API access only — not for Supabase Auth sessions.
 *
 * For privileged server-only work (bypassing RLS) create a separate client
 * with the secret key; never import that into client components.
 */
export const supabase = createClient(
	env.NEXT_PUBLIC_SUPABASE_URL,
	env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
);
