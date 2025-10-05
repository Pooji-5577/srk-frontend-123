/**
 * Supabase Admin/Test Page
 * 
 * This page allows you to test and manage your Supabase Storage connection.
 * Access at: http://localhost:3000/admin/supabase
 * 
 * SECURITY NOTE: In production, protect this route with authentication!
 */

import SupabaseAdminPanel from '@/components/SupabaseAdminPanel';

export default function SupabaseAdminPage() {
  return <SupabaseAdminPanel />;
}
