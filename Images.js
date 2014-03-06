function Images(image)
{	
	img = image;
	
	this.backgroundImg = function backgroundImg(image){
		
		var backgnd = document.createElement('img');
			backgnd.id = 'background_img';
			backgnd.src = image;
			backgnd.style.position = 'absolute';
			backgnd.style.top = 30;
			backgnd.style.left = 150;
			
		document.getElementById('enemy_container').innerHTML = "";
		document.getElementById('enemy_container').appendChild(backgnd);
		
		return "";
	};
	
	this.enemyImg = function enemyImg(image)
	{
		var backSrc = document.getElementById('background_img').src;	
		var backgnd = document.createElement('img');
			backgnd.id = 'background_img';
		    backgnd.src = backSrc;
			backgnd.style.position = 'absolute';
			backgnd.style.top = 30;
			backgnd.style.left = 150;
			
		var enemy = document.createElement('img');
			enemy.id = 'enemy_img';
			enemy.src = image;
			enemy.style.position = 'absolute';
			enemy.style.top = '50%';
			enemy.style.left = '50%';
			enemy.setAttribute('marginTop', '-25px');
			enemy.setAttribute('marginLeft', '-25px');
		
		document.getElementById('enemy_container').innerHTML = "";
		document.getElementById('enemy_container').appendChild(backgnd);
		document.getElementById('enemy_container').appendChild(enemy);
	
		return "";
	};
	
	this.removeEnemy = function removeEnemy()
	{
		document.getElementById('enemy_container').removeChild(document.getElementById('enemy_img'));
		
		return "";
	};
}