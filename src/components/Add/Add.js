import { useState } from 'react';
import {Button} from '../../Globalstyles';

import {
    AddContainer,
    AddTitle,
    AddCardContent,
    AddInput,
    AddIcon
} from './Add.styles';

const Add = props => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [serving, setServing] = useState('')


    const submitHandler = (event) => {
        event.preventDefault();
        props.addToFood(name, image, description, location, category, serving, price);
        setName('');
        setImage('');
        setDescription('');
        setLocation('');
        setCategory('');
        setPrice('');
        setServing('');
    }

    return (
        <div>
            <form onSubmit = {submitHandler}>
                <AddContainer>
                    <AddTitle> Add food</AddTitle>
                    <AddCardContent>
                        <AddInput placeholder="Name" required 
                        onChange = {(e)=>setName(e.target.value)}/>
                        <AddInput placeholder="Image Url" required
                        onChange = {(e)=>setImage(e.target.value)}/>
                    </AddCardContent>
                    <AddCardContent>
                        <AddInput placeholder="Description" required
                        onChange = {(e)=>setDescription(e.target.value)}/>
                        <AddInput placeholder="Location" required
                        onChange = {(e)=>setLocation(e.target.value)}/>
                    </AddCardContent>
                    <AddCardContent>
                        <AddInput placeholder="Category" required
                        onChange = {(e)=>setCategory(e.target.value)}/>
                        <AddInput placeholder="Price" required type="number"
                        onChange = {(e)=>setPrice(e.target.value)}/>
                    </AddCardContent>
                    <AddCardContent>
                        <AddInput placeholder="Serving people" required type="number"
                        onChange = {(e)=>setServing(e.target.value)}/>
                    </AddCardContent>
                    <Button type="submit" info><AddIcon/>Add food</Button>
                </AddContainer>
            </form>
        </div>

    );
}

export default Add;