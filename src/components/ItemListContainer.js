import { useEffect, useState } from "react";


const ItemListContainer = ({greeting})=>{
    const [items,setItems] =useState([]);
    useEffect(() =>{
    const traerProducts = () =>{
        return new Promise((res,rej) =>{
            setTimeout (() => {
                res(products);
            },2000);
            })
        }
    
    })
    traerProducts()
    .then((res)=>{
        console.log(res);
    })
    .catch((error) => {
        console.log(error)
        
    },[]);
    const styles = {"color":"red"}
    return(
        <h1 style={styles}>{greeting}</h1>
    )
}

export default ItemListContainer;