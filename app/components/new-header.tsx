// import React, { useState } from "react";
// import { MenuIcon, X } from "lucide-react";
// import Link from "next/link";
// import { calSans } from "@/fonts/font";
// export const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link
//               href="/"
//               className="text-2xl uppercase font-bold text-[#0056FE]"
//               style={calSans.style}
//             >
//               Sandbox
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="#features" className="text-gray-600 hover:text-[#0056FE]">
//               Features
//             </a>
//             <a href="#examples" className="text-gray-600 hover:text-[#0056FE]">
//               Examples
//             </a>
//             <a href="#pricing" className="text-gray-600 hover:text-[#0056FE]">
//               Pricing
//             </a>
//             <button className="bg-[#0056FE] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
//               Create Portfolio
//             </button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6 text-gray-600" />
//             ) : (
//               <MenuIcon className="w-6 h-6 text-gray-600" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a href="#features" className="block px-3 py-2 text-gray-600">
//               Features
//             </a>
//             <a href="#examples" className="block px-3 py-2 text-gray-600">
//               Examples
//             </a>
//             <a href="#pricing" className="block px-3 py-2 text-gray-600">
//               Pricing
//             </a>
//             <button className="w-full mt-2 bg-[#0056FE] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
//               Create Portfolio
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };
"use client";
import { UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { calSans } from "@/fonts/font";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex justify-center items-center space-x-2">
            <img className="h-10 w-10 rounded-md" src="/s-logo.png" />
            <Link
              href="/"
              className="text-3xl uppercase  font-bold text-[#0056FE]"
              style={calSans.style}
            >
              Sandbox
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#0056FE]">
              Features
            </a>
            <a href="#examples" className="text-gray-600 hover:text-[#0056FE]">
              Examples
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-[#0056FE]">
              Pricing
            </a>
            <a href="#faq" className="text-gray-600 hover:text-[#0056FE]">
              FAQ
            </a>
            <a href="#about" className="text-gray-600 hover:text-[#0056FE]">
              About
            </a>
          </nav>

          {/* CTA Button - Right */}
          <div className="hidden  flex-shrink-0 md:flex justify-center items-center space-x-4">
            <Link
              href={"/my-portfolio"}
              className="bg-[#0056FE] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Create Portfolio
            </Link>
            <UserButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <MenuIcon className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600">
              Features
            </a>
            <a href="#examples" className="block px-3 py-2 text-gray-600">
              Examples
            </a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600">
              Pricing
            </a>
            <a href="#faq" className="block px-3 py-2 text-gray-600">
              FAQ
            </a>
            <a href="#about" className="block px-3 py-2 text-gray-600">
              About
            </a>
            <button className="w-full mt-2 bg-[#0056FE] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Create Portfolio
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
