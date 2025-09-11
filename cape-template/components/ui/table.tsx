"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const tableVariants = cva(
  "w-full border-collapse border-spacing-0 relative",
  {
    variants: {
      size: {
        small: [
          "[&_th]:min-h-12 [&_td]:min-h-12",
          "[&_th]:py-2",
          "[&_td]:py-2",
          "[&_th]:text-sm [&_td]:text-sm",
          "[&_th]:leading-[145%] [&_td]:leading-[145%]"
        ],
        medium: [
          "[&_th]:min-h-14 [&_td]:min-h-14", 
          "[&_th]:py-3",
          "[&_td]:py-3", 
          "[&_th]:text-sm [&_td]:text-base",
          "[&_th]:leading-[150%] [&_td]:leading-[150%]"
        ]
      },
      bordered: {
        true: "border border-gray-300 rounded-lg overflow-hidden",
        false: ""
      }
    },
    defaultVariants: {
      size: "medium",
      bordered: false
    }
  }
);

export interface TableProps extends Omit<React.ComponentProps<"table">, "border">, VariantProps<typeof tableVariants> {
  sticky?: boolean;
}

function Table({ className, size, bordered, sticky, ...props }: TableProps) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-auto"
    >
      <table
        data-slot="table"
        data-size={size}
        data-bordered={bordered ? "true" : "false"}
        data-sticky={sticky ? "true" : "false"}
        className={cn(tableVariants({ size, bordered }), className)}
        {...props}
      />
    </div>
  );
}

export interface TableHeaderProps extends React.ComponentProps<"thead"> {
  sticky?: boolean;
}

function TableHeader({ className, sticky, ...props }: TableHeaderProps) {
  return (
    <thead
      data-slot="table-header"
      data-sticky={sticky ? "true" : "false"}
      className={cn(
        sticky && "sticky top-0 z-10 shadow-sm",
        "[&_tr]:border-b [&_tr]:border-gray-300",
        className
      )}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(
        "[&_tr:last-child]:border-0",
        "[&_tr:hover_td]:bg-primary/5",
        className
      )}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-gray-50 font-medium",
        "[&_tr]:border-t [&_tr]:border-gray-300",
        "[&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

export interface TableRowProps extends React.ComponentProps<"tr"> {
  selected?: boolean;
  disabled?: boolean;
}

function TableRow({ className, selected, disabled, ...props }: TableRowProps) {
  return (
    <tr
      data-slot="table-row"
      data-selected={selected ? "true" : "false"}
      data-disabled={disabled ? "true" : "false"}
      className={cn(
        "border-b border-border transition-colors",
        !disabled && "hover:bg-primary/5",
        selected && "bg-primary/10",
        disabled && "text-muted-foreground pointer-events-none select-none",
        className,
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-left align-top font-semibold text-gray-900 px-4",
        "whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "align-top text-gray-900 px-4",
        "whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(
        "text-gray-600 text-left text-lg font-medium mb-3 px-2",
        className
      )}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
