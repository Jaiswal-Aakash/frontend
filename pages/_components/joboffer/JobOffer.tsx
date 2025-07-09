'use client'
import React from 'react';
import css from './JobOffer.module.scss';
import * as config from "../../../next.config.js";
import { MdKeyboardArrowLeft } from 'react-icons/md';
import ApplyForJobForm from '../Jobform/Jobform';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {FaFacebookF,FaInstagram,FaWhatsapp} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
interface JobDetails {
  details: {
    header: string;
    joblocation: string;
    'Job Description': string;
    'Job Requirement': {
      'Postiton Title': string;
      Experience: string;
      Qualification: string;
      'Job type': string;
      Salary: string;
      Location: string;
    };
  };
}

interface JobOfferProps {
  value: JobDetails[];
}

const JobOffer: React.FC<JobOfferProps> = ({ value }) => {
  const [jobOffers, setJobOffers] = React.useState<JobDetails[]>([]);
  const [applyBtn, setApplyBtn] = React.useState(false);
  const [heading,setHeading]=React.useState("");
  const [locationg,setLocating]=React.useState("");
  const [categarey,setcategeroy]=React.useState(false);

  const assetpath = config.assetPrefix ? `${config.assetPrefix}` : '';

  React.useEffect(() => {
    setJobOffers(value);
    if (value && value.length > 0) {
        let header = value[0].details.header;
        let locationBrand = value[0].details.joblocation;

        setHeading(header);
        setLocating(locationBrand); 
    }
}, [value]);

  const router = useRouter()

  const handleClick = () => {
    router.push({
        pathname: '/joinOverpage',
        query: {
            header: heading,
            joblocation: locationg,
            selectCat:categarey
        }
    });
}



  return (
    <div className={css.jobOuterContainer}>
      <div id="logo" className={`${css.lhomelogoholder}`}>
        <div className={css.lhomelogo}>
        </div>
      </div>
      <div className={css.jobInnerContainer}>
        <div className={css.jobLeftarrow}>
          <Link href={{ pathname: "/joinuspage" }}>
            <MdKeyboardArrowLeft className={css.LeftarrowIcon} />
            <p>View all jobs</p>
          </Link>
        </div>

        <div className={css.jobRow}>
          <div className={css.jobLeft}>
            {Array.isArray(jobOffers) && jobOffers.map((jobOffer, index) => (
              <div key={index}>

                <h1 className={css.jobHead}>{jobOffer.details.header}</h1>
                <p className={css.jobpara}>{jobOffer.details.joblocation}</p>
                <h2 className={css.jobSubHead}>Job Description</h2>
                <p className={css.jobDescription}>{jobOffer.details['Job Description']}</p>
                <h2 className={css.jobSubHead}>Job Requirement</h2>
                <table className={css.jobTable}>
                  <tbody>
                    <tr>
                      <td>Position Title</td>
                      <td>{jobOffer['Job Requirement']['Postiton Title']}</td>
                    </tr>
                    <tr>
                      <td>Experience</td>
                      <td>{jobOffer['Job Requirement']['Experience']}</td>
                    </tr>
                    <tr>
                      <td>Qualification</td>
                      <td>{jobOffer['Job Requirement']['Qualification']}</td>
                    </tr>
                    <tr>
                      <td>Job type</td>
                      <td>{jobOffer['Job Requirement']['Job type']}</td>
                    </tr>
                    <tr>
                      <td>Salary</td>
                      <td>{jobOffer['Job Requirement']['Salary']}</td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>{jobOffer['Job Requirement']['Location']}</td>
                    </tr>
                  </tbody>
                </table>


              </div>
            ))}
          </div>
          <div>
            <div>
              <button
                className={`${css.jobApplybtn} ${css.jobApplybtn2}`}
                onClick={() => handleClick()}
              >Apply Now
              </button>
            </div>
            <div>
              <button className={`${css.jobSharebtn} ${css.jobApplybtn2}`}>
                Share
                <div className={css.Socailmedia_icons}>
                <div className={css.Social_Content_icons}><FaFacebookF className={css.Social_icons}/></div>
                <div className={css.Social_Content_icons}><FaInstagram className={css.Social_icons}/></div>
                <div className={css.Social_Content_icons}><FaXTwitter className={css.Social_icons}/></div>
                <div className={css.Social_Content_icons}><FaWhatsapp className={css.Social_icons}/></div>
                </div>
              </button>

            </div>
          </div>
        </div>

        <div>
          <button className={`${css.jobApplybtn} ${css.jobApplybtn2}`} onClick={() => setApplyBtn(!applyBtn)}>Apply Now</button>
        </div>
      </div>
      {applyBtn ?
        <div className={css.applform }>
          <ApplyForJobForm header={heading} joblocation={locationg} selectCat={categarey} />
        </div> : ""
      }

    </div>
  );
};

export default JobOffer;
