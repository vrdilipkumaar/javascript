// Import stylesheets
import './style.css';

// Write Javascript code!
var accData=[

{

  'acctNum':"AAA - 12345",

  "user": "Alice"

},

{

  'acctNum':"AAA - 5231",

  "user": "Bob"

},

{

  'acctNum':"AAA - 9921",

  "user": "Alice"

},

{

  'acctNum':"AAA - 8191",

  "user": "Alice"

}

];

var balance = {

  "AAA - 12345" :4593.22,

  "AAA - 9921" :0,

  "AAA - 5231" :232142.5,

  "AAA - 8191" :4344

}

function renderHtml(accData){

var headTitle="<tr>"

          +"<th>Account</th>"

          +"<th>UserName</th>"

          +"<th>Balance</th>"

          +"</tr>";

 var HTMLStructure=headTitle;

for(var i=0; i<accData.length; i++){

    HTMLStructure+="<tr><td>"+accData[i].acctNum+"</td>"+"<td>"+accData[i].user+"</td>"+"<td>"+accData[i].balancekey+"</td></tr>";

}

document.getElementById("demo").innerHTML='<table style="width:100%">'+HTMLStructure+'</table>';

}

function getArrayList(array,keyVal){

  let arrayList=[];

  if(keyVal) {

  for(var i=0;i<array.length;i++)

    arrayList.push(array[i][keyVal])

  }

  return arrayList;

}

function compareValues(key, order='asc') {

  return function(a, b) {

    if(!a.hasOwnProperty(key) ||

       !b.hasOwnProperty(key)) {

      return 0;

    }

   

    const varA = (typeof a[key] === 'string') ?

      a[key].toUpperCase() : a[key];

    const varB = (typeof b[key] === 'string') ?

      b[key].toUpperCase() : b[key];

     

    let comparison = 0;

    if (varA > varB) {

      comparison = 1;

    } else if (varA < varB) {

      comparison = -1;

    }

    return (

      (order == 'desc') ?

      (comparison * -1) : comparison

    );

  };

}

 

var beforesort =accData.sort(compareValues('acctNum'))

var accountList = getArrayList(beforesort,'acctNum');

 

var result = beforesort.map(function(el,index) {

  var o = Object.assign({}, el);

  var keyVlaue =accountList[index];

  o.balancekey = (accountList[index]==o.acctNum) ? balance[keyVlaue] : 0;

  return o;

});

(person => person.age > 18);

function getObj(Obj,key,value){

  return Obj.filter(data  =>  data[key] == value);

}

var AliceList=getObj(result,'user','Alice');

//1. return the list of array for acctNum

console.log(getArrayList(accData,'acctNum'));

 

//1. return the list of array for user

console.log(getArrayList(accData,'user'));

 

//sortBy(accept 'acctNum' or 'balance')

console.log(

  accData.sort(compareValues('acctNum'))

);

console.log(

  result.sort(compareValues('balancekey'))

);

 

//sortDirection 'asc' or 'desc'

console.log(

  result.sort(compareValues('balancekey','desc'))

);

 

console.log(getObj(result,'user','Alice'));

console.log(getObj(result,'user','Bob'));

 

console.log(

    AliceList.sort(compareValues('balancekey','asc'))

);

 

renderHtml(result);

 
