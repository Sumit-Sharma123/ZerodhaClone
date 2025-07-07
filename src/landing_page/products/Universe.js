import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div class="row mt-md-5">
          <div class="col">
            <div class="up ">
              <img src="media/images/zerodhaFundhouse.png" style={{height:"55px"}}/>
              <p class="sm-rem mt-3">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
            </div>
            <div class="dw mt-5">
                <img src="media/images/streakLogo.png" style={{height:"55px"}}/>
                <p class="sm-rem mt-3">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
            </div>
        </div>
            <div class="col px-md-3">
                <div class="up ">
                    <img src="media/images/sensibullLogo.svg" style={{height:"40px"}}/>
                    <p class="sm-rem mt-3">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                 <div class="dw mt-5">
                      <img src="media/images/smallcaseLogo.png" style={{height:"55px"}}/>
                      <p class="sm-rem mt-3">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                 </div>
                </div>
                      
                <div class="col">
                    <div class="up ">
                          <img src="media/images/tijori.png" style={{height:"55px"}}/>
                          <p class="sm-rem mt-3">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                      </div>
                      <div class="dw mt-5">
                            <img src="media/images/dittoLogo.png" style={{height:"55px"}}/>
                            <p class="sm-rem mt-3">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                      </div>
                  </div>
          </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
     );
}

export default Universe;
