// Ejercicio 1
// Escribe una función llamada numDuplicados
// que reciba un string
// y retorne el número de caracteres que aparecen más de una vez.

function numDuplicados(string){
    let letters = string.split("");
    let result = [];
    for(i = 0; i < letters.length; ++i){
        // console.log(string[i]);
        let caracter = letters.filter(a => a === string[i]);
        // console.log(caracter);
        let value = caracter.length;
        // console.log(value);
        if(value > 1){
            result.push(letters[i]);
        }
    }
    let res = new Set(result);
    let resF = [...res].length;

    return resF;
};

console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0


// Ejercicio 2
// Escribe una función llamada `frecuencias`
// que reciba una cadena de texto
// y retorne un objeto con el número de veces que aparece cada caracter
// (exceptuando el espacio en blanco)

function frecuencias(text){
    let res = [];
    let notSpace = text.replace(/ /g, "").split("");
    // console.log(typeof(notSpace)); //obj
    // console.log(typeof(res)); //obj
    // console.log(typeof(text)); //string
    for(i = 0; i < notSpace.length; ++i){
        let abc = notSpace.filter(a => a === notSpace[i]);
        // console.log(abc);
        let value = abc.length;
        // console.log(value);
        res.push(notSpace[i] + ": " + value);
    }
    //metodo 1:
    let restult = res.filter((a, index) => res.indexOf(a) === index);
    // console.log(restult);
    //metodo 2:
    let newRes = new Set(res);
    let respuesta = [...newRes];
    console.log(respuesta);
    return restult;
};

console.log(frecuencias("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }


// Ejercicio 3
// Crea una función llamada `caracteresEnComun`
// que recibe dos argumentos: `str1` y `str2`.
// La función debe retornar un arreglo con todos los caracteres que las dos cadenas tienen en común.

function caracteresEnComun(str1, str2){
    // let res = [];
    // console.log(res);
    let letters1 = str1.split("");
    let letters2 = str2.split("");

    let only1 = new Set(letters1);
    let onlyLetter1 = [...only1];
    let only2 = new Set(letters2);
    let onlyLetter2 = [...only2];
    // console.log(onlyLetter1, onlyLetter2);

    if(onlyLetter1.length >= onlyLetter2.length){
        let res1 = [];
        for(i = 0; i < onlyLetter1.length; ++i){
            if((onlyLetter1.some(a => a === onlyLetter2[i])) === true){
                console.log(`"${onlyLetter2[i]}"`);
                res1.push(`"${onlyLetter2[i]}"`);
            }
        }
        return console.log(res1);
    } else{
        let res2 = [];
        for(i = 0; i < onlyLetter2.length; ++i){
            if((onlyLetter2.some(a => a === onlyLetter1[i])) === true){
                // console.log(`"${onlyLetter1[i]}"`);
                res2.push(`"${onlyLetter1[i]}"`);
            }
        }
        return console.log(res2);
    }
    return;
};

caracteresEnComun("Hola", "Mundo"); // ["o"]
caracteresEnComun("German", "Gabriela"); // ["G", "e", "r", "a"]
caracteresEnComun("Hola", "Bye"); // []


// Ejercicio 4
// Escribir una función llamada `ajustarTexto` que reciba dos argumentos:
// un string y un número (que representa una longitud).
// La función debe retornar la cadena ajustada a la longitud recibida.
// Si la longitud de la cadena es mayor al número, debes recortar la cadena.
// De lo contrario agrega espacios en blanco hasta completar la longitud.

function ajustarTexto(str, num){
    let res = [];
    if(str === ""){
        return ('" "');
    }else if(num > str.length){
        let letterStr = str.split("");
        // console.log(letterStr);
        newArray = [];
        for(i =0; i < num; ++i){
            // console.log(letterStr[i])
            if(letterStr[i] == undefined){
                newArray.push(" ");
            }
        }
        let empySpace = newArray.join("");
        let testConcat = str.concat(empySpace);
        return `"${testConcat}"`;
    }
    let result = str.slice(0, num);
    res.push(`"${result}"`);
    return res;
};

console.log(`${ajustarTexto("", 3)}`) // " "
console.log(`${ajustarTexto("hola", 2)}`) // "ho"
console.log(`${ajustarTexto("Hola", 0)}`) // ""
console.log(`${ajustarTexto("Hola", 5)}`) // "Hola "

// Ejercicio 5
// Given two strings s and t,
// return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the lettersof a
// different word or phrase, typically using all the original letters exactly once.

function anagram(str1, str2){
    if(str1.length === str2.length){
        let letterStr1 = str1.toLowerCase().split("").sort();
        let newStr1 = letterStr1.join("");
        // console.log(newStr1);
        let letterStr2 = str2.toLowerCase().split("").sort();
        let newStr2 = letterStr2.join("");
        // console.log(newStr2);
        if(newStr1 === newStr2){
            console.log("Is a Anagram");
        }
        console.log("Not is Anagram")
    }
    return ;
};

anagram("anagram", "nagaram"); //true
anagram("rat", "car"); //false
anagram("tomate", "tomates") //false

// Ejercicio 6
// Given an integer array nums,
// move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

function moveNumbers(num){
    let newArray = [];
    let firstArray = [];
    for( i = 0; i < num.length; ++i){
        // console.log(num[i]);
        if(num[i] === 0){
            newArray.push(0)
        }else{
            firstArray.push(num[i]);
        }
    }
    // console.log(newArray);
    // console.log(firstArray);
    return console.log(firstArray.concat(newArray));
};

moveNumbers([0,1,0,3,12]); //[1,3,12,0,0]

// Ejercicio 7
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

function calc(num, target){
    // console.log(num);
    // console.log(target);
    for(i = 1; i < num.length; ++i){
        if((num[i - 1] + num[i]) === target){
            // console.log("Working!");
            console.log([(i - 1), i]);
            break;
        }
    }
    return;
};

calc([2,7,11,15], 9); //[0,1]
calc([3,2,4], 6); //[1,2]
calc([3,3], 6); //[0,1]
calc([2,7,11,15,2,7], 9); //[0,1]