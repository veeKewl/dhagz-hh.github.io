function calculate() {	
	// Checkbox if checked
	var gmChecked = document.getElementById("GM").checked;
	var honeyChecked = document.getElementById("Honey").checked;
	var hcChecked = document.getElementById("HCharm").checked;
	var rcChecked = document.getElementById("RCharm").checked;
	var sChecked = document.getElementById("Shiny").checked;

	// Value
    var encounterInput = parseInt(document.getElementById("encounterInput").value);

    // Encounter Rates
    var LEGENDARY = 0.999992;
	var SHINY = 0.999999999;
	var SGM = 0.9999999985;
	var SH = 0.9999999988;
	var SHGM = 0.9999999979;
	var SHC = 0.9999999988;
	var SRC = 0.9999999989;
	var SGMHC = 0.9999999978;
	var SGMRC = 0.9999999984;
	var SHHC = 0.9999999985;
	var SHRC = 0.9999999985;
	var SHGMRC = 0.999999998;
	var SHGMHC = 0.9999999978;
    var GM = 0.999988;
    var HONEY = 0.99999;
	var RCHARM = 0.9999912;
	var HCHARM = 0.9999903999;
	var RCHARMGM = 0.9999867999;
	var RCHARMHONEY = 0.999989;
    var GMHONEY = 0.9999849998;
	var EIHONEY = 0.999988;
	var HCGM = 0.9999855999;
	var HCHONEY = 0.9999879998;
	var GMHONEI = 0.9999819998;
	var GMHONRCHARM = 0.9999835;
	var GMHONHC = 0.9999819998;

	// HONEY
	if (honeyChecked && !gmChecked && !hcChecked && !rcChecked && !sChecked) {
		return returnOutput(calculateRate(HONEY, encounterInput))
		
	// SHINY
	} else if (sChecked && !honeyChecked && !gmChecked && !hcChecked && !rcChecked) {
		return returnOutput(calculateRate(SHINY, encounterInput))

	// GM
	} else if (gmChecked && !honeyChecked && !hcChecked && !rcChecked && !sChecked) {
		return returnOutput(calculateRate(GM, encounterInput))

	// HCHARM
	} else if (hcChecked && !honeyChecked && !gmChecked && !rcChecked && !sChecked) {
		return returnOutput(calculateRate(HCHARM, encounterInput))

	// RCHARM
	} else if (rcChecked && !hcChecked && !honeyChecked && !gmChecked && !sChecked) {
		return returnOutput(calculateRate(RCHARM, encounterInput))

	// SHINY + HCHARM 
	} else if (!rcChecked && hcChecked && !honeyChecked && !gmChecked && sChecked) {
		return returnOutput(calculateRate(SHC, encounterInput))
		
	// SHINY + RCHARM 
	} else if (rcChecked && !hcChecked && !honeyChecked && !gmChecked && sChecked) {
		return returnOutput(calculateRate(SRC, encounterInput))

	// GM + SHINY
	} else if (!rcChecked && !hcChecked && !honeyChecked && gmChecked && sChecked) {
		return returnOutput(calculateRate(SGM, encounterInput))

	// GM + RCHARM
	} else if (rcChecked && !hcChecked && !honeyChecked && gmChecked && !sChecked) {
		return returnOutput(calculateRate(RCHARMGM, encounterInput))

	// GM + HONEY
	} else if (honeyChecked && gmChecked && !hcChecked && !rcChecked && !sChecked) {
		return returnOutput(calculateRate(GMHONEY, encounterInput))

	// GM + HCHARM
	} else if (gmChecked && hcChecked && !honeyChecked && !rcChecked && !sChecked) {
		return returnOutput(calculateRate(HCGM, encounterInput))

	// HONEY + SHINY
	} else if (!hcChecked && honeyChecked && !gmChecked && !rcChecked && sChecked) {
		return returnOutput(calculateRate(SH, encounterInput))
		
	// HONEY + RCHARM
	} else if (!hcChecked && honeyChecked && !gmChecked && rcChecked && !sChecked) {
		return returnOutput(calculateRate(RCHARMHONEY, encounterInput))

	// HONEY + HCHARM
	} else if (hcChecked && honeyChecked && !gmChecked && !rcChecked && !sChecked) {
		return returnOutput(calculateRate(HCHONEY, encounterInput))

	// INVALID  RCHARM + HCHARM
	} else if (hcChecked && rcChecked && !honeyChecked && !gmChecked && !sChecked) {
		document.getElementById("result").innerHTML="Choose 1 Item only";

	// INVALID  RCHARM + HCHARM + SHINY
	} else if (hcChecked && rcChecked && !honeyChecked && !gmChecked && sChecked) {
		document.getElementById("result").innerHTML="Choose 1 Item only";
	
	// INVALID  RCHARM + HCHARM + HONEY
	} else if (hcChecked && rcChecked && honeyChecked && !gmChecked && !sChecked) {
		document.getElementById("result").innerHTML="Choose 1 Item only";
		
	// INVALID  RCHARM + HCHARM + GM
	} else if (hcChecked && rcChecked && !honeyChecked && gmChecked && !sChecked) {
		document.getElementById("result").innerHTML="Choose 1 Item only";
		
	// INVALID HONEY + GM + HCHARM + RCHARM
	} else if (gmChecked && honeyChecked && hcChecked && rcChecked && !sChecked) {
		document.getElementById("result").innerHTML="Choose 1 Item only";
		
	// INVALID SHINY + GM + HCHARM + RCHARM
	} else if (gmChecked && !honeyChecked && hcChecked && rcChecked && sChecked) {
		document.getElementById("result").innerHTML="Choose 1 Item only";

	// INVALID SHINY + HONEY + HCHARM + RCHARM
	} else if (!gmChecked && honeyChecked && hcChecked && rcChecked && sChecked) {
		document.getElementById("result").innerHTML="Choose 1 Item only";

	// INVALID SHINY + HONEY + HCHARM + RCHARM + GM
	} else if (gmChecked && honeyChecked && hcChecked && rcChecked && sChecked) {
		document.getElementById("result").innerHTML="Choose 1 Item only";

	// HCHARM + GM + SHINY
	} else if (gmChecked && !honeyChecked && hcChecked && !rcChecked && sChecked) {
		return returnOutput(calculateRate(SGMHC, encounterInput))
		
	// RCHARM + GM + SHINY
	} else if (gmChecked && !honeyChecked && !hcChecked && rcChecked && sChecked) {
		return returnOutput(calculateRate(SGMRC, encounterInput))

	// HONEY + GM + SHINY
	} else if (gmChecked && honeyChecked && !hcChecked && !rcChecked && sChecked) {
		return returnOutput(calculateRate(SHGM, encounterInput))
		
	// SHINY + HONEY + HCHARM
	} else if (!gmChecked && honeyChecked && hcChecked && !rcChecked && sChecked) {
		return returnOutput(calculateRate(SHHC, encounterInput))
		
	// SHINY + HONEY + RCHARM
	} else if (!gmChecked && honeyChecked && !hcChecked && rcChecked && sChecked) {
		return returnOutput(calculateRate(SHRC, encounterInput))
		
	// HONEY + GM + RCHARM
	} else if (gmChecked && honeyChecked && !hcChecked && rcChecked && !sChecked) {
		return returnOutput(calculateRate(GMHONRCHARM, encounterInput))

	// HONEY + GM + HCHARM
	} else if (gmChecked && honeyChecked && hcChecked && !rcChecked && !sChecked) {
		return returnOutput(calculateRate(GMHONHC, encounterInput))
		
	// SHINY + HONEY + GM + RCHARM
	} else if (gmChecked && honeyChecked && !hcChecked && rcChecked && sChecked) {
		return returnOutput(calculateRate(SHGMRC, encounterInput))

	// SHINY + HONEY + GM + HCHARM
	} else if (gmChecked && honeyChecked && hcChecked && !rcChecked && sChecked) {
		return returnOutput(calculateRate(SHGMHC, encounterInput))

	// NORMAL
	} else if (!(gmChecked && honeyChecked && hcChecked && rcChecked && sChecked)) {
		return returnOutput(calculateRate(LEGENDARY, encounterInput))
	}
}

function calculateRate(val, first_number) {
	var value = (1 - Math.pow(val, first_number)) * 100;

	return value.toFixed(2);
}

function returnOutput(result) {
	if(!isNaN(result)) {
		return document.getElementById("result").innerHTML=result +"%"+" Chance!";
	} else {
		document.getElementById("result").innerHTML="Input your lle first!";
	}
}