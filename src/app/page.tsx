import { API } from "@/constants/api.endpoints";
import PostsService from '@/services/posts.services'
import PostsGrid from "@/ui/posts/PostsGrid";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  if (!session?.user) return redirect(API.USER.SIGN_IN);

  const { data: posts } = await PostsService.getAllPosts();

  return <div className="py-10">
    <PostsGrid posts={posts} />
  </div>
}
