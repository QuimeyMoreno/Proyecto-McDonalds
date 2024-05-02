import LogoMcDonaldsHeader from "../assets/mcdonalds-logo-footer-bg-white.png"

const Logo = ({ tamano }) => {
    return (
        <>
            <div className="centrar-logo-movil">
                <img src={LogoMcDonaldsHeader} alt="Logo McDonalds Argentina" width={tamano} />
            </div>
        </>
    )
}

export default Logo