// function loadSkills(skills){
// 		var i=0,j;
// 		var skillsInnerHTML='<br/><br/><h2 class="sectionTitle"> Skills </h2>';
// 		while(i<skills.length){

// 			var row = '<div class="row">';
// 			for(j=i;j<i+6&&j<skills.length;j++){
// 				var skill = '<div class="col m2"><svg viewBox="0 0 128 128"><path d="'+skills[j].icon+'"></path></svg>'+skills[j].name+'</div>';
// 				row+=skill;

// 			}
// 			row+='</div>';
// 			skillsInnerHTML+=row;

// 			i=j;
// 		}
// 		$('#skills').html(skillsInnerHTML);
// }

function loadProjects(projects) {
  projects.sort(function (a, b) {
    return a.sn - b.sn;
  });
  var i = 0,
    j;
  var projectsInnerHTML = '<br/><br/><h2 class="sectionTitle"> Projects </h2>';
  for (i = 0; i < projects.length; i++) {
    project =
      ' <div class="row project"><div class="col l6 m12"><div class="row"><span class="title">' +
      projects[i].projectTitle +
      '</span></div><div class="row"><span class="period">' +
      projects[i].periodStart +
      '-' +
      projects[i].periodEnd +
      '</span></div>';
    toolsUsed = '<div class="row tools">';
    for (j = 0; j < projects[i].toolsUsed.length; j++) {
      toolsUsed += '<span>' + projects[i].toolsUsed[j] + '</span>,&nbsp;';
    }
    toolsUsed = toolsUsed.substring(0, toolsUsed.length - 7);
    toolsUsed += '</div>';
    project += toolsUsed;
    tags = '<div class=row">';
    for (j = 0; j < projects[i].tags.length; j++)
      tags += '<span class="tag">#' + projects[i].tags[j] + '</span>&nbsp';
    tags +=
      '<a href="' +
      projects[i].link +
      '" target="_blank" rel="noopener noreferrer"><i class="material-icons right">language</i></a></div>';
    project += tags;
    project +=
      '</div><div class="col l6 m12 details">' +
      projects[i].shortInfo +
      '</div></div>';
    projectsInnerHTML += project;
  }
  $('#projects').html(projectsInnerHTML);
}

function loadPublications(publications) {
  publications.sort(function (a, b) {
    return a.sn - b.sn;
  });
  var i = 0,
    j;
  var publicationsInnerHTML =
    '<br/><br/><h2 class="sectionTitle"> Publications </h2>';
  for (i = 0; i < publications.length; i++) {
    publication =
      ' <div class="row publication"><div class="col l6 m12"><div class="row"><span class="title">' +
      publications[i].publicationTitle +
      '</span></div><div class="row"><span class="subtitle period">' +
      publications[i].publisher +
      ' - ' +
      publications[i].publishedDate +
      '</span></div><div class="row"><span class="subtitle period">' +
      publications[i].conference +
      '</span><br/></div>';
    tags = '<div class=row">';
    for (j = 0; j < publications[i].tags.length; j++) {
      tags += '<span class="tag">#' + publications[i].tags[j] + '<br/></span>';
    }
    tags +=
      '<a href="' +
      publications[i].link +
      '" target="_blank" rel="noopener noreferrer"><i class="material-icons right">language</i></a></div>';
    publication += tags;
    publication +=
      '</div><div class="col l6 m12 details">' +
      publications[i].shortInfo +
      '</div></div><br/>';
    publicationsInnerHTML += publication;
  }
  $('#publications').html(publicationsInnerHTML);
}

function loadWorks(works) {
  works.sort(function (a, b) {
    return a.sn - b.sn;
  });
  var i;
  var worksInnerHTML = '<br/><br/><h2 class="sectionTitle"> Experience </h2>';
  for (i = 0; i < works.length; i++) {
    worksInnerHTML +=
      '<div class="row work"><div class="col l6 m12"><div class="row title">' +
      works[i].workPosition +
      '</div><div class="row period">' +
      works[i].periodStart +
      '-' +
      works[i].periodEnd +
      '</div><div class="row companyName">' +
      works[i].organisation +
      '</div>' +
      '<a href="' +
      works[i].link +
      '" target="_blank" rel="noopener noreferrer"><i class="material-icons right">language</i></a>' +
      '</div><div class="col l6 m12 details"><div class="row">' +
      works[i].experience +
      '</div></div></div>';
  }
  $('#experience').html(worksInnerHTML);
}

