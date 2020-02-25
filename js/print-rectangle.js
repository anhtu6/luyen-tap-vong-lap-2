let html ='';
let width = '';
let bigside ='';

for (i=1;i<=20;i++) {
    width+="*";
}


let side = "<pre>*";
for (j=1;j<=20;j++) {
    side+=' ';
}
side+="*</pre>";

for(k=1;k<=4;k++) {

    bigside +=side;
}
console.log(bigside)
html+=width+bigside+width;
document.write(html);
