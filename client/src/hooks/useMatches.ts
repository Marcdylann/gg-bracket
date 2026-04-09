import { useState, useEffect } from 'react';
import axiosInstance from '../api/axios';
import { Match } from '../types';

interface UseMatchesReturn {
  matches: Match[];
  isLoading: boolean;
  error: string | null;
}

const useMatches = (): UseMatchesReturn => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get<Match[]>('/matches');
        setMatches(data);
      } catch (err) {
        setError('Failed to load matches. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return { matches, isLoading, error };
};

export default useMatches;