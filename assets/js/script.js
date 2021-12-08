let addbutton = document.querySelectorAll(".btn-danger");

creatStorage();

productCount();

addbutton.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    let id = this.parentElement.parentElement.getAttribute("data-id");
    let price = this.previousElementSibling.innerText;
    let title = this.parentElement.firstElementChild.innerText;
    let image = this.parentElement.previousElementSibling.src;
    creatStorage();
    let basket = addbasket(id, price, title, image);
    localStorage.setItem("basket", JSON.stringify(basket));
    productCount();
  });
});

function addbasket(Id, Price, Title, Image) {
  let basket = JSON.parse(localStorage.getItem("basket"));
  let exist = basket.find((item) => item.id == Id);

  if (exist == undefined) {
    basket.push({
      id: Id,
      price: Price,
      title: Title,
      image: Image,
      count: 1,
    });
  } else {
    exist.count++;
  }
  return basket;
}

showProducts();

function productCount() {
  document.querySelector("sup").innerText = JSON.parse(
    localStorage.getItem("basket")
  ).length;
}

function creatStorage() {
  if (!localStorage.getItem("basket")) {
    localStorage.setItem("basket", JSON.stringify([]));
  }
}

// Basket

function showProducts() {
  let basketlength = +JSON.parse(localStorage.getItem("basket")).length;
  let basket = JSON.parse(localStorage.getItem("basket"));
  let listofproduct = 1;
  for (let i = 0; i < basketlength; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let span = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
    let th = document.createElement("th");
    let img = document.createElement("img");

    th.setAttribute("scope", "row");
    let tbody = document.querySelector("#body");

    th.innerText = listofproduct;
    listofproduct++;
    td3.innerText = basket[i].price;
    td2.innerText = basket[i].title;
    td4.innerText = basket[i].count;
    let src = basket[i].image;
    img.setAttribute("src", src);
    td.style.width = "15rem";
    img.style.width = "30%";
    span.innerText = "X";
    span.style.cursor = "pointer";
    span.classList.add("close");

    td5.appendChild(span);
    td.appendChild(img);
    tr.appendChild(th);
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.append(tr);
  }

  let span = document.querySelectorAll(".close");
  let spanarr = Array.from(span);
  console.log(spanarr);

  for (let i = 0; i < spanarr.length; i++) {
    spanarr[i].addEventListener('click',function(e){
      let btn = e.target;
      let index = spanarr.indexOf(btn)
      let tr = btn.parentElement.parentElement;
      basket.splice(index, 1);
      localStorage.setItem("basket", JSON.stringify(basket));
      document.querySelector("sup").innerText = JSON.parse(
        localStorage.getItem("basket")
      ).length;
      spanarr.splice(index,1)
      tr.remove(); 
    })
  }
}
