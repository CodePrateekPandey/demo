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
  //var titles = document.querySelectorAll('.title');
//   console.log(titles);
//   titles[0].textContent='hello';
//   var odd=document.querySelectorAll('li:nth-child(odd)');
//   for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='red';
//   }

//   var even=document.querySelectorAll('li:nth-child(even)');
//   for(var i=0;i<odd.length;i++){
//     even[i].style.backgroundColor='#ccc';
//   }


 //Traversing the node

 //var itemlist=document.querySelector('#items');
// //parenet mode
// // console.log(itemlist.parentNode);
// // itemlist.parentNode.style.backgroundColor ='#ccc'
// // console.log(itemlist.parentNode.parentNode.parentNode);


// parent Element
// console.log(itemlist.parentElement);
//  itemlist.parentElement.style.backgroundColor ='#ccc'
//  console.log(itemlist.parentElement.parentElement.parentElement);
//child node

// console.log(itemlist.childNodes);
// // itemlist.childNodes.style.backgroundColor ='#ccc'
//  console.log(itemlist.childNodes.childNodes);

// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor='yellow';

// //firstchild
// console.log(itemlist.firstChild);
// //first eliment child
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='hello';
// //lostelimentchild

// //lastchild
// console.log(itemlist.lastChild);
// //;last eliment child
// console.log(itemlist.firstElementChild);
// itemlist.lastElementChild.textContent='hello';



// createchild

// nextsibling


// nextelementsibling
// console.log(itemlist.nextElementSibling); // in html code we not writ ane span or nextsiling 
// // previoussibling
// console.log(itemlist.previousSibling);
// // previouselementsibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color='red'


// createelement
//create a div
 var newDiv = document.createElement('div');

 //add class
 newDiv.className='hello';
 //add id

 newDiv.id='hello1';
 console.log(newDiv);
//setAttribute
//add att
newDiv.setAttribute('title','hellodiv');

// createtesxtnode
var newDivText=document.createTextNode('hello world');
// 


// appendchild
newDiv.appendChild(newDivText);


