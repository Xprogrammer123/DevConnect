import { supabase } from '../supabase';

export const signUp = async (email: string, password: string, fullName: string, userType: 'client' | 'developer') => {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) throw authError;

  // Create user profile
  const { error: profileError } = await supabase
    .from('users')
    .insert([
      {
        id: authData.user?.id,
        email,
        full_name: fullName,
        user_type: userType,
      },
    ]);

  if (profileError) throw profileError;

  return authData;
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};