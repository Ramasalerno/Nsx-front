import React from 'react'
import "./FooterRssStyle.css"

export const FooterRss = () => {
  return (
    <div>
      <div className='footer_3'>
        <h4>Seguinos en nuestras redes!</h4>
        <section>
          <ul className="icon-list">
            <li className="icon-item">
              <a href="https://www.instagram.com/nsxgaming.usa/" target='_blank' rel="noreferrer" className="icon-link"><i className="fab fa-instagram"></i></a>
            </li>
            <li className="icon-item">
              <a href=" https://www.facebook.com/nsxgaming.usa" target='_blank' rel="noreferrer" className="icon-link"><i className="fab fa-facebook-f"></i></a>
            </li>
            <li className="icon-item">
              <a href="https://twitter.com/nsxcomputers/" target='_blank' rel="noreferrer" className="icon-link"><i className="fab fa-twitter"></i></a>
            </li>
            <li className="icon-item">
              <a href="https://www.youtube.com/channel/UCS1CZ8fhiOfX6J-GZzWfm-w" target='_blank' rel="noreferrer" className="icon-link"><i className="fab fa-youtube"></i></a>
            </li>
            <li className="icon-item">
              <a href="https://www.linkedin.com/company/nsx-llc/" target='_blank' rel="noreferrer" className="icon-link"><i className="fab fa-linkedin-in"></i></a>
            </li>
          </ul>
        </section>
        <h5 className='mt-3'>Copyright © 2023. All rights reserved.</h5>
      </div>
    </div>
  )
}
