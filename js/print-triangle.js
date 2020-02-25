let text1 = '', text2 = '';

for (j = 1; j <= 5; j++) {
    text2 += "*";
    text1 += text2 + "<br>";

}


document.getElementById('p1').innerHTML = text1;


let text3 = '',text4 = '',text5;
for (i=1;i<=5;i++) {
    text5+="*";
}


//console.log(text5);

for (j =0;j<5;j++) {
    text5= text5.substring(0,text5.length-1);
    console.log(text5);
    text3+=text5+"<br>";

}


document.getElementById('p2').innerHTML = text3;