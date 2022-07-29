$(document).ready(function(){
	//alert("ddd");
	$("#photo figure").click(function(){
		const x1=$(this).children("img").attr("src"); //src,alt°¡ »¡°£»ö±ÛÀÚ¶ó attrÀ» ¾¸
		console.log(x1);
		const x2=$(this).children("img").attr("alt");
		console.log(x2);
		$("#popup img").attr({
			"src": x1,
		 	"alt": x2
		});
		$("#popup").fadeIn();
	});
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});
});