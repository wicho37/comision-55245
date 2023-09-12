import { Link } from "react-router-dom"
import { AiOutlineCloseCircle } from 'react-icons/ai'


const MenuList = ( {close} ) => {

    return (
        <nav onClick={(e) => e.stopPropagation()} className="menuList bg-blue-600">
            <AiOutlineCloseCircle onClick={close} className='ml-auto text-white text-4xl cursor-pointer'/>
            <Link onClick={close} className="menuList__link color: white;" to="/" >inicio</Link>
            <Link onClick={close} className="menuList__link" to="/productos/verduras" >verduras</Link>
            <Link onClick={close} className="menuList__link" to="/productos/frutas">frutas</Link>
            <Link onClick={close} className="menuList__link" to="/productos/especias" >especias</Link>

        </nav>
    )
}

export default MenuList
