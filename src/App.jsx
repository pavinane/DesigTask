import React from 'react';
import './App.scss'
import Leftcard from './Leftcard'
import './leftcard.scss'

const Task = () => (
  <div className="task-card">
    <div className="task-card-right">
      <div className="right-card-1">
      <i class="fas fa-circle-notch"></i>
      </div>
    <Iconname
    icon={[
      {
        icon:"fas fa-tachometer-alt",
            name:"dashboard" 
      },
      {
        icon:"fas fa-chart-line",
            name:"activity" 
      },
      {
        icon:"fas fa-history",
            name:"timeline" 
      },
    ]}
    />
      <Iconname
    icon={[
      {
        icon:"fas fa-calendar-check",
            name:"to-do" 
      },
      {
        icon:"fas fa-clipboard-list",
            name:"invoices" 
      },
      {
        icon:"fas fa-folder",
            name:"project" 
      },
    ]}
    />
      <Iconname1
    icon1={[
      {
        icon:"fas fa-tachometer-alt",
            name:"help" 
      },
      {
        icon:"fas fa-chart-line",
            name:"download app" 
      },
     
    ]}
    />
    <div className="right-card-4">
    <i class="far fa-bell"></i>
    <i class="fas fa-cog"></i>
    <i class="fas fa-user-circle"></i>
    </div>
    </div>
    
<Leftcard/>
  </div>
)

const Iconname = ({ icon }) => (
  <div className="icon-name">
    {icon.map(ic => (
      <div className="right-card-2">
  <i class={ic.icon}/>
    <h2>{ic.name}</h2>
      </div>
    ))}
  </div>
);
const Iconname1 = ({ icon1 }) => (
  <div className="icon-name1">
    {icon1.map(ic => (
      <div className="right-card-3">
  <i class={ic.icon}/>
    <h2>{ic.name}</h2>
      </div>
    ))}
  </div>
);
export default Task