import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  fill: string;
};

function Guide(props: Props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.333 14C2.333 7.56 7.548 2.333 14 2.333c6.44 0 11.666 5.227 11.666 11.667 0 6.452-5.226 11.667-11.666 11.667A11.656 11.656 0 012.333 14zm14.269 2.135l1.89-5.973a.524.524 0 00-.654-.665l-5.973 1.866a.78.78 0 00-.514.514l-1.866 5.985a.522.522 0 00.653.653l5.95-1.867a.756.756 0 00.514-.513z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default Guide;
