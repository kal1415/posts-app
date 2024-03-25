'use client'
import PostsService from '@/services/posts.services';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import CreatePostDialog from './CreatePostDialog';

const CreatePost = ({ userId }: { userId: number }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const newPost = { title, body, userId };

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          rows={4}
          required
        ></textarea>
      </div>
      <div>
        {/* <button 
        type="submit" className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Submit
        </button> */}
        <CreatePostDialog newPost = {newPost}/>
      </div>
    </form>
  );
};

export default CreatePost;
