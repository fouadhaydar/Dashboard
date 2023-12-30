import { tokens } from "../Theme/constance";
import { Mode, MyColors } from "../type";

const myColors = (mode: Mode): MyColors => {
  const colors = tokens(mode);
  return {
    backgroundColorHeaderFooter:
      mode === "dark" ? colors.primary[700] : colors.greenAccent[900],
    backgroundColorAction:
      mode === "light"
        ? `${colors.greenAccent[900]}!important`
        : `${colors.primary[400]}!important`,
    elementColor:
      mode === "dark" ? colors.greenAccent[400] : colors.primary[100],
    elementColorOnHover:
      mode === "light"
        ? `${colors.grey[100]}!important`
        : `${colors.greenAccent[400]}!important`,
    modalColor: mode === "dark" ? colors.primary[400] : "white",
    btnColor: colors.greenAccent[400],
    btnColorHover: colors.greenAccent[600],
    btnTextColor: mode === "dark" ? colors.primary[700] : colors.primary[400],
  };
};
export default myColors;
