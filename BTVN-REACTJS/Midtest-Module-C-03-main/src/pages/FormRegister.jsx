import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import z from "zod";
import api from "../api/index";
import { toast } from "react-toastify";

const schema = z.object({
  email: z.string().email("Vui lòng nhập đúng định dang email"),
  username: z
    .string()
    .min(6, "Fullname không được bỏ trống và tối thiểu 6 ký tự"),
  password: z.string().min(6, "Mật Khẩu tối thiểu phải có 6 ký tự"),
});

const FormRegister = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const nav = useNavigate();

  const onSubmit = async (data) => {
    try {
      await api.post("/users", { ...data, role: "member" });
      toast.success("Đăng ký thành công");
      nav("/auth/login");
    } catch (err) {
      console.log(err);
      alert(err.response.data);
      reset();
    }
  };
  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center">Đăng Ký </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="email"
              {...register("email", { required: true })}
              className="form-control"
            />
            {errors.email && (
              <span className="text-danger">{errors.email.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Fullname
            </label>
            <input
              type="text"
              placeholder="username"
              {...register("username", { required: true })}
              className="form-control"
            />
            {errors.username && (
              <span className="text-danger">{errors.username.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
              className="form-control"
            />
            {errors.password && (
              <span className="text-danger">{errors.password.message}</span>
            )}
          </div>

          <div className="mb-3">
            <button className="w-100 btn btn-primary">Đăng Ký</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormRegister;
