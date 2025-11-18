import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/index.js";

const schema = z.object({
  email: z.string().email("Email không hợp lệ").nonempty("Vui lòng nhập email"),
  password: z
    .string()
    .min(7, "Mật khẩu tối thiểu 7 ký tự")
    .max(20, "Mật khẩu tối đa 20 ký tự")
    .nonempty("Vui lòng nhập mật khẩu"),
  remember: z.boolean().optional(),
});

type FormLoginValues = z.infer<typeof schema>;

const FormLogin: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (values: FormLoginValues) => {
    try {
      setLoading(true);

      const res = await api.post("/auth/login", {
        email: values.email,
        password: values.password,
      });

      const token = res?.data?.data?.accessToken;
      if (!token) throw new Error("Token không hợp lệ");

      if (values.remember) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }

      toast.success("Đăng nhập thành công");
      navigate("/todos");
    } catch (err: any) {
      const msg = err?.response?.data?.message || "Sai thông tin đăng nhập";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-center mb-2 text-indigo-600">
        Đăng nhập tài khoản
      </h2>

      <div>
        <input
          type="email"
          placeholder="Email"
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

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-gray-600">
          <input
            type="checkbox"
            {...register("remember")}
            className="accent-indigo-600"
          />
          Ghi nhớ đăng nhập
        </label>
        <Link to="#" className="text-indigo-600 hover:underline">
          Quên mật khẩu?
        </Link>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:opacity-90 transition-all"
      >
        {loading ? "Đang đăng nhập..." : "Đăng nhập"}
      </button>

      <p className="text-sm text-center text-gray-500">
        Chưa có tài khoản?{" "}
        <Link
          to="/auth/register"
          className="text-indigo-600 font-semibold hover:underline"
        >
          Đăng ký ngay
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
