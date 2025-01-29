import * as yup from 'yup'

export const LoginSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username Required'),
    password: yup
        .string()
        .min(6, ({min}) => `Pass must be ${min} or more characters`)
        .required("Password Required")
})