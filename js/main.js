let km = prompt(`Inserisci i km da percorrere`);
//let age = prompt(`Inserisci l'età del viaggiatore`);

if(isNaN(km)){
    console.log(`Devi inserire un numero, ricarica`)
} else if(Number(km) === 0){
    console.log(`Inserisci un numero più grande di 0, ricarica`)
} else{
    km = Number(km)
    const grossPrice = (km*0.21)
    const gpEuro = `€${grossPrice.toFixed(2).replace(".",",")} `
    console.log(gpEuro)
} 


