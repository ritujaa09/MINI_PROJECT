const defaultMenuItems = [
  {
    id: "loaded-slice",
    name: "The Loaded Slice",
    category: "Mains",
    price: 129,
    tag: "CAMPUS FAVE",
    description: "Roasted peppers, sweet corn, mozzarella.",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=720&q=80",
    alt: "Crispy vegetable pizza slice with melted cheese",
    time: "10 min",
    nutrition: { kcal: 340, protein: 15, carbs: 38, fat: 14, fiber: 3 },
  },
  {
    id: "green-bowl",
    name: "Green Day Bowl",
    category: "Fresh",
    price: 159,
    tag: "FEEL-GOOD",
    description: "Avocado, greens, grains, lemon tahini.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=720&q=80",
    alt: "Colorful fresh salad bowl with vegetables",
    time: "8 min",
    nutrition: { kcal: 390, protein: 12, carbs: 36, fat: 22, fiber: 11 },
  },
  {
    id: "crispy-burger",
    name: "Crispy Club Burger",
    category: "Mains",
    price: 179,
    tag: "CROWD PICK",
    description: "Crispy chicken, house slaw, soft brioche.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=720&q=80",
    alt: "Juicy cheeseburger with fresh lettuce and tomato",
    time: "12 min",
    nutrition: { kcal: 520, protein: 29, carbs: 48, fat: 23, fiber: 3 },
  },
  {
    id: "iced-latte",
    name: "Iced Oat Latte",
    category: "Sips",
    price: 99,
    tag: "STUDY BUDDY",
    description: "Double shot, creamy oat milk, lots of ice.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=720&q=80",
    alt: "Iced coffee with creamy milk in a glass",
    time: "4 min",
    nutrition: { kcal: 145, protein: 3, carbs: 16, fat: 7, fiber: 2 },
  },
  {
    id: "paneer-wrap",
    name: "Tandoori Paneer Wrap",
    category: "Mains",
    price: 139,
    tag: "VEG FAVE",
    description: "Smoky paneer, crunchy slaw, mint yogurt.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=720&q=80",
    alt: "Grilled wrap filled with fresh vegetables and paneer",
    time: "9 min",
    nutrition: { kcal: 420, protein: 20, carbs: 46, fat: 18, fiber: 5 },
  },
  {
    id: "berry-yogurt",
    name: "Berry Good Parfait",
    category: "Fresh",
    price: 119,
    tag: "A LITTLE SWEET",
    description: "Thick yogurt, berries, honey granola.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=720&q=80",
    alt: "Yogurt parfait layered with berries and granola",
    time: "5 min",
    nutrition: { kcal: 280, protein: 12, carbs: 42, fat: 7, fiber: 5 },
  },
  {
    id: "masala-fries",
    name: "Masala Mood Fries",
    category: "Sides",
    price: 89,
    tag: "EXTRA CRUNCH",
    description: "Golden fries, house masala, lime mayo.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=720&q=80",
    alt: "Golden crispy french fries served with dipping sauce",
    time: "7 min",
    nutrition: { kcal: 320, protein: 5, carbs: 43, fat: 15, fiber: 4 },
  },
  {
    id: "mango-smoothie",
    name: "Mango Sunshine",
    category: "Sips",
    price: 109,
    tag: "SEASONAL",
    description: "Real mango, a little yogurt, pure sunshine.",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=720&q=80",
    alt: "Fresh fruit smoothie topped with colorful fruit",
    time: "4 min",
    nutrition: { kcal: 210, protein: 6, carbs: 42, fat: 3, fiber: 4 },
  },
];

const defaultOrders = [
  {
    id: "D-1012",
    student: "Aarav S.",
    items: [{ name: "The Loaded Slice", qty: 1, price: 129 }, { name: "Mango Sunshine", qty: 1, price: 109 }],
    total: 238,
    paymentMethod: "UPI",
    status: "Received",
  },
  {
    id: "D-1007",
    student: "Nisha P.",
    items: [{ name: "Green Day Bowl", qty: 1, price: 159 }, { name: "Iced Oat Latte", qty: 2, price: 99 }],
    total: 357,
    paymentMethod: "Card",
    status: "Preparing",
  },
];

const STORAGE_KEYS = {
  menu: "daily-canteen-menu",
  cart: "daily-canteen-cart",
  orders: "daily-canteen-orders",
  session: "daily-canteen-session",
};

