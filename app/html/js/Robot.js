class Robot {
    constructor(robotSession) {
        this.session = robotSession
    }

    getBehaviours() {
        var bList
        this.session.service("ALBehaviorManager").then(function(bm) {
            bm.getInstalledBehaviors().then(function(data){
                bList = data
                return data
            })
        }).fail(function(error) {
            console.log("An error occurred:", error);
        });
    }

    say(data) {
        this.session.service("ALAnimatedSpeech").then(function(as) {
            as.say(data)
        }).fail(function(error) {
            console.log("An error occurred:", error);
        });
    }
}