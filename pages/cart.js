import CheckoutSteps from "../Components/CheckoutSteps";
import { usecont } from "../Components/Context";
function cart() {
    const {checkoutStep}=usecont()
    return (
        <div>
            <CheckoutSteps checkoutStep={checkoutStep}/>
            <div className="container p-5 text-center">
                <p className="tracking-wide font-light text-lg mt-20">Your Cart is currently empty</p>
                <button className="uppercase px-4 py-2 bg-navy-light hover:bg-navy transition-all ease-in delay-75 font-bold bg- text-white mt-3">Return to Shop</button>
            </div>
        </div>
    )
}

export default cart
