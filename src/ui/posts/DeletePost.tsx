"use client";

import PostsService from "@/services/posts.services";
import { Button, Dialog, DialogPanel } from "@tremor/react";
import { useRouter } from "next/navigation";
import React from "react";

function DeletePost({ postId }: any) {
  const route = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleDelete = async () => {
    const deletePost = await PostsService.deletePost(postId);
    setIsOpen(false);
    console.log(deletePost);
    route.push("/");
  };
  return (
    <>
      <Button
        className="border-none bg-red-600 hover:bg-red-400 block"
        onClick={() => setIsOpen(true)}
      >
        Delete
      </Button>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <h3 className="text-center text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Are you sure to Delete Post
          </h3>
          <div className="w-full flex justify-center mx-auto gap-8">
            <Button className="mt-8 w-16" onClick={handleDelete}>
              Ok
            </Button>

            <Button
              className="mt-8 w-24 bg-white text-black-500 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
export default DeletePost;
