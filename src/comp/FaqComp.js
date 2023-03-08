import React from 'react'

import FaqChild from "./FaqChild";
import Login from '../AuthLogic';

const FaqComp = () => {


	const data = [

		{"key:":1, "ques":"How to Complete Identity Verification?" ,"ans":"Verify your Buynance account with any of the supported documents by following this guide."},
		{"key:":2,"ques":"How to Buy Cryptocurrency on Buynance P2P?" ,"ans":"You can now buy cryptocurrencies using Indian Rupees with 0 transaction fees on Buynance P2P! Follow this guide for Weband App."},
		{"key:":3,"ques":"How to Complete Identity Verification?" ,"ans":"Verify your Buynance account with any of the supported documents by following this guide."},
		{"key:":4,"ques":"How to Complete Identity Verification?" ,"ans":"Verify your Buynance account with any of the supported documents by following this guide."},
		{"key:":5,"ques":"How to Complete Identity Verification?" ,"ans":"Verify your Buynance account with any of the supported documents by following this guide."},

		]




	return (
		<div >
				
			<div className="faq_comp">
			<h1>FAQ </h1>

			<div className="faq_grid">
					
				{data.map((item,index) => (

					<div key={index} className="faq_list_item">
						<FaqChild item={item}/>
					</div>

				))}


			</div>

			</div>

			<div className="faq_bottom">
				<h1>Start Trading Now</h1>

				<div className="row_faq">
					<Login/>
				</div>
			</div>

		</div>
	)
}

export default FaqComp