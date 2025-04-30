import student from '../../../assets/images/student.svg';
import school from '../../../assets/images/school.svg';
import communication from '../../../assets/images/communication.svg';

import './education.component.scss';

const Education = () => {
    return (
        <section className="section-five">
            <header className="container">
                <section>
                    <div className="educational-set">
                        <div className="educational-title-wrapper">
                            <span className="educational-title">Qualification</span>
                            <span className="educational-subtitle">My Education</span>
                        </div>
                        <div className="educational-set-wrapper">
                            <div className="educational-right">
                                <div className="classes-edu"
                                    data-aos="fade-up"
                                    data-aos-offset="10"
                                    data-aos-delay="20"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false">
                                    <div className="left-edu"
                                        data-aos="fade-up"
                                        data-aos-offset="10"
                                        data-aos-delay="20"
                                        data-aos-duration="1500"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false"><img src={student} alt="Master"/></div>
                                    <div className="right-edu"
                                        data-aos="fade-up"
                                        data-aos-offset="10"
                                        data-aos-delay="30"
                                        data-aos-duration="2000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false">
                                        <div className="tag">University</div>
                                        <div className="degree">Master's in Data Science</div>
                                        <div className="institution">Swansea University, UK</div>
                                        <div className="institution"><span>Grade -</span> Distinction</div>
                                        <div className="duration"><span>Session -</span> 2023-24</div>
                                        <div className="space-bar"></div>
                                        <div className="degree">Bachelors in Computer Science Engineering</div>
                                        <div className="institution">PES Institute of Technology And Management, India</div>
                                        <div className="institution"><span>Grade -</span> Distinction</div>
                                        <div className="duration"><span>Session -</span> 2017-21</div>
                                    </div>
                                </div>
                                <div className="classes-edu"
                                    data-aos="fade-up"
                                    data-aos-offset="10"
                                    data-aos-delay="10"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false">
                                    <div className="left-edu"
                                        data-aos="fade-up"
                                        data-aos-offset="10"
                                        data-aos-delay="20"
                                        data-aos-duration="1500"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false"><img src={school} alt="Schooling"/></div>
                                    <div className="right-edu"
                                        data-aos="fade-up"
                                        data-aos-offset="10"
                                        data-aos-delay="30"
                                        data-aos-duration="2000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false">
                                        <div className="tag">Academic</div>
                                        <div className="degree">Intermediate (12th)</div>
                                        <div className="institution">SAV Composite PU College, India</div>
                                        <div className="institution"><span>Grade -</span> Distinction</div>
                                        <div className="duration"><span>Session -</span> 2016-17</div>
                                    </div>
                                </div>
                                {/* <div className="classes-edu"
                                    data-aos="fade-up"
                                    data-aos-offset="10"
                                    data-aos-delay="10"
                                    data-aos-duration="1500"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false">
                                    <div className="left-edu"
                                        data-aos="fade-up"
                                        data-aos-offset="10"
                                        data-aos-delay="20"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false"><img src={communication} alt="Web Designing and Development" /></div>
                                    <div className="right-edu"
                                        data-aos="fade-up"
                                        data-aos-offset="10"
                                        data-aos-delay="30"
                                        data-aos-duration="2000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false">
                                        <div className="tag">Professional</div>
                                        <div className="degree">Arena Animation Academy Specialist Program(AAASP)</div>
                                        <div className="institution">Arena Animation, Gurgaon</div>
                                        <div className="duration"><span>Session -</span> 2008-10</div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </section>
    )
}


export default Education;