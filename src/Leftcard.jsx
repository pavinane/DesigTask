import React from 'react';
import avatar from './Image/avatar.png';
import portfolio from './Image/portfolio.png';
import illu from './Image/illu.png';
import web from './Image/web.png'

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
                           
                        }
                    ]}
                    />
                    <Card
                    card={[
                        {
                            image:portfolio,
                            name:"news app ui design",
                            time:"10:00Am-5:00pm",
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
            </div>
        </div>
      ))}
    </div>
  );

//   <div className="activity-card">
//   <div className="activity-card-1">
//       <img src={portfolio} alt=""/>
//       <div className="card-1-section">
//           <div className="section-1">
//               <div className="name">
//                   <h1>news app ui design</h1>
//                   <span>10:00Am-5:00pm</span>
//               </div>
//               <i id="plus" class="fas fa-plus"></i>
//           </div>
//          <div className="activity-buttons">
//              <button type="button">ux/ui</button>
//              <button type="button"> app design</button>
//              <button type="button">sketch</button>
//          </div>
//       </div>
//   </div>
// </div>