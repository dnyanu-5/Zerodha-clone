import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h2 className="mb-3 text-muted fs-4">The Zerodha Universe</h2>
        <h6 className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </h6>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\zerodhaFundhouse.png" width={"60%"} />
          <p className="text-small text-muted mt-3">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\sensibullLogo.svg"  width={"60%"}/>
          <p className="text-small text-muted">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\streakLogo.png"  width={"60%"}/>
          <p className="text-small text-muted">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\goldenpiLogo.png" width={"60%"} />
          <p className="text-small text-muted">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" width={"60%"} />
          <p className="text-small text-muted">Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\dittoLogo.png" width={"60%"} />
          <p className="text-small text-muted">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
        </div>
         <Link to="/signup">
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;