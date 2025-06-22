import Logo from '../../assets/logo.svg'
import { BsChevronDown } from "react-icons/bs";
import './Header.css'

function Header() {


  return (
    <div className="Header-container">
      <header>
        <div className='Nav1'>
           <a  href="https://www.piggyvest.com/"> 
           <img className='logo' src={Logo} alt="" />
           </a>
            <nav>Save <BsChevronDown/></nav>
            <nav>Invest</nav>
            <nav>Stories</nav>
            <nav>FAQs</nav>
            <nav>Resources <span><BsChevronDown/></span></nav>
        </div>
        <div className='Nav2'>
            <button className='btn'>Sign up</button>
             <button className="btn1">Create free account</button>
             </div>
      </header>
    </div>
  )
}

export default Header
