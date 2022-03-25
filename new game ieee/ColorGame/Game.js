var arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let colorParts = [];
for(let i = 0;i < 6;i++){
    colorParts.push(arr[Math.floor(Math.random() * arr.length)]);
}
let color = `#${colorParts.join("")}`;
document.getElementById("CG-color").innerHTML = color;

var index = [0,1,2];
var i = Math.floor(Math.random()*3);
document.getElementById(i).style.backgroundColor=color;

index.splice(i,1);

let colorParts1 = [];
for(let j = 0;j < 6;j++){
    colorParts1.push(arr[Math.floor(Math.random() * arr.length)]);
}
color1 = `#${colorParts1.join("")}`;
document.getElementById(index[0]).style.backgroundColor=color1;

colorParts2 = [];
for(let j = 0;j < 6;j++){
    colorParts2.push(arr[Math.floor(Math.random() * arr.length)]);
}
color2 = `#${colorParts2.join("")}`;
document.getElementById(index[1]).style.backgroundColor=color2;

function guess(){
    if(document.activeElement.id==i){
        document.getElementById("CG-color").innerHTML = "CORRECT !!";
        document.getElementById("CG-color").style.color = "darkgreen";
    } else {
        document.getElementById("CG-color").innerHTML = "WRONG !!";
        document.getElementById("CG-color").style.color = "red";
    }
    document.getElementsByClassName("CG-button")[0].removeAttribute("onclick");
    document.getElementsByClassName("CG-button")[1].removeAttribute("onclick");
    document.getElementsByClassName("CG-button")[2].removeAttribute("onclick");
}

const hint = document.getElementById("CG-hint");
const exit = document.getElementById("exit-button");
const container = document.getElementById("CG-hint-container");
const op = document.getElementsByClassName("CG");

hint.addEventListener('click' ,() => {
    container.classList.add('show');
    for(let j = 0;j<op.length;j++){
        op[j].classList.add('opacity');
    }
});

exit.addEventListener('click' ,() => {
    container.classList.remove('show');
    for(let j = 0;j<op.length;j++){
        op[j].classList.remove('opacity');
    }
});

function replay(){
    window.location.reload();
}

function home(){
    location.replace('../IEEE-Project.html');
}
