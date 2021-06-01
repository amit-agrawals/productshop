import { PRODUCTS } from "../../data/products";

export default function Product(props) {
    const { product } = props;

    console.log(product);
    return <div>{product.name}</div>;
}

export async function getStaticProps(context) {
    const {
        params: { id },
    } = context;

    let product = PRODUCTS.data.products.nodes.filter(
        (product) => product.id === id
    )[0];
    console.log(JSON.stringify(product, undefined, 2));
    return {
        props: {
            product: product || {},
        },
    };
}

export async function getStaticPaths() {
    const pathsData = [];

    PRODUCTS.data.products.nodes &&
        PRODUCTS.data.products.nodes.map((product) => {
            if (product?.id) {
                pathsData.push({ params: { id: product?.id } });
            }
        });

    console.log(JSON.stringify(pathsData, undefined, 2));
    return {
        paths: pathsData,
        fallback: false,
    };
}
