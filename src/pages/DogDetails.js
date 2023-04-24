import { useRef } from "react";
import { Suspense } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";

const DogDetails = () => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? "/dogs");
    // console.log(location);
    const { dogId } = useParams();

//     useEffect(() => {
//     // НТТР запрос, если надо
// }, [])
    
    return (
        <>
        <h1>DogDetails: {dogId}</h1>
        <Link to={backLinkLocationRef.current}>BACK</Link>
        <ul>
            <li>
                <Link to="subbreeds">Subbreeds</Link>
            </li>
            <li>
                <Link to="gallery">Gallery</Link>
            </li>
        </ul>
        <Suspense fallback={<div>Loading subpages...</div>}>
                     <Outlet />
                </Suspense>
        </>
    )
}

export default DogDetails;