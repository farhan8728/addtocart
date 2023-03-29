const cart = [];

function display(products) {
  let totalPrice = 0;

  const table_body = document.getElementById("t-body");
  table_body.innerHTML = ''

  for (let i = 0; i < products.length; i++) {
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <th scope="row">${[i + 1]}</th>
      <td>${cart[i].pName}</td>
      <td>${cart[i].pPrice}</td>
      
    `;
    table_body.appendChild(tr);
    
    totalPrice = totalPrice + cart[i].pPrice;

    
  }
  const tr = document.createElement("tr");
    tr.innerHTML = `
        <th scope="row"></th>
        <td>Total Price</td>
        <td>${totalPrice}</td>
      `;
    table_body.appendChild(tr)
   
}

function buy(abc) {
  const cartProduct = document.getElementById("cart");
  const product = abc.parentNode.children[0].innerText;
  const productPrice = abc.parentNode.children[1].children[0].innerText;

  const buyProduct = {
    pName: product,
    pPrice: parseFloat(productPrice),
  };
  cart.push(buyProduct);
  cartProduct.innerText = cart.length;

  display(cart);
}

