import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from '../../services/ApiServise';

export const Reviewe = () => {
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
                <li>ttttttttttttttt</li>
            </ul>
        )
    }
};