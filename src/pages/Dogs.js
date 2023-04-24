import { useState } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";

const Dogs = () => {
    const [dogs, setDogs] = useState([
        'dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'
    ]);

    const location = useLocation();
    // console.log(location);
    const [searchParams, setSearchParams] = useSearchParams();
    const dogId = searchParams.get('dogId') ?? '';
    // console.log(searchParams);
    
    const updateQueryString = evt => {
        if (evt.target.value === "") {
            return setSearchParams({});
        }
        setSearchParams({dogId: evt.target.value});
    }
//     useEffect(() => {
//     // НТТР запрос, если надо
// }, [])
    
    const visibleDogs = dogs.filter(dog => dog.includes(dogId));

    return (
        <div>
            <input type="text"
                    value ={dogId}
                    onChange={updateQueryString} />
            <ul>
                {/* <button onClick={()=>setSearchParams({c: 'hello'})}>change sp</button> */}
                    {visibleDogs.map(dog => {
                return (
                    <li key={dog}>
                        <Link to={`${dog}`} state={{ from: location}}> {dog} </Link>
                    </li>
                )
            })}
            </ul>
        </div>)
}
export default Dogs;