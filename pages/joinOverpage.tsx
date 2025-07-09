'use client'
import * as React from "react";
import css from "../styles/joinOffer.module.scss";
import { useRouter } from "next/router.js";
import ApplyForJobForm from "./_components/Jobform/Jobform";
import Joinpoolcom from "./_components/JoinPool/joinPoolcontent";
import Footer from "./_components/Footer/Footer";

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

const JoinOverpage: React.FC = () => {
    const router = useRouter();
    const { jobDetails } = router.query
    const hideDiv = router.query.hideDiv === 'true';
    const [details, setDetails] = React.useState<JobDetails[]>([]);
    const headingFromQuery = router.query.header as string;
    const locationgFromQuery = router.query.joblocation as string;
    const categoryFromQuery = router.query.selectCat === 'true';


    React.useEffect(() => {
        if (jobDetails) {

            try {
                const parsedDetails = JSON.parse(jobDetails as string) as JobDetails[];
                setDetails(parsedDetails);

            } catch (error) {
                console.error("Failed to parse jobDetails:", error);
            }
        }
    }, [jobDetails]);

    return (
        <React.Fragment>
            <div className="animate-fade-in" >
                <div className={css.lhomePage}>
                    <div className={css.LhomeBottom}>

                        <div className={css.lhomelogo} style={hideDiv ?  {backgroundColor:"white"}:{}}>
                            <img src="/assets/images/LhomeLogo.jpg" alt="logo Lhome" key={"unique one"} />
                        </div>

                        {hideDiv &&
                            <div>
                                <Joinpoolcom />
                            </div>
                        }

                        <div className={css.contentBox}>
                            <ApplyForJobForm header={headingFromQuery} joblocation={locationgFromQuery} selectCat={categoryFromQuery} />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default JoinOverpage;