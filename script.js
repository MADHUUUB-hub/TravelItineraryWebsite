let currentTrip = null;


function showPlanner() {
    document.getElementById("planner").style.display = "block";

    document.getElementById("planner").scrollIntoView({
        behavior: "smooth"
    });
}


function generateItinerary() {

    let destination =
        document.getElementById("destination").value;

    let days =
        parseInt(document.getElementById("days").value);

    let travellers =
        parseInt(document.getElementById("travellers").value);

    let budget =
        parseFloat(document.getElementById("budget").value);

    let travelType =
        document.getElementById("travelType").value;

    let accommodation =
        document.getElementById("accommodation").value;


    if (
        destination === "" ||
        isNaN(days) ||
        isNaN(travellers) ||
        isNaN(budget)
    ) {
        alert("Please fill all the details!");
        return;
    }


    if (days < 1 || travellers < 1 || budget <= 0) {
        alert("Please enter valid numbers!");
        return;
    }


    let itinerary = "";

    itinerary += `
        <h3>🌍 ${destination} Trip</h3>

        <p><b>Number of Days:</b> ${days}</p>
        <p><b>Travellers:</b> ${travellers}</p>
        <p><b>Budget:</b> ₹${budget}</p>
        <p><b>Travel Type:</b> ${travelType}</p>
        <p><b>Accommodation:</b> ${accommodation}</p>

        <hr>

        <h3>📅 Day-wise Itinerary</h3>
    `;


    for (let day = 1; day <= days; day++) {

        itinerary += `
            <p>
                <b>Day ${day}:</b>
                Explore ${destination} and enjoy
                ${travelType.toLowerCase()} activities.
            </p>
        `;
    }


    itinerary += `
        <hr>

        <h3>💰 Trip Summary</h3>

        <p>
            Your planned trip is for
            <b>${travellers} traveller(s)</b>
            for <b>${days} day(s)</b>.
        </p>

        <p>
            Accommodation selected:
            <b>${accommodation}</b>
        </p>

        <p>
            Total Budget:
            <b>₹${budget}</b>
        </p>

        <p>
            Have a safe and enjoyable trip! ✈️
        </p>
    `;


    document.getElementById("itineraryOutput").innerHTML =
        itinerary;

    document.getElementById("result").style.display =
        "block";

    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });


    // Store current trip
    currentTrip = {
        destination: destination,
        days: days,
        travellers: travellers,
        budget: budget,
        travelType: travelType,
        accommodation: accommodation,
        itinerary: itinerary
    };
}


function saveTrip() {

    if (currentTrip === null) {
        alert("Please generate an itinerary first!");
        return;
    }


    let savedTrips =
        JSON.parse(localStorage.getItem("savedTrips")) || [];


    savedTrips.push(currentTrip);


    localStorage.setItem(
        "savedTrips",
        JSON.stringify(savedTrips)
    );


    alert("Trip saved successfully! ✓");
}