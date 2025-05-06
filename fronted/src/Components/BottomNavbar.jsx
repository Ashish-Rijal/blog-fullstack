import React from "react";
import { Send } from "lucide-react";
import { Search } from "lucide-react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

export default function BottomNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
}

  return (
    <div className=" bg-white shadow-xl h-16 flex items-center">
      <div className="w-11/12 md:w-8/12 mx-auto flex items-center justify-between">
        <div>logo</div>

       <div className="hidden lg:block">
       <div className="flex gap-6 items-center text-gray-700 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Dashboard">Dashboard</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>

          <NavLink to="/Join-us">
            <button className="flex items-center gap-1 bg-pink-500 px-8 py-2 rounded-md text-white hover:bg-black duration-500 cursor-pointer">
              {" "}
              <Send size={16} />
              Join Us
            </button>
          </NavLink>
          <Search />

          <div className="block md:hidden ">
            <button onClick={toggleDrawer}>Show</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                <div>Hello World</div>
            </Drawer>
        </div>
          
        </div>
       </div>

       <div className="block md:hidden ">
            <button onClick={toggleDrawer}>
              <menu/>
            </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className=''
            >
                <div>Hello World</div>
            </Drawer>
        </div>

      </div>
    </div>
  );
}
