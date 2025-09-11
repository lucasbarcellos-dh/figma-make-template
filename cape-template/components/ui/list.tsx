import * as React from "react"
import { cn } from "./utils"
import { cva, type VariantProps } from "class-variance-authority"

// List variants
const listVariants = cva(
  "list-none p-0 m-0",
  {
    variants: {
      size: {
        small: "",
        medium: "",
        large: "",
      }
    },
    defaultVariants: {
      size: "medium",
    },
  }
)

// List Item variants
const listItemVariants = cva([
  "flex items-center gap-4 px-4 relative bg-card border-b border-border",
  "transition-colors hover:bg-accent/50 focus-visible:bg-accent focus-visible:outline-none",
  "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
], {
  variants: {
    size: {
      small: "py-2 min-h-[40px] gap-3",
      medium: "py-3 min-h-[56px] gap-4", 
      large: "py-4 min-h-[72px] gap-4",
    },
    selected: {
      true: "bg-accent border-l-2 border-l-primary",
      false: "",
    },
    interactive: {
      true: "cursor-pointer",
      false: "",
    },
    divider: {
      true: "border-b border-border",
      false: "border-b-0",
    }
  },
  defaultVariants: {
    size: "medium",
    selected: false,
    interactive: false,
    divider: true,
  },
})

// List Item Text variants
const listItemTextVariants = cva([
  "flex flex-col gap-1 justify-center min-w-0 flex-1"
], {
  variants: {
    size: {
      small: "",
      medium: "",
      large: "",
    }
  },
  defaultVariants: {
    size: "medium",
  },
})

const primaryTextVariants = cva([
  "font-medium text-foreground leading-tight"
], {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    }
  },
  defaultVariants: {
    size: "medium",
  },
})

const secondaryTextVariants = cva([
  "text-muted-foreground leading-tight"
], {
  variants: {
    size: {
      small: "text-xs",
      medium: "text-sm", 
      large: "text-base",
    }
  },
  defaultVariants: {
    size: "medium",
  },
})

// Context for sharing props between List and ListItem
interface ListContextValue {
  size?: "small" | "medium" | "large" | null
  divider?: boolean
}

const ListContext = React.createContext<ListContextValue>({})

// List component
interface ListProps 
  extends React.ComponentPropsWithRef<"ul">,
    VariantProps<typeof listVariants> {
  /**
   * Show divider below each list item
   * @defaultValue true
   */
  divider?: boolean
}

const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, size, divider = true, children, ...props }, ref) => {
    const contextValue: ListContextValue = { size, divider }
    
    return (
      <ListContext.Provider value={contextValue}>
        <ul
          ref={ref}
          className={cn(listVariants({ size }), className)}
          {...props}
        >
          {children}
        </ul>
      </ListContext.Provider>
    )
  }
)
List.displayName = "List"

// List Item component
interface ListItemProps 
  extends React.ComponentPropsWithRef<"li">,
    VariantProps<typeof listItemVariants> {
  /**
   * Show selected state for list item
   * @defaultValue false
   */
  selected?: boolean
  /**
   * Content rendered at end of list item
   */
  secondaryAction?: React.ReactNode
  /**
   * Show disabled state for list item
   * @defaultValue false
   */
  disabled?: boolean
  /**
   * Override divider setting from parent List
   */
  divider?: boolean
  /**
   * Click handler for interactive list items
   */
  onClick?: () => void
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ 
    className, 
    size: sizeProp, 
    selected = false, 
    disabled = false,
    divider: dividerProp,
    secondaryAction,
    onClick,
    children, 
    ...props 
  }, ref) => {
    const context = React.useContext(ListContext)
    const size = sizeProp ?? context.size ?? "medium"
    const divider = dividerProp ?? context.divider ?? true
    const interactive = !!onClick

    return (
      <li
        ref={ref}
        className={cn(listItemVariants({ 
          size, 
          selected, 
          interactive,
          divider 
        }), className)}
        onClick={disabled ? undefined : onClick}
        data-disabled={disabled}
        data-selected={selected}
        tabIndex={interactive && !disabled ? 0 : undefined}
        role={interactive ? "button" : undefined}
        {...props}
      >
        <div className="flex flex-1 items-center gap-4 min-w-0">
          {children}
        </div>
        {secondaryAction && (
          <div className="flex items-center shrink-0">
            {secondaryAction}
          </div>
        )}
      </li>
    )
  }
)
ListItem.displayName = "ListItem"

// List Item Text component
interface ListItemTextProps 
  extends React.ComponentPropsWithRef<"div">,
    VariantProps<typeof listItemTextVariants> {
  /**
   * Primary text content
   */
  primary?: React.ReactNode
  /**
   * Secondary text content
   */
  secondary?: React.ReactNode
}

const ListItemText = React.forwardRef<HTMLDivElement, ListItemTextProps>(
  ({ 
    className, 
    size: sizeProp,
    primary,
    secondary,
    children,
    ...props 
  }, ref) => {
    const context = React.useContext(ListContext)
    const size = sizeProp ?? context.size ?? "medium"

    return (
      <div
        ref={ref}
        className={cn(listItemTextVariants({ size }), className)}
        {...props}
      >
        {primary && (
          <span className={cn(primaryTextVariants({ size }))}>
            {primary}
          </span>
        )}
        {secondary && (
          <span className={cn(secondaryTextVariants({ size }))}>
            {secondary}
          </span>
        )}
        {children}
      </div>
    )
  }
)
ListItemText.displayName = "ListItemText"

export { List, ListItem, ListItemText }