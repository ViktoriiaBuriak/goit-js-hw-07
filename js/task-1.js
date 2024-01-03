const categoriesCount = document.querySelectorAll('#categories .item').length;
console.log('Number of categories:', categoriesCount);

const categories = document.querySelectorAll('#categories .item');
categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}\nElements: ${itemsCount}`);
});
