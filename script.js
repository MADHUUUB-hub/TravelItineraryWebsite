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
    [
        "🏨 Hotel check-in",
        "📍 Baga Beach",
        "🌊 Relax and enjoy the beach",
        "🌅 Watch the sunset at Baga",
        "🍽️ Dinner at a beach shack"
    ],

    [
        "🏛️ Visit Aguada Fort",
        "🏖️ Explore Candolim Beach",
        "🍴 Have a Goan lunch",
        "📸 Visit Sinquerim Beach",
        "🌅 Sunset at Candolim"
    ],

    [
        "⛪ Visit Basilica of Bom Jesus",
        "⛪ Visit Se Cathedral",
        "📍 Explore Old Goa",
        "🚶 Walk around Panjim",
        "🍽️ Try traditional Goan food"
    ],

    [
        "🌴 Visit Anjuna Beach",
        "🛍️ Explore Anjuna Flea Market",
        "📸 Visit Vagator Beach",
        "🏰 Explore Chapora Fort",
        "🌅 Watch sunset from Chapora"
    ],

    [
        "🚤 Enjoy water sports",
        "🏖️ Visit Calangute Beach",
        "🏄 Try parasailing / water activities",
        "🍴 Beachside lunch",
        "🌙 Evening beach walk"
    ],

    [
        "🌿 Explore Dudhsagar Waterfalls",
        "🚙 Enjoy a scenic journey",
        "📸 Nature photography",
        "🌳 Explore the surrounding forest area",
        "🍽️ Relax and have dinner"
    ],

    [
        "☀️ Relaxing breakfast",
        "🛍️ Last-minute shopping",
        "📸 Visit your favourite Goa location",
        "🏖️ Spend time at the beach",
        "🚗 Check-out and departure"
    ]
],

