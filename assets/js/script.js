let addBtn = document.querySelectorAll(".btn-danger");

//Functions


if (!localStorage.getItem("basket")) {
    localStorage.setItem("basket", JSON.stringify([]))
    createItemsinBasket()
}
let basket = JSON.parse(localStorage.getItem("basket"));
document.querySelector('sup').innerText = basket.length;
addBtn.forEach((btn) => {
    btn.addEventListener("click", function(e) {

        let Id = this.parentElement.parentElement.getAttribute('data-id');
        let price = this.previousElementSibling.innerText;
        let title = this.parentElement.firstElementChild.innerText
        let image = this.parentElement.previousElementSibling.src


        let exict = basket.find(item => item.id == Id)

        if (exict == undefined) {
            basket.push({
                id: Id,
                Price: price,
                Title: title,
                image: image,
                count: 1
            })
        } else {
            exict.count++;
        }

        localStorage.setItem("basket", JSON.stringify(basket));
        document.querySelector('sup').innerText = basket.length;


    });
});

let cartitems = document.querySelector('.row')
const goCard = document.querySelector(".fa-shopping-basket")
    // Inside of Basket

function createItemsinBasket() {
    let tbody = document.querySelector("tbody")
    console.log(tbody);
    let basket = JSON.parse(localStorage.getItem("basket"));
    console.log(basket);
    basket.forEach(item => {
        let newtd1 = document.createElement('td');
        let td1img = document.createElement('img')
        newtd1.appendChild(td1img);
        td1img.setAttribute('src', item.image);
        let newtd2 = document.createElement('td');
        newtd2.innerHTML = item.title;
        let newtd3 = document.createElement('td')
        newtd3.innerHTML = item.price;
        let newtd4 = document.createElement('td');
        newtd4.innerHTML = item.count;
        let newtd5 = document.createElement("td")
        let td5btn = document.createElement("button")
        td5btn.setAttribute("class", "btn btn-danger")
        td5btn.setAttribute("onclick", "deleterow()")
        td5btn.innerHTML = "Delete";
        newtd5.appendChild(td6btn);
        let newtr = document.createElement("tr");
        newtr.appendChild(newtd1);
        newtr.appendChild(newtd2);
        newtr.appendChild(newtd3);
        newtr.appendChild(newtd4);
        newtr.appendChild(newtd5)
        tbody.appendChild(newtr);
    })
}
createItemsinBasket();

function deleteItemsinBasket() {
    let table = document.querySelector(".table")
    console.log(this.parentElement)
    table.remove(this.parentElement)
}