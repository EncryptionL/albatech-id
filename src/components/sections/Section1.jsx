import React from 'react'
import { Link } from 'react-router-dom'

import Icon1 from '../../assets/icons/computer-code.svg'
import Icon2 from '../../assets/icons/mobile-setting.svg'
import Icon3 from '../../assets/icons/design-mobile.svg'
import Icon4 from '../../assets/icons/maintenance.svg'
import Icon5 from '../../assets/icons/blank-code.svg'
import Icon6 from '../../assets/icons/credit-card.svg'

import AwsIcon from '../../assets/icons/aws.svg'
import GcpIcon from '../../assets/icons/gcp.svg'
import AngularIcon from '../../assets/icons/angular.svg'
import CssIcon from '../../assets/icons/css.svg'
import HtmlIcon from '../../assets/icons/html.svg'
import JSIcon from '../../assets/icons/javascript.svg'
import PhpIcon from '../../assets/icons/php.svg'
import PythonIcon from '../../assets/icons/python.svg'
import ReactIcon from '../../assets/icons/react.svg'
import RubyIcon from '../../assets/icons/ruby.svg'
import MongoDBIcon from '../../assets/icons/mongodb.svg'
import MysqlIcon from '../../assets/icons/mysql.svg'
import PostgreIcon from '../../assets/icons/postgre.svg'
import MSqlIcon from '../../assets/icons/msql.svg'

import Card from '../cards/Card'

const data = [
  {
    path: '/',
    icon: Icon1,
    title: 'Website development',
    description: 'High-performance website to reach out more your potential customers'
  },
  {
    path: '/',
    icon: Icon2,
    title: 'Mobile apps development',
    description: 'To accelerate your business process'
  },
  {
    path: '/',
    icon: Icon3,
    title: 'Digital product design',
    description: 'Complete digital product creations from UX prototyping to final UI designs'
  },
  {
    path: '/',
    icon: Icon4,
    title: 'Maintenance',
    description: 'Make sure your digital environment keep online and updated'
  },
  {
    path: '/',
    icon: Icon5,
    title: 'CMS development',
    description: 'You can update your website content yourself'
  },
  {
    path: '/',
    icon: Icon6,
    title: 'Integrated Payment Gateway',
    description: 'Simplify the payment system with just one step'
  },
]

const techStackIcons = [ AwsIcon, GcpIcon, AngularIcon, CssIcon, HtmlIcon, JSIcon, PhpIcon, PythonIcon, ReactIcon, RubyIcon, MongoDBIcon, MysqlIcon, PostgreIcon, MSqlIcon ]

function Section1() {
  return (
    <section id='service' className='my-5'>
      <div className="container">
        <div className="text-center mb-3 mb-lg-4 mb-xl-5">
          <p className='text-body-secondary mb-1'>Complete Package</p>
          <h2 className='text-shadow'><strong>From product design to software continuous delivery</strong></h2>
        </div>
        <div className="row g-3 mb-3 mb-lg-4 mb-xl-5">
          { data.map((_, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <Link to={_.path} className='text-decoration-none'>
                <Card {..._} />
              </Link>
            </div>
          )) }
        </div>
        <div className="row g-3 g-lg-5 mb-3 mb-lg-4 mb-xl-5">
          { techStackIcons.map((techStackIcon, i) => (
            <div key={i} className="col-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center align-items-center">
              <img src={techStackIcon} alt="Tech Stack Icon" />
            </div>
          )) }
        </div>
      </div>
      <div className="bg-dark p-3 p-xl-5">
        <div className="container">
          <div className="row justify-content-center gy-3 gy-xl-5">
            <div className="col-12 col-md-10 col-lg-7 col-xl-8 text-primary text-center">
              <h4 className="display-6">Our Progress Comes with a Collaboration Between Creativity, Ideas, and Technology</h4>
            </div>
            <div className="col-12">
              <div className="row justify-content-center justify-content-md-between text-white text-center">
                <div className="col-6 col-md-4">
                  <h1 className='display-5'>1000+</h1>
                  <h4>Designs</h4>
                </div>
                <div className="col-6 col-md-4">
                  <h1 className='display-5'>30+</h1>
                  <h4>Products</h4>
                </div>
                <div className="col-12 col-md-4">
                  <h1 className='display-5'>58+</h1>
                  <h4>Website Developments</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1