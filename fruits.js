// render a list of fruits, there should be at least 3 fruits
// the fruits should have different prices listed on them that I can modify
// I want to be able to delete fruits

const fruits = [
  { name: "Apple", price: 1.5 },
  { name: "Orange", price: 1.5 },
  { name: "Banana", price: 0.75 },
  { name: "Peach", price: 0.75 }
];

function renderFruits() {
  const fruitList = document.getElementById("fruit-list");

  fruitList.innerHTML = "";

  fruits.forEach((fruit, index) => {
    const fruitDiv = document.createElement("div");

    fruitDiv.innerHTML = `
            <p>
                <strong>${fruit.name}</strong>

                $<input
                    type="number"
                    value="${fruit.price}"
                    step="0.01"
                    min="0"
                    id="price-${index}"
                >

                <button onclick="updatePrice(${index})">
                    Update Price
                </button>

                <button onclick="deleteFruit(${index})">
                    Delete
                </button>
            </p>
        `;

    fruitList.appendChild(fruitDiv);
  });
}

function updatePrice(index) {
  const priceInput = document.getElementById(`price-${index}`);

  const newPrice = Number(priceInput.value);

  if (newPrice < 0 || priceInput.value === "") {
    alert("Please enter a valid price.");
    return;
  }

  fruits[index].price = newPrice;

  renderFruits();
}

function deleteFruit(index) {
  fruits.splice(index, 1);

  renderFruits();
}

renderFruits();
