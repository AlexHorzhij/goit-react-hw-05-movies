import { Input, Button, Form } from './Form.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ getSearchMove }) => {

    const hendleSub = (e) => {
        e.preventDefault()
        const form = e.target;
        getSearchMove(form.elements.search.value)
        // form.reset()
    };

    return (
        <Form action="" onSubmit={hendleSub} >
            <Input type="text" name='search' />
            <Button>Submit</Button>
        </Form>
    )
};
 
SearchForm.propTypes = {
    getSearchMove: PropTypes.func,
};