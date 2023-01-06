import classNames from "classnames";

function Skeleton({ times, className }) {
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-blue-300",
    "rounded",
    "my-2.5",
    className
  );
  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-blue-300",
    "via-blue-100",
    "to-blue-300"
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div className={outerClassNames} key={i}>
          <div className={innerClassNames} />
        </div>
      );
    });
  return boxes;
}
export default Skeleton;
