import { PRODUCTS } from "../../data/products";
import Flickity from "react-flickity-component";
import React from "react";
import Link from "next/link";

export default function Product(props) {
    const { product } = props;
    const crumbs = ["CLothing", "TShirts"];
    const flickityOptions = {
        groupCells: false,
        cellAlign: "center",
        wrapAround: false,
        autoPlay: false,
        prevNextButtons: false,
        adaptiveHeight: true,
        // imagesLoaded:true,
        lazyLoad: false,
        dragThreshold: 15,
        pageDots: false,
        rightToLeft: false,
        elementType: "div",
        static: false,
        initialIndex: 0,
        inagesLoaded: true,
        pageDots: false,
        // reLoadOnUpdate: true,
        contain: true,
    };
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
                {/* Below this is the product display section */}
                <div className="mt-8">
                    <div className="w-full overflow-x-hidden md:w-1/2">
                        {/* <img
                            src={product.galleryImages?.nodes?.[0]?.sourceUrl}
                            alt="Image"
                        /> */}
                        <div className="mx-4 overflow-x-hidden">
                            <Flickity
                                // className={"carousel"} // default ''
                                // elementType={"div"} // default 'div'
                                options={flickityOptions} // takes flickity options {}
                                // disableImagesLoaded={false} // default false
                                reloadOnUpdate={true} // default false
                                // static // default false
                            >
                                {product.galleryImages?.nodes &&
                                    product.galleryImages.nodes.map(
                                        (img, index) => (
                                            <img
                                                className=""
                                                // className="inline-block w-1/4  border border-black border-opacity-30"
                                                src={img.sourceUrl}
                                                alt={`Image ${index}`}
                                                key={product.id}
                                            />
                                        )
                                    )}
                            </Flickity>
                        </div>
                        <div className="mt-2 mx-2 grid grid-cols-4 ">
                            {product.galleryImages?.nodes &&
                                product.galleryImages.nodes.map(
                                    (img, index) => (
                                        <div className="p-2" key={product.id}>
                                            <img
                                                className="border border-black border-opacity-20"
                                                src={img.sourceUrl}
                                                alt={`Image ${index}`}
                                            />
                                        </div>
                                    )
                                )}
                        </div>
                    </div>
                    <div className="mx-4 mt-2 uppercase text-sm text-gray-400 font-normal">
                        <span>Home</span>
                        {crumbs
                            ? crumbs.map((cat, index) => (
                                  <React.Fragment key={cat}>
                                      <span className="mx-1 md:mx-2">/</span>
                                      <Link href={`/category/${cat}`}>
                                          <a>{cat}</a>
                                      </Link>
                                  </React.Fragment>
                              ))
                            : ""}
                    </div>
                    <div className="mx-4 mt-2 text-gray-600 font-semibold text-2xl">
                        {product.name}
                        <div className="bg-gray-200 w-8 h-1 mt-2"></div>
                    </div>
                    <div className="mx-4 mt-4 text-gray-900 font-semibold text-2xl">
                        {product.price}
                    </div>
                    <div
                        className="mx-4 mt-2 text-gray-500"
                        dangerouslySetInnerHTML={{
                            __html: product.shortDescription,
                        }}
                    ></div>
                    <div className="mt-4 mx-4">
                        <button className="inline-block border border-gray-300 h-10 w-7 bg-gray-50 outline-none focus:outline-none">
                            -
                        </button>
                        <input
                            type="text"
                            value="1"
                            className="inline-block border-t border-b text-center border-gray-300 h-10 w-8 outline-none focus:outline-none"
                        />
                        <button className="inline-block border border-gray-300 h-10 w-7 bg-gray-50 outline-none focus:outline-none">
                            +
                        </button>
                        <button className="ml-6 uppercase text-center text-gray-50 font-bold h-10 w-40  bg-red-400 outline-none focus:outline-none">
                            Add to Cart
                        </button>
                    </div>
                    <hr className="mx-4 mt-10 border-gray-100" />
                    <div className="mx-4 mt-2 text-gray-500 font-normal text-sm">
                        Category:{" "}
                        <span className="text-gray-700">Clothing</span>
                    </div>
                    <div className="mt-10">
                        <div className="mx-4 text-gray-500  text-sm uppercase">
                            <span className="block pt-2 mt-4 border-t">
                                Description
                            </span>
                            <span className="block pt-2 mt-4 border-t">
                                Reviews
                            </span>
                        </div>
                        <div
                            className="mx-4 mt-6 font-normal text-gray-500"
                            dangerouslySetInnerHTML={{
                                __html: product.description,
                            }}
                        ></div>
                    </div>
                    <div className="h-20"></div>
                </div>
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
    // console.log(JSON.stringify(product, undefined, 2));
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

    // console.log(JSON.stringify(pathsData, undefined, 2));
    return {
        paths: pathsData,
        fallback: false,
    };
}
