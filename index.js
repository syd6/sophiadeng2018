function projectsList(){
	
	var navTitles=['Instagram Concept', 'Who is the Class of 2021?', 'The Cost of Human Life', 'RAW Expo: The Cornell Daily Sun', 'Portfolio Evolution: Case Study', 'Hang: Illustration Series',  
	'Operation Bitwise'];

	//they all link to the same page, which generates code based on what project you select
	var navLink=['https://medium.com/@sophiadeng/instagram-concept-diversifying-content-for-business-profiles-3ffe18f5df64',
	'https://medium.com/@sophiadeng/the-creation-of-how-well-do-you-know-your-classmates-448fb9cbedf2', 
	'https://medium.com/@sophiadeng/the-cost-of-human-life-41d99f55f951',
	'project.html',
	'https://medium.com/@sophiadeng/personal-website-evolution-the-story-of-me-bda5cdd1e479', 
	'https://medium.com/@sophiadeng/hang-cultivating-more-meaningful-relationships-online-b0809bdf4a2d',
	'project.html'
	];

	var navDescriptions=['Instagram Business is a powerful and versatile tool. How might we allow users to better showcase their talents?',
	'Are the stereotypes about Cornell freshmen true? Watch us debunk or confirm some myths on this data visualization project.',
	'Human mortality rates are decreasing, but at what cost? A practice in visual design of static data visualizations.',
	'Designing an interactive exhibition that narrates the evolution and importance of our college newspaper, The Cornell Daily Sun.',
	'Retelling and redesigning the story of me through my portfolio.',
	'How might we cultivate healthy relationships online? A series of illustrations highlights the benefits of communicating online.',
	'An award-winning game designed for Introductory Game Design at Cornell.'];

	var roles = ['UX, PRODUCT DESIGN',
	'CREATIVE DIRECTOR, DATA VISUALIZATION',
	'VISUAL DESIGN, DATA VISUALIZATION',
	'INTERACTIVE DESIGN',
	'UX, VISUAL DESIGN',
	'ILLUSTRATION BRANDING, VISUAL DESIGN',
	'GAME DESIGN, ILLUSTRATION'];

	var divAttach = document.getElementById('projects-list');
	var projectBuild = [];
	for (var i=0;i<navTitles.length;i++){
		var navbarItem = "<li><p class='project-title'><a href="+navLink[i]+">"+navTitles[i]+"</a></p></li><li><p class='project-description'>"+navDescriptions[i]+"</p></li><li><p class='project-role'>"+roles[i]+"</p></li>";
		projectBuild.push(navbarItem);
	}
	console.log(projectBuild);
	console.log(divAttach);
	divAttach.innerHTML = projectBuild.join("");
}

projectsList();


/*function iconsList(){
	var buttonLinks=['https://www.linkedin.com/in/sophia-deng-41078410a/','https://instagram.com/dengsoph_art']
	var fontAwesomeStrings=['fab fa-linkedin-in iconz','fab fa-instagram iconz']
	var divAttach = document.getElementById('footer');
	var projectBuild = []
	for (var i=0;i<buttonLinks.length;i++){
		var buttonItem = "<button class='external-links'><a href="+buttonLinks[i]+"><i class="+fontAwesomeStrings[i]+"></i></a></button>";
		projectBuild.push(buttonItem);
	}
	divAttach.innerHTML = projectBuild.join("");
}*/

//iconsList();