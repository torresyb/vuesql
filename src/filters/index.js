/**
 * @author yangbin
 * @date 2018/4/20
 * @Description: 过滤器
 */
export function formatMoneyFixedTow (num) {
  let money = Number(num).toFixed(2);
  if(money == 'NaN') return '0.00';
  let value =  (money === '0' ? '-' : money.replace(/(\d{1,3})(?=(\d{3})+(?:$|\D))/g,'$1,'));
  let xsd= value.toString().split(".");
  if(xsd.length==1){
    value=value.toString()+".00";
    return value;
  }
  if(xsd.length>1){
    if(xsd[1].length<2){
      value=value.toString()+"0";
    }
  }
  return  value;
}

export function formatMoney (num) {
  let money = Number(num).toFixed(0);
  if(money == 'NaN') return '0';
  let now =  money.replace(/(\d{1,3})(?=(\d{3})+(?:$|\D))/g,'$1,');
  return  now;
}

export function timeFormat (time) {
  let t = global.moment(time).format('YYYY-MM-DD')
  return t
}