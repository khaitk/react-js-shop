import {MenuMilkTea} from "../menu/Menu";
import {useState} from "react";

const MilkTea = () => {

    const [cart, setCart] = useState(0);

    const addCart = () => {
        setCart(cart + 1);
    }

    console.log(cart)

    return (
        <div>
            <h4>Trà Sữa</h4>
            <br/>
            <div className="row">
                {
                    MenuMilkTea.map((milktea, item) => {
                        return (
                            <div className="col-sm-3 col-md-3 col-xl-3 pb-5" key={milktea.id}>
                                <div className="card rounded bg-dark text-white">
                                    <div className="social-card-header align-middle text-center">
                                        <img src={milktea.image} className="image-cafe" alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        <div className="row">
                                            <div className="col-sm-8 col-md-8 col-xl-8" >
                                                <b className="text-warning">{milktea.name}</b>
                                                <div className="font-weight-bold">{milktea.price}K</div>
                                            </div>
                                            <div className="col-sm-4 col-md-4 col-xl-4" onClick={(() => addCart())}>
                                                <i className="fas fa-shopping-cart"></i>
                                                <span className="text-muted"></span>
                                                <div className="font-weight-bold">Thêm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MilkTea