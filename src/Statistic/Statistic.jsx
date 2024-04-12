import React from 'react'
import bg from '../image/bg.jpg'
import '../Statistic/Statistic.css'

const Statistic = () => {
  return (
    <>
    <div className="container-fluid bg-img" style={{height: 'auto'}}>
            <div className="container px-xl-5 px-lg-0 py-4">
                <div className="col-12 text-center text-white ">
                    <h3 className="fw-bolder fs-1 pt-5">Our Statistics</h3>
                    <p>Some More here..</p>
                </div>
                <div className="row text-center text-white">
                    <div className="col-md-3 col-sm-6 p-lg-5 p-md-3">
                        <p className="size p-3 fst-italic fw-bolder" style={{fontSize: '60px'}}>18</p>
                        <p>Years of Experience</p>
                    </div>
                    <div className="col-md-3 col-sm-6 p-lg-5 p-md-3">
                        <p className="size p-3 fst-italic fw-bolder"  style={{fontSize: '60px'}}>1200</p>
                        <p>Contest attended</p>
                    </div>
                    <div className="col-md-3 col-sm-6  p-lg-5 p-md-3">
                        <p className="size p-3 fst-italic fw-bolder"  style={{fontSize: '60px'}}>700</p>
                        <p>Happy Customer</p>
                    </div>
                    <div className="col-md-3 col-sm-6 p-lg-5 p-md-3">
                        <p className="size p-3 fst-italic fw-bolder"  style={{fontSize: '60px'}}>800</p>
                        <p>Weight Loss & Fitness</p>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Statistic