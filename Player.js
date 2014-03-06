//Player class
function Player(name, school, health, attack, defense, magic, mp, accuracy, tempAccuracy, evasion, tempEvasion, attackMultiplier, defenseMultiplier)
{
    //declarations
    var Name = name,
		School = school,
		Health = health,
        Attack = attack,
        Defense = defense,
        Magic = magic,
		MP = mp,
		Accuracy = accuracy,
        Evasion = evasion,
        AttackMultiplier = attackMultiplier,
		DefenseMultiplier = defenseMultiplier,
		//status declarations
		halfDamage = false;
		poisonStatus = 0;
		sickenedStatus = 0;
		sleepStatus = 0;
		blindStatus = 0;
		TempAccuracy = tempAccuracy;
		TempEvasion = tempEvasion;
		
	//getters and setters for the character class
    //name
    Object.defineProperty(this, "_name", {
		get : function(){ return Name; },
		set : function(val){ Name = val; }
    });
	
	//school
    Object.defineProperty(this, "_school", {
		get : function(){ return School; },
		set : function(val){ School = val; }
    });

    //health
    Object.defineProperty(this, "_health", { 
		get : function(){ return Health; },
		set : function(val)
		{
			if (val <= 0)
			{
				Health = 0;
				GameOver();
			}
			else if (val >= health)
			{
				Health = health;
				OnStatChange();
			}
			else
			{
				if (halfDamage === true && val < Health)
				{
					Health -= Math.round((Health - val) / 2);
					OnStatChange();
				}
				else
				{
				Health = val;
				OnStatChange();
				}
			}
		}
    });

    //attack
    Object.defineProperty(this, "_attack", {
		get : function(){ return Attack; },
		set : function(val){ Attack = val; }
    });

    //defense
    Object.defineProperty(this, "_defense", {
		get : function(){ return Defense; },
		set : function(val){ Defense = val; OnStatChange(); }
    });

    //magic
    Object.defineProperty(this, "_magic", {
		get : function(){ return Magic; },
		set : function(val){ Magic = val; }
    });
	
	//mp
    Object.defineProperty(this, "_mp", {
		get : function(){ return MP; },
		set : function(val)
		{
			if (val <= 0)
			{
				MP = 0;
				OnStatChange();
				document.getElementById('output').value += Name + "'s MP is depleted\n";
			}
			else
			{
				MP = val;
				OnStatChange();
			}
		}
    });
	
	//accuracy
    Object.defineProperty(this, "_accuracy", {
		get : function(){ return Accuracy; },
		set : function(val){ Accuracy = val; OnStatChange();}
    });
	
	//accuracy temp stat
	Object.defineProperty(this, "_tempAccuracy", {
		get : function(){ return TempAccuracy; },
		set : function(val){ TempAccuracy = val; OnStatChange(); }
	});

    //evasion
    Object.defineProperty(this, "_evasion", {
		get : function(){ return Evasion; },
		set : function(val){ Evasion = val; OnStatChange(); }
    });
	
	//accuracy temp stat
	Object.defineProperty(this, "_tempEvasion", {
		get : function(){ return TempEvasion; },
		set : function(val){ TempEvasion = val; OnStatChange(); }
	});
	
	//halfDamage is used for the stoneskin spell in SpellList.js
	Object.defineProperty(this, "_halfDamage", {
		get : function(){ return halfDamage; },
		set : function(val){ halfDamage = val; }
	});
	
	Object.defineProperty(this, "_poisonStatus", {
		get : function(){ return poisonStatus; },
		set : function(val){ poisonStatus = val; }
	});
	
	Object.defineProperty(this, "_sickenedStatus", {
		get : function(){ return sickenedStatus; },
		set : function(val){ sickenedStatus = val; }
	});

	Object.defineProperty(this, "_sleepStatus", {
		get : function(){ return sleepStatus; },
		set : function(val) { sleepStatus = val; }
	});
	
	Object.defineProperty(this, "_blindStatus", {
		get : function(){ return blindStatus; },
		set : function(val){ blindStatus = val; }
	});
	
    //multipliers
    Object.defineProperty(this, "_attackMultiplier", {
		get : function(){ return attackMultiplier; }
    });
    Object.defineProperty(this, "_defenseMultiplier", {
		get : function(){ return defenseMultiplier; }
    });

	//Character methods
    //here for returning info, testing
    this.getStats = function getStats()
	{
        document.getElementById('output').value += Name + ", Health: " + Health + "\n";
		AutoScroll();

        //needs to return something otherwise it has no explicit return in javascript
        return "";
    };
	
	//used to regenerate MP after each fight
	this.resetStats = function resetStats()
	{
		Attack = attack;
		Defense = defense;
		Magic = magic;
		MP = mp;
		Accuracy = accuracy;
		Evasion = evasion;
		
		return "";
	};
}

function GameOver(){
	$('#stats_output').remove();
	$("#button_container").remove();
	$("#enemy_container").remove();
	var DeathMessage = "You have suffered a terrible fate.\nYour life ends here.";
	$("#output").val(""+DeathMessage);
	AutoScroll();
}