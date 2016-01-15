var bio = {

	"name" : "Suemedha Sood",
	"role" : "Web Designer/Photographer",
	"contacts" : {
		"mobile" : "434.294.1701",
		"email" : "suemedha.sood@gmail.com",
		"github" : "soodonym",
		"twitter" : "@suemedhasood",
		"location" : "Charlottesville, VA"
		
	},

	"welcomeMessage" : "Custom photography & websites tailored to your specific needs.",

	"skills" : ["HTML", "CSS", "Javascript", "PHP", "WordPress", "Photoshop", "Illustrator", "InDesign"],

	"biopic" : ["images/sood.jpg"],

	"display": function() {

		var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").append(formattedHeaderName);

		var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(formattedHeaderRole);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedBioPic);

		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);

		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);

		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);

		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);        

		if(bio.skills.length > 0) {

			$("#header").append(HTMLskillsStart);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
			$("#skills").append(formattedSkill);
		}
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#footerContacts").append(formattedMobile);

		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#footerContacts").append(formattedEmail);

		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#footerContacts").append(formattedGithub);

		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#footerContacts").append(formattedTwitter);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#footerContacts").append(formattedLocation);
	}
};

bio.display();

var work = {
	"jobs" : [{
		"employer" : "Forbes Travel Guide",
		"title" : "Field Evaluator",
		"dates" : "2012 - 2015",
		"description" : "Traveled around the country and world reviewing restaurants, hotels, and spas.",
		"location" : "Atlanta, GA"

	},
	{
		"employer" : "BBC Travel",
		"title" : "Travel Writer & Photographer",
		"dates" : "2010 - 2013",
		"description" : "Created and wrote the popular weekly column Travelwise, frequently featured on the BBC's homepage. Pitched and wrote in-depth travel stories. Pitched and shot travel photography features.",
		"location" : "New York, NY"
	},

	{
		"employer" : "The Washington Post Express",
		"title" : "Food Writer & Photographer",
		"dates" : "2007 - 2011",
		"description" : "Pitched and wrote food stories. Interviewed chefs, mixologists, and restaurateurs. Shot food and event photos.",
		"location" : "Washington D.C."	

	}
	],
	"display": function () {

		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var formattedEmployerTitleDatesLocationDescription = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

			$(".work-entry:last").append(formattedEmployerTitleDatesLocationDescription);
		}
	}
};

work.display();

var projects = {
	"projects" : [{
		"title" : "<a href='http://suemedha.com'>My Portfolio Site</a>",
		"image" : ["images/grandcanyon.jpg"],
		"description" : "My online portfolio, built using HTML, CSS, & jQuery.",
		"dates" : "2015"

	},
	{
		"title" : "<a href='http://birkbyhouse.com'>Birkby House Website</a>",
		"image" : ["images/birkby.jpg"],
		"description" : "Website for a wedding venue client, built using Squarespace & custom CSS.",
		"dates" : "2015"

	},

	{
		"title" : "<a href='http://itp.nyu.edu/~ss4213/dwd/findcsas2.php'>NYU Project</a>",
		"image" : ["images/itp.jpg"],
		"description" : "App for NYU's ITP program at Tisch, built using PHP, MySQL, CSS, & HTML.",
		"dates" : "2010"

	}
	],
	"display": function() {

		for (project in projects.projects) {
			$("#projects .carousel").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
			var formattedTitleDescriptionDatesImage = formattedTitle + formattedDescription + formattedDates + formattedImage;

			$(".project-entry:last").append(formattedTitleDescriptionDatesImage);

		}
		$('.carousel').slick({
			dots: true,
			infinite: true
		});
	}
};

projects.display();

var education = {
	"schools" : [{
		"name" : "New York University",
		"location" : "New York, NY",
		"degree" : "MA",
		"majors" : "Multimedia Journalism",
		"dates": 2011,
		"url" : "www.nyu.edu"

	},
	{
		"name" : "Unviersity of Virginia",
		"location" : "Charlottesville, VA",
		"degree" : "Double BA",
		"majors" : "(1) Foreign Affairs (2) Religious Studies",
		"dates": 2006,
		"url" : "www.virginia.edu"

	}
	],
	"onlineCourses" : [
	{
		"title" : "Intro to HTML & CSS",
		"school" : "Udacity",
		"date" : 2015,
		"url" : "www.udacity.com"
	},
	{
		"title" : "Responsive Web Design Fundamentals",
		"school" : "Udacity",
		"date" : 2015,
		"url" : "www.udacity.com"
	},
	{
		"title" : "Javascript Basics",
		"school" : "Udacity",
		"date" : 2015,
		"url" : "www.udacity.com"
	}
	],
	"display": function() {

		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedUrl = HTMLschoolUrl.replace("%data%", education.schools[school].url);
			var formattedNameLocationDegreeMajorsDatesUrl = formattedName + formattedLocation + formattedDegree + formattedMajors + formattedDates + formattedUrl;

			$(".education-entry:last").append(formattedNameLocationDegreeMajorsDatesUrl);

		}
		for (onlineCourse in education.onlineCourses) {
			$("#onlineCourses").append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			var formattedTitleSchoolDatesUrl = formattedTitle + formattedSchool + formattedDates + formattedUrl;

			$(".education-entry:last").append(formattedTitleSchoolDatesUrl);

		}
	}
};
education.display();
    // Notice how all of a sudden there's JavaScript inside this HTML
    // document? You can write JavaScript between <script> tags. At the end of your
    // JavaScript, don't forget the closing script tag with the slash (/).


    // Also, this is a JavaScript style comment. You can comment in JavaScript with:

    //   two slashes for all following characters on a single line, or

    /*
        an opening and closing set of slash asterisks for block comments.
        */


  $("#mapDiv").append(googleMap);

  $(document).click(function(loc) { 
  	var x = loc.pageX;
  	var y = loc.pageY;

  	logClicks(x,y);

  });

function applyStyles() {
	if(document.getElementsByClassName('flex-item').length === 0) {
		document.getElementById('topContacts').style.display = 'none';
	}
	if(document.getElementsByTagName('h1').length === 0) {
		document.getElementById('header').style.display = 'none';
	}

	if(document.getElementsByClassName('work-entry').length === 0) {
		document.getElementById('workExperience').style.backgroundColor = 'black';
	}
	if(document.getElementsByClassName('project-entry').length === 0) {
		document.getElementById('projects').style.backgroundColor = 'black';
	}
	if(document.getElementsByClassName('education-entry').length === 0) {
		document.getElementById('education').style.backgroundColor = 'black';
	}
	if(document.getElementsByClassName('flex-item').length === 0) {
		document.getElementById('lets-connect').style.display = 'none';
	}
	if(document.getElementById('map') === null) {
		document.getElementById('mapDiv').style.display = 'none';
	}
}

applyStyles();



