import css from '../../../styles/bookfreedesign.module.scss';
import React from 'react';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
// import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
// import 'react-calendar/dist/Calendar.css';
// import dayjs from 'dayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


function TimeComponent(){
    // const currentTime = dayjs();
    const [value, setValue] = React.useState(new Date());
    const [showPicker, setShowPicker] = React.useState(false);
    const [showPickerDate, setShowPickerDate] = React.useState(false)

    const togglePicker = () => {
        setShowPicker(!showPicker);
    };
    const togglePickerDate = () => {
        setShowPickerDate(!showPickerDate);
    };
    let now = new Date()
    const [dateState, setDateState] = React.useState(new Date());
    const changeDate = (e) => {
        setDateState(e)
    }
return(
    <>
                            <div className={css.input__content}>
                                <div onClick={togglePicker} className={css.input_field}>
                                    <MdOutlineAccessTimeFilled className={css.input_field_icon} />
                                    Select Time
                                </div>
                                {showPicker && (
                                    <p>hi</p>

                                    // <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    //     <DemoContainer
                                    //         components={['MobileTimePicker']}
                                    //     >
                                    //         <DemoItem label="Mobile variant">
                                    //             <StaticTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                                    //         </DemoItem>
                                    //     </DemoContainer>
                                    // </LocalizationProvider>
                                )}

                            </div>
    </>
)
}
export default TimeComponent;