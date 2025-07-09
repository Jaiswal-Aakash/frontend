import css from '../../../styles/bookfreedesign.module.scss';
import Selectbutton from '../../_components/SelectButton/selectbutton';
import Bookfreedropdown from '../../_components/SelectButton/Bookfreedropdown';
function SecondStep({setSelectPlan,setSelectLooking,setSelectBudget,setSelectPossession}) {
    const Planinglabels: string[] = ["Move In", "Rent Out", "Renovate"];
    const Lookinglabels: string[] = ["End-to-end Interiors", "Kitchen and Wardrobes", "Only Kitchen"];
    const priceList: string[] = [
        "Upto ₹ 1.5 Lakhs",
        "₹ 1.5 - ₹ 4 Lakhs",
        "₹ 8 - ₹ 12 Lakhs",
        "₹ 12 - ₹ 20 Lakhs",
        "₹ 20 Lakhs +",

    ];
    const profession: string[] = [
        "Already in possession",
        "0-3 months",
        "3-6 months"
    ]
    return (
        <>
            <div className={css.getfree_Estimate_Content}>
                <div className={css.Book_heading_content}>
                    <p className={css.heading}>USAGE</p>
                    <p className={css.step}> Step 2 0f 3</p>
                </div>
                <div className={css.book_Content}>
                    <Selectbutton labels={Planinglabels} heading="I am planning to..." setSelectButton={setSelectPlan}/>
                    <div style={{ paddingTop: "4%" }}><Selectbutton labels={Lookinglabels} heading="I am looking for..." setSelectButton={setSelectLooking}/></div>
                    <div className={css.NextBook_page}>
                        <div className={css.Dropdown_list}><Bookfreedropdown district={priceList} heading="I have a budget of..." defaultoption="Select Budget" setSelectLocation={setSelectBudget}/></div>
                        <div className={css.Dropdown_list}><Bookfreedropdown district={profession} heading="Possession in..." defaultoption="select Possession" setSelectLocation={setSelectPossession}/></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SecondStep;