import React from "react";

interface Props {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: Props) => (
  <>
    <div id="modal-container" />
    {children}
  </>
);
