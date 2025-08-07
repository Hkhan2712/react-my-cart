import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import HomePage from "./views/home/HomePage";
// import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <BrowserRouter>
		<Layout>
			<Routes>
				<Route path="/" element={<HomePage />} />
			{/* <Route path="/products" element={<ProductsPage />} /> */}
			{/* Thêm route khác ở đây nếu cần */}
			</Routes>
		</Layout>
    </BrowserRouter>
  );
};

export default App;
