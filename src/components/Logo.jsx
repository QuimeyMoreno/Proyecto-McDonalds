import LogoMcDonaldsHeader from "../assets/mcdonalds-logo-footer-bg-white.png"

const Logo = ({tamano}) => {
    return (
        <>
            <img src={LogoMcDonaldsHeader} alt="Logo McDonalds Argentina" width={tamano} />
        </>
    )
}

export default Logo