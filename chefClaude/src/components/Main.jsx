import React, { useState } from "react";

const Main = () => {
    const [ingredients, setIngredients] = useState([]);
    const ingredientsList = ingredients.map(item=>{
        return <li key={item}>{item}</li>
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Submitted")
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient");
        // ingredients.push(newIngredient)
        setIngredients(prev=>prev = [...prev,newIngredient])
    }
    return (
        <main className="pt-[30px] pb-[10px] pl-[30px] pr-[30px]">
            <form onSubmit={(e)=>handleSubmit(e)} className="flex justify-center gap-3 h-10">
                <input
                    className="ingredient-form p-[13px] pt-[9px] pb-[9px] rounded-md border-[1px] border-solid border-[#D1D5D8] grow min-w-[150px] max-w-[400px] "
                    type="text" 
                    placeholder="e.g Oregano"
                    name="ingredient"
                    />

                <button type="submit" className="font-inter rounded-md border-none bg-[#141413] text-[#FAFAF8] w-[150px] text-sm font-[500]">+ Add ingredients</button>
            </form>
            <ul>{ingredientsList}</ul>
        </main>
    )
}
export default Main;