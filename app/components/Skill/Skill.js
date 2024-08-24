/* eslint-disable @next/next/no-img-element */
import React from 'react'
import "./style.css"
function Skill() {

  let card = [
    {
        image: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
        title: "HTML",
        content: "<b>Html</b> เป็นภาษาที่ผมทำการศึกษาตั้งแต่เริ่มทำโปรเจคและเป็นภาษาที่ผมใช้ในการทำ Layout"
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
        title: "CSS",
        content: "<b>Css</b> เป็นภาษาที่ผมใช้ในการตกแต่งหน้าเว็บ และ ในการจัด Layout"
    },
    {
        image: "https://ih1.redbubble.net/image.815350031.4911/st,small,845x845-pad,1000x1000,f8f8f8.u1.jpg",
        title: "Javascript",
        content: "<b>Javascript</b> เป็นภาษาที่ได้ใช้ทุกครั้งที่ทำโปรเจคเนื่องจากเป็นภาษาที่ใช้ในการทำ event ให้กับหน้าเว็บ"
    },
    {
        image: "https://e7.pngegg.com/pngimages/666/502/png-clipart-brand-php-logo-computer-file-product-breeze-blue-text-thumbnail.png",
        title: "PHP",
        content: "<b>Php</b> เป็นภาษาที่ใช้ทำโปรเจคจบการศึกษาโดยใช้ PDO ในการทำส่วนของ Backend"
    }
];

    

  return (
    <div className="content">
      <div className="flex justify-center">
        <div className="font-bold text-[3rem]">Ski</div>
        <div className="text-[#A91D3A] font-bold text-[3rem]">ll</div>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 my-5">
      {Object.entries(card).map(([key, card]) => (
          <div key={key} className="card card-side bg-base-100 shadow-xl w-full">
            <figure className='w-[80%]'>
              <img src={card.image} alt={card.title} className='rounded-full w-full image px-2'/>
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title flex justify-center items-center font-semibold">{card.title}</h2>
              <p className='card-content' dangerouslySetInnerHTML={{ __html: card.content }}></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill