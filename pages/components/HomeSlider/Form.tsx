import React from 'react';
import css from './Form.module.scss';
import { useRouter } from 'next/router';
import { toast } from "react-toastify";
import { AxiosService } from '../../../services/ApiService';
import { getUserId } from '../../../services/sessionProvider';
const Form: React.FC = () => {
    const userId = getUserId();
    const router = useRouter();
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        number: '',
        pincode: '',
        checkforwhatsapp: false,
    });



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setFormData({
            ...formData,
            checkforwhatsapp: checked,
        });
    };
    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = regex.test(email);

        if (!isValidEmail) {
            toast.error('Please enter a valid email address.');
        }

        return isValidEmail;
    };

    const handleSession = async () => {

        if(userId){router.push('/Bookfreedesign');}
        else{
        let errorPresent = false;

        if (
            formData.name.trim() === '' ||
            formData.email.trim() === '' ||
            formData.number.trim() === '' ||
            formData.pincode.trim() === ''
        ) {
            errorPresent = true;
        }
        if (errorPresent) {
            toast.error('Please provide necessary details or login to continue');
            return;
        }
        if (!validateEmail(formData.email)) {
            errorPresent = true;
            return; 
        }
        if (errorPresent) {
            return;
        }
        if (formData.number.trim().length !== 10 || isNaN(Number(formData.number.trim()))) {
            errorPresent = true;
            toast.error('Mobile number should be a 10-digit number.');
        }
        if (errorPresent) {
            return;
        }
        if (formData.pincode.trim().length !== 6 || isNaN(Number(formData.pincode.trim()))) {
            errorPresent = true;
            toast.error('Pincode should be a 6-digit number.');
        }
        if (errorPresent) {
            return;
        }


             const url = process.env.NEXT_PUBLIC_URL;

        try {
            // const response = await AxiosService.post('/register', {...formData , number: Number(formData.number) , pincode: Number(formData.pincode)});
            const response = await AxiosService.post(`${url}/register`, {...formData , number: Number(formData.number) , pincode: Number(formData.pincode)});

            if (response.status == 201) {
                toast.success('Registration successful!');
                router.push('/Bookfreedesign');
            } else {
                toast.error('Failed to register. Please try again.');
            }
        } catch (error) {
            console.error('Error occurred while registering:', error);
            toast.error('An error occurred while registering. Please try again.');
        }
    }
    };

    return (
        <div className={`${css.designermeetholder}`}>
            <div className={css.designermeet}>
                <div className={`${router.pathname == "/" ? css.designermeettitleForHome : css.designermeettitle} pl-10`}>
                    Meet a designer
                </div>
                <div id="formentry" className={`flex  gap-6 ${css.inputbox}`}>
                    <div className={`relative h-full w-full min-w-[200px] ${css.marginmove_5}`}>
                        <input
                            autoComplete='off'
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            className={`peer h-full w-full border-b border-blue-gray-200 bg-transparent ${router.pathname == "/" ? 'pt-3' : 'pt-4'} pb-1.5 font-Montserrat text-16px font-normal placeholder-gray-700 placeholder-opacity-40  outline outline-0 transition-all placeholder-shown:border-blue-gray-800 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 ${css.forminput}`} />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:after:scale-x-100 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        </label>

                    </div>
                    <div className={`relative h-full w-full min-w-[200px] ${css.marginmove_2}`}>
                        <input
                            autoComplete='off'
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your Email"
                            className={`peer h-full w-full  border-b border-blue-gray-200 bg-transparent ${router.pathname == "/" ? 'pt-3' : 'pt-4'} pb-1.5 font-Montserrat text-16px font-normal placeholder-gray-700 placeholder-opacity-40  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 ${css.forminput}`} />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:after:scale-x-100 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        </label>
                    </div>
                </div>
                <div className="flex  gap-6" style={{ width: "100%" }}>
                    <div className={`relative h-full w-full min-w-[200px] ${css.marginmovebig_2}`}>
                        <input
                            autoComplete='off'
                            name="number"
                            value={formData.number}
                            onChange={handleInputChange}
                            placeholder="Enter your Mobile Number"
                            className={`peer h-full w-full border-b border-blue-gray-200 bg-transparent ${router.pathname == "/" ? 'pt-3' : 'pt-4'} pb-1.5 font-Montserrat text-16px font-normal placeholder-gray-700 placeholder-opacity-40  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 ${css.forminput}`} />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:after:scale-x-100 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        </label>
                    </div>
                </div>
                <div className={css.whatsapplabel}>
                    <div className='w-full flex flex-col justify-end items-end'>
                        <span className={css.label1}>you can reach me on whatsApp</span>
                        <span className={css.label2}>opt for meeting and offer updates on WhatsApp</span>
                    </div>
                    <label className={`${css.whatsappcheckbox_content}`}>
                        <input
                            autoComplete='off' type="checkbox" className={"form-checkbox h-5 w-5 text-blue-600 " + css.checkboxForLg} id="customCheckbox_banner" checked={formData.checkforwhatsapp} onChange={handleCheckboxChange} />
                        <label htmlFor="customCheckbox_banner" className={css.checkmark}></label>
                    </label>
                </div>
                <div className="flex  gap-6" style={{ width: "100%", marginTop: "-5px" }}>
                    <div className={`relative h-full w-full min-w-[200px] ${css.marginmovebig_2}`}>
                        <input
                            autoComplete='off'
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            placeholder="Enter your current residence pincode"
                            className={`peer h-full w-full border-b border-blue-gray-200 bg-transparent ${router.pathname == "/" ? 'pt-3' : 'pt-4'} pb-1.5 font-Montserrat text-16px font-normal placeholder-gray-700 placeholder-opacity-40  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 ${css.forminput}`} />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:after:scale-x-100 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        </label>
                    </div>
                </div>
                <div className={css.designerbookingconfirmationholder} style={{ marginTop: "12px" }}>
                    <button className={css.designerbookingconfirmationbutton} onClick={handleSession}><label>BOOK FREE DESIGN SESSION</label></button>
                </div>
                <div className={css.designerbookingwarningtext}>By submitting this form, you agree to the privacy policy and terms of use</div>
            </div>
        </div>
    );
};

export default Form;