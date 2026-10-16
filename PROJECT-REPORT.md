# The Daily — Campus Canteen Portal

## Project overview

The Daily is a responsive, front-end canteen platform with two sign-in portals: a Student Portal and an Owner Portal. Students can browse a menu, add food to a tray, update quantities, choose a mock payment method, and complete a checkout flow with a confirmation token. Owners can review received orders and payment records, and manage menu inventory by adding or removing items.

## Features and implementation

- Built using semantic HTML, custom CSS, and vanilla JavaScript.
- Includes two portal flows with role-based access: Student and Owner.
- Student portal supports menu filtering, search, cart quantity updates, and mock payment checkout.
- Every menu item includes an expandable per-serving nutrition chart with estimated calories, protein, carbohydrates, fat, and fiber.
- A three-part “your break” story guides students from choosing food through preparation to pickup, with scroll-reveal transitions for the story and menu.
- Owner portal includes order totals, revenue summary, pending-item metrics, an order log, and menu management controls.
- Persistent browser storage is used for the menu, cart, orders, and sign-in session.
- Real food photography is loaded from Unsplash, while the interface remains minimal and modern.
- Motion respects the device’s reduced-motion preference.

## Demo credentials

- Student portal: ID `student-204`, password `student123`
- Owner portal: ID `canteen-admin`, password `owner123`

## Run and demonstrate

Open `index.html` in a browser, or serve the site locally using:

`python -m http.server 8000`

Then visit `http://localhost:8000`.

Suggested demo sequence:
1. Sign in as a student.
2. Scroll through the three story beats, then browse/filter the menu and add an item to the tray.
3. Open the cart, select a payment method, and place the mock order.
4. Sign out and sign in as the owner.
5. Review the order and payment data, then add and remove a menu item.

## Basic validation

The recent validation covered JavaScript syntax checking and browser-level role flow checks for:
- Student sign-in
- Story and menu reveal behavior, including the mobile layout and reduced-motion path
- Nutrition charts for each menu dish
- Menu browsing and filtering
- Cart quantity updates
- Order placement and confirmation
- Owner dashboard summary and menu management

## Deployment

This static app can be deployed without a build step. It can be published through GitHub Pages, Netlify, Vercel, or any static hosting provider by uploading the project files as-is.

## Scope and next steps

This is a front-end mock system without a real backend or payment gateway. A production version would require secure authentication, database-backed menu/order storage, and a live payment provider.
