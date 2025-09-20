import React from "react";
import { IoClose } from "react-icons/io5";

import { ModalPortal, StopPropagation } from "@/components/common/modals";
import { Motion, SmoothLink } from "@/components/common/utils";

type Props = {
  children: React.ReactNode;
};

export const Modal = ({ children }: Props) => {
  return (
    <ModalPortal visible={true} query="project">
      <div className="modal-scroll-wrapper lg:1/2 max-h-[98%] w-[98%] overflow-y-auto pr-1 md:w-2/3">
        <StopPropagation className="bg-background relative flex flex-col gap-4 rounded-2xl p-4">
          <div className="absolute top-4 right-4">
            <SmoothLink href="/" className="flex">
              <Motion whileHover={{ scale: 1.1 }}>
                <IoClose className="icon-shine cursor-pointer" size={32} />
              </Motion>
            </SmoothLink>
          </div>
          {children}
        </StopPropagation>
      </div>
    </ModalPortal>
  );
};
