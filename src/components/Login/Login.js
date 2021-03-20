import firebase from 'firebase';
import React, { useContext, useState } from 'react';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import { register } from '../../serviceWorker';
import './Login.css'

// const Login = () => {
//     const { register, errors } = useForm();
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     const history = useHistory();
//     const location = useLocation();
//     const { from } = location.state || { from: { pathname: "/" } };


//     const [newUser, setNewUser] = useState(false);

//     const [user, setUser] = useState ({
//         isSignedIn: false,
//         name: '',
//         email: '',
//         photo: '',
//         password: ''

//     })

//     if (firebase.apps.length === 0) {
//         firebase.initializeApp(firebaseConfig);
//     }
//     // const googleProvider = new firebase.auth.GoogleAuthProvider();
//     const fbprovider = new firebase.auth.FacebookAuthProvider();

//     const handleGoogleSignIn = () => {
//         const provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth()
//             .signInWithPopup(provider)
//             .then((result) => {

//                 const { displayName, email } = result.user;
//                 const signedInUser = { name: displayName, email }
//                 setLoggedInUser(signedInUser);
//                 history.replace(from);
//             }).catch((error) => {
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 var email = error.email;
//                 var credential = error.credential;
//                 // ...
//             });
//     }


//     // const handleSignIn = () => {
//     //     firebase.auth().signInWithPopup(googleProvider)
//     //         .then(res => {
//     //             const { displayName, photoURL, email } = res.user;
//     //             const signedInUser = {
//     //                 isSignedIn: true,
//     //                 name: displayName,
//     //                 email: email,
//     //                 photo: photoURL
//     //             }
//     //             setUser(signedInUser)
//     //             console.log(email, displayName, photoURL);
//     //         })
//     //         .catch(err => {
//     //             console.log(err);
//     //             console.log(err.message);
//     //         })
//     // }

//     const updateUserName = name => {
//         const user = firebase.auth().currentUser;

//         user.updateProfile({
//             displayName: name
//         }).then(function () {
//             console.log('user name updated successfully')
//         }).catch(function (error) {
//             console.log(error);
//         });
//     }


//     const handleSignOut = () => {
//         firebase.auth().signOut()
//             .then(res => {
//                 const signedOutUser = {
//                     isSignedIn: false,
//                     //   name: '',
//                     //   email: '',
//                     //   photo: '',
//                     //   error: '',
//                     success: false
//                 }
//                 setUser(signedOutUser);
//             })
//             .catch(err => {

//             })
//     }


//     const handleBlur = (event) => {
//         let isFieldValid = true;

//         if (event.target.name === 'email') {
//             isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);

//         }
//         if (event.target.name === 'password') {
//             const isPasswordValue = event.target.value.length > 5;
//             const passwordHasNumber = /\d{1}/.test(event.target.value)
//             isFieldValid = isPasswordValue && passwordHasNumber;
//         }

//         if (isFieldValid) {
//             const newUserInfo = { ...user };
//             newUserInfo[event.target.name] = event.target.value;
//             setUser(newUserInfo);
//         }
//     }



//     const handleSubmit = (e) => {
//         console.log(user.email, user.password);
//         if (newUser && user.email && user.password) {
//             firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//                 .then(res => {
//                     const newUserInfo = { ...user };
//                     newUserInfo.error = '';
//                     newUserInfo.success = true;
//                     setUser(newUserInfo);
//                     updateUserName(user.name);
//                 })
//                 .catch(error => {
//                     const newUserInfo = { ...user };
//                     newUserInfo.error = error.message;
//                     newUserInfo.success = false;
//                     setUser(newUserInfo);
//                     // console.log(errorCode, errorMessage);
//                 })

//         }

