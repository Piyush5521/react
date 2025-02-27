import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header() {

    const [icon, seticon] = useState( <i class="fa fa-twitter" style={{fontSize:'36px'}}></i>);

    const handlePage1Click = () => {
        let firstIcon =   <i class="fa fa-twitter" style={{fontSize:'36px'}}></i>
        seticon(firstIcon);
    }

    const handlePage2Click = () => {
        let secondIcon =   <i class="fa fa-instagram" style={{fontSize:'36px'}}></i>
        seticon(secondIcon);
    }

    const handlePage3Click = () => {
        let thirdIcon =   <i class="fa fa-facebook" style={{fontSize:'36px'}}></i>
        seticon(thirdIcon);
    }

  return (
    <div>
      <div className='navbar'>
        <Link to="/" className='nav-link' onClick={handlePage1Click}>Page 1</Link>
        <Link to="/Page2" className='nav-link' onClick={handlePage2Click}>Page 2</Link>
        <Link to="/Page3" className='nav-link' onClick={handlePage3Click}>Page 3</Link>
        <li style={{position:'absolute', top:'20px', right:'20px', listStyleType:'none'}}>{icon}</li>
      </div>
    </div>
  )
}
