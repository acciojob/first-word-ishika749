function firstWord(str) {
    // Handle empty string case
    if (str.length === 0) return '';
    
    // Find index of first space
    const spaceIndex = str.indexOf(' ');
    
    // If no space found, return entire string
    if (spaceIndex === -1) return str;
    
    // Return substring up to first space
    return str.substring(0, spaceIndex);
}

// Do not change the code below

//const s = prompt("Enter String:");
//alert(firstWord(s));
