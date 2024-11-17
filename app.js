// task 1

// Add a new document in collection "cities"
db.collection("teams")
  .doc("team1")
  .set({
    name: "Real Madrid",
    city: "Madrid",
    country: "Spain",
    top_scorers: ["Ronaldo", "Benzema", "Hazard"],
    fans: parseInt(798),
  });

db.collection("teams")
  .doc("team2")
  .set({
    name: "Barcelona",
    city: "Barcelona",
    country: "Spain",
    top_scorers: ["Messi", "Suarez", "Puyol"],
    fans: parseInt(738),
  });

db.collection("teams")
  .doc("team3")
  .set({
    name: "Manchester United",
    city: "Manchester",
    country: "England",
    top_scorers: ["Cantona", "Rooney", "Ronaldo"],
    fans: parseInt(755),
  });

db.collection("teams")
  .doc("team4")
  .set({
    name: "Manchester City",
    city: "Manchester",
    country: "England",
    top_scorers: ["Sterling", "Aguero", "Haaland"],
    fans: parseInt(537),
  });

db.collection("teams")
  .doc("team5")
  .set({
    name: "Brazil National Team",
    city: "Not applicable",
    country: "Brazil",
    top_scorers: ["Ronaldinho", "Cafu", "Bebeto"],
    fans: parseInt(950),
  });

db.collection("teams")
  .doc("team6")
  .set({
    name: "Argentina national team",
    city: "Not applicable",
    country: "Argentina",
    top_scorers: ["Messi", "Batistuta", "Maradona"],
    fans: parseInt(888),
  });

db.collection("teams")
  .doc("team7")
  .set({
    name: "Atletico Madrid",
    city: "Madrid",
    country: "Spain",
    top_scorers: ["Aragonés", "Griezmann", "Torez"],
    fans: parseInt(400),
  });

// task 2

// Q1

db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      let html = document.querySelector("#q1").innerHTML;
      html += `<p>No teams found</p>`;
      // console.log(html);
      document.querySelector("#q1").innerHTML = html;
      // console.log("no teams found");
      return;
    }
    // console.log(`${mydocs.length} teams found`);
    let html = document.querySelector("#q1").innerHTML;
    mydocs.forEach((d) => {
      // console.log(d.data().name);
      html += `<p>${d.data().name}</p>`;
      // console.log(html);
      document.querySelector("#q1").innerHTML = html;
    });

    // console.log(d.data());
  });

// Q2

db.collection("teams")
  .where("city", "==", "Madrid")
  .where("country", "==", "Spain")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      let html = document.querySelector("#q2").innerHTML;
      html += `<p>No teams found</p>`;
      // console.log(html);
      document.querySelector("#q2").innerHTML = html;
      // console.log("no teams found");
      return;
    }
    // console.log(`${mydocs.length} teams found`);
    let html = document.querySelector("#q2").innerHTML;
    mydocs.forEach((d) => {
      // console.log(d.data().name);
      html += `<p>${d.data().name}</p>`;
      // console.log(html);
      document.querySelector("#q2").innerHTML = html;
    });

    // console.log(d.data());
  });

// Q3

db.collection("teams")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    let html = document.querySelector("#q3").innerHTML;
    mydocs.forEach((d) => {
      if (d.data().name.toLowerCase().includes("national team")) {
        html += `<p>${d.data().name}</p>`;
        // console.log(html);
        document.querySelector("#q3").innerHTML = html;
      }
    });
  });

// Q4

db.collection("teams")
  .where("country", "!=", "Spain")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      let html = document.querySelector("#q4").innerHTML;
      html += `<p>No teams found</p>`;
      // console.log(html);
      document.querySelector("#q4").innerHTML = html;
      // console.log("no teams found");
      return;
    }
    // console.log(`${mydocs.length} teams found`);
    let html = document.querySelector("#q4").innerHTML;
    mydocs.forEach((d) => {
      // console.log(d.data().name);
      html += `<p>${d.data().name}</p>`;
      // console.log(html);
      document.querySelector("#q4").innerHTML = html;
    });

    // console.log(d.data());
  });

// Q5

