import React from 'react';
import news_2 from "../assets/news_2.png";



const ProductComp = () => {
	return (
		<div className="blog_comp">
				
			<div className="blog_header">

				<h1>A full suite of products</h1>

				<div className="blog_filter">
					<button>Spot</button>
					<button className="bg_color">USD -Futures </button>
					<button className="bg_color">Savings</button>
					{/* <button className="bg_color">Staking</button> */}
				</div>

			</div>

			<div className="blog_grid">

				<div className="pro_grid_comp">
					<h1>Trade seamlessly with Buynance </h1>
					<p>Trade 5 cryptocurrency and fiat pairs, including Bitcoin, Ethereum, and BNB with Binance Spot. Experience seamless trading with the largest crypto exchange by trade volume. Our matching system is capable of processing multiple orders per second.</p>
					<button>Trade Now </button>
				</div>
				<div className="pro_grid_comp">
					<img src={news_2} alt="" />
				</div>
				
			</div>


		</div>
	)
}


export default ProductComp