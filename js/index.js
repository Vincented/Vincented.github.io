// 加载完毕再执行
$(document).ready(function(){
	// 配置fullpage
	 $('#dowebok').fullpage({
		scrollingSpeed: 400,
		// css3: true,
		// resize: true,
		anchors: ["page1","page2","page3","page4","page5","page6"],
		verticalCentered: false,
		afterRender: function(){
			// 初始化各个页面 防止出现bug
			$('#home_info p').css('display','none');
			$('#about_info p').css('bottom','-300px');
			$(".skill_list_content").removeClass("skill_scale");
			$(".exp_scale").removeClass('b_to_t');
			$(".demo_scale").removeClass('b_to_t');
			$(".contact_scale").removeClass('fade_in');


			$("#home").css({"display":"block"}).addClass("home_zoom");
			$("aside").css({"top":($(".active").height()-$("aside").height())/2});
			$("header").before("<div id='header' style='opacity:0'></div>");
			$("#home_head").css({"margin-top":"100px"});
			$("header").animate({opacity:"1"},1000,function(){
				console.log(222);
				$("#header").css({"opacity":"0.3"});
				$("#home_info1").fadeIn(700,function(){
					$(this).next().animate({width:"800px"},700,function(){
						$("#home_info2").fadeIn(450,function(){
							$(this).next().fadeIn(450,function(){
								$(this).next().fadeIn(450,function(){
									$(this).next().fadeIn(450,function(){
										$("aside").fadeIn(300);
									});
								});
							});
						});
					});
				});
			});
			$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
		},
		// 加载某个页面时执行
		afterLoad: function(anchorLink,index){
			// page1
			if(index==1){
				$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
				$("header").animate({opacity:"1"},1000,function(){
					console.log(222);
					$("#header").css({"opacity":"0.3"});
					$("#home_info1").fadeIn(700,function(){
						$(this).next().animate({width:"800px"},700,function(){
							$("#home_info2").fadeIn(450,function(){
								$(this).next().fadeIn(450,function(){
									$(this).next().fadeIn(450,function(){
										$(this).next().fadeIn(450,function(){
											$("aside").fadeIn(300);
										});
									});
								});
							});
						});
					});
				});
			}
			// page2
			if(index==2){
				// alert(2222);
				$("aside a").eq(1).addClass("selected").siblings().removeClass("selected");
				$("#about_content h1").after("<div class='title_en'><h2>· About me ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
				$("#about_info").animate({width:"800px",marginTop:"0",marginBottom:"0"},700,'easeOutElastic',function(){
					$("#about_info p").eq(0).animate({bottom:"0"},700,function(){
						$("#about_info p").eq(1).animate({bottom:"0"},700,function(){
							$("#about_info p").eq(2).animate({bottom:"0"},700,function(){
								$("#about_info p").eq(3).animate({bottom:"0"},700);
							});
						});
					});
				});
			}
			// page3
			if(index==3){
				$("aside a").eq(2).addClass("selected").siblings().removeClass("selected");
				$("#skill_content h1").after("<div class='title_en'><h2>· Skill ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
				$(".skill_list_content").addClass("skill_scale");
				pageThreeClick();
			}
			// page4
			if(index==4){
				$("aside a").eq(3).addClass("selected").siblings().removeClass("selected");
				$("#exp_content h1").after("<div class='title_en'><h2>· Experience ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
				var i=-1;
				$(".exp_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
						   $this.addClass("b_to_t");
					   },200*i);
					}
                });
				$("#exp_list_to").fadeIn(800).delay(500).fadeTo(300,0.3);
				// 调用图片轮播
				pageFourWheel();
			}
			// page5
			if(index==5){
				$("aside a").eq(4).addClass("selected").siblings().removeClass("selected");
				$("#demo_content h1").after("<div class='title_en'><h2>· Demo ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
				var i=-1;
				$(".demo_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*i);
					}
				})
			}
			// page6
			if(index==6){
				$("aside a").eq(5).addClass("selected").siblings().removeClass("selected");
				$("#contact_content h1").after("<div class='title_en'><h2>· Contact me ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
				var i=-1;
				$("#contact_head1").addClass("b_to_t");
				$("#contact_head2 span").each(function(){
					var $this=$(this);
					if(!$this.hasClass("fade_in")){
						i++;
						setTimeout(function(){
					   $this.addClass("fade_in");
					   },200*i);
					}
				});
				var j=-1;
				setTimeout(function(){
						$(".contact_scale").each(function(){
							var $this=$(this);
							if(!$this.hasClass("fade_in")){
								j++;
								setTimeout(function(){
					   				$this.addClass("fade_in");
					   			},350*j);
							}
						});
				},70);
				pageSixClick();
			}
		},
		// 离开页面执行
		onLeave:function(index){
			if(index==2||index==3||index==4||index==5||index==6){
				$(".title_en").remove();
				// page1初始化
				$('#home_info p').css('display','none');
				// page2初始化
				$('#about_info p').css('bottom','-300px');
				// page3初始化
				$(".skill_list_content").removeClass("skill_scale");
				// page4初始化
				$(".exp_scale").removeClass('b_to_t');
				// page5初始化
				$(".demo_scale").removeClass('b_to_t');
				// page6初始化
				$(".contact_scale").removeClass('fade_in');
			}
		}
	});
	// page3 点击技能切换
	function pageThreeClick(){
		$(".skill_icon").on('click',function(){
			console.log(222);
			$(".skill_int").each(function(){
				if($(this).is(":visible")){
					$(this).slideUp(500);
					$(this).prev().removeClass("skill_flag_scale");
				}
			});
			if($(this).siblings(".skill_int").is(":hidden")){
				$(this).siblings(".skill_int").slideDown(1000);
				$(this).siblings(".skill_flag").addClass("skill_flag_scale");
			}else{
				$(this).siblings(".skill_int").slideUp(500);
				$(this).siblings(".skill_flag").removeClass("skill_flag_scale");
			}
		});
	}
	// page4 的轮播图
	function pageFourWheel(){
		$("#exp_list_slider").width($(".exp_list").width());
		$("#exp_list_content").width($(".exp_list").width()*3);
		// $("#exp_list_slider_content").mouseover(function(){
		// 	$("#exp_list_to").stop(true,false).fadeTo(700,1);
		// }).mouseout(function(){
		// 	$("#exp_list_to").stop(true,false).fadeTo(700,0.1);
		// });
		var page=1;
		$("#exp_timeline a").click(function(){
			$("#exp_list_content").stop(true,false).animate({left:-$(".exp_list").width()*$(this).index()},2000,"easeInOutCubic");
			page=$(this).index()+1;
			});
		$("#exp_list_toleft").click(function(){
			if(!$("#exp_list_content").is(":animated")){
				if(page==1){
					$("#exp_list_content").animate({left:"+=50"},200,function(){
						$(this).animate({left:"-=50"},200);
					});
					return false;
				}
				$("#exp_list_content").animate({left:"+="+$(".exp_list").width()});
				page--;
			}
		});
		$("#exp_list_toright").click(function(){
			if(!$("#exp_list_content").is(":animated")){
				if(page==3){
					$("#exp_list_content").animate({left:"-=50"},200,function(){
						$(this).animate({left:"+=50"},200);
					});
					return;
				}
				$("#exp_list_content").animate({left:"-="+$(".exp_list").width()});
				page++;
			}
		});

		var x=10;
		var y=20;
		$("#exp_timeline a").mouseover(function(e){
			this.aa=this.title;
			this.title="";
			$("body").append("<div class='exp_timeline_title'>"+this.aa+"</div>");
			$(".exp_timeline_title").css({
				"top":e.pageY+y+"px",
				"left":e.pageX+x+"px"
			}).show("fast");
		}).mouseout(function(){
			this.title=this.aa;
			$(".exp_timeline_title").remove();
		}).mousemove(function(e){
			$(".exp_timeline_title").css({
				"top":e.pageY+y+"px",
				"left":e.pageX+x+"px"
			});
		}).click(function(){
			return false;
		});
	}
	//顶部标题文字切换
	function headerFn(){
		$("#header_p").mouseover(function(){
			$("#header_p1").html("Resume");
			$("#header_p2").html("前端工程师");
		}).mouseout(function(){
			$("#header_p1").html("F2E");
			$("#header_p2").html("个人简历");
		});
	}
	headerFn();
	//最后一页的点击
	function pageSixClick(){
		$("#contact_message1").click(function(){
			$(this).fadeOut(200,function(){
				$("#contact_form").fadeIn(200);
			})
		});
	}











});