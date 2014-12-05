---
layout: page
title:  About the Lab
hero:   /assets/img/background.sq.r.png
people:
    faculty:
        -   name:   Dr. Madan Mohan Chaturvedi
            img:    http://cdn.ducic.ac.in/ducic/Faculty/Faces/mmc.jpg
            bio:    
        -   name:   Dr. Bibudhananda Biswal
            img:    http://cdn.ducic.ac.in/ducic/Faculty/Faces/biswal.jpg
            bio:    
        -   name:   Dr. Asani Bhaduri
            img:    http://cdn.ducic.ac.in/ducic/Faculty/Faces/asani.jpg
            bio:    
        -   name:   Dr. Dapayan Dasgupta
            img:    http://cdn.ducic.ac.in/ducic/Faculty/Faces/dp-pic.jpg
            bio:    
        -   name:   Mr. Abhijeet Parmar
            img:    
    student:
        -   name:   Ankit Pathak
            img:    //
            bio:    //
        -   name:   Anurag Singh
            img:    //
            bio:    //
        -   name:   Madhulika Mukharjee
            img:    //
            bio:    //
        -   name:   Mayank Jain
            img:    //
            bio:    //
        -   name:   Pragya Jaiswal
            img:    //
            bio:    //
        -   name:   Prashant Sinha
            img:    //
            bio:    //
        -   name:   Shreya Smita
            img:    //
            bio:    //
        -   name:   Tarun Khajhuria
            img:    //
            bio:    //
        -   name:   Vasundhara
            img:    //
            bio:    //

---
<div class="container">
    <div class="row">
        <div class="col-md-5">
            <p>Laboratory for Pattern Engineering is focused on amalgamating chaos to engineer patterns and structures to improve the way we learn, see things and grow. Through its diversified research groups, the Lab fosters cutting edge research in areas such as pervasive computing, social dynamics and digital humanities.</p>
            <p>Within a year of its inception, the Lab has faculty and students working in five research groups developing technologies that have started producing critical research outputs and spin-offs. The Lab is dedicated to understand why the things are the way they are, bring deeper insights into patterns and help individuals make choices that are sensible and smart.</p>
        </div>
        <div class="col-md-7">
            <ul>
                <li>LOL</li>
            </ul>
        </div>
    </div>
</div>

<div class="wrapper">
    <h2 class="head">The Ecosystem</h2>
</div>
<div class="container bg-gray">
    <div class="row">
        <div class="col-sm-offset-3 col-sm-2">
            <div class="card sm">
                <img src="/assets/img/icon.diversity.png">
                <p class="h2">Diversity</p>
                <p class="h3">Cultural, Ethnic, Academic</p>
            </div>
        </div>
        <div class="col-sm-2">
            <div class="card sm">
                <img src="/assets/img/icon.disruptive.png">
                <p class="h2">Disruption</p>
                <p class="h3">Technology, Leader, Trend</p>
            </div>
        </div>
        <div class="col-sm-2">
            <div class="card sm">
                <img src="/assets/img/icon.culture.png">
                <p class="h2">Culture</p>
                <p class="h3">Cross-Disciplinary, Silo-Free, Equalitarian</p>
            </div>
        </div>
    </div>
</div>

<div class="container bg-sine">
    <div class="row">
        <div class="col-sm-offset-4 col-sm-2">
            <div class="card lg">
                <img src="/assets/img/icon.intense.competition.png">
                <p class="h2">Intense Competition</p>
            </div>
        </div>
        <div class="col-sm-2">
            <div class="card lg">
                <img src="/assets/img/icon.fuzzy.processes.png">
                <p class="h2">Few Fuzzy Processes</p>
            </div>
        </div>
    </div>
</div>

<!--div class="wrapper">
    <h2>Opportunities</h2>
</div-->

<div class="wrapper">
    <h2 class="head">People</h2>
    <h3>Faculty</h3>
    <ol>
        {% for person in page.people.faculty %}
            <li>
                <img src="{{ person.img }}">
                <p class="lead">{{ person.name }}</p>
                <p class="foot">{{ person.bio }}</p>
            </li>
        {% endfor %}
    </ol>
    <h3>Students</h3>
    <ol>
        {% for person in page.people.student %}
            <li>
                <img src="{{ person.img }}">
                <p class="lead">{{ person.name }}</p>
                <p class="foot">{{ person.bio }}</p>
            </li>
        {% endfor %}
    </ol>

</div>
