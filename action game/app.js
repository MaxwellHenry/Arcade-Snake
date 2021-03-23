
let gameState = {
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
  nextDirection: [0, 0],

  head: [body[0]]

};



let apple = {
  location: [Math.floor(Math.random() * 30), Math.floor(Math.random() * 20)]
}


function buildInitialState() {
  renderState();
  buildSnake();
  buildApple();
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

function buildSnake() {
  $(".segment").removeClass("snake");
  const snakeHead = snake.body[0];
  const snakeHeadX = snakeHead[0];
  const snakeHeadY = snakeHead[1];

  const newSnakeHead = [
    snakeHeadX + snake.nextDirection[0],
    snakeHeadY + snake.nextDirection[1],
  ];

  snake.body.unshift(newSnakeHead);
  snake.body.pop();

  snake.body.forEach(function (coordinates) {
    const coordinateX = coordinates[0];
    const coordinateY = coordinates[1];

    const segmentElement = $(
      `[data-x="${coordinateX}"][data-y="${coordinateY}"]`
    );
    segmentElement.addClass("snake");
  });
}

// listeners
function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...

  renderState(); // show the user the new state
}

$(".board").on("click", onBoardClick); // etc

// refresh the screen in an interval
function tick() {
  // this is an incremental change that happens to the state every time you update...

  buildSnake();
}

setInterval(tick, 2000 / 30); // as close to 30 frames per second as possible

$(window).on("keydown", function (event) {
  // here you might read which key was pressed and update the state accordingly
  switch (event.which) {
    case 37:
      //left
      snake.nextDirection = [0, -1];
      break;
    case 38:
      //up
      snake.nextDirection = [-1, 0];
      break;
    case 39:
      //right
      snake.nextDirection = [0, 1];
      break;
    case 40:
      //down
      snake.nextDirection = [1, 0];
      break;
    case 32:
      snake.nextDirection = [0, 0];
      break;
    default:
      break;
  }
});





function buildApple() {
  const location = apple.location;
  const appleX = location[0];
  const appleY = location[1];
  const appleElement = $(`[data-x="${appleX}"][data-y="${appleY}"]`);
  appleElement.addClass('apple');

  if ($(`[data-x="${appleX}"][data-y="${appleY}"]`) !== snake.body) {
    appleElement.addClass('apple')

    
  }
  else {
    buildApple()
  }

}

function eatApple(){
  const location = apple.location;
  const appleX = location[0];
  const appleY = location[1];
  const appleElement = $(`[data-x="${appleX}"][data-y="${appleY}"]`);
  if appleElement === snake.body{
    push
  }
    
  
}






buildInitialState();






// // Initial State
// let gameState = {
    
//     canvas:[

//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',],
//         ['','','','','','','','','','','','','','','','','','','','',]
//     ]
// }

// let snake = {
//     body: [ [5,20], [5, 21], [5, 22], [5, 23] ],

//     // 10,4  10,5   ...
//     // 10,3  10,4   ...

//     nextDirection: [0, -1]
// }



// function buildInitialState() {
//     renderState()
//     buildSnake()

// }

// // Render The State
// function renderState() {
//     // console.log('this is a test log')
//     const canvasElement = $("#canvas");
//     canvasElement.empty()
//     gameState.canvas.forEach(function(row, rowIndex){
//         row.forEach(function(segment, segmentIndex){
//             const segmentElement = $(
//                 `<div class="segment" data-x = "${rowIndex}" data-y = "${segmentIndex} ></div>`);
//             canvasElement.append(segmentElement)

//         })
//     })

// }

// function buildSnake() {
//     $(".segment").removeClass('snake')

//     $("#canvas").empty

//     const snakeHead = snake.body[0]
//     const snakeHeadX = snakeHead[0]
//     const snakeHeadY = snakeHead[1]

    
//     const newSnakeHeadX = snakeHeadX + snake.nextDirection[0]
//     const newSnakeHeadY = snakeHead + snake.nextDirection[1]
//     const newSnakeHead = [snakeHeadX, snakeHeadY]
    
//     snake.body.pop()
//     snake.body.unshift(newSnakeHead)


//     snake.body.forEach(function(coordinates){
//         const coordinateX = coordinates[0]
//         const coordinateY = coordinates[1]

//         // snake.body[coordinateX][coordinateY] = 

//         const segmentElement = $(`[data-x="${coordinateX}"] [data-y="${coordinateY}"]`)
//         segmentElement.css('background-color', 'green')
//     })
// }



// // Listeners
// function onBoardClick() {
//   // update state, maybe with another dozen or so helper functions...

//   renderState() // show the user the new state
// }

// $('.board').on('click', onBoardClick); // etc


// setInterval(tick,500)



// // Refresh the screen at an interval
// function tick() {
//     buildSnake();
    
// }
  
// // setInterval(tick, 1000 / 30) // as close to 30 frames per second as possible
  
// $(window).on('keydown', function (event) {

//     if (event.keyCode === 37) {
//         nextDirection [0,-1]
//     }
//     if (event.keyCode === 38) {
//         nextDirection [0,0]
//     }
//     if (event.keyCode === 39) {
//         nextDirection [0,0]
//     }
//     if (event.keyCode === 40) {
//         nextDirection [0,0]
//     }


// });

// buildInitialState()

