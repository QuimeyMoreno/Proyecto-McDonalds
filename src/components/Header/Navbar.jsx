import Productos from "./Productos";

const Navbar = () => {
    return (
        <div className="desaparecer-menu">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link text-dark tamaño-letra-submenu" aria-current="page" href="#">Trabaja con nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark tamaño-letra-submenu" href="#">Contacto</a>
                </li>
            </ul>
            <ul className="nav">
                <Productos />
                <li className="nav-item">
                    <a className="nav-link text-dark fs-5" href="#">Lanzamientos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark fs-5" href="#">Locales</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark fs-5" href="#">En Familia</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark fs-5" href="#">Nosotros</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;


