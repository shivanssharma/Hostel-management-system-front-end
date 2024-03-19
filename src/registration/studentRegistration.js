// import React, { useState } from "react";
// import { TextField, Autocomplete, Button, Snackbar } from "@mui/material";
// import { Link, Outlet } from "react-router-dom";
// import StudentHorizontalNav2 from "../Navbars/Navbar_Health/StudenthNav2";
// import './register.css';

// function StudentRegistration() {
//     const [formData, setFormData] = useState({
//         regis: '',
//         fname: '',
//         lname: '',
//         selectedCourse: '',
//         date: '',
//         father: '',
//         mother: '',
//         birth: '',
//         email: '',
//         address: '',
//         phone: ''
//     });
//     const [snackbarOpen, setSnackbarOpen] = useState(false);
//     const [snackbarMessage, setSnackbarMessage] = useState('');

//     const textFieldStyle = {
//         width: '99%',
//         marginBottom: '15px',
//     };

//     const courses = [
//         { name: '1 BSc' },
//         { name: '1 BBA' },
//         { name: '2 BSc' },
//         { name: '2 BBA' },
//         { name: '3 BBA' },
//         { name: '3 BSc' },
//         { name: '1 MSc' },
//         { name: '2 MSc' },
//     ];

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async () => {
//         try {
//             const csrftoken = getCookie('csrftoken'); // Retrieve CSRF token
    
//             if (!formData.selectedCourse) {
//                 setSnackbarMessage("Please select a course.");
//                 setSnackbarOpen(true);
//                 return;
//             }
    
//             const response = await fetch('http://127.0.0.1:8000/api/save_student_data/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'X-CSRFToken': csrftoken, // Include CSRF token in headers
//                 },
//                 body: JSON.stringify(formData)
//             });
    
//             if (response.ok) {
//                 setSnackbarMessage('Form submitted successfully.');
//                 setSnackbarOpen(true);
//             } else {
//                 setSnackbarMessage('Failed to submit form.');
//                 setSnackbarOpen(true);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };
    
    
//     const getCookie = (name) => {
//         const value = `; ${document.cookie}`;
//         const parts = value.split(`; ${name}=`);
//         if (parts.length === 2) return parts.pop().split(';').shift();
//     };

//     return (
//         <header>
//             <StudentHorizontalNav2 />
//             <div className="styletwo">
//                 <h1>Register Yourself</h1>
//                 <h3>Registration number </h3>
//                 <TextField name="regis" value={formData.regis} onChange={handleChange} label="Registration number" variant="outlined" required style={textFieldStyle}/>
//                 <br />
//                 <div className="TwoTextFieldsTogether">
//                     <h3>First name </h3>
//                     <TextField name="fname" value={formData.fname} onChange={handleChange} label="First name" variant="outlined" required />
//                     <h3>Last name </h3>
//                     <TextField name="lname" value={formData.lname} onChange={handleChange} label="Last name" variant="outlined" required />
//                 </div>
//                 <h3>Course and year</h3>
//                 <Autocomplete
//                     disablePortal
//                     id="combo-box-demo"
//                     options={courses}
//                     style={textFieldStyle}
//                     getOptionLabel={(option) => option.name}
//                     isOptionEqualToValue={(option, value) => option.name === value.name}
//                     onChange={(event, value) => setFormData(prevState => ({ ...prevState, selectedCourse: value ? value.name : '' }))}
//                     renderInput={(params) => <TextField {...params} label="Course" />}
//                     required
//                 />

//                 <br />
//                 <h3>Date-of-Joining </h3>
//                 <TextField type="date" name="date" value={formData.date} onChange={handleChange} variant="outlined" required style={textFieldStyle}/>
//                 <br />
//                 <hr />
//                 <h3>Parents Details:</h3><br />
//                 <div className='TwoTextFieldsTogether'>
//                     <h3>Father name</h3>
//                     <TextField name="father" value={formData.father} onChange={handleChange} label="Father name" variant="outlined" required />
//                     <h3>Mother name </h3>
//                     <TextField name="mother" value={formData.mother} onChange={handleChange} label="Mother name" variant="outlined" required />
//                 </div>
//                 <hr />
//                 <h3>Personal Details:</h3><br />
//                 <h3>Date-of-birth </h3>
//                 <TextField style={textFieldStyle} type="date" name="birth" value={formData.birth} onChange={handleChange} variant="outlined" required />
//                 <br />
//                 <div className='TwoTextFieldsTogether'>
//                     <h3>Email id</h3>
//                     <TextField name="email" value={formData.email} onChange={handleChange} label="Email-id" variant="outlined" required />
//                     <h3>Phone Number</h3>
//                 <TextField name="phone" value={formData.phone} onChange={handleChange} label="Phone Number" variant="outlined" required />
                
                    
//                 </div>
//                <br/>
//                 <h3>Address</h3>
//                     <TextField style={textFieldStyle} name="address" value={formData.address} onChange={handleChange} label="Address" variant="outlined" required />
                
//                 <hr />
//                 <br />
//                 <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
//                 <Link to='/electronics'><Button variant="outlined" >Next</Button></Link>
//             </div>
//             <Snackbar
//                 open={snackbarOpen}
//                 autoHideDuration={6000}
//                 onClose={() => setSnackbarOpen(false)}
//                 message={snackbarMessage}
//             />
//             <Outlet/>
//         </header>
//     );
// }

// export default StudentRegistration;

//trial code 2
// import React, { useState } from "react";
// import { TextField, Autocomplete, Button, Snackbar } from "@mui/material";
// import { Link, Outlet } from "react-router-dom";
// import StudentHorizontalNav2 from "../Navbars/Navbar_Health/StudenthNav2";
// import './register.css';

// function StudentRegistration() {
//     const [formData, setFormData] = useState({
//         regis: '',
//         fname: '',
//         lname: '',
//         selectedCourse: '',
//         date: '',
//         father: '',
//         mother: '',
//         birth: '',
//         email: '',
//         address: '',
//         phone: ''
//     });
//     const [snackbarOpen, setSnackbarOpen] = useState(false);
//     const [snackbarMessage, setSnackbarMessage] = useState('');
//     const [submitted, setSubmitted] = useState(false); // New state to track form submission

//     const textFieldStyle = {
//         width: '99%',
//         marginBottom: '15px',
//     };

//     const courses = [
//         { name: '1 BSc' },
//         { name: '1 BBA' },
//         { name: '2 BSc' },
//         { name: '2 BBA' },
//         { name: '3 BBA' },
//         { name: '3 BSc' },
//         { name: '1 MSc' },
//         { name: '2 MSc' },
//     ];

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async () => {
//         try {
//             const csrftoken = getCookie('csrftoken'); // Retrieve CSRF token
    
//             if (!formData.selectedCourse) {
//                 setSnackbarMessage("Please select a course.");
//                 setSnackbarOpen(true);
//                 return;
//             }
    
//             const response = await fetch('http://127.0.0.1:8000/api/save_student_data/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'X-CSRFToken': csrftoken, // Include CSRF token in headers
//                 },
//                 body: JSON.stringify(formData)
//             });
    
//             if (response.ok) {
//                 setSnackbarMessage('Form submitted successfully.');
//                 setSnackbarOpen(true);
//                 setSubmitted(true); // Set submitted to true after successful submission
//             } else {
//                 setSnackbarMessage('Failed to submit form.');
//                 setSnackbarOpen(true);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };
    
    
//     const getCookie = (name) => {
//         const value = `; ${document.cookie}`;
//         const parts = value.split(`; ${name}=`);
//         if (parts.length === 2) return parts.pop().split(';').shift();
//     };

//     return (
//         <header>
//             <StudentHorizontalNav2 />
//             <div className="styletwo">
//                 <h1>Register Yourself</h1>
//                 {!submitted && (
//                     <>
//                         <h3>Registration number </h3>
//                         <TextField name="regis" value={formData.regis} onChange={handleChange} label="Registration number" variant="outlined" required style={textFieldStyle}/>
//                         <br />
//                         <div className="TwoTextFieldsTogether">
//                             <h3>First name </h3>
//                             <TextField name="fname" value={formData.fname} onChange={handleChange} label="First name" variant="outlined" required />
//                             <h3>Last name </h3>
//                             <TextField name="lname" value={formData.lname} onChange={handleChange} label="Last name" variant="outlined" required />
//                         </div>
//                         <h3>Course and year</h3>
//                         <Autocomplete
//                             disablePortal
//                             id="combo-box-demo"
//                             options={courses}
//                             style={textFieldStyle}
//                             getOptionLabel={(option) => option.name}
//                             isOptionEqualToValue={(option, value) => option.name === value.name}
//                             onChange={(event, value) => setFormData(prevState => ({ ...prevState, selectedCourse: value ? value.name : '' }))}
//                             renderInput={(params) => <TextField {...params} label="Course" />}
//                             required
//                         />

//                         <br />
//                         <h3>Date-of-Joining </h3>
//                         <TextField type="date" name="date" value={formData.date} onChange={handleChange} variant="outlined" required style={textFieldStyle}/>
//                         <br />
//                         <hr />
//                         <h3>Parents Details:</h3><br />
//                         <div className='TwoTextFieldsTogether'>
//                             <h3>Father name</h3>
//                             <TextField name="father" value={formData.father} onChange={handleChange} label="Father name" variant="outlined" required />
//                             <h3>Mother name </h3>
//                             <TextField name="mother" value={formData.mother} onChange={handleChange} label="Mother name" variant="outlined" required />
//                         </div>
//                         <hr />
//                         <h3>Personal Details:</h3><br />
//                         <h3>Date-of-birth </h3>
//                         <TextField style={textFieldStyle} type="date" name="birth" value={formData.birth} onChange={handleChange} variant="outlined" required />
//                         <br />
//                         <div className='TwoTextFieldsTogether'>
//                             <h3>Email id</h3>
//                             <TextField name="email" value={formData.email} onChange={handleChange} label="Email-id" variant="outlined" required />
//                             <h3>Phone Number</h3>
//                             <TextField name="phone" value={formData.phone} onChange={handleChange} label="Phone Number" variant="outlined" required />
//                         </div>
//                         <br/>
//                         <h3>Address</h3>
//                         <TextField style={textFieldStyle} name="address" value={formData.address} onChange={handleChange} label="Address" variant="outlined" required />
//                         <hr />
//                         <br />
//                         <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
//                     </>
//                 )}
//                 {submitted && (
//                     <Link to='/electronics'><Button variant="outlined" >Next</Button></Link>
//                 )}
//             </div>
//             <Snackbar
//                 open={snackbarOpen}
//                 autoHideDuration={6000}
//                 onClose={() => setSnackbarOpen(false)}
//                 message={snackbarMessage}
//             />
//             <Outlet/>
//         </header>
//     );
// }

// export default StudentRegistration;
// import React, { useState } from "react";
// import { TextField, Autocomplete, Button, Snackbar } from "@mui/material";
// import StudentHorizontalNav2 from "../Navbars/Navbar_Health/StudenthNav2";
// import './register.css';
//  import Electronic from '../electronics/electronics.js'// Import the component you want to redirect to

// function StudentRegistration() {
//     const [formData, setFormData] = useState({
//         regis: '',
//         fname: '',
//         lname: '',
//         selectedCourse: '',
//         date: '',
//         father: '',
//         mother: '',
//         birth: '',
//         email: '',
//         address: '',
//         phone: ''
//     });
//     const [snackbarOpen, setSnackbarOpen] = useState(false);
//     const [snackbarMessage, setSnackbarMessage] = useState('');
//     const [submitted, setSubmitted] = useState(false); // State to track form submission

//     const textFieldStyle = {
//         width: '99%',
//         marginBottom: '15px',
//     };

//     const courses = [
//         { name: '1 BSc' },
//         { name: '1 BBA' },
//         { name: '2 BSc' },
//         { name: '2 BBA' },
//         { name: '3 BBA' },
//         { name: '3 BSc' },
//         { name: '1 MSc' },
//         { name: '2 MSc' },
//     ];

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async () => {
//         try {
//             const csrftoken = getCookie('csrftoken'); // Retrieve CSRF token
    
//             if (!formData.selectedCourse) {
//                 setSnackbarMessage("Please select a course.");
//                 setSnackbarOpen(true);
//                 return;
//             }
    
//             const response = await fetch('http://127.0.0.1:8000/api/save_student_data/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'X-CSRFToken': csrftoken, // Include CSRF token in headers
//                 },
//                 body: JSON.stringify(formData)
//             });
    
//             if (response.ok) {
//                 setSnackbarMessage('Form submitted successfully.');
//                 setSnackbarOpen(true);
//                 setSubmitted(true); // Set submitted to true after successful submission
//             } else {
//                 setSnackbarMessage('Failed to submit form.');
//                 setSnackbarOpen(true);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };
    
    
//     const getCookie = (name) => {
//         const value = `; ${document.cookie}`;
//         const parts = value.split(`; ${name}=`);
//         if (parts.length === 2) return parts.pop().split(';').shift();
//     };

//     return (
//         <header>
//             <StudentHorizontalNav2 />
//             <div className="styletwo">
//                 {submitted ? (
//                     <Electronic />
//                 ) : (
//                     <>
//                         <h1>Register Yourself</h1>
//                         <h3>Registration number </h3>
//                         <TextField name="regis" value={formData.regis} onChange={handleChange} label="Registration number" variant="outlined" required style={textFieldStyle}/>
//                         <br />
//                         <div className="TwoTextFieldsTogether">
//                             <h3>First name </h3>
//                             <TextField name="fname" value={formData.fname} onChange={handleChange} label="First name" variant="outlined" required />
//                             <h3>Last name </h3>
//                             <TextField name="lname" value={formData.lname} onChange={handleChange} label="Last name" variant="outlined" required />
//                         </div>
//                         <h3>Course and year</h3>
//                         <Autocomplete
//                             disablePortal
//                             id="combo-box-demo"
//                             options={courses}
//                             style={textFieldStyle}
//                             getOptionLabel={(option) => option.name}
//                             isOptionEqualToValue={(option, value) => option.name === value.name}
//                             onChange={(event, value) => setFormData(prevState => ({ ...prevState, selectedCourse: value ? value.name : '' }))}
//                             renderInput={(params) => <TextField {...params} label="Course" />}
//                             required
//                         />

//                         <br />
//                         <h3>Date-of-Joining </h3>
//                         <TextField type="date" name="date" value={formData.date} onChange={handleChange} variant="outlined" required style={textFieldStyle}/>
//                         <br />
//                         <hr />
//                         <h3>Parents Details:</h3><br />
//                         <div className='TwoTextFieldsTogether'>
//                             <h3>Father name</h3>
//                             <TextField name="father" value={formData.father} onChange={handleChange} label="Father name" variant="outlined" required />
//                             <h3>Mother name </h3>
//                             <TextField name="mother" value={formData.mother} onChange={handleChange} label="Mother name" variant="outlined" required />
//                         </div>
//                         <hr />
//                         <h3>Personal Details:</h3><br />
//                         <h3>Date-of-birth </h3>
//                         <TextField style={textFieldStyle} type="date" name="birth" value={formData.birth} onChange={handleChange} variant="outlined" required />
//                         <br />
//                         <div className='TwoTextFieldsTogether'>
//                             <h3>Email id</h3>
//                             <TextField name="email" value={formData.email} onChange={handleChange} label="Email-id" variant="outlined" required />
//                             <h3>Phone Number</h3>
//                             <TextField name="phone" value={formData.phone} onChange={handleChange} label="Phone Number" variant="outlined" required />
//                         </div>
//                         <br/>
//                         <h3>Address</h3>
//                         <TextField style={textFieldStyle} name="address" value={formData.address} onChange={handleChange} label="Address" variant="outlined" required />
//                         <hr />
//                         <br />
//                         <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
//                     </>
//                 )}
//             </div>
//             <Snackbar
//                 open={snackbarOpen}
//                 autoHideDuration={6000}
//                 onClose={() => setSnackbarOpen(false)}
//                 message={snackbarMessage}
//             />
//         </header>
//     );
// }

// export default StudentRegistration;
//trial code 2
import React, { useState, useEffect } from "react";
import { TextField, Autocomplete, Button, Snackbar, Typography } from "@mui/material";
import StudentHorizontalNav2 from "../navbars/HorizontalNav/StudenthNav2.jsx";
import './register.css';
import Electronic from '../electronics/electronics.js';

function StudentRegistration() {
    const [formData, setFormData] = useState({
        regis: '',
        fname: '',
        lname: '',
        selectedCourse: '',
        date: '',
        father: '',
        mother: '',
        birth: '',
        email: '',
        address: '',
        phone: ''
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const usernameFromLocalStorage = localStorage.getItem('username');
        if (usernameFromLocalStorage) {
            setUsername(usernameFromLocalStorage);
        }
    }, []);

    const textFieldStyle = {
        width: '99%',
        marginBottom: '15px',
    };

    const courses = [
        { name: '1 BSc' },
        { name: '1 BBA' },
        { name: '2 BSc' },
        { name: '2 BBA' },
        { name: '3 BBA' },
        { name: '3 BSc' },
        { name: '1 MSc' },
        { name: '2 MSc' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const csrftoken = getCookie('csrftoken');
    
            if (!formData.selectedCourse) {
                setSnackbarMessage("Please select a course.");
                setSnackbarOpen(true);
                return;
            }
    
            const dataToSend = {
                ...formData,
                username: username  // Include the username in the data being sent
            };
    
            const response = await fetch('http://127.0.0.1:8000/api/save_student_data/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify(dataToSend)
            });
    
            if (response.ok) {
                setSnackbarMessage('Form submitted successfully.');
                setSnackbarOpen(true);
                setSubmitted(true);
            } else {
                setSnackbarMessage('Failed to submit form.');
                setSnackbarOpen(true);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    useEffect(() => {
        localStorage.setItem('username', username);
    }, [username]);

    return (
        <header>
            <StudentHorizontalNav2 />
            <div className="styletwo">
                {submitted ? (
                    <Electronic />
                ) : (
                    <>                        
                        <Typography variant="h2" sx={{pb: '5%'}}>
                            <text className="BrasikaFont floatRightIn grayFont">
                                Hello, {username}
                            </text>
                        </Typography>
                        <h1 className="BrasikaFont floatRightIn grayFont">Register Yourself</h1>
                        <h3 className="BrasikaFont floatRightIn grayFont">Registration number </h3>
                        <TextField name="regis" value={formData.regis} onChange={handleChange} label="Registration number" variant="outlined" required style={textFieldStyle}/>
                        <br />
                        <div className="SR-dualInput">
                            <h3 className="BrasikaFont floatRightIn grayFont">First name </h3>
                            <TextField className="floatRightIn" name="fname" value={formData.fname} onChange={handleChange} label="First name" variant="outlined" required />
                            <h3 className="BrasikaFont floatRightIn grayFont">Last name </h3>
                            <TextField className="floatRightIn" name="lname" value={formData.lname} onChange={handleChange} label="Last name" variant="outlined" required />
                        </div>
                        <h3 className="BrasikaFont floatRightIn grayFont">Course and year</h3>
                        <Autocomplete
                             className="floatRightIn"
                            disablePortal
                            id="combo-box-demo"
                            options={courses}
                            style={textFieldStyle}
                            getOptionLabel={(option) => option.name}
                            isOptionEqualToValue={(option, value) => option.name === value.name}
                            onChange={(event, value) => setFormData(prevState => ({ ...prevState, selectedCourse: value ? value.name : '' }))}
                            renderInput={(params) => <TextField {...params} label="Course" />}
                            required
                        />

                        <h3 className="BrasikaFont floatRightIn grayFont">Date-of-Joining </h3>
                        <TextField className="floatRightIn" type="date" name="date" value={formData.date} onChange={handleChange} variant="outlined" required style={textFieldStyle}/>
                        <br />
                        <hr />
                        <h3 className="BrasikaFont floatRightIn grayFont">Parents Details:</h3><br />
                        <div className='SR-dualInput'>
                            <h3 className="BrasikaFont floatRightIn grayFont">Father name</h3>
                            <TextField className="floatRightIn" name="father" value={formData.father} onChange={handleChange} label="Father name" variant="outlined" required />
                            <h3 className="BrasikaFont floatRightIn grayFont">Mother name </h3>
                            <TextField className="floatRightIn" name="mother" value={formData.mother} onChange={handleChange} label="Mother name" variant="outlined" required />
                        </div>
                        <hr />
                        <h3 className="BrasikaFont floatRightIn grayFont">Personal Details:</h3><br />
                        <h3 className="BrasikaFont floatRightIn grayFont">Date-of-birth </h3>
                        <TextField className="floatRightIn" style={textFieldStyle} type="date" name="birth" value={formData.birth} onChange={handleChange} variant="outlined" required />

                        <div className='SR-dualInput'>
                            <h3 className="BrasikaFont floatRightIn grayFont">Email id</h3>
                            <TextField className="floatRightIn" name="email" value={formData.email} onChange={handleChange} label="Email-id" variant="outlined" required />
                            <h3 className="BrasikaFont floatRightIn grayFont">Phone Number</h3>
                            <TextField className="floatRightIn" name="phone" value={formData.phone} onChange={handleChange} label="Phone Number" variant="outlined" required />
                        </div>
                        
                        <h3 className="BrasikaFont floatRightIn grayFont">Address</h3>
                        <TextField className="floatRightIn" style={textFieldStyle} name="address" value={formData.address} onChange={handleChange} label="Address" variant="outlined" required />
                        
                        <Button className="floatRightIn" variant="outlined" sx={{p: '2%'}} onClick={handleSubmit}>Submit</Button>
                    </>
                )}
            </div>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)}
                message={snackbarMessage}
            />
        </header>
    );
}

export default StudentRegistration;