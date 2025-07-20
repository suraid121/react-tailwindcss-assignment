import NavBar from "../reusable-components/NavBar"
import Header from "../reusable-components/Header"
const HeaderSection = ({title , heading})=>{
    return(
        <>
            <NavBar/>
            <Header title={title} heading={heading}/>
        </>
    )
};
export default HeaderSection;