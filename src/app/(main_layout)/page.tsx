import Banner from "@/components/ui/home/Banner";
import Overview from "@/components/ui/overview/Overview";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="lg:-mt-32 container mx-auto px-4 py-10 xl:px-0">
        <Overview />
      </div>
    </div>
  );
}
