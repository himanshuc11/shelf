import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  fill: string;
};

function Wallet(props: Props) {
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
        d="M19.155 7.548h.239c3.14 0 5.69 2.625 5.69 5.845v6.44c0 3.22-2.55 5.834-5.69 5.834H8.606c-3.14 0-5.69-2.614-5.69-5.834v-6.44c0-3.22 2.55-5.845 5.69-5.845h.24c.022-1.4.557-2.706 1.524-3.686.979-.992 2.23-1.494 3.641-1.529 2.822 0 5.11 2.334 5.144 5.215zm-7.59-2.438a3.592 3.592 0 00-1.013 2.438h6.896c-.034-1.913-1.559-3.465-3.437-3.465-.876 0-1.786.362-2.446 1.027zm6.76 6.93a.863.863 0 00.853-.875V9.812a.863.863 0 00-.854-.875.87.87 0 00-.853.875v1.353a.87.87 0 00.853.875zm-7.898-.875a.863.863 0 01-.853.875.87.87 0 01-.854-.875V9.812a.87.87 0 01.854-.875c.477 0 .853.396.853.875v1.353z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default Wallet;
