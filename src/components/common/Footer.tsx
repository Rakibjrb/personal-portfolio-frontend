import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-gradient-to-b from-[#4b4b4b] to-[#353535]">
      <div className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between text-[#979B9F] py-16 px-4 xl:px-0">
        <div className="md:w-[40%]">
          <a className="text-xl md:text-2xl font-semibold font-lato">
            Rakib<span className="text-[#56cbf9]">ul.</span>
          </a>
          <div className="mt-5 space-y-2">
            <p>
              As a junior developer, {"I'm"} committed to creating seamless user
              interfaces and dynamic web applications. {"Let's"} transform ideas
              into reality through innovation and collaboration.
            </p>
            <p>Copyright © {year} rakibul-dev - All rights reserved.</p>
          </div>
        </div>
        <div className="md:w-[55%] lg:w-[45%] space-y-10 md:space-y-0 md:flex md:justify-between gap-3">
          <div className="">
            <h3 className="uppercase text-xl font-bold text-white mb-3">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={"/"} className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/projects"}
                  className="hover:text-white transition-colors"
                >
                  View Projects
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="uppercase text-xl font-bold text-white mb-3">
              Terms
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-white transition-colors">
                  SaaS Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <Link
                target="blank"
                href={"https://www.linkedin.com/in/rakibul-hasan-b156682b5"}
                className="flex items-center gap-3 py-2 px-4 bg-[#386ab6e5] hover:bg-[#6b6b6b8c] transition-colors text-white rounded-full w-full justify-center"
              >
                <FaLinkedinIn className="text-2xl" />
                <div className="text-left">
                  <p className="text-[10px] capitalize">Follow on</p>
                  <p className="text-sm">Linked In</p>
                </div>
              </Link>
              <Link
                target="blank"
                href={"https://github.com/rakibjrb"}
                className="flex items-center gap-3 py-2 px-4 bg-[#5699a1dc] hover:bg-[#6b6b6b8c] transition-colors text-white rounded-full w-full justify-center"
              >
                <FaGithub className="text-2xl" />
                <div className="text-left">
                  <p className="text-[10px] capitalize">Follow on</p>
                  <p className="text-sm">Github</p>
                </div>
              </Link>
              <Link
                target="blank"
                href={"https://www.facebook.com/rakibulhasan572157"}
                className="flex items-center gap-3 py-2 px-4 bg-[#324988dc] hover:bg-[#6b6b6b8c] transition-colors text-white rounded-full w-full justify-center"
              >
                <FaFacebookF className="text-2xl" />
                <div className="text-left">
                  <p className="text-[10px] capitalize">Follow on</p>
                  <p className="text-sm">Facebook</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
