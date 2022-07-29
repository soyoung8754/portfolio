$(document).ready(function(){
	//이벤트 썸네일이미지 마우스오버
	$("#event> div> div").hover(
		function(){
			$(this).addClass("ho");			
		} , 
		function(){
			$(this).removeClass("ho");
		}
	);
	//이벤트 썸네일이미지 클릭
	$("#event> div> div").click(function(){
		const x = $(this).children("img").attr("src");		
		const y = x.substr(-4);// ".jpg" 또는 ".png"...	
		const z = x.slice(0,-4);//예_ "images/event-1"부분
		const zz = z + "_big" + y;
		$("#popup img").attr("src" , zz);
		const txt = $(this).children("img").attr("alt");				
		$("#popup img").attr("alt", txt);  //alt속성값 부여
		$("#popup h3").text( txt ); //h3안 콘텐츠 텍스트 부여
		$("#popup").fadeIn();
		$("body").css("overflow","hidden");		
	});
	//팝업 큰이미지 닫기
	$("#popup img").click(function(){
		$("#popup").fadeOut();
		$("body").css("overflow","auto");
	});
	
	//상단 메뉴 부드럽게 이동
	$("#menu a, #top a").click(function(){
		//큰화면에서만, 부드럽게 스크롤이동
		if( $(window).width() > 768 ){
			$("html,body").stop().animate({scrollTop : $(this.hash).offset().top });
		}
		//상단 메뉴 - 활성화 유지 (색변경)
		//if( $("#menu a") ){
			$("#menu a").removeClass("active");
			$(this).addClass("active").siblings().removeClass("active");
		//}
	});
	
	//상단 한글자씩 나오는 기능 (타자치는 효과)
	const typing = "새 한마리만 그려 넣으면 \n남은 여백 모두가 하늘이어라.\n화선지 - 이외수"
	console.log(typing);
	//$("h1").html( typing[4]  );  "요"
	let i = 0; 
	let txt = "";
	function type(){
		if( i < typing.length ){			
			txt += typing[i];
			document.getElementById("typing").innerText = txt;
			i++;
			setTimeout( type, 100 );
		}
	}
	type();
	
	//휴대폰에서는 상단 배경색 보임, 스크롤하면 해당메뉴 색 들어옴
	if( $(window).width()<= 600 ){
		/*console.log($("#about").position().top);
			console.log($("#portfolio").position().top);
			console.log($("#event").position().top);
			console.log($("#contact").position().top);*/
		$("nav").addClass("act");
		
			$(window).scroll(function(){				
			if( $(window).scrollTop() > 831 /*&&   $(window).scrollTop() < 1999*/){
				$("#menu a").removeClass("active");
				$("#menu a").eq(1).addClass("active").siblings().removeClass("active");
			}
			if( $(window).scrollTop() > 2000 /*&&   $(window).scrollTop() < 4999*/ ){
				$("#menu a").removeClass("active");
				$("#menu a").eq(2).addClass("active").siblings().removeClass("active");
			}
			if( $(window).scrollTop() > 5000 /* &&   $(window).scrollTop() < 9999*/){
				$("#menu a").removeClass("active");
				$("#menu a").eq(3).addClass("active").siblings().removeClass("active");
			}
			if( $(window).scrollTop() > 10000 ){
				$("#menu a").removeClass("active");
				$("#menu a").eq(4).addClass("active").siblings().removeClass("active");
			}
		});	
	
	} else{	
		//휴대폰 아닐때
		//화면 스크롤시 상단 배경색 생김
		//((모바일이 아닌 화면))스크롤을 내릴때마다 작품이 하나씩 보임
		//((모바일 아닌 화면))스크롤 시 메뉴 색변경되어 들어옴
		//스킬 바 색상 들어옴
			$(window).scroll(function(){
				
				if( $(window).scrollTop()>200 ){            
        $(".w1").stop().animate({width:"95%"});
        $(".w2").stop().delay(600).animate({width:"90%"});
        $(".w3").stop().delay(1000).animate({width:"80%"});
        $(".w4").stop().delay(1400).animate({width:"70%"});
        $(".w5").stop().delay(1800).animate({width:"60%"});
        }
				
				if( $(window).scrollTop() > 100 ){
				$("nav").addClass("act");
				} 
				if( $(window).scrollTop() <= 100 ){
					$("nav").removeClass("act");
				}	
				
				if( $(window).scrollTop()>1600 ){
					$("#portfolio> section").eq(0).addClass("act");
				}
				if( $(window).scrollTop()>2500 ){
					$("#portfolio> section").eq(1).addClass("act");
				}
				if( $(window).scrollTop()>3400 ){
					$("#portfolio> section").eq(2).addClass("act");
				}
				
				if( $(window).scrollTop() > 0){
				$("#menu a").removeClass("active");
				$("#menu a").eq(0).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop() > 920){
				$("#menu a").removeClass("active");
				$("#menu a").eq(1).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop() > 1840){
					$("#menu a").removeClass("active");
					$("#menu a").eq(2).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop() > 4580){
					$("#menu a").removeClass("active");
					$("#menu a").eq(3).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop() > 6000){
					$("#menu a").removeClass("active");
					$("#menu a").eq(4).addClass("active").siblings().removeClass("active");
				}
			});
			
	}
	
	
/*	if( $(window).width() > 600 ){
			console.log($("#top").position().top);
			console.log($("#about").position().top);
			console.log($("#portfolio").position().top);
			console.log($("#event").position().top);
			console.log($("#contact").position().top);
		$("nav").addClass("act");
		
	}*/
	
	
	
});//끝



/****************************상단 배경에 별을 만들어보자******************************/
function init(){

  //estrelas

  var style = ["style1", "style2", "style3", "style4"];
  var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
  var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var estrela = "";
  var qtdeEstrelas = 250;
  var noite = document.querySelector(".constelacao");
  var widthWindow = window.innerWidth;
  var heightWindow = window.innerHeight;

  for (var i = 0; i < qtdeEstrelas; i++) {
    estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
    + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." +getRandomArbitrary(0, 9)+ "s; left: "
    + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
  }

  noite.innerHTML = estrela;

  //meteoros

  var numeroAleatorio = 5000;

  setTimeout(function(){
    carregarMeteoro();
  }, numeroAleatorio);

  function carregarMeteoro(){
    setTimeout(carregarMeteoro, numeroAleatorio);
    numeroAleatorio = getRandomArbitrary(5000, 10000);
    var meteoro = "<div class='meteoro "+ style[getRandomArbitrary(0, 4)] +"'></div>";
    document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = meteoro;
    setTimeout(function(){
      document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = "";
    }, 1000);
  }

}

window.onload = init;