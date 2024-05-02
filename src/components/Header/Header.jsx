import Logo from "../Logo";
import BotonesHeader from "./BotonesHeader";
import CartWidget from "./CartWidget";
import MenuMovil from "./MenuMovil";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col menu-movil p-4">
                        <MenuMovil />
                    </div>
                    <div className="col-md-1 desaparecer-menu">
                        <Logo tamano={100} />
                    </div>
                    <div className="col-md-8 d-flex align-items-end desaparecer-menu">
                        <Navbar />
                        <div className="desaparecer-menu">
                            <CartWidget />
                        </div>
                    </div>
                    <div className="col-md-2 desaparecer-menu">
                        <BotonesHeader />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;