// Dummy cart items for demo (replace with localStorage or real cart logic)
const cartItems = [
    {
      park: "Arrowhead Park",
      item: "Tent Site C01",
      type: "Tent",
      dates: "May 24–May 26",
      price: 70
    },
    {
      park: "Bon Echo",
      item: "Yurt B01",
      type: "Yurt",
      dates: "Jun 10–Jun 12",
      price: 180
    }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    renderCart();
  });
  
  function renderCart() {
    const tbody = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("cart-total");
    tbody.innerHTML = "";
  
    let total = 0;
  
    cartItems.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.park}</td>
        <td>${item.item}</td>
        <td>${item.type}</td>
        <td>${item.dates}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td><button onclick="removeItem(${index})">🗑️</button></td>
      `;
      tbody.appendChild(row);
      total += item.price;
    });
  
    totalDisplay.textContent = total.toFixed(2);
  }
  
  function removeItem(index) {
    cartItems.splice(index, 1);
    renderCart();
  }
  