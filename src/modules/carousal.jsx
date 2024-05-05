import '../App.css';

function Carousal() {
  return (
    <div className="carousal">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://s7d1.scene7.com/is/image/scom/207_HPR_24SOL_so_lg_xl?$2000w$" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h4 className="text-left carousal-text-nadpis">Solterra</h4>
              <h5 className="text-left carousel-text-nazev"  >Limited-time offers<br/> on the 2024 Solterra.</h5>
              <p className="text-left carousel-text-obsah" >Get great offers on select new 2024 Solterra EV<br/> models now through April 30, 2024.</p>
              <p className="text-left carousel-text-obsah" ><button type="button" className="btn btn-primary mt-3 carousel-button">Learn More</button></p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://s7d1.scene7.com/is/image/scom/207_HPR_24OBK_so_lg_xl?$2000w$" alt="Second slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h4 className="text-left carousal-text-nadpis">Outback</h4>
              <h5 className="text-left carousel-text-nazev"  >Limited-time offers<br/> on the 2024 Outback.</h5>
              <p className="text-left carousel-text-obsah" >Get great offers on select new 2024 Outback<br/> models now through April 30, 2024.</p>
              <p className="text-left carousel-text-obsah" ><button type="button" className="btn btn-primary mt-3 carousel-button">Learn More</button></p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://s7d1.scene7.com/is/image/scom/207_HPR_24FOR_so_lg_xl?$2000w$" alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h4 className="text-left carousal-text-nadpis">Forester</h4>
              <h5 className="text-left carousel-text-nazev"  >Limited-time offers<br/> on the 2024 Forester.</h5>
              <p className="text-left carousel-text-obsah" >Get great offers on select new 2024 Forester<br/> models now through April 30, 2024.</p>
              <p className="text-left carousel-text-obsah" ><button type="button" className="btn btn-primary mt-3 carousel-button">Learn More</button></p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousal;