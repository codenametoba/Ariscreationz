// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import React from "react";
// import logo from "../assets/Ac_T.png";
// import { navItems } from "../constants";

// const Navbar = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

//   const toogleNavbar = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };
//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-purple-200">
//       <div className="container px-6 mx-auto flex justify-between items-center py-3">
//         <div className="flex  items-center space-x-3">
//           <div id="#" className="rounded-full border-2 border-purple-500 p-2 shadow-sm">
//             <img  className="h-12 w-12  " src={logo} alt="logo" />
//           </div>
//           <span className="text-2xl font-semibold text-purple-900 tracking-wider">
//             Ariscreationz
//           </span>
//         </div>
//         <ul className="hidden lg:flex space-x-10">
//           {navItems.map((item, index) => (
//             <li key={index}>
//               <a
//                 href={item.href}
//                 className="text-purple-700 hover:text-gold-400 transition-all duration-300 text-lg font-medium uppercase"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="lg:hidden">
//         <button
//           onClick={toogleNavbar}
//           className="text-purple-700 hover:text-gold-400 transition-all duration-300 focus:outline-none"
//         >
//           {mobileDrawerOpen ? <X size={32} /> : <Menu size={32} />}
//         </button>
//       </div>
//       <div>
//         {mobileDrawerOpen && (
//           <div className="fixed inset-0 z-40 bg-white shadow-lg flex flex-col justify-center items-center lg:hidden">
//             <button
//               onClick={toogleNavbar}
//               className="absolute top-6 right-6 text-purple-700 hover:text-gold-400 transition-all duration-300 focus:outline-none"
//             >
//               <X size={32} />
//             </button>
//             <ul className="space-y-8 text-center">
//               {navItems.map((item, index) => (
//                 <li key={index} className="py-4">
//                   <a
//                     href={item.href}
//                     className="text-purple-700 hover:text-gold-400 transition-all duration-300 text-2xl font-medium uppercase"
//                     onClick={toogleNavbar}
//                   >
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";
import logo from "../assets/Ac_T.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-purple-200">
      <div className="container px-6 mx-auto flex justify-between items-center py-3">
        <div className="flex items-center space-x-3">
          <div id="logo-container" className="rounded-full border-2 border-purple-500 p-2 shadow-sm">
            <img className="h-12 w-12" src={logo} alt="logo" />
          </div>
          <span className="text-2xl font-semibold text-purple-900 tracking-wider">
            Ariscreationz
          </span>
        </div>
        <ul className="hidden lg:flex space-x-10">
          {navItems?.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-purple-700 hover:text-gold-400 transition-all duration-300 text-lg font-medium uppercase"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden">
        <button
          onClick={toggleNavbar}
          className="text-purple-700 hover:text-gold-400 transition-all duration-300 focus:outline-none"
        >
          {mobileDrawerOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      <div>
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-40 bg-white shadow-lg flex flex-col justify-center items-center lg:hidden">
            <button
              onClick={toggleNavbar}
              className="absolute top-6 right-6 text-purple-700 hover:text-gold-400 transition-all duration-300 focus:outline-none"
            >
              <X size={32} />
            </button>
            <ul className="space-y-8 text-center">
              {navItems?.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.href}
                    className="text-purple-700 hover:text-gold-400 transition-all duration-300 text-2xl font-medium uppercase"
                    onClick={toggleNavbar}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
