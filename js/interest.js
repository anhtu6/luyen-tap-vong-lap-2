let firstAmount = parseFloat(prompt('Nhap so tien goc ban dau'));
let month = parseInt(prompt('Nhap so thang vay'));
let interest = parseInt(prompt('Nhap lai suat hang thang tinh theo phan tram'))/100;
let finalInterest =1;
let  finalAmount;

for (i=1;i<month;i++) {
    finalInterest*=(1+interest);
}
parseFloat(finalInterest);


finalAmount= firstAmount*(finalInterest-1);

alert('tien lai phai  tra la'+finalAmount);
