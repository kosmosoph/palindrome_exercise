/* 
palindrome function takes an string as parameter, 
uses regex to trim all special characters but alphanumerical and converts it to lower case.
In the while loop it compares characters for matches [starting from the first to the last in the string ] 
and if there is no 'false' value, function returns 'true' and vice versa
*/
function palindrome(str) {
  
  const inputStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let count = inputStr.length - 1;
  let index = 0;
  let chckArr = [];

 while(count >= 0) {
    chckArr.push(inputStr[index] === inputStr[count]);
    count--;
    index ++;
 }

  return(!chckArr.includes(false));
}

document.querySelector('#btn').addEventListener('click', () => {
  let input = prompt('Please enter a sentence');
  let result = '';

  if(input !== '' && input !== null) {

    result = palindrome(input);
    let message = () => {
      return result ? 'IS' : 'IS NOT';
    }
    alert(`The sentence you've entered ${message()} palindrome`);
  }
  else 
    alert(`There is no input, please try again!`); 
});