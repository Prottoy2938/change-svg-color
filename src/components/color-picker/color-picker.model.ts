import { ColorResult, Color } from "react-color";

export interface Props {
  setColor: React.Dispatch<React.SetStateAction<Color>>;
  color: Color;
}
