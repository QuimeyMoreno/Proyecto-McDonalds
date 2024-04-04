import ImgBanner3 from "/Users/Quimey/OneDrive/Escritorio/Proyecto - McDonalds/mcdonalds/src/assets/Banner_app_web_chocotorta_1026x522_1_9f01a81249.jpg"

const Banner3 = () => {
    return (
        <>
            <div className="card border-card">
                <img src={ImgBanner3} className="card-img-top" alt="Imagen Banner" />
                <div className="card-body padding-card height-card-4">
                    <h5 className="card-title text-center titulo-card">¡Nuevo McFlurry Chocotorta!</h5>
                    <p className="card-text text-center titulo-text">Llegó a McDonald's el nuevo McFlurry Chocotorta, con un sabor argentino único. Afuera no lo entenderían.</p>
                </div>
            </div>
        </>
    )
}

export default Banner3;