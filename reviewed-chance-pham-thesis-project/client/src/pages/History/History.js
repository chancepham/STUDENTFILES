import React, { Component } from 'react'


class History extends Component {
   

    render() {
        return (
            <div>
                <div className="slider text-center justify-content-center py-5 px-3 bg-black">
                    <div className="slide-viewer mt-5">
                        <div className="slide-group" style={{ opacity: '1' }}>
                            <div className="slide" style={{ display: 'none' }}>
                                <img alt="dark wizard" src="./assets/images/chef.jpeg"></img>
                                <div className="slidetext container p-3">
                                    <h1 className="text-xxx-large ">Our Owner</h1>
                                </div>
                            </div>
                        <div className="slide" style={{ display: 'block' }}>
                                <img alt="scary picture" src="./assets/images/chef2.jpeg"></img>
                                <div className="slidetext container p-3">
                                    <h1 className="text-xxx-large ">Our Head Chef</h1>
                                </div>
                            </div>
                        <div className="slide" style={{ display: 'none' }}>
                                <img alt="careberries" src="./assets/images/drinkmake.jpeg"></img>
                                <div className="slidetext container p-3">
                                    <h1 className="text-xxx-large ">Great Custom Drinks</h1>
                                </div>
                            </div>
                            <div className="slide" style={{ display: 'none' }}>
                                <img alt="example logo" src="./assets/images/restraunt.jpeg"></img>
                                <div className="slidetext container p-3">
                                    <h1 className="text-xxx-large ">Interior</h1>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="slide-buttons px-5 lightPulse">


                    </div>
                </div>
                <div className="custBack1">
                    <div className="container text-center justify-content-center  py-5 ">
                        <h1 className="text-xx-large">A Short History</h1>
                        <p className="para py-5"> I have always been into computers ever since I was ten. I built my own gaming PC at the
                        age of 13 and I have been hooked ever since. Due to my nerdy and techie nature I was always wanted to get
                        into the tech industry in some form and even wanted to go to a four year college for computer science. While
            I first thought these dreams were crushed when incarerated I was happy to find<span> The Last Mile</span>
                            Program.</p>
                        <p className="para py-5">I have been in The Last Mile Program for 3 years and it was a rollercoaster. I was here
                        when the youth curriculum was still Track 1 and 2. When Frontend Development Fundementals (FDF) was still
                        called YC3. Fate would have it that during the start of the ever growing learning curve that is Javascript.
                        Covid 19 would put my ambitions on hold. This was actuall a good thing because it gave me an extra long time
                        to grasp Javascript concepts and understand them. I definitely started learning Javascript with an imposter
                        syndrome, especially after looking and comparing myself to stack and other coders (BAD IDEA). Eventually I
                        grew pretty confident in Javascript and Normal Life was some what resumed. In the Last year I have learned
                        more advanced Javascript and even ReactJs. Unexpectedly, in the program I have learned a lot more
                        communication and work skills that have helped me effectively communicate without being rude. My
                        professionalism has led to a instructor assistant role after my time in MERN
            (FDF).</p>
                        <p className="para py-5">Looking to Reentry as it stands now I am close to getting my Associate's and I hope to get
                        a Bachelor's in Computer Science or Computer Programing. Thanks to what I have learned in The Last Mile
                        Program I have learned of my options in Reentry and am thinking of doing an apprenticeship with The Next
                        Chapter while I go to college instead of a job. Afterall it is a paid apprenticeship. I thank The Last Mile
                        for the opportunity I look at it as blessing and hope to help future alumni after I have gone through the
            process myself.</p>
                        <h1 className="text-left text-x-large py-5">Download My <a href="resume.odt" download="">Resume</a></h1>
                    </div>
                </div>
            </div>
        
            )
            
        }
        
    }
    
    export default History