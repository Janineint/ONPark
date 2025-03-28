//////Cart
// Dummy cart & user data (replace with real source or localStorage)
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
  
  const userInfo = {
    name: "Jane Camper",
    email: "jane@example.com",
    phone: "123-456-7890"
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    renderReviewItems();
    populateUserInfo();
  });
  
  function renderReviewItems() {
    const tbody = document.getElementById("review-items");
    const totalDisplay = document.getElementById("review-total");
    let total = 0;
  
    cartItems.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.park}</td>
        <td>${item.item}</td>
        <td>${item.type}</td>
        <td>${item.dates}</td>
        <td>$${item.price.toFixed(2)}</td>
      `;
      tbody.appendChild(row);
      total += item.price;
    });
  
    totalDisplay.textContent = total.toFixed(2);
  }
  
  function populateUserInfo() {
    document.getElementById("review-name").textContent = userInfo.name;
    document.getElementById("review-email").textContent = userInfo.email;
    document.getElementById("review-phone").textContent = userInfo.phone;
  }
  
  function confirmReservation() {
    alert("✅ Reservation confirmed! Thank you for booking.");
    // Optionally: redirect, clear cart, etc.
  }
  
/////Reservation Info
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("info-form");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const userInfo = {
          firstName: form.firstName.value,
          lastName: form.lastName.value,
          email: form.email.value,
          phone: form.phone.value,
          address1: form.address1.value,
          address2: form.address2.value,
          city: form.city.value,
          province: form.province.value,
          postal: form.postal.value
        };
  
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        window.location.href = "reservation-review.html";
      });
    }
  });
  