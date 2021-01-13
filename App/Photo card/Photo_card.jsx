import React from 'react';

import '../../styles.css';

// Component props are destructured to get img_src directly
const Photo_card = ({img_src}) => {

    return (<>
        <div className="Photo_card__Container">
            <img src={img_src} className="Photo_card__Image"/>
        </div>
    </>);
}

export default Photo_card;