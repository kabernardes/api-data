import { usePosts } from '../hooks/usePosts';

const PostsContainer = () => {
  const { data, isLoading, error, refetch } = usePosts();

  console.log('PostsContainer data:', data);

  // criar componentes padrão para caso de erro e de loading
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
