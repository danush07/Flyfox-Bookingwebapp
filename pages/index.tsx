import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header.js'
import Banner from '../components/Banner.js'
import SmallCard from '../components/SmallCard.js'
import MediumCard from '../components/MediumCard.js'
import LargeCard from '../components/LargeCard.js'
import Footer from '../components/Footer.js'


export default function Home({ exploreData, cardsData}) {
  return (
    <div className=''>
      <Head>
        <title>flyfox</title>
      </Head>
<Header />
<Banner>

</Banner>
<main className='max-2-7xl mx-auto px-8 sm:px-16'>
  <section className='pt-6'>
    <h2 className='text-4xl font-semibold pb-5'>
      Explore Places
    </h2>
    <div className='grid grid-cols-1 sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    {exploreData?.map(({ img, distance, location}) => (
      <SmallCard 
      key={img}
      img={img} 
      distance={distance} 
      location={location}>

      </SmallCard>
    ))}
    </div>
  </section>
  <section>
    <h2 className='text-4xl font-semibold'>Live Anywhere</h2>
    <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
    {cardsData?.map(({img, title}) => (
      <MediumCard key={img} img={img} title={title}>

      </MediumCard>
    ))}
    </div>
  </section>
  <LargeCard 
    img='https://i.postimg.cc/bvghv4Z9/me3.jpg'
    title='The Greatet Outdoors'
    description='Whishlist Curated by Flyfox'
    buttonText='Get Inspired'
/>
<Footer>
  
</Footer>


</main>
</div>
  )
}
export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/64NZ").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/6IA6").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
