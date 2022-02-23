import {MenuMilkTea} from "../menu/Menu";

const MilkTea = () => {
    return (
        <div>
            <h4>Trà Sữa</h4>
            <br/>
            <div className="row">
                {
                    MenuMilkTea.map((milktea, item) => {
                        return (
                            <div className="col-sm-3 pb-5" key={milktea.id}>
                                <div className="card rounded bg-dark text-white">
                                    <div className="social-card-header align-middle text-center">
                                        <img src={milktea.image} className="image-cafe" alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        <div className="row">
                                            <div className="col-sm-8" >
                                                <b className="text-warning">{milktea.name}</b>
                                                <div className="font-weight-bold">{milktea.price}K</div>
                                            </div>
                                            <div className="col-sm-4" onClick={(() => alert('Đã click'))}>
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