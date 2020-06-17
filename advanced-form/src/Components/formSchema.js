import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup
     .string()
     .email("Must be a valid email address")
     .required("Must include email address"),
    name: yup
     .string()
     .min(3, "Name must be at least 3 characters long.")
     .required("Name is required"),
    password: yup
     .string()
     .min(4, "Password must have at least 4 characters")
     .required("Password is required")
});

export default formSchema