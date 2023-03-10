import React, { useState, useEffect } from "react";
import Login from "../AuthLogic";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const CoverComp = () => {
  const [coindata, setCoinData] = useState([]);
  const { isAuthenticated} = useAuth0();
  const [usdRate, setUsdRate] = useState(0)

  const getData = async() => {
    await axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false", 
      )
      .then((res) => {
        const data = res.data;
        setCoinData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRate = async() => {
    await axios
      .get(
        "https://currency-exchange.p.rapidapi.com/exchange?from=USD&to=KES",{
			headers:{
				"X-RapidAPI-Key":"854df7ec19mshe57e3948bf89596p1e5251jsn6a9b7f59aae6",
				"X-RapidAPI-Host":"currency-exchange.p.rapidapi.com"
			}
		}
      )
      .then((res) => {
        const dataro = res.data;
		setUsdRate(dataro)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
	getRate();
  }, []);

  const TradeStart = () => {
	const navigate = () => {
		window.location.href = 'https://trade.buynance.org'
	}
    if (isAuthenticated) {
      return (
          <button className="yellow_button" onClick={navigate}>Trade Now</button>
      );
    } else {
      return <Login />;
    }
  };
  return (
    <div className="cover">
      <div className="cover_top">
        <h1>Buy crypto conveniently via mpesa</h1>
        <p>Join the Kenya's largest crypto exchange. Designed for Kenyans</p>
        {}
        <TradeStart />
      </div>

      <div className="cover_middle cover_grid">
        {coindata.map((item, index) => {
          const uppercaseSymbol = item.symbol.toUpperCase();
          const current_price = Math.ceil(item.current_price * usdRate);
          let cstate;
          if (item.market_cap_change_percentage_24h < 0) {
            cstate = "color_red";
          } else {
            cstate = "color_green";
          }
          const imageurl = item.image;
          return (
            <div className="grid_comp">
              <div className="comp_top">
                <div>
                  <h3>{item.name}</h3>
                </div>
                <div className="comp_top_head">
                  <img src={imageurl} alt="bitcoin" />
                  <div>
                    <h2>{uppercaseSymbol}/KES</h2>
                    <p>Volume {item.total_volume} BUSD</p>
                  </div>
                  <p className={`${cstate}`} style={{textAlign:"right"}}>
					<span style={{color:"#000"}}>price change<br/> last hour </span> <br/>
                    {item.market_cap_change_percentage_24h}%
                  </p>
                </div>
              </div>
              <div className="comp_middle">
                <h3>1 {uppercaseSymbol} =</h3>
                <h1 className={`${cstate}`}>{current_price} KES</h1>
                <div>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="comp_bottom">
                {/* <img src={graph} alt="graph" /> */}
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="cover_bottom">
				<h1>Market trend</h1>


				<div className="price_table">

					<div className="price_header">
						<div className="name">
							<p>Name</p>
						</div>
						<div className="name">
							<p>Last Price</p>
						</div>
						<div className="name">
							<p>24th Change</p>
						</div>
						<div className="name">
							<p>Market</p>
						</div>
						<div className="name">
							<p></p>
						</div>
					</div>

					<div className="price_header">
						<div className="coin_data">
							<img src={bit} alt="bitcoin" />
							<h2>BNB</h2>
							<p>BNB</p>
						</div>
						<div className="coin_data">
							<h3>$301.12</h3>
						</div>
						<div className="coin_data">
							<h4>-0.003</h4>
						</div>
						<div className="coin_data_graph">
							<img src={graph} alt="graph" />
						</div>
						<div className="coin_data">
							<button>Buy</button>
						</div>
					</div>
					<div className="price_header">
						<div className="coin_data">
							<img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png" alt="bitcoin" />
							<h2>BNB</h2>
							<p>BNB</p>
						</div>
						<div className="coin_data">
							<h3>$301.12</h3>
						</div>
						<div className="coin_data">
							<h4>-0.003</h4>
						</div>
						<div className="coin_data_graph">
							<img src={graph} alt="graph" />
						</div>
						<div className="coin_data">
							<button>Buy</button>
						</div>
					</div>
					<div className="price_header">
						<div className="coin_data">
							<img src="https://pbs.twimg.com/profile_images/1389823228533739522/-Tj2WF_6.jpg" alt="bitcoin" />
							<h2>DOT</h2>
							<p>BNB</p>
						</div>
						<div className="coin_data">
							<h3>$301.12</h3>
						</div>
						<div className="coin_data">
							<h4>-0.003</h4>
						</div>
						<div className="coin_data_graph">
							<img src={graph} alt="graph" />
						</div>
						<div className="coin_data">
							<button>Buy</button>
						</div>
					</div>
					<div className="price_header">
						<div className="coin_data">
							<img src="https://pbs.twimg.com/profile_images/1389823228533739522/-Tj2WF_6.jpg" alt="bitcoin" />
							<h2>DOT</h2>
							<p>BNB</p>
						</div>
						<div className="coin_data">
							<h3>$301.12</h3>
						</div>
						<div className="coin_data">
							<h4>-0.003</h4>
						</div>
						<div className="coin_data_graph">
							<img src={graph} alt="graph" />
						</div>
						<div className="coin_data">
							<button>Buy</button>
						</div>
					</div>
					<div className="price_header">
						<div className="coin_data">
							<img src="https://pbs.twimg.com/profile_images/1389823228533739522/-Tj2WF_6.jpg" alt="bitcoin" />
							<h2>DOT</h2>
							<p>BNB</p>
						</div>
						<div className="coin_data">
							<h3>$301.12</h3>
						</div>
						<div className="coin_data">
							<h4>-0.003</h4>
						</div>
						<div className="coin_data_graph">
							<img src={graph} alt="graph" />
						</div>
						<div className="coin_data">
							<button>Buy</button>
						</div>
					</div>

				</div>

			</div> */}

      <div className="bottom_line">
        <h2>Coming soon</h2>
        <p style={{ textAlign: "center" }}>
          At the moment we only offert the top 5 crypto currencies in the
          markets but will soon allow for all tokens on evm and other layer two
          chains
        </p>
      </div>
    </div>
  );
};

export default CoverComp;
