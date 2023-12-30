export type Mode = "dark" | "light";
export type defaultMode = "light" | "dark" | "system";

export interface ColorModeContextType {
  toggleColorMode: () => void;
}
export interface MyColors {
  backgroundColorHeaderFooter: string;
  backgroundColorAction: string;
  elementColor: string;
  elementColorOnHover: string;
  modalColor: string;
  btnColor: string;
  btnColorHover: string;
  btnTextColor: string;
}
