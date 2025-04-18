import About from "@/components/ui/home/About";
import Banner from "@/components/ui/home/Banner";
import Services from "@/components/ui/home/Services";
import Educations from "@/components/ui/home/educations/Educations";
import Overview from "@/components/ui/home/overview/Overview";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="lg:-mt-32 container mx-auto px-4 py-10 xl:px-0">
        <Overview />
      </div>
      <div className="mt-20 container mx-auto px-4 xl:px-0 space-y-20">
        <About />
        <Services />
        <Educations />
        <div></div>
      </div>
    </div>
  );
}
