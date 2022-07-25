var average = function(salary) {
  salary.sort((a,b) => a - b);
  console.log(salary);
  let total = 0; 
  for (let i = 1; i < salary.length - 1; i++)
    total += salary[i];
  return total / (salary.length - 2);
};

/* a solution that uses .reduce with Math.min and Math.max

var average = function(salary) {
    if(salary.length < 3) return 0;
    
    let min = Infinity;
    let max = -Infinity;
    
    const total = salary.reduce((acc, ele) => {
        min = Math.min(min, ele);
        max = Math.max(max, ele);
        
        return acc + ele;
    }, 0);
    
    return (total - min - max)/(salary.length - 2)
};
*/

const arr = [25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000];
console.log(average(arr));


/*
[4000,3000,1000,2000] = 2500
[1000,2000,3000] = 2000
[25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000] = 41700
*/