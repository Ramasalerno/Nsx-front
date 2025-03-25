import React from 'react'
import "./BannerPrincipalStyle.css"
import { Carousel } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

export const BannerPrincipal = () => {
	return (
		<div className='imgBannerPrincipal'>

			<Carousel fade className='noMostrarMobile'>

				<Carousel.Item>
					<a href="https://www.nsx.com.ar/">
						<img
							className="d-block w-100"
							src={"https://http2.mlstatic.com/D_NQ_NP_843983-MLA52433116239_112022-OO.webp"}
							alt="imagen slider"
						/>
					</a>
				</Carousel.Item>

				{/* <Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://http2.mlstatic.com/D_NQ_NP_677937-MLA52028832697_102022-OO.jpg"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item> */}

				{/* <Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://http2.mlstatic.com/D_NQ_NP_996038-MLA52286366845_112022-OO.webp"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item> */}

				{/* <Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://http2.mlstatic.com/D_NQ_NP_620365-MLA52045619361_102022-OO.jpg"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item> */}
{/* 
				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://www.nsx.com.ar/archivos/banner_asrock.jpg"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://www.nsx.com.ar/archivos/banner_amd.jpg"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://www.nsx.com.ar/archivos/banners/es/banner_adata.jpg"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://www.nsx.com.ar/archivos/banners/es/banner_intel.jpg"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://www.nsx.com.ar/archivos/banner_wd.jpg"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://www.nsx.com.ar/archivos/banner_patriot.jpg"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://www.nsx.com.ar/archivos/banner_hyperx.jpg"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://www.nsx.com.ar/archivos/banner_evga.jpg"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://www.nsx.com.ar/archivos/banner_corsair.jpg"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://www.nsx.com.ar/archivos/banner_coolermaster.jpg"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item> */}

				

			</Carousel>

		</div>
	)

}
