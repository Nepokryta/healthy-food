import React from 'react';



// import ic_star_border from './icons/ic_star_border.svg'
// import ic_star_half from './icons/ic_star_half.svg'
// import ic_star from './icons/ic_star.svg'

const DishCard = ({src, alt}) => {
   
    return(
        <>
            <div className="dish__card">
                <button className="arrow-card">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_4_292" style={{"maskType":"alpha"}}maskUnits="userSpaceOnUse" x="4" y="5" width="16" height="13">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.6 8.79998V5.59998L19.2 11.2L13.6 16.8V13.52C9.59995 13.52 6.79995 14.8 4.79995 17.6C5.59995 13.6 7.99995 9.59998 13.6 8.79998Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_4_292)">
                        <rect x="1.59998" y="1.59998" width="20.8" height="20.8" fill="white"/>
                        </g>
                    </svg>
                </button>
                <img src={src} alt={alt}/>
                <h2 className="dish__card-title">Featured Meal</h2>
                <h3 className="dish__card-subtitle">Served with french fries + drink</h3>
                <h4 className="dish__card-description">Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...</h4>
                <div className="dish__card-action">
                    <div className="dish__card-action-stars">

                        <input type="checkbox" id="st1" value="1" />
                        <label htmlFor="st1">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_4_301" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_4_301)">
                            <rect x="-3" y="-3" width="26" height="26" fill="#4D4D4D"/>
                            </g>
                            </svg>
                        </label>

                        <input type="checkbox" id="st2" value="2" />
                        <label htmlFor="st2">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_4_301" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_4_301)">
                            <rect x="-3" y="-3" width="26" height="26" fill="#4D4D4D"/>
                            </g>
                            </svg>
                        </label>

                        <input type="checkbox" id="st3" value="3" />
                        <label htmlFor="st3">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_4_301" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_4_301)">
                            <rect x="-3" y="-3" width="26" height="26" fill="#4D4D4D"/>
                            </g>
                            </svg>
                        </label>

                        <input type="checkbox" id="st4" value="4" />
                        <label htmlFor="st4">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_4_262" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4V4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_4_262)">
                            <rect x="-3" y="-3" width="26" height="26" fill="#4D4D4D"/>
                            </g>
                            </svg>
                        </label>

                        <input type="checkbox" id="st5" value="5" />
                        <label htmlFor="st5">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_4_217" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_4_217)">
                            <rect x="-3" y="-3" width="26" height="26" fill="#4D4D4D"/>
                            </g>
                            </svg>
                        </label>

                        <div className="dish__card-action-value">12</div>
                    </div>
                    <button className="card__action-btn">ORDER</button>
                </div>
            </div>
        </>   
    )
}



export default DishCard;