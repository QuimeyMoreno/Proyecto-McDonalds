import Logo from "../Logo";
import BotonesStore from "./BotonesStore";
import RedesSociales from "./RedesSociales";
import TerminosYCondiciones from "./TerminosYCondiciones";

const Footer = () => {
    return (
        <div>
            <div className="container my-4">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <RedesSociales />
                    </div>
                    <div className="col-md-6 d-flex justify-content-end botones-store">
                        <BotonesStore /> 
                    </div>
                </div>
                <hr />

                <div className="row terminos-condiciones">
                    <div className="col-md-9">
                        <TerminosYCondiciones />
                    </div>
                    <div className="col-md-3">
                        <div className="padding-rem">
                            <Logo tamano={40} />
                            © McDonald's 2024
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;