import styled from 'styled-components';
import {HiUsers, HiOutlineShoppingCart} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import {Container} from '../../Globalstyles';

export const OrderWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const OrderContainer = styled(Container)`
display: flex;
flex-direction: column;
${Container};
`;

export const OrderTitle = styled.h2`
font-size: clamp(2rem, 8vw, 5rem);
text-align: center;
margin-bottom: 3rem;
font-weight: bold;

@media only screen and (max-width:700px){
    margin-bottom: 0;
}
`;

export const OrderContentContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const OrderTabContainer = styled.div`
display: flex;
justify-content:center;
align-items:center;                                                                                                     
@media only screen and (max-width:700px){
    display: none;
}                                                                            
`;

export const OrderBtn = styled(Link)`
&:not(:last-child){
    margin-right: 3rem;
}
@media only screen and (max-width: 700px){
    display: none;
 }

`;

//Order card section

export const OrderCardWrapper = styled.div`                                                
display: flex;                                                                                                                                                                                                                                                                                                                                                                                                                                        
justify-content: space-between;
align-items: center;
margin-top: 6rem;
flex-direction: column;

@media only screen and (min-width:1800px) {
    flex-direction: row;
}
`;

export const OrderFeature = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 650px;
height: 320px;
background-color: #fff;
box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.18);
border-radius: 40px;
transition: all .4s ease;
margin-bottom: 5rem;
cursor: pointer;

@media only screen and (min-width: 1800px){
    margin-right: 10rem;
    padding: 0;
}

&:hover{
    box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.12);
    transform: scale(1.05);
    background-color: #333;
    color: #fff;
}

@media only screen and (min-width:1000px) {
    flex-direction: row;
}
@media only screen and (max-width:900px){
    margin-bottom: 10rem;
}
@media only screen and (max-width:700px){
    width: 550px;
    margin-bottom: 3rem;
    &:hover{
        transform: scale(1.02);
    }
}
@media only screen and (max-width:600px){
    width: 500px;
}
@media only screen and (max-width:500px){
    width: 380px;
    height: 300px;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.10);

}
@media only screen and (max-width:400px){
    width: 330px;
}
`;

export const OrderImg = styled.img`
height: 80%;
margin-top: 2rem;
margin-left: 2rem;
transition: all .5s ease;

&:hover {
    transform: scale(1.14) rotate(360deg);
}
@media only screen and (max-width:700px){
    height: 58%;
}
@media only screen and (max-width:600px){
    height: 50%;
}
@media only screen and (max-width:500px){
    height: 30%;
}
`;

export const OrderFeatureContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 2rem;

@media only screen and (max-width:500px){
    padding: 2rem;
    align-items: center;
}
`;

export const OrderFeatureTitle = styled.h3`
font-size: 3.6rem;
font-weight: 400;
line-height: 1.3;
margin-bottom: .6rem;

@media only screen and (max-width:700px){
    font-size: 3rem;
}
@media only screen and (max-width:600px){
    font-size: 2.5rem;
}
@media only screen and (max-width:400px){
    font-size: 2rem;
}
`;

export const OrderFeatureText = styled.p`
font-size: 1.6rem;
padding-bottom: 1.3rem;
@media only screen and (max-width:700px){
    font-size: 1.4rem;
}
@media only screen and (max-width:400px){
    font-size: 1.3rem;
}
`;

export const OrderCardDescription = styled.p`
font-size: 1.6rem;
padding-bottom: 1.3rem;
@media only screen and (max-width:700px){
    font-size: 1.4rem;
}
@media only screen and (max-width:400px){
    font-size: 1.3rem;
}
`;

export const OrderFeatureDetails = styled.div`
display: flex;
align-items: center;
`;

export const OrderFeatureItem = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
margin-right: 2.5rem;
`;

export const OrderItemTitle = styled.h4`
font-size: 1.4rem;

@media only screen and (max-width:400px){
    font-size: 1.3rem;
}
`;

export const OrderItemContent = styled.div`
display: flex;
align-items: center;
`;

export const OrderItemIcon = styled(HiUsers)`
 color: #E38B06;
 font-size: 3rem;
 padding-right: 1rem;
`;

export const OrderItemText = styled.p`
font-size: 1.8rem;
@media only screen and (max-width:700px){
    font-size: 1.6rem;
}
`;

export const OrderCardSection = styled.div`
display: flex;
align-items: center;
margin-left: 20px;
margin-right: 20px;
width: 100%;
`;

export const OrderSmallCards = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media only screen and (min-width: 1200px){
    margin-left: 2rem;
}
@media only screen and (min-width: 1500px){
    margin-left: 3.5rem;
}

`;

export const OrderCard = styled.div`
display: flex;
align-items: center;
width: 500px;
height: 300px;
background: #FFFFFF;
box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
border-radius: 20px;
transition: all .5s ease;
margin-bottom: 4rem;
cursor: pointer;
justify-content: space-between;
margin-left: 20px;
margin-right: 20px;
width: 100%;
&:hover {
    background-color: #333;
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width:1200px) {
    width: 397px;
    margin-right: 5rem;
}
@media only screen and (max-width:1000px) {
    width: 420px;
    margin-right: 2.5rem;
}
 
@media only screen and (max-width:700px){
    width: 380px;
    &:hover {
    transform: scale(1.1);
    }
}

@media only screen and (max-width:500px){
    margin-right: 0;
    &:hover {
    transform: scale(1);
    }
}
@media only screen and (max-width:400px){
    flex-direction: column;
    width: 280px;
}
`;

export const OrderCardImg = styled.div`
height: 10.3rem;
margin-left: -10rem;
`;

export const OrderCardContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0 2rem;
`;

export const OrderCardHeading = styled.h3`
font-size: 2.4rem;
font-weight: 400;

@media only screen and (max-width:700px){
    font-size: 2rem;
}
`;

export const OrderCardDetails = styled.div`
display: flex;
align-items: center;
margin-top: 1.5rem;
`;

export const OrderCardItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: center;
&:not(:last-child){
    margin-right: 2.5rem;
}
`;

export const OrderCardBuy = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: right;
`;

export const OrderCardTitle = styled.h4`
font-size: 1.4rem;

@media only screen and (max-width:700px){
    font-size: 1.2rem;
}
`;

export const OrderCardItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 2.5rem;
`;

export const OrderCardIcon = styled(HiUsers)`
 color: #E38B06;
 font-size: 2rem;
 margin-right: 1.3rem;

@media only screen and (max-width:700px){
    font-size: 1.5rem;
    margin-right: 1rem;
 }
`;

export const OrderBuyIcon = styled(HiOutlineShoppingCart)`
 color: white;
 font-size: 2rem;
 margin-right: 1.3rem;

@media only screen and (max-width:700px){
    font-size: 1.5rem;
    margin-right: 1rem;
 }
`;

export const OrderCardText = styled.p`
font-size: 1.4rem;

@media only screen and (max-width:700px){
    font-size: 1.2rem;
}
`;



export const OrderFeatureImg = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`;

export const Img = styled.img`
height: 16rem;
transition: all .5s ease;
border-radius: 10%;
&:hover {
    transform: scale(1.2);
}
padding: 0px 10px;

@media only screen and (max-width: 1000px){
    height: 9rem;
}

@media only screen and (max-width: 400px){
    display: none;
}
`;