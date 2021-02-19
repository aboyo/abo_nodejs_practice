#!/usr/bin/env node
/**
 * 上面這段是Lunix/Unix環境中宣告本檔案要使用node這個執行檔來執行
 * 而執行檔的位置是參考env這個環境變數所定義
 */
var program = require("commander");
const fetch = require("node-fetch");
const cheerio = require("cheerio");

const url = "https://www.alexa.com/topsites/";
// show top <number> sites URL on url function
const fetchTopSitesData = async (num) => {
  const response = await fetch(url)
    .then((res) => res.text())
    .then((text) => {
      let dataList = [];
      const $ = cheerio.load(text); // 載入 body
      $(".listings.table .tr.site-listing .td.DescriptionCell a").each(
        function (i, elem) {
          if (i < num) {
            dataList.push({
              title: $(elem).text(),
              href: $(elem).attr("href"),
            });
          } else {
            return;
          }
        }
      );
      return dataList;
    });
  return response;
};

// top 20 sites URL on url by country function
const fetchTopSitesByCountryData = async (country) => {
  var num = 20;
  const response = await fetch(url + "countries/" + country.toUpperCase())
    .then((res) => res.text())
    .then((text) => {
      let dataList = [];
      const $ = cheerio.load(text); // 載入 body
      $(".listings.table .tr.site-listing .td.DescriptionCell a").each(
        function (i, elem) {
          if (i < num) {
            dataList.push({
              title: $(elem).text(),
              href: $(elem).attr("href"),
            });
          } else {
            return;
          }
        }
      );
      return dataList;
    });
  return response;
};

// get countries code from url
const fetchCountriesData = async () => {
  const response = await fetch("https://www.alexa.com/topsites/countries/")
    .then((res) => res.text())
    .then((text) => {
      let dataStr = "";
      const $ = cheerio.load(text); // 載入 body
      $(".categories.top ul li a").each(function (i, elem) {
        dataStr +=
          "\t" +
          $(elem).text() +
          "(" +
          $(elem)
            .attr("href")
            .match(/(?<=\/)(\w+)/g) +
          ")" +
          "\n";
      });
      return dataStr;
    });
  return response;
};

function isNumber(val) {
  var regPos = /^[0-9]+.?[0-9]*/; //判断是否是数字。

  if (regPos.test(val)) {
    return true;
  } else {
    return false;
  }
}

// ===============
async function main() {
  program
    .command("top <number>")
    .description("show top <number> sites URL on 'www.alexa.com/topsites/'.")
    .action(async (num, options) => {
      if (isNumber(num)) {
        console.log(JSON.stringify(await fetchTopSitesData(num)));
      } else {
        console.error("error: the argument must be a numeric value.");
      }
    });

  program
    .command("country <country>")
    .description(
      "country <country> : show top 20 sites URL on 'www.alexa.com/topsites/' by country."
    )
    .action(async (c, options) => {
      console.log(JSON.stringify(await fetchTopSitesByCountryData(c)));
    })
    .addHelpText(
      "before",
      "Countries:\n" + (await fetchCountriesData()) + "\n$ clawer country TW\n"
    );
  await program.parseAsync(process.argv);
}
// run commander
main();
