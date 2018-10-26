module.exports = n => {
  return n * n;
}

 CreateBoard = (n) => {

    Maze = (new Array(2 * n + 1)).fill(new Array(2 * n + 1).fill(1));

    Maze = Maze.map((el, index) => {
      var Nmaze = new Array();
      if(index % 2 === 0) {
        Nmaze = el.map((e, i) => {
          if(i % 2 === 0) {
            return 0;
          }
          else {
            return e;
          }
        })
      }

      else {
        Nmaze = el.map((e, i) => {
          if(i % 2 != 0) {
            return 0;
          }
          else {
            return e;
          }
        })
      }
      return Nmaze;
    })

    console.log(Maze);
}

CreateBoard(5)
