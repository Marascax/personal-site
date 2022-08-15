
const AboutMeBody = props => {
    const pageData = props.data;

    const technicalSkills = pageData.technicalSkills;
    // show icon with each language name, framwork and library name, and tool name

    let languages = technicalSkills.languages.map((language, index) => (
        <div className="TextIcon" key={index}>
            <span className='TextName'>{language.name}</span><img className="TextIcon" src={language.icon} alt={language.name}/>
        </div>
    ));

    let frameworksLibs = technicalSkills.frameworksLibraries.map((frameworkLib, index) => (
        <div className="TextIcon" key={index}>
            <span className='TextName'>{frameworkLib.name}</span><img className="TextIcon" src={frameworkLib.icon} alt={frameworkLib.name}/>
        </div>
    ));

    let tools = technicalSkills.tools.map((tool, index) => (
        <div className="TextIcon" key={index}>
            <span className='TextName'>{tool.name}</span><img className="TextIcon" src={tool.icon} alt={tool.name}/>
        </div>
    ));

    return (
        <div className='MainContent'>
            
            <p>{pageData.text}</p>

            <div className='BottomHalf'>

                <div className='TechnicalSkills'>

                    <h2>Languages</h2>

                    <div className='TextIconList'>
                        {languages}
                    </div>

                    <h2>Frameworks &amp; Libraries</h2>

                    <div className='TextIconList'>
                        {frameworksLibs}
                    </div>

                    <h2>Tools</h2>
                    <div className="TextIconList">
                        {tools}
                    </div>

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