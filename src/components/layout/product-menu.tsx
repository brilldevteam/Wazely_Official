"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { useHoverMenu } from "@/components/layout/use-hover-menu";
import { productNavigation } from "@/data/navigation";

export function ProductMenu() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const hover = useHoverMenu(detailsRef);

  useEffect(() => {
    detailsRef.current?.removeAttribute("open");
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const menu = detailsRef.current;
      if (!menu?.open || menu.contains(event.target as Node)) return;
      menu.removeAttribute("open");
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape" || !detailsRef.current?.open) return;
      detailsRef.current.removeAttribute("open");
      detailsRef.current.querySelector("summary")?.focus();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function closeMenu() {
    detailsRef.current?.removeAttribute("open");
  }

  return (
    <details
      ref={detailsRef}
      className="group relative"
      onPointerEnter={hover.onPointerEnter}
      onPointerLeave={hover.onPointerLeave}
    >
      <summary
        onClick={hover.onSummaryClick}
        className="hover:text-navy flex cursor-pointer list-none items-center gap-1 rounded-full px-3 py-2 text-[13px] font-medium text-slate-600 transition-colors hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:outline-none"
      >
        Products
        <ChevronDown
          aria-hidden="true"
          size={14}
          className="transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="product-menu absolute top-full left-1/2 mt-3 w-80 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_24px_70px_-28px_rgba(15,29,53,.45)]">
        <Link
          href="/#products"
          onClick={closeMenu}
          className="text-teal block rounded-xl px-4 py-3 text-xs font-semibold tracking-[.12em] uppercase hover:bg-slate-50"
        >
          View all products
        </Link>
        {productNavigation.map((product) => (
          <Link
            key={product.href}
            href={product.href}
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 transition-colors hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:outline-none"
          >
            <span className="flex items-center gap-2">
              <span className="text-navy text-sm font-semibold">
                {product.label}
              </span>
              <span
                className={
                  product.tier === "Pro"
                    ? "rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-white dark:bg-white dark:text-slate-900"
                    : "rounded-full bg-teal-50 px-2 py-0.5 text-[10px] font-semibold text-teal-700 dark:bg-teal-900 dark:text-teal-200"
                }
              >
                {product.tier}
              </span>
            </span>
            <span className="mt-1 block text-xs leading-5 text-slate-500">
              {product.description}
            </span>
          </Link>
        ))}
        <p className="mt-1 border-t border-slate-200 px-4 pt-3 pb-2 text-xs leading-5 text-slate-500">
          More Wazely products are on the way.
        </p>
      </div>
    </details>
  );
}
