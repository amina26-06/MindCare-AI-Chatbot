function showQuote(mood) {

    const quotes = {

        happy: "😊 Happiness is even more beautiful when you take a moment to appreciate it. Keep shining!",

        sad: "💙 It's okay to feel sad sometimes. Be gentle with yourself—this moment will not last forever.",

        stressed: "🌿 Take a deep breath. You don't have to solve everything at once. One step at a time.",

        anxious: "🫶 Focus on this moment. You are here, and you can take things one breath at a time.",

        angry: "🌸 Pause before reacting. Take a breath and give yourself the time and space to calm down.",

        uneasy: "💙 You don't always need to know why you feel uneasy. Pause, breathe, and give yourself some space.",

        confused: "🌱 It's okay to feel confused. You don't have to understand everything right now. Take one small step at a time.",

        wrong: "🫶 If something feels wrong, pause and pay attention to what you're feeling. You don't have to face difficult moments alone."
    };

    document.getElementById("quote").innerText = quotes[mood];
}