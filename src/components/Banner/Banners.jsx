import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Banner4 from "./Banner4";

const Banners = () => {
    return (
        <div className="container my-5 mb-2">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <Banner1 />
                </div>
                <div className="col-md-6 mb-4">
                    <Banner2 />
                </div>
                <div className="col-md-6 mb-4">
                    <Banner3 />
                </div>
                <div className="col-md-6 mb-4">
                    <Banner4 />
                </div>
            </div>
        </div>
    )
}

export default Banners;