"mumbai": [
    [
        "🏨 Hotel check-in",
        "📍 Gateway of India",
        "⛴️ Explore the waterfront",
        "🏛️ Visit Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
        "🌅 Sunset at Marine Drive"
    ],

    [
        "🏛️ Visit Chhatrapati Shivaji Maharaj Terminus",
        "📸 Explore Fort area",
        "🛍️ Shopping at Colaba Causeway",
        "🍴 Try famous Mumbai street food",
        "🌃 Evening walk at Marine Drive"
    ],

    [
        "🛕 Visit Siddhivinayak Temple",
        "🌳 Explore Hanging Gardens",
        "🌊 Visit Girgaon Chowpatty",
        "🍦 Try local snacks",
        "🌆 Evening sightseeing"
    ],

    [
        "🏖️ Visit Juhu Beach",
        "🍽️ Try Juhu street food",
        "📸 Explore Bandra",
        "🌉 Drive across Bandra-Worli Sea Link",
        "🌅 Sunset at Bandra Bandstand"
    ],

    [
        "🏛️ Visit Dr. Bhau Daji Lad Museum",
        "🌳 Relax at Jijamata Udyaan",
        "🛍️ Explore local markets",
        "☕ Visit a Mumbai café",
        "🌃 Explore South Mumbai at night"
    ],

    [
        "🎬 Explore Bollywood areas",
        "📍 Visit Bandra streets",
        "🛍️ Shopping at Linking Road",
        "🍴 Have a traditional Mumbai lunch",
        "🌅 Evening at Carter Road"
    ],

    [
        "☀️ Relaxing breakfast",
        "🛍️ Last-minute shopping",
        "📸 Visit your favourite Mumbai location",
        "🌊 Final visit to the sea",
        "🚗 Check-out and departure"
    ]
],

   "manali": [
    [
        "🏨 Hotel check-in",
        "🌲 Explore Mall Road",
        "🛕 Visit Hadimba Temple",
        "🌳 Walk through Van Vihar",
        "🌙 Evening at Mall Road"
    ],

    [
        "🏔️ Visit Solang Valley",
        "🚠 Enjoy cable car / ropeway",
        "🏂 Try adventure activities",
        "🍴 Have lunch with mountain views",
        "🌅 Return to Manali in the evening"
    ],

    [
        "🌊 Visit Beas River",
        "🌲 Explore nearby nature trails",
        "📸 Photography at scenic viewpoints",
        "☕ Visit a local café",
        "🔥 Relaxing evening at the hotel"
    ],

    [
        "🏔️ Visit Atal Tunnel",
        "🏞️ Explore Sissu Valley",
        "📸 Mountain photography",
        "🍴 Enjoy local food",
        "🌅 Watch the sunset"
    ],

    [
        "🏛️ Visit Manu Temple",
        "🌲 Explore Old Manali",
        "🛍️ Shop for local handicrafts",
        "☕ Café hopping",
        "🌙 Evening walk through Old Manali"
    ],

    [
        "🏔️ Explore Naggar",
        "🏰 Visit Naggar Castle",
        "🎨 Visit the Nicholas Roerich Art Gallery",
        "🌄 Enjoy Himalayan views",
        "🍽️ Dinner at a local restaurant"
    ],

    [
        "☀️ Relaxing breakfast",
        "🛍️ Last-minute shopping",
        "📸 Visit your favourite mountain viewpoint",
        "☕ Enjoy a final café visit",
        "🚗 Check-out and departure"
    ]
],
    ],

    "jaipur": [
    [
        "🏨 Hotel check-in",
        "🏰 Visit Amber Fort",
        "💧 Stop at Jal Mahal",
        "🛍️ Explore local markets",
        "🍽️ Enjoy a traditional Rajasthani dinner"
    ],

    [
        "🏛️ Visit City Palace",
        "🔭 Explore Jantar Mantar",
        "📸 Visit Hawa Mahal",
        "🛍️ Shop at Johari Bazaar",
        "🌃 Evening walk through the old city"
    ],

    [
        "🏰 Visit Nahargarh Fort",
        "📸 Enjoy panoramic Jaipur views",
        "🌳 Relax at Ram Niwas Garden",
        "🏛️ Visit Albert Hall Museum",
        "🍴 Try local Rajasthani food"
    ],

    [
        "🏯 Visit Jaigarh Fort",
        "🏰 Explore its historic structures",
        "📸 Photography at the fort",
        "☕ Relax at a local café",
        "🌅 Watch the evening sunset"
    ],

    [
        "🛕 Visit Birla Mandir",
        "🏛️ Explore the old city",
        "🛍️ Shopping for handicrafts",
        "🍽️ Try Dal Baati Churma",
        "🌃 Evening market visit"
    ],

    [
        "🌸 Explore Sisodia Rani Garden",
        "🏛️ Visit Gaitore Ki Chhatriyan",
        "📸 Photography",
        "☕ Café break",
        "🛍️ Local shopping"
    ],

    [
        "☀️ Relaxing breakfast",
        "🛍️ Last-minute shopping",
        "📸 Visit your favourite Jaipur location",
        "🍴 Have a final Rajasthani meal",
        "🚗 Check-out and departure"
    ]
],

  "delhi": [
    [
        "🏨 Hotel check-in",
        "🏛️ Visit India Gate",
        "🏛️ Explore Kartavya Path",
        "📸 Visit Rashtrapati Bhavan area",
        "🌃 Evening walk"
    ],

    [
        "🏰 Visit Red Fort",
        "🕌 Visit Jama Masjid",
        "🛍️ Explore Chandni Chowk",
        "🍴 Try famous Delhi street food",
        "🌃 Evening in Old Delhi"
    ],

    [
        "🏛️ Visit Qutub Minar",
        "🏛️ Explore Mehrauli Archaeological Park",
        "📸 Photography",
        "☕ Café break",
        "🍽️ Dinner at a local restaurant"
    ],

    [
        "🪷 Visit Lotus Temple",
        "🛕 Visit Akshardham Temple",
        "🌳 Relax at Lodhi Garden",
        "📸 Explore nearby monuments",
        "🌆 Evening sightseeing"
    ],

    [
        "🏛️ Visit Humayun's Tomb",
        "🏛️ Explore Purana Qila",
        "🚣 Enjoy boating nearby",
        "🍴 Try local Delhi food",
        "🌃 Evening walk"
    ],

    [
        "🛍️ Explore Dilli Haat",
        "🎨 Shop for traditional handicrafts",
        "🍽️ Try food from different regions",
        "☕ Visit a local café",
        "🌆 Explore Connaught Place"
    ],

    [
        "☀️ Relaxing breakfast",
        "🛍️ Last-minute shopping",
        "📸 Visit your favourite Delhi location",
        "🍴 Have a final Delhi meal",
        "🚗 Check-out and departure"
    ]
],
};


let destinationKey = destination.toLowerCase().trim();

let selectedPlan = plans[destinationKey];


for (let day = 1; day <= days; day++) {

    let activities;

    if (selectedPlan) {

       if (day <= selectedPlan.length) {

    activities = selectedPlan[day - 1];

} else {

    activities = [
        `📍 Explore another popular place in ${destination}`,
        `🎯 Enjoy more ${travelType.toLowerCase()} activities`,
        `🍽️ Try another local food experience`,
        `📸 Explore and capture new memories`
    ];

}

   } else {

    let extraDay = day - selectedPlan.length;

    if (extraDay === 1) {

        activities = [
            `🏞️ Explore a hidden attraction in ${destination}`,
            `📸 Visit a scenic viewpoint`,
            `🍽️ Try a local speciality`,
            `🌅 Enjoy the evening at a peaceful location`
        ];

    } else if (extraDay === 2) {

        activities = [
            `🚶 Explore the local streets of ${destination}`,
            `🛍️ Visit a famous local market`,
            `☕ Relax at a popular café`,
            `🌃 Enjoy the city's nightlife`
        ];

    } else {

        activities = [
            `🌄 Explore another nearby attraction`,
            `🎯 Try a new ${travelType.toLowerCase()} activity`,
            `🍴 Have a local food experience`,
            `📸 Capture your final travel memories`
        ];

    }

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
