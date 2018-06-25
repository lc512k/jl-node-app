const main = (req, res) => {

	res.render('result', {
		title: 'World Cup Result - ESP v POR',
		game: 'Spain v Portugal',
		blurb: 'The Cristiano Ronaldo Show 😂',
		team1: 'Spain',
		team2: 'Portugal',
		team1score: '3',
		team2score: '3',
		team1scorers: 'D. Costa x2 & Nacho',
		team2scorers: 'C. Ronaldo x3'
	});

};

module.exports = main;