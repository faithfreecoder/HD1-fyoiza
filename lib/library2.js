const getPrimes= function getPrimes(n)
{ 
  var a=2;
  var b;
  var primesArr= [2], primeNum;
  for (b=3;b<=n;b+=2)
       {
           j = Math.sqrt (b);
           primeNum = true;
           for (a = 2; a <= j; a++)
           {
                if (b % a ===0){
                    primeNum = false;
                    break;
                }
            }
            if(primeNum){
                primesArr.push(b);
            }

        }   
  return primesArr;
};

module.exports = getPrimes;
