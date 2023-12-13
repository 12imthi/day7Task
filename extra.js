const persons = [
    {
        id: 1,
        name : 'imthiyaz',
        age: 22,
        place: 'Kerala',
        bankBlance: 100000,
        department: 'B.A (Tamil)',
    },
    {
        id: 2,
        name : 'bittu',
        age: 21,
        place: 'Karnataka',
        bankBlance: 1234000,
        department: 'B.sc (maths)',
    },
    {
        id: 3,
        name : 'mukil',
        age: 20,
        place: 'Tamilnadu',
        bankBlance: 300000,
        department: 'B.sc (physics)',
    },
    {
        id: 4,
        name : 'mani',
        age: 32,
        place: 'Kerala',
        bankBlance: 1450000,
        department: 'B.sc (maths)',
    },
    {
        id: 5,
        name : 'rithik',
        age: 20,
        place: 'Karnataka',
        bankBlance: 900000,
        department: 'B.A (english)',
    },
    {
        id: 6,
        name : 'manas',
        age: 28,
        place: 'Tamilnadu',
        bankBlance:700000,
        department: 'B.A (Tamil)',
    },
    {
        id: 7,
        name : 'mirmoy',
        age: 29,
        place: 'Kerala',
        bankBlance: 450800,
        department: 'B.sc (chemistry)',
    },
    {
        id: 8,
        name : 'prince',
        age: 22,
        place: 'Karnataka',
        bankBlance: 330000,
        department: 'B.A (Tamil)',
    },
    {
        id: 9,
        name : 'ganesh',
        age: 21,
        place: 'Tamilnadu',
        bankBlance: 440000,
        department: 'B.sc (physics)',
    },
    {
        id: 10,
        name : 'anuba',
        age: 32,
        place: 'Kerala',
        bankBlance: 550000,
        department: 'B.A (english)',
    },
];

var demo = document.getElementById('demo');
var demo1 = document.getElementById('demo1');
var demo2 = document.getElementById('demo2');
var demo3 = document.getElementById('demo3');

const person = persons.filter(p => p.place == 'Kerala');

console.log(person);

var count = 1;
function search() {
    demo.textContent = ''
    for(var i=0;i<person.length;i++) {
        const div = document.createElement('p')
    div.innerHTML = `${count++} = ${person[i].name}`;
    demo.appendChild(div)
    console.log(div);
    }
    count++;
}

const person1 = persons.filter(e => e.age <= 25);

console.log(person1);

function search1() {
    demo1.textContent='';
    person1.forEach((e,c) =>{
        const node =document.createElement('p');
        node.textContent=`${c+1} :  Name: ${e.name}, Department${e.department}`;
        demo1.appendChild(node);
    })

}


const person2 = persons.reduce((a,e) => a + e.bankBlance , 0);
console.log(person2);

function search2() {
    demo2.innerHTML =''
    var div = document.createElement('p');
    div.innerHTML="Total Bank Balance  is Rs."+person2;
    demo2.appendChild(div);
}

const person3 = persons.map(e => e.department);

console.log(person3);
function search3(){ 
    demo3.innerHTML = ''
    for(var i=0;i<person3.length;i++) {
       
        if(person3[i] == 'B.A (Tamil)') {
           console.log(person3[i]);
           var div = document.createElement('p')
           div.textContent = `Name : ${persons[i].name} : place :  ${persons[i].place}`
           demo3.appendChild(div)
        }
       
       }

    }

