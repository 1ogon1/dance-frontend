import React, { useState, useEffect } from 'react';
import "./Table.css"
import Popup from 'reactjs-popup';
import "../style/common.css"
import "../style/reset.css"
import { Match } from './Match/Matсh';

// --------swiper---------
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// --------swiper(END)---------

export const Table = (props) => {
    const [role, setRole] = useState(props.role)
    const [isJudge, setIsJudge] = useState(true) //меня условие isJudge тут (true/false)
    const match = JSON.parse(`{
        "_id": "6492a8380e21fa9cc15b4a6b",
        "stage": "FINAL",
        "participant_1_total_score": 50,
        "participant_2_total_score": 10,
        "participant_1": {
            "_id": "6492a8380e21fa9cc15b4a6d",
            "nickName": "6",
            "phoenix_power": true
        },
        "participant_2": {
            "_id": "6492a8380e21fa9cc15b4a6f",
            "nickName": "7",
            "phoenix_power": true
        },
        "participant_1_score": [],
        "participant_2_score": []
    }`)
    return (




        <div className="table bgg">
            <div className="table__container">
                <h1 className="table__title">Battles</h1>

          

     
                    {/* пример как сделать отображение тега по условию(isJudge = true/false)
                        если isJudge true, то отображается див, если false, то ничего(null)
                     */}
                     {isJudge ? 
                         <Swiper
                         spaceBetween={10}
                         slidesPerView={2}
                         slidesPerGroup={2}
                         onSlideChange={() => console.log('slide change')}
                         onSwiper={(swiper) => console.log(swiper)}
                       className="table__main main-table">
                     {/* ===========================КОЛОНКА-1============================= */} 
                     <SwiperSlide>
                     <div className="main-table__column column--first ">
 
                          <div className='text'>1/8 final</div>
                         <div className="column__block block-column block-column1">
                             <Match match={match} role={role}/>
                             <Match match={null} role={role}/>
                         </div>
 
                         <div className="column__block block-column block-column1">
                           <Match match={null} role={role}/>
                           <Match match={null} role={role}/>
                         </div>
 
                         <div className="column__block block-column block-column1">
                             <Match match={null} role={role}/>
                             <Match match={null} role={role}/>
                         </div>
 
                         <div className="column__block block-column block-column1">
                             <Match match={null} role={role}/>
                             <Match match={null} role={role}/>
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
                             <Match match={null} role={role}/>
                             <Match match={null} role={role}/>
                             <Match match={null} role={role}/>
                             <Match match={null} role={role}/>
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
                             <Match match={null} role={role}/>
                             <Match match={null} role={role}/>
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
                             <Match match={null} role={role}/>
                         </div>
                     </div>
                     </SwiperSlide>
                     <SwiperSlide>
                     </SwiperSlide>
                     {/* ===========================КОЛОНКА-4(END)============================= */}
                 </Swiper>
    


                     
                    //  =============================
                     :  <div className="table__main main-table">
                     {/* ===========================КОЛОНКА-1============================= */} 
                     <div className="main-table__column column--first ">
 
                          <div className='text'>1/8 final</div>
                         <div className="column__block block-column block-column1">
                             <Match match={match} role={role}/>
                             <Match match={null} role={role}/>
                         </div>
 
                         <div className="column__block block-column block-column1">
                           <Match match={null} role={role}/>
                           <Match match={null} role={role}/>
                         </div>
 
                         <div className="column__block block-column block-column1">
                             <Match match={null} role={role}/>
                             <Match match={null} role={role}/>
                         </div>
 
                         <div className="column__block block-column block-column1">
                             <Match match={null} role={role}/>
                             <Match match={null} role={role}/>
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
                             <Match match={null} role={role}/>
                             <Match match={null} role={role}/>
                             <Match match={null} role={role}/>
                             <Match match={null} role={role}/>
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
                             <Match match={null} role={role}/>
                             <Match match={null} role={role}/>
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
                             <Match match={null} role={role}/>
                         </div>
                     </div>
                     {/* ===========================КОЛОНКА-4(END)============================= */}
                 </div>}
                    {/*  */}

               
            </div>
        </div>
    )
}