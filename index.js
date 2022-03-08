import React from "react"
import ReactDOM "react-dom"

function App() {
    const date = new Date(2018, 6, 31, 15)
    const hours = data.getHours()
    let timeOfDay
    const styles = {
        fontSize: 24px
}

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#2E0927"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }

return (
    <h1 style={styles}> Good {timeOfDay} </h1>
 )
}

ReactDOM.render(<App />, document.getElementById("root"))
