const product = [
    {
        id: 0,
        image: 'mouse1.jpg',
        title: 'Wireless Mouse',
        price: 73,
    },
    {
        id: 1,
        image: 'aurorar16desktop.jpg',
        title: 'Alienware Aurora R16 Gaming Desktop',
        price: 7999,
    },
    {
        id: 2,
        image: 'gamingmonitor.jpg',
        title: 'Alienware 25 Gaming Monitor',
        price: 1499,
    },
    {
        id: 3,
        image: 'inspiron15laptop.jpg',
        title: 'Inspiron 15 Laptop',
        price: 2099,
    },
    {
        id: 4,
        image: 'keyboardandmousekm555.jpg',
        title: 'Keyboard and Mouse',
        price: 899,
    },
    {
        id: 5,
        image: 'wirelessgamingkeyboard.jpg',
        title: 'Wireless Gaming Keyboard',
        price: 1299,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart= [];

function addtocart(a) {
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a) {
    cart.splice(a,1);
    displaycart();
}

function displaycart(a) {
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if (cart.length==0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return (
                `<div class= 'cart-item'>
                <div class= 'row-img'>
                <img class= 'rowimg' src=${image}>
                </div
                <p style= 'font-size:12px;'>${title}</p>
                <h2 style= 'font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class= 'fa fa-trash' onclick='delElement("+ (j++) + ")'></i></div>"
            )
        }).join('');
    }
}