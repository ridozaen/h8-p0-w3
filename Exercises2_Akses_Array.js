var input = 'hello world!';
var output = '';
var i = input.length-1;
while(i >= 0){
    output = output + input[i];
    i=i-1;
}
console.log(output);