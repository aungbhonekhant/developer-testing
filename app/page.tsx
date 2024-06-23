"use client"
import { Hero } from "@/components/Hero";
import { useState } from "react";
import dynamic from 'next/dynamic';
const PropertyList = dynamic(()=>import("@/components/PropertyList").then(mod=>mod.PropertyList))
export default function Home() {
  const [filter, setFilter] = useState({})
  return (
    <>
      <Hero setFilter={setFilter}/>
      <PropertyList filter={filter}/>
    </>
  );
}
