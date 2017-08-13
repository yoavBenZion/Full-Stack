const main_nav = document.querySelectorAll('.main_nav li');

const selected_nav = document.querySelector('.selected');

for (let i=0; i <main_nav.length; i++) {
  main_nav[i].addEventListener('mouseover', ()=>{
    main_nav[i].textContent = 
    main_nav[i].textContent.toUpperCase();
    
}); 

main_nav[i].addEventListener('mouseout', ()=>{
  if (main_nav[i] != selected_nav) {
  main_nav[i].textContent = main_nav[i].textContent.toLowerCase();
  }
}); 
}


/*function that shows in the console, any element on the page that we press on*/
document.addEventListener('click', (event) => {
  console.log(event.target);
});


/*serch button array methods*/
const arrayButton = document.querySelector('.arrayButton');
const arraySerchInput = document.querySelector('.arraySerchInput');

const length = document.querySelector('#length');

const isarray = document.querySelector('#isarray');

const list_array = document.querySelectorAll('.orderd-list li');


arrayButton.addEventListener('click', ()=>{
  for (let i=0; i<list_array.length; i++) {
  if ((arraySerchInput.value).toLowerCase() == (list_array[i].id).toLowerCase()) {
    console.log(list_array[i].id);
    let foo = '#';
    window.location.href = foo.concat(list_array[i].id);
   }
  }
});








