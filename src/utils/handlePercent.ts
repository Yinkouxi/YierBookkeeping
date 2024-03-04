export function handlePercent(amount:number,total:number):string {
  //返回amount占total的百分比，保留两位小数 
  const percentage = (amount / total) * 100;
  const formattedPercentage = percentage.toFixed(2);
  return `${formattedPercentage}%`;
}
