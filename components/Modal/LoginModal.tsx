"use client";

import { FcGoogle } from "react-icons/fc";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import toast from "react-hot-toast";

import { ClipLoader } from "react-spinners";

import { signIn } from "next-auth/react";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;
const LoginModal = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  //   const loginUser = async ({ email, password }: FormData) => {
  //     let url = "/api/register";

  //     const requestOptions = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // You can add more headers here if needed
  //       },
  //       body: JSON.stringify({ name, email, password }),
  //     };

  //     setLoading(true);

  //     try {
  //       const res = await fetch(url, requestOptions);

  //       if (!res.ok && res.status === 409) {
  //         toast.error("A user exists with that email");
  //         setLoading(false);
  //         reset();
  //       }

  //       if (!res.ok && res.status !== 409) {
  //         toast.error("something went wrong when signing up!");
  //         setLoading(false);
  //         reset();
  //       }

  //       if (res.ok && res.status === 200) {
  //         toast.success("successfully signed up!");
  //         setLoading(false);
  //         reset();
  //         //   setTimeout(() => {
  //         //     router.push("/auth/login");
  //         //   }, 3050);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("something went wrong when signing up!");
  //       reset();
  //     }
  //   };

  const loginUser = async (data: FormData) => {
    setLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setLoading(false);

      if (callback?.ok) {
        toast.success("successfully signed up!");
        setLoading(false);
        reset();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(loginUser)}>
        <div className="mb-4">
          <input
            placeholder="Email"
            type="email"
            {...register("email")}
            className="border border-slate-500 w-full p-2 rounded-md transition"
          />
          {errors.email?.message && (
            <p className="text-red-800 text-sm">{errors.email?.message}</p>
          )}
        </div>
        <div className="mb-8">
          <input
            placeholder="Password"
            type="password"
            {...register("password")}
            className="border border-slate-500 w-full p-2 rounded-md transition"
          />
          {errors.password?.message && (
            <p className="text-red-800 text-sm">{errors.password?.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-rose-500 w-full rounded-md mb-3 py-2 text-white"
          //@ts-ignore
          onClick={loginUser}
        >
          {loading ? <ClipLoader color="#ffff" size={20} /> : "continue"}
        </button>
      </form>
      <div className="w-full border-t-[1px] border-slate-500 mb-3" />

      <div className="border border-slate-500 w-full rounded-md">
        <div className="flex justify-center items-center p-2 cursor-pointer">
          <FcGoogle />
          <span className="ml-2">Login with Google</span>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
