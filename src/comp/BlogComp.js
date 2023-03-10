import React from 'react';
import news_1 from "../assets/news_1.png";
import news_2 from "../assets/news_2.png";
import news_3 from "../assets/news_3.png";



const BlogComp = () => {
	return (
		<div className="blog_comp">
				
			<div className="blog_header">

				<h1>Getting started</h1>
				<p>Learn how to buy and sell crypto today.</p>

				{/* <div className="blog_filter">
					<button>Buy Crypto</button>
					<button className="bg_color">Learn About Cryptocurrency</button>
					<button className="bg_color">Buynance Trade</button>
					<button className="bg_color">Binance Ear n</button>
				</div> */}

			</div>

			<div className="blog_grid">

				<div className="grid_comp">
					<img src={news_1} alt="" style={{height:"auto"}}/>
					<p>Buy Crypto in Kenya on Buynance</p>
				</div>
				<div className="grid_comp">
					<img src={news_2} alt="" style={{height:"auto"}}/>
					<p>What Is P2P trading ?</p>
				</div>
				<div className="grid_comp">
					<img src={news_3} alt="" style={{height:"auto"}}/>
					<p>Buy and transfer cryptocurrency via Buynance</p>
				</div>

			</div>


		</div>
	)
}

export default BlogComp