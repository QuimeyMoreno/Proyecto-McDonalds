import AppStore from "/Users/Quimey/OneDrive/Escritorio/Proyecto - McDonalds/mcdonalds/src/assets/app_store_3x_d293084ca1.png"
import PlayStore from "/Users/Quimey/OneDrive/Escritorio/Proyecto - McDonalds/mcdonalds/src/assets/disponible_google_play_3x_c977cae3bc.png"

const BotonesStore = () => {
    return (
        <div>
            <img src={AppStore} alt="AppStore" width={130} />
            <img className="ms-4" src={PlayStore} alt="PlayStore" width={140} />
        </div>
    )
}

export default BotonesStore;