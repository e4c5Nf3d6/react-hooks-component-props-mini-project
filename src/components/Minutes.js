import React from "react";

function Minutes({ minutes }) {
    
    function emoji() {

        if (minutes < 30) {
            let numberOfEmojis = (minutes - minutes % 5) / 5
            if (minutes % 5 !== 0) {
                numberOfEmojis += 1
            }
            return '☕️'.repeat(numberOfEmojis)
        } else {
            let numberOfEmojis = (minutes - minutes % 10) / 10
            if (minutes % 10 !== 0) {
                numberOfEmojis += 1
            }
            return '🍱'.repeat(numberOfEmojis)
        }
    }

    return (
        <small>{` • ${emoji()} ${minutes} minute read`}</small>
    )
}

export default Minutes