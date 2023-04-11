//TS pe for props
type logoProps = {
  width: number | string;
  height: number | string;
  hexColor: string;
  className: string;
};

const Logo = ({ width, height, hexColor, className }: logoProps) => {
  return (
    <>
      <svg width={width} height={height} className={className} viewBox="0 0 196.875 196.875">
        <defs id="SvgjsDefs1780"></defs>
        <g
          id="SvgjsG1781"
          transform="matrix(1.8912104023607883,0,0,1.8912104023607883,0,0)"
          fill={hexColor}
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M0 0v104.1h104.1V0zm101.7 101.7H2.4V2.4h99.3z"
          ></path>
        </g>
        <g
          id="SvgjsG1782"
          transform="matrix(1.7566973735550182,0,0,1.7566973735550182,58,3.484858232148362)"
          fill={hexColor}
        >
          <path d="M31.74 17.939999999999998 l13.8 0 l0 20.1 l-0.06 0 c-0.48 12.24 -10.38 21.96 -22.74 21.96 c-12.48 0 -22.74 -10.26 -22.74 -22.74 l0 -5.4 l19.98 0 l0 4.56 l-15.3 0 l0 0.84 c0 9.96 8.1 18.06 18.06 18.06 c9.9 0 17.88 -7.92 18.06 -17.76 l0 -15 l-4.5 0 l0 14.82 c0 7.44 -6.18 13.44 -13.56 13.44 c-6.24 0 -11.4 -4.26 -13.02 -9.84 l4.86 0 c1.38 3.12 4.5 5.28 8.16 5.28 c4.98 0 9 -4.02 9 -9 l0 -19.32 z"></path>
        </g>
        <g
          id="SvgjsG1783"
          transform="matrix(1,0,0,1,85,139.11140060424805)"
          fill={hexColor}
        >
          <path d=""></path>
        </g>
        <g
          id="SvgjsG1784"
          transform="matrix(2.236712516216524,0,0,2.236712516216524,93.45401826489497,115.82889602853655)"
          fill={hexColor}
        >
          <path d="M3.9746 20.19531 c-1.0938 0 -2.4219 -0.29297 -3.7305 -0.97656 l1.2402 -2.4121 c0.69336 0.48828 1.3672 0.75195 2.1387 0.75195 c1.1523 0 1.7383 -0.69336 1.7383 -2.3438 l0 -9.3262 l2.9297 0 l0 9.873 c0 2.8906 -1.7578 4.4336 -4.3164 4.4336 z"></path>
        </g>
      </svg>
    </>
  );
};

export default Logo;
