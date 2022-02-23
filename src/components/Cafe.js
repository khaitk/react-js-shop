import '../App.css'
import {MenuCafe} from '../menu/Menu'

const Cafe = () => {

    console.log(MenuCafe)
    return (
        <div>
            <h4>Cafe</h4>
            <br/>
            <div className="row">
                {
                    MenuCafe.map((cafe, item) => {
                        return (
                            <div className="col-sm-3 pb-5" key={cafe.id}>
                                <div className="card rounded bg-dark text-white">
                                    <div className="social-card-header align-middle text-center">
                                        <img src={cafe.image} className="image-cafe" alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <b className="text-warning">{cafe.name}</b>
                                                <div className="font-weight-bold">{cafe.price}K</div>
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

export default Cafe