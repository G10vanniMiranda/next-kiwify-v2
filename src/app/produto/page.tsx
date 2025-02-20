"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Product() {
  const url = "http://localhost:8080/product";
  const [name, setName] = useState("");
  const [btnEntrar, setBtnEntrar] = useState("bg-blue-700");

  const [data, setData] = useState([]);

  /** Carregar dados do banco */
  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, [data, setData]);

  function handleValidar(e: any) {
    e.preventDefault();

    if (name === "") {
      alert("Preencha o campo produto");
      setBtnEntrar("bg-red-700");
      return;
    }

    handleInserir();
  }

  function handleInserir() {
    /** inserir o usuário */
    axios.post(url, {
      name,
    });

    alert("Produto cadastrado com sucesso");

    /** limpar os campos */
    setName("");
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
          <h2 className="text-3xl font-extrabold text-center">
            Adicionar um novo
            <br /> Produto
          </h2>
        </div>

        <div className="bg-white rounded-md h-[598px] w-96 flex flex-col items-center gap-4 border-2">
          <form className=" flex flex-col w-96 m-4 h-[350px] gap-2 p-5">
            <div className="row">
              <label htmlFor="product" className="text-sm font-semibold">
                Produto
              </label>
              <input
                type="email"
                name="email"
                id="product"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full border-2 rounded-md mb-3 p-2 outline-none"
              />
            </div>

            <button
              onClick={handleValidar}
              className={`${btnEntrar} p-2 w-auto mb-5 text-white text-md rounded-md font-semibold cursor-pointer"
              `}
            >
              Adicionar
            </button>
          </form>

          {data.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
