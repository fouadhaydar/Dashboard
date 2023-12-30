// import { Box, Fade, Modal, Typography, TextField, Button, useTheme } from "@mui/material"
// import { useState } from "react";
// import myColors from "./color";
// import { CalenderEvent } from "../scenes/calender";
// import { Formik } from "formik";
// import { tokens } from "../Theme/constance";

// const style = {
//     position: 'absolute' ,
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     p: 4,
// };

// interface DataModale {
//     handleClose: () => void
//     handleUpdate: (content: CalenderEvent) => void
//     open: boolean,
//     event: CalenderEvent
// }

// export const CustomModal = ({handleClose, open, handleUpdate, event}:DataModale) => {
//     const [error, setError] = useState<boolean>(false)

//     const initialValues:CalenderEvent = {
//         title: event.title,
//         start:event.start,
//         end:event.end,
//         id:event.id
//     }

//     const theme = useTheme()
//     const colors = tokens(theme.palette.mode)
//     const {modalColor, btnColor, btnTextColor, btnColorHover} = myColors(theme.palette.mode)

//     // const updateNewEvent = (values: {content:string, endDate:string}) => {
//     //     if (values.content.length === 0) {
//     //         console.log("you can't")
//     //         setError(true);
//     //         return;
//     //     }
//     //     const event:CalenderEvent = {
//     //         id: "123",
//     //         title: values.content,
//     //         start: '',
//     //         end: values.endDate,
//     //     }
//     //     handleUpdate(event)
//     //     handleClose()
//     // }

//     return (
//         <Modal
//             aria-labelledby="transition-modal-title"
//             aria-describedby="transition-modal-description"
//             open={open}
//             onClose={handleClose}
//             closeAfterTransition
//             slotProps={{
//                 backdrop: {
//                     timeout: 500,
//                 },
//             }}
//     >
//         <Fade in={open}>
//         <Box sx={style}
//             display={'flex'}
//             justifyContent={'space-around'}
//             flexDirection={'column'} gap={'30px'}
//             bgcolor={modalColor}
//             borderRadius={2}
//             >
//                 <Typography id="transition-modal-title" variant="h4" component="h2">
//                     Text in a modal
//                 </Typography>
//                 <Box sx={{
//                     '.MuiButtonBase-root': {
//                         mx:0,
//                         py:1
//                     },
//                     '.MuiButtonBase-root:hover': {
//                         background: btnColorHover
//                     }
//                 }}>
//                     <Typography id="transition-modal-description" variant="h6" py={2}>
//                             Please enter a new title for your event
//                     </Typography>
//                     <Formik
//                         initialValues={initialValues}
//                         onSubmit={async (values) => {
//                             addNewEvent(values)
//                         }}
//                         // validationSchema={userSchema}

//                     >
//                         {({
//                             values,
//                             // errors,
//                             // touched,
//                             // handleBlur,
//                             handleChange,
//                             handleSubmit
//                         }) => (
//                             <form onSubmit={handleSubmit}>
//                                 <TextField fullWidth
//                                     placeholder="Please enter your event"
//                                     color='secondary'
//                                     name="content"
//                                     onChange={handleChange}
//                                     value={values.content}
//                                     error={error}
//                                     helperText={ error && "the field is empty please enter ne event" }
//                                     margin='normal'
//                                 />
//                                 <TextField
//                                     value={values.endDate}
//                                     fullWidth
//                                     placeholder = "2019-04-01"
//                                     margin = "normal"
//                                     onChange = {handleChange}
//                                     name = "endDate"
//                                     label = 'End Date'
//                                     error={error}
//                                     helperText={ error && "the field is empty please enter ne event" }
//                                     color='secondary'
//                                 />
//                                 <Box display={"flex"} justifyContent={'center'} alignItems={'center'} gap={'10px'}>
//                                     <Button
//                                         type="submit"
//                                         disableElevation
//                                         sx={{ backgroundColor: btnColor, color:btnTextColor , mt:2, flex:1 }}
//                                         onClick={() => handleSubmit()} variant="contained" > Add
//                                     </Button>
//                                     <Button
//                                         disableElevation
//                                         sx={{ backgroundColor:  theme.palette.mode  === 'light' ? colors.grey[300] : colors.grey[100] , color:btnTextColor , mt:2, flex:1 }}
//                                         onClick={() => handleClose()} variant="contained" > Close
//                                     </Button>
//                                 </Box>
//                             </form>
//                         )}

//                     </Formik>
//                 </Box>
//             </Box>
//         </Fade>
//     </Modal>
//     )
// }
