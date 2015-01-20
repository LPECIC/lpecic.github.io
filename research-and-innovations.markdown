---
layout: page
title:  Research and Innovations
hero:   /assets/img/background.arr.v.png

---
<div class="container research">
    {% for group in site.data.groups.list %}
        <div class="row">
            <div class="col-md-6 left">
                <h2>{{ group.name }}</h2>
                <p>{{ group.areas }}</p>
                <img src="/assets/img/{{ group.banner }}">
            </div>
            <div class="col-md-offset-1 col-md-5 right">
                <p>{{ group.description }}</p>
                <a href="javascript:void(0)" onclick='$("#{{ group.name | remove:" "}}").slideToggle();'>Research Projects</a>
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