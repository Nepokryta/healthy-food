import React from 'react';

const RecipesCard = ({size, background, subtitle, title}) => {

    return(
        <>
            <div className={size}
                style={{background: `${background}`}}>
                    <button className="arrow-card">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_2_20" style={{'maskType':'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.4 6.2001H3.66398L8.13598 1.7281L6.99998 0.600098L0.599976 7.0001L6.99998 13.4001L8.12798 12.2721L3.66398 7.8001H13.4V6.2001Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_2_20)">
                    <rect x="-3.40002" y="-3.3999" width="20.8" height="20.8" fill="#fff"/>
                    </g>
                    </svg>
                </button>
                <button className="subtitle">{subtitle}</button>
                <h3 className="data">05 Jul 2016</h3>
                <h2 className="title">{title}</h2>
                <h3 className="name">Jason Keller</h3>
                <div className="action">
                    <div className="views">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>
                        <div className="views-value">275</div>
                    </div>
                    <div className="comments">
                        <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 9.999v-2h4v12.001h-3v4l-5.333-4h-7.667v-4h12v-6.001zm-2 4.001h-9.667l-5.333 4v-4h-3v-14.001h18v14.001z"/></svg>
                        <div className="comments-value">12</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipesCard;