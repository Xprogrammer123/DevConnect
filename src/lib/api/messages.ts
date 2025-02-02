import { supabase } from '../supabase';

export const sendMessage = async (receiverId: string, content: string) => {
  const { data, error } = await supabase
    .from('messages')
    .insert([{
      receiver_id: receiverId,
      content,
      sender_id: (await supabase.auth.getUser()).data.user?.id,
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getMessages = async (otherUserId: string) => {
  const userId = (await supabase.auth.getUser()).data.user?.id;
  
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .or(`sender_id.eq.${userId},receiver_id.eq.${userId}`)
    .or(`sender_id.eq.${otherUserId},receiver_id.eq.${otherUserId}`)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data;
};

export const markMessageAsRead = async (messageId: string) => {
  const { error } = await supabase
    .from('messages')
    .update({ is_read: true })
    .eq('id', messageId);

  if (error) throw error;
};