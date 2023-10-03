import { useQuery } from '@apollo/client'
import { GET_ROCKETS } from '../queries/Qeuries';
const Rockets = () => {
    const { loading, error, data } = useQuery(GET_ROCKETS);
    return (
        <>
            <h1>Rocket LaunchLatest</h1>
            {
                loading && <span>Loading . . . .</span>
            }
            {
                error && <span>There is an error . . . .</span>
            }
            {
                data && <div>
                    <p>id : {data.launchLatest?.id}</p>
                    <p>id : {data.launchLatest?.mission_name}</p>
                </div>
            }
        </>

    )
}

export default Rockets