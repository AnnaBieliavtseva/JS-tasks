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

console.log(getEvenNumbers(3, 11));

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

console.log(lastTag);


function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (const product of products) {
    if (product.name === productName) {
      return product.price
    }
      
    
    
  }
  return null;
}

console.log(getProductPrice("GGGG"));


function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  const arr = [];
  
  for (const product of products) {
    const keys = Object.keys(product);
    for (const key of keys) {
       
      if (propName === key) {
        arr.push(product[propName]);
      }
    }
  }
  return arr;
}


console.log(getAllPropValues('pr'));

