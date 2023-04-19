import { useParams } from "react-router-dom";

export const Subbreeds = () => {
    const { dogId } = useParams();

//     useEffect(() => {
//     // НТТР запрос, если надо
// }, [])
    
    return <div>Subbreeds: {dogId}</div>
}

export default Subbreeds;