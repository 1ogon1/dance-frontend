import React, { useState } from "react";
import { Container } from "../../components/shared/container/Container";
import "../../components/admin/AdminAddUsers.css";
import "../../components/style/reset.css";
import "../../components/style/common.css";
import { addParticipants } from "../../components/services/requests";
import { useNavigate } from "react-router-dom"; 

export const AdminAddUsers = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        dancer1: "",
        dancer2: "",
        dancer3: "",
        dancer4: "",
        dancer5: "",
        dancer6: "",
        dancer7: "",
        dancer8: "",
        dancer9: "",
        dancer10: "",
        dancer11: "",
        dancer12: "",
        dancer13: "",
        dancer14: "",
        dancer15: "",
        dancer16: "",
    });

    const handleChange = (e, fieldName) => {
        setUserData((prevData) => ({
            ...prevData,
            [fieldName]: e.target.value,
        }));
    };

    const handleSave = () => {
       
        // Отправка данных
        const dataToSend = Object.values(userData)
        addParticipants(`{ "participants": ${JSON.stringify(dataToSend)}}`)
        .then((r) => {
            navigate(`/admin/table`);
            console.log(r)
        })
        .catch((e) => {
            if (e.response.status === 401) navigate("/")
            console.log(e)
            if (e.response.status === 403) navigate(`/admin/table`)
        })
    };

    return (
        <div className="admin-top">
            <Container>
                <div className="admin-top__container">
                    <h1 className="title">Top 16</h1>
                    <div className="admin-top__columns">
                        <div className="admin-top__column top-column">
                            {Object.keys(userData).slice(0, 6).map((fieldName, i) => (
                                <div className="top-column__block input-block" key={i}>
                                    <label className="top-column__title input-title">{`Dancer ${i + 1}`}</label>
                                    <input
                                        className="top-column__input input-info"
                                        type="text"
                                        value={userData[fieldName]}
                                        onChange={(e) => handleChange(e, fieldName)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="admin-top__column top-column">
                            {Object.keys(userData).slice(6, 12).map((fieldName, i) => (
                                <div className="top-column__block input-block" key={i + 6}>
                                    <label className="top-column__title input-title">{`Dancer ${i + 7}`}</label>
                                    <input
                                        className="top-column__input input-info"
                                        type="text"
                                        value={userData[fieldName]}
                                        onChange={(e) => handleChange(e, fieldName)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="admin-top__column top-column">
                            {Object.keys(userData).slice(12, 16).map((fieldName, i) => (
                                <div className="top-column__block input-block" key={i + 12}>
                                    <label className="top-column__title input-title">{`Dancer ${i + 13}`}</label>
                                    <input
                                        className="top-column__input input-info"
                                        type="text"
                                        value={userData[fieldName]}
                                        onChange={(e) => handleChange(e, fieldName)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="admin-top__btn btn btn--black" onClick={handleSave}>
                        SAVE
                    </button>
                </div>
                <div className="admin-top__logo"> </div>
            </Container>
        </div>
    );
};




