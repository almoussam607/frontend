console.log('46-while-loop');

//  FOR LOOP
for (let index1 = 0; index1 < 5; index1++) {
    console.log('Foor Loop - Index:', index1);
}

//  WHILE LOOP
let index2 = 0;

while (index2 < 5) {
    console.log('While Loop - Index:', index2);
    // do not ever forget to change the variable that is used in the logical statement. Otherwise this will put you in an infinite loop. Which will break the browser.
    index2++;
}
