async function fetchProducts() {
  try {
    const respon = await fetch("http://dummyjson.com/products");
    const data = await respon.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
fetchProducts();

async function fetchProducts1() {
  try {
    const { data } = await axios.get("http://dummyjson.com/products");
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
fetchProducts1();
