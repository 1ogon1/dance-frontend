import React from "react"
import { Container } from "components/shared/container/Container"
import  'components/admin/AdminAddUsers.css';
import  'components/style/reset.css';
import  'components/style/common.css';
export const AdminAddUsers = () => {
    return (
        <div className="admin-top bg">
            <Container >
         
                    <div className="admin-top__container">
                        <h1 className="title">Top 16</h1>
                        <div className="admin-top__columns">
                            <div  className="admin-top__column top-column">
                                {[...Array(6)].map((_, i) => (
                                    <div className="top-column__block input-block" key={i}>
                                        <label className="top-column__title input-title">{`Dancer ${i + 1}`}</label>
                                        <input className="top-column__input input-info" type="text" />
                                    </div>
                                ))}
                            </div>
                            <div className="admin-top__column top-column">
                                {[...Array(6)].map((_, i) => (
                                    <div className="top-column__block input-block" key={i + 6}>
                                        <label className="top-column__title input-title">{`Dancer ${i + 7}`}</label>
                                        <input className="top-column__input input-info" type="text"/>
                                    </div>
                                ))}
                            </div>
                            <div className="admin-top__column top-column">
                                {[...Array(4)].map((_, i) => (
                                    <div className="top-column__block input-block"  key={i + 12}>
                                        <label className="top-column__title input-title">{`Dancer ${i + 13}`}</label>
                                        <input className="top-column__input input-info" type="text"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="admin-top__btn btn btn--black">SAVE</button>
                    </div>
                    <div className="admin-top__logo"> </div>
            </Container>
        </div>
    )
}