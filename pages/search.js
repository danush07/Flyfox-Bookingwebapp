import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router'
import format from 'date-fns/format'
import InfoCard from '../components/InfoCard'






function Search({searchResults}){

    const router = useRouter();
    console.log(searchResults)
    const{ location, startDate, endDate, noofvisitors } = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndtDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndtDate}`

    console.log(router.query);



  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${noofvisitors} visitors`} />
        <main className='flex'>
            <section className='flex-grow pt-14 px-6 '>
                <p className='text-xl'>
                    20+ Stays Available-{range}-for {noofvisitors} guests 
                </p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'> Stays In {location} </h1>

                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Easy Cancellation</p>
                    <p className='button'>Types of Places</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and Beds</p>
                    <p className='button'>More Filters</p>
                </div>
                <div className='flex flex-col'>
                {searchResults.map(({img, location, title, description, start, price ,total}) => (
                    <InfoCard
                    key={img}
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    start={start}
                    price={price}
                    total={total}
                     />
                ))}
                </div>
            </section>

          
        </main>

        <Footer />
    </div>
  )
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch('https://www.jsonkeeper.com/b/Q8KN').then(res => res.json());
    return {
        props: {
          searchResults},
      };
}