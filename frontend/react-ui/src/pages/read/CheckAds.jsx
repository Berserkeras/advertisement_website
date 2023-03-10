import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAds} from '../../features/slices/ReadAdSlice';
import {Link} from 'react-router-dom';
import {AdCheckStyles, GlobalStyle} from '../../assets/AdCheckStyles';

const CheckAds = () => {
    const { ads, isLoading } = useSelector((store) => store.read);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const adsRef = useRef(ads);

    useEffect(() => {
        dispatch(fetchAds());
        return () => {
            adsRef.current.forEach((ad) => {
                if (ad.imageUrl) {
                    URL.revokeObjectURL(ad.imageUrl);
                }
            });
        };
    }, [dispatch]);

    useEffect(() => {
        if (ads !== adsRef.current) {
            adsRef.current = ads;
        }
    }, [ads]);

    if (isLoading) {
        return <div className="loading"></div>;
    }

    const filteredAds = ads.filter((ad) =>
        ad.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderAds = (ads) => {
        return ads.map((ad) => {
            const { title, imageUrl, price } = ad;
            return (
                <Link to={`/ads/${title}`} key={title} className="advertisement">
                    <article>
                        <img
                            src={imageUrl ? imageUrl : 'https://picsum.photos/200/300'}
                            alt={title}
                        />
                        <div className="ad-info">
                            <h4 className="title">{title}</h4>
                            <p>{price} euro</p>
                        </div>
                    </article>
                </Link>
            );
        });
    };

    return (
        <AdCheckStyles>
            <GlobalStyle />
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <h2>search ads</h2>
                <input
                    type="text"
                    className="form-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            <section className="ads">{renderAds(filteredAds)}</section>
        </AdCheckStyles>
    );
};

export default CheckAds;
