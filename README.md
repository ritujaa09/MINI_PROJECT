# The Daily — Campus Canteen Portal

A responsive front-end canteen ordering app with separate student and owner portals. Students can browse and search the menu, review estimated nutrition information, build a cart, and place a mock order. Owners can view orders and payment-method records, plus add or remove menu items.

## Features

### Student portal

- Browse food and drinks by category or search by name.
- View estimated calories, protein, carbohydrates, fat, and fiber for each dish.
- Add items to a cart, update quantities, and view the subtotal.
- Select a mock payment method (cash, UPI, or card) and place a demo order.
- View an order confirmation with a pickup reference.
- Follow the three-part, scroll-animated story from choosing a meal to pickup.

### Owner portal

- View order totals, revenue, pending-order count, and menu-item count.
- Review received orders, their items, totals, payment methods, and status.
- Add menu items with a name, category, price, and optional image URL.
- Remove items from the menu.

## Demo access

The sign-in is for demonstration only; any non-empty ID works with the matching password:

| Portal | Example ID | Password |
| --- | --- | --- |
| Student | `student-204` | `student123` |
| Owner | `canteen-admin` | `owner123` |

## Run locally

No package installation or build step is required. Open `index.html` in a modern browser, or start a local static server from the project folder:

```sh
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Project files

- `index.html` — page structure and both portal interfaces.
- `styles.css` — responsive styling, layouts, and animations.
- `app.js` — menu, cart, demo sign-in, order, nutrition-chart, and owner-dashboard behavior.
- `PROJECT-REPORT.md` — project summary, demo sequence, validation notes, and deployment guidance.

## Data, payments, and nutrition

This is a front-end prototype, not a production ordering service. Menu items, cart contents, demo orders, and the demo session are stored in the current browser using `localStorage`; they are not shared between devices or users. Payments are not processed. Nutrition values are estimates per serving, not verified dietary or medical information; actual values depend on ingredients, recipe, and serving size.

Food photography is served from Unsplash, and fonts are loaded from Google Fonts. An internet connection is needed for those external assets.

## Deploy

The app is static and can be hosted without a build command. For GitHub Pages, push these files to a GitHub repository, then open **Settings → Pages**, choose **Deploy from a branch**, and select the branch and `/` (root) folder. Alternatively, deploy the project folder with a static hosting provider such as Netlify or Vercel.

## Basic validation

Check the JavaScript syntax with:

```sh
node --check app.js
```

For a browser smoke test, try both portals, filter and search the menu, expand a nutrition chart, adjust cart quantities, place a mock order, and add/remove a menu item in the owner portal.

For production use, replace the demo sign-in and browser-only storage with secure authentication and a server-side database, and integrate a real payment provider.

