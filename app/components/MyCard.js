"use client";
import { useEffect, useState } from "react";
import classes from "./my-card-styles.module.css";

function MyCard(props) {
    const [clickCount, setClickCount] = useState(0); // called a hook
    const [yourName, setYourName] = useState("[Enter Name]");
    useEffect(() => {
        if (clickCount >= 10) {
            alert("You clicked 10 times!")
            // console.log(clickCount) // alternatively would be beneficial for debugging code
        }
    }, [clickCount])
    // function increaseCount() {
    //     setClickCount(clickCount + 1)
    // }
    function addLetter() {
        setYourName(yourName + "a");
    }
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{props.heading}</h2>
            <p>{props.paragraph}</p>
            <button
            onClick={() => setClickCount(clickCount + 1)}>
                Clicked <span className={classes.count}>{clickCount}</span> times!</button>
            <button
            onClick={addLetter}>
                Add a letter to your name
            </button>
            <p>Hi, {yourName}</p>
        </div>
    )
}

export default MyCard;