/*
Start the main game loop.
*/
function gameStart() {
	var inputBox = document.getElementById("action");
	inputBox.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			//customizePlayer(this.value);
			var newWords=document.getElementByTagName("descrip");
			newWords.textContent = "Your name is..."
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
/*
Parse and normalize the user input string.
*/
function interpret(input) {
	var cmd = {}, tokens = input.trim().toLowerCase().split(" ");
	cmd.action = tokens.shift();
	cmd.target = tokens.join(" ");
	return cmd;
}
/*
Perform the desired player action.
*/
function execute(command) {
	player[command.action](command.target);
}
/*
Display any results/changes on the page.
*/
function report(result) { // note: parameter not currently used
	displayActions();
	displayInventory();
	displayScene();
}
/*
Loop over each player method and add it to the Web page.
*/
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
// Hmmm... need to implement this function...
}

/*
This could be used along with a new paragraph element to display certain messages.
*/

function displayFeedback(msg) {
// Hmmm... need to implement this function...
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
  

/*
Take an item from the world and add it to the player.
Helpful functions: Location.has, Location.remove, displayFeedback
*/
Player.prototype.pickup = function(item) {
	if (location.has(item)){// check whether the current location has the item
		location.remove(item);// remove the item from the current location
		this.items.push(item);
	}else{
		// otherwise
		//return(); display feedback indicating that the item is not present
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
/*
Move the player around the map.
Helpful functions: indexOfLocation, isConnected, displayFeedback
*/
player.go = function(locName) {
	var locNum; 
	player1.location= locName;
};

player.use = function(item) {
// check first that the user has the item
// then "use" the item... what this means or how it works depends on your game
// otherwise
// display feedback indicating that the player doesn't have this item
}

/*
Constructor used to create all the locations in the game.
Notice that I have added an initialItems parameter so that
we can start the location out with some items in it.
You might need to add more parameters to this constructor
if there are other properties that need initial values.
*/
function Location(name, descrip, initialItems) {
	this.name = name;
	this.description = function() {
		return descrip;
	}
this.items = initialItems;
// add any additional properties that you need, suggested ideas include:
// - a list of prerequisite items needed to enter the location
// - boolean variable to indicate locked/unlocked
// - boolean variable to indicate dark/illuminated
// - list of monsters/enemies/etc. in the location
// - anything else you can think of that work for your story!
}


Location.prototype.has = function(item) {
	return this.items;
}

Location.prototype.remove = function(item) {
	var pos = this.items.indexOf(item);
	
	if (pos >= 0) {
		this.items.splice(pos, 1);
	} else {
		// display feedback indicating that the player doesn't have item
	}

};

Location.prototype.put = function(item) {
	this.items.push(item);
}

/*
NOTE: For the functions below, we could instead make them methods of our
map object - then we could call them as map.connect(from,to)
*/

//function indexOfLocation = function(map, locName) {
// this should work like indexOf, but searches for a location whose name matches
//}
function isConnected(map, from, to) {
// check if there is a 1 in the corresponding cell of connections
}
// example - how to write a function that makes a path between two locations
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

// example of a different way to build the adjacency matrix
connect(map, 0, 1);
connect(map, 1, 2);
connect(map, 2, 0);
// little test function so we can get used to the matrix and see if it works
function testMap() {
	var j;
	console.log("The " + map.locations[0].name + " is adjacent to:");
	for (j in map.connections[0]) {
		if (map.connections[0][j] === 1) {
			console.log(" the " + map.locations[j].name);
		}
	}
};
