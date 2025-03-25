import React from 'react'
import { Footer } from "../Footer/Footer"
import { FooterRss } from "../Footer/FooterRss"
import { FooterSN } from "../Footer/FooterSN"

export const HomeFooter = () => {
  return (
    <div>
        <FooterSN/>
        <Footer/>
        <FooterRss/>
    </div>
  )
}
