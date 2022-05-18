import React from 'react'

function ServiceCard(props) {
    const {title, desc, imgSrc} = props;
    return (
        <div className="row mt-5 sv_card">
            <div className="col-md-6">
                <h1 className='s3_card_title'>
                    {title}
                </h1>
                <p className='para_one'>
                   {desc}
                </p>
                <a href="#!" className='s3_card_btn'>Learn More</a>
            </div>
            <div className="col-md-6">
                <img src={imgSrc} className="s3_card_img" alt="" />
            </div>
        </div>
    )
}

export default ServiceCard