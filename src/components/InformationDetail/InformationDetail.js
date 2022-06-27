import styles from './InformationDetail.module.css'
import logo from '../../static/Picture/Logo.png'

import VN from 'country-flag-icons/react/3x2/VN'
import Tippy from '@tippyjs/react'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
function InformationDetail() {
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('gradient')}></div>
            <div className={cx('avatar')}>
                <img src = {logo}/>
            </div>
            <div className={cx('infos')}>
                <div className={cx('info', 'name')}>
                    <p>Huu Dinh</p>
                </div>
                <div className={cx('info')}>
                    <span className={cx('first')}>Country: </span>
                    <VN className={cx('flag')} title="VN-flag" height="20px" width="20px"/>
                </div>
                <div className={cx('info')}>
                    <span className={cx('first')}>Graduated: </span><span>Can Tho University</span>
                </div>
                <div className={cx('info')}>
                    <span className={cx('first')}>Birth: </span><span>27/01/2000</span>
                </div>
            </div>
            <div className={cx('used-wrapper')}>
                <p>I use:</p>
                <div className={cx('used')}>
                    <Tippy
                        placement='bottom'
                        content='HTML'
                    >
                        <div className={cx('icon', 'html')}>
                            <i className="fa-brands fa-html5"></i>
                        </div>
                    </Tippy>
                    <Tippy
                        placement='bottom'
                        content='CSS'
                    >
                        <div className={cx('icon' , 'css')}>
                            <i className="fa-brands fa-css3"></i>
                        </div>
                    </Tippy>
                    <Tippy
                        placement='bottom'
                        content='JavaScript'
                    >
                        <div className={cx('icon', 'js')}>
                            <i className="fa-brands fa-js"></i>
                        </div>     
                    </Tippy>
                    <Tippy
                        placement='bottom'
                        content='Python'
                    >
                        <div className={cx('icon', 'python')}>
                            <img height="26px" width="26px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png'/>
                        </div>
                    </Tippy>
                    <Tippy
                        placement='bottom'
                        content='React'
                    >
                        <div className={cx('icon', 'react')}>
                            <i className="fa-brands fa-react"></i>
                        </div>
                    </Tippy>
                </div>
            </div>

        </div>
    );
}

export default InformationDetail;