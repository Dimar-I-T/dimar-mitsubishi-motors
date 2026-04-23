'use client'
import Hero from "./components/Hero";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-black overflow-x-hidden">
      <Hero/>
      <Products/>
    </div>
  );
}