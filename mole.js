var mole = {
  position : {
    x : 1,
    y : 1
  },
  direction : {
    x : null,
    y : null
  },
  beenThere : [],


  newDirection () {
    if(Math.random() > 0.5){
        this.direction.x = Math.random() > 0.5 ? 2 : -2;
      }
      else {
        this.direction.y = Math.random() > 0.5 ? 2 : -2;
      }
  },

  isCorrect () {
    let futurePosition = {
       x : position.x + direction.x,
       y : position.y + direction.y
    };
    const inArray = this.beenThere.some((element) => {
      return element.x === futurePosition.x && element.y === futurePosition.y;
    });

    if (futurePosition.x > n || this.futurePosition.x < 0) {
      this.newDirection();
    } else if (this.futurePosition.y > n || this.futurePosition.y < 0) {
      this.newDirection();
    } else if (!(inArray)) {
        return TRUE;
    }

  }
  //move aktualizowac status i usuwac jedynki
  Move (matrix) {
    
  }

  }
}
