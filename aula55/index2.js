const Form = document.querySelector("#form");
const aporte = document.querySelector("#aport");
const temp = document.querySelector("#temp");
const inicial = document.querySelector("#inici");
const juros = document.querySelector("#juro");

Form.addEventListener("submit", (event) => {
    event.preventDefault();
});

for (let i = 1; i === temp; i++) {
    inicial = + ((inicial + aporte) * juros) / 100;
    console.log(inicial);
}