//         if (!newUser && user.email && user.password) {
//             firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//                 .then(res => {
//                     const newUserInfo = { ...user };
//                     newUserInfo.error = '';
//                     newUserInfo.success = true;
//                     setUser(newUserInfo);
//                     console.log('sign-in user info', res.user);
//                 })
//                 .catch((error) => {
//                     const newUserInfo = { ...user };
//                     newUserInfo.error = error.message;
//                     newUserInfo.success = false;
//                     setUser(newUserInfo);
//                 });
//         }
//         e.preventDefault();
//     }


//     const handleFbSignIn = () => {
//         firebase
//             .auth()
//             .signInWithPopup(fbprovider)
//             .then((result) => {

//                 var credential = result.credential;

//                 // The signed-in user info.
//                 var user = result.user;

//                 // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//                 var accessToken = credential.accessToken;

//                 // ...
//                 console.log(user, accessToken);
//             })
//             .catch((error) => {
//                 // Handle Errors here.
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 // The email of the user's account used.
//                 var email = error.email;
//                 // The firebase.auth.AuthCredential type that was used.
//                 var credential = error.credential;

//                 // ...
//             });
//     }


//     return (


//         <div className="form-body">
//             <h1>User SignUp</h1>
//             <form >
//                 <input name="firstName" ref={register({ required: true, maxLength: 20 })} placeholder="Your First Name" />
//                 {errors.firstName && "First name is required"}
//                 <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} placeholder="Your Last Name" />
//                 {errors.firstName && "Lasr name is required"}
//                 <input name="age" type="number" ref={register({ min: 18, max: 99 })} placeholder="Your Age" />
//                 {newUser && <p> <span onClick={() => setNewUser(!newUser)}>Sign Up</span></p> }

//                 <input type="submit" />
//                 <hr />
//                 <button type="submit" onClick={handleGoogleSignIn}>Google Sign in</button>

//             </form>
//         </div>
//     );
// };

// export default Login;


function Login() {
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password: ''

    })
    if (firebase.apps.length === 0) {
                firebase.initializeApp(firebaseConfig);
            }
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser)
                console.log(email, displayName, photoURL);
                
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }


    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: '',
                    success: false
                }
                setUser(signedOutUser);
            })
            .catch(err => {

            })
    }

    const handleBlur = (event) => {
        let isFieldValid = true;

        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);

        }
        if (event.target.name === 'password') {
            const isPasswordValue = event.target.value.length > 5;
            const passwordHasNumber = /\d{1}/.test(event.target.value)
            isFieldValid = isPasswordValue && passwordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    // console.log(errorCode, errorMessage);
                })

        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    const setlogger = {
                        name: res.user.displayName,
                        email: res.user.email
                    }
                    setLoggedInUser(setlogger);
                    history.replace(from);
                    console.log(loggedInUser.email);
                    console.log('sign-in user info', res.user);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log('user name updated successfully')
        }).catch(function (error) {
            console.log(error);
        });
    }

    const provider = new firebase.auth.FacebookAuthProvider();

    const handleFbSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {

                var credential = result.credential;

                // The signed-in user info.
                var user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var accessToken = credential.accessToken;

                // ...
                console.log(user, accessToken);
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;

                // ...
            });
    }

    return (
        <div className="form-body">

            <br />
            
            

            
        <div className="login-query">
            <button htmlFor="newUser" type="submit">Already have an accout? 
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            </button>
        </div>
            
                
            <h1> {newUser ? 'Sign up' : 'Sign In'}</h1>
        
            <form action="" onSubmit={handleSubmit}>
                
                {
                    newUser && <input type="text" onBlur={handleBlur} name="name" placeholder="Your Name.." required />
                }

                <br />
                <input type="text" onBlur={handleBlur} name="email" placeholder="Your email" required />
                <br />
                <input type="password" onBlur={handleBlur} name="password" id="" placeholder="password" required />
                <br />
                <input type="submit" value={newUser ? 'Register' : 'Log In'} />

                <button type="submit" onClick={handleGoogleSignIn}>Continue with google</button>
                <button type="submit" onClick={handleFbSignIn}>Continue with facebook</button>

            </form>
            
        </div>
    );
}

export default Login;
