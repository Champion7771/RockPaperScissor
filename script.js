let score = JSON.parse(localStorage.getItem('score')) || { 
    wins: 0,
    losses: 0,
    ties: 0
} ;

updateScoreElement();

let isAutoplaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoplaying) {
    intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
         }, 1000);
         isAutoplaying = true;
        } else {
        clearInterval(intervalId);
        isAutoplaying = false;
    }
} 

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('Rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('Paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('Scissors');
});

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('Rock');
    } else if (event.key === 'p') {
        playGame('Paper');
    } else if (event.key === 's') {
        playGame('Scissors');
    }
    
});
    
function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

        if (playerMove === 'Scissors'){
            
            if (computerMove === 'Rock') {
                result = 'You Lose!';
            } 
            else if (computerMove === 'Paper') {
                result = 'You Win!';
                }
                
            else if (computerMove === 'Scissors') {
                    result = 'Tie';
                }
        } else if (playerMove === 'Paper') {
               

                if (computerMove === 'Rock') {
                       result = 'You Win!';
                    } 
                 else if (computerMove === 'Paper') {
                        result = 'Tie';
                    }
                        
                  else if (computerMove === 'Scissors') {
                            result = 'You Lose!';
                  }
        } else if (playerMove === 'Rock') {

                if (computerMove === 'Rock') {
                    result = 'Tie';
                } 
                else if (computerMove === 'Paper') {
                    result = 'You Lose!';
                    }
                    
                else if (computerMove === 'Scissors') {
                        result = 'You Win!';
                    }
        }

            if (result === 'You Win!') {
                score.wins += 1;
            } else if (result === 'You Lose') {
                score.losses += 1;
            } else if (result === 'Tie') {
                score.ties += 1;
            }

    localStorage.setItem('score', JSON.stringify(score));
    
    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = result; 

    document.querySelector('.js-move')
        .innerHTML = 
        `You
        <img src="png/${playerMove}.png" class="move-icon" >
        <img src="png/${computerMove}.png" class="move-icon">
        Computer`;      
}

function updateScoreElement() {
    document.querySelector('.js-score')
       .innerHTML = `Wins: ${score.wins} Losess: ${score.losses} Ties: ${score.ties}`;
    }

function pickComputerMove() {
    const randomeNumber = Math.random();
    
    let computerMove = '';

    if (randomeNumber >= 0 && randomeNumber <= 1/3) {
    computerMove = 'Rock'
    } else if (randomeNumber >= 1/3 && randomeNumber <= 2/3) {
        computerMove = 'Paper'}
    else if (randomeNumber >= 2/3 && randomeNumber <= 1) {
        computerMove = 'Scissors'
        }
    
        return computerMove;
    }     





    /**ROUGH WORK*/

    // const hour = 11;
    // const name = 'Akash Raina'

    // if (hour >=6 && hour <= 12 ) {
    //     console.log(`Good Morning! ${name}`);
    // } else if(hour >= 13 && hour <= 17) {
    //     console.log(`Good Afternoon! ${name}`);
    // }else {
    //     console.log(`Good Night! ${name}`);
    // }


    // const age = 6;
    // const isHoliday = true;

    // if (age <= 6 && isHoliday === false || age >= 65 && isHoliday === false ) {
    //     console.log('Discount !');
    //     console.log('Because of no holiday!');
        
        
    // } else {
    //     console.log('No Discount bcz of age! Sorry:( ');
    //     console.log('Because of holiday!');
    // }


    // const number = Math.random()
    // let result = '';
    // let guess = 'Heads';

    // if (number < 2/3) {
    //     result = 'Heads';
        
    // }else  {
    //     result = 'Tails';
    // }

    // console.log(guess);
    

    // if (result === guess) {
    //     console.log('You Win!');
        
    // } else {
    //     console.log('You Lose!');
    // }

    // result === guess ? console.log('you win'): console.log('you lose');
    
    
    
    // let project1 = {
    //     name: 'Akash Raina',
    //     rollno: 22303016,
    //     place: 'ptk'
    // };
   
    // localStorage.setItem('project1',JSON.stringify(project1));
    // console.log(localStorage.getItem('project1')) ;
    

