import bag from "@/assets/icons/bag.svg";
import bagNotification from "@/assets/icons/bagNotification.svg";
import dots from "@/assets/icons/dots.svg";
import home from "@/assets/icons/home.svg";
import leftArrow from "@/assets/icons/leftArrow.svg";
import list from "@/assets/icons/list.svg";
import menu from "@/assets/icons/menu.svg";
import plus from "@/assets/icons/plus.svg";
import search from "@/assets/icons/search.svg";
import settings from "@/assets/icons/settings.svg";
import shadow from "@/assets/icons/shadow.svg";

import { FunctionComponent } from "react";
import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export const icons: { [key: string]: JSX.ElementType } = {
	bag,
	bagNotification,
  dots,
  home,
	leftArrow,
  list,
	menu,
	plus,
	search,
	settings,
	shadow
};

export type IconType = keyof typeof icons;

type IconProps = {
  style?: TextStyle;
  name: IconType;
	size?: number;
};

export const Icon: FunctionComponent<IconProps> = ({
  style,
  name,
	size = 24,
  ...props
}) => {
  const SelectedIcon = icons[name];
  return (
    <>
      {SelectedIcon && (
        <SelectedIcon width={size} height={size} style={style} {...props} />
      )}
    </>
  );
};
