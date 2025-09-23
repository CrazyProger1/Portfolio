"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  visible?: boolean;
  children: React.ReactNode;
  onClose?: React.MouseEventHandler;
  query?: string;
}

export const ModalPortal = ({ visible, children, onClose, query }: Props) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [actualVisible, setActualVisible] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

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
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
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