const categories = ["All bites", "Mains", "Fresh", "Sides", "Sips"];
const categoryNutritionEstimates = {
  Mains: { kcal: 420, protein: 20, carbs: 46, fat: 18, fiber: 5 },
  Fresh: { kcal: 320, protein: 12, carbs: 35, fat: 14, fiber: 8 },
  Sides: { kcal: 310, protein: 7, carbs: 42, fat: 14, fiber: 4 },
  Sips: { kcal: 180, protein: 5, carbs: 30, fat: 5, fiber: 3 },
};
const grid = document.querySelector("#food-grid");
const categoryList = document.querySelector("#category-list");
const searchInput = document.querySelector("#search-input");
const menuCount = document.querySelector("#menu-count");
const emptyResults = document.querySelector("#empty-results");
const cartCount = document.querySelector("#cart-count");
const cartPanel = document.querySelector("#cart-panel");
const cartContent = document.querySelector("#cart-content");
const cartFooter = document.querySelector("#cart-footer");
const subtotalValue = document.querySelector("#subtotal-value");
const checkoutButton = document.querySelector("#checkout-button");
const paymentMethodSelect = document.querySelector("#payment-method");
const overlay = document.querySelector("#overlay");
const confirmationDialog = document.querySelector("#confirmation-dialog");
const statusToast = document.querySelector("#toast");
const authScreen = document.querySelector("#auth-screen");
const studentApp = document.querySelector("#student-app");
const ownerApp = document.querySelector("#owner-app");
const loginId = document.querySelector("#login-id");
const loginPassword = document.querySelector("#login-password");
const loginLabel = document.querySelector("#login-label");
const authForm = document.querySelector("#auth-form");
const portalOptions = document.querySelectorAll(".portal-option");
const studentWelcome = document.querySelector("#student-welcome");
const ownerWelcome = document.querySelector("#owner-welcome");

let activeCategory = "All bites";
let menuItems = loadMenu();
let cart = loadCart();
let orders = loadOrders();
let selectedPortal = "student";
let toastTimeout;
let storyObserver;
let storyListenersBound = false;

function loadMenu() {
  const saved = localStorage.getItem(STORAGE_KEYS.menu);
  if (!saved) return [...defaultMenuItems];
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length ? parsed : [...defaultMenuItems];
  } catch (error) {
    return [...defaultMenuItems];
  }
}

function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || "{}");
    if (!stored || typeof stored !== "object" || Array.isArray(stored)) return {};
    return Object.fromEntries(
      Object.entries(stored).filter(([id, quantity]) =>
        menuItems.some((item) => item.id === id) &&
        Number.isInteger(quantity) &&
        quantity > 0
      )
    );
  } catch (error) {
    return {};
  }
}

function loadOrders() {
  const saved = localStorage.getItem(STORAGE_KEYS.orders);
  if (!saved) return [...defaultOrders];
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [...defaultOrders];
  } catch (error) {
    return [...defaultOrders];
  }
}

function saveMenu() {
  localStorage.setItem(STORAGE_KEYS.menu, JSON.stringify(menuItems));
}

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
}

function saveOrders() {
  localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(orders));
}

function formatPrice(amount) {
  return `₹${Number(amount).toLocaleString("en-IN")}`;
}

function getNutrition(item) {
  const defaultItem = defaultMenuItems.find((candidate) => candidate.id === item.id);
  return item.nutrition || defaultItem?.nutrition || categoryNutritionEstimates[item.category] || categoryNutritionEstimates.Mains;
}

function renderNutritionChart(item) {
  const nutrition = getNutrition(item);
  const nutrients = [
    { label: "Protein", amount: nutrition.protein, max: 40 },
    { label: "Carbs", amount: nutrition.carbs, max: 80 },
    { label: "Fat", amount: nutrition.fat, max: 35 },
    { label: "Fiber", amount: nutrition.fiber, max: 15 },
  ];

  return `
    <details class="nutrition-chart">
      <summary>Nutrition <span>EST. / SERVING</span></summary>
      <div class="nutrition-chart-content">
        <div class="nutrition-calories"><span>ENERGY</span><strong>${nutrition.kcal}<small> kcal</small></strong></div>
        <div class="nutrient-bars">
          ${nutrients.map((nutrient) => {
            const width = Math.min(100, Math.max(0, nutrient.amount / nutrient.max * 100));
            return `
              <div class="nutrient-row">
                <span class="nutrient-name">${nutrient.label}</span>
                <span class="nutrient-track" aria-hidden="true"><span style="width: ${width}%"></span></span>
                <strong>${nutrient.amount}<small>g</small></strong>
              </div>`;
          }).join("")}
        </div>
        <p class="nutrition-note">Approximate values; actual nutrition varies by recipe and serving size.</p>
      </div>
    </details>`;
}

