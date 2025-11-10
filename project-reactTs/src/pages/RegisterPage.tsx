import { type SubmitHandler, useForm } from "react-hook-form";
import api from "../api";

type IFormInput = {
  email: string;
  password: string;
};

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const res = await api.post("/register", data);
      console.log(res);
      alert("Đăng ký thành công");
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

export default RegisterPage;
