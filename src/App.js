import Barra1 from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './components/HomePage/HomePage';
import { HomeFooter } from './components/HomeFooter/HomeFooter';
import { Contacto } from './components/pages/Contacto/Contacto';
import { AfterSale } from './components/pages/AfterSale/AfterSale';
import { Drivers } from './components/pages/Drivers/Drivers';
import { PageNotFound } from './components/pages/PageNotFound/PageNotFound';
import { Products } from './components/products/productsList'
import { ProductsDetail } from './components/products/productsDetail'
import { Miami } from './components/pages/WhereToBuy/Miami';
import Login from './components/pages/Login/Login';
import { ProductsDetailOffice } from './components/OfficePC/productsDetailOffice';
// import { ProductsOfficeShow } from './components/OfficePC/productsListOffice';
import { ProductsInicio } from './components/products/nuevaSeccion';
import ScrollToTop from './components/scrollToTop/scrollToTop';

// PASO 6: IMPORTAR NUESTRO PROVIDER Y ENVOLVER NUESTRA APP ---CONTEXT---dcddsdx

import { PreconfiguradoProvider } from './components/pages/Configurador/ContextConfigurador/PreconfiguradoContext';
import { ListadoProvider } from './components/pages/Configurador/ContextConfigurador/ListadoContext';
// import { Detail } from './components/pages/Configurador/Detail';
import Order from './components/pages/Configurador/Order';
// import { Configurador } from './components/pages/Configurador/ConfiguradorList';
import { MarcaProcesadorProvider } from './components/pages/Configurador/ContextConfigurador/MarcaProcesadorContext';
import { Testing } from './components/pages/Testing';
import { Success } from './components/pages/FeedbackCompra/Success';
import { Pending } from './components/pages/FeedbackCompra/Pending';
import { Failure } from './components/pages/FeedbackCompra/Failure';
// import { ProductsDestacados } from './components/ProductosDestacados/productsListDestacados';
import { AccesoriosSueltos } from './components/products/AccesoriosSueltos';
import SearchBar from './components/SearchBar/SearchBar';
import Nosotros from './components/pages/Nosotros/Nosotros';
import PowerByAsus from './components/pages/Asus/PoweredByAsus';

function App() {
  return (
    <PreconfiguradoProvider>
      <ListadoProvider>
        <MarcaProcesadorProvider>
          <BrowserRouter>
            <ScrollToTop>
              <Barra1 />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='*' element={<Navigate to="/PageNotFound" />} />
                <Route path="/PageNotFound" element={<PageNotFound />} />
                <Route path="/afterSale" element={<AfterSale />} />
                <Route path="/asus" element={<PowerByAsus />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/nosotros" element={<Nosotros />} />
                {/* <Route path="/configurador" element={<Configurador />} /> */}
                {/* <Route path="/Detail/:param" element={<Detail />} /> */}
                <Route path="/Order/:param" element={<Order />} />
                <Route path="/Drivers_equipos" element={<Drivers />} />
                <Route path='/contact' element={<Contacto />} />
                <Route path="/notebooks" element={<Products />} />
                {/* <Route path="/pcGamer" element={<ProductsOfficeShow />} /> */}
                {/* <Route path="/pcEscritorio" element={<ProductsDestacados />} /> */}
                <Route path="/marca/:catMarca" element={<ProductsInicio />} />
                <Route path="/testing" element={<Testing />} />
                <Route path="/success" element={<Success />} />
                <Route path="/pending" element={<Pending />} />
                <Route path="/failure" element={<Failure />} />
                <Route path="/productos/:filtradoCategoria" element={<AccesoriosSueltos />} />
                <Route path="/productsDetails/:param" element={<ProductsDetail />} />
                <Route path="/pcGamer/:param" element={<ProductsDetailOffice />} />
                <Route path="/miami" element={<Miami />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<SearchBar />} />
              </Routes>
              <HomeFooter />
            </ScrollToTop>
          </BrowserRouter>
        </MarcaProcesadorProvider>
      </ListadoProvider>
    </PreconfiguradoProvider>
  );
}

export default App;
