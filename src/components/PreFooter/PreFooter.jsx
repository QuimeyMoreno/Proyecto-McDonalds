import LogoRojo from "../LogoRojo";
import BtnDescargarAhora from "./BtnDescargarAhora";



const PreFooter = () => {
    return (
        <>
            <div className="background-prefooter">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-2">
                            <LogoRojo />
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <div>
                                <h3 className="fw-bold fs-2">Descárgate nuestra app</h3>
                                <p>Descárgate nuestra app y no te pierdas nuestras novedades</p>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex align-items-center">
                            <BtnDescargarAhora />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PreFooter;


