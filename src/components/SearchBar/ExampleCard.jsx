import React from 'react';
import './exampleCard.css';

const ExampleCard = () => {

  return (
    <div className="examplecard-container">
    <div className="examplecard">
      <div className="examplecard-header">
        <h3>Product</h3>
        <p>Descripcion del producto</p>
        <span>Destacado</span>
      </div>
      <div className="examplecard-img">
        <img src="https://http2.mlstatic.com/D_NQ_NP_911035-MLA47517193363_092021-O.webp" alt="" />
        <i className="fab fa-instagram"></i>
      </div>
      <div className="examplecard-details">
        <div className="examplecard-price">
          <p>Precio:</p>
          <strong>$20.000</strong>
        </div>

        <div className="examplecard-colors">
          <div>
            <i className='fab fa-instagram'></i>
          </div>
          <div>
            <i className='fab fa-instagram'></i>
          </div>
          <div>
            <i className='fab fa-instagram'></i>
          </div>
        </div>
      </div>

     <div className="examplecard-footer">
      <button className='example-button'>Ver producto</button>
     </div>
    </div>
    </div>

  )
}

export default ExampleCard;