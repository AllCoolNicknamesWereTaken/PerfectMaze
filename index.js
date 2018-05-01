module.exports = function(n) {
  return n * n;
}

var Maze =[7];
function CreateBoard(n) {

    Maze = (new Array(n)).fill((new Array(n)).fill(0));
    console.log(Maze);

}
CreateBoard(7)
