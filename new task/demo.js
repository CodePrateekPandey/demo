// console.log(document.URL);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.domain);
// console.log(document.title);
// document.title=123

// console.log(document.head);
// console.log(document.doctype);
// console.log(document.children);
// console.log(document.images);
// console.log(document.all);
// console.log(document.all[15]);
// console.log(document.links);

// geteliment by id

// console.log(document.getElementById('header-title'));
//  var headerTitle=document.getElementById('header-title');
//  var header=document.getElementById('main-header');

// //  console.log(headerTitle);
// //  headerTitle.textContent='hello';
// header.style.borderBottom='solid 3px #000';

//  get eliment by  class name 

//var itam=document.getElementsByClassName('list-group-item');
// console.log(itam);
// console.log(itam[1]);
//  itam[1].textContent='hello';
// itam[1].style.fontWeight='bold';
//itam[2].style.backgroundColor='red';
// itam[2].style.color='blue';
//itam[3].style.backgroundColor='#00FF00';


// for(var i=0;i<=itam.length;i++){
//     itam[i].style.backgroundColor='#00FF00';
// }
// querySalector
//  var header=document.querySelector('#main-header');
//   header.style.borderBottom='solid 5px #ccc';
//    var input=document.querySelector('input');
//   input.value='Hello'
  
// var submit=document.querySelector('input[type="submit"]');
//   submit.value='Send'
// var item = document.querySelector('.list-group-item');
//   item.style.color='red'
//   var lastitem = document.querySelector('.list-group-item:last-child');
//   lastitem.style.color='blue'
//   var seconditem = document.querySelector('.list-group-item:nth-child(2)');
//   seconditem.style.color='pink'

  //Queary Salectorall
  var titles = document.querySelectorAll('.title');
//   console.log(titles);
  titles[0].textContent='hello';
  var odd=document.querySelectorAll('li:nth-child(odd)');
  for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='red';
  }

  var even=document.querySelectorAll('li:nth-child(even)');
  for(var i=0;i<odd.length;i++){
    even[i].style.backgroundColor='#ccc';
  }



