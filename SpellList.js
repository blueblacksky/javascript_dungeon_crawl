function SpellList(turn, character, enemy){
	
	//declarations, initializations
	var fleeOutcome = 0,
		shieldDuration = 0,
		shieldAmt = 0,
		shieldActive = false,
		restoreSelfAmt = 0,
		decayActive = false,
		blindingLightDuration = 0,
		blindingLightAccAmt = 0,
		blindingLightEvaAmt = 0,
		blindingLightActive = false,
		continualDarknessDuration = 0,
		continualDarknessPlayerAmt = 0,
		continualDarknessEnemyAmt = 0,
	    continualDarknessActive = false,
		mistActive = false,
		readIntentDuration = 0,
		readIntentAccAmt = 0,
		readIntentEvaAmt = 0,
		readIntentActive = false,
		mirrorImageDuration = 0,
		mirrorImageEvaAmt = 0,
		mirrorImageActive = false,
		feignDeathActive = false,
		hastenActive = false,
		stoneskinDuration = 0,
		stoneskinActive = false,
		magicBlightDuration = 0,
		magicBlightActive = false,
		ennervateDuration = 0,
		ennervateAccAmt = 0,
		ennervateEvaAmt = 0,
		ennervateAtkAmt = 0,
		ennervateActive = false,
		drainHpAmt = 0,
		Turn = turn;

		//thisTurn get and set, used to track battle turns
    Object.defineProperty(this, "_turn", {
		get : function(){ return Turn; },
		set : function(val)
		{
			Turn = val;
			this.shieldTurnChecker();
			this.blindingLightTurnChecker();
			this.continualDarknessTurnChecker();
			this.readIntentTurnChecker();
			this.mirrorImageTurnChecker();
			this.stoneskinTurnChecker();
			this.magicBlightTurnChecker();
			this.ennervateTurnChecker();
			this.poisonStatusChecker();
			this.sickenedStatusChecker();
			this.sleepStatusChecker();
			this.blindStatusChecker();
		}
    });
	
	/* conjuration/abjuration spells */
	
	//shield method
	//initiates the shield spell, setting '_shieldActive' causes a call to ShieldCheck()
	this.shield = function shield()
	{
		if (shieldActive === false && player._mp > 11)
		{
			character._mp -= 8;
			shieldDuration = RandomNumber(2, 5);
			shieldActive = true;
			shieldAmt = Math.round(character._defense * 0.40);
			character._defense += shieldAmt;
			document.getElementById('output').value += "Shield activated for " + shieldDuration + " turns\n";
			AutoScroll();
			this._turn++;
			return true;
		}
		else if (player._mp < 8)
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
		else
		{
			document.getElementById('output').value += "Shield is already activated\n";
			AutoScroll();
			return false;
		}
	};
	
	//takes care of how many turns the shield is active and is called every time (for now) 'Turn' is set
	this.shieldTurnChecker = function shieldTurnChecker()
	{	
		if (shieldDuration > 1)
			shieldDuration--;
		else if (shieldDuration == 1)
		{
			character._defense -= shieldAmt;
			document.getElementById('output').value += "Shield deactivated\n";
			AutoScroll();
			shieldDuration--;
			shieldAmt = 0;
			shieldActive = false;
		}
		
		return "";	
	};
	
	//force, causes damage to the enemy based on stats
	this.force = function force()
	{
		var dmg = 0,
		missInt = (enemy._evasion / 10),
		missDeci = (enemy._evasion % 10),
		miss = missInt + "." + missDeci;
		miss = parseFloat(miss);
		if (character._mp > 8)
		{
			character._mp -= 9;
			if (character._accuracy * 0.20 <= miss)
			{
				document.getElementById('output').value += character._name + " missed!\n";
				AutoScroll();
				this._turn++;
				return true;
			}
			else
			{
				if (enemy._monsterType == 2)
				{
					dmg = Math.round((character._attack * character._attackMultiplier * 3) - (enemy._defense * enemy._defenseMultiplier));
					document.getElementById('output').value += "It's super effective\n";
					AutoScroll();
				}
				else if (enemy._monsterType == 3)
					dmg = Math.round((character._attack * character._attackMultiplier * 2) - (enemy._defense * enemy._defenseMultiplier));
				else if (enemy._monsterType == 1)
				{
					dmg = Math.round((character._attack * character._attackMultiplier) - (enemy._defense * enemy._defenseMultiplier));
					document.getElementById('output').value += "It's not very effective\n";
					AutoScroll();
				}
				enemy._health = Math.round(enemy._health - dmg);
				document.getElementById('output').value += "You send a bolt streaking toward the " + enemy._name + "\n";
				AutoScroll();
				enemy.getStats();
				
				if (enemy._health <= 0)
				{
					document.getElementById('output').value += enemy._name + " defeated\n";
					AutoScroll();
					$('#stats_output').remove();
					character.resetStats();
					returnToMap();
					return false;
				}
				this._turn++;
				return true;
			}
		}
		else
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
	};
	
	//heals the character a certain amount within a range
	this.restoreSelf = function restoreSelf()
	{
		if (character._health < 200 && character._mp > 6)
		{
			character._mp -= 7;
			restoreSelfAmt = 0;
			restoreSelfAmt = RandomNumber(30, 40);
			character._health += restoreSelfAmt;
			document.getElementById('output').value += "Health + " + restoreSelfAmt + "\n";
			AutoScroll();
			this._turn++;
			return true;
		}
		else if (character._mp < 7)
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
		else
		{
			document.getElementById('output').value += "Health cannot be restored further\n";
			AutoScroll();
			return false;
		}
	};
	
	//lowers the enemy's accuracy and defense by 25% for the rest of the game
	this.decayBonds = function decayBonds()
	{
		if (decayActive === false && character._mp > 13)
		{
			character._mp -= 14;
			if (enemy._monsterType == 2)
			{
				enemy._evasion = Math.round(enemy._evasion - (enemy._evasion * 0.50));
				enemy._defense = Math.round(enemy._defense - (enemy._defense * 0.50));
				document.getElementById('output').value += "It's super effective\n";
				AutoScroll();				
			}
			else if (enemy._monsterType == 3)
			{
				enemy._evasion = Math.round(enemy._evasion - (enemy._evasion * 0.25));
				enemy._defense = Math.round(enemy._defense - (enemy._defense * 0.25));
			}
			else if (enemy._monsterType == 1)
			{
				enemy._evasion = Math.round(enemy._evasion - (enemy._evasion * 0.125));
				enemy._defense = Math.round(enemy._defense - (enemy._defense * 0.125));
				document.getElementById('output').value += "It's not very effective\n";
				AutoScroll();
			}
			document.getElementById('output').value += enemy._name + "'s evasion now: " + enemy._evasion + " defense now: " + enemy._defense + "\n";
			AutoScroll();
			decayActive = true;
			this._turn++;
			return true;
		}
		else if (character._mp < 14)
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
		else
		{
			document.getElementById('output').value += enemy._name + " is already under the effects of Decay Bonds\n";
			AutoScroll();
			return false;
		}
	};
	
	//lowers the enemy's accuracy and evasion by 30% for 1-3 turns
	this.blindingLight = function blindingLight()
	{
		if (blindingLightActive === false && character._mp > 15)
		{
			character._mp -= 16;
			blindingLightDuration = RandomNumber(1, 3);
			blindingLightActive = true;
			if (enemy._monsterType == 2)
			{
				blindingLightAccAmt = Math.round(enemy._accuracy * 0.60);
				blindingLightEvaAmt = Math.round(enemy._evasion * 0.60);
				document.getElementById('output').value += "It's super effective\n";
				AutoScroll();				
			}
			else if (enemy._monstertype == 3)
			{
				blindingLightAccAmt = Math.round(enemy._accuracy * 0.30);
				blindingLightEvaAmt = Math.round(enemy._evasion * 0.30);
			}
			else if (enemy._monsterType == 1)
			{
				blindingLightAccAmt = Math.round(enemy._accuracy * 0.15);
				blindingLightEvaAmt = Math.round(enemy._evasion * 0.15);
				document.getElementById('output').value += "It's not very effective\n";
				AutoScroll();				
			}
			enemy._accuracy -= blindingLightAccAmt;
			enemy._evasion -= blindingLightEvaAmt;
			document.getElementById('output').value += enemy._name + "'s accuracy now : " + enemy._accuracy + " evasion now " + enemy._evasion + "\n";
			AutoScroll();
			this._turn++;
			return true;
		}
		else if (character._mp < 16)
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
		else
		{
			document.getElementById('output').value += enemy._name + " is already under the effects of Blinding Light\n";
			AutoScroll();
			return false;
		}
	};
	
	//used to check Turn and appropriately decrement the duration of the Blinding Light spell
	this.blindingLightTurnChecker = function blindingLightTurnChecker()
	{
		if (blindingLightDuration > 1)
			blindingLightDuration--;
		else if (blindingLightDuration == 1)
		{
			enemy._accuracy += blindingLightAccAmt;
			enemy._evasion += blindingLightEvaAmt;
			document.getElementById('output').value += "Blinding Light deactivated " + enemy._name + "'s accuracy now: " + enemy._accuracy + " evasion now: " + enemy._evasion + "\n";
			AutoScroll();
			blindingLightDuration--;
			blindingLightAccAmt = 0;
			blindingLightEvaAmt = 0;
			blindingLightActive = false;
		}
	
		return "";
	};
	
	this.continualDarkness = function continualDarkness()
	{
		if (continualDarknessActive === false && character._mp > 17)
		{
			character._mp -= 18;
			continualDarknessDuration = RandomNumber(2, 5);
			continualDarknessActive = true;
			continualDarknessPlayerAmt = Math.round(character._accuracy * 0.90);
			continualDarknessEnemyAmt = Math.round(enemy._accuracy * 0.90);
			character._accuracy -= continualDarknessPlayerAmt;
			enemy._accuracy -= continualDarknessEnemyAmt;
			document.getElementById('output').value += "Both you and the enemy's accuracy are lessened. " + enemy._name + "'s accuracy now: " + enemy._accuracy + "\n";
			AutoScroll();
			this._turn++;
			return true;
		}
		else if (character._mp < 18)
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
		else
		{
			document.getElementById('output').value += character._name + " and the " + enemy._name + " are already under the effects of Continual Darkness\n";
			AutoScroll();
			return false;
		}
	};
	
	this.continualDarknessTurnChecker = function continualDarknessTurnChecker()
	{
		if (continualDarknessDuration > 1)
			continualDarknessDuration--;
		else if (continualDarknessDuration == 1)
		{
			character._accuracy += continualDarknessPlayerAmt;
			enemy._accuracy += continualDarknessEnemyAmt;
			document.getElementById('output').value += "Continual Darkness deactivated\n"; 
			AutoScroll();
			continualDarknessDuration--;
			continualDarknessPlayerAmt = 0;
			continualDarknessEnemyAmt = 0;
			continualDarknessActive = false;
		}
	
		return "";
	};
	
	/* divination/obfuscation spells */
	
	this.obscureMist = function obscureMist()
	{
		if (mistActive === false && character._mp > 9)
		{
			character._mp -= 10;
			character._evasion += Math.round(character._evasion * 0.50);
			document.getElementById('output').value += character._name + "'s evasion is raised\n";
			AutoScroll();
			mistActive = true;
			this._turn++;
			return true;
		}
		else if (character._mp < 10)
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
		else
		{
			document.getElementById('output').value += "Obscure Mist is already active\n";
			AutoScroll();
			return false;
		}
	};
	
	this.readIntent = function readIntent()
	{
		if (readIntentActive === false && character._mp > 7)
		{
			character._mp -= 8;
			readIntentDuration = RandomNumber(2, 4);
			readIntentActive = true;
			readIntentAccAmt = Math.round(character._accuracy * 0.30);
			if (enemy._monsterType == 1)
			{
				readIntentEvaAmt = Math.round(enemy._evasion * 0.40);
				document.getElementById('output').value += "It's super effective\n";
				AutoScroll();
			}
			else if (enemy._monsterType == 2)
				readIntentEvaAmt = Math.round(enemy._evasion * 0.20);
			else if (enemy._monsterType == 3)
			{
				readIntentEvaAmt = Math.round(enemy._evasion * 0.10);
				document.getElementById('output').value += "It's not very effective\n";
				AutoScroll();
			}
			character._accuracy += readIntentAccAmt;
			enemy._evasion -= readIntentEvaAmt;
			document.getElementById('output').value += character._name + "'s accuracy raised and " + enemy._name + "'s evasion now " + enemy._evasion + "\n";
			AutoScroll();
			this._turn++;
			return true;
		}
		else if (character._mp < 8)
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
		else
		{
			document.getElementById('output').value += character._name + " and the " + enemy._name + " are already under the effects of Read Intent\n";
			AutoScroll();
			return false;
		}
	};
	
	this.readIntentTurnChecker = function readIntentTurnChecker()
	{
		if (readIntentDuration > 1)
			readIntentDuration--;
		else if (readIntentDuration == 1)
		{
			character._accuracy -= readIntentAccAmt;
			enemy._evasion += readIntentEvaAmt;
			document.getElementById('output').value += "Read Intent Deactivated\n";
			AutoScroll();
			readIntentDuration--;
			readIntentAccAmt = 0;
			readIntentEvaAmt = 0;
			readIntentActive = false;
		}
		
		return "";
	};
	
	this.mirrorImage = function mirrorImage()
	{
		if (mirrorImageActive === false && character._mp > 8)
		{
			character._mp -= 9;
			mirrorImageDuration = RandomNumber(2, 5);
			mirrorImageActive = true;
			mirrorImageEvaAmt = Math.round(character._evasion * 0.35);
			character._evasion += mirrorImageEvaAmt;
			document.getElementById('output').value += "Your evasion has risen\n";
			AutoScroll();
			this._turn++;
			return true;
		}
		else if (character._mp < 9)
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
		else
		{
			document.getElementById('output').value += character._name + " is already under the effects of Mirror Image\n";
			AutoScroll();
			return false;
		}
	};
	
	this.mirrorImageTurnChecker = function mirrorImageTurnChecker()
	{
		if (mirrorImageDuration > 1)
			mirrorImageDuration--;
		else if (mirrorImageDuration == 1)
		{
			character._evasion -= mirrorImageEvaAmt;
			document.getElementById('output').value += "Mirror Image deactivated\n";
			AutoScroll();
			mirrorImageDuration--;
			mirrorImageEvaAmt = 0;
			mirrorImageActive = false;
		}
		
		return "";
	};
	
	this.mindForce = function mindForce()
	{
		var dmg = 0,
		missInt = (enemy._evasion / 10),
		missDeci = (enemy._evasion % 10),
		miss = missInt + "." + missDeci;
		miss = parseFloat(miss);
		
		if (character._mp > 10)
		{
			character._mp -= 11;
			if (character._accuracy * 0.20 <= miss)
			{
				document.getElementById('output').value += character._name + " missed!\n";
				AutoScroll();
				this._turn++;
				return true;
			}
			else
			{
				if (enemy._monsterType == 1)
				{
					dmg = Math.round((character._attack * character._attackMultiplier * 3) - (enemy._defense * enemy._defenseMultiplier));
					document.getElementById('output').value += "It's super effective\n";
					AutoScroll();
				}
				else if (enemy._monsterType == 2)
					dmg = Math.round((character._attack * character._attackMultiplier * 2) - (enemy._defense * enemy._defenseMultiplier));
				else if (enemy._monsterType == 3)
				{
					Math.round(dmg = (character._attack * character._attackMultiplier) - (enemy._defense * enemy._defenseMultiplier));
					document.getElementById('output').value += "It's not very effective\n";
					AutoScroll();
				}
				enemy._health = Math.round(enemy._health - dmg);
				document.getElementById('output').value += "You use a psychic energy attack causing " + dmg + " damage\n";
				AutoScroll();
				enemy.getStats();
				
				if (enemy._health <= 0)
				{
					document.getElementById('output').value += enemy._name + " defeated\n";
					AutoScroll();
					$('#stats_output').remove();
					character.resetStats();
					returnToMap();
					return false;
				}
				this._turn++;
				return true;	
			}
		}
		else
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
	};
	
	this.feignDeath = function feignDeath()
	{
		if (feignDeathActive === false && character._mp > 6)
		{
			character._mp -= 7;
			character._flee = 6;
			document.getElementById('output').value += "Chances of fleeing increased\n";
			AutoScroll();
			feignDeathActive = true;
			this._turn++;
			return true;
		}
		else  if (character._mp < 7)
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
		else
		{
			document.getElementById('output').value += "Feign Death is already active\n";
			AutoScroll();
			return false;
		}
	};
	
	this.glamourOfPower = function glamourOfPower()
	{
		if (character._mp > 4)
		{
			character._mp -= 5;
			var enemyFlee = 0;
			
			if (enemy._monsterType == 1)
			{
				enemyFlee = RandomNumber(1, 5);
				document.getElementById('output').value += "It's super effective!\n";
				AutoScroll();
			}
			else if (enemy._monsterType == 2)
				enemyFlee = RandomNumber(1, 6);
			else if (enemy._monsterType == 3)
			{
				enemyFlee = RandomNumber(1, 7);
				document.getElementById('output').value += "It's not very effective\n";
				AutoScroll();
			}	
			if (enemyFlee == 3)
			{
				document.getElementById('output').value += enemy._name + " fled from battle\n";
				AutoScroll();
				$('#stats_output').remove();
				character.resetStats();
				returnToMap();
				return false;
			}
			else
			{
				document.getElementById('output').value += enemy._name + " stood its ground\n";
				AutoScroll();
				this._turn++;
				return true;
			}
		}
		else
		{
			document.getElementById('output').value += "Not Enough Mana\n";
			AutoScroll();
			return false;
		}
	};
	
	/* invocation/revocation spells */
	
	this.restoreStrength = function restoreStrength()
	{
		if (character._mp > 6)
		{
			character._mp -= 7;
			player._poisonStatus = 0;
			player._sickenedStatus = 0;
			player._sleepStatus = 0;
			player._blindStatus = 0;
			document.getElementById('output').value += character._name + "'s ailments are cured\n";
			AutoScroll();
			this._turn++;
			return true;
		}
		else
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
	};
	
	this.hasten = function hasten()
	{
		if (hastenActive === false && character._mp > 7)
		{
			character._mp -= 8;
			character._evasion += Math.round((character._evasion * 0.30));
			character._accuracy += Math.round((character._accuracy * 0.30));
			document.getElementById('output').value += character._name + "'s evasion and accuracy are raised\n";
			AutoScroll();
			hastenActive = true;
			this._turn++;
			return true;
		}
		else if (character._mp < 8)
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
		else
		{
			document.getElementById('output').value += "Hasten is already active\n";
			AutoScroll();
			return false;
		}
	};
	
	this.stoneskin = function stoneskin()
	{
		if (stoneskinActive === false && character._mp > 9)
		{
			character._mp -= 10;
			stoneskinDuration = RandomNumber(2, 4);
			stoneskinActive = true;
			character._halfDamage = true;
			document.getElementById('output').value += "All damage is halved for " + stoneskinDuration + " turns\n";
			AutoScroll();
			this._turn++;
			return true;
		}
		else if (character._mp < 10)
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
		else
		{
			document.getElementById('output').value += "Stoneskin is already active\n";
			AutoScroll();
			return false;
		}
	};
	
	this.stoneskinTurnChecker = function stoneskinTurnChecker()
	{
		if (stoneskinDuration > 1)
			stoneskinDuration--;
		else if (stoneskinDuration == 1)
		{
			character._halfDamage = false;
			document.getElementById('output').value += "Stoneskin deactivated\n";
			AutoScroll();
			stoneskinDuration--;
			stoneskinActive = false;
		}
		
		return "";
	};
	
	this.magicBlight = function magicBlight()
	{
		if (magicBlightActive === false && character._mp > 11)
		{
			character._mp -= 8;
			magicBlightDuration = RandomNumber(3, 6);
			magicBlightActive = true;
			enemy._attack1 = (enemy._attack1*0.80);
			enemy._attack2 = (enemy._attack2*0.80);
			enemy._attack3 = (enemy._attack3*0.80);
			document.getElementById('output').value += enemy._name + "'s magical and physical power is reduced!\n";
			AutoScroll();
			this._turn++;
			return true;
		}
		else if (character._mp < 8)
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
		else
		{
			document.getElementById('output').value += "Magic Blight is already active\n";
			AutoScroll();
			return false;
		}
	};
	
	this.magicBlightTurnChecker = function magicBlightTurnChecker()
	{
		if (magicBlightDuration > 1)
			magicBlightDuration--;
		else if (magicBlightDuration == 1)
		{
			//revert actions here
			document.getElementById('output').value += "Magic Blight deactivated\n";
			AutoScroll();
			magicBlightDuration--;
			//reset action variables to 0 here
			magicBlightActive = false;
		}
		
		return "";
	};
	
	this.ennervate = function ennervate()
	{
		if (ennervateActive === false && character._mp > 8)
		{
			character._mp -= 8;
			ennervateDuration = RandomNumber(3, 7);
			ennervateActive = true;
			if (enemy._monsterType == 3)
			{
				ennervateAccAmt = Math.round(enemy._accuracy * 0.45);
				ennervateEvaAmt = Math.round(enemy._evasion * 0.45);
				enemy._attackMultiplier = 0.60;
				document.getElementById('output').value += "It's super effective!\n";
				AutoScroll();
			}
			else if (enemy._monsterType == 1)
			{
				ennervateAccAmt = Math.round(enemy._accuracy * 0.40);
				ennervateEvaAmt = Math.round(enemy._evasion * 0.40);
				enemy._attackMultiplier = 0.50;
			}
			else if (enemy._monsterType == 2)
			{
				ennervateAccAmt = Math.round(enemy._accuracy * 0.35);
				ennervateEvaAmt = Math.round(enemy._evasion * 0.35);
				enemy._attackMultiplier = 0.40;
				document.getElementById('output').value += "It's not very effective\n";
				AutoScroll();
			}
			enemy._accuracy -= ennervateAccAmt;
			enemy._evasion -= ennervateEvaAmt;
			document.getElementById('output').value += enemy._name + "'s accuracy, evasion, and attack are reduced for " + ennervateDuration + " turns\n";
			AutoScroll();
			this._turn++;
			return true;
		}
		else if (character._mp < 8)
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
		else
		{
			document.getElementById('output').value += "Ennervate is already active\n";
			AutoScroll();
			return false;
		}
	};
	
	this.ennervateTurnChecker = function ennervateTurnChecker()
	{
		if (ennervateDuration > 1)
			ennervateDuration--;
		else if (ennervateDuration == 1)
		{
			enemy._accuracy += ennervateAccAmt;
			enemy._evasion += ennervateEvaAmt;
			enemy._attackMultiplier = 0.35;
			document.getElementById('output').value += "Ennervate deactivated\n";
			AutoScroll();
			ennervateDuration--;
			ennervateAccAmt = 0;
			ennervateEvaAmt = 0;
			ennervateActive = false;
		}
		
		return "";
	};
	
	this.drain = function drain()
	{
		if (character._mp > 8)
		{
			character._mp -= 8;
			drainHpAmt = 0;
			if (enemy._monsterType == 3)
			{
				drainHpAmt = RandomNumber(15, 25);
				document.getElementById('output').value += "It's super effective!\n";
				AutoScroll();
			}
			else if (enemy._monsterType == 1)
			{
				drainHpAmt = RandomNumber(10, 20);
			}
			else if (enemy._monsterType == 2)
			{
				drainHpAmt = RandomNumber(5, 15);
				document.getElementById('output').value += "It's not very effective\n";
				AutoScroll();
			}
			enemy._health -= drainHpAmt;
			character._health += drainHpAmt;
			document.getElementById('output').value += enemy._name + "'s health reduced by " + drainHpAmt + " and " + character._name + "'s health increased by " + drainHpAmt + "\n";
			AutoScroll();
			this._turn++;
			return true;
		}
		else if (character._mp < 10)
		{
			document.getElementById('output').value += "Not enough Mana\n";
			AutoScroll();
			return false;
		}
	};
	
	this.poisonStatusChecker = function poisonStatusChecker()
	{
		if (player._poisonStatus > 0)
		{
			player._health = player._health - (player._health*0.08);
			player._poisonStatus--;
			document.getElementById("output") += "You suffer from the poison!\n";
			AutoScroll();
		}
	};
	
	this.sickenedStatusChecker = function sickenedStatusChecker()
	{
		player._tempAccuracy = player._accuracy;
		player._tempEvasion = player._evasion;
		if(player._sickenedStatus > 0)
		{
			player._accuracy = (player._accuracy * 0.80);
			player._evasion = (player._evasion * 0.80);
		}
		else
		{
			player._accuracy = player._tempAccuracy;
			player._evasion = player._tempEvasion;
		}
	};
	
	this.sleepStatusChecker = function sleepStatusChecker()
	{
		if(player._sleepStatus > 0)
		{
			player._sleepStatus--;
			document.getElementById('output').value += "The monster attacks while you slumber!\n";
			monsterTurn();
		}
	};
	
	this.blindStatusChecker = function blindStatusChecker()
	{
		player._tempAccuracy = player._accuracy;
		if(player._blindStatus > 0)
		{
			player._accuracy = (player._accuracy * 0.80);
		}
		else
		{
			player._accuracy = player._tempAccuracy;
		}
	};
	
	this.flee = function flee()
	{
		if (feignDeathActive === false)
			fleeOutcome = RandomNumber(1, 4);
		else
			fleeOutcome = RandomNumber(1, 2);
		
		if (fleeOutcome == 2)
		{
			document.getElementById('output').value += "Flee successful!\n";
			AutoScroll();
			$('#stats_output').remove();
			character.resetStats();
			returnToMap();
			return false;
		}
		else if (fleeOutcome == 5)
		{
			document.getElementById('output').value += "Cannot flee...\n";
			AutoScroll();
			return false;
		}
		else
		{
			document.getElementById('output').value += "Flee failed...\n";
			AutoScroll();
			this._turn++;
			return true;
		}
	};
}
//generates a random number using a min/max parameters for a range
function RandomNumber(min, max)
{
	var randomValue = Math.floor(min + Math.random() * (max - min + 1));
	return randomValue;
}