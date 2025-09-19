import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-5 p-3">
          <h2 className="fs-3 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input placeholder="Eg. how do I activate F&O" className="mb-3" />
          <br />
          <a href="" className="mx-2">Track account opening</a>
          <a href="" className="mx-2">Track segment activation</a>
          <a href="" className="mx-2">Intraday margins</a>
          <a href="" className="mx-3">Kite user manual</a>
        </div>
        <div className="col-1"></div>
        <div className="col-6 p-3">
          <h2 className="fs-3">Featured</h2>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className="mt-3">
              <a href="" >Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;