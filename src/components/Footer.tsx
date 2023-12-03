function Footer()
{
    const companyInfo = ['Home','Pricing','Reviews','Affiliates','Blog','Learn','Help','Sign Up','Login']
    const Scheduling = ['Instagram','Twitter','Facebook','LinkedIn','Google My Business', 'Pinterest', 'Tiktok', 'Views']
    const FreeTools=['Image Caption Generator', 'Caption Generator','Twitter Thread Maker', 'Tweet Generator', 'Image Description Generator',
                      'Bio Generator', 'Emoji Translator', 'TikTok Hashtag Generator', 'Schedule Twitter Threads']
    const Analytics=['Instagram','Facebook','LinkedIn','Reports']
    const MoreFeatures=['Teams','Social Media Inbox', 'Instagram Bio link','Instagram Feed Planner','Free 14 Day Trial']
    const KeepInTouch=['Contact','Twitter','Instagram','Product Hunt']
    const More=['Compare','ChangeLog','Roadmap','Terms','Privacys']

    return <>
    <div className="row m-5 p-5">
        <div className="col-3">
            <h5>Company</h5>
            <ul className="footer-lists">            
                {companyInfo.map(( item )=> (
                    <li className="list-group-item py-2" key={item}> <a href='#' className="link-dark link-underline-opacity-0 link-underline-opacity-100-hover"> {item} </a> </li>
                ))}
            </ul>
        </div>
        <div className="col-3">
            <h5>Scheduling</h5>
            <ul className="footer-lists">            
                {Scheduling.map(( item )=> (
                    <li className="list-group-item py-2" key={item}> <a href='#' className="link-dark link-underline-opacity-0 link-underline-opacity-100-hover"> {item} </a> </li>
                ))}
            </ul>

            <h5>Free Tools</h5>
            <ul className="footer-lists">            
                {FreeTools.map(( item )=> (
                    <li className="list-group-item py-2" key={item}> <a href='#' className="link-dark link-underline-opacity-0 link-underline-opacity-100-hover"> {item} </a> </li>
                ))}
            </ul>
        </div>
        <div className="col-3">
            <h5>Analytics</h5>
            <ul className="footer-lists">            
                {Analytics.map(( item )=> (
                    <li className="list-group-item py-2" key={item}> <a href='#' className="link-dark link-underline-opacity-0 link-underline-opacity-100-hover"> {item} </a> </li>
                ))}
            </ul>

            <h5>More Features</h5>
            <ul className="footer-lists">            
                {MoreFeatures.map(( item )=> (
                    <li className="list-group-item py-2" key={item}> <a href='#' className="link-dark link-underline-opacity-0 link-underline-opacity-100-hover"> {item} </a> </li>
                ))}
            </ul>
        </div>
        <div className="col-3">
            <h5>Keep In Touch</h5>
            <ul className="footer-lists">            
                {KeepInTouch.map(( item )=> (
                    <li className="list-group-item py-2" key={item}> <a href='#' className="link-dark link-underline-opacity-0 link-underline-opacity-100-hover"> {item} </a> </li>
                ))}
            </ul>

            <h5>More</h5>
            <ul className="footer-lists">            
                {More.map(( item )=> (
                    <li className="list-group-item py-2" key={item}> <a href='#' className="link-dark link-underline-opacity-0 link-underline-opacity-100-hover"> {item} </a> </li>
                ))}
            </ul>
        </div>
    </div>
    </>

}

export default Footer;