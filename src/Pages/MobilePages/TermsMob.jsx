import React from 'react'
import style from '../Terms/Terms.module.css'
import MobileFooter from '../../Components/MobileComponent/MobileFooter'

const TermsMob = () => {
    return (
        <>
            <div
                className={` text-center p-5 mt-0 rounded ${style.TermsContainer}`}
            >
                <h1>Hotelio Terms & Services</h1>
            </div>
            <div className='container pb-5'>
                <h4 className='py-3'><b>Terms Of Use</b></h4>
                <p className='py-2'>
                    These terms form a legally binding agreement between Users (“User(s), you, your, customer(s), yourself”) and Oravel
                    Stays Private Limited and/or its subsidiaries and affiliates (“Hotelio, we, us, our”). These terms shall govern the use of the
                    website, mobile application, call centers (collectively referred to as “Hotelio Platform”) which enables the User to connect
                    with us in relation to the services offered through the Hotelio Platform ("Services").

                    Please read these terms carefully before accessing, using, obtaining or availing any products or Services by Hotelio. If
                    you do not agree with these Terms of Use you may refrain from using the Hotelio Platform and/or Services. These
                    conditions must be read in conjunction with any other applicable terms and conditions governing the use of Hotelio
                    Platform and Services.

                    Hotelio reserves the right to modify these Terms of Use at any time at its sole discretion. It will be your responsibility to
                    keep yourself updated with the Terms of Use from time to time, your continued usage of the Hotelio Platform and Services
                    would be deemed to be an acceptance of these terms and the modifications thereto.
                </p>
            </div>
            <div className="d-md-block d-lg-none d-xl-none">
                <MobileFooter />
            </div>
        </>
    )
}

export default TermsMob