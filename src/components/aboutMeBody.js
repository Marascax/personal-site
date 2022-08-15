
const AboutMeBody = props => {
    const pageData = props.data;

    return (
        <div className='MainContent'>
            
            <p>{pageData.text}</p>

            <div className='BottomHalf'>

                <div className='TechnicalSkills'>

                    <h2>Languages</h2>

                    <h2>Tools</h2>

                </div>

                <div className='ContactInfo'>

                    <h2>Contact Information</h2>

                    <p>
                        <a href={`mailto:${pageData.contactInfo.email}`}>{pageData.contactInfo.email}</a>
                    </p>

                    <p>
                        <a href={`tel:+${pageData.contactInfo.phoneNumber}`}>{pageData.contactInfo.phoneNumber}</a>
                    </p>
                    
                    <p className='LinkedIn'>
                        <a href={pageData.contactInfo.linkedIn}>
                            <img className='Icon' src='./images/linkedin-icon.webp' alt='LinkedIn Icon'/>
                        </a>
                    </p>

                </div>

            </div>

        </div>
    )
}

export default AboutMeBody;