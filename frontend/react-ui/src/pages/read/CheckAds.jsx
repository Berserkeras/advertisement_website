import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAds } from '../../features/slices/ReadAdSlice';
import { Link } from 'react-router-dom';
import {AdCheckStyles, GlobalStyle} from '../../assets/AdCheckStyles';


const CheckAds = () => {
    const { ads, isLoading } = useSelector((store) => store.read);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAds());
        return () => {
            ads.forEach((ad) => {
                console.log("REVOKE: " + ad, ad.imageUrl);
                if (ad.imageUrl) {
                    URL.revokeObjectURL(ad.imageUrl);
                }
            });
        };
    }, [dispatch]);

    if (isLoading) {
        return <div className="loading"></div>;
    }

    return (

<AdCheckStyles>
    <GlobalStyle/>
            <form className='search-form' onSubmit={(e) => e.preventDefault()}>
                <h2>search ads</h2>
                <input
                    type='text'
                    className='form-input'
                    value="temp text"
                    onChange={(e) => e.target.value}
                />
            </form>
        <section className="ads">
            {ads.map((ad) => {
                const { title, imageUrl, price } = ad;
                return (


                    <Link to={`/ads/${title}`} key={title} className="advertisement">
                        <article>
                            <img src={imageUrl ? imageUrl : "https://picsum.photos/200/300"} alt={title} />
                            <div className="ad-info">
                                <h4 className="title">{title}</h4>
                                <p>{price}</p>
                            </div>
                        </article>
                    </Link>

                );
            })}
        </section>
        </AdCheckStyles>
    );
};

export default CheckAds;
