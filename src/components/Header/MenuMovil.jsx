import Logo from "../Logo";
import BotonesHeader from "./BotonesHeader";
import CartWidget from "./CartWidget";
import Productos from "./Productos";

const MenuMovil = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary fixed-top bg-menu-movil">
                <div className="container-fluid">
                    <Logo tamano={70} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <Logo tamano={65} />
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="posicion-carrito-movil">
                            <CartWidget />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Productos />
                                </li>
                                <hr />
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Lanzamientos</a>
                                </li>
                                <hr />
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Locales</a>
                                </li>
                                <hr />
                                <li className="nav-item">
                                    <a className="nav-link" href="#">En Familia</a>
                                </li>
                                <hr />
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Nosotros</a>
                                </li>
                                <hr />
                                <li className="nav-item">
                                    <BotonesHeader />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MenuMovil;