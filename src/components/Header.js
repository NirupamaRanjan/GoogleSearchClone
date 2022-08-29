
import { Link } from "react-router-dom"
import CircledElement from "../components/CircledElement"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import './header.css'

const Header=function(){
    return(
        <div className="header-cont">
           <Link to="" className="link">Gmail</Link>
           <a href="https://www.google.co.in/imghp?hl=en-GB&tab=ri&authuser=0&ogbl" className="link">Images</a>
           <CircledElement><AppsOutlinedIcon className="icon"/></CircledElement>
           <CircledElement><AccountCircleIcon className="icon"/></CircledElement>
           
        </div>
    )
}

export default Header