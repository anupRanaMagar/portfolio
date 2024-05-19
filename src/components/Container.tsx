import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <div
      id={id}
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-6 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Container;
