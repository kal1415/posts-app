import axios, { AxiosResponse } from "axios";

export type Post = {
  id?: number;
  title: string;
  body: string;
  userId: number;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

class PostsService {
  private static endpoint = "https://jsonplaceholder.typicode.com/posts";

  // Create a new post
  static async createPost(post: Post): Promise<AxiosResponse<Post>> {
    return axios.post<Post>(this.endpoint, post);
  }

  // Get all posts
  static async getAllPosts(): Promise<AxiosResponse<Post[]>> {
    return axios.get<Post[]>(this.endpoint);
  }

  // Get a single post by ID
  static async getPostById(id: number): Promise<AxiosResponse<Post>> {
    return axios.get<Post>(`${this.endpoint}/${id}`);
  }

  // Update a post by ID
  static async updatePost(
    id: number,
    post: Partial<Post>
  ): Promise<AxiosResponse<Post>> {
    return axios.put<Post>(`${this.endpoint}/${id}`, post);
  }

  // Delete a post by ID
  static async deletePost(id: number): Promise<AxiosResponse<{}>> {
    return axios.delete<{}>(`${this.endpoint}/${id}`);
  }

  // to fetch comments for a specific post
  static async fetchComments(
    postId: number
  ): Promise<AxiosResponse<Comment[]>> {
    return axios.get<Comment[]>(`${this.endpoint}/${postId}/comments`);
  }
}

export default PostsService;
