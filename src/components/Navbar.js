import React from "react";

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar bg-primary navbar-expand-lg bg-${props.col}`} >
      <div className="container-fluid">
        <a className={`navbar-brand mx-3 bg-primary bg-${props.col}`} href="#" style={{font : "icon", fontSize: "28px", color : props.col === 'black' ? 'white' : 'black'}}>
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i class="fa fa-navicon" style={{color:"white", fontSize:"28px"}}></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          
        <div className="d-flex">
           <div className="bg-white rounded mx-2" onClick={()=>{props.toggle('primary')}} style={{height  : "30px", width : "30px", cursor : 'pointer' }}></div>
           <div className="rounded mx-2" onClick={()=>{props.toggle('black')}} style={{height  : "30px", width : "30px", cursor : 'pointer', backgroundColor : "#3A3B3C"}}></div>
          <div className="rounded mx-2" onClick={()=>{props.toggle('danger')}} style={{height  : "30px", width : "30px", cursor : 'pointer', backgroundColor : "#F75D59"}}></div>
          <div className=" rounded mx-2" onClick={()=>{props.toggle('success')}} style={{height  : "30px", width : "30px", cursor : 'pointer', backgroundColor : "#4CC552"}}></div>
          <div className="rounded mx-2" onClick={()=>{props.toggle('warning')}} style={{height  : "30px", width : "30px", cursor : 'pointer', backgroundColor : "#FFEF00"}}></div>
        </div>
        </div>
      </div>
    </nav>
    </>
  );
}
