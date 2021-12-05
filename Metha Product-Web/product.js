export let products = [{
    img: "image/strawbery.jpg",
    id: '1',
    name: "condom_strawbery",
    price: 78,
    stock: "20",
},
{
    img: "image/soft.jpg",
    id: '2',
    name: "condom_soft",
    price: 67,
    stock: "64",
},
{
    img: "image/soda.jpg",
    id: '3',
    name: "condom_soda",
    price: 79,
    stock: "1"
},
{
    img: "image/noodle.jpg",
    id: '4',
    name: "condom_noodle",
    price: 53,
    stock: "10"
},
{
    img: "image/freak.jpg",
    id: '5',
    name: "condom_freak",
    price: 67,
    stock: "10"
}
]

export function searchproduct(id){
    return products.find((i)=>i.id==id)
}