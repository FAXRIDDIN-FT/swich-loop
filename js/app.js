{ //masala 1

    let day = 13

    switch (day) {
        case 1:
            console.log("dushanba");
            break;
        case 2:
            console.log("seshanba");
            break;
        case 3:
            console.log("chorshanba");
            break;
        case 4:
            console.log("payshanba");
            break;
        case 5:
            console.log("juma");
            break;
        case 6:
            console.log("shanba");
            break;
        case 7:
            console.log("yakshanba");
            break;
        default:
            console.log("bunaqa hafta yo");
    }
}
{ //masala 2
    let k = 3

    switch (k) {
        case 1:
            console.log("yomon");
            break;
        case 2:
            console.log("qoniqarsiz");
            break;
        case 3:
            console.log("qoniqarli");
            break;
        case 4:
            console.log("yaxshi");
            break;
        case 5:
            console.log("A'lo");
            break
        default:
            console.log("xato son kiritildi");

    }
}
{ //masala 3
    let season = 8

    switch (season) {
        case 1:
        case 2:
        case 12:
            console.log("qish");
            break
        case 3:
        case 4:
        case 5:
            console.log("baxor");
            break
        case 6:
        case 7:
        case 8:
            console.log("yoz");
            break
        case 9:
        case 10:
        case 11:
            console.log(kuz);
            break
        default:
            console.log("bunaqa oy yoq");



    }
}
{ //masala 4
    let month = 11
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            console.log(month, "oyda 31 kun bor.");
            break;
        case 4: case 6: case 9: case 11:
            console.log(month, "-oyda 30 kun bor.");
            break;
        case 2:
            console.log(month, "-oyda 28 yoki 29 kun bor");
        default:
            console.log("Noto‘g‘ri oy raqami! 1 dan 12 gacha bo‘lgan son kiriting.");

    }
}
{ //masala 5 
    let a = 3
    let b = 3
    let number = 1
    switch (number) {
        case 1:
            console.log(a + b);
            break;
        case 2:
            console.log(a - b);
            break;
        case 3:
            console.log(a / b);
            break;
        case 4:
            console.log(a * b);
            break;
        default:
            console.log("1dan 4gacha bolgan sonlar kiriting");


    }
}
{ // masala 6
    let olcham = 3;
    let metr = 1;
    switch (metr) {
        case 1:
            console.log("1dm = 10m", olcham * 10, "m");
            break;
        case 2:
            console.log("1km = 1000m", olcham * 1000, "m");
            break;
        case 3:
            console.log("1m = 1m", olcham * 1, "m");
            break;
        case 4:
            console.log("1mm = 0.0001m", olcham * 0.0001, "m");
            break;
        case 5:
            console.log("1sm =  0.01m", olcham * 0.01, "m");
    }
}
{ // masala 7 
    let massa = 3;
    let kg = 5;
    switch (kg) {
        case 1:
            console.log(massa * 1, "kg");
            break;
        case 2:
            console.log(massa * 0.000001, "kg");
            break;
        case 3:
            console.log(massa * 0.001, "kg");
            break;
        case 4:
            console.log(massa * 10000, "kg");
            break;
        case 5:
            console.log(massa * 0.01, "kg");
    }
}
{ // masala 8  

    let kun = 30;
    let oy = 6;
    let kunlar;

    switch (oy) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            kunlar = 31;
            break;
        case 4: case 6: case 9: case 11:
            kunlar = 30;
            break;
        case 2:
            kunlar = 28;
            break;
        default:
            console.log("Noto'g'ri oy kiritildi");
    }
    if (kun > 0 && kun <= kunlar) {
        console.log(`Kiritilgan oy to'g'ri ${kun}-${oy}`);
    } else {
        console.log("Noto'g'ri oy kiritildi");
    }

}
{ // masala 9
    let day = 28;
    let month = 2;
    let days;

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        case 2:
            days = 28;
            break;
        default:
            console.log("Noto'g'ri oy kiritildi");
            days = -1;
    }
    if (day > 0 && day <= days) {
        day++;
        if (day > days) {
            month++;
            if (month > 12) {
                month = 1;
            }
        }
        console.log(`Keyingi sana" ${day}-${month}`);
    } else {
        console.log("Noto'g'ri sana kiritildi");
    }
}
{ // masala 10
    let y = "j";
    let x = 1;

    let ufq = "";
    let yol = "";

    switch (y) {
        case "s":
            ufq = "north";
            break;
        case "j":
            ufq = "south";
            break;
    }

    switch (x) {
        case 0:
            yol = "oldinga";
            break;
        case 1:
            yol = "chapga";
    }
    console.log(yol + " on", ufq);
}





{ // 2.1 masala
    let pinCode = null
    pinCode = "12345"

    let code = prompt("code kiriting")
    if (pinCode === code) {
        console.log("hush keliblibsiz");
    } else {
        console.log("xato kod kiritingiz");
    }
}
{ // 2.2 masala
    let a = 10;
    let b = 6;
    let c = 9;
    let son;
    if (a >= b && a >= c) {
        largest = a;
    } else if (b >= a && b >= c) {
        largest = b;
    } else {
        largest = c;
    }
    console.log("katta sonni top ", son);
}
{ // 2.2 masala
    let boolen = true
    if (boolen) {
        console.log("siz tizimga kirdingiz");

    } else {
        console.log("iltimos royhatdan o'ting");

    }
}
{ // 2.4 masala
    let w = 10
    let h = 1
    if (w === h) {
        console.log("bu kvadrat");

    } else {
        console.log("bu tortburchak");

    }
}
{ // 2.5 masala
    let a = -2
    let b = -2

    let c = (a + b)
    if (c > 0) {
        console.log(c, "musbat son yig'indisi");

    } else {
        console.log(c, "manfiy son yigindisi");

    }

}
{ // 2.6 masala
    let temperature = 33
    switch (temperature) {
        case 40:
        case 39:
        case 38:
        case 37:
        case 36:
        case 35:
        case 34:
        case 33:
        case 32:
        case 31:
            console.log("juda issiq soyada dam oling");
            break;
        case 30:
        case 29:
        case 28:
        case 27:
        case 26:
        case 25:
        case 24:
        case 23:
        case 22:
        case 21:
            console.log("ob-havo yaxshi sayr qiling");
            break;
        case 19:
        case 18:
        case 17:
        case 16:
        case 15:
        case 14:
        case 13:
        case 12:
        case 11:
        case 10:
            console.log("salqin issiq kiyinig");
            break;
        case 10:
        case 9:
        case 8:
        case 7:
        case 6:
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
            console.log("juda sovuq uyda qoling");
            break;
        default:
            console.log("1 /30 gacha bolgan sonlarni kiriting");



    }
}











