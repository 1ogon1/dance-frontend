import React from "react"
import { Container } from "components/shared/container/Container"
export const AdminAddUsers = () => {
    return (
        <Container>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <h1>Top 16</h1>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" , padding: "41px", gap: "110px" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        {[...Array(6)].map((_, i) => (
                            <div key={i}>
                                <label>{`Dancer ${i + 1}`}</label>
                                <input type="text" placeholder={`Participant ${i + 1}`} style={{ marginBottom: 10 }} />
                            </div>
                        ))}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        {[...Array(6)].map((_, i) => (
                            <div key={i + 6}>
                                <label>{`Dancer ${i + 7}`}</label>
                                <input type="text" placeholder={`Participant ${i + 7}`} style={{ marginBottom: 10 }} />
                            </div>
                        ))}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        {[...Array(4)].map((_, i) => (
                            <div key={i + 12}>
                                <label>{`Dancer ${i + 13}`}</label>
                                <input type="text" placeholder={`Participant ${i + 13}`} style={{ marginBottom: 10 }} />
                            </div>
                        ))}
                    </div>
                </div>
                <button>SAVE</button>
            </div>
        </Container>
    )
}