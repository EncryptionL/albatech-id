import React, { Fragment } from 'react'

import LogoHippo from '../../assets/images/logo-hippo.png'
import LogoHomeLiving from '../../assets/images/logo-home-living.png'
import LogoIlios from '../../assets/images/logo-ilios.png'
import LogoDioLiving from '../../assets/images/logo-dio-living.png'
import LogoMelandas from '../../assets/images/logo-melandas.png'

import Carousel from '../Carousel'
import Card3 from '../cards/Card3'

const images = [ LogoHippo, LogoHomeLiving, LogoIlios, LogoDioLiving, LogoMelandas ]

function Testimonial1() {
  return (
    <Fragment>
      <h1 className='text-shadow'>Amazing people</h1>
      <p className='mb-2' style={{ fontSize: 'x-large' }}>"They are people who are not only following the tasks, but can work as a team. Together."</p>
      <div className="row">
        <div className="col-auto">
          <img src='https://placehold.co/50' alt="" className="img-fluid rounded-circle" />
        </div>
        <div className="col-auto">
          <p className='mb-0'>Matthijs Piëst</p>
          <small className="text-body-secondary">
            COO at WieBetaaltWat
          </small>
        </div>
      </div>
    </Fragment>
  )
}

function Testimonial2() {
  return (
    <Fragment>
      <h5><strong>Amazing people</strong></h5>
      <p className='mb-2'>"They are people who are not only following the tasks, but can work as a team. Together."</p>
      <p className='mb-0'>Matthijs Piëst</p>
      <small className="text-body-secondary">
        COO at WieBetaaltWat
      </small>
    </Fragment>
  )
}

function Testimonial3() {
  return (
    <Fragment>
      <h1><strong>Partnership approach</strong></h1>
      <p className='mb-2' style={{ fontSize: 'x-large' }}>"We felt like we had a true partner throughout the process. They were clearly interested on our long-term success."</p>
      <div className="row">
        <div className="col-auto">
          <img src='https://placehold.co/50' alt="" className="img-fluid rounded-circle" />
        </div>
        <div className="col-auto">
          <p className='mb-0'>Matthijs Piëst</p>
          <small className="text-body-secondary">
            COO at WieBetaaltWat
          </small>
        </div>
      </div>
    </Fragment>
  )
}

function Section3() {
  return (
    <section className='my-5'>
      <div className="container">
        <div className="text-center mb-3 mb-lg-4 mb-xl-5">
          <p className='text-body-secondary mb-1'>Testimonials</p>
          <h2><strong>What clients love in working <br /> with Albatech Team</strong></h2>
        </div>
        <div className="row my-5 py-lg-5 position-relative">
          <div className="col-12">
            <div className="row gy-3">
              <div className="col-lg-6 col-xl-7">
                <div className="row gy-3 gy-xl-5">
                  <div className="col-md-8 col-lg-12 col-xl-8">
                    <Testimonial1 />
                  </div>
                  <div className="col-md-6 col-lg-10 col-xl-6">
                    <Testimonial2 />
                  </div>
                  <div className="col-md-6 col-lg-10 col-xl-6">
                    <div className="d-block custom-testimonial-position">
                      <Testimonial2 />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-5">
                <div className="row gy-3 gy-lg-5">
                  <div className="col-md-3 col-lg-auto p-0 m-0"></div>
                  <div className="col-md-6 col-lg-10 col-xl-9">
                    <Testimonial2 />
                  </div>
                  <div className="col-md-3 col-lg-auto p-0 m-0"></div>
                  <div className="col-md-4 col-lg-auto p-0 m-0"></div>
                  <div className="col-md-8 col-lg-12 col-xl-11">
                    <Testimonial3 />
                  </div>
                </div>
              </div>
            </div>
            <div className="accessories">
              <i className="fa-solid fa-quote-left fa-10x text-primary quote-1"></i>
              <i className="fa-solid fa-quote-right fa-10x text-primary quote-2"></i>
              <div className="text-primary dots dot-yellow dot-1"></div>
              <div className="text-primary dots dot-gray dot-2"></div>
            </div>
          </div>
        </div>
        <div className="row my-5 pt-5">
          <div className="col-12">
            <Carousel images={images}/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Card3 />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3