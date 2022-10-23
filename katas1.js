<!--questão 1 -->

function cubicSquare(){
    let output = ''
      
    for(let i = 1; i <= 10; i++){ 
        output +=  `${i**3}, ` // traz o número elevado ao cubo
    }

    return output;

}

cubicSquare();


<!--questão 2  -->

function divisiblesFor(a, b){
  let output = "";
  for(let i = 1; i <= a; i++){
    if(i % b == 0){
      output += `${i}, `
    }
    
  }
  return output;
}

divisiblesFor(100, 10);

<!--questão 3 -->

function stringElement(a, b){ // recebendo dois parametros 
    let string = a.split(""); // transformando a string em array
    let result =  string.splice(b, 4); // pega o caractere da posição informada no splice

    return `${result}`.toUpperCase(); // traz o resultado em maisculo.
}
stringElement('guilherme', 5);



<!--questão 4 -->

function stringSlicer(a, b){
  let string = a.split("").splice(0, b);

  return string;

}
stringSlicer('cavalo', 3);


<!--questão 5 -->

function stringRest(a, b){
  let string = a.split("").splice(b).join('');
  
  return string;
}
stringRest('houseofdragons', 2);


<!--questão 6 -->
 // ler quantas vogais tem em uma palavra
  function countVowels(a){
    let output = 0;
    let string = a.split("");
    let vowels = ["a" , "e", "i", "o", "u"];
       for(let i = 0; i < string.length; i++){ // percorre a string 
        for(let j = 0; j < vowels.length; j++){ // percorre o array de vogais
          if(string[i] === vowels[j]){
             output++;
            }
          }
       }
    return output;   
  }

  countVowels();

<!--questão 7 -->

    function countTextOccurrences(a, b){
      let output = 0;
      let string = a.split("");
      for(let i = 0; i < string.length; i++){
        if(string[i].toLowerCase() == b.toLowerCase()){
          output++;
        }
      }
      return output;
    } 
    countTextOccurrences();

<!--questão 8 -->

 function textBackwards(a){
  let string = a.split("").reverse().join('');
  return string;
 }

 textBackwards('houseofdragons');


<!--questão 9 -->

function removeBlank(a) {
  let string = a.split(" ").join('');
  return string;
}
removeBlank();


<!--questão 10 --> 


function encryptText(str){
  let string = str.split("")
  let a = "x";
  let e = "y";
  let i = "w";
  let o = "k";
  let u = "z";

  for(let j = 0; j < string.length; j++){
    if(string[j] === a[0]){
      string.splice(j, 1,  a[1]);
    }
    if(string[j] === e[0]){
      string.splice(j, 1,  a[1]);
    }
    if(string[j] === i[0]){
      string.splice(j, 1, a[1]);
    }
    if(string[j] === o[0]){
      string.splice(j, 1, a[1]);
    }
    if(string[j] === u[0]){
      string.splice(j, 1, a[1]);
    }
    if(string[j] === a[0].toUpperCase()){
      string.splice(j, 1, a[1].toLocaleUpperCase());
    }
    if(string[j] === a[0].toUpperCase()){
      string.splice(j, 1, e[1].toLocaleUpperCase());
    }
    if(string[j] === a[0].toUpperCase()){
      string.splice(j, 1, i[1].toLocaleUpperCase());
    }
    if(string[j] === a[0].toUpperCase()){
      string.splice(j, 1, o[1].toLocaleUpperCase());
    }
    if(string[j] === a[0].toUpperCase()){
      string.splice(j, 1, u[1].toLocaleUpperCase());
    }
  }
   console.log(string.join(''));
   
}

encryptText();


