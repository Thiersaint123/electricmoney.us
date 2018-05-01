fetch("https://api.coinmarketcap.com/v1/ticker/bitcoin/")
.then((res) => res.json())
.then((json) => {

    const element = document.querySelector("#price");
    element.innerHTML = `${element.innerHTML} ${json[0].price_usd}`;

	if (element < 0) {
		document.getElementById("#price").style.color="red";
	}
else if (element > 0) {
	document.getElementsByName("#price").style.color="#	2eff00";
	
}
	
	
})
.catch((e) => {
    console.error(e);
});	
	
fetch("https://api.coinmarketcap.com/v1/ticker/bitcoin/")
.then((res) => res.json())
.then((json) => {
    const element = document.querySelector("#marketcap");
	element.innerHTML = `${element.innerHTML} ${json[0].market_cap_usd}`;



	
})
.catch((e) => {
    console.error(e);
});	