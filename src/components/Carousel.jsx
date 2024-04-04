import Banner1 from "/Users/Quimey/OneDrive/Escritorio/Proyecto - McDonalds/mcdonalds/src/assets/Banner_APP_WEB_piletacheddar_1440_X650_WEB_DESKTOP_87c29c5063.jpg"
import Banner2 from "/Users/Quimey/OneDrive/Escritorio/Proyecto - McDonalds/mcdonalds/src/assets/RRSS_Grand_Tostado_LEGALES_LARGOS_6fbd15667e.png"
import Banner3 from "/Users/Quimey/OneDrive/Escritorio/Proyecto - McDonalds/mcdonalds/src/assets/Banner_app_web_chocotorta_1440x650_1_4c5500cc30.jpg"

const Carusel = () => {
    return (
        <>

            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Banner1} className="d-block w-100" alt="Primer foto del slider" />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner2} className="d-block w-100" alt="Segunda foto del Slider" />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner3} className="d-block w-100" alt="Tercer Foto del Slider" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carusel;