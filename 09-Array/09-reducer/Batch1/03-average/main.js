const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
  ];



// let weightAverage = scores.reduce((sumScore,item, index, arr) =>{
//       return (sumScore += item.score * item.weight)}
//       ,0)


function calAverage(array) {
  let summaryObj = array.reduce((acc, item, index)=>{
    acc.score += item.score * item.weight
    acc.weight += item.weight
    return acc
  }, {score:0}, {weight:0} )
}
calAverage(scores)
