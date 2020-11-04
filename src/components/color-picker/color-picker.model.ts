import { Color } from "react-color";

export interface Props {
  setColor: React.Dispatch<React.SetStateAction<Color>>;
  color: {
    r: number;
    g: number;
    b: number;
  };
}
