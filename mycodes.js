const nums = [2,3,4,5,6,7];
const target = 9;

const lookup = {}
const result = []

nums.forEach((num,i)=>{
    //itteration1 = 2,0
    //itt 2 = 3,1
    //itt 3 = 4,2
    //itt 4 = 5,3
    //itt 5 = 6,4
    //itt 6 = 7,5



    const expectnum = target - num
    // expectnum = 7 (9-2)
    // expectnum = 6 (9-3)
    // expectnum = 5 (9-4)
    // expectnum = 4 (9-5)
    // expectnum = 3 (9-6)
    // expectnum = 2 (9-7)



    //lookup[7] ===undefined
    //lookup[6] ===undefined
    //lookup[5] === undefned
    if(lookup[expectnum] !== undefined){
        //lookup[4] ===2 
        //lookup[3] == 1
        //lookup[2] == 0
        result.push(lookup[expectnum],i)
        //result{[2,3],[1,4],[0,6]}
    }

    lookup[num] = i 
    //{2,0}
    //{3,1}
    //{4,2}
    //{5,3}
    //{6.4}
    //{7,5}
    
});

console.log(result)




//////////////////////////////////////////////////////////////////////////////////////
function simplepromise(){
  return new Promise((resolve,reject)=>{
    resolve("it is simple async-await")
  })
}

async function simpleasyncawait(){
  const result = await simplepromise();
  conole.log(result,"result")
}

simpleasyncawait().catch((err)=>{
  console.error(err,"error")
})

//////////////////////////////////////////////////////////////////////////////////////////////////
function simpleasyncawait(){
    return new Promise((resolve,reject) => {
        resolve("hello its simple async-await")
    })
} 

async function printasyncawait(){
    try{
        const result  = await simpleasyncawait()
        console.log(result,"result")
    }catch(err){
        console.log(err,"error")
    }
}


printasyncawait()
///////////////////////////////////////////////////////////////////////////////////////////////////

function add(){
  return 1+2
}

async function giveresult(){
  const result = await add()
  console.log(result,"result")
}

giveresult().catch((err)=>{
  console.error(err,"error")
})

//////////////////////////////////////////////////////////////////////////////////////////////////