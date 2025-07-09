
import * as React from "react";
import css from './category.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import CircleArrow from "../../../public/assets/SVGIcons/CircleArrow";
import { useRouter } from "next/router";

const Category: React.FC = () => {
    const router = useRouter();
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;    
    const [listingCategories, setListingCategories] = React.useState([]);
    React.useEffect(() => {
    let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
    api.then((data: any) => {
        let lcategories = [];
         data.data.settings.categories.forEach((cats: any) => {
            let lc: any = {};
            lc.image = `${assetpath}${cats.image}`;
            lc.text = cats.text;
            lc.category = cats.category;
            lcategories.push(lc);
         });
        setListingCategories(lcategories);
        
    })
    .catch(error => {
        console.log(error);
    });
}, [assetpath]);

const handleRoutes = (categoryData)=>{
    switch (categoryData) {
        case 'Warddrobe':
            router.push('/wardrobe')
            break;
        case 'Bed Room':
            router.push('/bedroom')
            break;
        case 'Modular Kitchen':
            router.push('/modularkitchen')
            break;
        default:
            break;
    }
    
}

   return (
      <React.Fragment>
         <div className={css.listingcategory}>
    <div className={css.listingcategoryOuterLayer +` `}>
        <p className={css.categorytitle}>Listing category<span>
            <CircleArrow scale={".5"} />
            </span>
            </p>
        <div className={css.listingfilmrole}>
            {
                listingCategories.map((cats: any, index: number) => 
                <div key={`${cats.category}_${index}_${index}`} className={css.division + ` cursor-pointer`} onClick={()=>handleRoutes(cats.category)}>
                    <div className={"pe-4 "+css.divisionchild}>
                        <div className={css.categoryimage}>
                            <img key={`${cats.category}_${index}`} loading="lazy" src={cats.image} alt={cats.category} />
                        </div>
                        <div className={css.category}>
                            <div className={css.categoryname}>{cats.category}</div>
                            <div className={css.categorytext}>{cats.text}</div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    </div>
    </div>
      </React.Fragment>
   )
}

export default Category;