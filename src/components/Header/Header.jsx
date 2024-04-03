import Logo from "../Logo";
import BotonesHeader from "./BotonesHeader";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-1">
                        <Logo tamano={100} />
                    </div>
                    <div className="col-md-9 d-flex align-items-end">
                        <Navbar />
                    </div>
                    <div className="col-md-2">
                        <BotonesHeader />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;