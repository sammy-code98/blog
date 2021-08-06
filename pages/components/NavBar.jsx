import React, { useState } from "react";
import { siteName } from "./Layout";
import Link from "next/link";

function NavBar() {
  const [btnOPen, setBtnOpen] = useState(false);
  return (
    <div className="bg-gray-50 text-yellow-400">
      <nav className="bg-gray-60 text-base font-medium">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between  md:grid grid-cols-1 h-16">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <Link href="/">{siteName}</Link>
              </div>
              {/* the hidded property hides this on mobile */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <a className="hover:bg-gray-600 px-3 py-2 rounded-md">
                      🏠home
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="hover:bg-gray-600 px-3 py-2 rounded-md">
                      about💁
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="hover:bg-gray-600 px-3 py-2 rounded-md">
                      🤙contact us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* now the mobile nav */}
            <div className="-mr-2 flex md:hidden">
              <button
              onClick={()=>  setBtnOpen(!btnOPen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded.md text-yellow-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {/* for screen readers only */}
                <span className="sr-only">Open Main Menu</span>
                {!btnOPen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {btnOPen ? (
<div className="md:hidden transition duration-1000 ease-in-out text-center" id="mobile-menu">

    <div className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
    <Link href="/">
                    <a className="hover:bg-gray-600 px-3 py-2 rounded-md">
                      🏠home
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="hover:bg-gray-600 px-3 py-2 rounded-md">
                      about💁
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="hover:bg-gray-600 px-3 py-2 rounded-md">
                      🤙contact us
                    </a>
                  </Link>

    </div>
</div>
        ):(<></>)}
      </nav>
    </div>
  );
}

export default NavBar;
