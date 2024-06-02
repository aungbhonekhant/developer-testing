"use client"
import { Hero } from "@/components/Hero";
import { PropertyList } from "@/components/PropertyList";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState({})
  return (
    <>
      <Hero setFilter={setFilter}/>
      <PropertyList filter={filter}/>
    </>
  );
}
