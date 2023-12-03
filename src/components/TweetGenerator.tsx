import TweetDescriptionForm from "./TweetDescriptionForm";

function TweetGenerator()
{
    return <>
    <div className="center-content my-5 py-5">
        <nav className="d-block" aria-label="breadcrumb">
            <ol className="breadcrumb fs-4">
                <li className="breadcrumb-item"><a className="link-dark link-offset-2 link-underline-opacity-0-hover p-3" href="#">Home</a></li>
                <li className="breadcrumb-item" ><a className="link-dark link-offset-2 link-underline-opacity-0-hover p-3" href="#">Tools</a></li>
            </ol>
        </nav>
        <h1 className="fw-bold pt-5">AI TWEET GENERATOR</h1>
        <p className="pt-2">Generate tweets quickly and easily with our new AI Tweet Generator.</p>
        <TweetDescriptionForm />
    </div>
    </>
}

export default TweetGenerator;