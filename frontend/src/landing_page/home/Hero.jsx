import React from "react";

function Hero() {
  return (
    <div className="container p-4 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-4"
        />
        <h2 className="mt-4">Invest in everything</h2>
        <h5 className="mt-3 mb-4  text-muted ">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </h5>
        <button
          className="p-2 btn btn-primary fs-5 mb-6"
          style={{ width: "19%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;