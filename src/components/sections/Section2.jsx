import React from 'react'
import { Link } from 'react-router-dom'

import Image1 from '../../assets/images/ilios-app.png'
import Image2 from '../../assets/images/home-living.png'
import Image3 from '../../assets/images/hippo.png'

import Card2 from '../cards/Card2'

const data = [
  {
    path: '/',
    image: Image1,
    category: 'Mobile apps',
    title: 'ILIOS app (B2B E-commerce)',
    description: 'Has a unique selling point where not all companies offer applications for sales, data collection and management.'
  },
  {
    path: '/',
    image: Image2,
    category: 'Website development',
    title: 'Home and Living',
    description: 'Albatech helps in creating a website catalog to show brand identity and infomation in accordance with vision and mission of Home and Living.'
  },
  {
    path: '/',
    image: Image3,
    category: 'Website development',
    title: 'HIPPO',
    description: "Albatech help to create e-commerce and company profile for Hippo's Website with realtime transaction and integration with Payment Gateway to accept multi payment."
  },
]

function Section2() {
  return (
    <section id='portofolio' className='my-5'>
      <div className="container">
        <div className="text-center mb-3 mb-lg-4 mb-xl-5">
          <p className='text-body-secondary mb-1'>Portofolio</p>
          <h2><strong>The software that we build <br /> takes our clients to the next level</strong></h2>
        </div>
        <div className="row g-3 gy-lg-4 justify-content-center">
          { data.map((_, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <Link to={_.path} className='text-decoration-none'>
                <Card2 {..._}/>
              </Link>
            </div>
          )) }
          <div className="col-12 text-center">
            <Link to="/" className="btn btn-primary rounded-pill py-3 px-5"><small><strong>Learn More</strong></small></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2