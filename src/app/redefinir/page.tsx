"use client";

import { useState } from "react";
import Link from "next/link";

export default function Redefinir() {
  const [email, setEmail] = useState("");

  const [textEmail, setTextEmail] = useState("hidden");

  const emailDefault = "admin@gmail.com";

  function handleEnter() {
    if (email === "") {
      alert("Preencha o e-mail");
      return;
    }

    if (email !== emailDefault) {
      alert("E-mail incorreto");
      setTextEmail("block");
      return;
    }

    alert("E-mail enviado com sucesso");
  }

  return (
    <div className="bg-slate-100 w-screen h-screen flex items-center justify-center">
      <div className="w-1/5 h-1/2 flex flex-col items-center gap-4">
        <img src="./image/logo2.svg" alt="Logo Kiwify" className="w-40" />

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-extrabold text-center w-screen mb-1">
            Redefinir a senha
          </h2>

          <h1 className="text-center">
            Você receberá um e-mail com instruções para redefinir a senha
          </h1>
        </div>

        <div className="bg-white rounded-md h-40 flex flex-col items-center border-2">
          <form className=" flex flex-col w-80 m-4 gap-1">
            <label htmlFor="email" className="text-sm font-semibold">
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
              E-mail não existe
            </p>
          </form>

          <Link href="/">
            <button
              onClick={handleEnter}
              className="bg-blue-700 w-80 h-10 text-white text-sm rounded-md font-semibold cursor-pointer"
            >
              Redefinir senha
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
