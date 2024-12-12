function analyzeSentence(sentence) {
    // Initializing counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Vowels for reference
    const vowels = "aeiouAEIOU";

    // Variable to track if we are in a word
    let inWord = false;

    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Increment the length counter
        length++;

        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }

        // Check if the character is a space or the end of the sentence
        if (char === " " || char === ".") {
            if (inWord) {
                wordCount++; // End of a word
                inWord = false;
            }
        } else {
            // If it's not a space or a dot, we are inside a word
            inWord = true;
        }
    }

    // Return the results
    return {
        length,
        wordCount,
        vowelCount,
    };
}

// Example usage
const sentence = "This is a sample sentence.";
const result = analyzeSentence(sentence);

console.log("Length of sentence:", result.length);
console.log("Number of words:", result.wordCount);
console.log("Number of vowels:", result.vowelCount);
