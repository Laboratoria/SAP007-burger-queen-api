module.exports = {
  getExamples: (req, res, next) => {
    console.log('você também pode utilizar o console para visualizar =)');
    res.send('Request getExamples feita');
  },
  getOtherExample: (req, res, next) => {
    console.log('outro console =)');
    res.send('Request getOtherExample feita');
  }
};
