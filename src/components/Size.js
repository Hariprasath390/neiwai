import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import El from "../components/images/El.png";
import Ssize from "../components/images/Ssize.png";
import Six8 from "../components/images/Six8.png";
import Size72 from "../components/images/Size74.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";

export default function Example() {
  const [open, setOpen] = useState(true);
  return (
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

        <div className="fixed inset-0 overflow-hidden ">
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
                <Dialog.Panel className="pointer-events-auto  sm:max-w-xl  ">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl sm:-mx-0 -mx-12   ">
                    <div className="flex-1   ">
                      <div className="flex items-start justify-end mr-16 sm:mr-2 ">
                        <Dialog.Title className="text-lg font-medium text-gray-900 ">
                          <button
                            type="button"
                            className=" p-2 outline-none"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon
                              className="h-9 w-9 mt-2 sticky top-0 bg-white "
                              aria-hidden="true"
                            />
                          </button>
                        </Dialog.Title>
                      </div>
                      <div className="">
                        <div className="flex mt-8 sm:w-full w-96">
                          <div className="sm:w-32 ">
                            <img
                              src={El}
                              alt="img"
                              className="sm:w-24 sm:h-36 w-24 h-36 sm:ml-3 ml-4 object-cover object-center"
                            />
                          </div>
                          <div className="ml-2 text-sm  ">
                            <h2 className="font-semibold sm:w-full text-lg ">
                              DressBerry
                            </h2>
                            <p className="sm:w-96 font-normal w-56 mt-1 ">
                              DressBerry Women Blue Solid Cardigan Sweater
                            </p>
                            <div className="sm:w-96 mt-2">
                              <span className="font-semibold"> ₹ 869 </span>
                              <del className="text-gray-400  ml-1  ">
                                ₹ 1449
                              </del>
                              <span className="text-orange-400 font-medium ml-2">
                                (40% OFF)
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className=" mt-12">
                            <div className=" sm:w-full  border-y-2  flex sticky top-0 bg-white">
                              <div
                                className="flex  items-center p-3 sm:w-full w-40 "
                                id="top"
                              >
                                <div className=" hover:text-fuchsia-500  hover:border-fuchsia-500 w-full ">
                                  <p className="font-semibold text-md text-center  ">
                                    Size Chart
                                  </p>
                                </div>
                              </div>

                              <div className="flex  items-center p-3 sm:w-full ">
                                <div className="sm:w-64 w-36   hover:text-fuchsia-500 hover:border-fuchsia-500  ">
                                  <p className="font-semibold text-md text-center   ">
                                    How to measure
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="mt-5 ">
                                <img
                                  src={Size72}
                                  alt="img "
                                  className="sm:w-full w-80 sm:ml-0 ml-2  "
                                />
                              </div>
                              <section>
                                <div>
                                  <div id="bottom">
                                    <h3 className="text-xs text-center  sm:mr-0 mr-16 mt-8 ">
                                      * To-Fit Denotes Body Measurements in
                                      Inches
                                    </h3>
                                  </div>
                                  <div className="mt-3 text-sm  ">
                                    <p className="font-medium sm:ml-6 ml-5 mt-10 ">
                                      How to measure yourself
                                    </p>
                                  </div>
                                  <img
                                    src={Ssize}
                                    alt="img "
                                    className="sm:ml-28 mt-12 ml-2   sm:w-auto w-80  "
                                  />
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
