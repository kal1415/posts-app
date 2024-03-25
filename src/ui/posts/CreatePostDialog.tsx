"use client";
import PostsService from "@/services/posts.services";
import { Button, Dialog, DialogPanel } from "@tremor/react";
import { routeModule } from "next/dist/build/templates/app-page";
import { useRouter } from "next/navigation";
import React from "react";

export default function CreatePostDialog({ newPost }: any) {
  const route = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleNewPost = async () => {
    const createPost = await PostsService.createPost(newPost);
    setIsOpen(false);
    route.push("/");
  };
  return (
    <>
      <Button className="mx-auto block" onClick={() => setIsOpen(true)}>
        Submit
      </Button>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Post Created Successfully
          </h3>
          <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Your Post has been created successfully. For more information,
            please contact us.
          </p>
          <Button className="mt-8 w-full" onClick={handleNewPost}>
            Got it!
          </Button>
        </DialogPanel>
      </Dialog>
    </>
  );
}
