import React from 'react'

const MENU_COUNT = 3
const PICTURE_COUNT_PER_MENU = 5
const FILL_IN_IMAGE = 'https://placehold.co/200'

function Carousel({ images }) {
  const carouselImages = images.concat(Array(MENU_COUNT*PICTURE_COUNT_PER_MENU-images.length).fill(FILL_IN_IMAGE))

  return (
    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1' />
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to='1' aria-label='Slide 2' />
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to='2' aria-label='Slide 3' />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row justify-content-center">
            { carouselImages.splice(0, 5).map((_, i) => (
              <div key={i} className="col-lg-2">
                <img src={_} alt="Carousel Image" className="img-fluid d-block mx-auto" />
              </div>
            )) }
          </div>
        </div>
        <div className="carousel-item">
          <div className="row justify-content-center">
            { carouselImages.splice(0, 5).map((_, i) => (
              <div key={i} className="col-lg-2">
                <img src={_} alt="Carousel Image" className="img-fluid d-block mx-auto" />
              </div>
            )) }
          </div>
        </div>
        <div className="carousel-item">
          <div className="row justify-content-center">
            { carouselImages.splice(0, 5).map((_, i) => (
              <div key={i} className="col-lg-2">
                <img src={_} alt="Carousel Image" className="img-fluid d-block mx-auto" />
              </div>
            )) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel