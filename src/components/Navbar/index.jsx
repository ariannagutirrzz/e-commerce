import { NavLink } from "react-router-dom"
import React from "react"
const NavBar = () => {
    
    const activeStyle = 'underline underline-offset-4'
    
    return (
        <nav className="top-0 flex justify-between items-center fixed z-1 w-full py-5 px-8 ">
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
                    to='/electronics'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                        Electronis
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/jewerly'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                        Jewerly
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/Men-clothing'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                        Men
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/women-clothing'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                        Women
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