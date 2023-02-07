import React, { useEffect, useState } from 'react'
import Product from './Product'
function List(){
     useEffect(()=>{
     fetch('https://dummyjson.com/products').then((res)=>{
        // console.log('ss');
        // res.json().then((data)=>console.log(data));
     res.json().then((data)=>localStorage.setItem("data",JSON.stringify(data)));
    //  console.log(res);
     });
 },[])
    
    let list=JSON.parse(localStorage.getItem('data')).products;
    // console.log(arr);
    console.log(list);
    let[arr,setArr]=useState(list);

    function filter(type){
        if(type=="all"){
            setArr(list);
        }
        else
        {
            let newArr= list.filter((item)=>item.category==type);//هنا حطيت list مكان arr عشان اول مره لما اجي افلتر هتكون arr عباره عن ناتج حاجه واحده بس مثلا زي اللابات فعشان كده غيرتها ب list عشان يبدا يفلتر من كل الداتا ال هو الاراي ال بجيبه هنا من الوكل ستورج

            setArr(newArr)
        }
    }
    function searchPoducts(e){
        let searchTerm=e.target.value;
        let newArr= list.filter((item)=>item.title.toLowerCase().includes(searchTerm.toLowerCase()));//هنا حطيت list مكان arr عشان اول مره لما اجي افلتر هتكون arr عباره عن ناتج حاجه واحده بس مثلا زي اللابات فعشان كده غيرتها ب list عشان يبدا يفلتر من كل الداتا ال هو الاراي ال بجيبه هنا من الوكل ستورج

        setArr(newArr)
        // console.log(e.target.value);
    }
    function sortProducts(){
        let newArr =list.sort((a, b)=> (a.price > b.price ? 1 : -1));
        console.log(newArr);
        setArr([...newArr]);
    }

    return (
        <div className='container'>
        <button className='btn btn-danger mx-2'  onClick={sortProducts}>Sort</button>
        <button className='btn btn-danger mx-2'  onClick={()=>filter('all')}>All</button>
        <button className='btn btn-danger mx-2 mt-2'  onClick={()=>filter('smartphones')}>Smart Phones</button>
        <button className='btn btn-danger mx-2 mt-2'  onClick={()=>filter('laptops')}>Laptops</button>
        <button className='btn btn-danger mx-2 mt-2'  onClick={()=>filter('skincare')}>Skincare</button>
        <button className='btn btn-danger mx-2 mt-2'  onClick={()=>filter('groceries')}>Groceries</button>
        <input className='form-control m-3' type={'text'} placeholder='Search here' onInput={searchPoducts}/>
            <div className='row'>
            {arr.map((item,index)=><div key={index} className='col-md-4 mt-3'><Product data={item}/></div>)}   
       </div>
        </div>
          
    )
}

export default List