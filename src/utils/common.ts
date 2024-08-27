export const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

export const product = (num1: number, num2: number): number => {
  return num1 * num2;
};

export const fibonacci = (term: number): number[] => {
  if (term < 0) {
    throw new Error("Input should be a non-negative integer.");
  }

  const series: number[] = [];

  if (term === 0) {
    series.push(0);
    return series;
  }
  

  let a = 0;
  let b = 1;
  let next = 0;
  series.push(0,1)

  for (let i = 2; i <= term; i++) {
    
    next = a + b;
    series.push(next);
    a = b;
    b = next;
  }

  return series;
};

export const fetchData=async(url:string)=>{

  const res=await fetch(url);

  const json=await res.json();

  return json
}

export const timeoutMock=()=>{

  const data:any=[]

  return new Promise((resolve)=>{
    setTimeout(() => {
      data.push({success:true,result:"Successfully fetched"});
      resolve(data)
    }, 3000);
  })

}


