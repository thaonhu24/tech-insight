"use client";

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/authSlice";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = () => {
    dispatch(
      login({
        id: 1,
        name: "Demo User",
        email: "demo@email.com",
      }),
    );

    router.push("/");
  };

  return (
    <div className="p-10">
      <h1 className="text-xl mb-4">Login</h1>

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login Demo
      </button>
    </div>
  );
}
