"use strict";
const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul li");
  console.log(`Caterogy: ${categoryTitle}`);
  console.log(`Category: ${categoryElements.length}`);
});