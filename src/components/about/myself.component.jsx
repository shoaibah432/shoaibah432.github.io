import profilePic from '../../assets/images/ShoaibPic.jpeg';

import './myself.component.scss';

const MySelf = () => {
    return (
        <div className="myself about-content">
            <div className="pic-about">
                <div className="pic"><img src={profilePic} alt="pic" /></div>
            </div>
            <div className="about-details">
                <div className="title"><span>Hi I'm,</span> Shoaib Ahmed</div>
                <div className="about-more pb-12 text-lg md:text-2xl">
                    <span className='bottom-space mb-4'>I grew up in a city named Bhadravathi in the Shimoga District of India, I began my educational journey with primary and secondary schooling in my hometown. I went on to earn a Bachelor's degree in Computer Science and Engineering from PES Institute of Technology and Management.</span>
                    <span className='bottom-space mb-4'>My career started as a Software Engineer, gradually expanding into development, automation, and data engineering. Recently, I completed an MSc in Data Science at Swansea University, UK, where I deepened my expertise in analytics, machine learning, and cloud technologies.</span>
                    <span className='bottom-space md:mb-4'>Passionate about continuous learning and staying ahead of emerging technologies, I aim to build scalable, impactful digital solutions that bridge data and development.</span>
                </div>
            </div>
        </div>
    )
}

export default MySelf;