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



function getEvenNumbers(start, end) {
 
  let arr = []
  for (let i = start; i <= end; i++) {
     !(i % 2) ? arr.push(i) : arr.push
  }
  return arr
}

// console.log(getEvenNumbers(3, 11));

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length-1];

// console.log(lastTag);


// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price
//     }
      
    
    
//   }
//   return null;
// }

// console.log(getProductPrice("GGGG"));


// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const arr = [];
  
//   for (const product of products) {
//     const keys = Object.keys(product);
//     for (const key of keys) {
       
//       if (propName === key) {
//         arr.push(product[propName]);
//       }
//     }
//   }
//   return arr;
// }


// console.log(getAllPropValues('pr'));


// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   let result = 0;
//   for (const product of products) {
    
    
   
//     if (product.name === productName) {
//     return result = product.price * product.quantity;
//       }
    


//   }
//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice('Gri'));

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions"
//   },
//   addPotion(potionName) {
//   return `Adding ${potionName}`
//   }
// }

function changeEven(numbers, value) {
  let arr = [];
  let num = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      num = numbers[i] + value;
      arr.push(num);
    } else {
      arr.push(numbers[i]);
    }
  }
  return arr;
}

console.log(changeEven([2, 8, 3, 7, 4, 6], 10));


const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter(book => book.rating >= MIN_BOOK_RATING)
  .map(book => book.author)
  .toSorted((a, b) => a.localeCompare(b));
  
  console.log(names);
  

  // Counter - Closures

const makeCounter = (initialCount) => {
  let currentCount = initialCount;
  
  const getCurrentCount = () => {
    return currentCount;
  }

  const increaseCount = () => {
    currentCount += 1;
    return currentCount
  }

  const decreaseCount = () => {
    currentCount -= 1;
    return currentCount
  }

  return {getCurrentCount, increaseCount, decreaseCount}
}
  
const counter = makeCounter(2)
console.log(counter.increaseCount());
console.log(counter.getCurrentCount());
console.log(counter.decreaseCount());
console.log(counter.getCurrentCount());


// Calculator - Classes

class Calculator {
  constructor(initialValue) {
    this.initialValue = initialValue;

  }

  get currentValue() {
    return this.initialValue;
  }

  set currentValue(newValue) {
     this.initialValue = newValue
  }

  add(addingValue) {
    return this.initialValue += addingValue;
  }
  subtract(subtractionValue) {
    return this.initialValue -= subtractionValue
  }
  multiply(multiplyingValue) {
    return this.initialValue *= multiplyingValue
  }
  divide(dividingValue) {
    return this.initialValue /= dividingValue;
  }
} 

const myCalculator = new Calculator(2)
console.log(myCalculator.add(2));
console.log(myCalculator.subtract(3));
console.log(myCalculator.currentValue = 5);
console.log(myCalculator.multiply(5));
console.log(myCalculator.currentValue);








