console.log({Web3})

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

console.log(web3)
web3.eth.getGasPrice((err, result) => {
	console.log(err || result.toString(10))	
})

web3.eth.getBlock(3150,(err, result) => {
	console.log(err || result)
})

function getBlock(number) {
	
	var blockNumberInput = document.getElementById("blockNumberInput").value
	
	var resultParagraph = document.getElementById("resultParagraph")
	var resultParagraph2 = document.getElementById("resultParagraph2")
	web3.eth.getBlock(blockNumberInput, (err, result) => {
          resultParagraph.innerHTML = err || JSON.stringify(result, null, 4)
          resultParagraph2.innerHTML = err || JSON.stringify(result, null, 4)
})
	
}