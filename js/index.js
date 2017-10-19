$(document).ready(function(){

	$(".btn-block-top").click(function(){
		$.get( "https://api.blockcypher.com/v1/btc/main/blocks/0000000000000000189bba3564a63772107b5673c940c16f12662b3e8546b412", function(data) {
				var htmlOutput = '';
			if(data.error != undefined){
				htmlOutput += data.error;
			}
			else{
				htmlOutput += '<p>Height: '+data.fees+'</p><p>Hash: '+data.chain+'</p><p>Time: '+data.bits+'</p><p>Fees: '+data.height+' satoshis</p>';

			}
			$(".results").html( htmlOutput );
			});
	});