import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  fill: string;
};

function Location(props: Props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.042 6.019c0-2.684 2.242-4.852 4.954-4.852 2.72 0 4.962 2.168 4.962 4.852 0 1.352-.492 2.607-1.3 3.671a12.871 12.871 0 01-3.233 2.999c-.284.185-.54.2-.85 0A12.623 12.623 0 013.342 9.69c-.81-1.064-1.301-2.32-1.301-3.671zm3.321.15c0 .9.734 1.607 1.633 1.607.9 0 1.64-.707 1.64-1.606 0-.892-.74-1.634-1.64-1.634-.9 0-1.633.742-1.633 1.634z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default Location;
