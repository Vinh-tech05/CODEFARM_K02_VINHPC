import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api";

const schema = z
  .object({
    userName: z
      .string()
      .min(3, "Tên tối thiểu 3 ký tự")
      .max(30, "Tên tối đa 30 ký tự"),
    email: z.string().email("Email không hợp lệ"),
    password: z
      .string()
      .min(7, "Mật khẩu tối thiểu 7 ký tự")
      .max(20, "Mật khẩu tối đa 20 ký tự"),
    confirmPassword: z.string().min(1, "Vui lòng xác nhận mật khẩu"),
    agreeToTerms: z.literal(true, {
      errorMap: () => ({ message: "Bạn phải đồng ý với điều khoản" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

const FormRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const agreeToTerms = watch("agreeToTerms");

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      await api.post("/auth/register", {
        userName: values.userName,
        email: values.email,
        password: values.password,
      });

      toast.success("Đăng ký thành công");
      reset();
      navigate("/auth/login");
    } catch (err) {
      const message = err?.response?.data?.message || "Đăng ký thất bại";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          placeholder="Họ và tên"
          {...register("userName")}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        {errors.userName && (
          <p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>
        )}
      </div>

      <div>
        <input
          placeholder="Email"
          type="email"
          {...register("email")}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Mật khẩu"
          {...register("password")}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Xác nhận mật khẩu"
          {...register("confirmPassword")}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          {...register("agreeToTerms")}
          className="mr-2 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        <label className="text-sm text-gray-600">
          Tôi đồng ý với{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            điều khoản sử dụng
          </a>
        </label>
      </div>
      {errors.agreeToTerms && (
        <p className="text-red-500 text-sm mt-1">
          {errors.agreeToTerms.message}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || !agreeToTerms}
        className={`w-full py-2 rounded-xl text-white transition-all ${
          loading || !agreeToTerms
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90"
        }`}
      >
        {loading ? "Đang đăng ký..." : "Đăng ký"}
      </button>

      <p className="text-sm text-center text-gray-500">
        Đã có tài khoản?{" "}
        <Link
          to="/auth/login"
          className="text-indigo-600 font-semibold hover:underline"
        >
          Đăng nhập
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
