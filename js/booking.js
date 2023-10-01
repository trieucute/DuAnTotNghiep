// File này gồm:
//  hiện ra các thành phố của việt nam 
// khi checked khứ hồi thì bỏ disabled ngày về


// load city Viet nam
 const loadCity = () => {
    fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const createOption = (select, value, text) => {
            const option = document.createElement("option");
            option.value = value;
            option.text = text;
            select.appendChild(option);
        };

        const citySelect1 = document.getElementById("citySelect1");
        const citySelect2= document.getElementById("citySelect2");
        data.forEach((city) => {
            createOption(citySelect1, city.Id, city.Name);
            createOption(citySelect2, city.Id, city.Name);
            console.log(city);
        });
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
};
loadCity();

// checked disabled input (search bus)
const handleCheckedKhuHoi = () => {
let khuhoi = document.getElementById("khuhoi");
console.log(khuhoi);
let disabled = document.querySelector(".disabled_input");
if (khuhoi.checked !== true) {
  console.log(disabled);
  disabled.classList.add("disabled");
  disabled.disabled = true;
} else {
  disabled.classList.remove("disabled");
  disabled.disabled = false;
}
};
