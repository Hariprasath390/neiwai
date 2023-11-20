import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import llow from "../components/images/yelloww.png";
import red from "../components/images/red.png";
import white from "../components/images/white.png";
import violet from "../components/images/violet.png";
import gray2 from "../components/images/gray2.png";
import yelloww from "../components/images/yelloww.png";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Cart() {
  //   function product(id) {
  //   console.log(id);
  //   const product = Product.filter((o) => o.id === id );
  //   console.log(id)
  //   setPrice(id)
  // }

  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);
  // const [price, setPrice] = useState()

  const handleDecrement = () => {
    setQty((prevCount) => prevCount - 1);
  };
  const handleIncrement = () => {
    setQty((prevCount) => prevCount + 1);
  };

  const Product = [
    {
      id: "1",
      productName: "Wool beanie",
      productType: "Banana",
      Price: "45",
      productImage: yelloww,
    },
    {
      id: "2",
      productName: "satin wrap shirt",
      productType: "Burgundy",
      Price: "155.00",
      productImage: red,
    },
    {
      id: "3",
      productName: "Alpa ",
      productType: "Dark navy",
      Price: "500.08",
      productImage: violet,
    },
    {
      id: "4",
      productName: "Shimmer mock neck sweater",
      productType: "pearl",
      Price: "250",
      productImage: white,
    },
    {
      id: "5",
      productName: "kyoot rock set ",
      productType: "Mushroom",
      Price: "676",
      productImage: gray2,
    },
  ];

  return (
    <div>
      <button
        type="button"
        className="rounded-md   focus:outline-none focus:ring-2 focus:ring-white"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Close panel</span>
        cart
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white "
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only ">Close panel </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl ">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          SHOPPING CART
                        </Dialog.Title>
                      </div>
                      <hr className="mt-6" />
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <div className="absolute inset-0 px-4 sm:px-6 ">
                          {Product.map((pro) => {
                            return (
                              <div>
                                <div className="flex ">
                                  <div className="w-24">
                                    <img
                                      className="w-16 h-28 object-fill"
                                      src={pro.productImage}
                                      alt="img"
                                    />
                                  </div>
                                  <div className="w-full ">
                                    <div className=" h-10 absolute my-4">
                                      <div className="w-full ">
                                        <h2 className=" text-sm ">
                                          {pro.productName}
                                        </h2>
                                      </div>
                                      <div className="w-full ">
                                        <h2 className=" text-sm ">
                                          {pro.productType}
                                        </h2>
                                      </div>
                                    </div>
                                    <div className=" flex md:justify-between justify-between w-full  mt-20  ">
                                      <div className=" md:w-full sm:w-full ">
                                        <button
                                          className="border-gray-300  border-2 bg-gray-100 w-6"
                                          onClick={() =>
                                            handleDecrement(Product.id)
                                          }
                                        >
                                          -
                                        </button>
                                        <span className="p-1">{qty}</span>
                                        <button
                                          className=" border-gray-300  border-2 bg-gray-100 w-6"
                                          onClick={() =>
                                            handleIncrement(Product.id)
                                          }
                                        >
                                          +
                                        </button>
                                      </div>

                                      <div className="md:w-full sm:w-full  mt-1">
                                        <h2 className="sm:ml-12">
                                          ${pro.Price}
                                        </h2>
                                      </div>
                                      <div className="md:w-full sm:w-full mt-2">
                                        <button type="button">
                                          <RiDeleteBin6Fill className="sm:ml-14 " />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <hr className="border-1 border-gray-200 mt-6 " />
                              </div>
                            );
                          })}

                          <div className="flex mt-10 ">
                            <div className="w-64 h-10">
                              <p className="">Subtotal</p>
                            </div>
                            <div className="w-36 h-10">
                              <p className="mx-20">123.54$</p>
                            </div>
                          </div>
                          <div className=" sm:mx-20 mx-2 mt-3  ">
                            <p className="text-gray-700 sm:text-md  text-xs sm:w-64 w-54 ">
                              shipping and taxes are calculated at checkout
                            </p>
                          </div>
                          <div className="mt-4 ">
                            <button className=" border-1 bg-black text-white p-1.5 w-64 sm:w-96 rounded">
                              Checkout
                            </button>
                          </div>
                          <div className="mt-4 ">
                            <button className=" border-1 bg-violet-500 text-white p-3 w-64  sm:w-96 rounded">
                              Shoppay
                            </button>
                          </div>
                          <div className="mt-4 ">
                            <button className=" border-1 bg-yellow-600 text-white p-3 w-64  sm:w-96 rounded">
                              Paypal
                            </button>
                          </div>
                          <div className="mt-4 ">
                            <button className=" border-1 bg-black text-white p-3 w-64  sm:w-96 rounded">
                              Gpay
                            </button>
                          </div>
                        </div>
                        {/* /End replace */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
