import ChickenImg from '../../images/Big-chicken.svg';

import {
    MealsContainer,
    MealsWrapper,
    MealsImage,
    Img,
    MealsContent,
    MealsContentTitle,
    MealsContentText,
    MealsContentItems,
    MealsContentList,
    MealsContentDetails,
    MealsContentIcon,
    MealsContentCategory,
    MealsContentBtn
} from './Meals.styles';


function Meals() {


    return (
        <div>
            <MealsContainer>
                <MealsWrapper>
                    <MealsImage>
                        <Img src={ChickenImg} alt= "Personalized Chicken meal"/> 
                    </MealsImage>
                    <MealsContent>
                        <MealsContentTitle>Welcome to our services</MealsContentTitle>
                        <MealsContentText>
                        Order the meal you have chosen. Fresh and packed ingredients straight to your door step.
                        All menu are fresh and set for you in portion to make it easier to cook immediately. 
                        </MealsContentText>
                        <MealsContentItems>
                            <MealsContentList>
                                <MealsContentDetails>
                                    <MealsContentIcon/>
                                    <MealsContentCategory> Vegetarian</MealsContentCategory>
                                </MealsContentDetails>
                                <MealsContentDetails>
                                    <MealsContentIcon/>
                                    <MealsContentCategory>Gluten-Free</MealsContentCategory>
                                </MealsContentDetails>
                                <MealsContentDetails>
                                    <MealsContentIcon/>
                                    <MealsContentCategory>Card-conscious</MealsContentCategory>
                                </MealsContentDetails>
                                <MealsContentDetails>
                                    <MealsContentIcon/>
                                    <MealsContentCategory>Calorie -conscious</MealsContentCategory>
                                </MealsContentDetails>
            
                            </MealsContentList>
                            <MealsContentList>
                                <MealsContentDetails>
                                    <MealsContentIcon/>
                                    <MealsContentCategory>15 mins pre-kit</MealsContentCategory>
                                </MealsContentDetails>
                                <MealsContentDetails>
                                    <MealsContentIcon/>
                                    <MealsContentCategory>Featured Meals</MealsContentCategory>
                                </MealsContentDetails>
                                <MealsContentDetails>
                                    <MealsContentIcon/>
                                    <MealsContentCategory>New recipes</MealsContentCategory>
                                </MealsContentDetails>
                                <MealsContentDetails>
                                    <MealsContentIcon/>
                                    <MealsContentCategory>Low fat meals</MealsContentCategory>
                                </MealsContentDetails>
            
                            </MealsContentList>
                        </MealsContentItems>
                        <MealsContentBtn>

                        </MealsContentBtn>
                    </MealsContent>
                </MealsWrapper>
            </MealsContainer>
            
        </div>
    )
}

export default Meals;
