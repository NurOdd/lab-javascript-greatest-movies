// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map((dire)=> dire.director);
    return allDirectors;
  
}
//bonus1 quitar los repes

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenSpil = moviesArray.filter((movies)=> movies.director === 'Steven Spielberg');
    let DramaSpil = stevenSpil.filter((movies) => movies.genre.includes('Drama'));
 //console.log(DramaSpil)
return DramaSpil.length;
}
     


// Iteration 3: All scores average - Get the average of all scores with 2 decimals 
// validar les dades que passa l'array 

function scoresAverage(moviesArray) {
  //  if (moviesArray.length==0)return 0; } 
  //  console.log(scoresAverage);  // provaré de fer-ho amb lo del !movie, que sembla q funciona
  
    if (!moviesArray.length) return 0; 
 const puntuacions = moviesArray.map((data)=> {
    if (data.score) return data.score; 
    else return 0;})
 console.log (puntuacions, 'hola'); 

 let puntuacionTotal =puntuacions.reduce((sumaDePuntuacions, puntuacionTalCual)=>
 (sumaDePuntuacions+puntuacionTalCual), 0);
 console.log (puntuacionTotal ,'ok' )
let average = puntuacionTotal/moviesArray.length
console.log (average.toFixed(2), 'tt')
return parseFloat(average.toFixed(2))

}


// let totalScore = moviesArray.filter((puntuacion)=> puntuacion.score);
// console.log(totalScore);

// let puntuacion = moviesArray.filter((punt)=>punt.score); // em sona q en lloc de punt Adri feia servir data???? 
// //console.log(puntuacion) // me aparecen todas las peliculas pq todas tienen un score... 


//  if (!puntuacion) return 0; //que crec q es lo mateix que abans

// let puntuacionTotal= puntuacion.reduce((sumaDePuntuacion, puntuacionTalCual)=> {
   
//     console.log(sumaDePuntuacion);
// return puntuacionTalCual + sumaDePuntuacion;

// scoresAverage = (puntuacionTotal / moviesArray.length);

// return scoresAverage.toFixed(2)
// }


// let ((sum, film) => {
//     if (!film.score) return sum;
//     console.log (sum,film)
//     return sum+film; 
//     //return sum+film.score;
// console.log (totalscore)
// return totalscore.toFixed(2);

// return final = puntuaciontotal/totalfilm
// })


//se que no està bé he de revisarlo em falta sumar propiament i mirar de colocar bé els decimals (toFixed)


/*
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}*/

