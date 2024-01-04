import React from 'react'
import ButtonSquare from '../components/buttons/ButtonSquare'
import platImage from './../assets/images/plat.png';
import photo from './../assets/images/photo.png';
import cover from './../assets/images/cover.png';
import cofee from './../assets/images/cofee.jpg';
import CardPhoto from '../components/cards/CardPhoto';
import CardReview from '../components/cards/CardReview';

function Home() {
  return (
    <div>
      <main className='flex justify-center items-center min-h-1/3 '>
        <div className=' p-4 gap-2 flex flex-col items-start justify-center h-full'>
          <h1 className='font-bold text-5xl text-left flex flex-col '>
            <span>We deliver best</span>
            <span className='text-primary'>Organic food.</span>
          </h1>
          <p className='text-left w-2/3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nihil nobis, quo atque.</p>
          <ButtonSquare text='Explore Our Menu' style="bg-primary border-2 border-primary hover:bg-primary  hover:text-white " />
        </div>
        <div className='flex justify-center items-center  min-w-1/2'>
          <img src={platImage} alt='Plat image' />
        </div>
      </main>
      <section className=' px-32'>
        <div className='flex justify-between'>
          <h3 className='font-bold'>Hot Dessert</h3>
          <div>ww</div>
        </div>
        <div className='pt-8 flex flex-wrap gap-20 items-center justify-center'>
          <CardPhoto text="Chicken Fry" price="$6" icon="+" img={photo} />
          <CardPhoto text="Chicken Fry" price="$6" icon="+" img={photo} />
          <CardPhoto text="Chicken Fry" price="$6" icon="+" img={photo} />
          <CardPhoto text="Chicken Fry" price="$6" icon="+" img={photo} />
        </div>
      </section >
      <section className='flex w-full py-20 items-center justify-center'>
        <div className="w-1/3"><img src={cover} alt='Plat image' /></div>
        <div className=' w-2/3 p-4 gap-2 flex flex-col items-start justify-center h-full'>
          <h1 className='font-bold text-5xl text-left flex flex-col '>
            <span>Fresh, Healthy, Organic</span>
            <span>Delicious Fruits</span>
          </h1>
          <p className='text-left w-1/3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nihil nobis, quo atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nihil nobis, quo atque.</p>
          <ButtonSquare text='Learn More' style="bg-primary border-2 border-primary hover:bg-primary  hover:text-white " />
        </div>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <h2 className='font-bold text-3xl'>Why Choose Us?</h2>
        <ul className='flex'>
          <li className='flex flex-col justify-center items-center w-1/3'>
            <span>icon</span>
            <h5>Fresh Food</h5>
            <p className='w-1/3 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus modi error quia!</p>
          </li>
          <li className='flex flex-col justify-center items-center w-1/3'>
            <span>icon</span>
            <h5>Fresh Food</h5>
            <p className='w-1/3 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus modi error quia!</p>
          </li><li className='flex flex-col justify-center items-center w-1/3'>
            <span>icon</span>
            <h5>Best Offer</h5>
            <p className='w-1/3 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus modi error quia!</p>
          </li>
        </ul>
      </section>
      <section className='flex flex-col justify-center items-center py-20 px-64'>
        <div className='flex max-w-fit p-[5rem] min-w-full min-h-[19rem] justify-center items-center rounded-2xl bg-cover h-40' style={{ backgroundImage: `url(${cofee})` }}>
          <div className="bg-primary bg-opacity-70 gap-y-12 rounded-md min-h-full ">
            <h3 className='text-white font-bold text-xl '>Book a Table</h3>
            <ul className='flex  pr-4'>
              <li>aa
                {/* <select className='min-w-fit w-20'
                  // onChange={}
                  // value={}
                >
                  <option value="apples" defaultValue>Red Apples</option>
                  <option value="oranges">Outrageous Oranges</option>
                  <option value="tomatoes">Technically a Fruit Tomatoes</option>
                  <option value="bananas">Bodacious Bananas</option>
                </select> */}
              </li>
              <li>aa
                {/* <select className='min-w-fit w-20'
                  // onChange={}
                  // value={}
                >
                  <option value="apples" defaultValue>Red Apples</option>
                  <option value="oranges">Outrageous Oranges</option>
                  <option value="tomatoes">Technically a Fruit Tomatoes</option>
                  <option value="bananas">Bodacious Bananas</option>
                </select> */}
              </li>
              <li>aa
                {/* <select className='min-w-fit w-20'
                  // onChange={}
                  // value={}
                >
                  <option value="apples" defaultValue>Red Apples</option>
                  <option value="oranges">Outrageous Oranges</option>
                  <option value="tomatoes">Technically a Fruit Tomatoes</option>
                  <option value="bananas">Bodacious Bananas</option>
                </select> */}
              </li>

            </ul>
            <ButtonSquare text="Sign Up" style='bg-white' />
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-center items-center py-20'>
        <h3 className='text-4xl font-bold pb-2'>What Our  Customer Say's</h3>
        <CardReview />
      </section>
      <section className='flex flex-col justify-center items-center py-20'>
        <div className='flex border-shadow border-2  shadow-shadow shadow-top-lg shadow-bottom-lg shadow-2xl max-w-fit p-8 justify-center items-center rounded-2xl '>
          <div className=''>
            <h3 className='text-2xl font-bold pb-2'>Ready To Get Start?</h3>
            <p className='w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias excepturi praesentium vero.</p>
          </div>
          <div>
            <ButtonSquare text="Sign Up" style="bg-primary border-2 border-primary hover:bg-primary  hover:text-white " />
          </div>
        </div>
      </section>
    </div >
  )
}

export default Home