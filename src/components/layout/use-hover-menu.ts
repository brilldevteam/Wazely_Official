"use client";

import { useEffect, useRef, type PointerEvent, type RefObject } from "react";

const CLOSE_DELAY_MS = 160;

// Opens a <details> dropdown on mouse hover and closes it shortly after the
// pointer leaves (the delay covers the gap between trigger and panel).
// Touch and keyboard keep the native click/tap + Escape behaviour.
export function useHoverMenu(detailsRef: RefObject<HTMLDetailsElement | null>) {
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openedByHover = useRef(false);

  useEffect(() => () => clearTimer(), []);

  function clearTimer() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  function onPointerEnter(event: PointerEvent<HTMLDetailsElement>) {
    if (event.pointerType !== "mouse") return;
    clearTimer();
    const menu = detailsRef.current;
    if (menu && !menu.open) {
      menu.open = true;
      openedByHover.current = true;
    }
  }

  function onPointerLeave(event: PointerEvent<HTMLDetailsElement>) {
    if (event.pointerType !== "mouse") return;
    clearTimer();
    closeTimer.current = setTimeout(() => {
      detailsRef.current?.removeAttribute("open");
      openedByHover.current = false;
    }, CLOSE_DELAY_MS);
  }

  // A mouse click on a hover-opened trigger would toggle it shut; keep it open.
  function onSummaryClick(event: React.MouseEvent<HTMLElement>) {
    if (openedByHover.current && event.detail > 0) {
      event.preventDefault();
    }
  }

  return { onPointerEnter, onPointerLeave, onSummaryClick };
}
