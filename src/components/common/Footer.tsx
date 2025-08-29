"use client";

import useProfileLinks from "@/hooks/useProfileLinks";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const { data, isLoading } = useProfileLinks();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#2e2e2e] to-[#1f1f1f] text-[#b5b5b5]">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 md:gap-0 md:justify-between py-16 px-6 xl:px-0">
        <div className="md:w-[40%]">
          <Link
            href="/"
            className="text-2xl font-semibold font-lato text-white">
            Rakib<span className="text-[#56cbf9]">ul.</span>
          </Link>
          <p className="mt-5 leading-relaxed text-sm">
            As a junior developer, I’m committed to creating seamless user
            interfaces and dynamic web applications. Let’s transform ideas into
            reality through innovation and collaboration.
          </p>
          <p className="mt-4 text-xs opacity-70">
            © {year} rakibul-dev — All rights reserved.
          </p>
        </div>

        <div className="md:w-[55%] lg:w-[45%] grid grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <h3 className="uppercase text-sm font-semibold text-white mb-4">
              Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-white transition-colors">
                  View Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-sm font-semibold text-white mb-4">
              Terms
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  SaaS Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            {isLoading ? (
              "..."
            ) : (
              <div className="space-y-3">
                <SocialButton
                  href={data[2].link}
                  icon={<FaFacebookF />}
                  label="Facebook"
                  bg="bg-[#1877f2]"
                />

                <SocialButton
                  href={data[0].link}
                  icon={<FaGithub />}
                  label="GitHub"
                  bg="bg-[#333]"
                />

                <SocialButton
                  href={data[1].link}
                  icon={<FaLinkedinIn />}
                  label="LinkedIn"
                  bg="bg-[#0077b5]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Social Button as a subcomponent */
function SocialButton({
  href,
  icon,
  label,
  bg,
}: {
  href: string;
  icon: React.ReactElement;
  label: string;
  bg: string;
}) {
  return (
    <Link
      target="_blank"
      href={href}
      className={`${bg} flex items-center gap-3 py-2 px-4 rounded-full w-full justify-center text-white hover:opacity-80 transition`}>
      <span className="text-xl">{icon}</span>
      <div className="text-left">
        <p className="text-[10px] capitalize opacity-80">Follow on</p>
        <p className="text-sm font-medium">{label}</p>
      </div>
    </Link>
  );
}
