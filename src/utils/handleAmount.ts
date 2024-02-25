export function handleAmount(amount:number){
  const result = amount / 100; // 将金额单位从分转换为元
  return  result.toFixed(2); // 保留两位小数
}