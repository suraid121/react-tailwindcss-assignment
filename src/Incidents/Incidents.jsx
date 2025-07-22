import Header from '../reusable-components/Header';
import IncidentsCard from '../common-components/IncidentsCard'
import { useNavigate } from 'react-router-dom'
const Incidents = () => {
    let Navigate = useNavigate()
    const handleClick = () => {
        Navigate("/Incidents/StepOne")
    }
    return (
        <>
            <Header Title={'Home-Incidents'} Heading={'Incidents'} ButtonTitle={'+ New Incident'} className={'w-40 font-bold'} ButtonFun={handleClick} />
            <IncidentsCard />
        </>

    )
};
export default Incidents;