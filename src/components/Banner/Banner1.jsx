import ImgBanner1 from "/Users/Quimey/OneDrive/Escritorio/Proyecto - McDonalds/mcdonalds/src/assets/Banner_APP_WEB_piletacheddar_580_X250_WEB_DESKTOP_SECUNDARIO_351ac7a5a3.jpg"

const Banner1 = () => {
    return (
        <>
            <div className="card border-card">
                <img src={ImgBanner1} className="card-img-top" alt="Imagen Banner" />
                <div className="card-body padding-card height-card-1">
                    <h5 className="card-title text-center titulo-card">¡Probá la Pileta de Cheddar, che!</h5>
                    <p className="card-text text-center titulo-text">Pedí la nueva Pileta de Cheddar de McDonald's para enchufarle mucho, muchísimo cheddar a tus papitas, McNuggets y hamburguesa.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </>
    )
}

export default Banner1;