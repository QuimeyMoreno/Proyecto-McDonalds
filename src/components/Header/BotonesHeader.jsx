import LogoCelularHeader1 from "/Users/Quimey/OneDrive/Escritorio/Proyecto - McDonalds/mcdonalds/src/assets/MCD_Descarga_la_app_406b004273.png"
import LogoCelularHeader2 from "/Users/Quimey/OneDrive/Escritorio/Proyecto - McDonalds/mcdonalds/src/assets/79_15_1_icone_70x70_bf9839ed7c.png"

const BotonesHeader = () => {
    return (
        <div className="d-flex contenedor-botones" >
            <a href="#" className="btn bg-light link-opacity-100 d-flex boton-header">
                <figure className="pe-2">
                    <img src={LogoCelularHeader1} alt="Celular Amarillo" width={30} />
                </figure>
                <p className="mt-1">Descarga la app</p>
            </a>
            <a href="#" className="btn link-opacity-100 d-flex boton-header-2">
                <figure className="pe-2">
                    <img src={LogoCelularHeader2} alt="Celular Papas" width={30} />
                </figure>
                <p className="mt-1">Pedí y Retirá</p>
            </a>
        </div>
    )
}

export default BotonesHeader;