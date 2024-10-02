let m=prompt();
let n=prompt();
let sum=0;
if (m>n)
{
    console.log("0");
}
else
{
    for(i=m;i<=n;i++)
    {
        sum+=i*i*i;
    }
console.log(sum);
}