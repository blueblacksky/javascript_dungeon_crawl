//item prototype
function item(name, description){
	this.name = name;
	this.description = description;
}

//items instantiated here
var nothing = new item("Nothing", "");
var weakManaPotion = new item("Weak Mana Potion", "A cloudy blue potion that restores a small amount of mana.");
var strongManaPotion = new item("Strong Mana Potion","A deep blue potion that restores a large amount of mana."); 

//player inventory
var inventory = new Array();
inventory[0] = nothing;
inventory[1] = nothing;
inventory[2] = nothing;
inventory[3] = nothing;
inventory[4] = nothing;
inventory[5] = nothing;
inventory[6] = nothing;
inventory[7] = nothing;
var inventoryCounter = 0;

//boolean for inventory space
var inventorySpace = 1;

//function for accessing inventory
$(document).on('click', '#open_inventory', function(){
	inventoryButtonContainer = document.getElementById("button_container");
	inventoryButtonContainer.innerHTML = '';
	
	var inventoryButton1 = document.createElement('input');
		inventoryButton1.setAttribute('type', 'button');
		inventoryButton1.setAttribute('onclick', 'useItem(inventory[0].name, 0); return false;');
		inventoryButton1.setAttribute('value', inventory[0].name + ' ' + inventory[0].description);
	var inventoryButton2 = document.createElement('input');
		inventoryButton2.setAttribute('type', 'button');
		inventoryButton2.setAttribute('onclick', 'useItem(inventory[1].name, 1); return false;');
		inventoryButton2.setAttribute('value', inventory[1].name + ' ' + inventory[1].description);
	var inventoryButton3 = document.createElement('input');
		inventoryButton3.setAttribute('type', 'button');
		inventoryButton3.setAttribute('onclick', 'useItem(inventory[2].name, 2); return false;');
		inventoryButton3.setAttribute('value', inventory[2].name + ' ' + inventory[2].description);
	var inventoryButton4 = document.createElement('input');
		inventoryButton4.setAttribute('type', 'button');
		inventoryButton4.setAttribute('onclick', 'useItem(inventory[3].name, 3); return false;');
		inventoryButton4.setAttribute('value', inventory[3].name + ' ' + inventory[3].description);
	var inventoryButton5 = document.createElement('input');
		inventoryButton5.setAttribute('type', 'button');
		inventoryButton5.setAttribute('onclick', 'useItem(inventory[4].name, 4); return false;');
		inventoryButton5.setAttribute('value', inventory[4].name + ' ' + inventory[4].description);
	var inventoryButton6 = document.createElement('input');
		inventoryButton6.setAttribute('type', 'button');
		inventoryButton6.setAttribute('onclick', 'useItem(inventory[5].name, 5); return false;');
		inventoryButton6.setAttribute('value', inventory[5].name + ' ' + inventory[5].description);
	var inventoryButton7 = document.createElement('input');
		inventoryButton7.setAttribute('type', 'button');
		inventoryButton7.setAttribute('onclick', 'useItem(inventory[6].name, 6); return false;');
		inventoryButton7.setAttribute('value', inventory[6].name + ' ' + inventory[6].description);
	var inventoryButton8 = document.createElement('input');
		inventoryButton8.setAttribute('type', 'button');
		inventoryButton8.setAttribute('onclick', 'useItem(inventory[7].name, 7); return false;');
		inventoryButton8.setAttribute('value', inventory[7].name + ' ' + inventory[7].description);
	var inventoryButton9 = document.createElement('input');
		inventoryButton9.setAttribute('type', 'button');
		inventoryButton9.setAttribute('onclick', 'returnToMap(); return false;');
		inventoryButton9.setAttribute('value', 'Close Inventory');
	
	$("#button_container").append(inventoryButton1);
	$("#button_container").append(inventoryButton2);
	$("#button_container").append(inventoryButton3);
	$("#button_container").append(inventoryButton4);
	$("#button_container").append(inventoryButton5);
	$("#button_container").append(inventoryButton6);
	$("#button_container").append(inventoryButton7);
	$("#button_container").append(inventoryButton8);
	$("#button_container").append(inventoryButton9);
	
	document.getElementById('output').value += "\nChoose an item to use.\n";
	AutoScroll();
});

