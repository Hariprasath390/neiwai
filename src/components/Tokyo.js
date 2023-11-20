import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Next from "../components/images/next.png";
import Next22 from "../components/images/next22.png";
import Next23 from "../components/images/next23.png";
import Next24 from "../components/images/next24.png";
import Next25 from "../components/images/next25.png";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import Next1 from "../components/images/next2.png";
// import Next2 from "../components/images/next3.png";
// import Next from "../components/images/next5.png";
// import Next1 from "../components/images/next6.png";

function Tokyo() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [pic, setPic] = useState(Next22);

  return (
    <div>
      <button
        type="button"
        className="rounded-md   focus:outline-none focus:ring-2 focus:ring-white"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Close panel</span>
        Superzoom
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto ">
            <div className=" min-h-full items-end  p-4 text-center sm:items-center sm:p-0 w-full ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                {/* px-4 pt-5 pb-4 sm:p-6 sm:pb-4 */}
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full  ">
                  <div className="flex   ">
                    <div>
                      <div className="w-24 h-32 ">
                        <img
                          src={Next22}
                          alt="img"
                          className="w-full h-full object-cover mt-5 ml-4"
                          onClick={() => setPic(Next22)}
                        />{" "}
                      </div>
                      <div className="w-24 h-32 ">
                        <img
                          src={Next23}
                          alt="img"
                          className="w-full h-full object-cover mt-5 ml-4 "
                          onClick={() => setPic(Next23)}
                        />{" "}
                      </div>
                      <div className="w-24 h-32 ">
                        <img
                          src={Next24}
                          alt="img"
                          className="w-full h-full object-cover mt-5 ml-4 "
                          onClick={() => setPic(Next24)}
                        />{" "}
                      </div>
                      <div className="w-24 h-32 ">
                        <img
                          src={Next25}
                          alt="img"
                          className="w-full h-full object-cover mt-5  ml-4"
                          onClick={() => setPic(Next25)}
                        />{" "}
                      </div>
                    </div>
                    <div className="bg-white pt-5 pb-1 pr-1  h-screen w-11/12 ml-8 ">
                      <InnerImageZoom
                        fullscreenOnMobile={true}
                        hideHint={true}
                        zoomType="hover"
                        src={pic}
                        hideCloseButton={false}
                        moveType="pan"
                        className="h-screen w-screen  "
                      />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>{" "}
    </div>
  );
}

export default Tokyo;
