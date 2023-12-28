import React, { useContext } from "react";
import { Context } from "../context/contextApi";
import { categories } from "../utils/constant";
import LeftMenuNavItem from "./LeftMenuNavItem";
const LeftNav = () => {
  const { selectCatagories, setSelectCatagories, mobileMenu } = useContext(Context)
  const clickHandler = (name, type) => {
    switch(type){
      case "category":
        return setSelectCatagories(name)
      case "home":
        return setSelectCatagories(name)
      default:
        break;
    }
  }
  return (
    <div className="md:block w-[240px] overflow-y-auto h-full py-4 bg-black md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all">
      <div className="flex px-5 flex-col">
        {categories.map((c) => (
          <React.Fragment key={c.name}>
          <LeftMenuNavItem text={c.type ==='home'?"Home":c.name} icon={c.icon} action={()=>clickHandler(c.name, c.type)} className={`${selectCatagories===c.name?"bg-white/[0.15]":""}`}/>
          {c.divider && (
            <hr className="my-5 border-white/[0.20]"/>
          )}
          </React.Fragment>
        ))}
      </div>
      <hr className="my-5 border-white/[0.20]"/>
      <div className="text-center text-white/[0.5] text-[12px]">
        YouTube Clone by: Abhijeet Kumar
      </div>
    </div>
  );
};

export default LeftNav;
