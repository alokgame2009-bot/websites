const plans = [
  {
    name: "Basic",
    ram: "2GB",
    storage: "20GB SSD",
    price: 99
  },
  {
    name: "Standard",
    ram: "4GB",
    storage: "50GB SSD",
    price: 199
  },
  {
    name: "Premium",
    ram: "8GB",
    storage: "100GB SSD",
    price: 399
  },
  {
    name: "Ultimate",
    ram: "16GB",
    storage: "200GB SSD",
    price: 699
  }
];

const container = document.getElementById("planContainer");

plans.forEach(plan => {
  const box = document.createElement("div");
  box.classList.add("plan-box");

  box.innerHTML = `
    <h3>${plan.name}</h3>
    <div class="plan-price">₹${plan.price}/mo</div>
    <ul>
      <li>⚡ RAM: ${plan.ram}</li>
      <li>💾 Storage: ${plan.storage}</li>
      <li>🛡️ DDoS Protection</li>
      <li>🦖 Pterodactyl Panel</li>
      <li>🕒 24/7 Support</li>
    </ul>
    <a class="buy-btn" href="checkout.html?name=${plan.name}&ram=${plan.ram}&storage=${plan.storage}&price=${plan.price}">
      Buy Now
    </a>
  `;

  container.appendChild(box);
});
