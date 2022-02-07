import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    // src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg"
                    src="https://m.media-amazon.com/images/I/61pxhbXv8tL._SX3000_.jpg"
                    alt="back"
                />
                <div className="home__row">
                    <Product
                        id={100}
                        title="Kore PVC 10-30 Kg Home Gym Set with One 3 Ft Curl and One Pair Dumbbell Rods with Gym Accessories"
                        price={2328.0}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/I/81geHXZ6weL._AC_UL302_SR302,200_.jpg"
                    />
                    <Product
                        id={105}
                        title="OnePlus Smart Band: 13 Exercise Modes, Blood Oxygen Saturation (SpO2), Heart Rate & Sleep Tracking, 5ATM+Water & Dust"
                        price={1699.0}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/61XPTRJZcCL._AC_UL450_SR450,320_.jpg"
                    />
                    <Product
                        id={102}
                        rating={0}
                        title="OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)"
                        price={29999}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/I/61TnX0PmqES._AC_UL450_SR450,320_.jpg"
                    />
                    <Product
                        id={103}
                        title={
                            "boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
                        }
                        rating={4}
                        price={349}
                        image="https://images-eu.ssl-images-amazon.com/images/I/719elVA3FvL._AC_UL450_SR450,320_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={104}
                        title="OJS ® EVA Yoga Mat with Carrying Bag for Gym Workout and Yoga Exercise with 6mm Thickness, Anti-Slip Yoga Mat for Men & Women"
                        rating={4}
                        price={499}
                        image="https://images-eu.ssl-images-amazon.com/images/I/61V+i0KmEuL._AC_UL450_SR450,320_.jpg"
                    />
                    <Product
                        id={101}
                        title="boAt Airdopes 141 TWS Earbuds with 42H Playtime, Beast Mode, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance…"
                        price={1299}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41enxHWTgIL._AC_UL450_SR450,320_.jpg"
                        rating={5}
                    />

                    <Product
                        id={106}
                        title="realme narzo 50A (Oxygen Blue , 4GB RAM + 64 GB Storage) Helio G85 Processor | 50MP AI Triple Camera | 6000 mAh Battery"
                        rating="5"
                        price={14999.99}
                        image="https://images-eu.ssl-images-amazon.com/images/I/71hgVYiuFXL._AC_UL450_SR450,320_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={107}
                        title="CREATURE Reversible Pu-Leather Formal Belt For Men(Color-Black/Brown||BL-01|| 46"
                        price={298}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/I/81kzaF24XjL._AC_UL160_SR160,160_.jpg"
                    />
                    <Product
                        id={108}
                        title="Urban Forest Kyle RFID Blocking Black/Redwood Leather Wallet for Men"
                        rating={3}
                        price={450}
                        image="https://images-eu.ssl-images-amazon.com/images/I/91BEbdklpfL._AC_UL160_SR160,160_.jpg"
                    />
                    {/* <Product /> */}
                </div>
                <div className="home__row">
                    <Product
                        id={109}
                        title="LG UltraWide cm 87 cm (34 Inch) WFHD (2560 x 1080) IPS Display - HDR 10, AMD Free sync, sRGB 99%, Multitasking and Gaming Monitor - 34WL500"
                        price={26895}
                        rating={5}
                        image="http://pngimg.com/uploads/tv/small/tv_PNG39229.png"
                    />
                    <Product
                        id={110}
                        title="Cello H2O Unbreakable Plastic Bottle Set, 1 Litre, Set of 6, Multicolour"
                        price={644.0}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/61mu7OP5oQL._AC_UL302_SR302,200_.jpg"
                    />
                    <Product
                        id={111}
                        title="STAR WORK Face Mask Reusable Adjustable Washable Cotton Masks for Adult (6 Pcs, Fashion Flowers)"
                        price={259}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/91k1SSHV0tL._AC_UL320_.jpg"
                    />
                    <Product
                        id={112}
                        title="Loki Bawa Habit Course (master one habit at a time), create your identity"
                        price={99.99}
                        rating={5}
                        image="https://firebasestorage.googleapis.com/v0/b/clone-cf5ca.appspot.com/o/loki%20icon.png?alt=media&token=620e2dc4-bc7a-4483-9707-017b4c236e14"
                    />
                </div>
            </div>
        </div>
    );
}
export default Home;
