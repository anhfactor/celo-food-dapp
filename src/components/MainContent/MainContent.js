import Navbar from '../Navbar/Navbar';
import {Button} from '../../Globalstyles';
import {
    MainContentContainer,
    MainContentElement,
    MainContentElementText,
    MainContentTitle,
    MainContentTitleText,
    MainContentText,
    MainContentBtn,

} from './MainContent.styles';

const MainContent = props =>{
    return(
        <div>
           <MainContentContainer>
               <Navbar cUSDBalance={props.cUSDBalance} celoBalance={props.celoBalance} address={props.address}
                    connectCeloWallet={props.connectCeloWallet}/>
               <MainContentElement>
                   <MainContentElementText>
                        <MainContentTitle>
                            <MainContentTitleText>Food</MainContentTitleText>
                            <MainContentTitleText>For you all day</MainContentTitleText>
                        </MainContentTitle>
                        <MainContentText>
                            Discover, Order food, Add food
                        </MainContentText>
                        <MainContentBtn>
                           <Button primary bigFont>Pick your meals</Button>
                        </MainContentBtn>
                   </MainContentElementText>
               </MainContentElement>
           </MainContentContainer>
        </div>
    )
}

export default MainContent;