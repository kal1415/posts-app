import { API } from "@/constants/api.endpoints";
import CreatePost from "@/ui/posts/CreatePost";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  if (!session?.user) return redirect(API.USER.SIGN_IN);


  return <div className="py-10">
    <CreatePost userId={1} />
  </div>
}
