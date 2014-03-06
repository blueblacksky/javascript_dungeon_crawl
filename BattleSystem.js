function BattleSystem(handoffBossAgain)//you can pass in the battle true/false var
{
    //name, monsterType, health, atkName1, atkName2, atkName3, attack1, attack2, attack3,
	//defense, accuracy, evasion, attackMultiplier, defenseMultiplier
    var boss = new Monster("bossName", 0, 100, "null", "null", "null", 50, 56, 74, 60, 45, 22, 0.35, 0.20);

    //name, monsterType, health, atkName1, atkName2, atkName3, attack1, attack2, attack3,
	//defense, accuracy, evasion, attackMultiplier, defenseMultiplier
	//monsterType 1 is a magical creature, 2 is a construct, and 3 is an undead creature 
    var chimera = new Monster("Chimera", 1, 25, "Fire Breath", "Snake Bite", "Ram", 55, 49, 57, 35, 20, 10, 0.35, 0.20);
    var drake = new Monster("Drake", 1, 35, "Bite", "Tail Whip", "Rotten Breath", 54, 60, 65, 35, 17, 10, 0.35, 0.20);
    var rogueFamiliar = new Monster("Rogue Familiar", 1, 35, "Magic Drain", "Scratch", "Hypnosis", 50, 64, 73, 20, 25, 13, 0.35, 0.20);
    var stacksGolem = new Monster("Stacks Golem", 2, 45, "Slam", "Heave Books", "Extinguish", 74, 68, 76, 25, 27, 11, 0.35, 0.20);
    var ornithopter = new Monster("Ornithopter", 2, 35, "Slice", "Dart", "Smoke Cloud", 64, 75, 71, 22, 19, 17, 0.35, 0.20);
    var clockworkGuardian = new Monster("Clockwork Guardian", 2, 38, "Mace", "Shield Bash", "Charge", 68, 79, 75, 22, 31, 17, 0.35, 0.20);
    var skeleton = new Monster("Skeleton", 3, 40, "Bite", "Rend", "Life Drain", 59, 64, 69, 23, 27, 15, 0.35, 0.20);
    var zombieLibrarian = new Monster("Zombie Librarian", 3, 40, "Life Drain", "Throttle", "Bite", 72, 78, 89, 32, 26, 16, 0.35, 0.20);
    var wight = new Monster("Wight", 3, 40, "Arcane Bolt", "Life Drain", "Wight Bite", 77, 68, 74, 36, 33, 22, 0.35, 0.20);
	var bossFight = handoffBossAgain;
	var randomMonsterPicker;
	
	if (bossFight === true)
		randomMonsterPicker = 10;
	else
		randomMonsterPicker = RandomNumber(1, 9);
		
        //randomly chooses the monster and calls fight()
        switch (randomMonsterPicker)
		{
            case (1):
                Fight(player, chimera);
                break;
            case (2):
                Fight(player, drake);
                break;
            case (3):
                Fight(player, rogueFamiliar);
                break;
            case (4):
                Fight(player, stacksGolem);
                break;
            case (5):
                Fight(player, ornithopter);
                break;
            case (6):
                Fight(player, clockworkGuardian);
                break;
            case (7):
                Fight(player, skeleton);
                break;
            case (8):
                Fight(player, zombieLibrarian);
                break;
            case (9):
                Fight(player, wight);
                break;
			case (10):
				Fight(player, boss);
				break;
            default :
                document.getElementById('output').value += "FATAL ERROR NOOOO";
				AutoScroll();
                break;
	}
}