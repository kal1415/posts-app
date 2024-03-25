import { API } from "@/constants/api.endpoints";
import PostsService from "@/services/posts.services";
import Comments from "@/ui/posts/Comments";
import DeletePost from "@/ui/posts/DeletePost";
import PostsGrid from "@/ui/posts/PostsGrid";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home({
  params: { postId },
}: {
  params: { postId: number };
}) {
  const session = await getServerSession();

  if (!session?.user) return redirect(API.USER.SIGN_IN);

  const { data: post } = await PostsService.getPostById(postId);

  return (
    <div className="py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl">{post?.title}</h1>
        <DeletePost postId={postId} />
      </div>
      <p className="text-muted">{post?.body}</p>

      <Comments postId={postId} />
    </div>
  );
}
