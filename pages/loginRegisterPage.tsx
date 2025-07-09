import React from 'react';
import leftvector from './_components/loginRegister/leftvector.png';
import Image from 'next/image';
import css from '../styles/loginRegister.module.scss';
import { TbReload } from "react-icons/tb";
import Registerpage from './Registerpage';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Login from './login';
import { AxiosService } from '../services/ApiService';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import OtpLoginform from './otpForm';


// const OtpSchema = Yup.object().shape({
//     otp: Yup.string()
//         .matches(/^\d{6}$/, 'OTP must be a 6-digit number')
//         .required('OTP is required'),
// });



function LoginRegisterPage({ setShow }) {

    const [showLogin, setShowLogin] = React.useState(true);
    // const [isChecked, setIsChecked] = React.useState<boolean>(false);
    const [number, setNumber] = React.useState<number>(6379649524);
    // const [count, setCount] = React.useState<number>(30);

    const [select, setSelect] = React.useState("IN");
    const onSelect = (code) => setSelect(code)

    const toggleForm = () => {
        setShowLogin(!showLogin);
    };

    // const handleCheckboxChange = () => {
    //     setIsChecked(!isChecked);
    // };
    const [otpForm, setOtpForm] = React.useState(true);
    // const formik = useFormik({
    //     initialValues: {
    //         otp: '',
    //     },
    //     validationSchema: OtpSchema,
    //     onSubmit: async (values, { setSubmitting }) => {
    //         try {
    //             const response = await AxiosService.post('/signin/auth', {
    //                 number: number,
    //                 otp: Number(values.otp)
    //             })
    //             const { user, token } = response.data;
    //             Cookies.set('userId', user.id, { expires: 7, path: '/' });
    //             Cookies.set('token', token, { expires: 7, path: '/' });
    //             setShow(false);
    //             if (response.status == 201) {
    //                 toast.success("logged in successfully");
    //             } else {
    //                 toast.error('please provide correct OTP')
    //             }
    //         } catch (err) {
    //             console.log(err);
    //         } finally {
    //             setSubmitting(false);
    //         }
    //     }
    // });

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     formik.handleSubmit();
    // };

    // React.useEffect(() => {
    //     count > 0 && setTimeout(() => setCount(count - 1), 1000);
    //   }, [count]);
    //   console.log(count);

    return (
        <>

            <div className={css.formLR}>
                <div className={css.loginLeftImage}>
                    <div className={css.emptybubble}></div>
                    <Image src={leftvector} alt='leftvector' className={css.Left_vector} />
                </div>
                {showLogin ? (
                    <div className={css.formsofmodel}>

                        <form className={css.form_content}>
                            {otpForm ?
                                (
                                    <Login toggleForm={toggleForm} otpForm={otpForm} setOtpForm={setOtpForm} select={select} onSelect={onSelect} setNumber={setNumber} />
                                )
                                : (
                                    // <form >
                                    //     <div className={css.Otp_heading}>Verify your number</div>
                                    //     <div className={css.otp_Box}>
                                    //         <p className={css.otp_box_content} style={{ padding: 0 }}>Phone Number: {number}</p>
                                    //         <p className={css.otp_box_content}>One Time Password</p>
                                    //         <input
                                    //             type='text'
                                    //             className={css.otp_input}
                                    //             placeholder='Enter OTP'
                                    //             name='otp'
                                    //             onChange={formik.handleChange}
                                    //             onBlur={formik.handleBlur}
                                    //             value={formik.values.otp}
                                    //         />
                                    //         {formik.touched.otp && formik.errors.otp ? (
                                    //             <span className='text-red-500'>{formik.errors.otp}</span>
                                    //         ) : null}
                                    //         <p className={css.otp_box_content}>Your OTP will expire in <span style={{ color: '#F44336' }}>00.{count}</span></p>
                                    //         <button type='submit' className={css.otp_button} onClick={handleClick}>Submit</button><br />
                                    //         {count == 0 && <button type='button' className={css.otp_resend_button}><TbReload /> Resend</button>}
                                    //     </div>
                                    //     <div className={css.otp_Verify_content}>We have sent OTP to your number, please verify</div>
                                    // </form>
                                    <OtpLoginform setShow={setShow} number={number}/>
                                )}
                        </form>
                    </div>
                ) :
                    (
                        <Registerpage toggleForm={toggleForm} setShow={setShow} />

                    )}

            </div>
        </>
    )
}

export default LoginRegisterPage;