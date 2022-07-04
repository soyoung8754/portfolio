$(document).ready(function(){	
	
	/* 부드럽게 위아래로 링크이동 */
	$("nav a").click(function(){
		$("html,body").stop().animate({scrollTop : $(this.hash).offset().top  },1000);
	});
	
		
	/* 왼쪽메뉴 첫번째항목 활성화 */	
	$("nav li:eq(0) a").css("color" , "crimson");
		
	
	/* 왼쪽메뉴 클릭한항목 활성화,나머지항목 비활성화 */
	$("nav a").click(function(){
		$("nav a").removeClass("menuOver").css("color" , "#444");
		$(this).addClass("menuOver");
		const i = $(this).parent().index();//0,1,2,3
		colorChange(i);
	});
	
	function colorChange(i){
		switch(i){
			case 0:	$("nav li:eq(0) a").css("color","crimson");	break;
			case 1:	$("nav li:eq(1) a").css("color","#00e7ff");	break;
			case 2:	$("nav li:eq(2) a").css("color","#f07320");	break;
			case 3: $("nav li:eq(3) a").css("color","#01599a");
		}
	}
			
	
	/* 마우스 휠이나 스크롤 위치에 따라 왼쪽메뉴 활성화 */
	$(window).scroll(function(){
		//브라우저 높이값 감지
		const h = $(window).height();
		const s = $(window).scrollTop();
		
		const sh = Math.floor(s/h); //0,1,2,3
		//console.log("브라우저높이 : " + h + " , 스크롤높이 : " + s + " , 활성영역 : " + sh);
		$("nav a").removeClass("menuOver").css("color","#444");
		$("nav li").eq(sh).children().addClass("menuOver");//글자 커짐
		colorChange(sh);//글자색 변경		
	});
	
	
	
}); ////////////////////////////////끝




