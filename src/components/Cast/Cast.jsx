import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsById } from '../../services/ApiServise';

export const Cast = () => {
    const [credits, setCredits] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getCreditsById(id).then(setCredits)
    }, [id]
    );

    if (credits) {
        console.log(credits)
        return (
            <ul>
                <li>sxsxsxsxsxsx</li>
            </ul>
        )
    }
}