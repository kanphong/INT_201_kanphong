import { products,searchproduct } from "./product.js";
import { getCookie,setCookie,deleteData } from "./cookie.js"

export let cart = {
    //"productlist" : [{"product":products,"qty":0},{"product":products,"qty":0}]
    "productlist" : [],

     add(productbuy){
         if(this.productlist.some((i)=>productbuy.id==i.product.id)){ // return true false
             this.productlist.find((i)=>productbuy.id==i.product.id).qty++; // return obj ที่เป็น true
             return;
         }
         this.productlist.push({"product":productbuy,"qty":1});
     },

     delete(productbuy){
            this.productlist = this.productlist.filter((i)=>productbuy.id!=i.product.id);
     },

     createcookie(){
         setCookie("productcookie", JSON.stringify(this.productlist.map((i)=>{return{"id":i.product.id,"qty":i.qty}})) , 17);
     },

     load(){
        let v = (getCookie("productcookie"));
        if(v == null || v == undefined || v == []){
            return;
        }
        let a =JSON.parse(v);
        this.productlist = a.map((i)=>{return{"product":searchproduct(i.id),"qty":i.qty}});
     },

     toString(){
        let a = "";
        this.productlist.forEach((i)=>{a+=`${i.product.name} : ${i.qty} \n`})
        return a;
     },

     clear(){
         this.productlist = [];
         deleteData("productcookie")
     }
}

