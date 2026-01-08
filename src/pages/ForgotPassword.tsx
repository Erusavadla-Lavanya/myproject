import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hook/hooks";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../schema/signInSchema";
import { login } from "../slice/authSlice";

interface SignInFormValues {
  email: string;
  password: string;
}

const ForgotPassword = () => {
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

  const onSubmit = async (data: SignInFormValues) => {
    await dispatch(login(data));
    reset();
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="
          w-full max-w-md bg-white rounded-xl
          p-6 sm:p-8
          space-y-5
          shadow-md
        "
      >
        <h1 className="text-center text-lg sm:text-xl font-semibold">
          Forgot Password
        </h1>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className={`w-full p-2 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter new password"
            {...register("password")}
            className={`w-full p-2 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full py-2.5
            bg-violet-600 text-white
            rounded-lg font-medium
            hover:bg-violet-700
            transition
            disabled:opacity-60
          "
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
