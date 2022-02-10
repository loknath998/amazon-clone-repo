import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { auth } from "../firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useStateValue } from "../StateProvider";
import {
    doc,
    addDoc,
    getDoc,
    setDoc,
    getFirestore,
    collection,
} from "firebase/firestore";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [{ user, cart, address, save_for_later }, dispatch] = useStateValue();

    const navigate = useNavigate(); // earlier it was history

    const signIn = (e) => {
        e.preventDefault();

        if (email?.trim() == "" || password?.trim() == "") {
            alert("Please enter email and password to Sign In");
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // console.log(user);
                    navigate("/");
                })
                .catch((e) => {
                    console.log(e);
                    alert(e.message);
                });
        }
    };

    const register = (e) => {
        e.preventDefault();

        if (email?.trim() == "" || password?.trim() == "") {
            alert("Please enter email and password to create account");
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((auth) => {
                    // .then(async (auth) => {
                    console.log("user created");
                    // console.log(auth);

                    if (auth) {
                        ///////////////////////////////////////to add the firsts data to database
                        console.log("auth 1");
                        // if (user)
                        // {
                        //     const db = getFirestore();

                        //     console.log("auth 2");
                        //     const collectionRefrence = collection(db, "users");

                        //     await setDoc(doc(collectionRefrence, email), {
                        //         // await addDoc(doc(collectionRefrence, user?.email), {
                        //         cart: cart,
                        //         orders: [],
                        //         save_for_later: save_for_later,
                        //         address: address,
                        //     });

                        //     console.log("auth 3");
                        //     // console.log("cart changed", cart?.length);
                        //     // console.log("save_for_later changed", save_for_later);
                        // }

                        ///////////////////////////////////////to add the firsts data to database

                        navigate("/");
                    }
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG6.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <form>
                    <h1>Sign-In</h1>

                    <h5>Email</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login__containerFields"
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login__containerFields"
                    />

                    <button
                        className="login__signinButton login__containerButton"
                        type="submit"
                        onClick={signIn}
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you accept to the AMAZON FAKE CLONE conditions
                    of use & sale.
                </p>

                <p className="login__needHelp">
                    <PlayArrowIcon
                        style={{ fontSize: "small", color: "gray" }}
                    />{" "}
                    Need help?
                </p>
            </div>
            <div className="login__newUser">
                <p>New to Amazon ?</p>
                <button
                    className="login__registerButton login__containerButton"
                    onClick={register}
                >
                    create your Amazon account
                </button>
            </div>
        </div>
    );
}

export default Login;
