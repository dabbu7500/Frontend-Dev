const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14",null, undefined];
let number=[];
let bool=[];
let str=[];
let valid=[];
let invalid=[];
for(let i of apiData)
{
    number.push(Number(i));
    str.push(String(i));
    bool.push(Boolean(i));
    if(!isNaN(i) && i!=" " && i!="" && i!=null)
    {
        
        valid.push(i);
    }
    else{
        invalid.push(i);
    }

}
console.log(number);
console.log(str);
console.log(bool);
console.log(valid);
console.log(invalid);
