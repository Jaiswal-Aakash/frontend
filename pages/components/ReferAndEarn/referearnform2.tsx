import React from "react";
import css from "./referearnform2.module.scss";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AxiosService } from "../../../services/ApiService";
import { getUserId } from "../../../services/sessionProvider";
import { toast } from "react-toastify";


const referSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    number: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    city: Yup.string().required('City is required'),
});

const ReferEarnForm2 = () => {
    const [ loading , setLoading ] = React.useState(false)

    const formik = useFormik({
        initialValues: {
          city: '',
          name: '',
          email: '',
          number : ''
        },
        validationSchema : referSchema,
        onSubmit: async(values , { resetForm }) => {
            try{
               if(getUserId()){
                setLoading(true);
             const url = process.env.NEXT_PUBLIC_URL;

                // const response = await AxiosService.post('/referUser' , {...values , userId : getUserId()});
                const response = await AxiosService.post(`${url}/referUser` , {...values , userId : getUserId()});
                if(response.status == 201){
                    setLoading(false);
                    resetForm();
                    toast.success('user referred successfully')
                }else{
                    setLoading(false);
                    toast.error(`please check entered email is correct`);
                }
            }else{
                toast.error(`Please login to refer friends`)
            }

            }catch(err){
                console.log('error occured ' , err);
                setLoading(false);
                toast.error(`Please login to refer friends`);                
            }
        },
      });

      const handleSubmit = (e) =>{
        e.preventDefault();
        if(formik.values.city == '' || formik.values.name == '' || formik.values.email == '' || formik.values.number == ''){
            toast('please fill in all details to continue')
        }
        formik.handleSubmit(e);
      }

    return (
        <>
            <form onSubmit={(e)=>handleSubmit(e)} className={css.referearn_form2}>
                <div className={css.referform2_title}>
                    <p className={css.referform2_title_content}>Know someone who might be interested?</p>
                </div>
                <div className={`relative h-11 w-3/4 min-w-[200px]   ${css.referform2_div}`}>
                <input
                            placeholder="City"
                            name="city"
                            onChange={formik.handleChange}
                            value={formik.values.city}
                            className ="peer h-full w-full border-b placeholder-gray-700 placeholder-opacity-40 bg-transparent pt-4 pb-1.5 font-Montserrat text-16px font-normal   outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                </div>
                <div className={`relative h-11 w-3/4 min-w-[200px] ${css.referform2_div}`}>
                <input
                            placeholder="Name"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            className="peer h-full w-full border-b placeholder-gray-700 placeholder-opacity-40 bg-transparent pt-4 pb-1.5 font-Montserrat text-16px font-normal   outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                </div>
                <div className={`relative h-11 w-3/4 min-w-[200px] ${css.referform2_div}`}>
                <input
                            placeholder="Email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            className="peer h-full w-full border-b placeholder-gray-700 placeholder-opacity-40 bg-transparent pt-4 pb-1.5 font-Montserrat text-16px font-normal   outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                </div>
                <div className={`relative h-11 w-3/4 min-w-[200px] ${css.referform2_div}`}>
                <input
                            placeholder="Phone Number"
                            name="number"
                            onChange={formik.handleChange}
                            value={formik.values.number}
                            className="peer h-full w-full border-b placeholder-gray-700 placeholder-opacity-40 bg-transparent pt-4 pb-1.5 font-Montserrat text-16px font-normal   outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                </div>
                <div className={css.referearnform2_button}>
                <button type="submit" disabled={loading} className={css.referearnform2_button_content}><p className={css.referearnform2_button_text}>{loading ? <div className="spinner-border text-light" role="status">
  <span className="sr-only">Loading...</span>
</div>:"I KNOW SOMEONE"}</p></button>
            </div>
            </form>
        </>
    )
}
export default ReferEarnForm2;