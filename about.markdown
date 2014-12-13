---
layout: page
title:  About the Lab
hero:   /assets/img/background.sq.r.png
people:
    faculty:
        -   name:   Prof. Madan Mohan Chaturvedi
            img:    http://cdn.ducic.ac.in/ducic/Faculty/Faces/mmc.jpg
            bio:    
        -   name:   Dr. B. Biswal
            img:    http://cdn.ducic.ac.in/ducic/Faculty/Faces/biswal.jpg
            bio:    
        -   name:   Dr. Asani Bhaduri
            img:    http://cdn.ducic.ac.in/ducic/Faculty/Faces/asani.jpg
            bio:    
        -   name:   Dr. Daipayan Dasgupta
            img:    http://cdn.ducic.ac.in/ducic/Faculty/Faces/dp-pic.jpg
            bio:    
        -   name:   Dr. Sonam Singh
            img:    http://cdn.ducic.ac.in/ducic/Faculty/Faces/sonam.jpg
        -   name:   Abhijeet Parmar, MS
            img:    /assets/img/icon.generic.face.png
    student:
        -   name:   Ankit Pathak
            img:    http://cdn.ducic.ac.in/ducic/Assets/Ext/Pattern/554656_478916968841309_958902291_n.jpg
            bio:    
            git:    https://github.com/Pathaked
            fb:     https://www.facebook.com/AnkyPats
        -   name:   Anurag Singh
            img:    http://cdn.ducic.ac.in/ducic/Assets/Ext/Pattern/9507_534105060004531_1911697479_n.jpg
            bio:    
            fb:     https://www.facebook.com/profile.php?id=100002151258446
        -   name:   Madhulika Mukharjee
            img:    http://cdn.ducic.ac.in/ducic/Assets/Ext/Pattern/10609461_10152340388253182_1781455429365618136_n.jpg
            bio:    
            twitter: https://twitter.com/Madhulika_1511
            fb:     https://www.facebook.com/madhulika.mukherjee
            github: https://github.com/madhulikamukherjee
        -   name:   Mayank Jain
            img:    http://cdn.ducic.ac.in/ducic/Assets/Ext/Pattern/10841622_10204381739216427_1830895912_n.jpg
            bio:    
            fb:     https://www.facebook.com/jain15mayank
        -   name:   Pragya Jaiswal
            img:    http://cdn.ducic.ac.in/ducic/Assets/Ext/Pattern/10308732_244501955746334_2274514837900992050_n.jpg
            bio:    
            github: https://github.com/PragyaCIC
            fb:     https://www.facebook.com/pragya.jswl
        -   name:   Prashant Sinha
            img:    http://cdn.ducic.ac.in/ducic/Assets/Ext/Pattern/1623571_946248492068776_701300619295765708_n.jpg
            bio:    
            github: https://github.com/PrashntS
            fb:     https://www.facebook.com/PrashntS
        -   name:   Shreya Smita
            img:    http://cdn.ducic.ac.in/ducic/Assets/Ext/Pattern/1495414_1381942568722979_1453113774_o.jpg
            bio:    
            github: https://github.com/shreya--cic
        -   name:   Tarun Khajhuria
            img:    /assets/img/icon.generic.face.png
            bio:    
            github: https://github.com/tarunkhajuria42
        -   name:   Vasundhara
            img:    http://cdn.ducic.ac.in/ducic/Assets/Ext/Pattern/63442_726581017434024_6902567398253271897_n.jpg
            bio:    
            fb:     https://www.facebook.com/vasundhara.mehta.5

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

<div class="container people">
    <h2 class="head">People</h2>
    <h3>Faculty</h3>
    <div class="row row-centered">
        {% for person in page.people.faculty %}
            <div class="col-sm-3 col-centered col-fixed">
                <img src="{{ person.img }}">
                <p class="lead">{{ person.name }}</p>
                <p class="foot">{{ person.bio }}</p>
            </div>
        {% endfor %}
    </div>
    <h3>Students</h3>
    <div class="row row-centered">
        {% for person in page.people.student %}
            <div class="col-sm-3 col-centered col-fixed">
                <img src="{{ person.img }}">
                <p class="lead">{{ person.name }}</p>
                <p class="foot">{{ person.bio }}</p>
                <p class="links">
                {% if person.github %}
                    <a href="{{ person.github }}" target="_blank"><img src="/assets/img/link.github.png"></a>
                {% endif %}
                {% if person.twitter %}
                    <a href="{{ person.twitter }}" target="_blank"><img src="/assets/img/link.twitter.png"></a>
                {% endif %}
                {% if person.fb %}
                    <a href="{{ person.fb }}" target="_blank"><img src="/assets/img/link.facebook.png"></a>
                {% endif %}
                </p>
            </div>
        {% endfor %}
    </div>
</div>
