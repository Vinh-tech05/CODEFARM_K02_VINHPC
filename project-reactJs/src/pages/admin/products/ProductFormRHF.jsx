import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProduct, updateProduct } from "../../../api/apiProducts";
import api from "../../../api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const ProductFormRHF = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const productSchema = z.object({
    title: z
      .string({ message: "Title phai la string" })
      .min(6, { message: "Title toi thieu 6 ky tu" }),
    price: z
      .number({ message: "Price la bat buoc va phai la so" })
      .min(0, { message: "Price la 1 so khong am" }),
    description: z.string().optional(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: { title: "", price: 0, description: "" },
  });
  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const res = await api.get(`/products/${id}`);
        const payload = res.data?.data ?? res.data ?? res;
        const ready = {
          title: payload.title ?? "",
          price: Number(payload.price ?? 0),
          description: payload.description ?? "",
        };
        reset(ready);
      } catch (err) {
        toast.error("Không tải được sản phẩm");
      }
    })();
  }, [id, reset]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      if (id) {
        await updateProduct(id, data);
        toast.success("OK");
      } else {
        await createProduct(data);
        toast.success("Thêm OK");
        reset();
      }
      navigate("/admin/products");
    } catch (error) {
      toast.error("Lỗi rồi");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    reset({ title: "", price: 0, description: "" });
  };

  return (
    <div>
      <h2>{id ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="title" {...register("title")} />
          {errors.title && (
            <div style={{ color: "red" }}>{errors.title.message}</div>
          )}
        </div>

        <div>
          <input
            type="number"
            placeholder="price"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price && (
            <div style={{ color: "red" }}>{errors.price.message}</div>
          )}
        </div>

        <div>
          <textarea placeholder="description" {...register("description")} />
        </div>

        <div style={{ marginTop: 12 }}>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" disabled={loading} style={{ marginLeft: 8 }}>
            {loading ? "Processing..." : id ? "Cập nhật" : "Thêm"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/products")}
            style={{ marginLeft: 8 }}
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductFormRHF;
