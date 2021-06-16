import React,{ useContext, useState } from "react"

const Context=React.createContext()

export const usecont=()=>{
    return useContext(Context)
}

function ContextProvider({children}) {
    const [checkoutStep, setcheckoutStep] = useState(1)
    const [cart, setcart] = useState([])

    const ChangeCheckoutStep=(i)=>{
        setcheckoutStep(i)
    }
    const addToCart=(product,qty)=>{
        product.qty=qty
        let flag=true
        cart.map(p=>{
            if(p.id===product.id){
                flag=false
                return product
            }
        })
        if(flag){
            setcart([...cart,product])
        }
        console.log(cart);
    }
    const value={
        checkoutStep,
        cart,
        ChangeCheckoutStep,
        addToCart
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
