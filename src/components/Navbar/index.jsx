import { NavLink } from "react-router-dom"
import React from "react"
const NavBar = () => {
    
    const activeStyle = 'underline underline-offset-4'
    
    return (
        <nav className="top-0 flex justify-between items-center fixed z-10 w-full py-5 px-8 ">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-xl">
                    <NavLink to='/'>
                        THEzone
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/consoles'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                        Consoles
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/clothes'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/games'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                        Games
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/offers'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                        Offers
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/others'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    <NavLink
                    to='/'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                        ariannavega@gmail.com
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/my-orders'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/my-account'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/sign-up'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                        Sign up
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                        🛒 0
                    </NavLink>
                </li>
               
            </ul>
        </nav>
    )
}

export default NavBar