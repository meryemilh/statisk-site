const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products${id}`;

const parent = document.querySelector("section");

function getProduct() {
  fetch("https://kea-alt-del.dk/t7/api/products/" + id)
    .then((response) => response.json())
    .then((data) => showProduct(data));
}

function showProduct(product) {
  console.log(product);

  const purchaseBox = document.querySelector(".purchaseBox");

  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
  document.querySelector(".purchaseBox .brand").textContent = product.brandname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  ocument.querySelector("img").alt = product.productdisplayname;
}

getProduct();
