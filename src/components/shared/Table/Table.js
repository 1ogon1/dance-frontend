import React, { useState, useEffect } from 'react';
import "./Table.css"
import "../style/common.css"
import "../style/reset.css"
import { Match } from './Match/Matсh';

// --------swiper---------
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { getBattlesEvent } from '../../../components/services/requests';
import { useNavigate } from 'react-router-dom';
// --------swiper(END)---------

export const Table = (props) => {
    const [role, setRole] = useState(props.role)
    const [isJudge, setIsJudge] = useState(role === "JUDGE") //меня условие isJudge тут (true/false)
    const [event, setEvent] = useState({});
    const navigate = useNavigate()
    const [data, setData] = useState(Object.is(event, {}) ? null : event)

    useEffect(() => {

        let cachedData = localStorage.getItem('cachedData')
        if (cachedData) {
            setEvent(JSON.parse(cachedData))
        }

        getBattlesEvent()
                .then((r) => {
                    setEvent(r.data)
                    localStorage.setItem('cachedData', JSON.stringify(r.data));
                    console.log(r.data)
                })
                .catch((e) => {
                    console.log(e)
                    if (e.response.status === 401 || e.response.status === 403) navigate("/")
                })
        //interval for requests
        
            const id = setInterval(() => {
                getBattlesEvent()
                .then((r) => {
                    setEvent(r.data)
                    console.log(r.data)
                })
                .catch((e) => {
                    console.log(e)
                })
            }, 5000);
        //


        return () => {
            clearInterval(id)
        }
    }, [])

    

    return (
        <div className="table bgg">
            <div className="table__container">
                <h1 className="table__title">Battles</h1>
                {isJudge ?
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2}
                        slidesPerGroup={2}
                        className="table__main main-table">
                        {/* ===========================КОЛОНКА-1============================= */}
                        <SwiperSlide>
                            <div className="main-table__column column--first ">

                                <div className='text'>1/8 final</div>
                                <div className="column__block block-column block-column1">
                                    <Match match={event.battles ? event.battles[14] : null} role={role} />
                                    <Match match={event.battles ? event.battles[13] : null} role={role} />
                                </div>

                                <div className="column__block block-column block-column1">
                                    <Match match={event.battles ? event.battles[12] : null} role={role} />
                                    <Match match={event.battles ? event.battles[11] : null} role={role} />
                                </div>

                                <div className="column__block block-column block-column1">
                                    <Match match={event.battles ? event.battles[10] : null} role={role} />
                                    <Match match={event.battles ? event.battles[9] : null} role={role} />
                                </div>

                                <div className="column__block block-column block-column1">
                                    <Match match={event.battles ? event.battles[8] : null} role={role} />
                                    <Match match={event.battles ? event.battles[7] : null} role={role} />
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* ===========================КОЛОНКА-1(END)============================= */}
                        <SwiperSlide>
                            <div className="main-table__column column column--connect connect-mob--first">
                                <div className="column__line line--mob"></div>
                                <div className="column__line line--mob"></div>
                                <div className="column__line line--mob"></div>
                                <div className="column__line line--mob"></div>
                            </div>
                        </SwiperSlide>
                        {/* ===========================КОЛОНКА-2============================= */}

                        <SwiperSlide>
                            <div className="main-table__column column ">
                                <div className='text'>1/4 final</div>
                                <div className="column__block block-column  block-column--2 column-mob--second">
                                    <Match match={event.battles ? event.battles[3] : null} role={role} />
                                    <Match match={event.battles ? event.battles[4] : null} role={role} />
                                    <Match match={event.battles ? event.battles[5] : null} role={role} />
                                    <Match match={event.battles ? event.battles[6] : null} role={role} />
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* ===========================КОЛОНКА-2(END)============================= */}

                        <SwiperSlide>
                            <div className="main-table__column  column--connect connect-mob--second">
                                <div className="column__line line--midle line--mob"></div>
                                <div className="column__line line--midle line--mob"></div>
                            </div>
                        </SwiperSlide>
                        {/* ===========================КОЛОНКА-3============================= */}
                        <SwiperSlide>
                            <div className="main-table__column column column2">
                                <div className='text'>1/2 final</div>
                                <div className="column__block block-column block-column--3 column-mob--third">
                                    <Match match={event.battles ? event.battles[2] : null} role={role} />
                                    <Match match={event.battles ? event.battles[1] : null} role={role} />
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* ===========================КОЛОНКА-3(END)============================= */}
                        <SwiperSlide>
                            <div className="main-table__column column column--connect connect-mob--third">
                                <div className="column__line line--big line--mob"></div>
                            </div>
                        </SwiperSlide>
                        {/* ===========================КОЛОНКА-4============================= */}
                        <SwiperSlide>
                            <div className="main-table__column column column-mob--final">
                                <div className='text'>Final</div>
                                <div className="column__block block-column block-column--final">
                                    <Match match={event.battles ? event.battles[0] : null} role={role} />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        </SwiperSlide>
                        {/* ===========================КОЛОНКА-4(END)============================= */}
                    </Swiper>




                    //  =============================
                    : <div className="table__main main-table">
                        {/* ===========================КОЛОНКА-1============================= */}
                        <div className="main-table__column column--first ">

                            <div className='text'>1/8 final</div>
                            <div className="column__block block-column block-column1">
                                <Match match={event.battles ? event.battles[14] : null} role={role} />
                                <Match match={event.battles ? event.battles[13] : null} role={role} />
                            </div>

                            <div className="column__block block-column block-column1">
                                <Match match={event.battles ? event.battles[12] : null} role={role} />
                                <Match match={event.battles ? event.battles[11] : null} role={role} />
                            </div>

                            <div className="column__block block-column block-column1">
                                <Match match={event.battles ? event.battles[10] : null} role={role} />
                                <Match match={event.battles ? event.battles[9] : null} role={role} />
                            </div>

                            <div className="column__block block-column block-column1">
                                <Match match={event.battles ? event.battles[8] : null} role={role} />
                                <Match match={event.battles ? event.battles[7] : null} role={role} />
                            </div>
                        </div>
                        {/* ===========================КОЛОНКА-1(END)============================= */}

                        <div className="main-table__column column column--connect">
                            <div className="column__line"></div>
                            <div className="column__line"></div>
                            <div className="column__line"></div>
                            <div className="column__line"></div>
                        </div>

                        {/* ===========================КОЛОНКА-2============================= */}
                        <div className="main-table__column column ">
                            <div className='text'>1/4 final</div>
                            <div className="column__block block-column  block-column--2">
                                <Match match={event.battles ? event.battles[3] : null} role={role} />
                                <Match match={event.battles ? event.battles[4] : null} role={role} />
                                <Match match={event.battles ? event.battles[5] : null} role={role} />
                                <Match match={event.battles ? event.battles[6] : null} role={role} />
                            </div>
                        </div>
                        {/* ===========================КОЛОНКА-2(END)============================= */}

                        <div className="main-table__column  column--connect">
                            <div className="column__line line--midle"></div>
                            <div className="column__line line--midle"></div>
                        </div>

                        {/* ===========================КОЛОНКА-3============================= */}

                        <div className="main-table__column column column2">
                            <div className='text'>1/2 final</div>
                            <div className="column__block block-column block-column--3">
                            <Match match={event.battles ? event.battles[2] : null} role={role} />
                            <Match match={event.battles ? event.battles[1] : null} role={role} />
                            </div>
                        </div>
                        {/* ===========================КОЛОНКА-3(END)============================= */}

                        <div className="main-table__column column column--connect">
                            <div className="column__line line--big"></div>
                        </div>

                        {/* ===========================КОЛОНКА-4============================= */}
                        <div className="main-table__column column ">
                            <div className='text'>Final</div>
                            <div className="column__block block-column block-column--final">
                            <Match match={event.battles ? event.battles[0] : null} role={role} />
                            </div>
                        </div>
                        {/* ===========================КОЛОНКА-4(END)============================= */}
                    </div>}
                {/*  */}


            </div>
        </div>
    )
}
