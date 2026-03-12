"use client";

import { useAppSelector } from "@/store/hooks";
import { redirect } from "next/navigation";

export default function CreatePost() {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);

  if (!isAuth) {
    redirect("/login");
  }

  return <div>Create Post</div>;
}
