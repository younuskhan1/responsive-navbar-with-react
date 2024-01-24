import { useState } from 'react';
import { Icon } from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'

const Navbar = () => {


const [toggle, setToggle] = useState(false);
const handleToggle = () =>{
  setToggle(!toggle);
}

    return (
        <nav className={toggle? "navbar expanded" : "navbar"}>
         <h2 className="logo">NavBar</h2>
         <ul className="links">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
         </ul>
         <div className="toggle-icon" onClick={handleToggle}>
            {toggle?<Icon icon={x} size={28}/> : <Icon icon={menu} size={28}/>}
         </div>
        </nav>
    );
};

export default Navbar;