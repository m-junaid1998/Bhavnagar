// import { Menu, X, Phone, Moon, Sun } from "lucide-react";
// import { useState } from "react";
// import { useTheme } from "../hooks/useTheme";
// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//     const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const { mode, toggleTheme } = useTheme();
//   const isDark = mode === "dark";


//   const navbarmenu =["Home", "Committees",  "Services",   "News", "Donate" , "forms" , "About"]
//   return (
//     <nav
//       className={`${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"} shadow-md fixed w-full top-0 z-50 border-b transition-all duration-300`}
//     >
   
//       <div className="w-full px-4 md:px-6">
//         <div className="flex justify-between items-center h-20 relative">
       
//           <div className="flex items-center gap-3 z-10 shrink-0">
//             <div className="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
//               <span className="text-white font-bold text-base md:text-lg font-['Plus_Jakarta_Sans']">
//                 BG
//               </span>
//             </div>
//             <div className="flex flex-col">
//               <h1
//                 className={`text-lg md:text-2xl font-bold leading-none ${isDark ? "text-slate-100" : "text-slate-900"}`}
//               >
//                 Bhavnagar
//               </h1>
//               <p
//                 className={`text-[10px] md:text-xs mt-0.5 md:mt-1 font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}
//               >
//                 Association Karachi
//               </p>
//             </div>
//           </div>

//           <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
//             {navbarmenu.map(
//               (item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className={`${isDark ? "text-slate-300 hover:text-emerald-400" : "text-slate-700 hover:text-emerald-600"} font-bold text-sm transition-colors uppercase tracking-widest`}
//                 >
//                   {item}
//                 </a>
//               ),
//             )}
//           </div>

//           <div className="flex items-center gap-2 md:gap-4 z-10 shrink-0">
      
//             <button
//               onClick={toggleTheme}
//               className={`p-2 md:p-2.5 rounded-xl ${isDark ? "bg-slate-800 text-yellow-400 hover:bg-slate-700" : "bg-slate-100 text-slate-600 hover:bg-slate-200"} transition-all`}
//             >
//               {isDark ? (
//                 <Sun className="w-5 h-5" />
//               ) : (
//                 <Moon className="w-5 h-5" />
//               )}
//             </button>

//             <a
//               href="tel:02134932744"
//               className="hidden md:flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-5 py-2.5 rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
//             >
//               <Phone className="w-4 h-4" />
//               <span>Call Now</span>
//             </a>

//             <button
//               className="md:hidden p-1.5 rounded-lg active:bg-slate-100 dark:active:bg-slate-800 transition-colors"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? (
//                 <X
//                   size={26}
//                   className={isDark ? "text-slate-300" : "text-slate-900"}
//                 />
//               ) : (
//                 <Menu
//                   size={26}
//                   className={isDark ? "text-slate-300" : "text-slate-900"}
//                 />
//               )}
//             </button>
//           </div>
//         </div>

//         {isOpen && (
//           <div
//             className={`md:hidden pb-6 space-y-1 border-t ${isDark ? "border-slate-800" : "border-slate-100"} animate-in fade-in slide-in-from-top-2 duration-200`}
//           >
//             <div className="pt-4 flex flex-col gap-1">
//               {navbarmenu.map(
//                 (item) => (
//                   <a
//                     key={item}
//                     href={`#${item.toLowerCase()}`}
//                     onClick={() => setIsOpen(false)}
//                     className={`block py-3 px-4 rounded-xl font-semibold ${isDark ? "text-slate-300 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-50"} transition-all`}
//                   >
//                     {item}
//                   </a>
//                 ),
//               )}
//               <div className="px-4 flex justify-center">
//                 <a
//                   href="tel:02134932744"
//                   className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-bold shadow-md active:scale-95 transition-transform text-sm"
//                 >
//                   <Phone className="w-4 h-4" />
//                   Call Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }


import { Menu, X, Phone, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { useNavigate } from "react-router-dom"; 

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { mode, toggleTheme } = useTheme();
  const isDark = mode === "dark";


  const navbarmenu = [
    { name: "Home", path: "/" },
    { name: "Donate", path: "/donate" },
    { name: "Contact", path: "/contact-form" },
    { name: "About", path: "/aboutus" },
    { name: "Committees", path: "/committe" },
    { name: "Services", path: "/service" },
    { name: "Forms", path: "/form" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false); 
  };

  return (
    <nav
      className={`${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"} shadow-md fixed w-full top-0 z-50 border-b transition-all duration-300`}
    >
      <div className="w-full px-4 md:px-6">
        <div className="flex justify-between items-center h-20 relative">
          
          <div 
            className="flex items-center gap-3 z-10 shrink-0 cursor-pointer" 
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-base md:text-lg font-['Plus_Jakarta_Sans']">BG</span>
            </div>
            <div className="flex flex-col">
              <h1 className={`text-lg md:text-2xl font-bold leading-none ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                Bhavnagar
              </h1>
              <p className={`text-[10px] md:text-xs mt-0.5 md:mt-1 font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Association Karachi
              </p>
            </div>
          </div>

          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
            {navbarmenu.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`${isDark ? "text-slate-300 hover:text-emerald-400" : "text-slate-700 hover:text-emerald-600"} font-bold text-sm transition-colors uppercase tracking-widest outline-none`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4 z-10 shrink-0">
            <button
              onClick={toggleTheme}
              className={`p-2 md:p-2.5 rounded-xl ${isDark ? "bg-slate-800 text-yellow-400 hover:bg-slate-700" : "bg-slate-100 text-slate-600 hover:bg-slate-200"} transition-all`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href="tel:02134932744"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-5 py-2.5 rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

          
            <button
              className="md:hidden p-1.5 rounded-lg active:bg-slate-100 dark:active:bg-slate-800 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={26} className={isDark ? "text-slate-300" : "text-slate-900"} />
              ) : (
                <Menu size={26} className={isDark ? "text-slate-300" : "text-slate-900"} />
              )}
            </button>
          </div>
        </div>

    
        {isOpen && (
          <div className={`md:hidden pb-6 space-y-1 border-t ${isDark ? "border-slate-800" : "border-slate-100"} animate-in fade-in slide-in-from-top-2 duration-200`}>
            <div className="pt-4 flex flex-col gap-1">
              {navbarmenu.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`block text-left py-3 px-4 rounded-xl font-semibold ${isDark ? "text-slate-300 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-50"} transition-all`}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 mt-2 flex justify-center">
                <a
                  href="tel:02134932744"
                  className="flex items-center gap-2 w-full justify-center bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold shadow-md active:scale-95 transition-transform text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}