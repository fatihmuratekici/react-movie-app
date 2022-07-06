import React, { useContext } from 'react'
import { RiMovie2Line,RiMoonFill } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { GlobalContext } from '../context/SiteContext';
import { Link } from 'react-router-dom';

function Header() {

   const {state,changeTema} = useContext(GlobalContext);
    const body = document.querySelector("body");
    body.classList = state.theme ? "bg-secondary" : "bg-light"
  return (
    <div className={state.theme ? "bg-dark" : "bg-primary"}>
    <div className='container d-flex justify-content-between align-items-center p-2'>
        <div className='d-flex justify-content'><RiMovie2Line className='text-white fs-1'/><span className='text-white fs-3'><Link to='/'>MovieApp</Link>
</span></div>
        <nav className='nav nav-bar gap-4 align-items-center'>
          <Link to="/" className='nav-item text-white nav-link'>Anasayfa</Link>
            <Link to="/izlenenler" className='nav-item nav-link text-white'>İzlenenler</Link>
    
            <Link to="/izlemelistesi" className='nav-item nav-link text-white'>İzleme Listesi</Link>
            <li>
                {
                  state.theme ? <BsSun className='text-white fs-2 bg-secondary p-1' onClick={changeTema}/> : <RiMoonFill className='text-white fs-2 bg-secondary p-1' onClick={changeTema}/>
                }

                
                
            </li>
        </nav>
    </div>
</div>
  )
}

export default Header
