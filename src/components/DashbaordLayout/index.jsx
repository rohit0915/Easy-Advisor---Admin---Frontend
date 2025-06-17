import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { LuUsersRound } from "react-icons/lu";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdOutlineCalendarToday } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { TiPen } from "react-icons/ti";
import { MdOutlineCategory } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { PiImageSquareBold } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { MdOutlineBuild } from "react-icons/md";
import { MdOutlineAutoStories } from "react-icons/md";

import img1 from '../../assets/images/LoginLogo.png'

/**
 * Dashboard Layout Component
 *
 * A responsive layout component that provides a consistent structure for dashboard pages
 * with a collapsible sidebar navigation, header, and main content area.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render in the main content area
 */
const DashbaordLayout = ({ children, title = "", titleAction = null }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Dashboard", icon: MdOutlineDashboard, path: "/dashboard" },
    { name: "User", icon: LuUsersRound, path: "/dashboard/appointments/current-bookings" },
    { name: "Adviser", icon: LiaChalkboardTeacherSolid, path: "/dashboard/users" },
    { name: "Appointment", icon: MdOutlineCalendarToday, path: "/dashboard/analytics" },
    { name: "Completed", icon: IoMdCheckmarkCircleOutline, path: "/dashboard/settings" },
    { name: "Earning", icon: RiMoneyRupeeCircleLine, path: "/dashboard/support" },
    { name: "Blogs", icon: TiPen, path: "/logout" },
    { name: "Category", icon: MdOutlineCategory, path: "/logout" },
    { name: "Team Management", icon: BiSupport, path: "/logout" },
    { name: "Banner Management", icon: PiImageSquareBold, path: "/logout" },
    { name: "Withdrawal", icon: BiMoneyWithdraw, path: "/logout" },
    { name: "Notifications", icon: MdNotificationsNone, path: "/logout" },
    { name: "Support Management", icon: BiSupport, path: "/logout" },
    { name: "General Setting", icon: MdOutlineBuild, path: "/logout" },
    { name: "Page Management", icon: MdOutlineAutoStories, path: "/logout" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar */}
      <aside
        id="mobile-sidebar"
        className={`fixed top-0 left-0 z-40 h-full w-[260px]  pt-[90px] transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:w-[282px]`}
      >
        {/* Close button on mobile */}
        <div className="absolute top-4 right-4 md:hidden z-50">
          <button onClick={toggleMobileMenu}>
            <FiX size={24} />
          </button>
        </div>

        <nav className="h-full overflow-y-auto px-4 hidescroll">
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="mb-3">
                <Link
                  to={item.path}
                  className="flex items-center group"
                  onClick={() => windowWidth < 768 && setIsMobileMenuOpen(false)}
                >
                  <div
                    className={`w-[40px] h-[40px] rounded-full flex justify-center items-center transition-all duration-200 
                    ${
                      location.pathname === item.path
                        ? "bg-[linear-gradient(90deg,_#C82D30_1.89%,_#362695_67.23%,_#B12F31_136.79%)] text-white"
                        : "text-[#6B7280] group-hover:bg-[linear-gradient(90deg,_#C82D30_1.89%,_#362695_67.23%,_#B12F31_136.79%)] group-hover:text-white"
                    }`}
                  >
                    <item.icon size={20} />
                  </div>
                  <span
                    className={`font-urbanist font-[500] leading-[150%] ml-3 text-[16px] ${
                      location.pathname === item.path
                        ? "text-transparent bg-clip-text bg-[linear-gradient(90deg,_#C82D30_1.89%,_#362695_67.23%,_#B12F31_136.79%)]"
                        : "text-[#6B7280] group-hover:text-transparent bg-clip-text bg-[linear-gradient(90deg,_#C82D30_1.89%,_#362695_67.23%,_#B12F31_136.79%)]"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && windowWidth < 768 && (
        <div
          className="fixed inset-0 bg-white bg-opacity-40 z-30"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Main content section */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="fixed rounded-2xl top-2 left-2 right-2 h-[72px] z-40 bg-black px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-white mr-2"
              onClick={toggleMobileMenu}
            >
              <FiMenu size={24} />
            </button>
            <img src={img1} alt="Logo" className="w-[40px] h-[40px] object-cover rounded-full" />
            <div className="text-white font-bold text-xl leading-tight">
              Easy<br />Advising
            </div>
            <div className="text-white text-sm ml-6 hidden sm:flex items-center gap-1">
              <span>Home</span>
              <span>{'>'}</span>
              <span>Dashboard</span>
            </div>
          </div>
          <div className="w-[48px] h-[48px] rounded-full">
            <img src={img1} alt="Profile" className="w-full h-full rounded-full object-cover" />
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-[90px] px-4 overflow-y-auto flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="sm:text-[40px] text-2xl font-[600] text-charcoal font-rasa whitespace-nowrap">
              {title}
            </h2>
            {titleAction}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};



export default DashbaordLayout;