db.collection("teams")
  .where("country", "not-in", ["Spain", "England"])
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      let html = document.querySelector("#q5").innerHTML;
      html += `<p>No teams found</p>`;
      // console.log(html);
      document.querySelector("#q5").innerHTML = html;
      // console.log("no teams found");
      return;
    }
    // console.log(`${mydocs.length} teams found`);
    let html = document.querySelector("#q5").innerHTML;
    mydocs.forEach((d) => {
      // console.log(d.data().name);
      html += `<p>${d.data().name}</p>`;
      // console.log(html);
      document.querySelector("#q5").innerHTML = html;
    });

    // console.log(d.data());
  });

// Q6

db.collection("teams")
  .where("country", "==", "Spain")
  .where("fans", ">", 700)
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      let html = document.querySelector("#q6").innerHTML;
      html += `<p>No teams found</p>`;
      // console.log(html);
      document.querySelector("#q6").innerHTML = html;
      // console.log("no teams found");
      return;
    }
    // console.log(`${mydocs.length} teams found`);
    let html = document.querySelector("#q6").innerHTML;
    mydocs.forEach((d) => {
      // console.log(d.data().name);
      html += `<p>${d.data().name}</p>`;
      // console.log(html);
      document.querySelector("#q6").innerHTML = html;
    });

    // console.log(d.data());
  });

// Q7

db.collection("teams")
  .where("fans", ">", 500)
  .where("fans", "<", 600)
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      let html = document.querySelector("#q7").innerHTML;
      html += `<p>No teams found</p>`;
      // console.log(html);
      document.querySelector("#q7").innerHTML = html;
      // console.log("no teams found");
      return;
    }
    // console.log(`${mydocs.length} teams found`);
    let html = document.querySelector("#q7").innerHTML;
    mydocs.forEach((d) => {
      // console.log(d.data().name);
      html += `<p>${d.data().name}</p>`;
      // console.log(html);
      document.querySelector("#q7").innerHTML = html;
    });

    // console.log(d.data());
  });

// Q8

db.collection("teams")
  .where("top_scorers", "array-contains", "Ronaldo")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      let html = document.querySelector("#q8").innerHTML;
      html += `<p>No teams found</p>`;
      // console.log(html);
      document.querySelector("#q8").innerHTML = html;
      // console.log("no teams found");
      return;
    }
    // console.log(`${mydocs.length} teams found`);
    let html = document.querySelector("#q8").innerHTML;
    mydocs.forEach((d) => {
      // console.log(d.data().name);
      html += `<p>${d.data().name}</p>`;
      // console.log(html);
      document.querySelector("#q8").innerHTML = html;
    });

    // console.log(d.data());
  });

// Q9

db.collection("teams")
  .where("top_scorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      let html = document.querySelector("#q9").innerHTML;
      html += `<p>No teams found</p>`;
      // console.log(html);
      document.querySelector("#q9").innerHTML = html;
      // console.log("no teams found");
      return;
    }
    // console.log(`${mydocs.length} teams found`);
    let html = document.querySelector("#q9").innerHTML;
    mydocs.forEach((d) => {
      // console.log(d.data().name);
      html += `<p>${d.data().name}</p>`;
      // console.log(html);
      document.querySelector("#q9").innerHTML = html;
    });

    // console.log(d.data());
  });

// task 3

// updating data

// part A

db.collection("teams")
  .doc("team1")
  .update({
    name: "Real Madrid FC",
    fans: parseInt(811),
  });

db.collection("teams")
  .doc("team2")
  .update({
    name: "FC Barcelona",
    fans: parseInt(747),
  });

db.collection("teams")
  .doc("team1")
  .update({
    top_scorers: firebase.firestore.FieldValue.arrayUnion("Crispo"),
  });

db.collection("teams")
  .doc("team1")
  .update({
    top_scorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
  });

db.collection("teams")
  .doc("team2")
  .update({
    top_scorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
  });

db.collection("teams")
  .doc("team2")
  .update({
    top_scorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
  });

// part B

db.collection("teams")
  .doc("team1")
  .update({
    color: {
      home: "White",
      away: "Black",
    },
  });

db.collection("teams")
  .doc("team2")
  .update({
    color: {
      home: "Red",
      away: "Gold",
    },
  });

db.collection("teams").doc("team1").update({
  "color.away": "Purple",
});

db.collection("teams").doc("team2").update({
  "color.away": "Pink",
});
