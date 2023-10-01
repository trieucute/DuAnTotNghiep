// khi nhấn vnpay thì hiện vnpay , tương tự momo

const inputs= document.querySelectorAll('.input-pay')
const payContent= document.querySelectorAll('.pay-items')
inputs.forEach((i)=>{
    i.addEventListener("change",(e)=>{
        let dataPay = e.target.dataset.pay;
        payContent.forEach(function (el) {
            el.classList.remove("active-items-pay");
        });
        document.querySelector("#" + dataPay).classList.add("active-items-pay");
    })
})
