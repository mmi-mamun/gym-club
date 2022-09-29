import './MainContainer.css'
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import QnA from '../../QnA/QnA';
import Footer from '../Footer/Footer';

const MainContainer = () => {
    // const addToListHandler = () =>{

    // }



    return (
        <div>
            <div className='main-container'>
                <LeftSide></LeftSide>
                <RightSide></RightSide>
            </div>
            
            <div className='forBonusMark'>
                <QnA></QnA>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainContainer;