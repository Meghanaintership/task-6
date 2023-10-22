import React from "react";

function Project() {
  const divStyle = {
    backgroundImage: `url("https://wallpapers.com/images/hd/aesthetic-tom-and-jerry-nftfqxaqhyqshvg4.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align content to the left
    justifyContent: "flex-start", // Align content to the left
    color: "black",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "row", // Make content elements display in a row
    alignItems: "flex-start", // Align content to the left
  };

  const textContainerStyle = {
    flex: 1, // Allow text content to take up available space
    display: "flex",
    flexDirection: "column",
  };
  const hStyle = {
    paddingLeft: "20px", // Adjust as needed
    fontSize: "30px",
    paddingRight: "400px",
    color:"brown"
  };
  
  const pStyle = {
    paddingLeft: "20px", // Adjust as needed
    fontSize: "25px",
    paddingRight: "400px"
  };
  

  
  return (
    <div style={divStyle}>
      <h1 style={hStyle}>Projects</h1>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          <h1 style={{color:"blue"}}>Rain Alert-Arduino Rain Sensor and Notification System</h1>
          <p style={pStyle}>
          -Notifies if it rains using buzzer or led light and also  covers the required area using servo motor mainly used for covering harvested crop like  paddy, chilli etc.
          </p>

        </div>
        
      </div>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          <h1 style={{color:"blue"}}>Automatic Attendance marking using Ai</h1>
          <p style={pStyle}>
          -Developed a model that marks the attendance when a student enters into the class 
          </p>
          <p style={pStyle}>
          -Used Face Recognition technique
          </p>
        </div>
        </div>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          <h1 style={{color:"blue"}}>Heart Disease predicion Using Ml</h1>
          <p style={pStyle}>
          -Developed a model that predicts if a person have heart disease. 
          </p>
          <p style={pStyle}>
          -Used KNN,SVM ,Logistic Regression,Random Forest
          </p>
        </div>
        
      </div>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          <h1 style={{color:"blue"}}>Decoding and classifying Musical Genres with Deep Learning Algorithms</h1>
          <p style={pStyle}>
          -Developed a model that classifies the musical genres as Jazz, Rock, Pop ,Classical and so on
          </p>
          <p style={pStyle}>
          -Used KNN,SVM,CNN out of which CNN Produced better results.
          </p>
        </div>
        
      </div>
      
    </div>
  );
}

export default Project;
