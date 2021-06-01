import { PRODUCTS } from "../data/products";
import Link from "next/link";

export default function Home({ products }) {
    return (
        <>
            {products.map((product) => (
                <div
                    key={product.id}
                    className="flex flex-row items-center mx-auto max-w-5xl"
                >
                    <Link href={`/product/${product.slug}`}>
                        <a>
                            <span className="text-lg font-bold">
                                {product.name}
                            </span>
                            {product.image ? (
                                <img
                                    src={product.image.sourceUrl}
                                    className="w-20"
                                />
                            ) : (
                                ""
                            )}
                            {product.price}
                        </a>
                    </Link>
                </div>
            ))}
        </>
    );
}

export async function getStaticProps() {
    return { props: { products: PRODUCTS.data.products.nodes } };
}
