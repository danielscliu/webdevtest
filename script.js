//
let weirdText = document.querySelector(".paragraph").innerText;

b = weirdText.split('');
counter = 0;

c = b.map(function(c) {
    if (c === ' ') return c;
    if ((counter % 2) === 0) {
        counter++;
        return c.toUpperCase()
    }
    counter++;
    return c.toLowerCase()
});
newText = (c.join(''));

// Added an Element id because cannot get write document to a class to work properly
document.getElementById('thisParagraph').innerText = newText;


// Task # 1 <h2> to lower case
let h2String = document.getElementById("h2element").textContent;
h2String= h2String.toLowerCase();
document.getElementById("h2element").innerText= h2String;



// this gets us the text that the user input
let a = document.getElementById("input_id").value;


// this is the portion we want to append to each of the list


// function below should append the value to my list
// not entirely sure why this doesn't work as intended
function myFunction() {
    let a = document.getElementById("input_id").value;
    a = a.split("|");

    let b = a[0];
    let list = document.querySelectorAll("li");
    for (i = 0; i < list.length; i++) {
        list[i].innerHTML = list[i].innerHTML + a[0];

        let a1String = a[1];

        // Need help trouble shooting ; not sure why this won't work
        function name(h2String, a1String, REPLACE) {
            let re = new RegExp(a1String, 'REPLACE');
            return h2String.replace(re, "REPLACE");
        }
    }
}






// Excess amount of notes below; using the Map function and ++ counter to skip over the blank spaces//
// Personal notes for keeping track of thought process later on
// let thisString = document.getElementsByClassName("first-paragraph");
// let  capitalizedString = '';
//
// [6, 7]
//
//
// for (let i = 0; i < thisString.length; i++) {
//
// }
// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     let splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
//
//     // Step 2. Use the reverse() method to reverse the new created array
//     let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
//
//     // Step 3. Use the join() method to join all elements of the array into a string
//     let joinArray = reverseArray.join("");
//
//     // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
//
//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
//
//
//     for (i = 0 ; 1 < reverseArray.length; i++)
//         if( reverseArray[i] === "" ) {
//
//         } else if (reverseArray[i+1]==="") {
//             reversedArraySplit[i]
//
//         }
// }
//
// reverseString("hello");
//
// // the function below when called upon take every
// // found this function src. Stack Overflow (not entirely sure how the map function works but it works)
//
//
//
// // it is recognizing spaces as a letters and not capitalizing
//     function swapCase(text) {
//         return text.split('').map((c, i) =>
//             i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()
//         ).join('');
//     }
//
// // How to deal with the white space
//     console.log(swapCase("testing if this is going to work"));
