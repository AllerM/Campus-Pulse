// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase API URL and anon key
const SUPABASE_URL = 'https://zkohwyuoyytlhngheauu.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inprb2h3eXVveXl0bGhuZ2hlYXV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNjg2NDUsImV4cCI6MjA0Njc0NDY0NX0.YkRkfIshStb0A-qCkRcsnZN2UhJLnNy6t-6scAF1dYA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);