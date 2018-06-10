function projectsList(){
	
	var navTitles=['Instagram Concept', 'Who is the Class of 2021?', 'The Cost of Human Life', 'Portfolio Case Study', 'Hang', 'Art', 
	'Operation Bitwise', 'RAW Expo: The Cornell Daily Sun'];

	//they all link to the same page, which generates code based on what project you select
	var navLink=['https://medium.com/@sophiadeng/instagram-concept-diversifying-content-for-business-profiles-3ffe18f5df64',
	'https://medium.com/@sophiadeng/the-creation-of-how-well-do-you-know-your-classmates-448fb9cbedf2', 
	'https://medium.com/@sophiadeng/the-cost-of-human-life-41d99f55f951',
	'https://medium.com/@sophiadeng/personal-website-evolution-the-story-of-me-bda5cdd1e479', 
	'https://medium.com/@sophiadeng/hang-cultivating-more-meaningful-relationships-online-b0809bdf4a2d',
	'https://www.instagram.com/dengsoph_art/',
	'project.html',
	'project.html'];

	var navDescriptions=['Allowing Businesses and Content creators to diversify their profiles.',
	'A data visualization project that sheds light on the Class of 2021.',
	'How costly is it to maintain human life?',
	'Redesigning the story of me.',
	'Illustrating the benefits of Online Communication.',
	'A collection of my artwork on Instagram.',
	'An award-winning game designed for Game Design Course at Cornell.',
	'An interactive experience for The Cornell Daily Sun.'];


	var divAttach = document.getElementById('projects-list');

	var projectBuild = [];
	for (var i=0;i<navTitles.length;i++){
		var navbarItem = "<li><p class='project-title'><a href="+navLink[i]+">"+navTitles[i]+"</a></p></li><li><p class='project-description'>"+navDescriptions[i]+"</p></li>";
		projectBuild.push(navbarItem);
	}
	console.log(projectBuild);
	console.log(divAttach);
	divAttach.innerHTML = projectBuild.join("");
}

projectsList();