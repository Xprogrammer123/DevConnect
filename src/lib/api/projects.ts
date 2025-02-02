import { supabase } from '../supabase';

export const createProject = async (projectData: {
  title: string;
  description: string;
  budgetMin: number;
  budgetMax: number;
  deadline: Date;
  skills: string[];
}) => {
  const { data: project, error: projectError } = await supabase
    .from('projects')
    .insert([{
      title: projectData.title,
      description: projectData.description,
      budget_min: projectData.budgetMin,
      budget_max: projectData.budgetMax,
      deadline: projectData.deadline.toISOString(),
      client_id: (await supabase.auth.getUser()).data.user?.id,
    }])
    .select()
    .single();

  if (projectError) throw projectError;

  // Add project skills
  if (projectData.skills.length > 0) {
    const skillsData = projectData.skills.map(skill => ({
      project_id: project.id,
      skill_name: skill,
    }));

    const { error: skillsError } = await supabase
      .from('project_skills')
      .insert(skillsData);

    if (skillsError) throw skillsError;
  }

  return project;
};

export const getProjects = async (filters?: {
  status?: string;
  skills?: string[];
  budgetMin?: number;
  budgetMax?: number;
}) => {
  let query = supabase
    .from('projects')
    .select(`
      *,
      client:users!client_id(*),
      skills:project_skills(skill_name)
    `);

  if (filters?.status) {
    query = query.eq('status', filters.status);
  }

  if (filters?.budgetMin) {
    query = query.gte('budget_min', filters.budgetMin);
  }

  if (filters?.budgetMax) {
    query = query.lte('budget_max', filters.budgetMax);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
};