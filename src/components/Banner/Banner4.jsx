import ImgBanner4 from "/Users/Quimey/OneDrive/Escritorio/Proyecto - McDonalds/mcdonalds/src/assets/Banner_APP_WEB_Mc_Melt_580x250_1_1e4818517d.jpg"

const Banner4 = () => {
    return (
        <>
            <div className="card border-card">
                <img src={ImgBanner4} className="card-img-top" alt="Imagen Banner" />
                <div className="card-body padding-card height-card-4">
                    <h5 className="card-title text-center titulo-card">¡Nueva Bacon Cheddar McMelt!</h5>
                    <p className="card-text text-center titulo-text">Llegó a McDonald's la nueva Bacon Cheddar McMelt, con mucho, muchísimo cheddar, che . Vení a probarla. Chequeadísimo que te va a encantar.</p>
                    <div className="d-flex justify-content-center">
                        <a href="#" className="btn  boton-banner">Chequeala acá</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner4;