// src/components/ui/dialog.tsx
'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

/* -------------------- Global scroll lock (no jump) -------------------- */
let lockCount = 0;
let prevOverflow: string | null = null;
let prevPosition: string | null = null;
let prevTop: string | null = null;
let prevWidth: string | null = null;
let prevPaddingRight: string | null = null;
let savedScrollY = 0;

function getScrollbarWidth() {
  // Width of the vertical scrollbar (0 on macOS overlay scrollbars)
  return window.innerWidth - document.documentElement.clientWidth;
}

function lockBodyScroll() {
  if (lockCount === 0) {
    savedScrollY = window.scrollY || 0;

    // Save previous inline styles
    prevOverflow = document.body.style.overflow ?? '';
    prevPosition = document.body.style.position ?? '';
    prevTop = document.body.style.top ?? '';
    prevWidth = document.body.style.width ?? '';
    prevPaddingRight = document.body.style.paddingRight ?? '';

    // Avoid layout shift when removing scrollbar
    const sbw = getScrollbarWidth();
    if (sbw > 0) {
      document.body.style.paddingRight = `calc(${prevPaddingRight || '0px'} + ${sbw}px)`;
    }

    // Lock body at current position (prevents jump-to-top on iOS/Chrome)
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.width = '100%';
    // Overflow hidden is optional with position:fixed, but keeps things tidy
    document.body.style.overflow = 'hidden';
  }
  lockCount += 1;
}

function unlockBodyScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    // Restore styles
    document.body.style.overflow = prevOverflow ?? '';
    document.body.style.position = prevPosition ?? '';
    document.body.style.top = prevTop ?? '';
    document.body.style.width = prevWidth ?? '';
    document.body.style.paddingRight = prevPaddingRight ?? '';

    // Restore scroll position
    const y = savedScrollY || 0;
    window.scrollTo(0, y);

    // Cleanup
    prevOverflow = prevPosition = prevTop = prevWidth = prevPaddingRight = null;
    savedScrollY = 0;
  }
}
/* --------------------------------------------------------------------- */

type DialogContextValue = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const DialogContext = React.createContext<DialogContextValue | null>(null);

type DialogProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export function Dialog({ open: controlledOpen, onOpenChange, children }: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? !!controlledOpen : uncontrolledOpen;

  const setOpen = React.useCallback(
    (v: boolean) => {
      if (!isControlled) setUncontrolledOpen(v);
      onOpenChange?.(v);
    },
    [isControlled, onOpenChange]
  );

  const ctx = React.useMemo(() => ({ open, setOpen }), [open, setOpen]);

  // Reference-counted lock so multiple dialogs work correctly
  React.useEffect(() => {
    if (!open) return;
    lockBodyScroll();
    return () => unlockBodyScroll();
  }, [open]);

  return <DialogContext.Provider value={ctx}>{children}</DialogContext.Provider>;
}

/* ---------- Trigger ---------- */

type PolymorphicClick = (e: React.MouseEvent<any>) => void;

type TriggerProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  asChild?: boolean;
  children: React.ReactNode;
  onClick?: PolymorphicClick;
};

export function DialogTrigger({ asChild, children, onClick, ...rest }: TriggerProps) {
  const ctx = React.useContext(DialogContext);
  if (!ctx) return null;

  const handleClick: PolymorphicClick = (e) => {
    onClick?.(e);
    if (!e.defaultPrevented) ctx.setOpen(true);
  };

  if (asChild && React.isValidElement(children)) {
    const childProps: Record<string, any> = {
      onClick: handleClick,
    };
    // Ensure buttons don’t submit forms by default
    if ((children as any).type === 'button' && !(children as any).props?.type) {
      childProps.type = 'button';
    }
    return React.cloneElement(children as React.ReactElement<any>, childProps);
  }

  return (
    <button type="button" {...rest} onClick={handleClick}>
      {children}
    </button>
  );
}

/* ---------- Close ---------- */

type CloseProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  asChild?: boolean;
  children?: React.ReactNode;
  onClick?: PolymorphicClick;
};

export function DialogClose({ asChild, children, onClick, ...rest }: CloseProps) {
  const ctx = React.useContext(DialogContext);
  if (!ctx) return null;

  const handleClick: PolymorphicClick = (e) => {
    onClick?.(e);
    if (!e.defaultPrevented) ctx.setOpen(false);
  };

  if (asChild && React.isValidElement(children)) {
    const childProps: Record<string, any> = {
      onClick: handleClick,
    };
    if ((children as any).type === 'button' && !(children as any).props?.type) {
      childProps.type = 'button';
    }
    return React.cloneElement(children as React.ReactElement<any>, childProps);
  }

  return (
    <button type="button" {...rest} onClick={handleClick}>
      {children ?? 'Close'}
    </button>
  );
}

/* ---------- Content ---------- */

type DialogContentProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

export function DialogContent({ children, className, ...rest }: DialogContentProps) {
  const ctx = React.useContext(DialogContext);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // Close on Escape
  React.useEffect(() => {
    if (!ctx?.open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') ctx.setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [ctx]);

  if (!ctx?.open || !mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
{/* overlay */}
<div
  className="absolute inset-0 bg-black/50 md:bg-black/20"
  onClick={() => ctx.setOpen(false)}
/>

      {/* panel */}
      <div
        // tabIndex prevents unwanted browser auto-scroll/focus weirdness
        tabIndex={-1}
        className={clsx(
          'relative z-10 w-[92vw] max-w-[640px] rounded-2xl bg-white shadow-xl',
          'focus:outline-none',
          className
        )}
        {...rest}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

/* ---------- Header / Title / Footer ---------- */

type DialogSectionProps = React.HTMLAttributes<HTMLDivElement>;

export function DialogHeader({ className, ...rest }: DialogSectionProps) {
  return <div className={clsx('px-6 pt-6', className)} {...rest} />;
}
export function DialogTitle({
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={clsx('text-xl font-semibold', className)} {...rest} />;
}
export function DialogFooter({ className, ...rest }: DialogSectionProps) {
  return <div className={clsx('px-6 pb-6', className)} {...rest} />;
}
