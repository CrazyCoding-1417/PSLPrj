import React, { Fragment } from 'react'
import ImageBanner from '../components/ImageBanner'
import AdDouble from '../components/AdDouble'
import Advert from '../components/Advert'
import { dataBathroom as data } from '../../../Products'

const Bathroom = () => {
    return (
        <Fragment>
            <ImageBanner
                imgPic={data.banner.pic}
                imgAlt={data.banner.alt}
                imgLink={data.banner.link} />
            <AdDouble
                imgPic1={data.advert.img1.pic}
                imgAlt1={data.advert.img1.alt}
                imgPic2={data.advert.img2.pic}
                imgAlt2={data.advert.img2.alt} />
            <Advert />
        </Fragment>
    )
}

export default Bathroom
