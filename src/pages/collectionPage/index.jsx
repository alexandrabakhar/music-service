import { Container } from '../../components/Container';
import { useParams } from "react-router-dom";

export const CollectionPage = () => {
    const params = useParams();
    console.log(params);
    return <Container pageType='collection'/>;
};
