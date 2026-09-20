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


    let plans = {

    "goa": [
        ["🏨 Hotel check-in", "📍 Baga Beach", "🌊 Beach activities", "🍽️ Dinner at a beach restaurant"],
        ["🌴 Calangute Beach", "🏛️ Aguada Fort", "🛍️ Shopping at local markets", "🌅 Sunset at Anjuna Beach"],
        ["🚤 Water sports", "🏖️ Candolim Beach", "🍴 Local Goan lunch", "🎶 Evening at a beach shack"],
        ["⛪ Basilica of Bom Jesus", "🏛️ Old Goa sightseeing", "🛍️ Panjim market", "🌃 Evening walk at Miramar Beach"],
        ["🌅 Sunrise at Vagator", "📸 Chapora Fort", "🍽️ Lunch", "🚗 Return / Departure"]
    ],

    "mumbai": [
        ["🏨 Hotel check-in", "📍 Gateway of India", "⛴️ Marine Drive", "🍽️ Dinner at Colaba"],
        ["🏛️ CSMVS Museum", "📸 Chhatrapati Shivaji Maharaj Terminus", "🛍️ Colaba Causeway", "🌅 Marine Drive sunset"],
        ["🛕 Siddhivinayak Temple", "🌳 Hanging Gardens", "🍴 Local Mumbai lunch", "🌃 Bandra-Worli Sea Link"],
        ["🏖️ Juhu Beach", "🛍️ Linking Road", "🍿 Street food", "🌆 Bandra sightseeing"],
        ["☕ Breakfast", "🛍️ Last-minute shopping", "📸 Visit favourite place", "🚗 Departure"]
    ],

    "manali": [
        ["🏨 Hotel check-in", "🌲 Mall Road", "🏞️ Hadimba Temple", "🌙 Evening walk"],
        ["🏔️ Solang Valley", "🚠 Cable car / adventure activities", "🍴 Mountain lunch", "🔥 Evening at hotel"],
        ["🌊 Beas River", "🌲 Van Vihar", "🛍️ Local shopping", "🍽️ Dinner"],
        ["🏔️ Rohtang / Atal Tunnel area", "📸 Snow activities", "☕ Café visit", "🌅 Scenic sunset"],
        ["☕ Breakfast", "🛍️ Last-minute shopping", "📸 Photography", "🚗 Departure"]
    ],

    "jaipur": [
        ["🏨 Hotel check-in", "🏰 Amber Fort", "🏛️ Jal Mahal", "🌃 Evening market"],
        ["🏛️ City Palace", "🔭 Jantar Mantar", "🛍️ Johari Bazaar", "🍽️ Rajasthani dinner"],
        ["🏯 Hawa Mahal", "🏛️ Albert Hall Museum", "🌳 Ram Niwas Garden", "🌆 Evening walk"],
        ["🏰 Nahargarh Fort", "📸 City views", "🛍️ Local shopping", "🍴 Traditional food"],
        ["☕ Breakfast", "🛍️ Souvenir shopping", "📸 Final sightseeing", "🚗 Departure"]
    ],

    "delhi": [
        ["🏨 Hotel check-in", "🏛️ India Gate", "🏛️ Rashtrapati Bhavan area", "🌃 Evening walk"],
        ["🕌 Red Fort", "🕌 Jama Masjid", "🛍️ Chandni Chowk", "🍽️ Local Delhi food"],
        ["🪷 Lotus Temple", "🛕 Akshardham Temple", "🌳 Lodhi Garden", "🌆 Evening sightseeing"],
        ["🏛️ Qutub Minar", "🏛️ Humayun's Tomb", "🛍️ Local market", "🍴 Dinner"],
        ["☕ Breakfast", "🛍️ Last-minute shopping", "📸 Favourite place", "🚗 Departure"]
    ]
};


let destinationKey = destination.toLowerCase().trim();

let selectedPlan = plans[destinationKey];


for (let day = 1; day <= days; day++) {

    let activities;

    if (selectedPlan) {

        activities =
            selectedPlan[(day - 1) % selectedPlan.length];

    } else {

        activities = [
            `📍 Explore popular places in ${destination}`,
            `🌄 Enjoy ${travelType.toLowerCase()} activities`,
            `🍽️ Try local food`,
            `📸 Capture memorable moments`
        ];
    }


    itinerary += `
        <div class="day-plan">

            <h3>📅 Day ${day}</h3>

            <ul>
                ${activities.map(activity =>
                    `<li>${activity}</li>`
                ).join("")}
            </ul>

        </div>
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
