type AnimatedCodeIconProps = {
  className?: string;
  size?: number;
};

export default function AnimatedCodeIcon({
  className,
  size = 50,
}: AnimatedCodeIconProps) {
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
        className="origin-center transition-transform duration-300 ease-out group-hover:-translate-x-8 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        d="M160 389a20.9 20.9 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389"
        fill="currentColor"
      />
      <path
        className="origin-center transition-transform duration-300 ease-out group-hover:translate-x-8 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        d="M352 389a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.9 20.9 0 0 1 352 389"
        fill="currentColor"
      />
      <path
        d="M208 437a21 21 0 0 1-20.12-27l96-320a21 21 0 1 1 40.23 12l-96 320A21 21 0 0 1 208 437"
        fill="currentColor"
      />
    </svg>
  );
}
