function Encounter(handoffBoss)
{
	var rand = RandomNumber(1, 100);
	var boss = handoffBoss;

	if (rand > 0 && rand < 34)
	{	
		window.alert("You are under attack!");
		BattleSystem(boss);	
	}
}