//    const product1 = {
//     message: 'Hello AKASH',
//    };

//    const product2 = product1;

//     console.log(product2);
//     console.log(product1);

//    const object3 = {
//     message: 'Hello AKASH',
//    };
//    const object4 = {
//     message: 'Hello AKASH',
//     price: 7771,
//    };

//    const {message, price} = object4;
//    console.log(message);
//    console.log(price);
   
//    const object5 = {
//     message,
//     // method: function function1() {
//     //     console.log('Function worked!');    
//     // }
//     method(){
//         console.log('Hi');
        
//     }
//    };
//    object5.method();


// const product1 = {
//     name: 'Basketball',
//     price: 20,
// };
// const product2 = {
//     name: 'Basketball',
//     price: 25,
// };

// function comparePrice(product1,product2){
// return product1.price<product2.price ? product1 : product2;
// }

// console.log(comparePrice(product1,product2););

// function greet(name) {
//     console.log(`Hello! ${name}`);
// }
// greet();

// if (!name) {
//     console.log(`${name} undefined`);
// }

// function convertToCelsius(fahrenheit) {
//     return (fahrenheit-32)*5/9;
    
// }

// function convertTofahrenheit(celsius) {
//     return (celsius*9/5)+32;
    
// }   

// function convertTemperature(degree, unit) {
//     if (unit === 'C' || unit === 'c') {
//         console.log(`${convertToFahrenheit(degree)}F`);
//     } else if (unit === 'F' || unit === 'f') {
//         console.log(`${convertToCelsius(degree)}C`);
//     } else {
//         console.log("Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.");
//     }
// }
// convertTemperature(25,'C');
// convertTemperature(86,'F');

// function convertToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }

// function convertToFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }

// function convertTemperature(degree, unit) {
//     if (unit === 'C' || unit === 'c') {
//         console.log(`${convertToFahrenheit(degree)}F`);
//     } else if (unit === 'F' || unit === 'f') {
//         console.log(`${convertToCelsius(degree)}C`);
//     } else {
//         console.log("Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.");
//     }
// }

// convertTemperature(25, 'C');  // 77F
// convertTemperature(86, 'F');  // 30C

// const miles = 1.6
// const kilometer = 0.6
// const milesTofeet = 5280
// const kmTofeet = 3281

// function convertLength(length, from, to) {
//     if (from === 'miles'&& to === 'km') {
//         console.log(`${length*miles}km`);
//       } else if (from === 'km' && to === 'miles') {
//         console.log(`${length*kilometer}miles`);
//       } else if (from === to ) {
//         console.log(`${length} ${to}`);
//       } else if (from === 'miles' && to === 'ft' ) {
//         console.log(`${length*milesTofeet}ft`);
//       } else if (from === 'km' && to === 'ft' ) {
//         console.log(`${length*kmTofeet}ft`);
//       } else {
//         console.log(`Invalid unit: ${to}`);
//       }
// };

// convertLength(5, 'miles','km');
// convertLength(5, 'miles','ft');
// convertLength(5, 'km','ft');
// convertLength(5, 'k','fa');

// let product1 = {
//     name: 'Basketball',
//     price: 20
// };
// let product2 = {
//     name: 'Basketball',
//     price: 201
// };



// console.log(product1);

// product1.price = 5;
// console.log(product1);

// product1['Delivery-time'] = '3 Days'
// console.log(product1);

// function compareProducts() {
//     let cheaperPrice = product2.price < product1.price ? console.log('cheaper') : console.log('Expensive');
//     ;
    
// };

// compareProducts();

// function isSameProduct(product1, product2) {
//     let check = product1 = product2 ? console.log('true') : console.log('false');
// };

// isSameProduct();

// const string1 = 'Good Morning!'
// console.log(string1);
// console.log(string1.toLowerCase());

// const text = 'Text'
// console.log(text.repeat(2));

// let arr = [1,2,3]

// function sum(v1,v2,v3) {
//     return v1+v2+v3
// }

// console.log(sum(...arr));