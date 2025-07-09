import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import css from '../styles/getfreeEstimate.module.scss'
import FirststepGetfree from './_components/MultiStep/FirststepGetfree';
import { StepIconProps } from '@mui/material/StepIcon';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';
import StepLabel from '@mui/material/StepLabel';
import SecondstepGetfree from './_components/MultiStep/SecondstepGetfree';
import { useRouter } from 'next/router';
import * as config from "./../next.config.js";
import PageHeader from "./_components/PageHeader";
import Image from 'next/image';
import {toast} from 'react-toastify';
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 20,
    left: 'calc(-50% + 25px)',
    width: '10vw',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#eaeaf0',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#eaeaf0',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 2,

    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #222222',
    borderRadius: '50%',
    ...(ownerState.active && {
      color: 'white',
      border: '1vw solid red',
      borderRadius: "50%",

    }),

    '& .QontoStepIcon-completedIcon': {
      color: 'white',
      zIndex: 1,
      fontSize: 18,
      width: '3.5vw',
      height: '3.5vw',
      background: 'red',
      borderRadius: "50%",
      border: 'red',
    },
    
    '& .QontoStepIcon-circle': {
      width: '2vw',
      height: '2vw',
      borderRadius: '50%',
      backgroundColor: 'white',
    },
    '@media screen and (max-width: 1024px)': {
      '& .QontoStepIcon-circle': {
        width: '20px',
        height: '20px',
      },
      '& .QontoStepIcon-completedIcon':{
        width: '25px',
        height: '25px'
      }
    },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}


const steps = [
  'BHK TYPE',
  'ROOMS TO DESIGN',
  'GET QUOTE'
];
interface homeproperties {
  screenwidth: number;
  screenheight: number;

}
const GetfreeEstimate: React.FC<homeproperties> = ({ screenwidth, screenheight }) => {

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
  const [BHK , setBHK] = React.useState('');

  const [hidden, setHidden] = React.useState(false);


  const handleNext = () => {
    if(BHK !=""){
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } 
    else{
      toast.error('Please select any of the choices to go further');

    } 
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setBHK('');
  };
  const router = useRouter();
  const handleComplete = () => {
    router.push('/getQuote');
  };

console.log(BHK);


  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Typography>
            <FirststepGetfree setBHK={setBHK}/>
          </Typography>
        );
      case 1:
        return (
          <Typography>
            <SecondstepGetfree BHK={BHK}/>
          </Typography>
        );
      case 2:
        return null;

    }
  };

  const isLastStep = activeStep === steps.length - 2;

  return (
    <div className={css.lhomePage}>
                <div className={css.Img_content}>
                    <Image src={require("../public/assets/images/LhomeLogo.jpg")} className={css.Img_content_img} alt="Logo_Image"/>
                </div>
      <Box className={css.mutli_step}>

        <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={() => setActiveStep(index)}>
                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          <div className={css.getfree_Estimate_Content}>
            {getStepContent(activeStep)}
          </div>

          <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2  , marginBottom: "4%"}}>
            {isLastStep ? (
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={css.GetfreeEstimate_Button_Back}
              >
                Back
              </Button>) : ''}
            {isLastStep ? (
              <Button
                variant="contained"
                onClick={handleComplete}
                className={css.GetfreeEstimate_Button}
              >
                Get Quote
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                className={css.GetfreeEstimate_Button}
              >
                Next
              </Button>
            )}
          </Box>
          <div className='w-[100vw] h-[10vh]'></div>
        </div>
      </Box>
    </div>
  );
}

export default GetfreeEstimate;
