import img from '../img.png'

const Home = () => {
    return (
        <div>
            <h4>Thống Kê</h4>
            <br/>
            <div className="row">
                <div className="col-sm-4 col-md-4 col-xl-4 pb-5">
                   <div className="card rounded bg-dark text-white">
                       <div className="card-body text-center">
                           <div className="row">
                               <div className="col" >
                                   <b className="text-warning">Tổng Hôm Nay</b>
                                   <div className="font-weight-bold">1100K</div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="col-sm-4 col-md-4 col-xl-4 pb-5">
                   <div className="card rounded bg-dark text-white">
                       <div className="card-body text-center">
                           <div className="row">
                               <div className="col" >
                                   <b className="text-warning">Hoạt động</b>
                                   <div className="font-weight-bold">5</div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="col-sm-4 col-md-4 col-xl-4 pb-5">
                   <div className="card rounded bg-dark text-white">
                       <div className="card-body text-center">
                           <div className="row">
                               <div className="col" >
                                   <b className="text-warning">Bán Được</b>
                                   <div className="font-weight-bold">255 SP</div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Home