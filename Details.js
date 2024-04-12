import React from 'react'
import "./main.css";
import microsoft from "./assets/microsoft.png";
import ibm from "./assets/ibm.png";
import unity from "./assets/unity.png";
import thread from "./assets/threads.png";
import huawei from "./assets/huawei.png";

const Details = () => {
    return(
    <div className="details">
    <h3
      className="gradient-text c-title"
      style={{  fontFamily: "Poppins",fontWeight:'400'}}
    >
      UPCOMING COMPANY'S
    </h3>
    <div className="lists">
      <div className="title">
        <h4 className="center gradient-text">MICROSOFT</h4>
      </div>
      <div className="line"></div>
      <div className="info">
        <div className="logo">
          <img src={microsoft} alt="microsoft" width={50} height={50} />
        </div>
        <div className="role">
          <h6>
            FRONTEND DEVELOPER : React, Angular, TypeScript, Redux, Material
            UI
          </h6>
        </div>
      </div>
      <div className="action">
        <h6 style={{ fontWeight: "bold" }}>APPLY NOW</h6>
      </div>
    </div>

    <div className="lists">
      <div className="title">
        <h4 className="center gradient-text">IBM</h4>
      </div>
      <div className="line"></div>
      <div className="info">
        <div className="logo">
          <img src={ibm} alt="ibm" width={50} height={50} />
        </div>
        <div className="role">
          <h6>CLOUD ENGINEER : Aws, Azure, Gcp </h6>
        </div>
      </div>
      <div className="action">
        <h6 style={{ fontWeight: "bold" }}>APPLY NOW</h6>
      </div>
    </div>

    <div className="lists">
      <div className="title">
        <h4 className="center gradient-text">UNITY</h4>
      </div>
      <div className="line"></div>
      <div className="info">
        <div className="logo">
          <img src={unity} alt="unity" width={50} height={50} />
        </div>
        <div className="role">
          <h6>
            DIGITAL SPECIALIST ENGINEER : Javascript, Node js, Express js,
            Mongo Db
          </h6>
        </div>
      </div>
      <div className="action">
        <h6 style={{ fontWeight: "bold" }}>UPCOMING</h6>
      </div>
    </div>

    <div className="lists">
      <div className="title">
        <h4 className="center gradient-text">Thread</h4>
      </div>
      <div className="line"></div>
      <div className="info">
        <div className="logo">
          <img src={thread} alt="microsoft" width={50} height={50} />
        </div>
        <div className="role">
          <h6>BUISNESS ANALYST : Data Mining, Big Data, Deep Learning</h6>
        </div>
      </div>
      <div className="action">
        <h6 style={{ fontWeight: "bold" }}>UPCOMING</h6>
      </div>
    </div>

    <div className="lists">
      <div className="title">
        <h4 className="center gradient-text">HUAWAI</h4>
      </div>
      <div className="line"></div>
      <div className="info">
        <div className="logo">
          <img src={huawei} alt="microsoft" width={50} height={50} />
        </div>
        <div className="role">
          <h6>
            ANDROID DEVELOPER : Flutter, Kotlin, Java, React Native, Swift{" "}
          </h6>
        </div>
      </div>
      <div className="action">
        <h6 style={{ fontWeight: "bold" }}>UPCOMING</h6>
      </div>
    </div>
  </div>
    )
}

export default Details
