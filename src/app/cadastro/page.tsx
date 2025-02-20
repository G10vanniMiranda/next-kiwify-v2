"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Cadastro() {
  const url = "http://localhost:8080/users";

  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [pais, setPais] = useState("");

  const [textConfirmEmail, setTextConfirmEmail] = useState("hidden");
  const [textConfirmPassword, setTextConfirmPassword] = useState("hidden");

  const [btnEntrar, setBtnEntrar] = useState("bg-blue-700");

  /**  0. Validações
   *   1. Verificar se o e-mail é válido
   *   2. regex para o campo email
   *   3. regex para o campo password
   */

  /** users
   *  id,
   *  name,
   *  email,
   *  password,
   */

  function handleValidar(envent: any) {
    envent.preventDefault();

    if (email === "") {
      alert("Preencha o campo e-mail");
      setBtnEntrar("bg-red-700");
      return;
    }

    if (email !== confirmEmail) {
      setBtnEntrar("bg-red-700");
      setTextConfirmEmail("block");
      return;
    }
    if (password === "") {
      alert("Preencha a senha");
      setBtnEntrar("bg-red-700");
      return;
    }
    if (password !== confirmPassword) {
      setBtnEntrar("bg-red-700");
      setTextConfirmPassword("block");
      return;
    }

    handleInserir();
  }

  function handleInserir() {
    /** inserir o usuário */
    axios.post(url, {
      email,
      password,
    });

    alert("Cadastro realizado com sucesso");

    /** limpar os campos */
    setEmail("");
    setConfirmEmail("");
    setPassword("");
    setConfirmPassword("");
  }
  return (
    <div className="bg-slate-100 h-full flex items-center justify-center">
      <div className="h-full flex flex-col items-center justify-center gap-4">
        <Image
          src="/image/logo.png"
          alt="Logo Save Cred"
          width={200}
          height={100}
        />

        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-extrabold">Criar nova conta</h2>

          <div className="flex gap-1">
            <h1>Ou</h1>
            <Link href="/">
              <p className="text-blue-700 font-semibold cursor-pointer">
                entrar na sua conta existente
              </p>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-md h-[598px] w-96 flex flex-col items-center gap-4 border-2">
          <form className=" flex flex-col w-96 m-4 h-[350px] gap-2 p-5">
            <div className="row">
              <label htmlFor="email" className="text-sm font-semibold">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border-2 rounded-md mb-3 p-2 outline-none"
              />
            </div>

            <div className="row">
              <label htmlFor="email" className="text-sm font-semibold">
                Repetir e-mail
              </label>
              <input
                type="email"
                name="email"
                value={confirmEmail}
                onChange={(event) => setConfirmEmail(event.target.value)}
                className="w-full border-2 rounded-md mb-3 p-2 outline-none"
              />
              <p className={`mb-3 text-red-600 ${textConfirmEmail}`}>
                E-mail incorreto
              </p>
            </div>

            <div className="row">
              <label htmlFor="password" className="text-sm font-semibold">
                Senha
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full border-2 rounded-md mb-3 p-2 outline-none"
              />
            </div>

            <div className="row">
              <label htmlFor="password" className="text-sm font-semibold">
                Confirme sua senha
              </label>
              <input
                type="password"
                name="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="w-full border-2 rounded-md mb-3 p-2 outline-none"
              />
              <p className={`mb-3 text-red-600 ${textConfirmPassword}`}>
                Senha incorreta
              </p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-semibold">
                Pais
              </label>

              <select
                value={pais}
                onChange={(event) => setPais(event.target.value)}
                className="border-2 p-2 rounded-md mb-3 outline-none"
              >
                <option>Brasil</option>
                <option>Estados Unidos</option>
                <option>Japão</option>
              </select>
            </div>

            <div className="flex gap-2 items-start justify-center">
              <input className="" type="checkbox" />
              <label className="text-xs mb-3 font-semibold">
                {" "}
                Eu li e aceito os
                <Link
                  href="https://kiwify.com.br/termos-de-uso/"
                  className="border-b-2 pl-2"
                >
                  termos de uso
                </Link>
                ,
                <Link
                  href="https://kiwify.com.br/licenca-de-uso-software/"
                  className="border-b-2 pr-2 pl-2"
                >
                  termos de licença de uso de software
                </Link>
                ,
                <Link
                  href="https://kiwify.com.br/politica-de-conteudo/"
                  className="border-b-2 pr-2 pl-2"
                >
                  política de conteúdo
                </Link>{" "}
                da Kiwify
              </label>
            </div>

            <button
              onClick={handleValidar}
              className={`${btnEntrar} p-2 w-auto mb-5 text-white text-md rounded-md font-semibold cursor-pointer"
              `}
            >
              Criar conta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
