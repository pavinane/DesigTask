import React from 'react';
import avatar from './Image/avatar.png';
import portfolio from './Image/portfolio.png';
import illu from './Image/illu.png';
import web from './Image/web.png';
import worker from './Image/worker.png';
import worker1 from './Image/worker1.png';
import worker2 from './Image/worker2.png';
import worker3 from './Image/worker3.png';
import worker4 from './Image/worker4.png';
import worker5 from './Image/worker5.png';
import worker6 from './Image/worker6.png';
import worker7 from './Image/worker7.png';
import worker8 from './Image/worker8.png';
import worker9 from './Image/worker9.png';
import worker10 from './Image/worker10.png';
import worker11 from './Image/worker11.png';
import worker12 from './Image/worker12.png';


const Left = () => (
    <div className="left-card">
        <div className="left-card-1">
            <div className="design-task">
            <button type="button" id="btn-name"> design task </button>
            <button type="button" id="btn-icon">  <i class="fas fa-sort-down"/> </button>
            
            </div>
            <div className="project">
                <button type="button"> + add project </button>
            </div>
        </div>
        <div className="left-card-2">
            <div className="circle-arrow">
            <h1><i class="fas fa-angle-left"></i></h1>
            </div>
            <div className="left-card-body">
                <div className="design-head">
                    <h1>design head</h1>
                    <div className="head-card">
                        <div className="head-card1">
                           <img src={avatar} alt=""/>
                           <div className="avatar-name">
                               <h1>saami al samad</h1>
                               <small>product designer & illustrator</small>
                           </div>
                           <i class="fas fa-minus-circle"></i>
                        </div>
                        <div className="head-card2">
                            <div id="hour-rate">
                            <h1>hourly rate</h1>
                            <small>45 $per hour</small>
                            </div>
                            <i class="fas fa-minus-circle"></i>
                        </div>
                        <div className="head-card3">
                            <div className="capacity">
                            <h1>working capacity</h1>
                        <div className="skill">
                            <div className="skill-level" ></div>
                        </div>
                            </div>
                            <button type="button">view resume</button>
                        </div>
                    </div>
                </div>
                <div className="screenshot-activity">
                    <div className="activity-head">
                        <h1>screenshot activity</h1>
                        <div className="change-card">
                        <i id="left-arrow" class="fas fa-arrow-left"></i>
                        <i id="right-arrow"class="fas fa-arrow-right"></i>
                        <button type="button">Today <i class="fas fa-sort-down"/></button>
                        </div>
                    </div>
                    <div className="section-card">
                    <Card
                    card={[
                        {
                            image:portfolio,
                            name:"news app ui design",
                            time:"10:00Am-5:00pm",
                            btn1:"ux/ui",
                            btn2:"App design",
                            btn3:"sketch",
                            worker:"13 designers worked",
                            wrk1:worker,
                            wrk2:worker1,
                            wrk3:worker2,
                            wrk4:worker3,
                            num:"+9",
                            id:"num1"
                        }
                    ]}
                    />
                    <Card
                    card={[
                        {
                            image:illu,
                            name:"house illustration",
                            time:"9:00Am-10:00pm",
                            btn1:"illustration",
                            btn2:"procreate",
                            btn3:"creative",
                            worker:"7 designers worked",
                            wrk1:worker4,
                            wrk2:worker5,
                            wrk3:worker6,
                            wrk4:worker7,
                            num:"+3",
                            id:"num2"
                        }
                    ]}
                    />
                    <Card
                    card={[
                        {
                            image:web,
                            name:"texture for web",
                            time:"5:00Am-9:00pm",
                            btn1:"texture",
                            btn2:"photoshop",
                            btn3:"ux/ui",
                            worker:"8 designers worked",
                            num:"+4",
                            id:"num3",
                            wrk1:worker8,
                            wrk2:worker9,
                            wrk3:worker10,
                            wrk4:worker11,
                           
                        }
                    ]}
                    />
                    <Card
                    card={[
                        {
                            image:portfolio,
                            name:"news app ui design",
                            time:"10:00Am-5:00pm",
                            wrk1:worker12,
                            
                        }
                    ]}
                    />
                    </div>
                   
                   
                </div>
            </div>
        </div>
    
    </div>
)
export default Left;


const Card = ({ card }) => (
    <div className="screenshot-card">
      {card.map(cd => (
        <div className="activity-card">
           <div className="activity-card-1">
                <img src={cd.image} alt=""/>
                <div className="card-1-section">
                    <div className="section-1">
                        <div className="name">
                        <h1>{cd.name}</h1>
                        <span>{cd.time}</span>
                        </div>
                        <i id="plus" class="fas fa-plus"></i>
                    </div>
                    <div className="activity-buttons">
                        <button type="button">{cd.btn1}</button>
                        <button type="button"> {cd.btn2}</button>
                        <button type="button">{cd.btn3}</button>
                    </div>
                </div>
                <div className="workers-card">
                    <div className="workers-card-1">
                   
                            <img id="worker1" src={cd.wrk1} alt=""/>
                            <img id="worker2"src={cd.wrk2} alt=""/>
                            <img  id="worker3"src={cd.wrk3} alt=""/>
                            <img  id="worker4"src={cd.wrk4} alt=""/>
                        
                      
                        <h1 id={cd.id}>{cd.num}</h1>
                    </div>
                     <h2>{cd.worker}</h2>
                </div>
            </div>
        </div>
      ))}
    </div>
  );

