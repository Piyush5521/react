import React from "react";
import "./Entry.css";

const Entry = (props) => {
    return(
        <>
            <div className="card">
            <dl>
                <dt>
                    <p className="emojiIcon">{props.emoji}</p>
                    <h2>{props.name}</h2>
                </dt>
                <dd>
                    <p className="description">{props.meaning}</p>
                </dd>
            </dl>
            </div>
        </>
    );
}

export default Entry;