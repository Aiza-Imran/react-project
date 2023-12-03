

function TweetDescriptionForm()
{
    const ToneList = ['fun','funny','happy','serious','sad','angry','ecstatic','curious','informative','cute','cool','controversial']
    const HashtagList=['5 Hashtags','10 Hashtags','15 Hashtags','30 Hashtags']

    return <>
    <form className="my-3">
        <div className="mb-3">
            <label htmlFor="descriptionOfTweet" className="form-label fw-bold">1. ENTER A DESCRIPTION</label>
            <textarea id="descriptionOfTweet" className="form-control" placeholder="What should the Tweet be about?" rows={4}></textarea>
        </div>
        <div className="mb-3">
            <label htmlFor="vibeOfTweet" className="form-label fw-bold">2. SELECT YOUR VIBE</label>
            <div className="d-flex">
                <select className="form-select mx-1" aria-label="select tweet tone">
                    <option selected>No Tone</option>
                    {ToneList.map(( tone )=> (
                        <option key={tone}>{tone}</option>
                    ))}
                </select>
                <select className="form-select mx-1" aria-label="select tweet hashtags">
                    <option selected>No Hashtags</option>
                    {HashtagList.map(( hashtag )=> (
                        <option key={hashtag}>{hashtag}</option>
                    ))}
                </select>
            </div>
        </div>
        <div className="mb-3 mx-auto">
            <button className="btn btn-secondary rounded-pill" style={{width:"600px"}} type="submit">Generate Tweet</button>
        </div>
    </form>
    </>
}

export default TweetDescriptionForm;