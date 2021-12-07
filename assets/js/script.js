let addBtn = document.querySelectorAll(".btn-danger");

//Fun


if(!localStorage.getItem("baskets")){
    localStorage.setItem("baskets", JSON.stringify([]))
}
let basket = JSON.parse(localStorage.getItem("baskets"));
document.querySelector('sup').innerText=basket.length;
addBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let Id = this.parentElement.parentElement.getAttribute('data-id');
    let price = this.previousElementSibling.innerText;
    let title = this.parentElement.firstElementChild.innerText
    let image = this.parentElement.previousElementSibling.src


    let exict = basket.find(item =>item.id == Id)
  
    if(exict== undefined){
            basket.push({
                id:Id,
                Price:price,
                Title:title,
                Img:image,
                count:1
            })
    }
    else{ 
        exict.count++;
    }
 
    localStorage.setItem("baskets", JSON.stringify(basket));
    document.querySelector('sup').innerText=basket.length;  
  });
});
