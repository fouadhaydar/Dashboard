import { Box, Button, useTheme } from "@mui/material"
import { Header } from "../../components/Header"
import TextField from '@mui/material/TextField';
import { object, string  }  from "yup";
import { Formik } from "formik"
import myColors from "../../components/color";

const contactRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/;

const initialValues = {
    firstName: "",
    lastName:"",
    contact:"",
    email:"",
    addresse1: "",
    addresse2:""
}
  const userSchema = object().shape({
    firstName: string().required("First Name Is Required"),
    lastName: string().required("Last Name Is Required"),
    contact: string().required("Invald Contact Number")
            .matches(contactRegExp, "Phone number should be like +44 7777 777 777"),
    email: string().email().required("Invald Email"),
    addresse1: string().required("Adress Is Required"),
  });
  
const ProfileForm = () => {
    const theme = useTheme();
    const {  btnColor, btnTextColor, btnColorHover} = myColors(theme.palette.mode);
    const handleFormSubmit = () => {
        console.log("aaa");
      };
    return (
        <Box height={'70%'}>
            <Header title="Create User" subtitle="Create New User Profile" />

            <Formik 
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            validationSchema={userSchema}
            >{({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit
            }) => (
                <form onSubmit={handleSubmit} style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Box display={"flex"} flexDirection = {'column'} width={'60%'} gap={'30px'} mx={'auto'} alignItems={'flex-end'} sx={{
                        '.MuiFormHelperText-root':{
                            fontSize:14,
                            fontWeight:'bold',
                            paddingY:1
                        },
                        '.MuiInputBase-input': {
                            fontSize:16,
                        },
                        '.MuiButtonBase-root:hover': {
                            background: btnColorHover
                        }
                    }}>
                        <Box display={"flex"} justifyContent={'center'} alignItems={'center'} gap={'30px'} width={'100%'}>
                            <TextField
                                fullWidth
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                label="First Name"
                                variant="outlined"
                                type="text"
                                color= {theme.palette.mode === 'dark' ? 'warning' : 'primary'}
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                            />
                            <TextField
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                fullWidth
                                name = "lastName"
                                label = "Last Name"
                                variant = "outlined"
                                color = {theme.palette.mode === 'dark' ? 'warning' : 'primary'}
                                error = {!!errors.lastName && !!touched.lastName}
                                helperText = {touched.lastName && errors.lastName}
                            />
                        </Box>
                        <Box display={"flex"} flexDirection = {'column'} gap={'30px'} width={'100%'} >
                            <TextField
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                fullWidth
                                name ="email"
                                label = "Email"
                                variant = "outlined"
                                color = {theme.palette.mode === 'dark' ? 'warning' : 'primary'}
                                error={!!errors.email && !!touched.email}
                                helperText={touched.email && errors.email}
                            />
                            <TextField
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                fullWidth
                                name="contact"
                                label="Contact Number"
                                variant="outlined"
                                color = {theme.palette.mode === 'dark' ? 'warning' : 'primary'}
                                error={!!errors.contact && !!touched.contact}
                                helperText={touched.contact && errors.contact}
                            />
                            <TextField
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.addresse1}
                                fullWidth
                                name="addresse1"
                                label="Adress 1"
                                variant="outlined"
                                color= {theme.palette.mode === 'dark' ? 'warning' : 'primary'}
                                error={!!errors.addresse1 && !!touched.addresse1}
                                helperText={touched.addresse1 && errors.addresse1}
                            />
                            <TextField
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.addresse2}
                                fullWidth
                                name="addresse2"
                                label="Adress 2"
                                variant="outlined"
                                color= {theme.palette.mode === 'dark' ? 'warning' : 'primary'}
                            />
                        </Box>
                        <Button 
                            disableElevation
                            sx={{ backgroundColor: btnColor, color:btnTextColor, flex:1, width:'100px', paddingY:1 }} 
                           type="submit" variant="contained" > Add 
                        </Button>
                    </Box>
                </form>
            )}
            </Formik>
        </Box>
    )
}

export default ProfileForm