/*
Start the main game loop.
*/
function gameStart() {
	var inputBox = document.getElementById("action");
	inputBox.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			descrip = document.querySelector("#descrip");
			clearContent(descrip);
			
				item = document.createElement ("li");
				item.textContent = "Your name is "+ input;
				decrip.appendChild(item);
			}
		}
		while(player1.items.indexOf('gold key') ==0){
			gameStep();
		}
	}
};

/*
Run one pass of the game loop.
*/
function gameStep(input) {
	console.log("check");
	var cmd = interpret(input); // parse the user input
	var result = execute(cmd); // run the desired command
	report(result); // display the results on the screen
}
/*
Parse the user's input and use it to customize certain player properties.
method below sets player1's initial attributes
*/
function customizePlayer(input) {
	var inputOne = interpret(input);
	var player1= new Player(inputOne,"Foyer", 0);
	
}

//Parse and normalize the user input string.
function interpret(input) {
	var cmd = {}, tokens = input.trim().toLowerCase().split(" ");
	cmd.action = tokens.shift();
	cmd.target = tokens.join(" ");
	return cmd;
}

//Perform the desired player action.
function execute(command) {
	player[command.action](command.target);
}

//Display any results
function report(result) { // note: parameter not currently used
	displayActions();
	displayInventory();
	displayScene();
}

function displayActions() {
	var field, action, actionList;
	actionList = document.querySelector("#help > ul");
	clearContent(actionList);
	for (field in player) {
	    if (player[field] instanceof Function) {
		action = document.createElement("li");
		action.textContent = field;
		actionList.appendChild(action);
	}
   }
}
/*
Loop over each inventory item and add it to the Web page.
*/
function displayInventory() {
	var i, item, inventory;
	inventory = document.querySelector("#inventory > ul");
	clearContent(inventory);
	for (i in player.items) {
		item = document.createElement ("li");
		item.textContent = player.items[i];
		inventory.appendChild(item);
	}
}

/*
Get the description of the player's current location and write it to the page.
*/

function displayScene() {
				descrip = document.querySelector("#descrip");
				clearContent(descrip);
			
				item = document.createElement ("li");
				item.textContent = location.description;
				decrip.appendChild(item);
}

/*
This could be used along with a new paragraph element to display certain messages.
*/

function displayFeedback(msg) {
descrip = document.querySelector("#descrip");
			clearContent(descrip);
			
				item = document.createElement ("li");
				item.textContent = msg;
				decrip.appendChild(item);
}

/*
This is an example of recognizing the need for a helper function and then writing it!
We could just set innerHTML to empty string - but this is better (more efficient)!
*/

function clearContent(node) {
		while (node.hasChildNodes()) {
			node.removeChild(node.firstChild);
		}
}
window.onload = gameStart(); //starts game

//PLAYER FUNTIONS BELOW

function Player (playerName, currentLoc, pointsAcquired) {
  	this.name = playerName; 
	this.location= currrentLoc;
	this.points = pointsAcquired;
	this.items [];
};
  


Player.prototype.pickup = function(item) {
	if (location.has(item)){// check whether the current location has the item
		location.remove(item);// remove the item from the current location
		this.items.push(item);
	}else{
	descrip = document.querySelector("#descrip");
			clearContent(descrip);
			
				item = document.createElement ("li");
				item.textContent = "That Item is not Present";
				decrip.appendChild(item);
	}
};
/*
Put an item back into the world, removing it from the player.
Helpful functions: Location.put, displayFeedback
*/
Player.prototype.drop = function(item) {
	var pos = this.items.indexOf(item);
	if (pos >= 0) {
		this.items.splice(pos, 1);
		location.put(item);// after removing item from the player, add it to the current location
	} else {
		// display feedback indicating that the player doesn't have item
	}
};

player.go = function(locName) {
	var locNum; 
	player1.location= locName;
};



function Location(name, descrip, initialItems) {
	this.name = name;
	this.description = function() {
		return descrip;
	}
this.items = initialItems;

}


Location.prototype.has = function(item) {
	return this.items;
}

Location.prototype.remove = function(item) {
	var pos = this.items.indexOf(item);
	
	if (pos >= 0) {
		this.items.splice(pos, 1);
	} else {
		descrip = document.querySelector("#descrip");
			clearContent(descrip);
			
				item = document.createElement ("li");
				item.textContent = "The Player does not have the item requested";
				decrip.appendChild(item);
	}

};

Location.prototype.put = function(item) {
	this.items.push(item);
}

function isConnected(map, from, to) {

}

function connect(map, from, to) {
	map.connections[from][to] = 1;
	map.connections[to][from] = 1;
}
function disconnect(map, from, to) {
	map.connections[from][to] = 0;
	map.connections[to][from] = 0;
}
// map
var map = {
	locations: [
		new Location("Kitchen", "You are in a cold dark, distroyed Kitchen.", ["knife", "notebook"]),
		new Location("Den", "You are in a dark den. There are man eating snakes all over the floor.", ["snake", "bad key"]),
		new Location("Dinning Room", "You are in the Dinning room, there is a broken window on the ground along with the chandelier.", ["rope", "golden key", "dog"]),
		new Location("Family Room", "You are in the Family Room, the windows are all broken. It is very cold and there is snow all over the ground. Along with penguins", ["penguin","shovel"])
],
connections: [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ]
};