function getSessionData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.session) || "{}");
}

function setSessionData(nextSession) {
  localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(nextSession));
}

function showToast(message) {
  statusToast.textContent = message;
  statusToast.classList.add("show");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => statusToast.classList.remove("show"), 2400);
}

function renderCategories() {
  categoryList.innerHTML = categories.map((category) => `
    <button class="category-button${activeCategory === category ? " active" : ""}" type="button" aria-pressed="${activeCategory === category}" data-category="${category}">${category}</button>
  `).join("");
}

function renderMenu() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = menuItems.filter((item) => {
    const categoryMatches = activeCategory === "All bites" || item.category === activeCategory;
    const queryMatches = `${item.name} ${item.description} ${item.category}`.toLowerCase().includes(query);
    return categoryMatches && queryMatches;
  });

  menuCount.textContent = `${String(filtered.length).padStart(2, "0")} ITEMS`;
  emptyResults.hidden = filtered.length > 0;
  grid.innerHTML = filtered.map((item) => `
    <article class="food-card">
      <div class="food-image-wrap">
        <img class="food-image" src="${item.image}" alt="${item.alt || item.name}" loading="lazy" />
        <span class="food-tag">${item.tag || item.category.toUpperCase()}</span>
        <button class="add-button" type="button" data-add="${item.id}" aria-label="Add ${item.name} to your tray">+</button>
      </div>
      <div class="food-details">
        <div class="food-meta"><span>${item.category.toUpperCase()}</span><span>${item.time || "Fresh"}</span></div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="food-meta"><span>FRESHLY MADE</span><strong>${formatPrice(item.price)}</strong></div>
        ${renderNutritionChart(item)}
      </div>
    </article>
  `).join("");

  if (storyObserver) observeStoryElements();
}

function observeStoryElements() {
  const elements = document.querySelectorAll(".story-reveal, .food-card");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!storyObserver) {
    document.documentElement.classList.add("story-motion");
    storyObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  }

  elements.forEach((element) => {
    if (!element.classList.contains("is-visible")) storyObserver.observe(element);
  });

  revealStoryElementsInView();
  if (!storyListenersBound) {
    window.addEventListener("scroll", revealStoryElementsInView, { passive: true });
    window.addEventListener("resize", revealStoryElementsInView);
    storyListenersBound = true;
  }
}

function revealStoryElementsInView() {
  document.querySelectorAll(".story-reveal:not(.is-visible), .food-card:not(.is-visible)").forEach((element) => {
    const bounds = element.getBoundingClientRect();
    if (bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0) {
      element.classList.add("is-visible");
      if (storyObserver) storyObserver.unobserve(element);
    }
  });
}

function startStorytelling() {
  studentApp.classList.remove("story-active");
  void studentApp.offsetWidth;
  studentApp.classList.add("story-active");
  observeStoryElements();
}

function renderCart() {
  const entries = Object.entries(cart).filter(([, quantity]) => quantity > 0);
  const count = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
  const subtotal = entries.reduce((sum, [id, quantity]) => {
    const item = menuItems.find((candidate) => candidate.id === id);
    if (!item) return sum;
    return sum + item.price * quantity;
  }, 0);

  cartCount.textContent = count > 99 ? "99+" : String(count);
  subtotalValue.textContent = formatPrice(subtotal);
  checkoutButton.disabled = count === 0;
  cartFooter.hidden = count === 0;

  if (count === 0) {
    cartContent.innerHTML = `
      <div class="cart-empty">
        <span class="cart-empty-icon" aria-hidden="true">＋</span>
        <h3>Your tray is looking hungry.</h3>
        <p>Add something delicious from the menu and it will show up right here.</p>
      </div>`;
    return;
  }

  cartContent.innerHTML = entries.map(([id, quantity]) => {
    const item = menuItems.find((candidate) => candidate.id === id);
    const total = item.price * quantity;
    return `
      <article class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h3 class="cart-item-name">${item.name}</h3>
          <span class="cart-item-price">${formatPrice(item.price)} each</span>
          <div class="quantity-control" aria-label="${item.name} quantity">
            <button type="button" data-quantity="${id}" data-change="-1" aria-label="Remove one ${item.name}">−</button>
            <span>${quantity}</span>
            <button type="button" data-quantity="${id}" data-change="1" aria-label="Add one ${item.name}">+</button>
          </div>
        </div>
        <strong class="cart-item-total">${formatPrice(total)}</strong>
      </article>`;
  }).join("");
}

