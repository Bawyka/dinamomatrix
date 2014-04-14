$(function(){

	var s=window.screen;
	var width = q.width=s.width;
	var height = q.height;
	var yPositions = Array(300).join(0).split('');
	var ctx=q.getContext('2d');
	
	function getRandomInt(min, max)
	{
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	setTimeout(function(){
	
		$('#sub .d1').fadeIn(10000,function(){
		
			$('#sub .d2').fadeIn(10000,function(){
				
				$(this).fadeOut(10000,function(){
				
					$(this).text('Поважай себе та тренера').delay(5000).fadeIn(20000,function(){
					
						$(this).fadeOut(10000,function(){
						
							$(this).text('Ми віримо в клуб').delay(5000).fadeIn(20000,function(){
								
								$(this).fadeOut(10000,function(){
								
									$(this).text('2014').delay(5000).fadeIn(20000);
								
								});
							
							});
							
						});
										
					});
				
				});
			
			});
		
		});
	
	},3000);
		
	var dnk = new Array("Д","и","н","а","м","о","К","и","ї","в");
	 
	var draw = function () {
	  ctx.fillStyle='rgba(0,0,0,.05)';
	  ctx.fillRect(0,0,width,height);
	  ctx.fillStyle='#4679bd';
	  ctx.font = '10pt Georgia';
	  yPositions.map(function(y, index){
		//text = String.fromCharCode(1e2+Math.random()*33);
		text = dnk[getRandomInt(0,9)];
		x = (index * 10)+10;
		q.getContext('2d').fillText(text, x, y);
		if(y > 100 + Math.random()*1e4)
		{
		  yPositions[index]=0;
		}
		else
		{
		  yPositions[index] = y + 10;
		}
	  });
	};
	RunMatrix();
	function RunMatrix()
	{
	if(typeof Game_Interval != "undefined") clearInterval(Game_Interval);
			Game_Interval = setInterval(draw, 33);
	}
	function StopMatrix()
	{
	clearInterval(Game_Interval);
	}
	//setInterval(draw, 33);
	$("button#pause").click(function(){
	StopMatrix();});
	$("button#play").click(function(){RunMatrix();});
});