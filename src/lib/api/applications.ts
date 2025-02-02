import { supabase } from '../supabase';

export const applyToProject = async (projectId: string, coverLetter: string) => {
  const { data, error } = await supabase
    .from('project_applications')
    .insert([{
      project_id: projectId,
      cover_letter: coverLetter,
      developer_id: (await supabase.auth.getUser()).data.user?.id,
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getApplications = async (projectId?: string) => {
  let query = supabase
    .from('project_applications')
    .select(`
      *,
      developer:users!developer_id(*),
      project:projects(*)
    `);

  if (projectId) {
    query = query.eq('project_id', projectId);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
};

export const updateApplicationStatus = async (applicationId: string, status: 'accepted' | 'rejected') => {
  const { data, error } = await supabase
    .from('project_applications')
    .update({ status })
    .eq('id', applicationId)
    .select()
    .single();

  if (error) throw error;
  return data;
};