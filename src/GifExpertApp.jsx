import { useState } from "react";
import { AddCategoty, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Dragon ball' ]);

    const onAddCategory = (newCategory) => {
        
        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory,...categories]);
        // setCategories( cat => [ ...cat, 'Valorant'] ); // otra forma
    }

  return (
    <>
        
        <h1>GifExpertApp</h1>

        
        <AddCategoty 
            // setCategories={ setCategories } 
            onNewCategory={ (event) => onAddCategory(event) }
        />      

        
        { categories.map( category => (
                <GifGrid 
                key={category}
                category={category} 
                />
            ))
        }
        
            
    </>
  )
}
