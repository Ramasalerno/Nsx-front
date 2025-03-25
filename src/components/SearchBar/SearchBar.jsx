import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Loader } from '../Loader/Loader';
import './SearchBar.css';
import SearchCard from './SearchCard';
import { AllProducts } from '../DB/AllProducts';

const SearchBar = () => {

    const [inputText, setInputText] = useState('');
    var [searchData, setSearchData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (e) => {
        setInputText(e.target.value);
    }

    const searchInput = inputText.toLowerCase().replace(/ /g, '') // Declaro y sanitizo la variable de búsqueda.
    const filteredProducts = AllProducts.filter(product => 
      product.category.toLowerCase().includes(searchInput) ||
      product.productName.toLowerCase().includes(searchInput)
      ) // Filtro los productos que incluyen lo que se ingresa en el buscador.

    const handleOnSubmit = (e) => {
      setIsLoading(true)
        e.preventDefault();
        console.log(inputText);
        const searchInput = inputText.toLowerCase().replace(/ /g, '');// Sanitizo la variable para la búsqueda.
          if(searchInput){
              const res = AllProducts.filter(product => 
                product.category.toLowerCase().includes(searchInput) || 
                product.productName.toLowerCase().includes(searchInput)
                )
              setSearchData(res)
              console.log(searchData)
        }
        setTimeout(() => {
        setIsLoading(false);
        }, 500)
    }

    console.log(searchData)

  return (
  <div>
    <div className='search-bar'>
     <Form onSubmit={handleOnSubmit} className="Form">
        <Form.Control  placeholder="Buscá productos, marcas y ofertas..." value={inputText} onChange={handleOnChange} className="TextField" size='lg' />
      <button variant="primary" type="submit" className='search-productos-button'>
        Buscar
      </button>
    </Form>
    {isLoading ? <Loader /> : filteredProducts.length === 0 ? <h5>No existen productos con los parámetros ingresados por el momento.</h5> :  searchInput ? <SearchCard filteredProducts={filteredProducts} searchData={searchData}  /> : null }
    </div>
    </div>
  )
}

export default SearchBar;