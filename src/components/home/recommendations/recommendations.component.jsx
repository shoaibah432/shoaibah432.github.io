import priya from '../../../assets/images/priyachaney.jpg';
import hina from '../../../assets/images/hina.jpeg';

import './recommendations.component.scss';

const Recommendation = () => {
    return (
        <section className="received">
        <section className="container">
            <h2 className="latest-head">Received</h2>
            <article className="latest-work">
                <h3 className="left-head-title">Recommendations</h3>
                <div className="rec">
                    <div className="rec-item">
                        <div className="rec-caption">
                            <div className="rec-comment">
                                <h6>I had the opportunity to work with Shoaib, and I was impressed by his work ethic and approach. He is methodical, sincere, and a true go-getter. He demonstrated a strong ability to troubleshoot and resolve issues effectively. 
                                    Shoaib is also a great team player who brings positive energy to every project.I have no doubt he will continue to excel in his academic and professional journey. 
                                    I wholeheartedly recommend him and wish him the very best for his future endeavors</h6>
                                <div className="rec-author">
                                    <div className="text-center">
                                        <div className="rec-img"><img src={priya} alt="Priya Chaney" /></div>
                                        <div className="rec-details">
                                            <h5>Priya Chaney</h5>
                                            <p>IT Project Manager | Project Coordinator</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rec-item active">
                        <div className="rec-caption">
                            <div className="rec-comment">
                                <h6>I had the pleasure of working with Shoaib for 2 years at Subex. From the beginning, he showed a great attitude and eagerness to learn. 
                                    Shoaib consistently delivered high-quality work and was always ready to take on new challenges. He quickly became a valuable member of the team, and I have no doubt he will thrive in any role he pursues next.</h6>
                                <div className="rec-author">
                                    <div className="text-center">
                                        <div className="rec-img"><img src={hina} alt="Hina Kausar" /></div>
                                        <div className="rec-details">
                                            <h5>Hina Kausar</h5>
                                            <p>Manager - Engineering at AT&T</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </section>
    )
}

export default Recommendation;