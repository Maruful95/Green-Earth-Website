// category loading functions
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategory(json.categories));
};

// function for active class
const removeActive = () => {
  const categoryButton = document.querySelectorAll(".category-btn");
  categoryButton.forEach((btn) => btn.classList.remove("active"));
};

// tree card loading function
const loadTreeCard = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      removeActive();
      const categoryBtn = document.getElementById(`category-btn-${id}`);
      categoryBtn.classList.add("active");
      displayTreeCard(json.plants);
    });
};

// display tree card function
const displayTreeCard = (cards) => {
  const plantContainer = document.getElementById("plants-container");
  plantContainer.innerHTML = "";

  for (let card of cards) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="rounded-md bg-white shadow-sm">
            <img class="h-48 w-full object-cover rounded-t-md" src="${card.image}" alt="">
            <div class="px-4 pb-4 flex flex-col justify-between h-60">
                <h3 class="font-semibold text-sm mt-3">${card.name}</h3>
                <p class="font-normal text-xs mt-2">${card.description}</p>
                <div class="flex justify-between items-center mt-2">
                    <p class="px-2 py-1 font-medium text-sm text-[#15803D] rounded-full bg-[#DCFCE7]">${card.category}</p>
                    <p class="font-semibold text-sm">৳${card.price}</p>
                </div>
                <button class="w-full font-medium text-base text-white py-2 mt-3 bg-[#15803D] rounded-full hover:bg-green-600">Add to Cart</button>
            </div>
        </div>
        `;
    plantContainer.append(div);
  }
};

// category display function
const displayCategory = (category) => {
  const categories = document.getElementById("categories");
  categories.innerHTML = "";

  for (let cat of category) {
    const div = document.createElement("div");
    div.innerHTML = `
        <button id="category-btn-${cat.id}" onclick="loadTreeCard(${cat.id})" class="category-btn hover:bg-green-700 hover:text-white px-3 text-base font-normal rounded-sm p-2 text-left w-full">${cat.category_name}</button>
        `;
    categories.append(div);
  }
};
loadCategory();
