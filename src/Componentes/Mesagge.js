import React from 'react'

export default function Mesagge({msg, bgColor}) {
    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: 'center',
        Color: "#fff",
        fontWeight: 'bold',
        backgroundColor: bgColor
    }

    return (
        <div style={styles}>
            <p>{msg}</p>
        </div>
    )
}
