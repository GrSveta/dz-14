const x = document.getElementById('.btn')
const view = document.querySelector('.view')
const n = 30;
const first = new Array(n);

for (let i = 0; i < first.length; i++){
first[i] = i + 1
}

function newFirst(){
  
for(let a = first.length -1; a > 0; a--){

const b = Math.floor(Math.random() * (a - 1));

[first[a],first[b]] = [first[b],first[a]];
}
view.innerHTML = first;
}
newFirst();

btn.addEventListener('click', newFirst);