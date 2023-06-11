import React from "react";
import Minutes from "./Minutes";

function Article({ title, date="January 1, 1970", preview, minutes }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small><Minutes minutes={minutes} />
            <p>{preview}</p>
        </article>
    )
}

export default Article