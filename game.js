var player = {
  //name: John Jay,
  /*
  function pickup(item){
    this.items.push (item);
  }
  
  function drop (item){
    //this.items
  }
  */
};

function interpret (input){
  console.log("interpret");
}

function execute (object){
  var action = command.action;
  var actionFuntion = player[action];
  actionFunction(...);
   }
}

function report () {
  console.log("report");
}

function gameStep (inputString){
  console.log("gameStep");
  var command = interpret(input);
  execute(command);
  report();
  
}

function gameStart(){
  console.log("The Game has started");
  var inputBox = document.querySelector("input");
  inputBox.addEventListener ("keyup",function (event){
    if (event.keycode === 13){
      var inputText = this.value;
      gameStep(inputText);
    }
  });
}

window.onload = gameStart;