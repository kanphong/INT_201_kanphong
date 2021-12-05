import { products,searchproduct } from "./product.js";
import { cart } from "./cart.js";

const show = document.querySelector("#show");

cart.load()
let icon = document.querySelector("#icon");
let searchbar = document.querySelector("#search");
let input = document.querySelector("#button");
let toggle = false;
icon.addEventListener("click", () => {
  toggle = !toggle
  if(toggle){
  searchbar.setAttribute("style","display : block");
  input.setAttribute("style","display : block")
  }else{
  searchbar.setAttribute("style","display : none");
  input.setAttribute("style","display : none");
  }
});

//ปุ่ม search
let item
searchbar.addEventListener("keyup",()=>{
  let word = new RegExp(String(searchbar.value),"i")
  item = products.filter((p)=>{
    return p.name.match(word) != null;
  })
  if(searchbar.value.length === 0){
    show.textContent =" "
    products.forEach(showproducts)
  }
})
input.addEventListener("click",()=>{
  show.textContent =" "
  item.forEach(showproducts)
})

products.forEach(showproducts); 
function showproducts(pro){
    //card
    const div_card = document.createElement("div");
    div_card.className = "card";
    div_card.setAttribute("style","width: 18rem");

    //รูป
    const img = document.createElement('img');
    img.setAttribute("src",pro.img);
    img.style.width = "150px"
    img.style.height = "150px"
    img.className = "card-img-top";

    //div
    const div = document.createElement("div");
    div.className = "card-body";

    //หัวข้อ
    const name = document.createElement("h5");
    name.className = "card-title";
    name.innerHTML = pro.name;

    //รายละเอียด
    const p = document.createElement("p");
    p.className = "card-text";
    p.innerHTML = `ID    : ${pro.id} <br>
                   ราคา  : ${pro.price} <br>
                   stock : ${pro.stock} <br>`

    //ปุ่ม
    const button = document.createElement("a");
    button.className = "btn btn-primary";
    button.innerHTML = 'OK';
    button.id = pro.id;
    button.addEventListener("click",buy);

    //เรียงลำดับข้อมูล
    show.append(div_card);
    div_card.append(img);
    div_card.append(div);
    div.append(name);
    div.append(p);
    div.append(button);
}

updatecount();

function buy(event){
  cart.add(searchproduct(event.target.id))
  alert(`You buy ${cart.toString()}`)
  cart.createcookie();
  updatecount();
}

function updatecount(){
  const count = document.querySelectorAll(".fa-shopping-cart")[0];
  count.textContent = cart.productlist.length
}

const buttonclear = document.querySelector("#clear");
buttonclear.addEventListener("click",()=>{
  cart.clear();
  updatecount();
});





