import React from "react";

interface Props {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: Props) => (
  <>
    <div id="modal-container" />
    {children}
  </>
);

export default ModalProvider;
