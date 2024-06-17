import "styled-components";

interface BtnRootType {
  color: string;
  background: string;
  borderColor: string;
  colorHover: string;
  backgroundHover: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    button: {
      primary: BtnRootType;
      secondary: BtnRootType;
    };

    defaultTextColor: string;
    background: string;
    paper: string;
    borderColor: string;
    cardPaper: string;
    cardBorderColor: string;
    inputPlaceholderColor: string;
    linksColor: string;
  }
}
