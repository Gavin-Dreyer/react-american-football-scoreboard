import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {

  
  return (
    // <div className = "bottomRow">
    //   <div className = "names">
    //     <div>Visitor</div>
    //     <div>Home</div>
    //   </div>
    //   <div className = "inning">
    //     <div>1</div>
    //     <div className = "score"></div>
    //     <div className = "score"></div>
    //   </div>
    //   <div className = "inning">
    //     <div>2</div>
    //     <div className = "score"></div>
    //     <div className = "score"></div>
    //   </div>
    //   <div className = "inning">
    //     <div>3</div>
    //     <div className = "score"></div>
    //     <div className = "score"></div>
    //   </div>
    //   <div className = "inning">
    //     <div>4</div>
    //     <div className = "score"></div>
    //     <div className = "score"></div>
    //   </div>
    //   <div className = "inning">
    //     <div>5</div>
    //     <div className = "score"></div>
    //     <div className = "score"></div>
    //   </div>
    //   <div className = "inning">
    //     <div>6</div>
    //     <div className = "score"></div>
    //     <div className = "score"></div>
    //   </div>
    //   <div className = "inning">
    //     <div>7</div>
    //     <div className = "score"></div>
    //     <div className = "score"></div>
    //   </div>
    //   <div className = "inning">
    //     <div>8</div>
    //     <div className = "score"></div>
    //     <div className = "score"></div>
    //   </div>
    //   <div className = "inning">
    //     <div>9</div>
    //     <div className = "score"></div>
    //     <div className = "score"></div>
    //   </div>
    //   <div className = "total">
    //     <div className = "total-text">Total</div>
    //     <div className = "totals">1</div>
    //     <div className = "totals">1</div>
    //   </div>
    // </div>



    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">4</div>
      </div>
    </div>
  );
};

export default BottomRow;
