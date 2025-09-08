// category functions
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategory(json.categories));
};
const displayCategory = (category) => {
    const categories = document.getElementById("categories")
    categories.innerHTML = ""
    
    for (let cat of category) {
        const div = document.createElement("div")
        div.innerHTML = `
        <button class="text-base font-normal rounded-sm p-2 text-left w-full">${cat.category_name}</button>
        `
        categories.append(div)
    }
};
loadCategory();