function updateCart(id, delta) {
  const nextQuantity = (cart[id] || 0) + delta;
  if (nextQuantity > 0) cart[id] = nextQuantity;
  else delete cart[id];
  saveCart();
  renderCart();
}

function showCart() {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  document.querySelector("#close-cart").focus();
}

function hideCart() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
  overlay.hidden = true;
  document.body.style.overflow = "";
  const trigger = document.querySelector("#cart-trigger");
  if (trigger) trigger.focus();
}

function placeOrder() {
  const entries = Object.entries(cart).filter(([, quantity]) => quantity > 0);
  if (!entries.length) return;

  const paymentMethod = paymentMethodSelect.value;
  const studentName = getSessionData().userName || "Student";
  const items = entries.map(([id, qty]) => {
    const item = menuItems.find((candidate) => candidate.id === id);
    return { name: item.name, qty, price: item.price };
  });
  const total = items.reduce((sum, entry) => sum + entry.price * entry.qty, 0);
  const orderId = `D-${Math.floor(1000 + Math.random() * 9000)}`;

  orders.unshift({
    id: orderId,
    student: studentName,
    items,
    total,
    paymentMethod,
    status: "Received",
  });

  saveOrders();
  cart = {};
  saveCart();
  renderCart();
  renderOwnerDashboard();
  document.querySelector("#order-number").textContent = orderId;
  document.querySelector("#cart-panel").classList.remove("open");
  document.querySelector("#cart-panel").setAttribute("aria-hidden", "true");
  overlay.hidden = true;
  document.body.style.overflow = "";
  confirmationDialog.showModal();
  showToast("Order placed successfully.");
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const enteredId = loginId.value.trim();
  const password = loginPassword.value.trim();
  const validStudent = enteredId && password === "student123";
  const validOwner = enteredId && password === "owner123";

  if (!enteredId || !password) {
    showToast("Please enter a valid ID and password.");
    return;
  }

  if (selectedPortal === "student" && validStudent) {
    setSessionData({ role: "student", userName: enteredId || "Student" });
    renderPortalState();
    showToast("Student portal unlocked.");
    return;
  }

  if (selectedPortal === "owner" && validOwner) {
    setSessionData({ role: "owner", userName: enteredId || "Owner" });
    renderPortalState();
    showToast("Owner dashboard unlocked.");
    return;
  }

  showToast("Incorrect credentials. Please try the demo password.");
}

function renderPortalState() {
  const session = getSessionData();
  const activeRole = session.role || "";
  authScreen.classList.toggle("hidden", Boolean(activeRole));
  studentApp.classList.toggle("hidden", activeRole !== "student");
  ownerApp.classList.toggle("hidden", activeRole !== "owner");

  if (activeRole === "student") {
    const name = session.userName || "Student";
    studentWelcome.textContent = `Welcome, ${name}`;
    renderStudentPortal();
  }

  if (activeRole === "owner") {
    const name = session.userName || "Owner";
    ownerWelcome.textContent = `Welcome, ${name}`;
    renderOwnerDashboard();
  }
}

function handleSignOut() {
  localStorage.removeItem(STORAGE_KEYS.session);
  authScreen.classList.remove("hidden");
  studentApp.classList.add("hidden");
  ownerApp.classList.add("hidden");
  authForm.reset();
  loginId.focus();
}

function renderStudentPortal() {
  renderCategories();
  renderMenu();
  renderCart();
  startStorytelling();
}

