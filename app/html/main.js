var sessionP, robot

function createSession() {
    sessionP = new Session(document.getElementById('IP').value)
    robot = new Robot(sessionP)
    if (robot) {
        document.getElementById('executionForm').style.visibility = 'visible'
    }
}

function say() {
    console.log("Hello")
    robot.say(document.getElementById('sayText').value)
}