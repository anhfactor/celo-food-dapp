import {OutlineButton, Button} from '../../Globalstyles';
import {
    OrderContainer,
    OrderWrapper,
    OrderContentContainer,
    OrderTabContainer,
    OrderBtn,
    OrderCardWrapper,
    OrderCardSection,
    OrderCardDescription,
    OrderCard,
    OrderCardContent,
    OrderCardHeading,
    OrderCardDetails,
    OrderCardItems,
    OrderCardTitle,
    OrderCardItem,
    OrderCardIcon,
    OrderCardText,
    Img,
    OrderCardBuy,
    OrderBuyIcon

} from './Orders.styles';
const Orders = props => {
    return (
        <div>
            <OrderWrapper>
                <OrderContainer>
                    <OrderContentContainer>
                        <OrderTabContainer>
                            <OrderBtn to='/'>
                                <OutlineButton big bigFont bigRadius>Sea Food</OutlineButton>
                            </OrderBtn>
                            <OrderBtn to='/'>
                                <OutlineButton big bigFont bigRadius>Vegetarian</OutlineButton>  
                            </OrderBtn>
                            <OrderBtn to='/'>
                                <OutlineButton big bigFont bigRadius>Desert</OutlineButton>
                            </OrderBtn>
                            <OrderBtn to='/'>
                                <OutlineButton big bigFont bigRadius>Drink</OutlineButton>  
                            </OrderBtn>
                            <OrderBtn to='/'>
                                <OutlineButton big bigFont bigRadius>Fast food</OutlineButton>  
                            </OrderBtn>
                        </OrderTabContainer>
                        <OrderCardWrapper>
                        <OrderCardSection>
                            {props.foods.map(food =>
                                <OrderCard key={food.index}>
                                <Img src={food.image}/>
                                <OrderCardContent>
                                    <OrderCardHeading>
                                        {food.name}
                                    </OrderCardHeading>
                                    <OrderCardDescription>
                                        {food.description}
                                    </OrderCardDescription>
                                    <OrderCardDetails>
                                        <OrderCardItems>
                                            <OrderCardTitle>Serving</OrderCardTitle>
                                            <OrderCardItem>
                                                <OrderCardIcon/>
                                                <OrderCardText>{food.serving}</OrderCardText>
                                            </OrderCardItem>
                                        </OrderCardItems>
                                        <OrderCardItems>
                                            <OrderCardTitle>Category</OrderCardTitle>
                                            <OrderCardItem>
                                                <OrderCardText>{food.category}</OrderCardText>
                                            </OrderCardItem>
                                        </OrderCardItems>
                                        <OrderCardItems>
                                            <OrderCardTitle>Location</OrderCardTitle>
                                            <OrderCardItem>
                                                <OrderCardText>{food.location}</OrderCardText>
                                            </OrderCardItem>
                                        </OrderCardItems>
                                    </OrderCardDetails>
                                    <OrderCardDetails>
                                        <OrderCardItems>
                                            <OrderCardTitle>Price</OrderCardTitle>
                                            <OrderCardItem>
                                                <OrderCardText>$ {food.price/ 1000000000000000000}</OrderCardText>
                                            </OrderCardItem>
                                        </OrderCardItems>
                                        <OrderCardItems>
                                            <OrderCardTitle>Sold</OrderCardTitle>
                                            <OrderCardItem>
                                                <OrderCardText>{food.sold}</OrderCardText>
                                            </OrderCardItem>
                                        </OrderCardItems>
                                    </OrderCardDetails>
                                    <OrderCardDetails>
                                        <OrderCardBuy>
                                            <Button onClick={()=>props.orderFood(food.price / 1000000000000000000, food.index)} info>
                                                <OrderBuyIcon/>Order
                                            </Button>
                                        </OrderCardBuy>
                                    </OrderCardDetails>
                                </OrderCardContent>
                            </OrderCard>
                            )}
                            </OrderCardSection>
                        </OrderCardWrapper>
                    </OrderContentContainer>
                </OrderContainer>
            </OrderWrapper>
            
        </div>
    );
}

export default Orders;
