import styles from './Slider.module.css'
import InformationPost from '../InformationPost/InformationPost'

import classNames from 'classnames/bind'
import Slider from "react-slick"

const cx = classNames.bind(styles)
function Slider1() {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return ( 
    <div className={cx('wrapper')}>
        <Slider {...settings}>
            <div className={cx('card')}>
                <div className={cx('img-wrapper')}>
                    <img className={cx('card-img')} src='https://www.asktester.com/wp-content/uploads/2022/05/tools.jpg' alt='img'/>
                </div>
                <div className={cx('card-bottom')}>
                    <p className={cx('card-title')}>How to Choose the Suitable Test Automation Tool or Framework for Your Business?</p>
                    <p className={cx('card-detail')}>Manual software testing has a lot of disadvantages that create bottlenecks in the development process. The life cycle of software under development lasts significantly longer when manual testing processes are implemented. At the same time, manual testing processes could potentially yield inaccurate results.Unlike manual processes, automated testing prioritizes speed and accuracy. Using comprehensive testing scripts developed using reliable frameworks yields significantly better results. Without compromising any critical testing phase, automated tests report back results in a considerable short time. </p>
                </div>
                <button className={cx('btn-readmore')}>Read more</button>
            </div>
            <div className={cx('card')}>
                <div className={cx('img-wrapper')}>
                    <img className={cx('card-img')} src='https://www.asktester.com/wp-content/uploads/2022/04/test-strategy.jpg' alt='img'/>
                </div>
                <div className={cx('card-bottom')}>
                    <p className={cx('card-title')}>When & Why Do You Need A Test Strategy?</p>
                    <p className={cx('card-detail')}>Software testing is one of the critical success factors of a big project. Test strategy is the backbone of software testing as it acts as a guiding principle for software testing activities (test types selection, test design, test approach, automation tools, etc.)</p>
                </div>
                <button className={cx('btn-readmore')}>Read more</button>
            </div>
            <div className={cx('card')}>
                <div className={cx('img-wrapper')}>
                    <img className={cx('card-img')} src='https://www.asktester.com/wp-content/uploads/2020/10/hard-working.jpg' alt='img'/>
                </div>
                <div className={cx('card-bottom')}>
                    <p className={cx('card-title')}>Forget about work smarter. Work harder</p>
                    <p className={cx('card-detail')}>Yes, you read it right. Work harder, not smarter? This sounds counter-intuitive considering there are tons of sound advice out there recommending us to work smarter, not harder. While I see the point of working smarter, I do see people under-estimate the value of “working harder”. I see people rant the phrase “work smarter, not work harder” everywhere.The quote is with good intent. However, if it’s ranted without care, it’s easily perceived that working hard is something bad or no longer valid.That’s not true to me.In this post today, I’ll explain why you should work hard too.   </p>
                </div>
                <button className={cx('btn-readmore')}>Read more</button>
            </div>
            <div className={cx('card')}>
                <div className={cx('img-wrapper')}>
                    <img className={cx('card-img')} src='https://www.asktester.com/wp-content/uploads/2020/05/reject_cv.jpg' alt='img'/>
                </div>
                <div className={cx('card-bottom')}>
                    <p className={cx('card-title')}>5 minor but deadly mistakes in CV which make you ignored</p>
                    <p className={cx('card-detail')}>In the last couple of weeks, I started to screen CV for a software tester position in my team. Interviewing/screening CV is not new to me. I have done that for several years and I can’t remember how many CVs I reviewed. Screening CV is an interesting activity (and challenging of course) and I don’t have any problem with it. However, what really bothered me was that the quality of CV didn’t change much in the last few years. I’m not talking about the skills, experience, competence. I’m talking about the way candidates prepared and submitted their CVs to apply for the job.</p>
                </div>
                <button className={cx('btn-readmore')}>Read more</button>
            </div>
            <div className={cx('card')}>
                <div className={cx('img-wrapper')}>
                    <img className={cx('card-img')} src='https://www.asktester.com/wp-content/uploads/2020/03/outsourcing_vs_product_company.jpg' alt='img'/>
                </div>
                <div className={cx('card-bottom')}>
                    <p className={cx('card-title')}>Which is better: outsourcing or product company?</p>
                    <p className={cx('card-detail')}>When it comes to select a company to work for, specifically in software development or software testing, this is one of the most asked questions: Which is better: Outsourcing or Product company? To be honest, I don’t think it’s a good question. What do you mean when you say “better”? Better for what?  </p>
                </div>
                <button className={cx('btn-readmore')}>Read more</button>
            </div>
        </Slider>
    </div>
    );
}

export default Slider1;

