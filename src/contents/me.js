export default {
	contact: {
		email: 'hello@hernanfabrica.com',
		github: 'https://www.github.com/hfjuarez',
		linkedin: 'https://www.linkedin.com/in/hfjuarez/',
	},
	education: {
		degree: 'Technologist Degree in Computer Science',
		graduatedYear: 2021,
	},
	personal: {
		age: Math.abs(
			new Date(Date.now() - new Date('2000-06-04').getTime()).getUTCFullYear() -
				1970,
		),
		image: '/images/me.jpeg',
		name: 'Hernán',
		lastName: 'Fabrica',
	},
	professional: {
		currentPosition: 'Software Engineer',
		company: 'SoFi/Technisys',
		yearsOfExperience: Math.floor(
			(new Date().getTime() - new Date('2021-03-01').getTime()) /
				(1000 * 60 * 60 * 24 * 365),
		),
	},
};
