import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import type { Post } from '../types/Post';
import { BASE_URL } from '../config';


const PostsContainer = () => {
  // isolar camada de axios / react query Lucas
  const fetchPosts = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>(
      `${BASE_URL}/posts`
    );
    return response.data;
  };

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error message: {error.message}</p>;

  // refatorar o código dentro do map Nehama
  return (
    <div>
      <div>
        <h1>Posts</h1>
        <button onClick={() => refetch()}>Refetch</button>
        <ul>
          {data?.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostsContainer;
