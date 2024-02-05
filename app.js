/**  
 * Q1 
 * 
 * this works with a full number
 * 
function showRating (rating) {
    let ratingS = ""
    for (let i = 0; i < rating; ++i ) {

        ratingS = ratingS + "*"
        if (i !== rating - 1)
        {
            ratingS = ratingS + " "
        }
    }
    return ratingS
}
console.log(showRating(4))
 * 
 * but what about 4.5 ? It would run more than 4 times so we need to use math.floor
 * then we need to make sure that if its an integer the full stop will not be added only if there is a decimal number
 * 

function showRating (rating) {
    let ratingS = ""
    for (let i = 0; i < Math.floor(rating); ++i ) {

        ratingS += "*"
        if (i !== Math.floor(rating) - 1)
        {
            ratingS += " "
        }
     
    }
        if (!Number.isInteger(rating)) {
            ratingS +=  " .";
        }
    return ratingS;
}
console.log(showRating(4.5))
 * 
 * 
*/

/**   
 * Q2 Sort by the lowest to highest price
 * In order to order numbers we use the es6 method number.sort(a, b => a - b)

function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => a - b)
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]))

// high to low would be
function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => b - a)
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]))
 * 
function sortHighToLow(numbers) {

    return numbers.sort((a, b) => b.price - a.price);
}

console.log(sortHighToLow([{id:1, price: 50 }, {id:2, price: 0 }, {id:3, price: 500 }]));
 * 
 * 
*/

/**   
 * We skip Q4 since its basically to make a research what promises are and since I already
 * made my notes and tasks to it, I skip it.
 * 
*/

/**  
 * Q5 Find all the posts by a single user
function postsByUser(userId) {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then (res => {
        console.log(res)
        console.log(userId)
    })
}
postsByUser(4);
 * 
 * 
 * 
 * 
 * 
async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result =await promise.json()
    const posts = result.filter(element => element.userId === userId) 
    console.log(posts)
}
postsByUser(4);
 * 
 * 
 * Q6 Find the first 6 incomplete objects
async function firstSixIncomplete(status) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
    const result = await promise.json()
    const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6)
    console.log(incompleteTasks)
}
firstSixIncomplete(6)
 * 
 * 
*/
