import Header from '../reusable-components/Header';
import IncidentsCard from '../common-components/IncidentsCard';
import ChatBox from '../reusable-components/ChatBox';
const Dashboard = () => {
    return (
        <>
            <Header Title={'Welcome back'} Heading={'Dashboard'} ButtonTitle={'Cypher AI'}/>
            <IncidentsCard />
            <ChatBox/>
        </>
    )
};

export default Dashboard;