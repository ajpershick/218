const socket = io();
socket.on('message', function(data) {
  console.log(data);
});

socket.emit('new player');
$(window).click(function() {
  let tiles = [
    app.tile000, app.tile001, app.tile002,
    app.tile010, app.tile011, app.tile012,
    app.tile020, app.tile021, app.tile022,
    app.tile100, app.tile101, app.tile102,
    app.tile110, app.tile111, app.tile112,
    app.tile120, app.tile121, app.tile122,
    app.tile200, app.tile201, app.tile202,
    app.tile210, app.tile211, app.tile212,
    app.tile220, app.tile221, app.tile222,
  ];
  socket.emit('move', tiles );

  checkWin();
});

socket.on('move', function(data){
  app.tile000 = data[0];
  app.tile001 = data[1];
  app.tile002 = data[2];
  app.tile010 = data[3];
  app.tile011 = data[4];
  app.tile012 = data[5];
  app.tile020 = data[6];
  app.tile021 = data[7];
  app.tile022 = data[8];
  app.tile100 = data[9];
  app.tile101 = data[10];
  app.tile102 = data[11];
  app.tile110 = data[12];
  app.tile111 = data[13];
  app.tile112 = data[14];
  app.tile120 = data[15];
  app.tile121 = data[16];
  app.tile122 = data[17];
  app.tile200 = data[18];
  app.tile201 = data[19];
  app.tile202 = data[20];
  app.tile210 = data[21];
  app.tile211 = data[22];
  app.tile212 = data[23];
  app.tile220 = data[24];
  app.tile221 = data[25];
  app.tile222 = data[26];
});

