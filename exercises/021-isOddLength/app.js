// function isOddlenght(word1){
//     let letters = word1.length;
//     if ( letters % 2 !== 0) {
//         return true;
//     } else { return false;
//     }
    
// }

function isOddLength(word) {
    return (word.length % 2 > 0);
}

console.log(isOddLength("special"));

