/**
 * Represents the entire application.
 * @param {string} ip - The IP address of the robot to control.
 */

var application = function(ip) {

    /** 
     * Variable holding the session for the robot.
     * @type {object} 
     */
    session = new QiSession(ip)

    /**
     * Create the session by connecting to the robot.
     * Upon connection execute function
     */
    session.socket().on('connect', function() {
        console.log('QiSession connected!')         //log the connection for debug
        
        /** Get the element by using its ID then store it */
        var x = document.getElementById("IPentry");
        /** Hide the element */
        x.style.display = "none"

        /** Get the element by using its ID then store it */        
        var y = document.getElementById("DisplayLabel");
        /** Unhide the element */
        y.style.display = "block"

        /** Upon disconnect execute function */
    }).on('disconnect', function() {
        console.log('QiSession disconnected!')      //log the connection for debug

        /** Get the element by using its ID then store it */        
        var x = document.getElementById("IPentry");
        /** Unhide the element */
        x.style.display = "block"

        /** Get the element by using its ID then store it */        
        var y = document.getElementById("DisplayLabel");
        /** Hide the element */
        y.style.display = "none"

        /** Get the element by using its ID then store it */        
        var labelText = document.getElementById("DLtext");
        /** Set elements text value */
        labelText.innerHTML = "Connected!"
    })
}

