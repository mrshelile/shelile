import { Navbar } from 'flowbite-react'
import { Outlet,Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import {navs} from '../constants/navs'
export default function Navigation() {
  return (<>
  <Navbar fluid={true} rounded={true}>
  <Navbar.Brand  to="/">
    <img src={logo} className="mr-3 h-6 sm:h-9"alt="Logo" />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Shelile
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
      <Navbar.Collapse>
        {navs.map(item => {
          return (
             <Link to={item.path}>{item.name}</Link>
          );
       })}
   
  </Navbar.Collapse>
    </Navbar>
     <Outlet />
    </>
  )
}
