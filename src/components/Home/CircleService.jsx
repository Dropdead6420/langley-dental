import React from 'react'
import treatments from '@/data/treatments'
const CircleService = () => {
  return (
 <section className="section cta-block-images bg-white">
  <div className="w-layout-blockcontainer main-container w-container">
    <div className="content-cta-images">
      <div className="label-master bg-2">
        <div className="label-small">Instagram</div>
      </div>
      <h2 animate="title" data-w-id="2bb6a2d9-8dde-4ab3-1d40-57256ee75f94" className="no-margins">
        Follow me on Instagram
      </h2>
      <a href="https://instagram.com/" data-wf--cta-main--variant="light" className="cta-main w-variant-2e8ddc6f-d353-888a-d0b0-71d6a7c69162 w-inline-block"><div button-text className="button-text-mask">
          <div className="button-text _1">@andfold.studio</div>
          <div className="button-text _2">@andfold.studio</div>
        </div>
        <div button-bg className="button-bg w-variant-2e8ddc6f-d353-888a-d0b0-71d6a7c69162" /></a>
    </div>
  </div>
  <div className="master-cta-images moving-circle">
    <div className="center" />
    <div className="circle-wrapper">
      {treatments.map((item,idx)=>(
      <div key={idx} className={`circle-image _${idx===0 ? '':idx+1}`}>
        <img src={item.image} loading="lazy" sizes="(max-width: 708px) 100vw, 708px"  alt="service" className="image-cover" />
      </div>)
      )}
    </div>
    <div className="circle-wrapper _2">
      {treatments.map((item,idx)=>(
      <div key={idx} className={`circle-image _${idx===0 ? '':idx+1}`}>
        <img src={item.image} loading="lazy" sizes="(max-width: 708px) 100vw, 708px"  alt="service" className="image-cover" />
      </div>
      ))}
    </div>
  </div>
  <div className="mask-images-bottom">
    <div className="images-second-mask" />
  </div>
</section>

  )
}

export default CircleService
