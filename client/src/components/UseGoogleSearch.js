import { useState, useEffect } from 'react';
import API_KEY from '../keys';
// import { useStateValue } from '../StateProvider';
// import { useParams } from 'react-router-dom';

// const CONTEXT_KEY = "6da68d082baccf19a"

const CONTEXT_KEY = "f4f74a225bb6f4400"

const UseGoogleSearch = (term) => {

    // const [{term}, dispatch] = useStateValue();

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                .then(response => response.json())
                .then(result => {setData(result)})
        }
        fetchData().then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }, [term]);

    return {data};
};

export default UseGoogleSearch;