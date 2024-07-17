import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InventoryProvider } from "./contexts/InventoryContext";
import { CartProvider } from "./contexts/CartContext";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const UserProfile = lazy(() => import("./pages/UserProfile"));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <CartProvider>
          <InventoryProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<UserProfile />} />
              </Routes>
            </Suspense>
          </InventoryProvider>
        </CartProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
