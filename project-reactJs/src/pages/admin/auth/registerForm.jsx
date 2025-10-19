import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = z
  .object({
    name: z.string().min(2, "Tên tối thiểu 2 ký tự"),
    email: z.string().email("Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
    confirmPassword: z.string().min(6, "Xác nhận mật khẩu"),
  })
  .refine((value) => value.password === value.confirmPassword, {
    path: ["confirmPassword"],
    message: "Mật khẩu không khớp",
  });

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      await api.post("/auth/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      toast.success("Đăng ký OK");
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
    <div style={{ maxWidth: 420, margin: "0 auto" }}>
      <h2>Đăng ký</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: 8 }}>
          <input placeholder="Họ và tên" {...register("name")} />
          {errors.name && (
            <div style={{ color: "red" }}>{errors.name.message}</div>
          )}
        </div>

        <div style={{ marginBottom: 8 }}>
          <input placeholder="Email" {...register("email")} />
          {errors.email && (
            <div style={{ color: "red" }}>{errors.email.message}</div>
          )}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label htmlFor="">Giới Tính: </label>
          <select>
            <option value="0">Nam</option>
            <option value="1">Nữ</option>
            <option value="2">Khác</option>
          </select>
        </div>

        <div style={{ marginBottom: 8 }}>
          <input
            type="password"
            placeholder="Mật khẩu"
            {...register("password")}
          />
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password.message}</div>
          )}
        </div>

        <div style={{ marginBottom: 8 }}>
          <input
            type="password"
            placeholder="Xác nhận mật khẩu"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <div style={{ color: "red" }}>{errors.confirmPassword.message}</div>
          )}
        </div>
        <div style={{ marginBottom: 8 }}>
          <input
            type="checkbox"
            placeholder="checbox"
            {...register("checbox")}
          />
          {errors.checbox && (
            <div style={{ color: "red" }}>{errors.checbox.message}</div>
          )}
        </div>

        <div style={{ marginTop: 12 }}>
          <button type="reset">Reset</button>
          <button type="submit" disabled={loading} style={{ marginLeft: 8 }}>
            Đăng Ký
          </button>
          <button
            type="button"
            onClick={() => navigate("/auth/login")}
            style={{ marginLeft: 8 }}
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
