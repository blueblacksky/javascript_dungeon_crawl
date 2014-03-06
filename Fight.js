//accepts the player stats and the monster you are fighting
function Fight(player, monster)
{
	var move = 0,
	spellSuccessful = false;
	var spells = new SpellList(0, player, monster);
	//creating the smaller stats output textarea, and flee button for all schools
	$('#output').before('<textarea id="stats_output" cols="18" rows="10" readonly="yes" style="overflow: auto; resize: none">');
	$('#output').before('</textarea>');
	$('#stats_output').val(player._name + "\nHealth:\t\t" + player._health.toFixed() + "\nMana:\t\t" + player._mp.toFixed() + "\nDefense:\t" + player._defense.toFixed() + "\nAccuracy:\t" + player._accuracy.toFixed() + "\nEvasion:\t" + player._evasion.toFixed());
	var $fleeBtn = $('<input/>').attr({ type: 'button', id: 'fleeBtn', onclick: 'playerFlee(); return false;', value: 'Flee', 
		title: 'Run from battle' });

	//player school determines the buttons that appear, but all spells are contained in spell list
	switch (player._school)
	{
		case (1):
		
			var $shieldBtn = $('<input/>').attr({ type: 'button', id: 'conjurationBtn1', onclick: 'playerShield(); return false;', 
				value: 'Shield', title: 'Costs X MP' });
			var $forceBtn = $('<input/>').attr({ type: 'button', id: 'conjurationBtn2', onclick: 'playerForce(); return false;',
				value: 'Force', title: 'Costs X MP' });
			var $restoreSelfBtn = $('<input/>').attr({ type: 'button', id: 'conjurationBtn3', onclick: 'playerRestoreSelf(); return false;',
				value: 'Restore Self', title: 'Costs X MP' });
			var $decayBondsBtn = $('<input/>').attr({ type: 'button', id: 'conjurationBtn4', onclick: 'playerDecayBonds(); return false;',
				value: 'Decay Bonds', title: 'Costs X MP' });
			var $blindingLightBtn = $('<input/>').attr({ type: 'button', id: 'conjurationBtn5', onclick: 'playerBlindingLight(); return false;', 
				value: 'Blinding Light', title: 'Costs X MP' });
			var $continualDarknessBtn = $('<input/>').attr({ type: 'button', id: 'conjurationBtn6', onclick: 'playerContinualDarkness(); return false;',
				value: 'Continual Darkness', title: 'Costs X MP' });
			var $combatInventoryBtn = $('<input/>').attr({ type: 'button', id: 'combat_inventory', onclick: 'return false;',
				value: 'Inventory', title: 'Inventory' });

			//clears the map buttons
			buttonContainer = document.getElementById('button_container');
			buttonContainer.innerHTML = '';
			
			$('#button_container').append($shieldBtn);
			$('#button_container').append($forceBtn);
			$('#button_container').append($restoreSelfBtn);
			$('#button_container').append($decayBondsBtn);
			$('#button_container').append($blindingLightBtn);
			$('#button_container').append($continualDarknessBtn);
			$('#button_container').append($combatInventoryBtn);
			$('#button_container').append($fleeBtn);
			break;
		
		case (2):
		
			var $obscureMistBtn = $('<input/>').attr({ type: 'button', id: 'divinationBtn1', onclick: 'playerObscureMist(); return false;',
				value: 'Obscure Mist', title: 'Costs X MP' });
			var $readIntentBtn = $('<input/>').attr({ type: 'button', id: 'divinationBtn2', onclick: 'playerReadIntent(); return false;',
				value: 'Read Intent', title: 'Costs X MP' });
			var $mirrorImageBtn = $('<input/>').attr({ type: 'button', id: 'divinationBtn3', onclick: 'playerMirrorImage(); return false;',
				value: 'Mirror Image', title: 'Costs X MP' });
			var $mindForceBtn = $('<input/>').attr({ type: 'button', id: 'divinationBtn4', onclick: 'playerMindForce(); return false;',
				value: 'Mind Force', title: 'Costs X MP' });
			var $feignDeathBtn = $('<input/>').attr({ type: 'button', id: 'divinationBtn5', onclick: 'playerFeignDeath(); return false;',
				value: 'Feign Death', title: 'Costs X MP' });
			var $glamourOfPowerBtn = $('<input/>').attr({ type: 'button', id: 'divinationBtn6', onclick: 'playerGlamourOfPower(); return false;',
				value: 'Glamour of Power', title: 'Costs X MP' });
			var $combatInventoryBtn = $('<input/>').attr({ type: 'button', id: 'combat_inventory', onclick: 'return false;',
				value: 'Inventory', title: 'Inventory' });
				
			buttonContainer = document.getElementById('button_container');
			buttonContainer.innerHTML = '';
			
			$('#button_container').append($obscureMistBtn);
			$('#button_container').append($readIntentBtn);
			$('#button_container').append($mirrorImageBtn);
			$('#button_container').append($mindForceBtn);
			$('#button_container').append($feignDeathBtn);
			$('#button_container').append($glamourOfPowerBtn);
			$('#button_container').append($combatInventoryBtn);
			$('#button_container').append($fleeBtn);
			break;
			
		case (3):
		
			var $restoreStrengthBtn = $('<input/>').attr({ type: 'button', id: 'invocationBtn1', onclick: 'playerRestoreStrength(); return false;',
				value: 'Restore Strength', title: 'Costs X MP' });
			var $hastenBtn = $('<input/>').attr({ type: 'button', id: 'invocationBtn2', onclick: 'playerHasten(); return false;',
				value: 'Hasten', title: 'Costs X MP' });
			var $stoneskinBtn = $('<input/>').attr({ type: 'button', id: 'invocationBtn3', onclick: 'playerStoneskin(); return false;',
				value: 'Stoneskin', title: 'Costs X MP' });
			var $magicBlightBtn = $('<input/>').attr({ type: 'button', id: 'invocationBtn4', onclick: 'playerMagicBlight(); return false;',
				value: 'MagicBlight', title: 'Costs X MP' });
			var $ennervateBtn = $('<input/>').attr({ type: 'button', id: 'invocationBtn5', onclick: 'playerEnnervate(); return false;',
				value: 'Ennervate', title: 'Costs X MP' });
			var $drainBtn = $('<input/>').attr({ type: 'button', id: 'invocationBtn6', onclick: 'playerDrain(); return false;',
				value: 'Drain', title: 'Costs X MP' });
			var $combatInventoryBtn = $('<input/>').attr({ type: 'button', id: 'combat_inventory', onclick: 'return false;',
				value: 'Inventory', title: 'Inventory' });
			
			buttonContainer = document.getElementById('button_container');
			buttonContainer.innerHTML = '';
			
			$('#button_container').append($restoreStrengthBtn);
			$('#button_container').append($hastenBtn);
			$('#button_container').append($stoneskinBtn);
			$('#button_container').append($magicBlightBtn);
			$('#button_container').append($ennervateBtn);
			$('#button_container').append($drainBtn);
			$('#button_container').append($combatInventoryBtn);
			$('#button_container').append($fleeBtn);
			break;
			
		default:
			
			document.getElementById('output').value += "Error, returning to map\n";
			AutoScroll();
			returnToMap();
			break;
	}
	
	document.getElementById('output').value += "\n" + monster._name + " appeared!\n";
	AutoScroll();
	
	this.playerShield = function playerShield()
	{		
			spellSuccessful = spells.shield();
			if (spellSuccessful === true)
				setTimeout(monsterTurn(),5000);
		
		return "";
	};
	
	this.playerForce = function playerForce()
	{
		spellSuccessful = spells.force();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
		
		return "";
	};
	
	this.playerRestoreSelf = function playerRestoreSelf()
	{
		spellSuccessful = spells.restoreSelf();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
		
		return "";
	};
	
	this.playerDecayBonds = function playerDecayBonds()
	{
		spellSuccessful = spells.decayBonds();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
	
		return "";
	};
	
	this.playerBlindingLight = function playerBlindingLight()
	{
		spellSuccessful = spells.blindingLight();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
			
		return "";
	};
	
	this.playerContinualDarkness = function playerContinualDarkness()
	{
		spellSuccessful = spells.continualDarkness();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
			
		return "";
	};
	
	this.playerObscureMist = function playerObscureMist()
	{
		spellSuccessful = spells.obscureMist();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
			
		return "";
	};
	
	this.playerReadIntent = function playerReadIntent()
	{
		spellSuccessful = spells.readIntent();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
			
		return "";
	};
	
	this.playerMirrorImage = function playerMirrorImage()
	{
		spellSuccessful = spells.mirrorImage();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
			
		return "";
	};
	
	this.playerMindForce = function playerMindForce()
	{
		spellSuccessFul = spells.mindForce();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
		
		return "";
	};
	
	this.playerFeignDeath = function playerFeignDeath()
	{
		spellSuccessful = spells.feignDeath();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
			
		return "";
	};
	
	this.playerGlamourOfPower = function playerGlamourOfPower()
	{
		spellSuccessful = spells.glamourOfPower();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
			
		return "";
	};
	
	this.playerRestoreStrength = function playerRestoreStrength()
	{
		spellSuccessful = spells.restoreStrength();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
			
		return "";
	};
	
	this.playerHasten = function playerHasten()
	{
		spellSuccessful = spells.hasten();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
			
		return "";
	};
	
	this.playerStoneskin = function playerStoneskin()
	{
		spellSuccessful = spells.stoneskin();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
			
		return "";
	};
	
	this.playerMagicBlight = function playerMagicBlight()
	{
		spellSuccessful = spells.magicBlight();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
			
		return "";
	};
	
	this.playerEnnervate = function playerEnnervate()
	{
		spellSuccessful = spells.ennervate();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
			
		return "";
	};
	
	this.playerDrain = function playerDrain()
	{
		spellSuccessful = spells.drain();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
			
		return "";
	};
	
	this.playerFlee = function playerFlee()
	{
		spellSuccessful = spells.flee();
		if (spellSuccessful === true)
			setTimeout(monsterTurn(),5000);
		
		return "";
	};
	
	this.monsterTurn = function monsterTurn()
	{
		spells._turn++;
        move = RandomNumber(1, 3);	
        switch (move)
		{
            case (1):
                monster.firstAttack(player);
                break;
            case (2):
                monster.secondAttack(player);
                break;
			case (3):
				monster.thirdAttack(player);
				break;
            default :
                document.getElementById('output').value += "MonsterTurnError\n";
                AutoScroll();
				break;
		}
		
		return "";
	};
}
this.returnToMap = function returnToMap()
{ //moved outside of fight function for code reusability
		var button1 = document.createElement("input");
			$(button1).attr({
			'type': 'button',
			'id':'north',
			'value': 'North'
			});
		var button2 = document.createElement('input');
			button2.setAttribute('type', 'button');
			button2.setAttribute("id", "south");
			button2.setAttribute('value', 'South');
		var button3 = document.createElement('input');
			button3.setAttribute('type', 'button');
			button3.setAttribute('id', 'east');
			button3.setAttribute('value', 'East');
		var button4 = document.createElement('input');
			button4.setAttribute('type', 'button');
			button4.setAttribute('id', 'west');
			button4.setAttribute('value', 'West');	
		var button5 = document.createElement('input');
			button5.setAttribute('type', 'button');
			button5.setAttribute('id', 'open_map');
			button5.setAttribute('value', 'Open Map');
		var button6 = document.createElement('input');
			button6.setAttribute('type', 'button');
			button6.setAttribute('id', 'open_inventory');
			button6.setAttribute('value', 'Open Inventory');
		
		buttonContainer = document.getElementById("button_container");
		buttonContainer.innerHTML = '';
		
		document.getElementById("button_container").appendChild(button1);
		document.getElementById("button_container").appendChild(button2);
		document.getElementById("button_container").appendChild(button3);
		document.getElementById("button_container").appendChild(button4);
		document.getElementById("button_container").appendChild(button5);
		document.getElementById("button_container").appendChild(button6);

		
		return "";
};

