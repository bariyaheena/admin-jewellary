import React from "react";


// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import HeroSection from "views/admin/hero-Section";
import Category from "views/admin/category";
import Product from "views/admin/product";
import Order from "views/admin/order";
import CustomerDetails from "views/admin/customerDetails";
import Review from "views/admin/review";
import Coupan from "views/admin/Coupan";
import Calender from "views/admin/calender-toDo";
import Invoice from "views/admin/Invoice";
import Payment from "views/admin/payment";
import Stock from "views/admin/stock";
import Festival from "views/admin/festival";
import Sales from "views/admin/sales";
import Revenue from "views/admin/revenue";
// Auth Imports
// import SignIn from "views/auth/SignIn";

// Icon Imports
import { BiAlignJustify,BiBox,BiMedal} from "react-icons/bi";
import {
  MdHome,
  MdLabel,
  MdOutlineShoppingCart,
  MdDateRange,
  MdPerson,
  MdHotelClass,
  MdLabelImportant,
  // MdPayment,
  MdOutlineCelebration,
  MdStackedLineChart,
  MdMonetizationOn,
  MdOutlineAssignment
} from "react-icons/md";

const routes = [
  {
    name: "DASHBOARD",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },

  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile/>,
  },
  {
    name: "Hero section",
    layout: "/admin",
    path: "hero",
    icon: <BiMedal className="h-6 w-6" />,
    component: <HeroSection />,
    secondary: true,
  },
  {
    name: "Category",
    layout: "/admin",
    icon: <BiAlignJustify className="h-6 w-6" />,
    path: "category",
    component: <Category />,
  },
 
  {
    name: "Product",
    layout: "/admin",
    path: "product",
    icon: <BiBox className="h-6 w-6" />,
    component: <Product />,
  },
  {
    name: "Festival",
    layout: "/admin",
    path: "Festival",
    icon: <MdOutlineCelebration className="h-6 w-6" />,
    component: <Festival />,
  },
  {
    name: "Order",
    layout: "/admin",
    path: "order",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Order />,
  },
  {
    name: "Customer",
    layout: "/admin",
    path: "customer",
    icon: <MdPerson className="h-6 w-6" />,
    component: <CustomerDetails />,
  },
  {
    name: "Review",
    layout: "/admin",
    path: "review",
    icon: <MdHotelClass className="h-6 w-6" />,
    component: <Review />,
  },
  {
    name: "Coupan",
    layout: "/admin",
    path: "coupan",
    icon: <MdLabel className="h-6 w-6" />,
    component: <Coupan />,
  },
  {
    name: "Payment",
    layout: "/admin",
    path: "payment",
    icon: <MdMonetizationOn className="h-6 w-6" />,
    component: <Payment />,
  },
  {
    name: "To Do",
    layout: "/admin",
    path: "Calender",
    icon: <MdDateRange className="h-6 w-6" />,
    component: <Calender />,
  },
  {
    name: "Invoice",
    layout: "/admin",
    path: "invoice",
    icon: <MdOutlineAssignment className="h-6 w-6" />,
    component: <Invoice />,
  },
  {
    name: "Stock",
    layout: "/admin",
    path: "Stock",
    icon: <MdStackedLineChart className="h-6 w-6" />,
    component: <Stock />,
  },
  {
    name: "Sales",
    layout: "/admin",
    path: "Sales",
    icon: <MdLabelImportant className="h-6 w-6" />,
    component: <Sales />,
  },
  {
    name: "Revenue",
    layout: "/admin",
    path: "Revenue",
    icon: <MdLabelImportant className="h-6 w-6" />,
    component: <Revenue />,
  }
 
 
 
];

export default routes;
