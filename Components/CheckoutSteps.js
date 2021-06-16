import {usecont} from "../Components/Context";
function CheckoutSteps({checkoutStep}) {
    const {ChangeCheckoutStep}=usecont()
    return (
        <div>
            <div className="mx-auto max-w-5xl mt-8 tracking-wider">
                <div className="flex justify-center uppercase text-2xl">
                    {/* Shopping Cart */}
                    <p className={`flex items-center cursor-pointer group ${checkoutStep!=1 && "hidden md:flex"}`} onClick={()=>ChangeCheckoutStep(1)}>
                        <span className={`${checkoutStep===1 ? "bg-yellow-600" : "bg-gray-300 "} hidden md:flex  w-7 h-7 text-lg text-white font-medium justify-center rounded-full `}>1</span>
                        <span className={`ml-2 ${checkoutStep!=1 && "text-gray-300 group-hover:text-black" }`}>
                            Shopping Cart
                        </span>
                        <span className="font-light ml-3 hidden md:inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="#D1D5DB">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                            
                        </span>
                    </p>

                    {/* Order Details */}
                    <p className={`flex items-center cursor-pointer group ${checkoutStep!=2 && "hidden md:flex"}`} onClick={()=>ChangeCheckoutStep(2)}>
                        <span className={`${checkoutStep===2 ? "bg-yellow-600" : "bg-gray-300"} hidden md:flex ml-4  w-7 h-7 text-lg text-white font-medium justify-center rounded-full`}>2</span>
                        <span className={`ml-2 ${checkoutStep!=2 && "text-gray-300 group-hover:text-black" }`}>
                            Checkout Details
                        </span>
                        <span className="font-light ml-3 hidden md:inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="#D1D5DB">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                            
                        </span>
                    </p>

                    {/* Order Complete */}
                    <p className={`flex items-center cursor-pointer group ${checkoutStep!=3 && "hidden md:flex"}`} onClick={()=>ChangeCheckoutStep(3)}>
                        <span className={`${checkoutStep===3 ? "bg-yellow-600" : "bg-gray-300"} hidden md:flex ml-4 w-7 h-7 text-lg text-white font-medium justify-center rounded-full`}>3</span>
                        <span className={`ml-2 ${checkoutStep!=3 && "text-gray-300 group-hover:text-black" }`}>
                            Order Complete
                        </span>
                    </p> 
                    </div>
            </div>
        </div>
    )
}

export default CheckoutSteps
