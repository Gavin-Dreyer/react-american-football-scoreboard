//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  const styles = {
    color: 'red',
  }
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [outs, setOuts] = useState(0);
  const [homeScore, sethomeScore] = useState(0);
  const [awayScore, setawayScore] = useState(0);

  const single = e => {
    sethomeScore(homeScore + .25)
   
  }

  const double = e => {
    sethomeScore(homeScore + .5)

  }

  const triple = e => {
    sethomeScore(homeScore + .75)

  }

  const homerun = e => {
    sethomeScore(homeScore + 1)

  }

  const singleAway = e => {
    setawayScore(awayScore + .25)
   
  }

  const doubleAway = e => {
    setawayScore(awayScore + .5)

  }

  const tripleAway = e => {
    setawayScore(awayScore + .75)

  }

  const homerunAway = e => {
    setawayScore(awayScore + 1)

  }

  const strikeThrow = e => {
    setStrikes(strikes + 1)
    if (strikes === 2) {
      setOuts(outs + 1)
      setStrikes(0)
      alert('Yerrr out!')
    }
    if (outs === 3) {
      outFunc()
    }
  }

  const ballThrow = e => {
    setBalls(balls + 1)
    if (balls === 3) {
      alert('Walked')
      setBalls(0)
    }
  }

  const outFunc = e=> {
    alert('Next Inning')
  }

  return (
    <div className="container">
      <section className="scoreboard">
        {/* <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state.

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div> */}
        {/* <BottomRow /> */}
        <section className="bottomInfo">
            <div className="Ball">
              <div>Balls</div>
              <div>{balls}</div>
            </div>
            <div className="Strikes">
              <div>Strikes</div>
              <div>{strikes}</div>
            </div>
            <div className="Outs">
              <div>Outs</div>
              <div>{outs}</div>
            </div>
          </section>
        <div className = "bottomRow">
          <div className = "names">
            <div>Visitor</div>
            <div>Home</div>
          </div>
          <div className = "inning">
            <div>1</div>
            <div className = "score">{awayScore}</div>
            <div className="score" style={styles}>{homeScore}</div>
          </div>
          <div className = "inning">
            <div>2</div>
            <div className = "score">{awayScore}</div>
            <div className = "score">{homeScore}</div>
          </div>
          <div className = "inning">
            <div>3</div>
            <div className = "score">{awayScore}</div>
            <div className = "score">{homeScore}</div>
          </div>
          <div className = "inning">
            <div>4</div>
            <div className = "score">{awayScore}</div>
            <div className = "score">{homeScore}</div>
          </div>
          <div className = "inning">
            <div>5</div>
            <div className = "score">{awayScore}</div>
            <div className = "score">{homeScore}</div>
          </div>
          <div className = "inning">
            <div>6</div>
            <div className = "score">{awayScore}</div>
            <div className = "score">{homeScore}</div>
          </div>
          <div className = "inning">
            <div>7</div>
            <div className = "score">{awayScore}</div>
            <div className = "score">{homeScore}</div>
          </div>
          <div className = "inning">
            <div>8</div>
            <div className = "score">{awayScore}</div>
            <div className = "score">{homeScore}</div>
          </div>
          <div className = "inning">
            <div>9</div>
            <div className = "score">{awayScore}</div>
            <div className = "score">{homeScore}</div>
          </div>
          <div className = "total">
            <div className = "total-text">Total</div>
            <div className = "totals">1</div>
            <div className = "totals">1</div>
          </div>
    </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => single()}>Single</button>
          <button className="homeButtons__fieldGoal" onClick={() => double()}>Double</button>
          <button className="homeButtons__fieldGoal" onClick={() => triple()}>Triple</button>
          <button className="homeButtons__fieldGoal" onClick={() => homerun()}>Homerun!</button>
        </div>
        <div className="pitchesButtons">
        <button className="homeButtons__touchdown" onClick={() => strikeThrow()}>Strike</button>
          <button className="homeButtons__fieldGoal" onClick={() => ballThrow()}>Ball</button>
        
        </div>
        <div className="awayButtons">
        <button className="homeButtons__touchdown" onClick={() => singleAway()}>Single</button>
          <button className="homeButtons__fieldGoal" onClick={() => doubleAway()}>Double</button>
          <button className="homeButtons__fieldGoal" onClick={() => tripleAway()}>Triple</button>
          <button className="homeButtons__fieldGoal" onClick={() => homerunAway()}>Homerun!</button>
        </div>
        
      </section>
      {/* <section className="buttons">
        <div className="homeButtons">
          TODO STEP 4 - Now we need to attach our state setter functions to click listeners.
          <button className="homeButtons__touchdown" onClick={() => sethomeScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => sethomeScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setawayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setawayScore(awayScore + 3)}>Away Field Goal</button>
        </div>
      </section> */}
    </div>
  );
}

export default App;
