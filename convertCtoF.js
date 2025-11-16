function convertCtoF(celsius) {
  const fahrein = (celsius * 9) / 5 + 32;
  return fahrein;
}
console.log(convertCtoF(30)); // 86
console.log(convertCtoF(0)); // 32
