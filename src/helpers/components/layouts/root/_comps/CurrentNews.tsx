import * as styles from "@/assets/css/styles";
import * as colors from "@/assets/colors";
import * as fonts from "@/assets/fonts";

import { CloseButton } from "@/dynamic-imports/components";

export const SingleCurrentNews = () => {
  return (
    <div className="bg-green-300 h-[60px] flex justify-between items-center">
      NEws
    </div>
  );
};

export default function CurrentNews() {
  return (
    <div
      className={`${styles.padding_x} py-[40px] bg-white absolute top-0 left-0 w-full h-[400px] shadow-md`}
    >
      {/* Header section */}
      <div
        className={`${colors.normal_border} bg red-300 w-full h-[50px] flex justify-between items-center border-b-[1px]`}
      >
        <p
          className={`${fonts.sub_title_bold} h-full ${colors.title} ${colors.active_border} border-b-[3px]`}
        >
          ताजा अपडेट
        </p>
        <CloseButton
          css={styles.current_news_close_button}
          onClick={() => alert("hello")}
        />
      </div>

      {/* Body section */}
      <div className="w-full flex-1 p-3 pl-0 grid grid-cols-3 gap-3 max-h-[calc(400px-80px-50px-24px-24px)] overflow-y-scroll">
        <SingleCurrentNews />
        <SingleCurrentNews />
        <SingleCurrentNews />
        <SingleCurrentNews />
        <SingleCurrentNews />
        <SingleCurrentNews />
        <SingleCurrentNews />
        <SingleCurrentNews />
        <SingleCurrentNews />
        <SingleCurrentNews />
      </div>
    </div>
  );
}
