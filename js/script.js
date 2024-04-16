/**VARIABLES */

/**FUNCIONES*/

const getMean = (array) =>  array.reduce((acc, el) => acc + el, 0) / array.length;
const getMedian = (array) =>{
  const sorted = array.sort(a,b=> a-b);
  const median = array.length % 2 === 0? 
    getMean([sorted[array.length / 2],sorted[array.length / 2 - 1]]): 
    sorted[Math.floor(array.length / 2)];
    return median;
}
const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(",");
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));
  const mean = getMean(numbers);
  document.querySelector("#mean").textContent = mean;
};
