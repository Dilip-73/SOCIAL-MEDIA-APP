/* eslint-disable react/prop-types */

import Navbar from "./Navbar"
import LeftSideBar from "./LeftSideBar"
import RightSideBar from "./RightSideBar"
import Footer from "./Footer"

const Layout = ({children}) => {
  return (
    <div className="parentLayout">
    <header className="layoutHeader"><Navbar /></header>
    <div className="layoutLeft" ><LeftSideBar /></div>
    <main className="layoutMain" >{children}</main>
    <div className="layoutRight" ><RightSideBar /></div>
    <footer className="layoutFooter"><Footer /></footer>
  </div>
  )
}

export default Layout