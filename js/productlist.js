const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct ental
  products.forEach(showProduct);
}

function showProduct(product) {
  // console.log(product);
  //fange template
  const template = document.querySelector("#smallProductTemplate").content;
  //lave en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;

  copy.querySelector(".product-img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector(".product-img").alt = product.productdisplayname;

  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }

  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);
  //appende
  document.querySelector("main").appendChild(copy);
}
