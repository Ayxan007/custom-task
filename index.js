const closeBtn = document.querySelector("#close");
const cardPage = document.querySelector(".card")
const shopPage = document.querySelector(".btn-shop");
const all = document.querySelector(".head");
const addCard = document.querySelectorAll(".add");
const shop = document.querySelector(".shop-card");

closeBtn.addEventListener('click', ()=>{
    cardPage.remove();
});
shopPage.addEventListener('click',()=>{
    all.appendChild(cardPage);
});

addCard.forEach((addCard)=>{
addCard.addEventListener('click', () => {
    const shop = addCard.parentElement.cloneNode(true);
    const copingShop = shop.cloneNode(true);
    const shopNumber = document.createElement("span");
    shopNumber.innerText = '1';
    shopNumber.className = 'num';
    shopNumber.addEventListener('click',()=>{
        shopNumber.innerText++;
    });
    const reduce = document.createElement("button");
    reduce.innerText = 'Reduce';
    reduce.className = 'reduc';
    reduce.addEventListener('click', ()=>{
        if (shopNumber.innerText > 0) {
            shopNumber.innerText--;
        }
    });
    copingShop.appendChild(reduce);
    copingShop.appendChild(shopNumber);
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove'; 
    removeBtn.className = 'remove-btn'; 
    copingShop.appendChild(removeBtn);
    cardPage.appendChild(copingShop);
    removeBtn.addEventListener('click', () => {
        copingShop.remove();
    });
});
});