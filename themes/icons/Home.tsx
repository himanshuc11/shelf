import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  fill: string;
};

function Home(props: Props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.657 24.235v-3.567c0-.91.744-1.649 1.661-1.649h3.353c.44 0 .863.174 1.175.483.311.31.486.729.486 1.166v3.567c-.003.38.147.743.416 1.012.268.268.634.42 1.015.42h2.288a4.036 4.036 0 002.85-1.166 3.978 3.978 0 001.182-2.827V11.511c0-.856-.382-1.67-1.044-2.219l-7.783-6.17a3.614 3.614 0 00-4.606.083L4.045 9.292a2.886 2.886 0 00-1.128 2.22v10.152c0 2.21 1.805 4.003 4.032 4.003h2.235c.792 0 1.436-.635 1.442-1.421l.031-.01z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default Home;