function checkWin(){

  /////////////* Top Box *//////////////

  // top row
  if ((app.tile000 !== '') && (app.tile001 !== '') && (app.tile002 !== '')){
    if ((app.tile000 === app.tile001) && (app.tile001 === app.tile002)){
      alert('Game over. We have a winner!')
    }
  }

  // middle row
  if ((app.tile010 !== '') && (app.tile011 !== '') && (app.tile012 !== '')){
    if ((app.tile010 === app.tile011) && (app.tile011 === app.tile012)){
      alert('Game over. We have a winner!')
    }
  }

  // bottom row
  if ((app.tile020 !== '') && (app.tile021 !== '') && (app.tile022 !== '')){
    if ((app.tile020 === app.tile021) && (app.tile021 === app.tile022)){
      alert('Game over. We have a winner!')
    }
  }

  // left column
  if ((app.tile000 !== '') && (app.tile010 !== '') && (app.tile020 !== '')){
    if ((app.tile000 === app.tile010) && (app.tile010 === app.tile020)){
      alert('Game over. We have a winner!')
    }
  }

  // middle column
  if ((app.tile001 !== '') && (app.tile011 !== '') && (app.tile021 !== '')){
    if ((app.tile001 === app.tile011) && (app.tile011 === app.tile021)){
      alert('Game over. We have a winner!')
    }
  }

  // right column
  if ((app.tile002 !== '') && (app.tile012 !== '') && (app.tile022 !== '')){
    if ((app.tile002 === app.tile012) && (app.tile012 === app.tile022)){
      alert('Game over. We have a winner!')
    }
  }

  // first diagonal
  if ((app.tile000 !== '') && (app.tile011 !== '') && (app.tile022 !== '')){
    if ((app.tile000 === app.tile011) && (app.tile011 === app.tile022)){
      alert('Game over. We have a winner!')
    }
  }

  // second diagonal
  if ((app.tile002 !== '') && (app.tile011 !== '') && (app.tile020 !== '')){
    if ((app.tile002 === app.tile011) && (app.tile011 === app.tile020)){
      alert('Game over. We have a winner!')
    }
  }

  /////////* Second Box *//////////////////

  // top row
  if ((app.tile100 !== '') && (app.tile101 !== '') && (app.tile102 !== '')){
    if ((app.tile100 === app.tile101) && (app.tile101 === app.tile102)){
      alert('Game over. We have a winner!')
    }
  }

  // middle row
  if ((app.tile110 !== '') && (app.tile111 !== '') && (app.tile112 !== '')){
    if ((app.tile110 === app.tile111) && (app.tile111 === app.tile112)){
      alert('Game over. We have a winner!')
    }
  }

  // bottom row
  if ((app.tile120 !== '') && (app.tile121 !== '') && (app.tile122 !== '')){
    if ((app.tile120 === app.tile121) && (app.tile121 === app.tile122)){
      alert('Game over. We have a winner!')
    }
  }

  // left column
  if ((app.tile100 !== '') && (app.tile110 !== '') && (app.tile120 !== '')){
    if ((app.tile100 === app.tile110) && (app.tile110 === app.tile120)){
      alert('Game over. We have a winner!')
    }
  }

  // middle column
  if ((app.tile101 !== '') && (app.tile111 !== '') && (app.tile121 !== '')){
    if ((app.tile101 === app.tile111) && (app.tile111 === app.tile121)){
      alert('Game over. We have a winner!')
    }
  }

  // right column
  if ((app.tile102 !== '') && (app.tile112 !== '') && (app.tile122 !== '')){
    if ((app.tile102 === app.tile112) && (app.tile112 === app.tile122)){
      alert('Game over. We have a winner!')
    }
  }

  // first diagonal
  if ((app.tile100 !== '') && (app.tile111 !== '') && (app.tile122 !== '')){
    if ((app.tile100 === app.tile111) && (app.tile111 === app.tile122)){
      alert('Game over. We have a winner!')
    }
  }

  // second diagonal
  if ((app.tile102 !== '') && (app.tile111 !== '') && (app.tile120 !== '')){
    if ((app.tile102 === app.tile111) && (app.tile111 === app.tile120)){
      alert('Game over. We have a winner!')
    }
  }

  /////////////////* Third Box *//////////////

  // top row
  if ((app.tile200 !== '') && (app.tile201 !== '') && (app.tile202 !== '')){
    if ((app.tile200 === app.tile201) && (app.tile201 === app.tile202)){
      alert('Game over. We have a winner!')
    }
  }

  // middle row
  if ((app.tile210 !== '') && (app.tile211 !== '') && (app.tile212 !== '')){
    if ((app.tile210 === app.tile211) && (app.tile211 === app.tile212)){
      alert('Game over. We have a winner!')
    }
  }

  // bottom row
  if ((app.tile220 !== '') && (app.tile221 !== '') && (app.tile222 !== '')){
    if ((app.tile220 === app.tile221) && (app.tile221 === app.tile222)){
      alert('Game over. We have a winner!')
    }
  }

  // left column
  if ((app.tile200 !== '') && (app.tile210 !== '') && (app.tile220 !== '')){
    if ((app.tile200 === app.tile210) && (app.tile210 === app.tile220)){
      alert('Game over. We have a winner!')
    }
  }

  // middle column
  if ((app.tile201 !== '') && (app.tile211 !== '') && (app.tile221 !== '')){
    if ((app.tile201 === app.tile211) && (app.tile211 === app.tile221)){
      alert('Game over. We have a winner!')
    }
  }

  // right column
  if ((app.tile202 !== '') && (app.tile212 !== '') && (app.tile222 !== '')){
    if ((app.tile202 === app.tile212) && (app.tile212 === app.tile222)){
      alert('Game over. We have a winner!')
    }
  }

  // first diagonal
  if ((app.tile200 !== '') && (app.tile211 !== '') && (app.tile222 !== '')){
    if ((app.tile200 === app.tile211) && (app.tile211 === app.tile222)){
      alert('Game over. We have a winner!')
    }
  }

  // second diagonal
  if ((app.tile202 !== '') && (app.tile211 !== '') && (app.tile220 !== '')){
    if ((app.tile202 === app.tile211) && (app.tile211 === app.tile220)){
      alert('Game over. We have a winner!')
    }
  }
}





