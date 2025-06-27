import axios from 'axios';
import type { Post } from '../types/Post';
import { BASE_URL } from '../config';

export const fetchPosts = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>(
      `${BASE_URL}/posts`
    );
    return response.data;
  };
