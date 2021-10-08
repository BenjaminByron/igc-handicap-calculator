{
var glider = {
    gliderType: "ASW 20f",
    baseHandicap: 1.055,
    referenceMass: 372,
    emptyWeight: 276,
    pilotWeight: 104,
    winglets: true,
      }
    }

if (glider.winglets == true) { // Adjusts base handicap for winglets, if applicable
        glider.baseHandicap = (glider.baseHandicap + 0.004);
    }   



function flyingWeight(w1, w2) { // Function to determine glider's takeoff weight
          return w1 + w2;
      }
    var pilotAndGlider = flyingWeight(glider.emptyWeight, glider.pilotWeight); // Calculate glider's takeoff weight
    


function calculateRemainder(w1, w2) {
          return w1 - w2;
      }
    var remainder = calculateRemainder(pilotAndGlider, glider.referenceMass); // Number of kg over (+ve) or under (-ve) reference mass
    
    var useBaseHandicap = (remainder > -10) && (remainder <= 0); // Establishes whether handicap is in no-adjustment range



if (useBaseHandicap = true) { // Assigns no-adjustment handicap
    var upwardAdjustment = 0
    var calculatedHandicap = (glider.baseHandicap);
}

else if (remainder > 0) { // Calculates and assigns increased handicap
    var upwardAdjustment = (Math.ceil((remainder/10))) * 0.004;
    var calculatedHandicap = (glider.baseHandicap + upwardAdjustment).toFixed(3);
}


else (useBaseHandicap = false)  // Calculates decreaased handicap
    var downwardAdjustment = ((Math.ceil((remainder/10))) * -0.003);

if (downwardAdjustment >= 0.006) { // Sets lower handicap limit
    var calculatedHandicap = (glider.baseHandicap - 0.006).toFixed(3);
}

else  {// Assigns decreased handicap
    var calculatedHandicap = (glider.baseHandicap - downwardAdjustment).toFixed(3);   
}