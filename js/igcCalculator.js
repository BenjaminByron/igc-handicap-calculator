


// TODO something


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


    var pilotAndGlider = flyingWeight(gliderWeight, pilotWeight); // Calculate glider's takeoff weight

    var remainder = calculateRemainder(pilotAndGlider, referenceMass); // Number of kg over (+ve) or under (-ve) reference mass

console.log(remainder)    

    var useBaseHandicap = remainder > -10 && remainder <= 0; // Establishes whether handicap is in no-adjustment range

    var calculatedHandicap;
    var upwardAdjustment = 0;
    var downwardAdjustment = 0;

    if (useBaseHandicap) {
        // Assigns no-adjustment handicap
        calculatedHandicap = parseFloat(selectedGlider['handicap'], 10);
    } else if (remainder > 0) {
        // Calculates and assigns increased handicap
        upwardAdjustment = Math.ceil(remainder / 10) * 0.004;
        calculatedHandicap = ((parseFloat(selectedGlider['handicap'], 10) + upwardAdjustment));

console.log(calculatedHandicap)

    } else if (!useBaseHandicap) {
        // Calculates decreaased handicap
        downwardAdjustment = Math.ceil(remainder / 10) * -0.003;
    }
    console.log(calculatedHandicap)


    if (downwardAdjustment >= 0.006) {
        // Sets lower handicap limit
        calculatedHandicap = parseFloat(selectedGlider['handicap'], 10) - 0.006;
    } else {
        // Assigns decreased handicap
        calculatedHandicap = parseFloat(selectedGlider['handicap'], 10) - downwardAdjustment;
    }

    console.log(calculatedHandicap)


    if (winglets === "true") {
        // Adjusts base handicap for winglets, if applicable
        calculatedHandicap += 0.004;
    }
    document.getElementById('calculated-handicap').innerHTML=(Math.round(calculatedHandicap * 100) / 100).toFixed(3);


    console.log(calculatedHandicap.toFixed(3));
}
