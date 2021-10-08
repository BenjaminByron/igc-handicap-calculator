{
    var glider = {
        gliderType: 'ASW 20f',
        baseHandicap: 1.055,
        referenceMass: 372,
        emptyWeight: 276,
        pilotWeight: 104,
        winglets: true,
    };
}


// TODO something
if (glider.winglets) {
    // Adjusts base handicap for winglets, if applicable
    glider.baseHandicap += 0.004;
}

function flyingWeight(w1, w2) {
    // Function to determine glider's takeoff weight
    return w1 + w2;
}

function calculateRemainder(w1, w2) {
    return w1 - w2;
}

function calculate(gliderType, pilotWeight, gliderWeight, winglets) {
    const selectedGlider = aircraftData.find(({ type }) => type === gliderType);

    const referenceMass = parseInt(selectedGlider['ref mass'], 10);

    console.log(referenceWeight);

    var pilotAndGlider = flyingWeight(gliderWeight, pilotWeight); // Calculate glider's takeoff weight

    var remainder = calculateRemainder(pilotAndGlider, referenceMass); // Number of kg over (+ve) or under (-ve) reference mass

    var useBaseHandicap = remainder > -10 && remainder <= 0; // Establishes whether handicap is in no-adjustment range

    var calculatedHandicap;
    var upwardAdjustment = 0;
    var downwardAdjustment = 0;

    if (useBaseHandicap) {
        // Assigns no-adjustment handicap
        calculatedHandicap = selectedGlider.baseHandicap;
    } else if (remainder > 0) {
        // Calculates and assigns increased handicap
        upwardAdjustment = Math.ceil(remainder / 10) * 0.004;
        calculatedHandicap = selectedGlider.baseHandicap + upwardAdjustment;
    } else if (!useBaseHandicap) {
        // Calculates decreaased handicap
        downwardAdjustment = Math.ceil(remainder / 10) * -0.003;
    }

    if (downwardAdjustment >= 0.006) {
        // Sets lower handicap limit
        calculatedHandicap = selectedGlider.baseHandicap - 0.006;
    } else {
        // Assigns decreased handicap
        calculatedHandicap = selectedGlider.baseHandicap - downwardAdjustment;
    }

    console.log(calculatedHandicap.toFixed(3));
}
