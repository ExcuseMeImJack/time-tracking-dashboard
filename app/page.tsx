"use client"

import Image from "next/image";
import UserCard from "./components/UserCard";
import ItemCard from "./components/ItemCard";
import data from "./data.json";
import { useState } from "react";

export default function Home() {

  const [status, setStatus] = useState("W");

  return (
    <div className="bg-very-dark-blue font-rubik h-screen text-white">
      <div className="flex gap-8">
        <UserCard status={status} setStatus={setStatus} />
        <div className="grid grid-cols-3 gap-8">
          {data && data.length > 0 && data.map((item, i) => (
            <ItemCard key={i} item={item} status={status} />
          ))}
        </div>
      </div>

      <div className="attribution text-sm text-center text-[hsl(228, 45%, 44%)]">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/ExcuseMeImJack" target="_blank">Jack Roybal</a>.
      </div>
    </div>
  );
}
