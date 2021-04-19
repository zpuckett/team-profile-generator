const style = `


html, body {
    max-width: 100% !important;
    overflow-x:hidden !important;
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F4E5E5;
}
.banner-bar {
    background-color: #990000;
    width: 100%;
    color: #ac9437;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
}
 
h1 {
    font-family: 'Graduate', cursive;
    font-size : 8vw;
}

p {
    font-family: 'Big Shoulders Display', cursive;
    position: relative;
    left: 10px;
    font-size: 20px;
}

h2 {
    font-family: 'Big Shoulders Display', cursive;
    position: relative;
    font-size: 15px;
    left: 10px;
    
}

.member-card {
    width: 250px;
    height: 30vh;
    background-color: #ac9437;
    color: black;
    margin-bottom: 5vh;
    border-top-left-radius: 10px;
    box-shadow: 2px 5px 5px black;
}
.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
}
.card-top {
    background-color: rgb(226, 174, 76);
    border: 2px solid rgb(226, 174, 76);
    width: 246px;
    border-top-left-radius: 10px;
}
.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`
module.exports = style;