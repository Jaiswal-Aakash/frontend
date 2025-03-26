import React from 'react'
import Image from 'next/image';
import ReactFlagsSelect from "react-flags-select";
import css from '../styles/loginRegister.module.scss';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AxiosService } from '../services/ApiService';
import { toast } from 'react-toastify';

//Registration form schema
const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    number: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    pincode: Yup.string().required('Pincode is required'),
    checkforwhatsapp: Yup.boolean().oneOf([true , false], 'You must accept WhatsApp opt-in'),
});

const Registerpage = ({toggleForm , setShow}) => {

    const [select, setSelect] = React.useState("IN");
    const onSelect = (code) => setSelect(code)

    //Registration formValidation
    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            email: '',
            pincode: '',
            checkforwhatsapp: false,
        },
        validationSchema: SignupSchema,
        onSubmit: async (values) => {
            try {
              const response = await AxiosService.post('/register',  values );
              if(response.status == 201){
                toast.success('User details registered successfully')
                toggleForm();
              }
            } catch (error) {
              console.error('Error:', error.message);
            }
          },
    });

    const { values, handleChange, handleBlur, touched, errors } = formik;

    const handleNumberChange = (e) => {
        const numericValue = e.target.value.replace(/\D/g, '');
        formik.setFieldValue(e.target.name, numericValue);
    };

  return (
    <div className={css.formsofmodel}>

    <form className={css.form_content} onSubmit={formik.handleSubmit}>
        <div className={css.mainContent}>
            <h2>Sign Up</h2>
            <div>
                <div className={css.input_form_content}>
                <input type='text' className={css.SInput1} placeholder='Enter your name' name='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                {formik.touched.name && formik.errors.name ? <span className='text-red-500 flex'>{formik.errors.name}</span> : null}
                </div>
                <div className={css.InputContainer}>
                    <div className={css.dropdown_icon}>
                        <ReactFlagsSelect
                            selected={select}
                            onSelect={onSelect}
                            fullWidth={false}
                            countries={["", "IN", "fi", "GB", "IE", "IT", "NL", "SE"]}
                            className={css.number_dropdown}
                        />
                    </div>
                    <input type='text' className={css.SInput2} placeholder='Enter your mobile number' name='number'
                        onChange={handleNumberChange}
                        onBlur={handleBlur}
                        value={values.number} />
                        {touched.number && errors.number ? <span className='text-red-500 flex'>{errors.number}</span> : null}
                </div>
                {/* <div className={css.whatsapplabel}>
                    <div className='w-full flex flex-col justify-center items-right pe-2'>
                        <span className={css.label1}>you can reach me on whatsApp</span>
                        <span className={css.label2}>opt for meeting and offer updates on WhatsApp</span>
                    </div>
                    <div className={css.whatsappcheckbox}>
                        <input type="checkbox" className={css.SInput3} checked={values.checkforwhatsapp}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='checkforwhatsapp'
                            id="customCheckbox" />
                        <label htmlFor="customCheckbox" className={css.checkmark}></label>
                    </div>
                </div> */}
                <div className={css.input_form_content}>
                <input type='text' className={css.SInput1} placeholder='Enter your email' name='email' onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email} />
                {touched.email && errors.email ? <span className='text-red-500 flex'>{errors.email}</span> : null}</div>
                <div className={css.input_form_content}>
                <input type='text' className={css.SInput0} placeholder='Enter your current residence pincode' name='pincode'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pincode} />
                {touched.pincode && errors.pincode ? <span className='text-red-500 flex'>{errors.pincode}</span> : null}</div>

                <button type='submit' className={css.SignButton}>REGISTER</button>
            </div>
            <p>Or Login With</p>
            <div className={css.mainVal}>
                <Image src={require("../public/assets/icons/Gicon.png")} className={css.G_icon} alt='g_icon' />
            </div>
            <p style={{ marginTop: 'unset' }}>First time user? <span onClick={toggleForm} style={{ fontWeight: 'bold', cursor: 'pointer' }}>Log in </span> here</p>
        </div>
    </form>
</div>
  )
}

export default Registerpage