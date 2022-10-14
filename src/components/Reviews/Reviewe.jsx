import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from '../../services/ApiServise';
import { Li, Author, Text } from './Reviews.styled';

export default function Reviewe(){
    const { id } = useParams();
    const [reviewe, setReviewe] = useState(null);

    useEffect(() => {
        getReviewsById(id).then(setReviewe)
    }, [id]
    );

    if (reviewe) {
        console.log(reviewe)
        return (
            <ul>
                {reviewe.results.map(item => <Li key={item.id}><Author>Author: {item.author_details.username}</Author>
                <Text>{item.content}</Text> </Li>)
                }
            </ul>
        )
    };
};