/**VARIABLES */

/**FUNCIONES*/

const getMean = (array) =>  array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) =>{
  const sorted = array.sort((a,b) => a-b);
  const median = array.length % 2 === 0? 
    getMean([sorted[array.length / 2],sorted[array.length / 2 - 1]]): 
    sorted[Math.floor(array.length / 2)];
    return median;
}

const getMode = (array) =>{
  debugger
  const counts = {};
  array.forEach(el => counts[el] = (counts[el] || 0) + 1);
  if(new Set(Object.values(counts)).size === 1  ){ //Con object.values devuelve el valor de los objetos
    return null
  }
  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
  const mode = Object.keys(counts).filter(el => counts[el] === counts[highest]);
  return mode.join(", ");
}

const getRange = (array) =>{
  return Math.max(...array) - Math.min(...array);
}

const getVariance = (array) => {
  const mean = getMean(array);
 const variance = array.reduce((acc,el) => {
  const difference = el - mean;
  const squared = difference ** 2;
  return acc + squared;
 },0)/ array.length;
 return variance;
}



function calculate() {
  const value = document.querySelector("#numbers").value;
  const array = value.split(",");
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
  document.querySelector("#variance").textContent = variance;
  
}
