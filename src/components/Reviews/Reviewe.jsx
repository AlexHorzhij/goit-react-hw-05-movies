import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from '../../services/ApiServise';
import { Placeholder, Li, Author, Text, ReviewsWrapper } from './Reviews.styled';

export default function Reviewe(){
    const { id } = useParams();
    const [reviewe, setReviewe] = useState(null);

    useEffect(() => {
        getReviewsById(id).then(setReviewe)
    }, [id]
    );
    
    if (reviewe) {  
    return (
         reviewe.results.length > 0  ? <ReviewsWrapper>
            {reviewe.results.map(item => <Li key={item.id}><Author>Author: {item.author_details.username}</Author>
                <Text>{item.content}</Text> </Li>)
            }
        </ReviewsWrapper> : <Placeholder>We don`t have any rewiews for this movie</Placeholder>
    )}
};