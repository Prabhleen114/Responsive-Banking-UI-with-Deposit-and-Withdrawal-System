let products = [
  { name: "Shoes", price: 1200 },
  { name: "Watch", price: 2500 },
  { name: "Bag", price: 900 },
  { name: "Headphones", price: 1800 }
];

let box = document.getElementById("products");
let sort = document.getElementById("sort");

function show(data) {
  box.innerHTML = "";
  data.forEach(p => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = "<h4>" + p.name + "</h4><p>₹" + p.price + "</p>";
    box.appendChild(div);
  });
}

show(products);

sort.onchange = function () {
  let value = sort.value;
  let temp = [...products];

  if (value === "low") {
    temp.sort((a, b) => a.price - b.price);
  } else if (value === "high") {
    temp.sort((a, b) => b.price - a.price);
  }

  show(temp);
};

