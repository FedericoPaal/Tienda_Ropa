const API_PRODUCTS = 'https://fakestoreapi.com/products';


export async function fetchProducts() {
const res = await fetch(API_PRODUCTS);
if (!res.ok) throw new Error('Error al obtener productos');
const data = await res.json();
return data;
}