import React from 'react';
import classes from './Mission.module.css';
const Mission = (props) => {
    const missionIds=props.mission_id;
    let missionIdList = missionIds.map((el,i)=><li key={i}>{el}</li>)
    missionIdList=missionIdList.length>0?missionIdList:"Not Available";
    const launchSucc=props.launch_success
    let launchSuccess="Not Available";
   if(launchSucc===true)
   launchSuccess="true";
   if(launchSucc===false)
   launchSuccess="false";
  
   const land_success =props.land_success;
 
   let landSuccess="Not Available";
   if(land_success===true)
   landSuccess="true";
   if(land_success===false)
   landSuccess="false";
   
    return (
        <div className={classes.Mission}>
            <div className={classes.MissionLogo}><img src={props.mission_patch} alt="logo"></img></div>
            <b>Mission Ids:</b><br/>
            <span>{missionIdList}</span><br/>
    <b>Launch year</b>:<span>{props.launch_year}</span><br/>
    <b>Successful Launch</b>:<span>{launchSuccess}</span><br/>
    <b>Successful Landing</b>:<span>{landSuccess}</span><br/>
        </div>
    );
};

export default Mission;