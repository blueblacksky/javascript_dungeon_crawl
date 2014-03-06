//Monster class
function Monster(name, monsterType, health, atkName1, atkName2, atkName3, attack1, attack2, attack3, defense, accuracy, evasion, attackMultiplier, defenseMultiplier)
{    
	var Name = name,
        MonsterType = monsterType,
		Health = health,
		AtkName1 = atkName1,
		AtkName2 = atkName2,
		AtkName3 = atkName3,
        Attack1 = attack1,
		Attack2 = attack2,
		Attack3 = attack3,
        Defense = defense,
		Accuracy = accuracy,
        Evasion = evasion,
        AttackMultiplier = attackMultiplier,
		DefenseMultiplier = defenseMultiplier;

	//getters and setters for the Monster class
    //name
    Object.defineProperty(this, "_name", {
		get : function(){ return Name; }
    });
	
	//monster type
	Object.defineProperty(this, "_monsterType", {
		get : function(){ return MonsterType; }
	});

    //health
    Object.defineProperty(this, "_health", { 
		get : function(){ return Health; },
		set : function(val)
		{
			if (val <= 0)
				Health = 0;
			else
				Health = val;
		}
    });

    //atkName1
    Object.defineProperty(this, "_atkName1", {
		get : function(){ return AtkName1; }
    });
	
    //atkName2
    Object.defineProperty(this, "_atkName2", {
		get : function(){ return AtkName2; }
    });
	
    //atkName3
    Object.defineProperty(this, "_atkName3", {
		get : function(){ return AtkName3; }
    });
	
    //attack1
    Object.defineProperty(this, "_attack1", {
		get : function(){ return Attack1; },
		set : function(val){ Attack1 = val; }
    });
	
	//attack2
    Object.defineProperty(this, "_attack2", {
		get : function(){ return Attack2; },
		set : function(val){ Attack2 = val; }
    });
	
	//attack3
    Object.defineProperty(this, "_attack3", {
		get : function(){ return Attack3; },
		set : function(val){ Attack3 = val; }
    });

    //defense
    Object.defineProperty(this, "_defense", {
		get : function(){ return Defense; },
		set : function(val){ Defense = val; }
    });
	
	//accuracy
    Object.defineProperty(this, "_accuracy", {
		get : function(){ return Accuracy; },
		set : function(val){ Accuracy = val; }
    });

    //evasion
    Object.defineProperty(this, "_evasion", {
		get : function(){ return Evasion; },
		set : function(val){ Evasion = val; }
    });

    //multipliers
    Object.defineProperty(this, "_attackMultiplier", {
		get : function(){ return AttackMultiplier; },
		set : function(val){ AttackMultiplier = val;}
    });
    Object.defineProperty(this, "_defenseMultiplier", {
		get : function(){ return DefenseMultiplier; },
		set : function(val){ DefenseMultiplier = val;}
    });
	
	//monster methods
	//one of these three monster attacks is called, three unique attacks per monster, dictated by a switch statement
    this.firstAttack = function firstAttack(character)
	{
        var dmg = 0,
        missInt = (character._evasion / 10),
		missDeci = (character._evasion % 10 ),
		miss = missInt + "." + missDeci;
		miss = parseFloat(miss);
		
		document.getElementById('output').value += Name + " uses " + AtkName1 + "\n";
		
		switch(AtkName1){
		
		case 'Fire Breath':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "You dodge the flames!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack1 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			player._health -= dmg;
			document.getElementById('output').value += "You are scorched by the flames!\n";
			AutoScroll();
			}
			break;
		}
		case 'Magic Drain':{
			if(Accuracy * 0.30 <= miss)
			{
			document.getElementById('output').value += "You resist the draining magicks!!\n";
			AutoScroll();
			}
			else
			{
			dmg = 0;
			player._mp -= RandomNumber(4,12);
			document.getElementById('output').value += "You have lost some mana points!\n";
			AutoScroll();
			}
			break;
		}
		case 'Slam':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "You dodge the Golem's enormous fists!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack1 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			player._health -= dmg;
			document.getElementById('output').value += "You are slammed by the Golem's enourmous fists!\n";
			AutoScroll();
			}
			break;
		}
		case 'Slice':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "The Ornithropter's wing blades narrowly miss you!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack1 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			player._health -= dmg;
			document.getElementById('output').value += "You are lacerated by the Ornithropter's wing blades!\n";
			AutoScroll();
			}
			break;
		}
		case 'Mace':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "You knight's mace misses narrowly!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack1 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			player._health -= dmg;
			document.getElementById('output').value += "The knight's mace batters you!\n";
			AutoScroll();
			}
			break;
		}
		case 'Bite':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "You narrowly avoid the sharp teeth!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack1 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			player._health -= dmg;
			document.getElementById('output').value += "You suffer a bite wound!\n";
			AutoScroll();
			}
			break;
		}
		case 'Life Drain':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "You avoid the life stealing touch!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack1 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			this._health += dmg;
			document.getElementById('output').value += "Some of your life force is stolen!\n";
			AutoScroll();
			}
			break;
		}
		case 'Arcane Bolt':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "The Wight sends an Arcane Bolt your way, but you dodge it!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack1 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			player._health -= dmg;
			document.getElementById('output').value += "The Wight's Arcane Bolt scorches you!\n";
			AutoScroll();
			}
			break;
		}
		default:
		break;
		}
		return "";
		};
		
    this.secondAttack = function secondAttack(character)
	{
        var dmg = 0,
        missInt = (character._evasion / 10),
		missDeci = (character._evasion % 10 ),
		miss = missInt + "." + missDeci;
		miss = parseFloat(miss);
		
		document.getElementById('output').value += Name + " uses " + AtkName2 + "\n";	
		
		switch(AtkName2){
		
		case 'Snake Bite':{
			if(Accuracy * 0.30 <= miss)
			{
			document.getElementById('output').value += "You dodge the venomous fangs!\n";
			AutoScroll();
			}
			else
			{
			dmg = 0; 
			player._poisonStatus = RandomNumber(2,5);
			document.getElementById('output').value += "You are poisoned!\n";
			AutoScroll();
			}
			break;
		}
		case 'Tail Whip':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "The tail misses you!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack2 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			player._health -= dmg;
			document.getElementById('output').value += "You are clubbed by the tail!\n";
			AutoScroll();
			}
			break;
		}
		case 'Scratch':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "The needle-like claws miss!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack2 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			player._health -= dmg;
			document.getElementById('output').value += "You are rended by needle-like claws!\n";
			AutoScroll();
			}
			break;
		}
		case 'Heave Books':{
			if(Accuracy * 0.30 <= miss)
			{
			document.getElementById('output').value += "The giant stack of tomes misses you!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack2 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			player._health -= dmg;
			document.getElementById('output').value += "Several large tomes slam into you!\n";
			AutoScroll();
			}
			break;
		}
		case 'Dart':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "The poisoned dart misses you!\n";
			AutoScroll();
			}
			else
			{
			dmg = 0; 
			player._poisonStatus = RandomNumber(2,5);
			document.getElementById('output').value += "You are hit with a poisoned dart!\n";
			AutoScroll();
			}
			break;
		}
		case 'Shield Bash':{
			if(Accuracy * 0.30 <= miss)
			{
			document.getElementById('output').value += "The knights shield misses you!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack2 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			player._health -= dmg;
			document.getElementById('output').value += "The knight's shield slams into you!\n\nYou are stunned as the knight attacks again!";
			AutoScroll();
			monsterTurn();
			}
			break;
		}
		case 'Rend':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "Skeletal fingers reach for you, but you dodge!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack2 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			player._health -= dmg;
			document.getElementById('output').value += "Your flesh is torn by skeletal fingers!\n";
			AutoScroll();
			}
			break;
		}
		case 'Throttle':{
			if(Accuracy * 0.30 <= miss)
			{
			document.getElementById('output').value += "The undead librarian tries to throttle you, but you pull away!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack2 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			player._health -= dmg;
			document.getElementById('output').value += "You are throttled by the undead librarian, it attacks again!\n";
			AutoScroll();
			monsterTurn();
			}
			break;
		}
		case 'Life Drain':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "You escape the cold grasp of death\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack2 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			player._health -= dmg;
			this._health += dmg;
			document.getElementById('output').value += "Some of your life force is stolen!\n";
			AutoScroll();
			}
			break;
		}
		default:
		break;
		}
        return "";
		};
		
    this.thirdAttack = function thirdAttack(character)
	{
        var dmg = 0,
        missInt = (character._evasion / 10),
		missDeci = (character._evasion % 10 ),
		miss = missInt + "." + missDeci;
		miss = parseFloat(miss);
		
		document.getElementById('output').value += Name + " uses " + AtkName3 + "\n";
		
		switch(AtkName3){
		
		case 'Ram':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "You dodge the ram head's charge!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack3 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			player._health -= dmg;
			document.getElementById('output').value += "You are butted by the ram head's horns!\n";
			AutoScroll();
			}
			break;
		}
		case 'Rotten Breath':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "You manage to avoid the worst of the rotten breath!\n";
			AutoScroll();
			}
			else
			{
			dmg = 0;
			player._sickenedStatus = RandomNumber(2,5);
			document.getElementById('output').value += "You are sickened!\n";
			AutoScroll();
			}
			break;
		}
		case 'Hypnosis':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "You resist the hypnotic movements!\n";
			AutoScroll();
			}
			else
			{
				dmg = 0; 
				if(player._sleepStatus > 0)
				{
					document.getElementById('output').value += "The hypnosis has no effect on you!\n";
					AutoScroll();
				}
				else
				{
					player._sleepStatus = RandomDumber(1,3);
					document.getElementById('output').value += "You fall into a deep slumber!\n";
					AutoScroll();
				}
			}
			break;
		}
		case 'Extinguish':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "The fire extinguishing blast misses you!\n";
			AutoScroll();
			}
			else
			{
			dmg = 0;
			player._blindStatus = RandomNumber(2,5);
			document.getElementById('output').value += "You are temporarily blinded by the extinguishing blast!\n";
			AutoScroll();
			}
			break;
		}
		case 'Smoke Cloud':{
			this._evasion += (this._evasion*0.20);
			document.getElementById('output').value += "The Ornithopter obscures itself with a smoke cloud!\n";
			break;
		}
		case 'Charge':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "The clockwork guardian charges at you, but you safely step aside!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack3 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			document.getElementById('output').value += "The guardian smashes into you with full force!\n";
			}
			break;
		}
		case 'Life Drain':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "Skeletal fingers reach for you, but you dodge!\n";
			AutoScroll();
			}
			else
			{
			dmg = (Attack3 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			this._health += dmg;
			document.getElementById('output').value += "Your touch of undeath steals your life force!\n";
			AutoScroll();
			}
			break;
		}
		case 'Bite':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "The skeleton tries to grab you for a fearsome bite, but you avoid it!\n";
			AutoScroll();
			break;
			}
			else
			{
			dmg = (Attack3 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			document.getElementById('output').value += "\nThe Skeleton grabs and bites you!\n";
			AutoScroll();
			break;
			}
		}
		case 'Wight Bite':{
			if(Accuracy * 0.20 <= miss)
			{
			document.getElementById('output').value += "\nThe Wight tries to bite you with gleaming fangs, but you avoid it!";
			AutoScroll();
			break;
			}
			else
			{
			dmg = (Attack3 * AttackMultiplier) - (character._defense * character._defenseMultiplier);
			document.getElementById('output').value += "\nThe Wight tears your flesh with its gleaming fangs!";
			AutoScroll();
			break;
			}
		}
		default:
		break;
		}
        return "";
    };

    //here for returning info, testing
    this.getStats = function getStats()
	{
        document.getElementById('output').value += Name + " Health: " + Health + "\n";
		AutoScroll();

        //needs to return something otherwise it has no explicit return in javascript
        return "";
    };
	}