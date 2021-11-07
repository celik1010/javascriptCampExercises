
/********************ODEV 1 ASALSAYI BULMA**************************/
function findPrime(...numbers) {    
    for (let i  = 0; i < numbers.length; i++) {
        let control = true
        for (let j = 2; j <= numbers[i]/2; j++) {
            if (numbers[i]%j ==0) {
                control = false
            }                              
        }      
         if (control) {
                console.log(numbers[i]+" Asaldır")
            }    else{
                console.log(numbers[i]+" Asal değildir")
            }
    }
}

findPrime(7,3,86,45,89,97,7,11,23)
/*******************ODEV 2 ARKADAS SAYILAR MI? *************************/
function isFriendNumber(sayi1,sayi2) {
    let totalDivisorOfSayi1 = 0
    let totalDivisorOfSayi2 = 0
    for (let i = 1; i <= sayi1/2; i++) {
        if (sayi1 % i == 0) {
            totalDivisorOfSayi1 = totalDivisorOfSayi1 + i
        }        
    }
    if (totalDivisorOfSayi1 == sayi2) {
        for (let i = 1; i <= sayi2/2; i++) {
            if (sayi2 % i == 0) {
                totalDivisorOfSayi2 = totalDivisorOfSayi2 + i
            }        
        }
        if (totalDivisorOfSayi2 == sayi1) {
            console.log("Arkadaş sayılardir.")
        }else{
            console.log("Arkadaş sayılar değillerdir.")
        }
    }else{
        console.log("Arkadaş sayılar değillerdir.")
    }
}
isFriendNumber(10,8)

/****************ODEV 3 MÜKEMMEL SAYILAR*********************/
console.log("1000 e kadar olan mükemmel sayılar.")
for (let i = 1; i < 1000; i++) {
    let sayi1BolenToplam = 0;
    for (let j = 1; j < i; j++) {
        if (i%j == 0) {
            sayi1BolenToplam = sayi1BolenToplam +j;
        }
    }
    if (i == sayi1BolenToplam) {
        console.log(i)
    }
}

/***********ODEV 4 1000 e kadar olan ASAL SAYILAR****************/
for (let i = 2; i < 1000; i++) {
    let isPrime = true;
    for (let j = 2; j <= i/2; j++) {
        if (i%j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i)
    }
}
/***************10.000 ekadar olan arkadaş sayıları bulur******************************************/
for (let i = 210; i < 10000; i++) {
    let sayi1BolenToplam = 0;
    let sayi2BolenToplam = 0;
    for (let j = 1; j < i; j++) {
        if (i%j == 0) {
            sayi1BolenToplam = sayi1BolenToplam +j;
        }
    }
    for (let j = 1; j < sayi1BolenToplam; j++) {
        if (sayi1BolenToplam % j == 0) {
            sayi2BolenToplam = sayi2BolenToplam + j;
        }
    }
    if (sayi2BolenToplam == i && sayi1BolenToplam != i ) {
        console.log(sayi1BolenToplam + "--"+i)
    }
}
