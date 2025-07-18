import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type FC,
} from "react";

export interface AnimatedShinyTextProps
  extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={` text-primary/100 dark:text-primary/100 animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
