/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";
// import { background, color } from "@chakra-ui/system";
// chakra imports

export function SidebarLinks(props) {
  // Chakra color mode
  let location = useLocation();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
      
        return (
          
          <Link key={index} to={route.layout + "/" + route.path}>
            {/* <div className="relative mb-3 flex hover:cursor-pointer sidenavbar "> */}
            <div className={`relative  flex hover:cursor-pointer  sidenavbar`}>
              <li
                className="my-[3px] flex cursor-pointer items-center px-8 "
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path) === true
                      ? "font-bold text-white"
                      : "font-bold text-white"
                  }
                  ${
                    (route.path) === "default"
                      ? "font-bold  default"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "profile"
                      ? "font-bold  profile"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "hero"
                      ? "font-bold  hero"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "category"
                      ? "font-bold category"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "product"
                      ? "font-bold product"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "Festival"
                      ? "font-bold festival"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "order"
                      ? "font-bold   order"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "customer"
                      ? "font-bold   customer"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "review"
                      ? "font-bold   review"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "coupan"
                      ? "font-bold coupan"
                      : "font-bold"
                  }
                  ${
                    (route.path) === "payment"
                      ? "font-bold  payment"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "Calender"
                      ? "font-bold   calender"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "invoice"
                      ? "font-bold   invoice"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "Stock"
                      ? "font-bold  stock"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "Sales"
                      ? "font-bold  stock"
                      : "font-bold "
                  }
                  `
                }
                >
                  {route.icon ? route.icon : <DashIcon />}{" "}
                </span>
                <p
                  className={`leading-1 m-1 flex 
                   ${
                    (route.path) === "default"
                      ? "font-bold  default"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "profile"
                      ? "font-bold  profile"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "hero"
                      ? "font-bold  hero"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "category"
                      ? "font-bold category"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "product"
                      ? "font-bold product"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "Festival"
                      ? "font-bold festival"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "order"
                      ? "font-bold   order"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "customer"
                      ? "font-bold   customer"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "review"
                      ? "font-bold   review"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "coupan"
                      ? "font-bold coupan"
                      : "font-bold"
                  }
                  ${
                    (route.path) === "payment"
                      ? "font-bold  payment"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "Calender"
                      ? "font-bold   calender"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "invoice"
                      ? "font-bold   invoice"
                      : "font-bold "
                  }
                  ${
                    (route.path) === "Stock"
                      ? "font-bold  stock"
                      : "font-bold "
                  }
                  `}
                >
                  {route.name}
                </p>
              </li>
              {/* {activeRoute(route.path) ? (
                <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null} */}
            </div>
          </Link>
        );
      }
    });
  };
  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
