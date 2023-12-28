
import Cover from "../../components/Cover/Cover"
import DiscountForm from "../../components/DiscountForm/DiscountForm"
import HomeCategories from "../../components/HomeCategories/HomeCategories"
import SalesBlock from "../../components/SalesBlock/SalesBlock"

function HomePage(){
    return(
        <div>
            <Cover/>
            <HomeCategories/>
            <DiscountForm/>
            <SalesBlock/>
        </div>
    )
}

export default HomePage