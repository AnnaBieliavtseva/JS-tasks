//   const indexValue = array.indexOf(value);
//   return indexValue !== -1 ? array.slice(0, (indexValue + 1)) : [];


// function formatDate(userDate) {
//     const arr = [...userDate]
//     console.log(arr);
//     const year = arr.slice(-4).join('');
//     const month = arr.slice(3, 5).join('').padStart(2,0)
//     const date = arr.slice(0,2).join('').padStart(2,0)
//     console.log(date);
//     return `${year}${month}${date}`
    
    
    
    
// }
// console.log(formatDate("12/31/2014"));


function calculateFinalSpeed(initialSpeed, inclinations) {
    const result= inclinations.reduce((acc, currentValue) => {
        const res = acc * initialSpeed;
        console.log(res);
        
        return res
    })
    console.log(result);
    return result
    
  
}

// console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0])); 75



function calculateTotalPrice(order) {
  let sum = 0;
  for (let i = 0; i < order.length; i++) {
    sum += order[i];
    
  }
  return sum;
}


// console.log(calculateTotalPrice([164, 48, 291]));


// function getEvenNumbers(start, end) {
//   let arr = []
//   for (let i = start; i <= end; i++) {
//  i % 2 === 0 ? arr.push(i) : arr
//   }
//   return arr
// }
function getEvenNumbers(start, end) {
 
  let arr = []
  for (let i = start; i <= end; i++) {
     !(i % 2) ? arr.push(i) : arr.push
  }
  return arr
}

console.log(getEvenNumbers(3, 11));

