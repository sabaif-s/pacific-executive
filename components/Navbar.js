"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined, SearchOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Input } from "antd";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Hire Talent", href: "/hire-talent" },
  { name: "Open Positions", href: "/open-positions" },
  { name: "CPE Resources", href: "/cpe-resources" },
  { name: "Progress Your Career", href: "/progress-career" },
  { name: "Insights", href: "/insights" },
  { name: "Book Appointment", href: "/book-appointment" },
  { name: "About Us", href: "/about" },
  { name: "Search", href: "" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleSearchClick = () => setSearchButtonClicked(!searchButtonClicked);
  const handleSearchClose = () => setSearchButtonClicked(false);

  // Handle scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // Scrolling down
        setScrolled(true);
      } else {
        // Scrolling up
        setScrolled(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-12 w-full z-1000 bg-white shadow-md transition-all duration-300 ${
        scrolled ? "h-24 scale-in" : "h-20 scale-out"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-4 lg:px-8">
        {/* Logo */}
        <div
          className={`relative transition-all duration-300 ${
            scrolled ? "w-12 h-12 lg:w-16 lg:h-16" : "w-16 h-16 lg:w-20 lg:h-20"
          }`}
        >
          <Image
            src="/images/squarelogotop.jpg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-0 lg:space-x-10 flex-1 justify-end">
          <div
            className={`flex items-center space-x-6 xl:space-x-10 transition-all duration-500 ${
              searchButtonClicked
                ? "opacity-0 -translate-y-4 pointer-events-none"
                : "opacity-100 translate-y-0"
            }`}
          >
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className="text-[#145E8C] cursor-pointer hover:text-blue-800 transition-colors duration-200"
                  onClick={item.name === "Search" ? handleSearchClick : undefined}
                >
                  {item.name === "Search" ? (
                    <SearchOutlined className="inline-block text-base text-[#145E8C]" />
                  ) : (
                    <span
                      className={`text-xs text-center 2xl:text-lg 3xl:text-[32px] xl:text-base transition-all duration-300 ${
                        scrolled ? "text-sm" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                  )}
                </span>
              </Link>
            ))}
          </div>

          {/* Search input */}
          <div
            className={`absolute right-8 md:right-12 top-1/2 -translate-y-1/2 w-[60%] md:w-[50%] lg:w-[40%] transition-all duration-500 ${
              searchButtonClicked
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <Input
              placeholder="Search"
              suffix={
                <CloseOutlined
                  className="cursor-pointer text-[#145E8C]"
                  onClick={handleSearchClose}
                />
              }
              className="w-full text-sm focus:outline-none"
              style={{
                border: "none",
                outline: "none",
                color: "#145E8C",
                background: "transparent",
              }}
            />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden text-blue-600 text-2xl"
          aria-label="Toggle navigation"
        >
          {navOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg z-40`}
      >
        <nav className="flex flex-col mt-20 space-y-6 px-6 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={
                item.name === "Search"
                  ? handleSearchClick
                  : () => setNavOpen(false)
              }
            >
              <span className="text-[#145E8C] text-sm hover:text-blue-800 transition-colors duration-200">
                {item.name === "Search" ? (
                  <SearchOutlined className="inline-block text-sm text-[#145E8C]" />
                ) : (
                  item.name
                )}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
