function click_mentor(){
    var mentor = document.getElementById("Mentor_section");
    var RD = document.getElementById("RDsection");
    var profiles = document.getElementById("profilessection");
    mentor.style.display = "block";
    RD.style.display= "none";
    profiles.style.display="none";
}

function click_RD(){
    var mentor = document.getElementById("Mentor_section");
    var RD = document.getElementById("RDsection");
    var profiles = document.getElementById("profilessection");
    mentor.style.display = "none";
    RD.style.display="block" ;
    profiles.style.display="none";
}

function click_profile(){
    var mentor = document.getElementById("Mentor_section");
    var RD = document.getElementById("RDsection");
    var profiles = document.getElementById("profilessection");
    mentor.style.display = "none";
    RD.style.display= "none";
    profiles.style.display="block";
}