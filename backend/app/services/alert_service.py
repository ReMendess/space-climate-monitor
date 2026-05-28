def generate_alerts(data):

    alerts = []

    if data["temperature"] > 40:
        alerts.append(
            "Extreme temperature detected."
        )

    if data["fire_risk"] == "High":
        alerts.append(
            "High wildfire risk."
        )

    if data["solar_activity"] == "High":
        alerts.append(
            "Strong solar activity detected."
        )

    return alerts