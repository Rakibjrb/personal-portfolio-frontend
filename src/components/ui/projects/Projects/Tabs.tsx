const tabs = [
  { key: "all", label: "All" },
  { key: "mern", label: "Full Stack" },
  { key: "frontend", label: "Frontend" },
  { key: "unique", label: "Unique" },
  { key: "pending", label: "pending" },
];

export default function Tabs({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}) {
  return (
    <div className="flex justify-center">
      <div className="p-2 bg-[#e2e2e2] flex flex-wrap justify-center rounded-xl">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`uppercase cursor-pointer px-3 py-1 rounded-lg select-none ${
              selectedTab === tab.key ? "bg-[#52dde2]" : ""
            }`}
            onClick={() => setSelectedTab(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
}
