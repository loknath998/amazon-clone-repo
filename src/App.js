import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import { useSwitch } from "@mui/material";
import {
    doc,
    addDoc,
    getDoc,
    setDoc,
    getFirestore,
    collection,
} from "firebase/firestore";
import Orders from "./components/Orders";

function App() {
    const [{ user, cart, save_for_later, orders, address }, dispatch] =
        useStateValue();
    useEffect(() => {
        onAuthStateChanged(auth, async (currentUser) => {
            // console.log(currentUser);
            if (currentUser) {
                console.log(currentUser.email + " : is logged in");
                dispatch({ type: "SET_USER", user: currentUser });
                // =======================================

                const db = getFirestore();

                const docRef = doc(db, "users", currentUser?.email);
                const docSnap = await getDoc(docRef);
                // console.log("current user", currentUser);
                if (docSnap.exists()) {
                    // console.log("Document data:", docSnap.data());
                    const OnlineCart = docSnap.data().cart;
                    // console.log("online cart", OnlineCart);
                    OnlineCart.map((item, index) => {
                        dispatch({ type: "ADD_TO_CART", item: item });
                    });

                    const OnlineSaveForLater = docSnap.data().save_for_later;
                    OnlineSaveForLater.map((item, index) => {
                        dispatch({ type: "SAVE_FOR_LATER", item: item });
                    });

                    const OnlineAddress = docSnap.data().address;

                    dispatch({ type: "ADD_ADDRESS", address: OnlineAddress });

                    const OnlineOrders = docSnap.data().orders;
                    // console.log("----sss----", orders, OnlineOrders);
                    dispatch({
                        type: "COPY_ONLINE_ORDERS",
                        orders: OnlineOrders,
                    });

                    console.log("data loaded from firebase");
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }

                // =======================================
            } else {
                dispatch({ type: "SET_USER", user: null });
            }
        });
    }, []);

    useEffect(async () => {
        if (user) {
            const db = getFirestore();

            const collectionRefrence = collection(db, "users");

            await setDoc(doc(collectionRefrence, user?.email), {
                cart: cart,
                orders: orders,
                save_for_later: save_for_later,
                address: address,
            });

            // console.log("cart changed", cart?.length);
            // console.log("save_for_later changed", save_for_later);
        }
    }, [cart, save_for_later, address, orders]);

    return (
        <>
            <div className="app">
                <Router>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <Header />
                                    <Home />
                                </>
                            }
                        />
                        <Route
                            path="/checkout"
                            element={
                                <>
                                    <Header />
                                    <Checkout />
                                </>
                            }
                        />
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/payment"
                            element={
                                <>
                                    <Header />
                                    <Payment />
                                </>
                            }
                        />
                        <Route
                            path="/orders"
                            element={
                                <>
                                    <Header />
                                    <Orders />
                                </>
                            }
                        />
                        <Route path="*" element={<h2>helooo moto</h2>} />
                        {/* <Route path="*" element={<h1>Page not found</h1>} /> */}
                    </Routes>
                </Router>
            </div>
            <div className="loki__info">
                hello {user ? user?.email : "Guest"} , this amazon clone is made
                by loki 🚀 reach out to me here on{" "}
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/loknath-singh-a3529b194/"
                >
                    LinkedIn
                </a>{" "}
            </div>
        </>
    );
}
export default App;
