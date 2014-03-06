function AutoScroll(){

	var myElem = document.getElementById('output');
	myElem.scrollTop = myElem.scrollHeight - myElem.clientHeight;

}
function OnStatChange()
{
	$('#stats_output').val(player._name + "\nHealth:\t\t" + player._health.toFixed() + "\nMana:\t\t" + player._mp.toFixed() + "\nDefense:\t" + player._defense.toFixed() + "\nAccuracy:\t" + player._accuracy.toFixed() + "\nEvasion:\t" + player._evasion.toFixed());
}