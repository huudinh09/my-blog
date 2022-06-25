
import Header from '../../components/Header/Header.js'
import Information from '../../components/Information/Information.js'
import NavigationBar from '../../components/NavigationBar/NavigationBar.js'
import Slider1 from '../../components/Slider/Slider.js'
import InformationDetail from '../../components/InformationDetail/InformationDetail.js'
import BestPost from '../../components/BestPost/BestPost.js'
import Post from '../../components/Post/Post.js'
import styles from './Home.module.css'

import classNames from 'classnames/bind';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react'

const cx = classNames.bind(styles)

function Home() {
    document.title= "Huudinh's Blog" 
    const [showNavigation, setShowNavigation] = useState(false)

    const handleShowNavigation = (data) => {
        setShowNavigation(data)
    }
    console.log(window.scrollY);

    useEffect(()=>{
        AOS.init({
            duration: 1000
        })
    }, [])

    return (
        <>
            <div className={cx('line-header')}></div>
            {showNavigation && <div className={cx('navigation')}><NavigationBar callback={handleShowNavigation}/></div>}
            <div className={cx('grid', 'wide')}>
                <div className={cx('header')}><Header callback={handleShowNavigation}/></div>
                <div className={cx('information')}><Information/></div>
                <div className={cx('row')}>
                    <div data-aos="fade-down-right" className={cx( 'news','col', 'l-8', 'm-12', 'c-12')}><BestPost/></div>
                    <div data-aos="fade-down-left" className={cx('info-detail','col', 'l-4', 'm-0', 'c-0')}><InformationDetail/></div>
                </div>
                <div className={cx('slider')}> <Slider1/></div>
                <div className={cx('row', 'a')}>
                    <div data-aos="fade-down" className={cx('info-bottom','info-detail','col', 'l-0', 'm-12', 'c-12')}><InformationDetail/></div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-8')}>
                        <div data-aos="fade-down-right">
                            <Post
                                title='DevOps Toolchain Enhancement'
                                img='https://www.ibm.com/blogs/cloud-archive/wp-content/uploads/2016/10/devops_arch_edited.png'
                                author='Admin'
                                time='12 hour ago'
                                like = '120'
                                compact=' Historically, our company ubitec had started with a customer project. 
                                        Agile/Scrum was our proposal for working with customers. 
                                        Time by time, Agile/Scrum also became our culture for software development. 
                                        To be successful with this development approach, we somehow needed to have a fast release for customers (i.e. every one week). 
                                        Back then, we had a build tool Jenkins which was responsible for having sprint release packages for our customers. 
                                        The build job pipelines contain some steps such as gathering the artifacts, checking the code convention, running the tests, building docker images, and packaging an archived file (a zip file). 
                                        The set of tools involved in a pipeline is roughly called a toolchain. It is just a part of a bigger process called the DevOps toolchain. Today,  it is even treated as a mandatory factor to have Agile
                                '
                            />
                        </div>
                        <div data-aos="fade-down-left">
                            <Post
                                title='How Software Testing Life Cycle (STLC) works in Waterfall, V-model and Agile?'
                                img='https://www.asktester.com/wp-content/uploads/2019/05/stlc-e1627052215244.png'
                                author='Huu Dinh'
                                time='15 hour ago'
                                like = '170'
                                compact=' Historically, our company ubitec had started with a customer project. 
                                        As a Software Quality Engineer, I have been through many interviews in my early career and the most frequently asked question was about software testing life cycle. 
                                        I tried to cram the answer but soon I realized that it is a very wider concept and I have to consider the complete picture before deciding what it actually is'
                            />
                        </div>
                        <div data-aos="fade-down-left">
                            <Post
                                title='State of Testing Report 2019: Ready to take survey (and download later)'
                                img='https://www.asktester.com/wp-content/uploads/2018/10/meausre.jpg'
                                author='Admin'
                                time='3 day ago'
                                like = '120'
                                compact=' Pop quiz:

                                What’s the most common question from your boss/manager?
                                
                                ….
                                
                                I know you have your own answer but I’m pretty sure these are the most common ones:
                                
                                How much you tested it?
                                
                                Did you test enough?
                                
                                I don’t know you or how many years in testing but for me those questions are really challenging'
                            />
                        </div>
                        <div data-aos="fade-down-right">
                            <Post
                                title='How to switch career to software testing even if you’re old or from non-IT background'
                                img='https://www.asktester.com/wp-content/uploads/2018/08/old.jpg'
                                author='Admin'
                                time='5 day ago'
                                like = '120'
                                compact=' I sometimes receive questions from readers asking how to get started in software testing. 
                                Most of them are from freshers or newly graduated. Particularly some of the questions come 
                                from those who would like to switch their careers to software testing when they are old or they are from non-IT background.'
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;