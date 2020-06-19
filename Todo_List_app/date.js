//creating custom pacakges..


module.exports.getDate=function(){
var today = new Date()
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
date=today.toLocaleDateString(undefined, options)
return date
}

//modules.exports=exports
exports.getDay=function(){
  var today = new Date()
  const options = { weekday: 'long'}
  day=today.toLocaleDateString(undefined, options)
  return day

}
