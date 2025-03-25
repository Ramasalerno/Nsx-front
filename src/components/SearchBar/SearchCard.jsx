import { Col, Container, Row } from 'react-bootstrap';
import './SearchCard.css';
import './exampleCard.css';

const SearchCard = ({ filteredProducts, searchData }) => {
  console.log(filteredProducts)

  return (
    <div>
      <Container>
        <Row>
          {searchData.map((d) => (
            <Col key={d.id}>
              <div className="examplecard-container" >
                <div className="examplecard">
                  <div className="examplecard-header">
                    <h3>{d.category}</h3>
                    <p>{d.productName}</p>
                    <span>En stock</span>
                  </div>
                  <div className="examplecard-img">
                    <img src={d.img} alt={d.category} />
                  </div>
                  <div className="examplecard-details">
                    <div className="examplecard-price">
                      <p></p>
                      <strong></strong>
                    </div>


                  </div>

                  <div className="examplecard-footer">
                    <a href={d.url} style={{ listStyle: 'none', textDecoration: "none" }}>
                      <button className='example-button' target='_blank'>Ver producto</button>
                    </a>

                  </div>
                </div>
              </div>
            </Col>

          ))}
        </Row>
      </Container>

    </div>
  );
}

export default SearchCard;