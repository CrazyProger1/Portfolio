"use client";

import { createPortal } from "react-dom";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";

interface Props {
  visible?: boolean;
  children: React.ReactNode;
  onClose?: React.MouseEventHandler;
  query?: string;
}

const ModalPortal = ({ visible, children, onClose, query }: Props) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [actualVisible, setActualVisible] = useState<boolean>(false);

  useEffect(() => {
    if (visible) {
      setActualVisible(visible);
    } else if (query) {
      setActualVisible(searchParams.get(query) === "true");
    } else {
      setActualVisible(false);
    }
  }, [query, visible, searchParams]);

  useEffect(() => {
    setPortalElement(document.getElementById("modal-container"));
  }, []);

  if (!portalElement || !actualVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (query) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(query);
      router.push(`${pathname}?${params.toString()}`);
    }

    if (onClose) {
      onClose(e);
    }
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        onClick={handleClose}
      >
        {children}
      </motion.div>
    </AnimatePresence>,
    portalElement,
  );
};

export default ModalPortal;
