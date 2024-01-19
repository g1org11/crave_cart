import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export interface IconProps extends FontAwesomeIconProps {
  show?: boolean;
}

export interface CardProps {
  // img: any;
  meal: string;
  ingredients: string;
  price: string;
}
