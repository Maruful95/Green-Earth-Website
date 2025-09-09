// category loading functions
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategory(json.categories));
};
// function for all tree loading
const loadAllTreeCard = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayTreeCard(json.plants));
};

// function for active class
const removeActive = () => {
  const categoryButton = document.querySelectorAll(".category-btn");
  categoryButton.forEach((btn) => btn.classList.remove("active"));
};

// function for modal tree details
const loadTreeDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayDetails(json.plants));
};
// display details
const displayDetails = (detail) => {
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
    
    <h3 class="font-bold text-sm mt-1">${detail.name}</h3>
    <img class="mt-2 max-h-70 w-full object-cover rounded-md" src="${detail.image}" alt="">
    <p class="mt-2 text-sm"><span class="font-semibold">Category:</span> ${detail.category}</p>
    <p class="mt-2 font-semibold text-sm"><span class="font-semibold">Price:</span> ৳${detail.price}</p>
    <p class="mt-2 font-normal text-xs"><span class="font-semibold">Description:</span> ${detail.description}</p>
    
    `;

  document.getElementById("my_modal_5").showModal();
};

// spinner function
const manageSpinner = (status) => {
    if (status == true) {
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("plants-container").classList.add("hidden")
    }
    else {
        document.getElementById("plants-container").classList.remove("hidden")
        document.getElementById("spinner").classList.add("hidden")
    }
}

// tree card loading function
const loadTreeCard = (id) => {
    manageSpinner(true)
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

// add to cart function

const addToCart = (card) => {
  const cartContainer = document.getElementById("cart-container");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="bg-[#F0FDF4] mb-2 flex justify-between items-center px-3 py-2 rounded-md">
        <div>
            <h1 class="text-sm font-semibold">${card.name}</h1>
            <h2 class="text-base font-normal text-[#1F293770]">${card.price} x <span>1</span></h2>
        </div>
        <button class="text-[#1F293780] btn btn-xs remove-btn">X</button>
    </div>
    `;
  cartContainer.append(div);

  let totalPrice = document.getElementById("total-price");
    totalPrice.innerText = Number(totalPrice.innerText) + card.price;
    
    div.querySelector(".remove-btn").addEventListener("click",() => {
        cartContainer.removeChild(div)
        
        totalPrice.innerText = Number(totalPrice.innerText) - card.price
    })

            alert(card.name + " is added to cart." )

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
                <h3 onclick="loadTreeDetails(${card.id})" class="font-semibold text-sm mt-3">${card.name}</h3>
                <p class="font-normal text-xs mt-2">${card.description}</p>
                <div class="flex justify-between items-center mt-2">
                    <p class="px-2 py-1 font-medium text-sm text-[#15803D] rounded-full bg-[#DCFCE7]">${card.category}</p>
                    <p class="font-semibold text-sm">৳${card.price}</p>
                </div>
                <button class="add-to-cart-btn w-full font-medium text-base text-white py-2 mt-3 bg-[#15803D] rounded-full hover:bg-green-600">Add to Cart</button>
            </div>
        </div>
        `;

    div.querySelector(".add-to-cart-btn").addEventListener("click", () => {
        addToCart(card);
        
    });

    plantContainer.append(div);
    }
        manageSpinner(false)

};

// category display function
const displayCategory = (category) => {
  const categories = document.getElementById("categories");
  categories.innerHTML = "";

  const allTreeBtn = document.createElement("div");
  allTreeBtn.innerHTML = `
        <button id="all-tree" onclick="loadAllTreeCard(); removeActive(); document.getElementById('all-tree').classList.add('active') " class="category-btn hover:bg-green-700 hover:text-white px-3 text-base font-normal rounded-sm p-2 text-left w-full">All Trees</button>
        `;
  categories.append(allTreeBtn);
  removeActive();
  document.getElementById("all-tree").classList.add("active");

  for (let cat of category) {
    const div = document.createElement("div");
    div.innerHTML = `
        <button id="category-btn-${cat.id}" onclick="loadTreeCard(${cat.id})" class="category-btn hover:bg-green-700 hover:text-white px-3 text-base font-normal rounded-sm p-2 text-left w-full">${cat.category_name}</button>
        `;
    categories.append(div);
  }
};
loadCategory();
loadAllTreeCard();
