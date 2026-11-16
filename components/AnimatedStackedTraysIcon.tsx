type AnimatedStackedTraysIconProps = {
  className?: string;
  size?: number;
};

export default function AnimatedStackedTraysIcon({
  className,
  size = 50,
}: AnimatedStackedTraysIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      focusable="false"
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="origin-center transition-transform duration-300 ease-out group-hover:-translate-y-4 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
        d="M448 16H64L32 176v144h448V176zm-12 160H320a64 64 0 0 1-128 0H76L98 58h316z"
        fill="currentColor"
      />
      <path
        className="origin-center transition-transform duration-300 ease-out group-hover:translate-y-4 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
        d="M320 352a64 64 0 0 1-128 0H32v144h448V352z"
        fill="currentColor"
      />
    </svg>
  );
}
