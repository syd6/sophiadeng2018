function projectsList2(){
	
	var navTitles=['Instagram Concept', 
	'Who is the Class of 2021?', 
	'The Cost of Human Life', 
	'RAW Expo: The Cornell Daily Sun', 
	'Portfolio Evolution: Case Study', 
	'Hang: Illustration Series',  
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
	'Human mortality rates are decreasing, but at what cost? Practicing visual design in static data visualizations.',
	'Designing an interactive exhibition that narrates the evolution and role of one of the nation&#39;s oldest college papers, The Cornell Daily Sun.',
	'Retelling and redesigning the story of me through my portfolio. Coming soon.',
	'How might we cultivate healthy relationships online? A series of illustrations demonstrates the benefits of connecting through the web. Coming soon.',
	'An award-winning game designed for Introductory Game Design at Cornell. Coming soon.'];

	var roles = ['UX, PRODUCT DESIGN',
	'CREATIVE DIRECTOR, DATA VISUALIZATION',
	'VISUAL DESIGN, DATA VISUALIZATION',
	'INTERACTIVE DESIGN',
	'UX, VISUAL DESIGN',
	'ILLUSTRATION BRANDING, VISUAL DESIGN',
	'GAME DESIGN, ILLUSTRATION'];

	var divAttach = document.getElementById('projects-list-2');
	var projectBuild = [];
	for (var i=0;i<navTitles.length;i++){
		if (navTitles[i] == 'Portfolio Evolution: Case Study' || navTitles[i] == 'Hang: Illustration Series' || navTitles[i] == 'Operation Bitwise'){
			var navbarItem = "<li><p class='project-title-2'>"+navTitles[i]+"</p></li><li><p class='project-description-2'>"+navDescriptions[i]+"</p></li><li><p class='project-role-2'>"+roles[i]+"</p></li>";
			projectBuild.push(navbarItem);
		}
		else{
			var navbarItem = "<li><p class='project-title-2'><a href="+navLink[i]+">"+navTitles[i]+"</a></p></li><li><p class='project-description-2'>"+navDescriptions[i]+"</p></li><li><p class='project-role-2'>"+roles[i]+"</p></li>";
			projectBuild.push(navbarItem);
		}
		
	}
	console.log(projectBuild);
	console.log(divAttach);
	divAttach.innerHTML = projectBuild.join("");
}


projectsList2();

var active;

function activeNav(id){
	var item = document.getElementById(id);
	item.style.color = "#2F749E";
}

function buildNav(){
	var navbar = document.getElementById("navbar");
	var menuTitle = ['featured', 'other', 'art', 'about'];
	var links = ['#', '#', '#', '#'];
	var projectBuild = [];
	for (var i=0;i<menuTitle.length;i++){
		var menuItem = "<li class='navitems' id="+menuTitle[i]+">"+menuTitle[i].toUpperCase()+"</li>";
		projectBuild.push(menuItem);
	}
	navbar.innerHTML = projectBuild.join("");
	
	var litems = document.getElementsByClassName('navitems');
	console.log(litems);
	for (var i=0;i<litems.length;i++){
		var id = menuTitle[i];
		litems[i].addEventListener( "click", () => activeNav(id) );
	}
}

buildNav();

