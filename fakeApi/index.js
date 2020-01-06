
function getPrescitpions(req, res, next) {
const normalizedPath = [
  "https://i.ibb.co/smGTWh1/100-P0001.jpg",
  "https://i.ibb.co/ng5R1Nq/1005-P0003.jpg",
  "https://i.ibb.co/vDwYL8k/1011-P0001.jpg",
  "https://i.ibb.co/R2Rsdtj/1012-P0002.jpg",
  "https://i.ibb.co/W0VVcVp/1013-P0001.jpg"
];
  console.log('normalizedPath', normalizedPath); 
  const prescriptions =  normalizedPath.map(image => image);
  res.status(200).send(prescriptions);
}


module.exports = {getPrescitpions};
