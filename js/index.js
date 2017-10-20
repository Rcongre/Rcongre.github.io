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