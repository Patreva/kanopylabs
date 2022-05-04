import React, { useEffect, useState } from 'react'
import { Api } from '../helpers/functions'
import { useLocation } from 'react-router-dom';

function Item() {
    const [state, setState] = useState({
        person: {},
        loading: false
    }),
        { person, loading } = state,
        history = useLocation(),
        getPerson = () => {
            setState({ ...state, loading: true })
            Api(`/people${history.pathname}`).then((data) => {
                setState({ ...state, person: data, loading: false });
            }).catch(err => console.log(err))
        }
    useEffect(() => {
        getPerson()
        return () => {

        }
    }, [])
    return (
        <div style={{ margin: 10 }}>
            {!loading ? <table>
                <tr>
                    <td style={{ fontWeight: "bold" }}>Name</td>
                    <td style={{ fontWeight: "bold" }}>Height</td>
                    <td style={{ fontWeight: "bold" }}>Mass</td>
                    <td style={{ fontWeight: "bold" }}>Skin Color</td>
                </tr>
                <tr>
                     <td>{person.name}</td>
                     <td>{person.height}</td>
                     <td>{person.mass}</td>
                     <td>{person.skin_color}</td>
                </tr>
            </table> : <div>Loading...</div>}
        </div>
    )
}

export default Item;