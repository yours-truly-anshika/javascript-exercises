let arr = ['hello', 'world', 'search', 'good']

for(let i = 0; i < arr.length; i++) {
  if(arr[i] === 'search') {
    console.log(i);
  } else {
    console.log(-1);
  }
}