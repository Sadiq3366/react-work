import React, {useState} from "react";
export default function TextForm(props){
    const [text, setText] = useState('Enter text here');
    // setText("new text");
    const handleUpClick = (e)=>{
        let upercase = text.toUpperCase();
        setText(upercase);
        (text.trim().split('').filter(Boolean).length > 0 ) ? props.showAlert('Upper word set successfully','success') : props.showAlert('Put the words in the text area','danger');

    }
    const handlelowClick = (e)=>{
        let upercase = text.toLowerCase();
        setText(upercase);
        (text.trim().split('').filter(Boolean).length > 0 ) ? props.showAlert('lower word set successfully','success') : props.showAlert('Put the words in the text area','danger');
        //props.showAlert('lower word set successfully','success');
    }
    const handlesenClick = (e)=>{
        let upercase = toSentenceCase(text);
        setText(upercase);
        (text.trim().split('').filter(Boolean).length > 0 ) ? props.showAlert('case sensitive set successfully','success') : props.showAlert('Put the words in the text area','danger');

        //props.showAlert('case sensitive set successfully','success');
    }
    const handlecapClick = (e)=>{
        let upercase = tocapCase(text);
        setText(upercase);
        (text.trim().split('').filter(Boolean).length > 0 ) ? props.showAlert('Capitalize case set successfully','success') : props.showAlert('Put the words in the text area','danger');

        //props.showAlert('Capitalize case set successfully','success');
    }
    function tocapCase(text) {
        return text.split(' ').map(sentence => {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        }).join(' ');
    }
    const handleinvClick = (e)=>{
        let upercase = toinvCase(text);
        setText(upercase);
        (text.trim().split('').filter(Boolean).length > 0 ) ? props.showAlert('Invert case set successfully','success') : props.showAlert('Put the words in the text area','danger');

        //props.showAlert('Invert case set successfully','success');
    }
    function toinvCase(text) {
        return text.split(' ').map(sentence => {
            return sentence.charAt(0).toLowerCase() + sentence.slice(1).toUpperCase();
        }).join(' ');
    }

    const handledownClick = (e)=>{
        const blob = new Blob([text], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = "myTextFile.txt";
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);
    }
    const handlealtClick = (e)=>{
        let upercase = toAlternatingCase(text);
        setText(upercase);
        (text.trim().split('').filter(Boolean).length > 0 ) ? props.showAlert('Alternative case set successfully','success') : props.showAlert('Put the words in the text area','danger');

        //props.showAlert('Alternative case set successfully','success');
    }
    function toSentenceCase(text) {
        return text.split('. ').map(sentence => {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        }).join('. ');
    }
    function toAlternatingCase(text) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                result += text[i].toUpperCase();
            } else {
                result += text[i].toLowerCase();
            }
        }
        return result;
    }
    const handletitleClick = (e)=>{
        let upercase = toTitleCase(text);
        setText(upercase);
        (text.trim().split('').filter(Boolean).length > 0 ) ? props.showAlert('Title case set successfully','success') : props.showAlert('Put the words in the text area','danger');

        //props.showAlert('Title case set successfully','success');
    }
    function toTitleCase(text) {
        const smallWords = /^(a|an|and|as|at|but|by|for|from|if|in|nor|of|on|or|over|so|the|to|up|yet)$/i;
        return text.replace(/\b\w+/g, function(word, index) {
            if (index === 0 || !smallWords.test(word)) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            } else {
                return word.toLowerCase();
            }
        });
    }
    const handlecopyClick = (e)=>{
        navigator.clipboard.writeText(text);
        (text.trim().split('').filter(Boolean).length > 0 ) ? props.showAlert('text copy successfully','success') : props.showAlert('Put the words in the text area','danger');

        //props.showAlert('text copy successfully','success');
        //setText(upercase);
    }
    const handleclrClick = (e)=>{
        const upercase = '';
        setText(upercase);
        (text.trim().split('').filter(Boolean).length > 0 ) ? props.showAlert('clear words successfully','success') : props.showAlert('Put the words in the text area','danger');

        props.showAlert('clear words successfully','success');
    }
    const handleOnChange = (e)=>{
        setText(e.target.value);
    }
    return(
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label">Example textarea</label>
                    <textarea className="form-control" style={{backgroundColor: 'white' , color: 'black'}} id="mybox" onChange={handleOnChange} value={text}
                              rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handlesenClick}>Sentence Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handlecapClick}>Capitalize Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handlealtClick}>Alternative Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handletitleClick}>Title Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleinvClick}>Inverse Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handledownClick}>Download</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handlecopyClick}>Copy</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleclrClick}>clear</button>

            </div>
            <div className="container  my-3">
                <h1>Text summery is:</h1>
                <p>Total words are: {text.split(/\s+/).filter(Boolean).length} and Total character are: {text.trim().length}</p>
                <p>{ (0.25 * text.trim().split(/\s+/).filter(Boolean).length) > 60 ? ((0.25 * text.trim().split(/\s+/).filter(Boolean).length) / 60 + " Total minute") : ((0.25 * text.split(/\s+/).filter(Boolean).length) +" Total sec") } </p>
            </div>
            <div className="container my-3">
                <h2>Preview</h2>
                <p>{ (text.length) > 0  ? text : "No text found Please add Text.." }</p>
            </div>

        </>
    );
}
