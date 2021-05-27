import { PRODUCTS } from "../data/products";

export default function Product({ products }) {
    return (
        <>
            {products.map((product) => (
                <div className="flex flex-row items-center mx-auto max-w-5xl">
                    <span className="text-lg font-bold">{product.name}</span>
                    {product.image ? (
                        <img src={product.image.sourceUrl} className="w-20" />
                    ) : (
                        ""
                    )}
                    {product.price}
                </div>
            ))}
        </>
    );
}

export async function getStaticProps() {
    return { props: { products: PRODUCTS.data.products.nodes } };
}
