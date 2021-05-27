import { PRODUCTS } from "../data/products";

export default function Product({ products }) {
    return (
        <>
            {products.map((product) => (
                <div>
                    {product.name} {product.price}
                </div>
            ))}
        </>
    );
}

export async function getStaticProps() {
    return { props: { products: PRODUCTS.data.products.nodes } };
}
