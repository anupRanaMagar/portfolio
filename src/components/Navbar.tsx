import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="sticky z-50 h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
          <div className="flex h-14 items-center justify-between border-b border-zinc-200">
            <Link href="/" className="flex z-40 font-semibold">
              <span className="text-green-600 text-2xl md:text-3xl lg:text-4xl">
                Portfolio
              </span>
            </Link>

            <div className="h-full flex items-center space-x-4">
              <div className="flex space-x-4 lg:space-x-8">
                <Link href="#Home" className="font-medium">
                  Home
                </Link>
                <Link href="#aboutMe" className="font-medium">
                  About Me
                </Link>
                <Link
                  href="#project"
                  className="font-medium pr-6 md:pr-8 lg:pr-10"
                >
                  Project
                </Link>
              </div>
              <Button variant={"default"} className="">
                Let&apos;s Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
