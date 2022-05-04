import React, { useEffect, useState } from 'react';
import { Api } from '../helpers/functions';
import { useNavigate } from 'react-router';

function Home() {
    const [state, setState] = useState({
        people: [],
        loading: false
    }),
        { people, loading } = state,
        navigate = useNavigate(),
        getPeople=()=>{
            setState({ ...state, loading: true });
            Api('people').then(data => {
                setState({ ...state, people: data.results, loading: false });
            }).catch(err => console.log(err));
        }
    useEffect(() => {
        getPeople()
        return () => {

        }
    }, [])
    return (
        <div style={{ margin: 10 }}>
            {!loading ? <table>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Skin Color</th>
                </tr>
                {people.map((a, index) => <tr key={index} style={{ padding: 20 }}>
                <td>{a.name}</td>
                <td>{a.gender}</td>
                <td>{a.height}</td>
                <td>{a.mass}</td>
                <td>{a.skin_color}</td>
                <td><button style={{ backgroundColor: 'green', color: "#fff", borderRadius: 5 }}
                onClick={()=>navigate(`/${index}`)}
                >View</button></td>
            </tr>)}
            </table> : <div>Loading...</div>}
        </div>
    )
}

export default Home;