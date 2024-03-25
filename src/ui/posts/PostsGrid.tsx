'use client';
import PostsService, { Post } from '@/services/posts.services'
import Link from 'next/link'
import React from 'react'

type Props = {
  posts: Post[]
}

function PostsGrid({ posts = [] }: Props) {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {posts.map((post) => (
        <Link href={`post/${post.id}`} key={post.id} className="border rounded-lg p-4 shadow-lg">
          <h2 className="font-bold text-lg mb-2">{post.title}</h2>
          <p className="text-gray-700 text-base">{post.body}</p>
        </Link>
      ))}
    </div>
  )
}

export default PostsGrid