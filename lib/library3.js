const dataTypes= function dataTypes(y)
{
  var toClass ={}.toString;
  //alert(toClass.call(y));
 
  if (typeof y ==='string')
  return y.length;
  else if (typeof y === 'boolean')
  return y;
  else if(typeof y === 'number')
  {
  if (y< 100)
  return 'less than 100';
  else if (y> 100)
  return 'more than 100';
  else
  return 'equal to 100';
  }
  else if (y === null || y === undefined)
  return 'no value';
  
  else if (toClass.call(y) === 'object Function')
  return y(true);
  
  else if (typeof y ===  'object')
    return y[2];
  
  else 
  //alert( toClass.call(y) );
  return true;
};

module.exports = dataTypes;