function loadEducations(educations) {
  var i = 0,
    j;
  var educationsInnerHTML =
    '<br/><br/><h2 class="sectionTitle"> Education </h2>';
  for (i = 0; i < educations.length; i++) {
    education =
      '<div class="row education"><div class="row title">' +
      educations[i].course +
      '</div><div class="col l6 m12"><div class="row period">' +
      educations[i].periodStart +
      '-' +
      educations[i].periodEnd +
      '</div><div class="row companyName">' +
      educations[i].inst +
      '</div><div class="row period">' +
      educations[i].score +
      '</div>' +
      '<a href="' +
      educations[i].link +
      '" target="_blank" rel="noopener noreferrer"><i class="material-icons right">language</i></a></div>' +
      '<div class="col l6 m12 details"><ul><li><div>';
    var courses = educations[i].courses;
    courses.sort(function (a, b) {
      return a.sn - b.sn;
    });
    var coursesInnerHTML = '';
    for (j = 0; j < courses.length; j++) {
      coursesInnerHTML +=
        '<div class="row"><div class="col m4 s3">' +
        courses[j].courseCode +
        '</div><div class="col m8 s9">' +
        courses[j].courseName +
        '</div></div>';
    }
    education += coursesInnerHTML;
    education += '</div></li></ul></div></div>';
    educationsInnerHTML += education;
  }
  $('#education').html(educationsInnerHTML);
}

function loadLinks(profileLinks) {
  var i = 0,
    j;
  profileLinks.sort(function (a, b) {
    return a.sn - b.sn;
  });
  var profileLinksInnerHTML = '';
  while (i < profileLinks.length) {
    profileLinksInnerHTML += '';
    for (j = i; j < profileLinks.length && j < i + 8; j++) {
      profileLinksInnerHTML +=
        '<div class="col s4 m4 l4 links center-align"><a href="' +
        profileLinks[j].link +
        '" target="_blank" rel="noopener noreferrer" aria-label="Social Media Link">' +
        profileLinks[j].icon +
        '</a></div>';
    }
    profileLinksInnerHTML += '';
    i = j;
  }
  $('#links').html(profileLinksInnerHTML);
}

function loadLikes(likes) {
  likes = likes.sort(function (a, b) {
    return a.sn - b.sn;
  });
  var i;
  var likesInnerHTML = '<h4>I like</h4>';
  for (i = 0; i < likes.length; i++) {
    likesInnerHTML +=
      '<object type="image/svg+xml" data="img/' +
      likes[i].icon +
      '">' +
      likes[i].name +
      '</object>';
  }
  $('#likes').html(likesInnerHTML);
}

// var profile;
// 	swal(
// 		{
// 			title:"Hello World!",
// 			text:"Hey...This is Omkar. We are ready to launch 3..2..1..",
// 			confirmButtonColor:"#1f1f1f"
// 		}
// 	);

$.get('js/profile.json', function (data, status) {
  profile = data;
  var pInfo = profile.personalInfo;
  $('title').html('Omkar Ajnadkar | blackbird71SR');
  $('#name').html("Hi, I'm " + pInfo.fname + '<br/>');
  $('#subtitle').html('Student, Tinkerer, Developer');
  $('#image img').attr('src', 'img/' + pInfo.myimg);
  $('#contact').html(
    '<a href="tel:4696493928" rel="noopener noreferrer">' +
      pInfo.mob +
      '</a></br><a rel="noopener noreferrer" href="mailto:omkarajnadkar@gmail.com">' +
      pInfo.email +
      '</a><br/>' +
      pInfo.currentLocation,
  );
  $('#summary p').html(profile.summaryAlt);
  Typed.new('#believe span', {
    strings: profile.qoutes,
    typeSpeed: 0,
    cursorChar: '',
    loop: true,
  });
  loadLikes(profile.likes);
  //$('#helloText').html(profile.helloText);
  loadLinks(profile.profileLinks);
  //loadSkills(profile.skills);
  loadProjects(profile.projects);
  loadPublications(profile.publications);
  loadWorks(profile.works);
  loadEducations(profile.educations);
  //console.log(profile);
});

// function onBodyLoad(){
// 	//console.log('body loaded');
// 	$('#Says').css('display','block');
// }

// $(document).ready(function(){
// 	$('.collapsible').collapsible({
// 	  'accordion' : true
// 	});
// 	$('#tabs').tabs({ 'swipeable': true });
// 	$('.info').perfectScrollbar();
// 	onWindowResize();
// });

// $(window).resize(onWindowResize);

// function onWindowResize(){
// 	$('#skills div.m2').css('height',$('#skills div.m2').css('width'));
// 	$('#image img').css('height',$('#image img').css('width'));
// }
