import LogoRojo from "../LogoRojo";
import BtnDescargarAhora from "./BtnDescargarAhora";
import SvgWave from "./SvgWave";



const PreFooter = () => {
    return (
        <>
            <div className="background-prefooter">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-2 ubicacion-movil">
                            <LogoRojo />
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <div className="centrar-texto">
                                <h3 className="fw-bold fs-2">Descárgate nuestra app</h3>
                                <p>Descárgate nuestra app y no te pierdas nuestras novedades</p>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex align-items-center centrar-boton">
                            <BtnDescargarAhora />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center wave-movil">
                <SvgWave />
            </div>
        </>
    )
}

export default PreFooter;


