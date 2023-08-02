export default function combineWords(line) {
    var words = line.split(" "); // Split the line into words using space as the separator
    var combinedString = words.join("-");
    return combinedString;
}