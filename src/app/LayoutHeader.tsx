"use client";
import Container from "@/ui/Container";
import { Button } from "@tremor/react";
import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

function LayoutHeader() {
  return (
    <header className="bg-slate-200 py-4 border-b border-slate-500 sticky top-0 ">
      <Container className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">Users Post</h1>
        </Link>

        <div className="flex gap-4">
          <Link href="/create">
            <Button>Create Post</Button>
          </Link>
          <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      </Container>
    </header>
  );
}

export default LayoutHeader;
