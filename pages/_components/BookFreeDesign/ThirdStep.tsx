import { Grid } from '@mui/material';
import css from '../../../styles/bookfreedesign.module.scss';
import Bookfreedropdown from '../../_components/SelectButton/Bookfreedropdown';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { MdDateRange } from 'react-icons/md';
import { BsClockFill } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { format } from 'date-fns';
 interface Dataprops{
    setSelectShowRoom:any;
    setSelectDateData:any;
    setSelectTimeData:any
 }
const ThirdStep: React.FC<Dataprops>= ({setSelectShowRoom,setSelectDateData,setSelectTimeData}) => {
    const showroom: string[] = [
        "Coimbatore showroom",
        // "Rajapalayam showroom",
    ];
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [selectedTime, setSelectedTime] = React.useState(null);
    const minDate = new Date();
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const handleDateChange = (date) => {
          setSelectedDate(date);
          setSelectDateData(format(date, 'yyyy-MM-dd'));

      };
      const handleTimeChange = (time) => {

          setSelectedTime(time);          
          setSelectTimeData(format(time, 'h:mm:ss a'));

      };
    const inputElement = document.querySelector<HTMLInputElement>('#customInput');
    if (inputElement) {
        setTimeout(()=>{
            inputElement.placeholder = 'Select Time';
        } ,2000);
        
    }

    return (
        <>
            <div className={css.getfree_Estimate_Content + " mb-[3%]"}>
                <div className={css.Book_heading_content}>
                    <p className={css.heading}>USAGE</p>
                    <p className={css.step}> Step 3 0f 3</p>
                </div>
                <div className={css.book_Content}>
                    <Bookfreedropdown district={showroom} heading="Pick the nearest experience centre" defaultoption="Select Showroom" setSelectLocation={setSelectShowRoom}/>
                    <div className='mt-[4%] mb-[3.5%]'>
                        <div className={css.select_button_Heading}>Book a meeting with our Design Expert</div>
                        <Grid container gap={6}>
                            <Grid item xs={12} md={5.55}>
                                <div className={css.custom_date_picker}>
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        dateFormat="dd/MM/yyyy"
                                        minDate={minDate}
                                        placeholderText="Select date"
                                        className={css.date_content}
                                        style={{ width: '100%' }}
                                        calendarIcon={<MdDateRange/>}
                                    />
                                    <span className={css.LeftIcon}><MdDateRange className={css.icon_bottom}/></span><span className={css.RightIcon}><BiSolidDownArrow className={css.icon_bottom}/></span>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={5.55}>
                            <div className={css.custom_date_picker}>
                                    <DatePicker
                                        selected={selectedTime}
                                        onChange={handleTimeChange}
                                        dateFormat="h:mm aa"
                                        minDate={currentTime}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        placeholderText="Select time slot"
                                        className={css.date_content}
                                        style={{ width: '200%' }}
                                        
                                    />
                                    <span className={css.LeftIcon}><BsClockFill className={css.icon_bottom}/></span><span className={css.RightIcon}><BiSolidDownArrow className={css.icon_bottom}/></span>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ThirdStep;