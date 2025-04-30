import profilePic from '../../../assets/images/ShoaibPic.jpeg'
import './hero.component.scss'

const About = () => {
    return (
        <div className='hero-bg'>
            <div className="container about-content">
                <div className="about-details">
                    <div className="title"><span className='text-gray-600'>Welcome I'm,</span> Shoaib Ahmed</div>
                    <div className="about-exp">
                        <h1 className='md:text-3xl'>I turn data and ideas into smart digital solutions.</h1>
                    </div>
                    <div className="about-more text-lg md:text-2xl">
                        <span className='text-gray-600 '>I’m a <span className='text-gray-900 md:text-gray-700 text-xl md:text-3xl'>Software Engineer</span> and <span className='text-gray-900 md:text-gray-700 text-xl md:text-3xl'>Data Analyst</span> based in the UK with a background in building websites, automation tools, and data-driven products. With hands-on experience in <span className='text-gray-700 text-xl md:text-3xl'>ETL Development, Data Engineering, Building Dashboard, Responsive Web Design, </span> and <span className='text-gray-900 md:text-gray-700 text-xl md:text-3xl'> Automation.</span></span>
                    </div>
                    <div className="connect my-9 md:mt-11">
                        <p className='text-gray-500 text-lg md:text-xl'>From creating insightful dashboards to architecting backend systems and developing custom APIs, I merge technical precision with real-world problem solving. I’m passionate about making data meaningful and empowering innovation through code. If you’re looking to create something remarkable, <a className="text-blue-600 underline" href="mailto:shoaibah432@gmail.com">let's connect!</a></p>
                    </div>
                </div>
                <div className="pic-about">
                    <div className="one-bg"></div>
                    <div className="two-bg"></div>
                    <div className="three-bg"></div>
                    <div className="pic"><img src={profilePic} alt="Shoaib Ahmed" /> </div>
                </div>
            </div>
        </div>
    )
}

export default About;