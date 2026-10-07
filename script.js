function startAssessment() {
    document.getElementById("assessment").scrollIntoView({
        behavior: "smooth"
    });
}
function calculateRisk() {
        const questions = ["q1", "q2", "q3", "q4", "q5"];

    for (let question of questions) {
        if (!document.querySelector(`input[name="${question}"]:checked`)) {
            alert("Please answer all questions before calculating your risk.");
            return;
        }
    }

    let score = 0;

    // Question 1: Reusing passwords
    if (document.querySelector('input[name="q1"]:checked')?.value === "yes") {
        score += 20;
    }

    // Question 2: No 2FA
    if (document.querySelector('input[name="q2"]:checked')?.value === "no") {
        score += 20;
    }

    // Question 3: Clicking unknown links
    if (document.querySelector('input[name="q3"]:checked')?.value === "yes") {
        score += 20;
    }

    // Question 4: Public Wi-Fi without VPN
    if (document.querySelector('input[name="q4"]:checked')?.value === "yes") {
        score += 20;
    }

    // Question 5: Not updating apps
    if (document.querySelector('input[name="q5"]:checked')?.value === "no") {
        score += 20;
    }

    let riskLevel;
    let message;

    if (score <= 20) {
        riskLevel = "LOW RISK 🟢";
        message = "Great! Your cybersecurity habits are looking strong.";
    } 
    else if (score <= 60) {
        riskLevel = "MODERATE RISK 🟡";
        message = "You're doing some things right, but there are areas you should improve.";
    } 
    else {
        riskLevel = "HIGH RISK 🔴";
        message = "Your digital habits could put you at greater cybersecurity risk.";
    }

    document.getElementById("result").innerHTML = `
        <h2>Your Cyber Risk Score</h2>
        <div class="score">${score}/100</div>

<div class="risk-bar">
    <div class="risk-fill" style="width: ${score}%"></div>
</div>
        <h3>${riskLevel}</h3>
        <p>${message}</p>
    `;

    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });
}