"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function Product() {
  const url = "http://localhost:8080/product";
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const [btnEntrar, setBtnEntrar] = useState("bg-blue-700");
  const [data, setData] = useState<Product[]>([]);

  /** Carregar dados do banco */
  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, [data, setData]);

  function handleValidar(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (name === "") {
      alert("Preencha o campo produto");
      setBtnEntrar("bg-red-700");
      return;
    }

    if (quantity === "") {
      alert("Preencha o campo quantidade");
      setBtnEntrar("bg-red-700");
      return;
    }

    if (price === "") {
      alert("Preencha o campo preço");
      setBtnEntrar("bg-red-700");
      return;
    }

    handleInserir();
  }

  function handleInserir() {
    /** inserir o usuário */
    axios.post(url, {
      name,
      quantity,
      price,
    });

    alert("Produto cadastrado com sucesso");

    /** limpar os campos */
    setName("");
    setQuantity("");
    setPrice("");
  }

  return (
    <div className="bg-slate-100 h-full flex items-center justify-center w-screen">
      <div className="h-full flex flex-col items-center justify-center gap-4 w-screen px-20">
        <header className=" flex flex-col md:flex-row md:w-full justify-between px-20">
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

          <div className="w-[200px] bg-slate-300"></div>
        </header>

        <div className="bg-white rounded-md h-[598px] w-96 md:w-full flex flex-col md:flex-row items-center gap-4 border-2">
          <div className="flex-1 md:flex items-center justify-center hidden">
            <Image
              alt="Compra"
              width={500}
              height={500}
              src="/image/compra.png"
            />
          </div>

          <div className=" md:flex-1 md:pr-44">
            <form className=" flex flex-col w-96 md:w-full md:pr-10 md:pt-10 m-4 h-auto gap-2 p-5">
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

              <div className="row flex gap-4 w-full">
                <div className="row flex-1">
                  <label htmlFor="quantidade" className="text-sm font-semibold">
                    Quantidade
                  </label>
                  <input
                    type="number"
                    name="quantidade"
                    id="quantidade"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                    className="w-full border-2 rounded-md mb-3 p-2 outline-none"
                  />
                </div>

                <div className="row flex-1">
                  <label htmlFor="price" className="text-sm font-semibold">
                    Preço
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    className="w-full border-2 rounded-md mb-3 p-2 outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <button
                  onClick={handleValidar}
                  className={`${btnEntrar} p-2 w-auto text-white text-md rounded-md font-semibold cursor-pointer flex-1 flex"
                  `}
                >
                  Adicionar
                </button>
                <button
                  onClick={handleValidar}
                  className={`bg-red-600 p-2 w-auto text-white text-md rounded-md font-semibold cursor-pointer flex-1 flex"
                  `}
                >
                  Cancelar
                </button>
              </div>
            </form>

            <div className="flex flex-col md:w-full m-4 h-[250px] gap-2 p-5 md:pr-10">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="bg-sky-400 p-2 text-white rounded-md cursor-pointer hover:bg-transparent hover:border hover:text-black"
                >
                  <p>{item.name}</p>
                  <div className="flex justify-between">
                    <p>Quantidade: {item.quantity}</p>
                    <p>Preço: {item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
