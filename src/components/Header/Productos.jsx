const Productos = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link text-dark fs-5 productos-movil" href="#" role="button" aria-expanded="false">
                Productos
            </a>
            <ul className="dropdown-menu ">
                <div className="container">
                    <div className="row">
                        <li className="col-md-4 p-4">
                            <a className="text-dark fs-6 text-decoration-none" href="#">
                                <img className="me-1" src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar" alt="Imagen Hamburguesa" width={70} /> Hamburguesas
                            </a>
                        </li>
                        <li className="col-md-4 p-4">
                            <a className="text-dark fs-6 text-decoration-none" href="#">
                                <img className="me-1" src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$k5XhSNp5/200/200/original?country=ar" alt="Imagen Sándwiches de pollo" width={70} /> Sándwiches de pollo
                            </a>
                        </li>
                        <li className="col-md-4 p-4">
                            <a className="text-dark fs-6 text-decoration-none" href="#">
                                <img className="me-1" src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kKX4MZKT/200/200/original?country=ar" alt="Imagen Papas y complementos" width={70} /> Papas y complementos
                            </a>
                        </li>
                        <li className="col-md-4 p-4">
                            <a className="text-dark fs-6 text-decoration-none" href="#">
                                <img className="me-1" src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX2292z/200/200/original?country=ar" alt="Imagen Bebidas" width={80} /> Bebidas
                            </a>
                        </li>
                        <li className="col-md-4 p-4">
                            <a className="text-dark fs-6 text-decoration-none" href="#">
                                <img className="me-1" src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXjLPM7/200/200/original?country=ar" alt="Imagen Postres" width={80} /> Postres
                            </a>
                        </li>
                        <li className="col-md-4 p-4">
                            <a className="text-dark fs-6 text-decoration-none" href="#">
                                <img className="me-1" src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kGXmuT46/200/200/original?country=ar" width={70} /> Ensaladas
                            </a>
                        </li>
                        <li className="col-md-4 p-4">
                            <a className="text-dark fs-6 text-decoration-none" href="#">
                                <img className="me-1" src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kGXbPR72/200/200/original?country=ar" alt="Imagen McCafé" width={70} /> McCafé
                            </a>
                        </li>
                        <li className="col-md-4 p-4">
                            <a className="text-dark fs-6 text-decoration-none" href="#">
                                <img className="me-1" src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kaXT6bJZ/200/200/original?country=ar" alt="Imagen Cajita Feliz" width={70} /> Cajita Feliz
                            </a>
                        </li>

                    </div>
                </div>
            </ul>
        </li>
    )
}

export default Productos;