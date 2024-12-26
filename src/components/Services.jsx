import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { check, service1 } from '../assets'
import { brainwaveServices } from '../constants'

const Services = () => {
  return (
   <Section id='how-to-use'>
    <div className='container'>
        <Heading title='Generative AI made for creators' text='Brainwave unlocks the potential of AI-powered applications'/>
        <div className='relative '>
            <div className='relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 
            rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]'>
                <div className='absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto'>
                    <img src={service1} className='w-full h-full object-cover md:object-right'
                    width={800} height={730} alt='smartest ai'/>
                </div>
                <div className='relative z-1 max-w-[17rem] ml-auto'>
                    <h4>
                        Smartest AI
                    </h4>
                    <p>
                    Brainwave unlocks the potential of AI-powered applications
                    </p>
                    <ul className='body-2 '>
                        {brainwaveServices.map((item,index)=>(
                            <li key={index}>
                                    <img src={check}/>
                                    <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </div>
    </div>

   </Section>
  )
}

export default Services
