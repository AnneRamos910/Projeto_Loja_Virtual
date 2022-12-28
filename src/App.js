import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/HomePage';
import Carrinho from './components/CarrinhoDeCompras';
import { CartProvider } from 'react-use-cart';

function App() {
	return (
		<div>
			<CartProvider>
				<Home />
				<Carrinho />
			</CartProvider>
		</div>
	);
}
export default App;