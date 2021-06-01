import { PRODUCTS } from "../../data/products";

export default function Product(props) {
    const { product } = props;

    // console.log(product);

    return (
        <>
            <div className="w-full h-7 bg-indigo-700 text-gray-200">
                <div className="mx-auto max-w-5xl h-full flex flex-row items-center justify-between">
                    <span className="uppercase text-xs font-semibold">
                        Add anything here or just remove it...
                    </span>
                    <ul className="flex flex-row h-full items-center space-x-3 text-sm font-normal">
                        <li>About</li>
                        <span className="font-light">|</span>
                        <li>Our Stores</li>
                        <span className="font-light">|</span>
                        <li>Blog</li>
                        <span className="font-light">|</span>
                        <li>Contact</li>
                        <span className="font-light">|</span>
                        <li>FAQ</li>
                        <span className="font-light">|</span>
                        <li>Newsletter</li>
                        <span className="font-light">|</span>
                        <li>Languages</li>
                    </ul>
                </div>
            </div>
            <div className="mx-auto max-w-5xl">
                <header className="h-20 border-b">
                    <div className="h-full flex flex-row items-center">
                        <img
                            className="h-10"
                            src="https://fzi4k1gk2dw3t0fqy18sw8qi-wpengine.netdna-ssl.com/wp-content/themes/flatsome/assets/img/logo.png"
                            alt="logo"
                        />
                        <nav className="ml-4">
                            <ul className="flex flex-row my-auto space-x-6 text-base uppercase font-bold text-gray-400">
                                <li>Shirts</li>
                                <li>Belts</li>
                                <li>Jeans</li>
                                <li>Hoodies</li>
                                <li>Shorts</li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div className="">{product.name}</div>
            </div>
        </>
    );
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
