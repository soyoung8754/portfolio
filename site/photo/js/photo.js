$(document).ready(function(){
		
		//상단왼쪽방향으로 자동 슬라이드
		setInterval(leftMove2,5000);
		function leftMove2(){
				$("#slide").stop().animate({left: "-1000px"},1000,function(){
					$("#slide").append( $("#slide img:first-child")  );
					$("#slide").css("left","0");//처음 위치로
					let sk = $(".skyblue").index();//[0,1,2,3,4]
					if(sk == 4){sk=-1;}
					$("#circle div").eq(sk+1).addClass("skyblue").siblings().removeClass("skyblue");
				});	
		}
		
					
		//하단슬라이드: 왼쪽버튼클릭
		$("#ss button:first-child").click(function(){
				leftMove();
		});
		
		//하단슬라이드: 오른쪽버튼클릭
		$("#ss button:last-child").click(function(){
				rightMove();
		});
		
		//하단 왼쪽이동 슬라이드
		function leftMove(){
			$("#ss button:first-child").prop("disabled", true);
				$("#slide2").stop().animate({left: "-500px"},500,function(){
					$("#slide2").append( $("#slide2 img:first-child")  );
					$("#slide2").css("left","-250px");//처음 위치로
					$("#ss button:first-child").prop("disabled", false);
				});
		}

		//하단 오른쪽이동 슬라이드
		function rightMove(){
			$("#ss button:first-child").prop("disabled", true);
				$("#slide2").stop().animate({left: "0"},500,function(){
					$("#slide2").prepend( $("#slide2 img:last-child")  );
					$("#slide2").css("left","-250px");//처음 위치로
					$("#ss button:first-child").prop("disabled", false);
				});
		}
		
		
	
});////////////////////////end