$(document).ready(function(){

	$(".btn-block-top").click(function(){
		$.get( "https://api.blockcypher.com/v1/btc/main/blocks/0000000000000000189bba3564a63772107b5673c940c16f12662b3e8546b412", function(data) {
				var htmlOutput = '';
			if(data.error != undefined){
				htmlOutput += data.error;
			}
			else{
				htmlOutput += '<td>'+data.chain+'</td><td>'+data.height+'</td><td>'+data.fees+'</td><td>'+data.bits+'</td><td>'+data.time+'</td><td>'+data.depth+'</td><td>'+data.total+'</td>';

			}
			$(".results").html( htmlOutput );
			});
	});
});



	$(".btn-address-hash").click(function(){
		var htmlOutput = '';
		if($(".input-address-hash").val() == ""){
			htmlOutput += "Address Hash input is blank. Please fill it.";
			$(".resultshash").html( htmlOutput );
		}
		else{
			$.get( "https://api.blockcypher.com/v1/btc/main/addrs/"+$(".input-address-hash").val(), function(data) {
				if(data.error != undefined){
					htmlOutput += data.error;
				}
				else{
					htmlOutput += '<p>Address: '+data.address+'</p><p>Balance: '+data.balance+'</p><p>Number of Transactions: '+data.n_tx+'</p>';
				}
				$(".resultshash").html( htmlOutput );
			});
		}
	});

	$(".btn-transaction-hash").click(function(){
		var htmlOutput = '';
		if($(".input-transaction-hash").val() == ""){
			htmlOutput += "Transaction Hash input is blank. Please fill it.";
			$(".resultstrans").html( htmlOutput );
		}
		else{
			$.get( "https://api.blockcypher.com/v1/btc/main/txs/"+$(".input-transaction-hash").val(), function(data) {
				if(data.error != undefined){
					htmlOutput += data.error;
				}
				else{
					htmlOutput += '<p>Block Height: '+data.block_height+'</p><p>Confirmations: '+data.confirmations+'</p><p>Date of confirmation: '+data.confirmed+'</p><p>Fees: '+data.fees+'</p>';
				}
				$(".resultstrans").html( htmlOutput );
			});
		}
	});