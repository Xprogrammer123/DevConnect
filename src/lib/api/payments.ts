import { supabase } from '../supabase';

export const createPayment = async (data: {
  projectId: string;
  receiverId: string;
  amount: number;
}) => {
  const { data: payment, error } = await supabase
    .from('payments')
    .insert([{
      project_id: data.projectId,
      receiver_id: data.receiverId,
      amount: data.amount,
      sender_id: (await supabase.auth.getUser()).data.user?.id,
    }])
    .select()
    .single();

  if (error) throw error;
  return payment;
};

export const getPayments = async () => {
  const userId = (await supabase.auth.getUser()).data.user?.id;
  
  const { data, error } = await supabase
    .from('payments')
    .select(`
      *,
      sender:users!sender_id(*),
      receiver:users!receiver_id(*),
      project:projects(*)
    `)
    .or(`sender_id.eq.${userId},receiver_id.eq.${userId}`)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};