function renderOwnerDashboard() {
  const totalRevenue = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  const pendingCount = orders.filter((order) => order.status !== "Completed").length;

  document.querySelector("#kpi-orders").textContent = String(orders.length);
  document.querySelector("#kpi-revenue").textContent = formatPrice(totalRevenue);
  document.querySelector("#kpi-pending").textContent = String(pendingCount);
  document.querySelector("#kpi-menu").textContent = String(menuItems.length);

  const body = document.querySelector("#orders-table-body");
  if (!orders.length) {
    body.innerHTML = '<tr><td colspan="6" class="empty-state">No orders yet.</td></tr>';
    return;
  }

  body.innerHTML = orders.map((order) => `
    <tr>
      <td>${order.id}</td>
      <td>${order.student}</td>
      <td>${order.items.map((item) => `${item.name} × ${item.qty}`).join("<br />")}</td>
      <td>${formatPrice(order.total)}</td>
      <td>${order.paymentMethod}</td>
      <td><span class="status-badge ${order.status.toLowerCase().replace(/\s+/g, "-")}">${order.status}</span></td>
    </tr>
  `).join("");

  const adminList = document.querySelector("#menu-admin-list");
  adminList.innerHTML = menuItems.map((item) => `
    <article class="menu-admin-item">
      <div class="menu-admin-thumb"><img src="${item.image}" alt="${item.name}" /></div>
      <div class="menu-admin-copy">
        <h3>${item.name}</h3>
        <span>${item.category}</span>
        <strong>${formatPrice(item.price)}</strong>
      </div>
      <button type="button" class="delete-item" data-item-id="${item.id}">Remove</button>
    </article>
  `).join("");
}

function addMenuItem(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const category = String(formData.get("category") || "Mains");
  const price = Number(formData.get("price") || 0);
  const image = String(formData.get("image") || "").trim();

  if (!name || !price || price <= 0) {
    showToast("Please enter a valid name and price.");
    return;
  }

  menuItems.unshift({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now(),
    name,
    category,
    price,
    description: "Freshly prepared daily special.",
    image: image || "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    alt: `${name} from the campus canteen`,
    tag: "OWNER ADD",
    time: "10 min",
  });

  saveMenu();
  renderMenu();
  renderOwnerDashboard();
  form.reset();
  showToast("New menu item created.");
}

function removeMenuItem(event) {
  const button = event.target.closest("[data-item-id]");
  if (!button) return;
  const itemId = button.dataset.itemId;
  menuItems = menuItems.filter((item) => item.id !== itemId);
  cart = Object.fromEntries(
    Object.entries(cart).filter(([id]) => id !== itemId)
  );
  saveMenu();
  saveCart();
  renderMenu();
  renderCart();
  renderOwnerDashboard();
  showToast("Menu item removed.");
}

portalOptions.forEach((button) => {
  button.addEventListener("click", () => {
    selectedPortal = button.dataset.portal;
    portalOptions.forEach((option) => option.classList.toggle("active", option === button));
    loginLabel.textContent = selectedPortal === "student" ? "Student ID" : "Owner ID";
    loginId.placeholder = selectedPortal === "student" ? "Enter your student ID" : "Enter your owner ID";
  });
});

searchInput.addEventListener("input", renderMenu);

document.querySelector("#category-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategories();
  renderMenu();
});

document.querySelector("#food-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  const itemId = button.dataset.add;
  updateCart(itemId, 1);
  showToast(`${menuItems.find((item) => item.id === itemId).name} added to your tray.`);
});

document.querySelector("#cart-content").addEventListener("click", (event) => {
  const button = event.target.closest("[data-quantity]");
  if (button) {
    updateCart(button.dataset.quantity, Number(button.dataset.change));
  }
});

document.querySelector("#cart-trigger").addEventListener("click", showCart);
document.querySelector("#close-cart").addEventListener("click", hideCart);
overlay.addEventListener("click", hideCart);
document.querySelector("#checkout-button").addEventListener("click", placeOrder);
document.querySelector("#close-confirmation").addEventListener("click", () => confirmationDialog.close());
document.querySelector("#done-button").addEventListener("click", () => confirmationDialog.close());
confirmationDialog.addEventListener("click", (event) => {
  if (event.target === confirmationDialog) confirmationDialog.close();
});

authForm.addEventListener("submit", handleAuthSubmit);
document.querySelector("#student-signout").addEventListener("click", handleSignOut);
document.querySelector("#owner-signout").addEventListener("click", handleSignOut);
document.querySelector("#menu-form").addEventListener("submit", addMenuItem);
document.querySelector("#menu-admin-list").addEventListener("click", removeMenuItem);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartPanel.classList.contains("open")) hideCart();
});

renderPortalState();
renderCategories();
renderMenu();
renderCart();
renderOwnerDashboard();
