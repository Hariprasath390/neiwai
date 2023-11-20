/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Neiwai from "../components/images/Neiwai.png";
import dance from "../components/images/dance.png";
import Ben3 from "../components/images/Men3.png";
import Robes1 from "../components/images/Robes1.png";
import Underwaer from "../components/gifts/g13.png";
import Underwaer2 from "../components/gifts/g8.png";
import Sale2 from "../components/sale/s23.png";
import Sale1 from "../components/sale/s25.png";
import "../infinite.css";
import "../Animation.css";
import "../Beauty.css";
import "./Footer.css";

import Caart from "./Caart";
import { Link } from "react-router-dom";

const navigation = {
  categories: [
    {
      id: "BEST SELLERS ",
      name: " BEST SELLERS ",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc: Sale1,
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc: Sale2,
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "SHOP BY CATEGORIES",
          name: "SHOP BY CATEGORIES",
          items: [
            { name: "Sets", href: "#" },
            { name: "Pajama & Robes", href: "#" },
            { name: "Top", href: "#" },
            { name: "Sweatshirts", href: "#" },
            { name: "knitwear & Sweaters", href: "#" },
            { name: "Dresses & Jumpsuits", href: "#" },
            { name: "Outerwaer", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Shorts", href: "#" },
            { name: "Bodysuits", href: "#" },
            { name: "Accesories", href: "#" },
          ],
        },
        {
          id: "SHOP BY FABRIC",
          name: "SHOP BY FABRIC",
          items: [
            { name: "Cashmere & Wool ", href: "#" },
            { name: "2-way-Stretchy ", href: "#" },
            { name: "Cotton", href: "#" },
            { name: "Modal", href: "#" },
            { name: "Cupro", href: "#" },
          ],
        },
        {
          id: "SHOP BY ACTIVITY ",
          name: "SHOP BY ACTIVITY ",
          items: [
            { name: "Barely Zero", href: "#" },
            { name: "Wireless bras", href: "#" },
            { name: "Velvet", href: "#" },
            { name: "Bundles", href: "#" },
          ],
        },
      ],
    },
    {
      id: "UNDERWEAR",
      name: "UNDERWEAR",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc: Underwaer,
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc: Underwaer2,
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "SHOP BY CATEGORIES",
          name: "SHOP BY CATEGORIES ",
          items: [
            { name: "Barely Zero", href: "#" },
            { name: "Triangle", href: "#" },
            { name: "Seamless", href: "#" },
            { name: "Push-up", href: "#" },
          ],
        },
        {
          id: "SHOP  BY FABRIC",
          name: "SHOP BY FABRIC ",
          items: [
            { name: "Cotton", href: "#" },
            { name: "TENCEL™ Modal", href: "#" },
            { name: "PANTIE PRO Period Underwear", href: "#" },
            { name: "LYCRA ", href: "#" },
            { name: "Thermal", href: "#" },
            { name: "Lace", href: "#" },
            { name: "Velvet", href: "#" },
          ],
        },
        {
          id: "SHOP BY ACTIVITY ",
          name: "SHOP BY ACTIVITY ",
          items: [
            { name: "Bundles", href: "#" },
            { name: "Wireless bras", href: "#" },
            { name: "Bandeau", href: "#" },
            { name: "Demi", href: "#" },
            { name: "Midwaist", href: "#" },
          ],
        },
        {
          id: "PANTIES",
          name: "PANTIES",
          items: [
            { name: "Low Waist ", href: "#" },
            { name: "High waist", href: "#" },
            { name: "Shapewear", href: "#" },
            { name: "thongs", href: "#" },
            { name: "Midwaist", href: "#" },
          ],
        },
      ],
    },
    {
      id: "LOUNGE",
      name: "LOUNGE ",
      featured: [
        // {
        //   name: 'New Arrivals',
        //   href: '#',
        //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
        //   imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        // },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc: Robes1,
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "SHOP  BY CATEGORY",
          name: "SHOP BY CATEGORY ",
          items: [
            { name: "Sets", href: "#" },
            { name: "Pajama & Robes", href: "#" },
            { name: "Top", href: "#" },
            { name: "Sweatshirts", href: "#" },
            { name: "knitwear & Sweaters", href: "#" },
            { name: "Dresses & Jumpsuits", href: "#" },
            { name: "Outerwaer", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Shorts", href: "#" },
            { name: "Bodysuits", href: "#" },
            { name: "Accesories", href: "#" },
          ],
        },
        // {
        //   id: 'accessories',
        //   name: 'Accessories',
        //   items: [
        //     { name: 'Watches', href: '#' },
        //     { name: 'Wallets', href: '#' },
        //     { name: 'Bags', href: '#' },
        //     { name: 'Sunglasses', href: '#' },
        //     { name: 'Hats', href: '#' },
        //     { name: 'Belts', href: '#' },
        //   ],
        // },
        {
          id: " SHOP BY FABRIC ",
          name: "SHOP BY FABRIC ",
          items: [
            { name: "Cashmere & Wool ", href: "#" },
            { name: "Thermal Loungewear", href: "#" },
            { name: "Cotton", href: "#" },
            { name: "TENCEL™ Modal", href: "#" },
            { name: " Silk", href: "#" },
          ],
        },
      ],
    },
    {
      id: "ACTIVE",
      name: "ACTIVE ",
      featured: [
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc: dance,
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "SHOP BY CATEGORY ",
          name: "SHOP BY CATEGORY ",
          items: [
            { name: "Sports Bra", href: "#" },
            { name: "Tops", href: "#" },
            { name: "Sweat Shirts", href: "#" },
            { name: "Leggings", href: "#" },
            { name: "Joggers", href: "#" },
            { name: "Swimwear", href: "#" },
            { name: "Shorts", href: "#" },
            { name: "Accesories ", href: "#" },
          ],
        },
        {
          id: "SHOP BY FABRIC",
          name: "SHOP BY FABRIC ",
          items: [
            { name: "Cashmere & Wool ", href: "#" },
            { name: "2-way-Stretchy ", href: "#" },
            { name: "Cotton", href: "#" },
            { name: "Modal", href: "#" },
            { name: "Cupro", href: "#" },
            // { name: 'Belts', href: '#' },
          ],
        },
        {
          id: "SHOP BY ACTIVITY ",
          name: "SHOP BY ACTIVITY ",
          items: [
            { name: "Ballet & Dance", href: "#" },
            { name: "Yoga", href: "#" },
            { name: "Running", href: "#" },
            { name: "Gym", href: "#" },
            { name: "Swim", href: "#" },
            { name: "Outdoor", href: "#" },
          ],
        },
      ],
    },
    {
      id: "FOR HIM",
      name: "FOR HIM  ",
      featured: [
        {
          name: "For Him ",
          href: "/Men",
          imageSrc: Ben3,
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
      ],
      sections: [
        {
          id: "SHOP BY CATEGORY",
          name: "SHOP BY CATEGORY ",
          items: [
            { name: "Underwaer", href: "#" },
            { name: "Pajamas", href: "#" },
            { name: "Socks", href: "#" },
            { name: "Tops", href: "#" },
            { name: "Bottoms", href: "#" },
            // { name: 'Activewear', href: '#' },
            // { name: 'Browse All', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "NEW ", href: "/New" },
    { name: "SALE ", href: "/Sale" },
    { name: "GIFTS", href: "/Gift" },
    { name: "OUR STORY ", href: "/Ourstory" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Store() {
  const [open, setOpen] = useState(false);
  console.log(open);

  const [open1, setOpen1] = useState(false);
  console.log(open1);

  const ShowCart = () => {
    setOpen1(!open1);
  };
  return (
    <div className="bg-white  ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2 ">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4 overflow-x-scroll sm:overflow-x-hidden">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "text-indigo-600 "
                                : "text-gray-900 border-transparent",
                              "flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium "
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pt-10 pb-8"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <Link
                                to={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root ">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900 "
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <div className="">
          <div className="border-2 border-black bg-black sm:w-full  col-md-12 text-center">
            <div className="animate-contain">
              <div className="animated-text">
                <span className="animate-charcter flex justify-center  ">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <h3 className="animate-charcter flex justify-center ">
                          Free US Shipping On Order $50+!
                        </h3>
                      </div>
                    </div>
                  </div>
                </span>
                

                <span className="animate-charcter flex justify-center items-center -my-1 ">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <h3 className="animate-charcter flex justify-center ">
                          Shop Gifts For all!
                        </h3>
                      </div>
                    </div>
                  </div>
                </span>
                <span className="animate-charcter flex justify-center -my-1.5  ">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <h3 className="animate-charcter flex justify-center ">
                          Free Barely Zero 1.0 Bra with $115+ Order. Code: GIFT
                        </h3>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>

        <nav aria-label="Top" className="mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center   ">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              {/* Logo */}
              <div className="ml-4 flex 2xl:w-80  ">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src={Neiwai} alt="" />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8  ">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex  ">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent  ",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out outline-none"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white z-50">
                                <div className="mx-auto  px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16 ">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8 ">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 h-96 object-cover w-64">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10 w-"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-   `}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center ">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </a>
                </div>

                {/* <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}

                {/* Search */}

                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                {/* Cart */}
                <div
                  className="ml-4 flow-root lg:ml-6"
                  onClick={() => ShowCart()}
                >
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
                <Caart ShowCart={ShowCart} open={open1} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
