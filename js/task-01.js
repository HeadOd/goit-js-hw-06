const itemCategories = document.querySelectorAll('.item')
const numberOfCategories = itemCategories.length;

console.log(`Number of categories: ${numberOfCategories}`);

itemCategories.forEach(item => {
    const category = item.firstElementChild.textContent;
    const elements = item.querySelectorAll('li').length;

    console.log(`Category: ${category}`);
    console.log(`Elements: ${elements}`);
});

