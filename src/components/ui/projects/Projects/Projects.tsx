"use client";

import { useState } from "react";
import Tabs from "./Tabs";
import Motion from "@/components/common/Motion";
import Tab from "./Tab";

export default function Projects() {
  const [selectedTab, setSelectedTab] = useState<string>("all");

  return (
    <div className="mt-6">
      <Motion initial={{ opacity: 0, x: -50 }} inView={{ opacity: 1, x: 0 }}>
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </Motion>
      <div className="mt-4">
        <Tab selectedTab={selectedTab} />
      </div>
    </div>
  );
}
