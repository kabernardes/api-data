import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../services/postServices';

export const usePosts = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
