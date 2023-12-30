import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled, useTheme } from "@mui/material";
import myColors from "../../../components/color";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

export const HorizontalStepper = ({
  step,
  steps,
}: {
  step: number;
  steps: string[];
}) => {
  const theme = useTheme();
  const { btnColor } = myColors(theme.palette.mode);

  const QontoConnector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "GrayText",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: btnColor,
      },
    },
  }));

  return (
    <Box
      sx={{
        ".MuiSvgIcon-root": {
          color: "GrayText",
          fontSize: "xx-large",
        },
        ".css-oxf95d-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
          color: btnColor,
        },
        ".css-1uizxs6-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
          color: btnColor,
        },
        width: "100%",
      }}
    >
      <Stepper
        activeStep={step}
        alternativeLabel
        sx={{ marginTop: "40px", marginBottom: "40px" }}
        connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
