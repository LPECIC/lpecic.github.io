---
layout: page
title:  About the Lab
hero:   /assets/img/background.sq.royal.png

---
<div class="container" id="about">
    <div class="row">
        <div class="col-md-5 about">
            <p>Laboratory for Pattern Engineering is focused on amalgamating chaos to engineer patterns and structures to improve the way we learn, see things and grow. Through its diversified research groups, the Lab fosters cutting edge research in areas such as pervasive computing, social dynamics and digital humanities.</p>
            <p>Within a year of its inception, the Lab has faculty and students working in five research groups developing technologies that have started producing critical research outputs and spin-offs. The Lab is dedicated to understand why the things are the way they are, bring deeper insights into patterns and help individuals make choices that are sensible and smart.</p>
        </div>
        <div class="col-md-offset-1 col-md-6 groups">
            <!--div class="row">
                <div class="col-sm-4" style="background:#003D5C">
                    <div class="center vertical">
                        <p class="lead">IntSense</p>
                        <p class="foot">Graphics | Apps | Computational Creativity</p>
                    </div>
                </div>
                <div class="col-sm-4" style="background:#183152">
                    <div class="center vertical">
                        <p class="lead">Sensible Systems</p>
                        <p class="foot">IoT | Affective Computing | Pervasive Computing</p>
                    </div>
                </div>
                <div class="col-sm-4" style="background:#004358">
                    <div class="center vertical">
                        <p class="lead">What IF</p>
                        <p class="foot">Big Data | Reality Mining | Machine Learning</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6" style="background:#002D40">
                    <div class="center vertical">
                        <p class="lead">Digital Humanities</p>
                        <p class="foot">Language | Culture | Society</p>
                    </div>
                </div>
                <div class="col-sm-6" style="background:#005869">
                    <div class="center vertical">
                        <p class="lead">Vox Pix Motion</p>
                        <p class="foot">Computer Vision | Augmented Reality | Animation</p>
                    </div>
                </div>
            </div-->
            {% for group in site.data.groups.list %}
                <img src="/assets/img/{{ group.banner }}" height="75">
            {% endfor %}
        </div>
    </div>
</div>

<div class="wrapper" id="ecosystem">
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
                <p class="h2">Incentives for Creativity</p>
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

<div class="container people" id="people">
    <h2 class="head">People</h2>
    <h3>Faculty</h3>
    <div class="row row-centered">
        {% for person in site.data.people.faculty %}
            <div class="col-sm-3 col-centered col-fixed">
                <img src="{{ person.img }}">
                <p class="lead">{{ person.name }}</p>
                <p class="foot">{{ person.bio }}</p>
            </div>
        {% endfor %}
    </div>
    <h3>Students</h3>
    <div class="row row-centered">
        {% for person in site.data.people.student %}
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

<div class="fluid-hero" id="opportunities">
    <div class="row">
        <div class="col-xs-6">
            <div class="center vertical">
                <h2>Opportunities</h2>
                <h3>Student Associateship Program</h3>
                <h3>Summer Internship Program</h3>
                <h4><a href="/student-associateship-program/">Learn More</a></h4>
            </div>
        </div>
        <div class="col-xs-6">
            <div class="center vertical">
                <img src="/assets/img/logo.foot.png">
            </div>
        </div>
    </div>
</div>

<div class="full-width-img">
    <img src="http://cdn.ducic.ac.in/ducic/ImagesCommons/itil-1.jpg">
</div>