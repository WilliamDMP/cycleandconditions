// this is a program that allows me to enter any given words to a list until i decide to stop it
// first i need to create an empty array
let list = [];
// then i need to push elements to the array given by the user with a condition and a cycle
while(true) {
    let word = prompt('Insert an item to add to the list');
    if(word === 'stop') {
        break;
    } else {
        list.push(word);
        console.log(list);    
    }
}
