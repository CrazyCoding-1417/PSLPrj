import React, { useState, useEffect } from 'react';

const banner = (props) =>{
  const [adsBanner] = useState([
    {
      img: "https://lda.lowes.com/is/image/Lowes/PromoTeam_Promo_DP18-113322_SelectVanities_150?scl=1&201905021454",
      link: "https://www.lowes.com/c/Bathroom",
      title: "Bathroom"
    },
    {
      img: "https://lda.lowes.com/is/image/Lowes/PromoTeam_Promo_DP18-113336_DT_150_HB_BNR_ProgressLighting?scl=1&201904181620",
      link: "https://www.lowes.com/c/Lighting-ceiling-fans",
      title: "Lighting"
    },
    {
      img: "https://lda.lowes.com/is/image/Lowes/PromoTeam_Promo_DP18-107021_DT_150_HB_BNR_30OffLevolorBlinds?scl=1&201904101020",
      link: "https://www.lowes.com/c/Windows-doors",
      title: "Blinds and Shades"
    },
    {
      img: "https://lda.lowes.com/is/image/Lowes/PromoTeam_Promo_DP18-110740_dt_hb_50OffScottsEzSeed?scl=1&201904241313",
      link: "https://www.lowes.com/l/lawn-garden.html",
      title: "Lawn & Garden"
    }
  ])

  const [useImage, setUseImage] = useState(    {
        img: "https://lda.lowes.com/is/image/Lowes/PromoTeam_Promo_DP18-110740_dt_hb_50OffScottsEzSeed?scl=1&201904241313",
        link: "https://www.lowes.com/l/lawn-garden.html",
        title: "Lawn & Garden"
      });

  useEffect(()=>{
    keepRenderImage()
  }, [])

  const keepRenderImage =()=>{
    const newAdsNum = Math.floor(Math.random()* adsBanner.length);

    setUseImage({
      img: adsBanner[newAdsNum].img,
      link: adsBanner[newAdsNum].link,
      title: adsBanner[newAdsNum].title
    })

    setTimeout(keepRenderImage, 3000)
  }

  return(
    <div>
      <a href={useImage.link}><img src={useImage.img} alt={useImage.title}/></a>
    </div>
  )
}

export default banner;
