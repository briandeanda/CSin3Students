'use strict';

module.exports = {
	mongodb: {
		uri: 'mongodb://localhost/csin3students'
	},
	students: {
		daniel: {
			id: 1,
			name: 'Daniel',
			email: "diazjfdaniel@gmail.com",
			linkedin: "https://github.com/dcarrot2",
			summary: "Nodejs and Basketball",
			detail: "Development, code code code",
			isAlumni: false,
			imageUrl: "http://i.imgur.com/aMg8mxjm.jpg"

		}
	},
	events: {
		codekickit: {
			id: 1,
			name: "Kick it with Code2040", 
			date: "1438393194",
			lat: "37.7822671",
			long: "-122.3912479", 
			location: "Github offices",
			summary: "A fundraiser and hangout with Code2040!",
			members: [
				"Elias Ramirez"
			],
			isHackathon: false,
			isInternship: false,
			isConference: true,
			isFulltime: false
		}
	}
}