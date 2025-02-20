"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [textEmail, setTextEmail] = useState("hidden");
  const [textPassword, setTextPassword] = useState("hidden");

  const [btnEntrar, setBtnEntrar] = useState("bg-blue-700");
  const [btnContainer, setContainer] = useState("bg-slate-100");

  const emailDefault = "admin@gmail.com";
  const passwordDefault = "123456";

  function handleEnter() {
    if (email === "") {
      alert("Preencha o e-mail");
      setTextEmail("block");
      setBtnEntrar("bg-red-700");
      setContainer("bg-red-400");
      return;
    }

    if (password === "") {
      alert("Preencha a senha");
      setTextPassword("block");
      setBtnEntrar("bg-red-700");
      setContainer("bg-red-400");
      return;
    }

    if (email !== emailDefault) {
      alert("E-mail incorreto, preencha");
      setTextEmail("block");
      setBtnEntrar("bg-red-700");
      setContainer("bg-red-400");
      return;
    }

    if (password !== passwordDefault) {
      alert("Password incorreto, preencha");
      setTextPassword("block");
      setBtnEntrar("bg-red-700");
      setContainer("bg-red-400");
      return;
    }

    setTextEmail("hidden");
    setTextPassword("hidden");
    setBtnEntrar("bg-blue-700");
    setContainer("bg-slate-100");
    alert("Seja bem vindo " + email);
  }
  return (
    <div
      className={`${btnContainer} w-screen h-screen flex pt-20 justify-center`}
    >
      <div className="w-1/5 h-1/2 flex flex-col items-center gap-4">
        <Image
          src="./image/logo2.svg"
          alt="Logo Kiwify"
          width={300}
          height={100}
        />

        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-center font-extrabold bg-red w-screen p-10">
            Entrar na sua conta
          </h2>

          <div className="flex gap-1">
            <h1>Ou</h1>
            <Link href="/cadastro">
              <p className="text-blue-700 font-semibold cursor-pointer">
                fazer cadastro
              </p>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-md h-auto flex flex-col items-center gap-4">
          <form className=" flex flex-col gap-5 w-80 m-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-md font-semibold">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-80 border-2 p-2 rounded-md outline-none"
              />
              <p className={`mb-3 text-red-600 ${textEmail}`}>
                Precisa preencher o campo e-mail
              </p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-md font-semibold">
                Senha
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-80 border-2 rounded-md p-2 outline-none"
              />
              <p className={`mb-3 text-red-600 ${textPassword}`}>
                Precisa preencher o campo senha
              </p>
            </div>

            <Link href="/redefinir">
              <p className="text-right text-blue-700 font-semibold cursor-pointer">
                Esqueceu sua senha?
              </p>
            </Link>
          </form>

          <button
            onClick={handleEnter}
            className={`${btnEntrar} p-2 w-80 mb-5 text-white text-md rounded-md font-semibold cursor-pointer"
          `}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
