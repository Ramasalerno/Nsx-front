import React from 'react'
import { BannerBody } from '../BannerBody/BannerBody';
import { FlexMarcas } from '../FlexMarcas/FlexMarcas';
import { BannerPrincipal } from '../BannerPrincipal/BannerPrincipal';
// import HomePcGamingNotebooks from '../HomePcGamingNotebooks/HomePcGamingNotebooks';
import { FlexBody } from '../FlexBody/FlexBody';
/* import { ProductsDestacados } from '../ProductosDestacados/productsListDestacados'; */
// import { BannerBodyRog } from '../BannerBodyRog/BannerBodyRog'; 
import GrillaHome from '../GrillaHome/GrillaHome';
import SearchBar from '../SearchBar/SearchBar';
import Steps from '../Steps/Steps';
// import { Banner1 } from '../BannerBody/Banner1';
// import { Banner2 } from '../BannerBody/Banner2';

export const HomePage = () => {
  return (
    <>
        <SearchBar/>
        <BannerPrincipal/>
        {/* <ProductsDestacados/> */}
        <BannerBody/>
        <FlexBody/>
        {/* <BannerBodyRog/> */}
        {/* <BannerBodyRog/> */}
        {/* <Banner1/> */}
        <GrillaHome/>
        {/* <Banner2/> */}
        {/* <HomePcGamingNotebooks/> */}
        <FlexMarcas/>
        <Steps/>
    </>
  )
}
