import Menu from "@/components/common/Menu";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-hidden">
      <Menu />
      {children}
    </div>
  );
}
