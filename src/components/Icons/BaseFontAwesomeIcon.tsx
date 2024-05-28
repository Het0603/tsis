import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export interface BaseFontAwesomeIconProps extends FontAwesomeIconProps {
  isSquare?: boolean;
}

export default function BaseFontAwesomeIcon({
  isSquare = false,
  style,
  ...props
}: BaseFontAwesomeIconProps) {
  let styleProp = style;

  if (isSquare) {
    styleProp = {
      ...style,
      width: "1em",
    };
  }

  return <FontAwesomeIcon style={styleProp} {...props} />;
}
