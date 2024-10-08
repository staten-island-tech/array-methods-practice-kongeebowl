/* ASSIGNMENT 1 */

/* const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
]; */

//1
//students.forEach((student) => console.log(student.name, student.grade));

//2
//2a
/* const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents); */

//2b
/* const youngStudents = students.filter((student) => student.age <= 21); */

//3
//3a
/* const topStudents = students.filter((student) => student.grade > 80);
topStudents.forEach((topStudents) => console.log(topStudents.name)); */

//3b
/* const youngStudents = students.filter((student) => student.age <= 21);
youngStudents.forEach((youngStudents) => console.log(youngStudents.name)); */

/* ASSIGNMENT 2 */
const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

//Part 1
//1.
//products.forEach((product) => console.log(product.name, product.price));

//2.
//products.forEach((product) => console.log(product.name, product.price * 1.1));

//3
/* const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log("Unique Categories:", categories); */

//Part 2
//1.
/* const electronics = products.filter(
  (product) => product.category === "Electronics"
);
console.log("Electronics:", electronics); */

//2.
/* const expensiveProducts = products.filter((product) => product.price > 300);
console.log("Expensive Products:", expensiveProducts); */

//3.
/* const highlyRatedProducts = products.filter((product) => product.rating >= 4.5);
console.log("Highly Rated Products:", highlyRatedProducts); */

//Part 3
//1.
/* const highlyRatedProducts = products.filter((product) => product.rating >= 4.5);
highlyRatedProducts.forEach((highlyRatedProducts) =>
  console.log("Highly Rated Products:", highlyRatedProducts.name)
); */

//2.
/* const cheapElectronics = products.filter(
  (product) => product.category === "Electronics" && product.price < 1000
);
cheapElectronics.forEach((cheapElectronics) =>
  console.log(
    "Cheap Electronics:",
    cheapElectronics.name,
    cheapElectronics.price,
    cheapElectronics.rating
  )
); */
