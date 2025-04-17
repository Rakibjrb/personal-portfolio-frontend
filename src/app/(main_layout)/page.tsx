import About from "@/components/ui/home/About";
import Banner from "@/components/ui/home/Banner";
import Overview from "@/components/ui/overview/Overview";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="lg:-mt-32 container mx-auto px-4 py-10 xl:px-0">
        <Overview />
      </div>
      <div className="mt-20 container mx-auto px-4 xl:px-0 space-y-20">
        <About />
        <div></div>
      </div>
    </div>
  );
}
