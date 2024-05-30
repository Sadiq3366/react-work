import React, {useState} from "react";

export default function About(props){

    return(
        <>
            <div className="container" style={{backgroundColor: (props.myStyle === 'light') ? 'white' : 'rgb(169 169 169)' , color: (props.myStyle === 'light') ? 'black' : 'white' , paddingBottom:'15px'}}>
                <h1>About us</h1>
                <div className="accordion accordion-flush" id="accordionFlushExample" >
                    <div className="accordion-item" >
                        <h2 className="accordion-header" >
                            <button className="accordion-button collapsed" style={{backgroundColor: (props.myStyle === 'light') ? 'white' : 'rgb(169 169 169)' , color: (props.myStyle === 'light') ? 'black' : 'white'}} type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="flush-collapseOne" style={{backgroundColor: (props.myStyle === 'light') ? 'white' : 'rgb(169 169 169)' , color: (props.myStyle === 'light') ? 'black' : 'white'}} className="accordion-collapse collapse"
                             data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to
                                demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion
                                body.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={{backgroundColor: (props.myStyle === 'light') ? 'white' : 'rgb(169 169 169)' , color: (props.myStyle === 'light') ? 'black' : 'white' , border:'1 px solid'}} type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" style={{backgroundColor: (props.myStyle === 'light') ? 'white' : 'rgb(169 169 169)' , color: (props.myStyle === 'light') ? 'black' : 'white', border:'1 px solid'}} className="accordion-collapse collapse"
                             data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to
                                demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion
                                body. Let's imagine this being filled with some actual content.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={{backgroundColor: (props.myStyle === 'light') ? 'white' : 'rgb(169 169 169)' , color: (props.myStyle === 'light') ? 'black' : 'white' , border:'1 px solid'}} type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="flush-collapseThree" style={{backgroundColor: (props.myStyle === 'light') ? 'white' : '#797878' , color: (props.myStyle === 'light') ? 'black' : 'white'}} className="accordion-collapse collapse"
                             data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to
                                demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion
                                body. Nothing more exciting happening here in terms of content, but just filling up the
                                space to make it look, at least at first glance, a bit more representative of how this would
                                look in a real-world application.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
