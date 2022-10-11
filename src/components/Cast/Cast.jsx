import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsById } from '../../services/ApiServise';
import { Img, Li, Name } from './Cast.styled';

export const Cast = () => {
    const [credits, setCredits] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getCreditsById(id).then(setCredits)
    }, [id]
    );
    const placeholder = '/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg';
    if (credits) {
        return (
            <ul>
                {credits.cast.map(actor => (<Li key={actor.credit_id}>
                    <Img src={`https://image.tmdb.org/t/p/w300${actor.profile_path || placeholder}`} alt={actor.name} />
                    <div><Name><b>Acthor:</b> {actor.name}</Name>
                        <Name><b>Character:</b> {actor.character}</Name></div></Li>))}
            </ul>
        )
    }
};