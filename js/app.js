function clicked() {
    alert('clicked');

    var form = document.getElementById("form-id");
    console.log(form);
}


function getSelectedCheckboxValues(maintenance) {
    // const checkboxes = document.querySelectorAll(`input[name="${maintenance}"]:checked`);
    const checkboxes = document.querySelectorAll('input[name="maintenance"]:checked').length;
    let values;
    values = checkboxes;
    return values;
}

function selectOnlyone(id) {

    for (var i = 1; i <= 3; i++) {
        document.getElementById(i).checked = false;
    }
    document.getElementById(id).checked = true;

    // some variables::
    var cpuPrice = 5000;
    var cpuRequired = 0;
    var cpuCost;
    var numberofUsers;
    var LicenseTotal;
    var A1License, A2License, A3License, A4License, A5License, A6License;
    var maintenanceFee;
    var maintenanceFeeoverCustomization;
    var cpuMaintenanceFee;
    var A1 = 100;
    var A2 = 150;
    var A3 = 300;
    var A4 = 5000;
    var A5 = 4000;
    var A6 = 3000;
    var productAMaintenceRate = 15 / 100;
    var maintenanceYears;
    var disasterRecovery;
    var FinalProductLicense;
    var HardWareCosts;
    var totalOwnerShipCosts;

    //displaying of elements:
    var checkBox = document.getElementById("1");
    var checkBox1 = document.getElementById("2");
    var checkBox2 = document.getElementById("3");
    var customizationFee = document.getElementById("customizationfee").value;
    maintenanceYears = getSelectedCheckboxValues('maintenance');
    console.log(maintenanceYears);

    // Get the output
    var cpusRequired = document.getElementById("cpusRequired");

    // If the checkbox is checked, display the divs::
    if (checkBox.checked == true) {
        // let us perform some validation checks>>>>
        if (customizationFee == null || customizationFee == "") {
            window.alert("Customization fee must be entered to facilitate computation of the total costs");
            return false;
        } else if (maintenanceYears = 0) {
            window.alert("Range of years of maintenance msu be clicked to facilitate computation of the total costs");
            return false;
        } else {
            cpusRequired.style.display = "block";

            //display the customization Amount
            console.log("customization feee is:: " + customizationFee);

            // calculate the number of CPUS and the cost and display them on the displayed fields::

            // number of users:
            numberofUsers = 300;

            // assign value to cpurequired::
            cpuRequired = 2;
            //log number of CPUs required::
            console.log("cpu required is " + cpuRequired);
            // calculate the total::
            cpuCost = (cpuRequired * cpuPrice);

            // calculate the maintenance fee of the cpus::
            cpuMaintenanceFee = (((10 / 100) * cpuCost) * 4);
            console.log(cpuMaintenanceFee);

            // calculate the total licenceFee users per cpus of production env
            A1License = (A1 * numberofUsers);
            A2License = (A2 * numberofUsers);
            A3License = (A3 * numberofUsers);
            A4License = (A4 * cpuRequired);
            A5License = (A5 * cpuRequired);
            A6License = (A6 * cpuRequired);

            // calculate the maintenance fee on customization
            maintenanceYears = getSelectedCheckboxValues('maintenance');
            console.log(maintenanceYears);
            maintenanceFeeoverCustomization = ((productAMaintenceRate * customizationFee) * (maintenanceYears));
            console.log(productAMaintenceRate);
            console.log(maintenanceFeeoverCustomization);

            // production env license: = A-USERS + CPUS COSTS
            LicenseTotal = ((A1License + A2License + A3License + A4License + A5License + A6License) + (cpuCost));

            // calculate disaster recovery licence >> 30% of production env
            disasterRecovery = ((30 / 100) * (LicenseTotal));

            //calculate annual 18% maintenance fee over final product license fee::
            FinalProductLicense = LicenseTotal + disasterRecovery;
            maintenanceFee = (maintenanceYears * ((18 / 100) * (FinalProductLicense)));


            // calculate total hardware costs

            // total number of production cpus as per users is 2
            // so we take the cost of cpus and multiply by 2 to cater for both prod & disaster recovery env::

            HardWareCosts = ((cpuCost + cpuMaintenanceFee) * 2);



            // compute the TCO:
            totalOwnerShipCosts = cpuCost + FinalProductLicense + maintenanceFeeoverCustomization + cpuMaintenanceFee + HardWareCosts;

            // assign the value to the text field::
            document.getElementById('cpuTotal').value = cpuCost;
            document.getElementById('cpuRequired').value = cpuRequired;
            document.getElementById('LicenceAmount').value = FinalProductLicense;
            document.getElementById('maintenanceFeeCustomization').value = maintenanceFeeoverCustomization;
            document.getElementById('cpumaintenance').value = cpuMaintenanceFee;
            document.getElementById('DisasterRecovery').value = disasterRecovery;
            document.getElementById('totalHardwareCosts').value = HardWareCosts;
            document.getElementById('totalOwnerShipCosts').value = totalOwnerShipCosts;
        }

    } else if (checkBox1.checked == true) {
        // let us perform some validation checks>>>>
        if (customizationFee == null || customizationFee == "") {
            window.alert("Customization fee must be entered to facilitate computation of the total costs");
            return false;
        } else if (maintenanceYears = 0) {
            window.alert("Range of years of maintenance msu be clicked to facilitate computation of the total costs");
            return false;
        } else {
            cpusRequired.style.display = "block";


            // calculate the number of CPUS and the cost and display them on the displayed fields::
            // number of users:
            numberofUsers = 600;

            // assign value to cpurequired::
            cpuRequired = 4;

            //log number of CPUs required::
            console.log("cpu required is " + cpuRequired);

            // calculate the total::
            cpuCost = (cpuRequired * cpuPrice);

            // calculate the maintenance fee of the cpus::
            cpuMaintenanceFee = (((10 / 100) * cpuCost) * 4);
            console.log(cpuMaintenanceFee);

            // calculate the total licenceFee users per cpus
            A1License = (A1 * numberofUsers);
            A2License = (A2 * numberofUsers);
            A3License = (A3 * numberofUsers);
            A4License = (A4 * cpuRequired);
            A5License = (A5 * cpuRequired);
            A6License = (A6 * cpuRequired);

            // calculate the maintenance fee and add it to the total:
            maintenanceYears = getSelectedCheckboxValues('maintenance');
            console.log(maintenanceYears);
            maintenanceFeeoverCustomization = ((productAMaintenceRate * customizationFee) * (maintenanceYears));


            // production env license: = A-USERS + CPUS COSTS
            LicenseTotal = ((A1License + A2License + A3License + A4License + A5License + A6License) + (cpuCost));


            // calculate disaster recovery licence >> 30% of production env
            disasterRecovery = ((30 / 100) * (LicenseTotal));

            //calculate annual 18% maintenance fee over final product license fee::
            FinalProductLicense = LicenseTotal + disasterRecovery;
            maintenanceFee = (maintenanceYears * ((18 / 100) * (FinalProductLicense)));

            // calculate total hardware costs
            // total number of production cpus as per users is 2
            // so we take the cost of cpus and multiply by 2 to cater for both prod & disaster recovery env::

            HardWareCosts = ((cpuCost + cpuMaintenanceFee) * 2);

            // compute the TCO:
            totalOwnerShipCosts = cpuCost + FinalProductLicense + maintenanceFeeoverCustomization + cpuMaintenanceFee + HardWareCosts;


            // assign the value to the text field::
            document.getElementById('cpuTotal').value = cpuCost;
            document.getElementById('cpuRequired').value = cpuRequired;
            document.getElementById('LicenceAmount').value = FinalProductLicense;
            document.getElementById('maintenanceFeeCustomization').value = maintenanceFeeoverCustomization;
            document.getElementById('cpumaintenance').value = cpuMaintenanceFee;
            document.getElementById('DisasterRecovery').value = disasterRecovery;
            document.getElementById('totalHardwareCosts').value = HardWareCosts;
            document.getElementById('totalOwnerShipCosts').value = totalOwnerShipCosts;
        }

    } else if (checkBox2.checked == true) {
        // let us perform some validation checks>>>>
        if (customizationFee == null || customizationFee == "") {
            window.alert("Customization fee must be entered to facilitate computation of the total costs");
            return false;
        } else if (maintenanceYears = 0) {
            window.alert("Range of years of maintenance msu be clicked to facilitate computation of the total costs");
            return false;
        } else {
            cpusRequired.style.display = "block";

            // calculate the number of CPUS and the cost and display them on the displayed fields::

            // number of users:
            numberofUsers = 1000;
            // assign value to cpu-required::
            cpuRequired = 8;
            //log number of CPUs required::
            console.log("cpu required is " + cpuRequired);
            // calculate the total::
            cpuCost = (cpuRequired * cpuPrice);

            // calculate the total licenceFee users per cpus
            A1License = (A1 * numberofUsers);
            A2License = (A2 * numberofUsers);
            A3License = (A3 * numberofUsers);
            A4License = (A4 * cpuRequired);
            A5License = (A5 * cpuRequired);
            A6License = (A6 * cpuRequired);

            // calculate the maintenance fee of the cpus::
            cpuMaintenanceFee = (((10 / 100) * cpuCost) * 4);
            console.log(cpuMaintenanceFee);

            // calculate the maintenance fee and add it to the total:
            maintenanceYears = getSelectedCheckboxValues('maintenance');
            console.log(maintenanceYears);
            maintenanceFeeoverCustomization = ((productAMaintenceRate * customizationFee) * (maintenanceYears));

            // production env license: = A-USERS + CPUS COSTS
            LicenseTotal = ((A1License + A2License + A3License + A4License + A5License + A6License) + (cpuCost));


            // calculate disaster recovery licence >> 30% of production env
            disasterRecovery = ((30 / 100) * (LicenseTotal));

            //calculate annual 18% maintenance fee over final product license fee::
            FinalProductLicense = LicenseTotal + disasterRecovery;
            maintenanceFee = (maintenanceYears * ((18 / 100) * (FinalProductLicense)));

            // calculate total hardware costs
            // total number of production cpus as per users is 2
            // so we take the cost of cpus and multiply by 2 to cater for both prod & disaster recovery env::

            HardWareCosts = ((cpuCost + cpuMaintenanceFee) * 2);

            // compute the TCO:
            totalOwnerShipCosts = cpuCost + FinalProductLicense + maintenanceFeeoverCustomization + cpuMaintenanceFee + HardWareCosts;
            // assign the value to the text field::
            document.getElementById('cpuTotal').value = cpuCost;
            document.getElementById('cpuRequired').value = cpuRequired;
            document.getElementById('LicenceAmount').value = FinalProductLicense;
            document.getElementById('maintenanceFeeCustomization').value = maintenanceFeeoverCustomization;
            document.getElementById('cpumaintenance').value = cpuMaintenanceFee;
            document.getElementById('DisasterRecovery').value = disasterRecovery;
            document.getElementById('totalHardwareCosts').value = HardWareCosts;
            document.getElementById('totalOwnerShipCosts').value = totalOwnerShipCosts;
        }
    } else {
        text.style.display = "none";
    }

}

