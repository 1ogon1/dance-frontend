import React, { useState } from "react"
import "./Table.css"
export const Table = (props) => {
    const [role, setRole] = useState("admin")

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <div style={{ width: "100%", textAlign: "center" }}><h1>Battles</h1></div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {/* tournament brackets to be placed */}
            </div>
        </div>
    )
}