//function for accessing inventory in combat
$(document).on('click', '#combat_inventory', function(){
	inventoryButtonContainer = document.getElementById("button_container");
	inventoryButtonContainer.innerHTML = '';
	
	var inventoryButton1 = document.createElement('input');
		inventoryButton1.setAttribute('type', 'button');
		inventoryButton1.setAttribute('onclick', 'useItem(inventory[0].name, 0); return false;');
		inventoryButton1.setAttribute('value', inventory[0].name + ' ' + inventory[0].description);
	var inventoryButton2 = document.createElement('input');
		inventoryButton2.setAttribute('type', 'button');
		inventoryButton2.setAttribute('onclick', 'useItem(inventory[1].name, 1); return false;');
		inventoryButton2.setAttribute('value', inventory[1].name + ' ' + inventory[1].description);
	var inventoryButton3 = document.createElement('input');
		inventoryButton3.setAttribute('type', 'button');
		inventoryButton3.setAttribute('onclick', 'useItem(inventory[2].name, 2); return false;');
		inventoryButton3.setAttribute('value', inventory[2].name + ' ' + inventory[2].description);
	var inventoryButton4 = document.createElement('input');
		inventoryButton4.setAttribute('type', 'button');
		inventoryButton4.setAttribute('onclick', 'useItem(inventory[3].name, 3); return false;');
		inventoryButton4.setAttribute('value', inventory[3].name + ' ' + inventory[3].description);
	var inventoryButton5 = document.createElement('input');
		inventoryButton5.setAttribute('type', 'button');
		inventoryButton5.setAttribute('onclick', 'useItem(inventory[4].name, 4); return false;');
		inventoryButton5.setAttribute('value', inventory[4].name + ' ' + inventory[4].description);
	var inventoryButton6 = document.createElement('input');
		inventoryButton6.setAttribute('type', 'button');
		inventoryButton6.setAttribute('onclick', 'useItem(inventory[5].name, 5); return false;');
		inventoryButton6.setAttribute('value', inventory[5].name + ' ' + inventory[5].description);
	var inventoryButton7 = document.createElement('input');
		inventoryButton7.setAttribute('type', 'button');
		inventoryButton7.setAttribute('onclick', 'useItem(inventory[6].name, 6); return false;');
		inventoryButton7.setAttribute('value', inventory[6].name + ' ' + inventory[6].description);
	var inventoryButton8 = document.createElement('input');
		inventoryButton8.setAttribute('type', 'button');
		inventoryButton8.setAttribute('onclick', 'useItem(inventory[7].name, 7); return false;');
		inventoryButton8.setAttribute('value', inventory[7].name + ' ' + inventory[7].description);
	var inventoryButton9 = document.createElement('input');
		inventoryButton9.setAttribute('type', 'button');
		inventoryButton9.setAttribute('onclick', 'returnToCombat(); return false;');
		inventoryButton9.setAttribute('value', 'Close Inventory');
	
	$("#button_container").append(inventoryButton1);
	$("#button_container").append(inventoryButton2);
	$("#button_container").append(inventoryButton3);
	$("#button_container").append(inventoryButton4);
	$("#button_container").append(inventoryButton5);
	$("#button_container").append(inventoryButton6);
	$("#button_container").append(inventoryButton7);
	$("#button_container").append(inventoryButton8);
	$("#button_container").append(inventoryButton9);
	
	document.getElementById('output').value += "\nChoose an item to use.\n";
	AutoScroll();
});
	
//function to check for available inventory space
function checkInventorySpace(){
	inventoryCounter = 0;
	for(j = 0; j < inventory.length; ++j)
	{
		if(inventory[j].name == 'Nothing')
		{
			inventorySpace = 1;
			inventoryCounter = j;
			break;
		}
		else
		{
			inventorySpace = 0;
			inventoryCounter = j;
		}
	}
}

//function for item effects
function useItem(item, slot){
	this.item = item;
	this.slot = slot;
	switch(item)
	{
		case "Weak Mana Potion":
		{
			//effect goes here
			inventory[slot] = nothing;
			document.getElementById('output').value += "\nUsed Weak Mana Potion.";
			AutoScroll();
			break;
		}
		case "Strong Mana Potion":
		{
			//effect goes here
			inventory[slot] = nothing;
			document.getElementById('output').value += "\nUsed Strong Mana Potion.";
			AutoScroll();
			break;
		}
		case "Nothing":
		{
			document.getElementById('output').value += "\nInventory slot is empty.";
			AutoScroll();
			break;
		}
		default:
		{
			break;
		}
	}
	
}

//treasure function that randomizes treasure
function treasure(){
	//checks inventory space
	checkInventorySpace();
	if(inventorySpace == 1)
	{
		worldMap[playerPosX][playerPosY].treasure = 0;
		var i = Math.floor((Math.random()*2)+1);
		switch(i)
		{
			case 1:
			{
				inventory[inventoryCounter] = weakManaPotion;
				document.getElementById('output').value += "\nYou have acquired a Weak Mana Potion!";
				AutoScroll();
				break;
			}
			case 2:
			{
				inventory[inventoryCounter] = strongManaPotion;
				document.getElementById('output').value += "\nYou have acquired a Strong Mana Potion!";
				AutoScroll();
				break;
			}
			default:
			{
				break;
			}
		}
	}
	else
	{
		document.getElementById('output').value += "\nYou were unable to claim the treasure.";
	}

}