function calculateTCOB(id) {
    for (var i = 1; i <= 3; i++) {
        document.getElementById(i).checked = false;
    }
    document.getElementById(id).checked = true;

    // some variables::
    var numberofUsers;
    var LicenseTotal;
    var BlicenseFee = 350;
    var BSubscriptionFee = 300;
    var TotalAnnualSubscriptionFee;
    var AnnualSubscriptionFee;
    var cpuRequired;
    var cpuCost;
    var cpuPrice = 5000;
    var cpuMaintenanceFee;
    var FinalProductLicense;
    var HardWareCosts;
    var totalOwnerShipCosts;

    //displaying of elements:
    var checkBox = document.getElementById("1");
    var checkBox1 = document.getElementById("2");
    var checkBox2 = document.getElementById("3");
    // Get the output
    var cpusRequired = document.getElementById("cpusRequired");

    if (checkBox.checked == true) {
        cpusRequired.style.display = "block";

        // number of users:
        numberofUsers = 300;

        // assign value to cpurequired::
        cpuRequired = 2;
        //log number of CPUs required::
        console.log("cpu required is " + cpuRequired);
        // calculate the total::
        cpuCost = (cpuRequired * cpuPrice);


        // calculate the maintenance fee of the cpus::
        cpuMaintenanceFee = (((10 / 100) * cpuCost) * 4);
        console.log(cpuMaintenanceFee);

        // calulate the total license costs for B:
        LicenseTotal = ((numberofUsers * BlicenseFee) + (5 * (BSubscriptionFee * numberofUsers)));

        TotalAnnualSubscriptionFee = (5 * (BSubscriptionFee * numberofUsers));
        AnnualSubscriptionFee = (BSubscriptionFee * numberofUsers);

        // calculate hardware costs:
        HardWareCosts = (cpuCost + cpuMaintenanceFee);

        //compute TCO:
        totalOwnerShipCosts = HardWareCosts + LicenseTotal + TotalAnnualSubscriptionFee;

        // assign the value to the text field::
        document.getElementById('BLicenceAmount').value = LicenseTotal;
        document.getElementById('AnnualSubscriptionFee').value = AnnualSubscriptionFee;
        document.getElementById('TotalAnnualSubscriptionFee').value = TotalAnnualSubscriptionFee;
        document.getElementById('cpuTotal').value = cpuCost;
        document.getElementById('cpuRequired').value = cpuRequired;
        document.getElementById('cpumaintenance').value = cpuMaintenanceFee;
        document.getElementById('totalHardwareCosts').value = HardWareCosts;
        document.getElementById('totalOwnerShipCosts').value = totalOwnerShipCosts;

    } else if (checkBox1.checked == true) {
        // number of users:
        numberofUsers = 600;

        // assign value to cpurequired::
        cpuRequired = 6;
        //log number of CPUs required::
        console.log("cpu required is " + cpuRequired);
        // calculate the total::
        cpuCost = (cpuRequired * cpuPrice);

        // calculate the maintenance fee of the cpus::
        cpuMaintenanceFee = (((10 / 100) * cpuCost) * 4);
        console.log(cpuMaintenanceFee);

        // calulate the total license costs for B:
        LicenseTotal = ((numberofUsers * BlicenseFee) + (5 * (BSubscriptionFee * numberofUsers)));

        TotalAnnualSubscriptionFee = (5 * (BSubscriptionFee * numberofUsers));
        AnnualSubscriptionFee = (BSubscriptionFee * numberofUsers);

        // calculate hardware costs:
        HardWareCosts = (cpuCost + cpuMaintenanceFee);

        //compute TCO:
        totalOwnerShipCosts = HardWareCosts + LicenseTotal + TotalAnnualSubscriptionFee;

        // assign the value to the text field::
        document.getElementById('BLicenceAmount').value = LicenseTotal;
        document.getElementById('AnnualSubscriptionFee').value = AnnualSubscriptionFee;
        document.getElementById('TotalAnnualSubscriptionFee').value = TotalAnnualSubscriptionFee;
        document.getElementById('cpuTotal').value = cpuCost;
        document.getElementById('cpuRequired').value = cpuRequired;
        document.getElementById('cpumaintenance').value = cpuMaintenanceFee;
        document.getElementById('totalHardwareCosts').value = HardWareCosts;
        document.getElementById('totalOwnerShipCosts').value = totalOwnerShipCosts;

        // assign the value to the text field::
        document.getElementById('BLicenceAmount').value = LicenseTotal;
    } else if (checkBox2.checked == true) {
        // number of users:
        numberofUsers = 1000;

        // assign value to cpurequired::
        cpuRequired = 8;
        //log number of CPUs required::
        console.log("cpu required is " + cpuRequired);
        // calculate the total::
        cpuCost = (cpuRequired * cpuPrice);

        // calculate the maintenance fee of the cpus::
        cpuMaintenanceFee = (((10 / 100) * cpuCost) * 4);
        console.log(cpuMaintenanceFee);


        // calulate the total license costs for B:
        LicenseTotal = ((numberofUsers * BlicenseFee) + (5 * (BSubscriptionFee * numberofUsers)));

        TotalAnnualSubscriptionFee = (5 * (BSubscriptionFee * numberofUsers));
        AnnualSubscriptionFee = (BSubscriptionFee * numberofUsers);

        // calculate hardware costs:
        HardWareCosts = (cpuCost + cpuMaintenanceFee);

        //compute TCO:
        totalOwnerShipCosts = HardWareCosts + LicenseTotal + TotalAnnualSubscriptionFee;

        // assign the value to the text field::
        document.getElementById('BLicenceAmount').value = LicenseTotal;
        document.getElementById('AnnualSubscriptionFee').value = AnnualSubscriptionFee;
        document.getElementById('TotalAnnualSubscriptionFee').value = TotalAnnualSubscriptionFee;
        document.getElementById('cpuTotal').value = cpuCost;
        document.getElementById('cpuRequired').value = cpuRequired;
        document.getElementById('cpumaintenance').value = cpuMaintenanceFee;
        document.getElementById('totalHardwareCosts').value = HardWareCosts;
        document.getElementById('totalOwnerShipCosts').value = totalOwnerShipCosts;
        // assign the value to the text field::
        document.getElementById('BLicenceAmount').value = LicenseTotal;
    }
}


function CalulateTCOC(id) {
    // some variables::
    var LicenseTotal;

    //displaying of elements:
    var customizationFee = document.getElementById("customizationfee").value;
    var subscriptionfee = document.getElementById("subscriptionfee").value;

    LicenseTotal = ((subscriptionfee * 5) + (customizationFee));

    // assign the value to the text field::
    document.getElementById('LicenceAmount').value = LicenseTotal;
    document.getElementById('maintenanceFeeCustomization').value = 0.00;

}

function CalcluateDisasterRecovery(id) {
    // Get the output
    var LicenseFee = document.getElementById("BLicenceAmount").value;
    console.log(LicenseFee);

    if (LicenseFee == "") {
        console.log("Box is empty");
        alert("empty");
    } else {
        // calulate the disaster recovery costs and bubdle it to the license fee::

    }
}