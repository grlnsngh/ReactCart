# ReactCart 🛒

A single-page e-commerce storefront built with React, React Router, and Redux. It covers the full shopper flow — browsing categorized products, product details, cart management, checkout with delivery addresses, and order history — plus a basic auth flow (signup/login) and a control panel route for admin-style management.

## Features

- **Category-driven catalog** — nested category tree rendered in the header, with product listing and filtering by category/slug
- **Product details** — dedicated page per product (`/products/:category/:slug`)
- **Cart** — add/update/remove items, live quantity and price controls
- **Checkout** — delivery address form (existing or new address) and order placement (cash on delivery)
- **Order history** — past orders for the logged-in user
- **Auth** — signup, login, and a `PrivateRoute` guard for pages that require an authenticated user (cart, checkout, thank-you, orders)
- **Control panel** — separate route (`/cpanel`) for store management

## Tech Stack

| Layer | Library |
|---|---|
| UI | [React 16](https://react.dev/) |
| Routing | [React Router 5](https://v5.reactrouter.com/) |
| State management | [Redux](https://redux.js.org/) + [Redux Thunk](https://github.com/reduxjs/redux-thunk) |
| Tooling | [Create React App](https://create-react-app.dev/) (`react-scripts`) |
| Icons | [Font Awesome](https://fontawesome.com/) |

Data is fetched from a REST API via the browser `fetch` API — there's no backend code in this repo; see [Backend / API](#backend--api) below.

## Project Structure

```
src/
├── components/        # Presentational/reusable UI (Header, ShopStore, UI inputs, buttons, etc.)
├── containers/         # Route-level pages (Shop, Login, Signup, Cart, PlaceOrder, Orders, ...)
│   └── App.js           # Router + Redux Provider setup — the app's entry component
├── store/
│   ├── actions/         # Redux thunks (authActions, cartActions, productActions)
│   └── reducers/        # Redux reducers (auth, cart, products)
├── constants/           # Shared constants, incl. the API base URL
├── PrivateRoute.js      # Route wrapper that redirects unauthenticated users
└── index.js              # App bootstrap (ReactDOM.render)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 16+ and npm (developed/tested with Node 22, npm 10)
- A running instance of the ReactCart backend API (see [Backend / API](#backend--api))

### Installation

```bash
git clone git@github.com:grlnsngh/ReactCart.git
cd ReactCart
npm install
```

### Running the app

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000) (or the next available port) with hot reload.

### Running tests

```bash
npm test
```

Launches the test runner in interactive watch mode.

### Building for production

```bash
npm run build
```

Bundles the app into `build/`, optimized and minified for deployment.

## Backend / API

All data (categories, products, cart, auth, orders) is fetched from a REST API whose base URL is set in [`src/constants/index.js`](src/constants/index.js):

```js
export const base_url = 'https://chintooserver.herokuapp.com';
```

> **Note:** The Heroku app behind this default URL has been taken down, so out of the box the storefront will run but won't be able to load any live data. To use this project, point `base_url` at your own running backend that implements the following endpoints (used throughout `src/store/actions` and various containers):
>
> - `GET /category`
> - `GET /products/:categorySlug`
> - `GET /products/:category/:slug`
> - `POST /user/signup`
> - `POST /user/login`
> - `POST /cart/add`
> - `POST /cart/user/:userId`
> - `PUT /cart/update/quantity`
> - `GET /user/get-addresses/:userId`
> - `POST /user/new-address`
> - `POST /order/create`
> - `GET /order/getorders/:userId`

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Run the app in development mode |
| `npm test` | Run the test suite in watch mode |
| `npm run build` | Create a production build |
| `npm run eject` | Eject from Create React App's managed config (one-way operation) |
