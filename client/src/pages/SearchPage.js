import React from 'react';
import './SearchPage.css'
import { useStateValue } from '../StateProvider';
import UseGoogleSearch from '../components/UseGoogleSearch';
import Response from '../Response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import LocalOfferIcon from '@mui/icons-material/LocalOfferOutlined';
import VideoIcon from '@mui/icons-material/VideoCallOutlined';
import DescriptionIcon from '@mui/icons-material/DescriptionOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVertOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';

const SearchPage = () => {

    const [{term}, dispatch] = useStateValue();
    
    // LIVE API CALL
    const { data } = UseGoogleSearch(term);
    console.log(data)

    // const data = Response;
    // console.log(data)

    return (
        <div className="searchPage">
            <div className='searchPage__header'>
                <Link className='searchPage__headerLeft' to="/"><img className="searchPage__logo" src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt=''></img></Link>
                <div className='searchPage__headerBody'>
                    <Search hideButtons/>
                </div>
            </div>
            <div className='searchPage__options'>
                <div className='searchPage__optionsLeft'>
                    <div className='searchPage__option'>
                        <SearchIcon sx={{fontSize : "17px"}}/>
                        <Link to="/all">All</Link>
                    </div>
                    <div className='searchPage__option'>
                        <ImageIcon sx={{fontSize : "17px"}}/>
                        <Link to="/images">Images</Link>
                    </div>
                    <div className='searchPage__option'>
                        <LocalOfferIcon sx={{fontSize : "17px"}}/>
                        <Link to="/shopping">Shopping</Link>
                    </div>
                    <div className='searchPage__option'>
                        <VideoIcon sx={{fontSize : "17px"}}/>
                        <Link to="/videos">Videos</Link>
                    </div>
                    <div className='searchPage__option'>
                        <DescriptionIcon sx={{fontSize : "17px"}}/>
                        <Link to="/news">News</Link>
                    </div>
                    <div className='searchPage__option'>
                        <MoreVertIcon sx={{fontSize : "17px"}}/>
                        <Link to="/more">More</Link>
                    </div>
                </div>
                <div className='searchPage__optionsRight'>
                    {/* <div className='searchPage__option'>
                        <SettingsIcon />
                        <Link to="/settings">Settings</Link>
                    </div> */}
                    <div className='searchPage__option'>
                        <Link to="/tools">Tools</Link>
                    </div>
                </div>
            </div>
            <div className='break'></div>


                {true && (
                    <div className='searchPage__results'>
                        <p className='searchPage__resultCount'>
                            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                        </p>

                        {data?.items.map(item => (
                            <div className='searchPage__result'>
                                <div className='searchPage__resultText'>
                                    <a href={item.link}>
                                        <p>{item.displayLink}</p>
                                        <h2 className='searchPage__resultTitle' href={item.link}>{item.title}</h2>
                                    </a>
                                    <p className='searchPage__resultSnippet'>{item.snippet}</p>
                                </div>

                                <div>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className='searchPage__resultImage' src={item.pagemap?.cse_image[0]?.src} alt=''></img>
                                )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            
                {/* <h1>{term}</h1> */}

        </div>
    )
}

export default SearchPage;