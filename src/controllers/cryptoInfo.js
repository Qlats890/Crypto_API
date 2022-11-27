const axios = require("axios");
const cheerio = require("cheerio");

class CryptoInfoController {
  static async getTopCrypto(req, res) {
    const topNumber = req.query.top || 10;
    if (topNumber >= 11) {
      res.status(400).json({
        data: "400 - Input the Data Less then 10",
      });
    } else {
      console.log(topNumber);
      try {
        const url = process.env.URL_SCRAP;
        const { data } = await axios({
          method: "GET",
          url: url,
        });
        // console.log(data);
        const $ = cheerio.load(data);
        const elemSelect =
          "#__next > div > div.main-content > div.sc-1a736df3-0.PimrZ.cmc-body-wrapper > div > div:nth-child(1) > div.sc-f7a61dda-2.efhsPu > table > tbody > tr";

        const keys = [
          "rank",
          "name",
          "price",
          "1h",
          "24h",
          "7d",
          "marketCap",
          "volume",
          "circulatingSupply",
        ];
        const coinArr = [];
        $(elemSelect).each((parentIndex, parentElem) => {
          let keyIndex = 0;
          const coinObj = {};
          if (parentIndex <= topNumber - 1) {
            $(parentElem)
              .children()
              .each((childIndex, childElem) => {
                let tdValue = $(childElem).text();
                if (keyIndex === 1 || keyIndex === 7) {
                  // console.log($('p:first-child',$(childElem).html()).text());
                  tdValue = $("p:first-child", $(childElem).html()).text();
                }
                if (keyIndex === 6) {
                  // console.log($('p:first-child span:first-child',$(childElem).html()).next().text());
                  tdValue = $(
                    "p:first-child span:first-child",
                    $(childElem).html()
                  )
                    .next()
                    .text();
                }
                if (tdValue) {
                  coinObj[keys[keyIndex]] = tdValue;
                  keyIndex++;
                }
              });
            coinArr.push(coinObj);
          }
        });
        res.status(200).json({
          data: coinArr,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          data: "500 - Server Error!",
        });
      }
    }
  }
}

module.exports = CryptoInfoController;
