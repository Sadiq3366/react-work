import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 5000);
    };

    const modeChange = (cls) => {
        document.body.classList.remove('bg-danger');
        document.body.classList.remove('bg-success');
        document.body.classList.remove('bg-light');
        document.body.classList.remove('bg-dark');
        document.body.classList.remove('bg-info');
        document.body.classList.remove('bg-warning');
       document.body.classList.add('bg-'+cls);
        if (cls === 'dark') {
            setMode('dark');
            // document.body.style.backgroundColor = cls;
            document.body.style.color = "white";
            showAlert('Dark mode has been enabled', 'success');
            //document.title = 'TextUtils - Dark mode';
        } else if(cls === 'light') {
            setMode(cls);
            document.body.style.color = "black";
            showAlert(cls+' mode has been enabled', 'success');
        } else {
            setMode(cls);
            showAlert(cls+' mode has been enabled', 'success');
        }
        // else {
        //     setMode('light');
        //     document.body.style.backgroundColor = cls;
        //     document.body.style.color = "black";
        //     showAlert('Light mode has been enabled', 'success');
        //     //document.title = 'TextUtils - Light mode';
        // }
    };

    return (
        <>
            <Router>
                <Navbar Title="TextUtils" mode={mode} changeMode={modeChange} AboutText="About" HomeText="Home" />
                <div className="container my-3">
                    <Alert alert={alert} />
                    <Routes>
                        <Route exact path="/about" element={<About myStyle={mode} />} />
                        <Route exact path="/" element={<TextForm mode={mode} heading="Enter the text to analyze" showAlert={showAlert} />} />
                    </Routes>
                </div>
            </Router>
            {/*<Navbar Title="TextUtils" mode={mode} changeMode={modeChange} AboutText="About" HomeText="Home" />*/}
            {/*<div className="container my-3">*/}
            {/*    <Alert alert={alert} />*/}
            {/*<TextForm mode={mode} heading="Enter the text to analyze" showAlert={showAlert} />*/}
            {/*</div>*/}
        </>
    );
}

export default App;
