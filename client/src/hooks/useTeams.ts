import { useState, useEffect } from 'react';
import axiosInstance from '../api/axios';
import { Team } from '../types';

interface UseTeamsReturn {
  teams: Team[];
  isLoading: boolean;
  error: string | null;
}

const useTeams = (): UseTeamsReturn => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get<Team[]>('/teams');
        setTeams(data);
      } catch (err) {
        setError('Failed to load teams. Please try again.');
        console.error(err);
      } finally {
        // This runs WHETHER the request succeeded or failed
        setIsLoading(false);
      }
    };

    fetchTeams();
  }, []); // Empty dependency array = run once on mount

  return { teams, isLoading, error };
};

export default useTeams;