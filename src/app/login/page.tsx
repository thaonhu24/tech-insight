"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/authSlice";
import { loginApi } from "@/features/auth/auth.service";

type LoginForm = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    try {
      const result = await loginApi(data);

      localStorage.setItem("token", result.accessToken);

      dispatch(
        login({
          user: result,
          token: result.accessToken,
        }),
      );

      router.push("/");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[350px] border p-6 rounded"
      >
        <h1 className="text-xl font-semibold mb-4">Login</h1>

        <div className="mb-4">
          <input
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white py-2 rounded"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
