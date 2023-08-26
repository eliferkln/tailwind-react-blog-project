import React from 'react'
import Card from './Card'


function CardItem() {

  const data = [
    {
      img_link: "https://res.cloudinary.com/duotxzytv/image/upload/v1692902596/Art/pexels-anni-roenkae-3109807_2_jeumay.jpg",
      pp_foto:"https://res.cloudinary.com/duotxzytv/image/upload/v1672299316/ReadyPlayerMe-Avatar_1_gyrhew.png",
      name : "Hanife Erkalan",
      title : "Lorem ipsum dolor sit amet",
      descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nisi temporibus eius sint quos ducimus quam repellat incidunt",
      time : "44 min",
      views : "120",
      like : "924",

    },

    {
      img_link: "https://res.cloudinary.com/duotxzytv/image/upload/v1692902596/Art/pexels-anni-roenkae-3109807_2_jeumay.jpg",
      pp_foto:"https://res.cloudinary.com/duotxzytv/image/upload/v1672299316/ReadyPlayerMe-Avatar_1_gyrhew.png",
      name : "Hanife Erkalan",
      title : "Lorem ipsum dolor sit amet",
      descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nisi temporibus eius sint quos ducimus quam repellat incidunt",
      time : "6 min",
      views : "460",
      like : "624",

    },

    {
      img_link: "https://res.cloudinary.com/duotxzytv/image/upload/v1692902596/Art/pexels-anni-roenkae-3109807_2_jeumay.jpg",
      pp_foto:"https://res.cloudinary.com/duotxzytv/image/upload/v1672299316/ReadyPlayerMe-Avatar_1_gyrhew.png",
      name : "Hanife Erkalan",
      title : "Lorem ipsum dolor sit amet",
      descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nisi temporibus eius sint quos ducimus quam repellat incidunt",
      time : "14 min",
      views : "150",
      like : "394",

    },
    {
        img_link: "https://res.cloudinary.com/duotxzytv/image/upload/v1692902596/Art/pexels-anni-roenkae-3109807_2_jeumay.jpg",
        pp_foto:"https://res.cloudinary.com/duotxzytv/image/upload/v1672299316/ReadyPlayerMe-Avatar_1_gyrhew.png",
        name : "Hanife Erkalan",
        title : "Lorem ipsum dolor sit amet",
        descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nisi temporibus eius sint quos ducimus quam repellat incidunt",
        time : "14 min",
        views : "160",
        like : "394",
  
      },

  ]


  const data_filter = data.map((e,index) => {
    
    return <Card
    img_link={e.img_link}
    pp_foto={e.pp_foto}
    name = {e.name}
    title = {e.title}
    time = {e.time}
    descr = {e.descr}
    views = {e.views}
    like = {e.like}
    key = {e[index]}
    />
  })

  return (
    <div className='max-w-[1440px]  w-full  mx-auto py-28  relative '>
    <div className='flex justify-center items-center '>
    <div className=' my-0 mx-auto flex flex-wrap justify-center items-center gap-8 sm:w-full'>
        {data_filter}
    </div>
  </div>
  </div>
  )
}

export default CardItem