/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useRef, useState} from 'react';
import CardComponent from './CardComponent';
export default ({
    title,    
    price,
    discountPercentage,
    rating,
    description,
    thumbnail,
    date,
    
})=> {
  
    const onMount =useRef(true) 

    useEffect(()=>{
        // execute onload
        if(onMount.current){
            console.log(title,    
                price,
                discountPercentage,
                rating,
                description,
                thumbnail,
                date,)
        }

        
        return () =>{
            // trigger component unmount
            onMount.current=false
        }

    },[])


  

    return(
        <CardComponent 
        
        title={title}
        price={price}
        discountPercentage={discountPercentage}
        rating={rating}
        description={description}
        thumbnail={thumbnail}
        date={date}
        />
    )
}
