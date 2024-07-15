import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"airpods"} heading={"Airpods"}/>
      <HorizontalCardProduct category={"watches"} heading={"Watches"}/>

      <VerticalCardProduct category={"mobiles"} heading={"Mobile Phones"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"televisions"} heading={"TVs"}/>
      <VerticalCardProduct category={"camera"} heading={"Cameras"}/>
      <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Fridges"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
    </div>
  )
}

export default Home