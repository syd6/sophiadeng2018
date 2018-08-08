function projectsList2(){
	
	var navTitles=['Instagram Concept', 
	'Olive: Facebook Messenger Concept',
	'Who is the Class of 2021?', 
	'The Cost of Human Life', 
	'RAW Expo: The Cornell Daily Sun', 
	'Operation Bitwise',
	// 'Portfolio Evolution: Case Study'
	];

	//they all link to the same page, which generates code based on what project you select
	var navLink=['https://medium.com/@sophiadeng/instagram-concept-diversifying-content-for-business-profiles-3ffe18f5df64',
	'https://medium.com/@sophiadeng/olive-a-preview-b1d86befc816',
	'https://medium.com/@sophiadeng/the-creation-of-how-well-do-you-know-your-classmates-448fb9cbedf2', 
	'https://medium.com/@sophiadeng/the-cost-of-human-life-41d99f55f951',
	'https://medium.com/@sophiadeng/raw-expo-the-cornell-daily-sun-5232187dc6ac',
	'https://medium.com/@sophiadeng/operation-bitwise-3ab442cb37',
	// 'https://medium.com/@sophiadeng/personal-website-evolution-the-story-of-me-bda5cdd1e479', 
	
	];

	var navDescriptions=['Instagram Business is a powerful and versatile tool. How might we allow users to better showcase their talents?',
	'Having a meal is an inherently social activity. How might we allow people to easily make food plans with others through Messenger? Full case study coming soon.',
	'Are the stereotypes about Cornell freshmen true? Watch us debunk or confirm some myths on this data visualization project (reached >16,000 users on Facebook).',
	'Human mortality rates are decreasing, but at what cost? Practicing visual design in static data visualizations.',
	'Designing an interactive exhibition that narrates the evolution and role of one of the nation&#39;s oldest college papers, The Cornell Daily Sun.',
	'An award-winning game designed for Introductory Game Design at Cornell. I was the primary artist and designed our <a class="inline-link" href="merged.pdf" target="_blank">game manual.</a>',
	// 'Retelling and redesigning the story of me through my portfolio. Coming soon.',
	
	];
	// Having a meal is an inherently social activity. how might we allow people to easily make plans with others through facebook messenger?

	var roles = ['UX, PRODUCT DESIGN',
	'UX, PRODUCT DESIGN',
	'CREATIVE DIRECTOR, DATA VISUALIZATION',
	'VISUAL DESIGN, DATA VISUALIZATION',
	'CREATIVE DIRECTOR, INTERACTIVE EXHIBITION',
	'GAME DESIGN, ILLUSTRATION',
	// 'UX, VISUAL DESIGN',
	
	];

	var divAttach = document.getElementById('projects-list-2');
	var projectBuild = [];
	for (var i=0;i<navTitles.length;i++){
		if (navTitles[i] == 'Portfolio Evolution: Case Study'){
			var navbarItem = "<div class='main-projects'><li><p class='project-title-2'>"+navTitles[i]+"</p></li><li><p class='project-description-2'>"+navDescriptions[i]+"</p></li><li><p class='project-role-2'>"+roles[i]+"</p></li></div>";
			projectBuild.push(navbarItem);
		}
		else{
			var navbarItem = "<div class='main-projects'><li><p class='project-title-2'><a href="+navLink[i]+" target='_blank'>"+navTitles[i]+"</a></p></li><li><p class='project-description-2'>"+navDescriptions[i]+"</p></li><li><p class='project-role-2'>"+roles[i]+"</p></li></div>";
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

function projectVisibility(projectBuildType){
	var mainDiv = document.getElementsByClassName("main-projects")
	// for loop: 
	for (project of mainDiv){
		project.style.display = "none";
		/* $(document).ready(function(){
			console.log("is this working")
		   $(project).fadeOut(900);
		}); */
		
	}
	projectBuildType();
}

function buildOtherProjects(){
	var navTitles=[
	'Snowfall', 
	'Website Redesign: Sun Blogs Section',
	'How Do YouTube Videos Go Viral?',
	'How the Pumpkin Got on the Tower',
	'Microsoft: Manifest Designer'
	];
	//they all link to the same page, which generates code based on what project you select
	var navLink=['https://syd6.github.io/snowfall',
	'https://medium.com/@sophiadeng/rebranding-the-cornell-daily-sun-blogs-section-1e87ac46afa5',
	'http://gjs86.me/Salient/index.html', 
	'http://projects.cornellsun.com/projects/pumpkin-feature/',
	'#',
	];

	var navDescriptions=['A fun web experiment in animation, parallax, and illustration. Makes use of the weather API, sky changes color based on time.',
	'A case study in creating a brand for The Cornell Sun Blogs website, making it more appealing and easily navigable. Visit the site <a class="inline-link" target="_blank" href="http://sunspots.cornellsun.com/">here</a>.',
	'A data visualization project for INFO 4310 at Cornell, demonstrating how videos spread to and become popular in different countries. Within a team of four, I primarily worked on the visual design.',
	'How did a 60-pound gourd mysteriously appear on the clocktower? We worked with former Editor Farhad Manjoo to revive the tale. (reached >27,000 users on Facebook, linked to by <a class="inline-link" href="https://www.npr.org/sections/thetwo-way/2017/10/31/561217424/after-20-years-can-cornell-finally-bust-open-its-great-pumpkin-mystery">NPR</a>).',
	'Designed and implemented a GUI-based React web app for creating Add-In manifests. Removes the need to code and returns a fully functional XML manifest.',
	];

	var roles = ['ILLUSTRATION, ANIMATION',
	'UX, WEB DESIGN',
	'DATA VISUALIZATION, VISUAL DESIGN',
	'CREATIVE DIRECTOR, DEVELOPER',
	'DEV, PROJECT MANAGEMENT',
	];

	var divAttach = document.getElementById('projects-list-2');
	var projectBuild = [];
	projectBuild.push("<li class='other-caption'>[ A mix of older projects and #justforfun things ]</li>");
	for (var i=0;i<navTitles.length;i++){
		if (navTitles[i] == 'Microsoft: Manifest Designer'){
			var navbarItem = "<div class='main-projects'><li><p class='project-title-2'>"+navTitles[i]+"</p></li><li><p class='project-description-2'>"+navDescriptions[i]+"</p></li><li><p class='project-role-2'>"+roles[i]+"</p></li></div>";
			projectBuild.push(navbarItem);
			
			// $(divAttach).fadeIn(900).append(navbarItem);
			
		}
		else{
			var navbarItem = "<div class='main-projects'><li><p class='project-title-2'><a href="+navLink[i]+" target='_blank'>"+navTitles[i]+"</a></p></li><li><p class='project-description-2'>"+navDescriptions[i]+"</p></li><li><p class='project-role-2'>"+roles[i]+"</p></li></div>";
			projectBuild.push(navbarItem);
			
			// $(divAttach).fadeIn(900).append(navbarItem);
			
		}
		
	}
	
	console.log(projectBuild);
	console.log(divAttach);
	
	divAttach.innerHTML = projectBuild.join("");
}


function buildNav(){
	var navbar = document.getElementById("navbar");
	var menuTitle = ['featured', 'other', 'art'];
	var links = ['#', '','https://instagram.com/dengsoph_art'];
	var projectBuild = [];
	for (var i=0;i<menuTitle.length;i++){
		if (menuTitle[i] == 'other' || menuTitle[i] == 'featured'){
			var menuItem = "<li class='navitems' id="+menuTitle[i]+">"+menuTitle[i].toUpperCase()+"</li>";
			
		}
		else{
			var menuItem = "<li class='navitems' id="+menuTitle[i]+"><a href="+links[i]+" target='_blank'>"+menuTitle[i].toUpperCase()+"</a></li>";
		}
		projectBuild.push(menuItem);
	}

	navbar.innerHTML = projectBuild.join("");
	document.getElementById('other').addEventListener("click", ()=> projectVisibility(buildOtherProjects));
	document.getElementById('featured').addEventListener("click", ()=> projectVisibility(projectsList2));
	
	/*var litems = document.getElementsByClassName('navitems');
	console.log(litems);
	for (var i=0;i<litems.length;i++){
		var id = menuTitle[i];
		litems[i].addEventListener( "click", () => activeNav(id) );

	}*/
}


buildNav();

