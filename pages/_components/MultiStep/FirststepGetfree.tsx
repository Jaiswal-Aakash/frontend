import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import css from '../../../styles/getfreeEstimate.module.scss';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: '1.5vw',
  height: '1.5vw',
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
  '@media screen and (max-width: 1024px)': {
    width: '15px', 
    height: '15px', 
  },
}));


const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  backgroundColor: 'red',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: '1.5vw',
    height: '1.5vw',
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
    '@media screen and (max-width: 1024px)': {
      width: '15px', 
      height: '15px', 
    },
  },
  'input:hover ~ &': {
    backgroundColor: 'red',
  },
  [theme.breakpoints.down('sm')]: {
    '&:before': {
      width: '15px',
      height: '15px',
    },
  },
  
}));

function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}


export default function FirststepGetfree({setBHK}) {
  const handleBHKChange = (e)=>{
  setBHK(e.target.value)
  }
  return (
    <div className={css.GetfreeEstimate_content_value}>
    <p className={css.GetfreeEstimate_head}>Your Ideas. Our Expertise.</p>
    <p className={css.GetfreeEstimate_para}>Our 50+ design experts use state-of-the-art 3D design technology, SpaceCraft, to ensure that you get the perfect designs for your home. Wait no more! Start your home interiors journey with us.</p>
    <FormControl style={{width:"65%", margin:'0 auto' ,textAlign:"left"}}>
      <p className={css.radio_button_Heading}>Your floorplan</p>
      <RadioGroup defaultValue=" " aria-labelledby="demo-customized-radios" name="customized-radios" style={{display:"grid",gridTemplateColumns: "auto auto auto",justifyContent:"space-between",rowGap:"25px" }} >
        <FormControlLabel value="1" onChange={handleBHKChange} control={<BpRadio />} label="1 BHK" className={css.radio_label}/>
        <FormControlLabel value="2" onChange={handleBHKChange} control={<BpRadio />} label="2 BHK" className={css.radio_label}/>
        <FormControlLabel value="3" onChange={handleBHKChange} control={<BpRadio />} label="3 BHK" className={css.radio_label}/>
        <FormControlLabel value="4" onChange={handleBHKChange} control={<BpRadio />} label="4 BHK" className={css.radio_label}/>
        <FormControlLabel value="5" onChange={handleBHKChange} control={<BpRadio />} label="5 BHK" className={css.radio_label}/>
        <FormControlLabel value="6" onChange={handleBHKChange} control={<BpRadio />} label="6 BHK" className={css.radio_label}/>
      </RadioGroup>
    </FormControl>
    </div>
  );
}
