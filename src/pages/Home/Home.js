import React from 'react'
import Menu from '../../component/Menu/Menu'
import section_one_img2 from '../../assets/images/s1_img_2.png'
import section_one_img1 from '../../assets/images/s1_img_1.png'
import section_one_img3 from '../../assets/images/s1_img_3.png'
import section_two_img1 from '../../assets/images/c_logo1.png'
import section_two_img2 from '../../assets/images/c_logo2.png'
// import section_three_img3 from '../../assets/images/s3_img1.png'
import section_three_u_img1 from '../../assets/images/s3_img1.png'
import ServiceCard from './ServiceCard/ServiceCard'

function Home() {
    return (
        <>
            <Menu />
            {/* section1 */}
            <div className="section_one">
                <div className="container">
                    <div className="row flex_column_reverse">
                        <div className="col-lg-6">
                            <h1 className='section_one_title'>Helping you <span className='text_green'>scale</span> with <span className='text_green'>data</span></h1>
                            <p className='para_one'>
                                We bring your ideas and data to life with data science, machine learning, and artificial intelligence. We help top companies build and deploy custom analytics solutions.
                            </p>
                            <div className='contact-btn'>
                                <button className='button_one'>Contact Us</button>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center justify-content-lg-right ">
                            <div>
                                <img src={section_one_img2} className="s1_img2" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={section_one_img1} className="s1_img1" alt="" />
                <img src={section_one_img3} className="s1_img3" alt="" />
            </div>
            {/* section1 */}

            {/* section2 */}
            <div className="section_two">
                <div className="container">
                    <h4 className='s2_title_one'>Apple Insight Named in 2020 Clutch <br /> Leaders MatriX for Data Analytics </h4>
                    <h1 className='s2_title_two'>
                        Top 3 Big Data Companies <br />
                        in Canada
                    </h1>
                    <div className='s2_clogo_main'>
                        <img src={section_two_img1} alt="" />
                        <img src={section_two_img2} alt="" />
                    </div>
                </div>
            </div>
            {/* section2 */}

            {/* section3 */}
            <div className="section_three">
                <div className="container">
                    <div className='text-center'>
                        <h1 className='s3_title'>World-Class Services</h1>
                        <p className='s3_desc'>
                            We are a team of world-class data scientists and engineers who have helped top <br /> companies like <span className='text-dark'>Facebook, Google, Uber, Amazon, Microsoft</span> and others solve some of <br /> their hardest problems.
                        </p>
                        <p className='s3_link'>
                            Learn More <b className='text_green'>About Our Services</b>
                        </p>
                    </div>
                    {/* card area start */}
                    <div className='serviceCard'>
                        <ServiceCard
                            title={<>AI and Machine <br /> Learning Products</>}
                            desc={<>We’ve created some of the leading AI <br />
                                products on the market today. We help <br />
                                plan,  architect and create practical and <br />
                                scalable AI. <br /> <br />

                                We help bring your product vision to life.</>}
                            imgSrc={section_three_u_img1}
                        />
                        <ServiceCard
                            title={<>AI and Machine <br /> Learning Products</>}
                            desc={<>We’ve created some of the leading AI <br />
                                products on the market today. We help <br />
                                plan,  architect and create practical and <br />
                                scalable AI. <br /> <br />

                                We help bring your product vision to life.</>}
                            imgSrc={section_three_u_img1}
                        />
                        <ServiceCard
                            title={<>AI and Machine <br /> Learning Products</>}
                            desc={<>We’ve created some of the leading AI <br />
                                products on the market today. We help <br />
                                plan,  architect and create practical and <br />
                                scalable AI. <br /> <br />

                                We help bring your product vision to life.</>}
                            imgSrc={section_three_u_img1}
                        />
                    </div>
                    {/* card area end */}
                </div>
            </div>
            {/* section3 */}
        </>
    )
}

export default Home