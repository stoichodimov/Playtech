let students = [
	{ name: "Ivan", score: 5 },
	{ name: "Dimitar", score: 5.5 },
	{ name: "Kristian", score: 4 },
	{ name: "Valentin", score: 6 },
	{ name: "Veselin", score: 3 },
	{ name: "Genadi", score: 5 },
	{ name: "Yavor", score: 3 },
	{ name: "Marin", score: 5.5 },
	{ name: "Kalin", score: 3 },
	{ name: "Yavor", score: 6 }
];

let studentsHighScore = students.filter(
    function(index){
        return index.score > 5.50
    }
)
console.log(studentsHighScore)