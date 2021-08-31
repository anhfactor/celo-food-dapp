import {
    HistoryOrderContainer,
    HistoryOrderTitle,
} from './HistoryOrder.styles';
const HistoryOrder = props => {

    return (
        <div>
            <HistoryOrderContainer>
                <HistoryOrderTitle> History Order</HistoryOrderTitle>
                <table>
                    <thead>
                        <tr>
                            <td>Index</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Total sold</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.foods.map(food =>
                            <tr>
                                <td>{food.index}</td>
                                <td>{food.name}</td>
                                <td>$ {food.price/ 1000000000000000000}</td>
                                <td>{food.sold}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </HistoryOrderContainer>
        </div>

    );
}

export default HistoryOrder;