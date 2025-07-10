import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as config from "./../next.config.js";
import Typography from '@mui/material/Typography';
import css from '../styles/bookfreedesign.module.scss';
import PageHeader from "./_components/PageHeader";
import SecondStep from './_components/BookFreeDesign/SecondStep';
import ThirdStep from './_components/BookFreeDesign/ThirdStep';
import FirstStep from './_components/BookFreeDesign/FirstStep';
import Image from 'next/image.js';
import { AxiosService } from '../services/ApiService.js';
import { useRouter } from 'next/router.js';
import { toast } from 'react-toastify';
const steps = [
    'Select campaign settings',
    'Create an ad group',
    'Create an ad'
];
interface homeproperties {
    screenwidth: number;
    screenheight: number;

}
const Bookfreedesign: React.FC<homeproperties> = ({ screenwidth, screenheight }) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const router = useRouter();

    const page = React.useRef(null);
    const [prevPosition, setPrev] = React.useState(0);
    const [hidden, setHidden] = React.useState(false);
    const [own, setOwn] = React.useState('');
    const [floorplan, setFloorPlan] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [planning, setSelectPlan] = React.useState('');
    const [looking, setSelectLooking] = React.useState('');
    const [budget, setSelectBudget] = React.useState('');
    const [Possession, setSelectPossession] = React.useState('');
    const [nearestcentre, setNearestCentre] = React.useState('');
    const [meetingdate, setSelectDateData] = React.useState('');
    const [meetingtime, setSelectTimeData] = React.useState('');
    console.log({ floorplan, location, own, planning, looking, budget, Possession, nearestcentre, meetingdate, meetingtime });


    const handleNext = () => {

        if (activeStep == 0 && (floorplan == "" || location == "" || own == "")) {
            toast.error('Please enter necessary details to go further');
        } else if (activeStep == 1 && (planning == "" || looking == "" || budget == "" || Possession == "")) {
            toast.error('Please enter necessary details to go further');
        } else if (activeStep == 2 && (nearestcentre == "" || meetingdate == "" || meetingtime == "")) {
            toast.error('Please enter necessary details to go further');
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }

    };

    const handleBack = () => {
        if(activeStep == 3){
            setNearestCentre('');
            setSelectDateData('');
            setSelectTimeData('')
        }else if(activeStep == 2){
            setSelectPlan('');
            setSelectLooking('');
            setSelectBudget('');
            setSelectPossession('');
        }else if(activeStep == 1){
            setFloorPlan('');
            setLocation('');
            setOwn('');
        }
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleComplete = async() => {
        const newCompleted = { ...completed };
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
         if (activeStep == 2 && (nearestcentre == "" || meetingdate == "" || meetingtime == "")) {
            toast.error('Please enter necessary details to go further');
         } else{
             // const response = await AxiosService.post('/bookingsession' , {  
             const url = process.env.NEXT_PUBLIC_API_URL || "https://api.lhome.co.in/api";
        const response = await AxiosService.post(`${url}/bookingsession`, {
            floorplan, location, own, planning, looking, budget, Possession, nearestcentre, meetingdate, meetingtime
        })
        if(response.status == 201){
            toast.success('Thank you , your free design is booked , Our team will contact you soon ');
            setTimeout(()=>{
                router.push('/')
            }, 2000)
        }else{
            toast.success(`it's been network error try onemore time`)
            setTimeout(()=>{
                router.push('/Bookfreedesign')
            }, 2000)
        }
    }
        // handleNext();
    };
    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Typography>
                        <FirstStep setBHK={setFloorPlan} setSelectButton={setOwn} setSelectLocation={setLocation} />
                    </Typography>
                );
            case 1:
                return (
                    <Typography>
                        <SecondStep setSelectPlan={setSelectPlan} setSelectLooking={setSelectLooking} setSelectPossession={setSelectPossession} setSelectBudget={setSelectBudget} />
                    </Typography>
                );
            case 2:
                return (
                    <Typography>
                        <ThirdStep setSelectShowRoom={setNearestCentre} setSelectDateData={setSelectDateData} setSelectTimeData={setSelectTimeData} />
                    </Typography>
                );

        }
    };

    const isLastStep = activeStep === steps.length - 1;

    return (
        <>
            <div className={css.lhomePage}>
                <div className={css.Img_content}>
                    <Image src={require("../public/assets/images/LhomeLogo.jpg")} className={css.Img_content_img} alt="Logo_Image" />
                </div>
                <Box sx={{ width: '100%' }} className={css.mutli_step}>
                    <div>
                        <div className={css.getfree_Estimate_Content}>
                            {getStepContent(activeStep)}
                        </div>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: '1%', width: '85%' }}>
                            {activeStep === 0 ? null : (
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={css.Bookfreedesign_Button_Back}
                                >
                                    Back
                                </Button>)}
                            {isLastStep ? (
                                <Button
                                    onClick={handleComplete}
                                    className={css.Bookfreedesign_Button}
                                >
                                    Book free design session
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleNext}
                                    className={css.Bookfreedesign_Button}
                                >
                                    Next
                                </Button>
                            )}
                        </Box>
                        <div className='w-[100vw] h-[10vh]'></div>
                    </div>
                </Box>
            </div>
        </>
    );
}

export default Bookfreedesign;
