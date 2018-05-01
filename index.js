module.exports = n => {
  return n * n;
}

 CreateBoard = (n) => {

    Maze = (new Array(2 * n +1)).fill(new Array(n).fill(1));
    Maze = Maze.map(function(el, index) {
      if(index % 2 === 1) {
        return new Array(n + 1).fill(1)
      }
      else return el
    })
    console.log(Maze);

}
CreateBoard(4)
