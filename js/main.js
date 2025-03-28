// Load header and footer components
document.addEventListener("DOMContentLoaded", () => {
    includeHTML("header", "components/header.html");
    includeHTML("footer", "components/footer.html");
  
    // Load parks data
    fetch("data/parks.json")
      .then(res => res.json())
      .then(data => {
        renderTopParks(data);
        renderCampingGuides(data);
        renderExtraGuides(data);
        renderNatureProtection(data);
      })
      .catch(err => console.error("Error loading parks data:", err));
  
    // Accordion functionality
    document.querySelectorAll(".accordion-header").forEach(button => {
      button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const isOpen = content.style.display === "block";
        document.querySelectorAll(".accordion-content").forEach(el => el.style.display = "none");
        content.style.display = isOpen ? "none" : "block";
      });
    });
  
    // Newsletter form submission
    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", e => {
        e.preventDefault();
        const email = newsletterForm.querySelector("input[type='email']").value;
        alert(`Subscribed successfully with: ${email}`);
        newsletterForm.reset();
      });
    }
  });
  
  // Include reusable component
  function includeHTML(id, file) {
    const el = document.getElementById(id);
    if (el) {
      fetch(file)
        .then(res => res.text())
        .then(html => el.innerHTML = html)
        .catch(err => console.error(`Error loading ${file}:`, err));
    }
  }
  
  // Render cards into sections
  function renderTopParks(parks) {
    const container = document.getElementById("top-parks");
    parks.slice(0, 4).forEach(park => {
      container.innerHTML += createParkCard(park);
    });
  }
  
  function renderCampingGuides(parks) {
    const guides = [
      "Beginner’s Guide to Camping", "Compare Parks", "Packing Checklist", "Tips for Booking"
    ];
    const container = document.getElementById("camping-guides");
    guides.forEach(title => {
      container.innerHTML += `<div class="card"><h3>${title}</h3></div>`;
    });
  }
  
  function renderNatureProtection(parks) {
    const container = document.getElementById("nature-protection");
    const cards = [
      "How Ontario Parks supports conservation",
      "Eco-friendly camping tips",
      "Volunteer & donation opportunities"
    ];
    cards.forEach(title => {
      container.innerHTML += `<div class="card"><h3>${title}</h3></div>`;
    });
  }
  
  function renderExtraGuides(parks) {
    const container = document.getElementById("extra-guides");
    const titles = [
      "10 Must-Visit Parks in Ontario",
      "How to Camp Sustainably & Leave No Trace",
      "Best Trails for Beginners & Families"
    ];
    titles.forEach(title => {
      container.innerHTML += `<div class="card"><h3>${title}</h3></div>`;
    });
  }
  
  function createParkCard(park) {
    return `
      <div class="card">
        <img src="${park.image}" alt="${park.name}" />
        <h3>${park.name}</h3>
        <p>${park.description}</p>
        <a href="park.html?id=${park.id}" class="btn">View Details</a>
      </div>
    `;
  }
  