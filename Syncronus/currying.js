// ✅ Topic: Currying

function nation(nation) {
    function state(state) {
        function distict(distict) {
            function village(village) {
                return `Nation: ${nation},State: ${state}, District ${distict}, Village: ${village}`;
            }
            return village;
        }
        return distict;
    }
    return state;
}

let myNation = nation("India")
let myState = myNation("Up")
let mydistrict = myState("Prayagraj")
let myVillage = mydistrict("Baraut")
console.log(myVillage)
let myFriVillage = mydistrict("Bhiti")
console.log(myFriVillage)

let friendState = myNation("Mp")
let friendDistrict = friendState("GateWay")
let friendVillage = friendDistrict("Village Mp")
console.log(friendVillage)

// factorial_
// fibonacci