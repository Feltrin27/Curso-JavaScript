const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);
//1 89 172

for (const p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'black';
}
