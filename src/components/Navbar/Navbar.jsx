import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

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
            {toggle? <RxCross2 size={28} /> : <GiHamburgerMenu size={28} />}
         </div>
        </nav>
    );
};

export default Navbar;