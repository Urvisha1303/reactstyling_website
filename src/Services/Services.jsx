import React from 'react'
import '../Services/Services.css'

const Services = () => {
  return (
    <>
    <div className="container-fluid  bg-light" style={{height:'auto'}}>
            <div className="container py-5 px-0 px-lg-0 row-gap-sm-0 d-flex flex-wrap ">
                <div className="col-md-12 col-lg-4 px-0 px-sm-3 py-3 mx-lg-0 mx-md-4 services-mx">
                    <h1 className="fw-bolder py-3">Our Services</h1>
                    <p className="py-3 py-lg-1 fs-5 fs-lg-0 lh-lg" style={{color: "#999"}}>Excepteur sint occaecat cupidatat
                        non proident, sunt
                        in culpa qui officia deserunt mollit anim
                        id.</p>
                    <p className="lh-lg fs-6" style={{color: '#999', lineHeight: '15px'}}> Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabofdfd dsdsd.</p>
                </div>
                <div className="col-md-12 col-lg-8  d-flex flex-column">
                    <div className="container  text-center">
                        <div className="row row-gap-sm-5 my-sm-4 column-gap-sm-4 col-gap ">
                            <div className="col-md-5 col-sm-12 p-lg-4 p-lg-3 d-flex py-xl-5 py-sm-3 py-lg-0 excercise ex-mb "
                                style={{backgroundColor: '#fff'}}>
                                <div className="col-3 fs-4 mt-3 me-2 " style={{color: '#ff3c41'}}>
                                    <i className="fa-brands fa-apple fa-2xl"></i>
                                </div>
                                <div className="col-9 pe-3 text-start">
                                    <h4 className="mt-3 fw-normal">Nutrition Strategy</h4>
                                    <p className="mt-3 pe-3" style={{color: "#999"}}>Integer sit amet mattis quam, sit amet
                                        ultricies
                                        velit.</p>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-12 p-lg-4 p-lg-3 d-flex py-xl-5 py-sm-3 py-lg-0 ex-mb"
                                style={{ background: '#ff3c41'}}>
                                <div className="col-3 fs-4 mt-3 me-2 " style={{color: '#ff3c41'}}>
                                    <i className="fa-solid fa-wheelchair-move fa-2xl text-white"></i>
                                </div>
                                <div className="col-9 pe-4 text-start ">
                                    <h4 className="mt-2 fw-normal">Workout Routein</h4>
                                    <p className="mt-3 text-white" style={{color: "#999"}}>Integer sit amet mattis quam, sit
                                        amet ultricies
                                        velit.</p>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-12 p-lg-4 p-lg-3 d-flex py-xl-5 py-sm-3 py-lg-0 ex-mb"
                                style={{ background: '#ff3c41'}}>
                                <div className="col-3 fs-4 mt-3 me-2">
                                    <i className="fa-solid fa-hourglass-start fa-2xl text-white "></i>
                                </div>
                                <div className="col-9 pe-4 text-start">
                                    <h4 className="mt-3 fw-normal ">Cardio Excercise</h4>
                                    <p className="mt-3 text-white" style={{color: "#999"}}>Integer sit amet mattis quam, sit
                                        amet ultricies
                                        velit.</p>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-12 p-lg-4 p-lg-3 d-flex py-xl-5 py-sm-3 py-lg-0 excercise ex-mb"
                                style={{backgroundColor: '#fff'}}>
                                <div className="col-3 fs-4 mt-3 me-2" style={{color: "#ff3c41"}}>
                                    <i className="fa-regular fa-thumbs-up fa-2xl"></i>
                                </div>
                                <div className="col-9 pe-2 text-start">
                                    <h4 className="mt-3 fw-normal">Individual Support</h4>
                                    <p className="mt-3 pe-4" style={{color: '#999'}}>Integer sit amet mattis quam, sit amet
                                        ultricies
                                        velit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Services