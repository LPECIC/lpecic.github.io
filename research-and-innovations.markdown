---
layout: page
title:  Research and Innovations
hero:   /assets/img/background.arr.v.png

---
<div class="container research">
    {% for group in site.data.groups.list %}
        <div class="row" id="group_{{ group.name | remove:" "}}">
            <div class="col-md-6 left">
                <h2>{{ group.name }}</h2>
                <p>{{ group.areas }}</p>
                <img src="/assets/img/{{ group.banner }}">
            </div>
            <div class="col-md-offset-1 col-md-5 right">
                <p>{{ group.description }}</p>
                {% if group.projects.size > 0 %}
                    <a href="javascript:void(0)" onclick='$("#{{ group.name | remove:" "}}").slideToggle();'>Research Projects</a>
                {% endif %}
                <ol class="projects" id="{{ group.name | remove:" "}}">
                    {% for project in group.projects %}
                        <li class="project_showcase">
                            <p class="project_name">{{ project.name }}</p>
                            <p class="project_description">{{ project.description }}</p>
                            <div class="project_faculty">
                                {% for faculty in project.people.faculty %}
                                    {% for person in site.data.people.faculty %}
                                        {% if person.name contains faculty.name %}
                                            <div class="person">
                                                <p class="name">{{ faculty.name }}</p>
                                                <img src="{{ person.img }}">
                                            </div>
                                            {% break %}
                                        {% endif %}
                                    {% endfor %}
                                {% endfor %}
                            </div>
                            <div class="project_student">
                                {% for student in project.people.student %}
                                    {% for person in site.data.people.student %}
                                        {% if person.name contains student.name %}
                                            <div class="person">
                                                <p class="name">{{ student.name }}</p>
                                                <img src="{{ person.img }}">
                                            </div>
                                            {% break %}
                                        {% endif %}
                                    {% endfor %}
                                {% endfor %}
                            </div>
                        </li>
                    {% endfor %}
                </ol>
            </div>
        </div>
    {% endfor %}
</div>

<div class="fluid-hero" id="opportunities">
    <div class="row">
        <div class="col-xs-6">
            <div class="center vertical">
                <h2>About the Lab</h2>
                <h3>Ecosystem</h3>
                <h3>People</h3>
                <h4><a href="/about/">Learn More</a></h4>
            </div>
        </div>
        <div class="col-xs-6">
            <div class="center vertical">
                <img src="/assets/img/logo.foot.png">
            </div>
        </div>
    </div>
</div>
