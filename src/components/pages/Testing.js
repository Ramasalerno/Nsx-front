import axios from "axios";
import { useState, useEffect } from "react";
import Price from "./Configurador/Price";


export const Testing = () => {

      const [name, setName] = useState([]);

      useEffect(() => {
        axios
          .post(`http://localhost:5995/payment`, {
            init_point: Price
          })
          .then((res) => {
            setName(res.data.init_point);
          })
      }, []);



      let handleClick = (e) => {
        e.preventDefault();
          window.location.href=name;
      }


  return (
    <div>
        <form method="post">
            <button type='submit' onClick={handleClick}>checkout</button>
        </form>
    </div>
  )
}
