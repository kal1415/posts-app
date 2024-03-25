"use client";
import React, { useEffect, useState } from "react";
import PostsService, { Comment } from "@/services/posts.services";

const Comments = ({ postId }: { postId: number }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await PostsService.fetchComments(postId);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white shadow overflow-hidden rounded-md px-4 py-5"
          >
            <div className="mb-2 text-sm font-medium text-gray-900">
              From: {comment.email}
            </div>
            <div className="mb-1 text-sm text-gray-600">
              Name: {comment.name}
            </div>
            <p className="text-sm text-gray-500">Comment: {comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
