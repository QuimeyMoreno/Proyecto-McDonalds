import AppStore from "../assets/app_store_3x_d293084ca1.png"
import PlayStore from "../assets/disponible_google_play_3x_c977cae3bc.png"

const Footer = () => {
    return (
        <div>
            <div className="container my-4">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <ul class="nav">
                            <li class="nav-item p-3">
                                <i class="fa-brands fa-square-facebook estilo-iconos rounded-circle"></i>                            </li>
                            <li class="nav-item p-3">
                                <i class="fa-brands fa-twitter estilo-iconos rounded-circle"></i>
                            </li>
                            <li class="nav-item p-3">
                                <i class="fa-brands fa-instagram estilo-iconos rounded-circle"></i>
                            </li>
                            <li class="nav-item p-3">
                                <i class="fa-brands fa-youtube estilo-iconos rounded-circle"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <div>
                            <img src={AppStore} alt="AppStore" width={130}/>
                            <img src={PlayStore} alt="PlayStore" width={140}/>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Footer;