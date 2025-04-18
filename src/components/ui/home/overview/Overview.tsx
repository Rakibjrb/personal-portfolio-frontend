"use client";

import useCounter from "@/utils/useCounter";
import { useState } from "react";
import Card from "./Card";

const overview = [
  {
    total: 20,
    title: "Happy Clients",
  },
  {
    total: 35,
    title: "Project Completed",
  },
  {
    total: 4,
    title: "Running Projects",
  },
  {
    total: 2,
    title: "Year Experience",
  },
];

export default function Overview() {
  const [total1, setTotal1] = useState<number>(0);
  const [total2, setTotal2] = useState<number>(0);
  const [total3, setTotal3] = useState<number>(0);
  const [total4, setTotal4] = useState<number>(0);

  useCounter(total1, setTotal1, overview[0].total);
  useCounter(total2, setTotal2, overview[1].total);
  useCounter(total3, setTotal3, overview[2].total);
  useCounter(total4, setTotal4, overview[3].total);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card total={total1} title={overview[0].title} />
      <Card total={total2} title={overview[1].title} />
      <Card total={total3} title={overview[2].title} />
      <Card total={total4} title={overview[3].title} />
    </div>
  );
}
