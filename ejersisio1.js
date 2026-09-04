let olasitorneo = [ 
    [10, 11, 30], [12, 40, 13], [67, 30, 40], [23, 45, 15 ],
    [15, 32, 56], [87, 34, 45]
   ];
   
   for (let i = 0; i < olasitorneo.length; i++) {
       let totaljugadorsi = 0;
       for (let j = 0; j < olasitorneo[i].length; j++) {
           totaljugadorsi += olasitorneo[i][j];
          
       }                
   console.log(`jugador ${ i + 1 } - total: $ {totaljugadorsi} pts`);
   
   }
   
   
   
   