import { useForm, type SubmitHandler } from "react-hook-form";
import api from "../api";

type IFormInput = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const res = await api.post("/login", data);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", JSON.stringify(res.data.accessToken));
      alert("Đăng nhập thành công");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input {...register("email")} />
        </div>
        <div>
          <label>Password</label>
          <input {...register("password")} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
