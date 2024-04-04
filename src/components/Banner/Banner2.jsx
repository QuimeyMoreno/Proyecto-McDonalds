import ImgBanner2 from "/Users/Quimey/OneDrive/Escritorio/Proyecto - McDonalds/mcdonalds/src/assets/Mc_Cafe_ue_DAG_Banner_1440x650_3cc41378a1.jpg"

const Banner2 = () => {
    return (
        <>
            <div className="card border-card">
                <img src={ImgBanner2} className="card-img-top" alt="Imagen Banner" />
                <div className="card-body padding-card height-card-2">
                    <h5 className="card-title text-center titulo-card">McCafé Directo al Grano</h5>
                    <p className="card-text text-center titulo-text">Simple y rico. Dejá de dar vueltas y andá Directo al Grano conociendo más de McCafé.</p>
                    <div className="d-flex justify-content-center">
                        <a href="#" className="btn  boton-banner">Ver más</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner2;