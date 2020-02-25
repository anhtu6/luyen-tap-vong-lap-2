let a=1,b=0,temp;

for(i=0;i<20;i++) {
    temp =a;        //temp =1
    a = a+b;        //a da cong vao
    b =  temp       //b la a cu
    document.write(a+', ');

}