const dishes = [
  { id: "d1", name: "Classic Cheeseburger", restaurant: "Burger Barn", image: "images/burger.jpg", location: "North Campus", time: "20-30 min", rating: 4.5, free: true, cuisine: "Burgers" },
  { id: "d2", name: "Margherita Pizza", restaurant: "The Pizza Hub", image: "images/pizza.jpg", location: "Main Block", time: "25-35 min", rating: 4.2, free: true, cuisine: "Pizza" },
  { id: "d3", name: "Veggie Noodles", restaurant: "Wok Express", image: "images/noodles.jpg", location: "Food Court", time: "20-30 min", rating: 4.4, free: true, cuisine: "Chinese" },
  { id: "d4", name: "Creamy Alfredo Pasta", restaurant: "Pastas & More", image: "images/pasta.jpg", location: "West Campus", time: "25-30 min", rating: 4.3, free: true, cuisine: "Italian" },
  { id: "d5", name: "Fresh Garden Salad", restaurant: "Healthy Bites", image: "images/salad.jpg", location: "South Campus", time: "15-25 min", rating: 4.6, free: true, cuisine: "Healthy" },
  { id: "d6", name: "Club Sandwich", restaurant: "Campus Cafe", image: "images/sandwich.jpg", location: "Library Lane", time: "15-20 min", rating: 4.1, free: false, cuisine: "Sandwiches" },
  { id: "d7", name: "Soft Chicken Tacos", restaurant: "Taco Town", image: "images/tacos.jpg", location: "East Campus", time: "20-25 min", rating: 4.4, free: true, cuisine: "Mexican" },
  { id: "d8", name: "Sushi Platter", restaurant: "Sakura Sushi", image: "images/sushi.jpg", location: "Main Block", time: "30-40 min", rating: 4.7, free: false, cuisine: "Japanese" },
  { id: "d9", name: "Crispy Fried Chicken", restaurant: "Crispy Corner", image: "images/fried-chicken.jpg", location: "Food Court", time: "20-30 min", rating: 4.5, free: true, cuisine: "Chicken" },
  { id: "d10", name: "Chocolate Lava Cake", restaurant: "Sweet Spot", image: "images/dessert.jpg", location: "North Campus", time: "15-20 min", rating: 4.8, free: true, cuisine: "Dessert" }
];

const favs = [];
let list = dishes.slice();

function openMenu() {
  document.getElementById("sidebar").style.left = "0%";
  document.getElementById("overlay").classList.remove("hidden");
}

function closeMenu() {
  document.getElementById("sidebar").style.left = "-50%";
  document.getElementById("overlay").classList.add("hidden");
}

function makeCard(d) {
  const isFav = favs.indexOf(d.id) != -1;
  const fill = isFav ? "#FF5A4F" : "none";
  const stroke = isFav ? "#FF5A4F" : "currentColor";
  const delivery = d.free
    ? '<span class="text-mint">Free Delivery</span>'
    : '<span class="text-gray-500">Delivery fee applies</span>';
  const menuLink = "menu.html?restaurant=" + encodeURIComponent(d.restaurant);

  return `
    <div class="dish-card w-[calc(50%-6px)] flex items-center gap-2 p-3 border rounded-xl shadow-sm">
      <img src="${d.image}" alt="${d.restaurant}" class="w-14 h-14 rounded-lg object-cover">
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between gap-1">
          <h3 class="font-semibold text-sm truncate">${d.restaurant}</h3>
          <button onclick="toggleFav('${d.id}')">
            <svg class="heart w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 24 24" stroke-width="1.5" stroke="${stroke}">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
        </div>
        <p class="text-xs text-gray-500 truncate">${d.name}</p>
        <p class="text-xs text-gray-500">${d.location} &bull; ${d.time}</p>
        <p class="text-xs mt-1">&#9733; ${d.rating} ${delivery}</p>
      </div>
      <a href="${menuLink}" class="cursor-pointer text-gray-400 hover:text-coral flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </a>
    </div>
  `;
}

function showDishes(arr) {
  const grid = document.getElementById("dishGrid");
  const msg = document.getElementById("noResult");

  if (arr.length == 0) {
    grid.innerHTML = "";
    msg.classList.remove("hidden");
    return;
  }

  msg.classList.add("hidden");
  let html = "";
  for (let i = 0; i < arr.length; i++) {
    html += makeCard(arr[i]);
  }
  grid.innerHTML = html;
}

function updateNavHeart() {
  const heart = document.getElementById("navHeart");
  const count = document.getElementById("favCount");

  if (favs.length > 0) {
    heart.setAttribute("fill", "#FF5A4F");
    heart.setAttribute("stroke", "#FF5A4F");
    count.innerText = favs.length;
    count.classList.remove("hidden");
  } else {
    heart.setAttribute("fill", "none");
    heart.setAttribute("stroke", "currentColor");
    count.classList.add("hidden");
  }
}

function toggleFav(id) {
  const pos = favs.indexOf(id);
  if (pos == -1) {
    favs.push(id);
  } else {
    favs.splice(pos, 1);
  }
  updateNavHeart();
  showDishes(list);
}

function searchDishes() {
  const q = document.getElementById("searchBox").value.toLowerCase().trim();
  list = [];

  for (let i = 0; i < dishes.length; i++) {
    const d = dishes[i];
    const text = (d.name + " " + d.restaurant + " " + d.cuisine + " " + d.location).toLowerCase();
    if (q == "" || text.indexOf(q) != -1) {
      list.push(d);
    }
  }

  showDishes(list);
}

function filterRating() {
  list.sort(function (a, b) {
    return b.rating - a.rating;
  });
  showDishes(list);
}

showDishes(list);
