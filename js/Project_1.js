$(function() {
	// 1차 네비게이션
				$("nav > ul > li").hover(
					function(){
						$("header").addClass("on");
						$(".dim_main").stop().fadeIn(300);
					},
					function(){
						$("header").removeClass("on");
						$(".dim_main").fadeOut(300);
					}
				);
	//1차 네비게이션 포커스
				$("header .inner nav > ul > li > a").focusin(function(){
				$(this).parent().addClass("active");
				$("header").addClass("on");;
				});
				$("header .inner nav > ul > li li:last-child").focusout(function(){
					$(this).parent().parent().removeClass("active");
					$("header").removeClass("on");
				});
	// PC버전 sitemap
			$(".tab a").click(function(e){
				e.preventDefault();
				$("#sitemap").addClass("on");
				$(".dim_main").addClass("on");
			});	
			$("#exit").click(function(e){
				e.preventDefault();
				$("#sitemap").removeClass("on");
				$(".dim_main").removeClass("on");
			});	
			$(".dim_main").click(function(e){
				e.preventDefault()
				$("#sitemap").removeClass("on")
				$(".dim_main").removeClass("on")
				// $(".dim").removeClass("on")
			});
	//Mobile 버전 네비게이션
			$("#tab").click(function(e){
					e.preventDefault();
					$("#mobile").addClass("active")
					$(".dim").addClass("active")
					$("body").addClass("fixed");
				})
			$("#exit_1").click(function(e){
				e.preventDefault();
				$("#mobile").removeClass("active")
				$(".dim").removeClass("active")
				$("body").removeClass("fixed");
			})	
			$(".dim").click(function(e){
				e.preventDefault()
				$("#mobile").removeClass("active")
				$(".dim").removeClass("active")
			});
	//Mobile버전 2차 네비게이션
			$("#mobile > ul > li").click(function(e){
				e.preventDefault()
				if($(this).hasClass("active") === false){
					$("#mobile > ul > li").removeClass("active")
					$(this).addClass("active")
					$("#mobile ul ul").slideUp(300)
					$(this).children("ul").slideDown(300)
				}
				else {
					$(this).removeClass("active")
					$(this).children("ul").slideUp(300)
				}	
			});
	// 메인 슬라이더 
			let mainCurrent, mainTotal;
			const mainSwiper=new Swiper(".mainSwiper", {
				navigation: {
					nextEl: ".mainSwiper .swiper-button-next",
					prevEl: ".mainSwiper .swiper-button-prev"
				},
				// 	loop :true,	//사진 떨림 방지.
				autoplay: {
					delay: 5000
				},
				pagination: {
					el: ".mainSwiper .swiper-pagination",
					clickable:true,
				},
				on: {
					init: function() {
					mainCurrent=this.realIndex+1;
					mainTotal=this.slides.length;
					$(".main_slider .curent_num .current").text(mainCurrent);
					$(".main_slider .curent_num .total").text(mainTotal);
					},
					slideChangeTransitionEnd: function(){
					mainCurrent=this.realIndex+1;
					$(".main_slider .curent_num .current").text(mainCurrent);
					}
				}
			});
	//mainslider 버튼
			$(".main_slider .prev").click(function(e){
				e.preventDefault();
				mainSwiper.slidePrev();
			});
			$(".main_slider .next").click(function(e){
				e.preventDefault();
				mainSwiper.slideNext();
			});
			$("#pause_play").click(function(e){
				e.preventDefault();
				if($(this).hasClass("play")){
						$(this).removeAttr("class");
						$(this).addClass("pause");
						mainSwiper.autoplay.start();
					}
				else{
					$(this).removeAttr("class");  
					$(this).addClass("play");
					mainSwiper.autoplay.stop();
					$(".curent_num .total").text(total);
					}
			});
	//risize 
		let winw;
			$(window).resize(function(){
				winw=$(window).width();
				if(winw > 1400) {
						$("#mobile").removeClass("active");
						$(".dim").removeClass("active");
						$("body").removeClass("fixed");
				}
				else{
					$("#sitemap").removeClass("on");
					$(".dim_main").removeClass("on")
				}
			});
	//page3 subslider
		let swiper=new Swiper(".mySwiper", {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			pagination: { 
				el: ".swiper-pagination",
				type: "fraction"
			},
			scrollbar: {
			el: '.swiper-scrollbar',
				draggable: true,
				hide:false
			},
			navigation: {
			nextEl: ".swiper .controller ul li a.next",
			prevEl: ".swiper .controller ul li a.prev",
			},
			autoplay: {
			delay: 1500,
			},
			breakpoints: {
				200: {
					slidesPerView: 1
				},
				640: {
					slidesPerView: 2
				},
				785: {
					slidesPerView: 3	
				},
				1100: {
					slidesPerView: 4
				}
			}
		});
	//footer sitemap 네비게이션
			$(".footer_menu a").click(function(e){
				e.preventDefault();
			if($(".popup").hasClass("active") == false){
				$(".popup").slideDown(300);
				$(".popup").addClass("active");
				$("footer .footer_inner .footer_bottom .footer_menu a.site img").addClass("active");
			}
			else{
				$(".popup").slideUp(300);
				$(".popup").removeClass("active");
				$("footer .footer_inner .footer_bottom .footer_menu a.site img").removeClass("active");
			}
		});
	});