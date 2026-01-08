import { useAppDispatch, useAppSelector } from "../hook/hooks";
import { login } from "../slice/authSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../schema/signInSchema";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface SignInFormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormValues) => {
    dispatch(login(data));
    reset();
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex items-center justify-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="w-full max-w-md bg-white p-10 rounded-xl shadow-lg space-y-5 mt-20 mb-20"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Sign In
          </h2>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="admin@gmail.com"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
                ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="123456"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
                ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold
            hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>

          <p
            onClick={() => navigate("/forgot-password")}
            className="text-sm text-center text-blue-600 hover:underline cursor-pointer"
          >
            Forgot Password?
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
