import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { Modal }from '../components/Home/modal/Modal'

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string, userType: 'client' | 'developer') => Promise<void>;
  signOut: () => Promise<void>;
  error: string | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, fullName: string, userType: 'client' | 'developer') => {
    try {
      setError(null);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName, user_type: userType },
        },
      });

      if (error) throw error;

      // Store user profile in database
      if (data.user) {
        const { error: profileError } = await supabase
          .from('users')
          .insert([{ id: data.user.id, email, full_name: fullName, user_type: userType }]);

        if (profileError) throw profileError;
      }

      // Fetch updated user info
      const { data: updatedUser } = await supabase.auth.getUser();
      setUser(updatedUser.user);

      navigate('/'); // Redirect to homepage with updated header
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred during sign up');
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setError(null);
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) throw error;

      // Fetch updated user info
      const { data: updatedUser } = await supabase.auth.getUser();
      setUser(updatedUser.user);

      navigate('/'); // Redirect to homepage with updated header
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Invalid login credentials');
    }
  };

  const signOut = async () => {
    try {
      setError(null);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      setUser(null);
      navigate("/"); // Redirect to homepage after logout
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error signing out");
    }
  };


  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, error }}>
      {children}


      <Modal
        open={logoutModalOpen}
        onClose={() => setLogoutModalOpen(false)}
        onConfirm={() => {
          setLogoutModalOpen(false);
          signOut();
        }}
      />
    </AuthContext.Provider>

  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
