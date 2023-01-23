function contamination(text, char){
    if (text === "" || char === "") {
      return "";
    }
    return new Array(text.length).fill(char).join("");
  }