const n = 12345.6789;
const comma = n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

console.log(comma);
