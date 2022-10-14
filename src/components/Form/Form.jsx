import { Input, Button, Form } from './Form.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ searchMove, changeFilter, filter }) => {

    const handleSub = (e) => {
        e.preventDefault()
        const form = e.target;
        searchMove(form.elements.search.value)
    };

    const handleChange = (e) => {
        changeFilter(e.target.value)
    };

    return (
        <Form action=""  onSubmit={handleSub}>
            <Input type="text" name='search' value={filter} onChange={handleChange}/>
            <Button>Submit</Button>
        </Form>
    )
};
 
SearchForm.propTypes = {
    getSearchMove: PropTypes.func,
};