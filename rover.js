var rover = {
  position: [0, 0],
  direction: "N"
};

function goForward(forwardReverse) {

  switch (forwardReverse) {
    case "f":
      switch (rover.direction) {

        case "N":
          if (rover.position[1] === 5) {
           rover.position[1] = -5;
          } else {
            rover.position[1] ++;
          }
          break;

        case "E":
          if (rover.position[0] === 5) {
            rover.position[0] = -5;
          } else {
            rover.position[0] ++;
          }
          break;

        case "S":
          if (rover.position[1] === -5) {
            rover.position[1] = 5;
          } else {
            rover.position[1] -= 1;
          }
          break;

        case "W":
          if (rover.position[0] === -5) {
            rover.position[0] = 5;
          } else {
            rover.position[0] -= 1;
          }
          break;

        default:
          console.log("Error: Not a valid entry.");
      }
      break;  // this is the end of case "f"

    case "b":

      switch (rover.direction) {

        case "S":
          if (rover.position[1] === 5) {
           rover.position[1] = -5;
          } else {
            rover.position[1] ++;
          }
          break;

        case "W":
          if (rover.position[0] === 5) {
            rover.position[0] = -5;
          } else {
            rover.position[0] ++;
          }
          break;

        case "N":
          if (rover.position[1] === -5) {
            rover.position[1] = 5;
          } else {
            rover.position[1] -= 1;
          }
          break;

        case "E":
          if (rover.position[0] === -5) {
            rover.position[0] = 5;
          } else {
            rover.position[0] -= 1;
          }
          break;

        default:
          console.log("Error: Not a valid entry.");
      }
      break;  // end of case "b"

    default:
      console.log("Error: Not a valid entry.");
  }
}


function turnRover(face) {

  switch (face) {
    case "r":
      switch (rover.direction) {
        case "N":
          rover.direction = "E";
          break;
        case "E":
          rover.direction = "S";
          break;
        case "S":
          rover.direction = "W";
          break;
        case "W":
          rover.direction = "N";
          break;
        default:
          console.log("Error: Rover has no direction. (r)");
      }
      break;

    case "l":
      switch (rover.direction) {
        case "N":
          rover.direction = "W";
          break;
        case "E":
          rover.direction = "N";
          break;
        case "S":
          rover.direction = "E";
          break;
        case "W":
          rover.direction = "S";
          break;
        default:
          console.log("Error: Rover has no direction. (l)");
      }
      break;

    default:
      console.log("Error: Not a valid entry.");
  }
}

function roverMover(array) {
  array.forEach(function(element) {
    if (element === "f" || element === "b") {
      goForward(element);
    } else if (element === "l" || element === "r") {
      turnRover(element);
    } else {
      console.log("Error: Not a valid entry.");
    }
  });
}

var dirReceiver = prompt("Give me a string with directions. 'l' or 'r' to rotate the rover and 'f' or 'b' to move the rover.");

var dirRecArray = dirReceiver.split("");

roverMover(dirRecArray);

// TESTS. Must be run individually

// "lffflbb"
//console.log(rover.position); // Coords should be (-3, 2)

// "lfrffffff"
//console.log(rover.position); // Coords should be (-1,-5)

// "rbbbbbbbbbbb"
//console.log(rover.position); // Coords should be (0,0)
