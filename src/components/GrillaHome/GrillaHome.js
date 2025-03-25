import React from "react";
import "./grillaHome.css";

export default function GrillaHome() {
  return (
    <div className="container-fluid">
      <div className="containerGrilla">
        <div className="wrapGrilla">
          <div className="boxGrilla oneGrilla">
            <a href="https://www.nsx.com.ar/intel">
            <h4 className="nombreTarjetaGrilla">INTEL</h4>
            </a>
          </div>

          <div className="boxGrilla twoGrilla">
          <a href="https://www.nsx.com.ar/corsair">
            <h4>CORSAIR</h4>
            </a>
          </div>

          <div className="boxGrilla threeGrilla">
          <a href="https://www.nsx.com.ar/asus">
            <h4>ASUS</h4>
            </a>
          </div>
          <div className="boxGrilla fourGrilla">
          <a href="https://www.nsx.com.ar/windows">
            <h4>WINDOWS</h4>
            </a>
          </div>

          <div className="boxGrilla fiveGrilla">
          <a href="https://www.nsx.com.ar/patriot">
            <h4>PATRIOT</h4>
            </a>
          </div>

          <div className="boxGrilla sixGrilla">
          <a href="https://www.nsx.com.ar/ryzen">
            <h4>AMD</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