this.returnToCombat = function returnToCombat()
{
	var $fleeBtn = $('<input/>').attr({ type: 'button', id: 'fleeBtn', onclick: 'playerFlee(); return false;', value: 'Flee', 
		title: 'Run from battle' });
	switch (player._school)
		{
			case (1):
		
			var $shieldBtn = $('<input/>').attr({ type: 'button', id: 'conjurationBtn1', onclick: 'playerShield(); return false;', 
				value: 'Shield', title: 'Costs X MP' });
			var $forceBtn = $('<input/>').attr({ type: 'button', id: 'conjurationBtn2', onclick: 'playerForce(); return false;',
				value: 'Force', title: 'Costs X MP' });
			var $restoreSelfBtn = $('<input/>').attr({ type: 'button', id: 'conjurationBtn3', onclick: 'playerRestoreSelf(); return false;',
				value: 'Restore Self', title: 'Costs X MP' });
			var $decayBondsBtn = $('<input/>').attr({ type: 'button', id: 'conjurationBtn4', onclick: 'playerDecayBonds(); return false;',
				value: 'Decay Bonds', title: 'Costs X MP' });
			var $blindingLightBtn = $('<input/>').attr({ type: 'button', id: 'conjurationBtn5', onclick: 'playerBlindingLight(); return false;', 
				value: 'Blinding Light', title: 'Costs X MP' });
			var $continualDarknessBtn = $('<input/>').attr({ type: 'button', id: 'conjurationBtn6', onclick: 'playerContinualDarkness(); return false;',
				value: 'Continual Darkness', title: 'Costs X MP' });
			var $combatInventoryBtn = $('<input/>').attr({ type: 'button', id: 'combat_inventory', onclick: 'return false;',
				value: 'Inventory', title: 'Inventory' });


			//clears the map buttons
			buttonContainer = document.getElementById('button_container');
			buttonContainer.innerHTML = '';
			
			$('#button_container').append($shieldBtn);
			$('#button_container').append($forceBtn);
			$('#button_container').append($restoreSelfBtn);
			$('#button_container').append($decayBondsBtn);
			$('#button_container').append($blindingLightBtn);
			$('#button_container').append($continualDarknessBtn);
			$('#button_container').append($combatInventoryBtn);
			$('#button_container').append($fleeBtn);
			break;
		
		case (2):
		
			var $obscureMistBtn = $('<input/>').attr({ type: 'button', id: 'divinationBtn1', onclick: 'playerObscureMist(); return false;',
				value: 'Obscure Mist', title: 'Costs X MP' });
			var $readIntentBtn = $('<input/>').attr({ type: 'button', id: 'divinationBtn2', onclick: 'playerReadIntent(); return false;',
				value: 'Read Intent', title: 'Costs X MP' });
			var $mirrorImageBtn = $('<input/>').attr({ type: 'button', id: 'divinationBtn3', onclick: 'playerMirrorImage(); return false;',
				value: 'Mirror Image', title: 'Costs X MP' });
			var $mindForceBtn = $('<input/>').attr({ type: 'button', id: 'divinationBtn4', onclick: 'playerMindForce(); return false;',
				value: 'Mind Force', title: 'Costs X MP' });
			var $feignDeathBtn = $('<input/>').attr({ type: 'button', id: 'divinationBtn5', onclick: 'playerFeignDeath(); return false;',
				value: 'Feign Death', title: 'Costs X MP' });
			var $glamourOfPowerBtn = $('<input/>').attr({ type: 'button', id: 'divinationBtn6', onclick: 'playerGlamourOfPower(); return false;',
				value: 'Glamour of Power', title: 'Costs X MP' });
			var $combatInventoryBtn = $('<input/>').attr({ type: 'button', id: 'combat_inventory', onclick: 'return false;',
				value: 'Inventory', title: 'Inventory' });
				
			buttonContainer = document.getElementById('button_container');
			buttonContainer.innerHTML = '';
			
			$('#button_container').append($obscureMistBtn);
			$('#button_container').append($readIntentBtn);
			$('#button_container').append($mirrorImageBtn);
			$('#button_container').append($mindForceBtn);
			$('#button_container').append($feignDeathBtn);
			$('#button_container').append($glamourOfPowerBtn);
			$('#button_container').append($combatInventoryBtn);
			$('#button_container').append($fleeBtn);
			break;
			
		case (3):
		
			var $restoreStrengthBtn = $('<input/>').attr({ type: 'button', id: 'invocationBtn1', onclick: 'playerRestoreStrength(); return false;',
				value: 'Restore Strength', title: 'Costs X MP' });
			var $hastenBtn = $('<input/>').attr({ type: 'button', id: 'invocationBtn2', onclick: 'playerHasten(); return false;',
				value: 'Hasten', title: 'Costs X MP' });
			var $stoneskinBtn = $('<input/>').attr({ type: 'button', id: 'invocationBtn3', onclick: 'playerStoneskin(); return false;',
				value: 'Stoneskin', title: 'Costs X MP' });
			var $magicBlightBtn = $('<input/>').attr({ type: 'button', id: 'invocationBtn4', onclick: 'playerMagicBlight(); return false;',
				value: 'MagicBlight', title: 'Costs X MP' });
			var $ennervateBtn = $('<input/>').attr({ type: 'button', id: 'invocationBtn5', onclick: 'playerEnnervate(); return false;',
				value: 'Ennervate', title: 'Costs X MP' });
			var $drainBtn = $('<input/>').attr({ type: 'button', id: 'invocationBtn6', onclick: 'playerDrain(); return false;',
				value: 'Drain', title: 'Costs X MP' });
			var $combatInventoryBtn = $('<input/>').attr({ type: 'button', id: 'combat_inventory', onclick: 'return false;',
				value: 'Inventory', title: 'Inventory' });
			
			buttonContainer = document.getElementById('button_container');
			buttonContainer.innerHTML = '';
			
			$('#button_container').append($restoreStrengthBtn);
			$('#button_container').append($hastenBtn);
			$('#button_container').append($stoneskinBtn);
			$('#button_container').append($magicBlightBtn);
			$('#button_container').append($ennervateBtn);
			$('#button_container').append($drainBtn);
			$('#button_container').append($combatInventoryBtn);
			$('#button_container').append($fleeBtn);
			break;
			
		default:
			
			document.getElementById('output').value += "Error, returning to map\n";
			AutoScroll();
			returnToMap();
			break;
	}
};
