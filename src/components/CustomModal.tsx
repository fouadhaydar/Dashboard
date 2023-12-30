import {
  Box,
  Fade,
  Modal,
  Typography,
  TextField,
  Button,
  useTheme,
} from "@mui/material";
import myColors from "./color";
import { CalenderEvent } from "../scenes/calender";
import { Form, Formik } from "formik";
import uuid from "react-uuid";
import { object, string } from "yup";
import { tokens } from "../Theme/constance";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  p: 4,
};

interface DataModale {
  handleClose: () => void;
  handleAdd: (content: CalenderEvent) => void;
  open: boolean;
  selectedDate: Date;
}

const regTime = /^\d{4}-\d{2}-\d{2}$/;

const eventSchema = object().shape({
  content: string().required("event title Name Is Required"),
  endDate: string().matches(regTime).required("be precise"),
});

export const CustomModal = ({
  handleClose,
  open,
  handleAdd,
  selectedDate,
}: DataModale) => {
  // const [error, setError] = useState<boolean>(false)

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { modalColor, btnColor, btnTextColor, btnColorHover } = myColors(
    theme.palette.mode
  );
  const initialValues = {
    content: "",
    endDate: "",
  };

  const addNewEvent = (values: { content: string; endDate: string }) => {
    const event: CalenderEvent = {
      id: uuid(),
      title: values.content,
      start: selectedDate.toISOString(),
      end: values.endDate,
    };
    handleAdd(event);
    handleClose();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={style}
          display={"flex"}
          justifyContent={"space-around"}
          flexDirection={"column"}
          gap={"30px"}
          bgcolor={modalColor}
          borderRadius={2}
        >
          <Typography id="transition-modal-title" variant="h4" component="h2">
            Text in a modal
          </Typography>
          <Box
            sx={{
              ".MuiButtonBase-root": {
                mx: 0,
                py: 1,
              },
              ".MuiButtonBase-root:hover": {
                background: btnColorHover,
              },
            }}
          >
            <Typography id="transition-modal-description" variant="h6" py={2}>
              Please enter a new title for your event
            </Typography>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                addNewEvent(values);
              }}
              validationSchema={eventSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    placeholder="Please enter your event"
                    color="secondary"
                    name="content"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.content}
                    error={!!touched.content && !!errors.content}
                    helperText={
                      !!touched.content &&
                      !!errors.content &&
                      "the field is empty please enter ne event"
                    }
                    margin="normal"
                  />
                  <TextField
                    value={values.endDate}
                    fullWidth
                    placeholder="2019-04-01"
                    margin="normal"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="endDate"
                    label="End Date"
                    error={!!touched.endDate && !!errors.endDate}
                    helperText={
                      !!touched.endDate &&
                      !!errors.endDate &&
                      "the field is empty please enter ne event"
                    }
                    color="secondary"
                  />
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"10px"}
                  >
                    <Button
                      type="submit"
                      disableElevation
                      sx={{
                        backgroundColor: btnColor,
                        color: btnTextColor,
                        mt: 2,
                        flex: 1,
                      }}
                      variant="contained"
                    >
                      {" "}
                      Add
                    </Button>
                    <Button
                      disableElevation
                      sx={{
                        backgroundColor:
                          theme.palette.mode === "light"
                            ? colors.grey[300]
                            : colors.grey[100],
                        color: btnTextColor,
                        mt: 2,
                        flex: 1,
                      }}
                      onClick={() => handleClose()}
                      variant="contained"
                    >
                      {" "}
                      Close
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
