import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
// import axios from axios;

const Search = (props) => {

    const [{}, dispatch] = useStateValue();

    const [ input, setInput ] = useState('');
    const navigate = useNavigate(); 

    let { hideButtons = false } = props;

    const search = e => {
        e.preventDefault();
        console.log(`You hit the search button and you searched for ${input}`)
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })
        navigate('/search') 
        // could also do it this way - pass via props navigate(`/search/${input}`)
        // old way of doing it history.push('/search')
        // then when it goes to /search route that component will fetch the term via useStateValue
    }

    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon'/>
                <input value={input} name="input" onChange={e => setInput(e.target.value)}/>
                <MicIcon className='search__micIcon'/>
            </div>
            
            {/* {hideButtons = 0 ? ( */}
            {/* <div> */}

            {/* find easy way to hide these, so they are hidden when using component for Search page */}
            {!hideButtons? (
            <div className='search__buttons'>
                <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
            </div>
            ):null}

            {/* {!hideButtons? (
            <div className='search__techbutton'>
                <Button variant='outlined'>Project Information</Button>
            </div>
            ):null} */}

        </form>
    )
}

export default Search;