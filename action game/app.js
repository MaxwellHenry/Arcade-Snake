
let gameState = {

  player: {
    name: '',
    points: 0,
  },

  canvas: [
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  ]
}

let snake = {
  body: [
    [10, 5],
    [10, 6],
    [10, 7],
    [10, 8],
  ],
  nextDirection: [1, 0],

  

};



let apple = {
  location: []
}

let game;

function buildInitialState() {
  renderState();
  buildSnake();
  buildApple();
  requestPlayerName()
}

function requestPlayerName() {
  const playerNameForm = $(`
    <form id = "player-name-form">
      <input id="player-name-input"type="text"/>
      <button>Save Name</button>
    </form>`)
  const playerNameElement = $('#player-name');
  playerNameElement.append(playerNameForm);

  $("#app").on('input', '#player-name-input', function(event){
    event.preventDefault();
    let name = $('#player-name-input').val();
    gameState.player.name = name;

  })

  $("#app").on('submit', '#player-name-form', function(event){
    event.preventDefault();
    if (gameState.player.name.trim() !== ""){
      $('#player-name-input').remove();
      playerNameElement.text(gameState.player.name)

      startGame()
    }
  })

}

// render the state
function renderState() {
  const canvasElement = $("#canvas");
  canvasElement.empty();

  gameState.canvas.forEach(function (row, rowIndex) {
    row.forEach(function (segment, segmentIndex) {
      const segmentElement = $(
        `<div class="segment" data-x="${rowIndex}" data-y="${segmentIndex}"></div>`
      );
      canvasElement.append(segmentElement);
    });
  });
}
/// BUILD SNAKE  ///
function buildSnake() {
 
  


  $(".segment").removeClass("snake");
  const snakeHead = snake.body[0];
  const snakeHeadX = snakeHead[0];
  const snakeHeadY = snakeHead[1];

  const snakeTail = snake.body[snake.body.length - 1];
  const snakeTailX = snakeTail[0];
  const snakeTailY = snakeTail[1];


  const newSnakeHeadX = snakeHeadX + snake.nextDirection[0];
  const newSnakeHeadY = snakeHeadY + snake.nextDirection[1];
  const newSnakeHead = [newSnakeHeadX, newSnakeHeadY];


  if (snakeHead[0] === apple.location[0] && snakeHead[1] === apple.location[1]){
    const newSnakeTailX = snake.nextDirection[0]
    const newSnakeTailY = snake.nextDirection[1]
    const newSnakeTail = [newSnakeTailX, newSnakeTailY];

    snake.body.push(newSnakeTail)
    gameState.player.points++
    $('#score').text (gameState.player.points)
    buildApple();
  }

  if (newSnakeHead[0] > 29 || newSnakeHead[0] < 0 || newSnakeHead[1] > 19 || newSnakeHead[1] < 0){
    console.log("you lossefgrtfgds")
    clearInterval(game)
  }

  snake.body.unshift(newSnakeHead);
  snake.body.pop();

  
  snake.body.forEach(function (coordinates) {
    const coordinateX = coordinates[0];
    const coordinateY = coordinates[1];

    const segmentElement = $(
      `[data-x="${coordinateX}"][data-y="${coordinateY}"]`
    );

    if (segmentElement.hasClass("snake")) {
      console.log("you ndsakljbfdlkusabdlfikuasb")
      clearInterval(game);
    }
    segmentElement.addClass("snake");
  });



  

  


}


function onBoardClick() {
  
  renderState(); // show the user the new state
}

$(".board").on("click", onBoardClick); // etc
//////////TICK FUNCTION///////////////
// refresh the screen in an interval
function tick() {
  // this is an incremental change that happens to the state every time you update...
  
  buildSnake();
}
///// SET INTERVAL /////
game = setInterval(tick, 1000 / 10); // as close to 30 frames per second as possible


function startGame() {
  setInterval()
}






$(window).on("keydown", function (event) {
  // left //
  if (event.keyCode === 37 && snake.nextDirection[1] !== 1) {
    snake.nextDirection = [0, -1];
  }
  // up //
  if (event.keyCode === 38 && snake.nextDirection[0] !== 1) {
    snake.nextDirection = [-1, 0];
  }
  // right //
  if (event.keyCode === 39 && snake.nextDirection[1] !== -1) {
    snake.nextDirection = [0, 1];
  }
  // down //
  if (event.keyCode === 40 && snake.nextDirection[0] !== -1) {
    snake.nextDirection = [1, 0];
  }
});


/////////// BUILD APPLE ////////////
function buildApple() {
  $('.segment').removeClass("apple")



  const location = [Math.floor(Math.random() * 30), Math.floor(Math.random() * 20)]
  apple.location = location;
  
  const appleX = apple.location[0];
  const appleY = apple.location[1];
  const appleElement = $(`[data-x="${appleX}"][data-y="${appleY}"]`);
  appleElement.addClass('apple');

  if (snake.body.indexOf(apple.location) > -1) {
    buildApple();
  }
  else {
    appleElement.addClass('apple')
  }

}
buildInitialState();
