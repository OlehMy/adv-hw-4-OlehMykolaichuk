const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


// Розділіть студентів на пари (хлопець + дівчина) для работи над проєктом
function getPairsOfStudents(students) {
    const studentsMen = [students[4], students[1], students[0]];
    const studentsWomen = [students[2], students[3], students[5]];
    let pairsOfStudents = [];
    for (let index = 0; index < studentsMen.length; index++) {
        pairsOfStudents[index] = [studentsMen[index], studentsWomen[index]];
    }
    return pairsOfStudents;
}
const pairsOfStudents = getPairsOfStudents(students);
console.log('Pairs of students', pairsOfStudents);

// Зіставте пари та теми проєктів, над якими студенти будуть працювати
function getThemesForPairs(pairsOfStudents, themes) {
    let themesForPairs = [];
    for (let index = 0; index < themes.length; index++) {
        themesForPairs[index] = [pairsOfStudents[index].join(' i '), themes[index]];
    }
    return themesForPairs;
}
const themesForPairs = getThemesForPairs(pairsOfStudents, themes);
console.log('Themes for pairs', themesForPairs);

// Зіставте оцінки(marks) зі студентом(students)
function getMarksForStudents(students, marks) {
    let marksForStudents = [];
    for (let index = 0; index < students.length; index++) {
        marksForStudents[index] = [students[index], marks[index]];
    }
    return marksForStudents;
}
const marksForStudents = getMarksForStudents(students, marks);
console.log('Marks for students', marksForStudents);

// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт
function getMarksForPairs(pairsOfStudents, themes) {
    const minRandomMark = 1;
    const maxRandomMark = 5;
    let randomMark;
    let marksForPairs = [];
    for (let index = 0; index < pairsOfStudents.length; index++) {
        randomMark = Math.trunc(minRandomMark + Math.random() * (maxRandomMark - minRandomMark + 1));
        marksForPairs[index] = [pairsOfStudents[index].join(' i '), themes[index], randomMark];
    }
    return marksForPairs;
}
const marksForPairs = getMarksForPairs(pairsOfStudents, themes);
console.log('Random marks for pairs of students', marksForPairs);