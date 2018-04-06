var input = 'hello world!';

function balikString(str){
var output = '';
var i = str.length-1;
while(i >= 0){
    output = output + str[i];
    i=i-1;
}
return output;
}
console.log(balikString(input));
