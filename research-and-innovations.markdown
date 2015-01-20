---
layout: page
title:  Research and Innovations
hero:   /assets/img/background.arr.v.png

groups:
    -   name: "Int Sense"
        description: ""
        projects:
            -   name: "TwoDot7"
                description: ""
                icon: ""
                link: ""
                people:
                    faculty:
                        -   name: "Abhijeet"
                    student:
                        -   name: "Prashant"
                        -   name: "Tarun"
            -   name: "Dijkstra"
                description: ""
                icon: ""
                link: ""
                people:
                    student:
                        -   name: "Prashant"
            -   name: "Jmulate"
                description: ""
                icon: ""
                link: ""
                people:
                    student:
                        -   name: "Prashant"
    -   name: "Sensible Systems"
        description: "The Sensible System group focuses on design of connected devices and networks and embed intelligence into them."
        projects:
            -   name: "Canr"
                description: "Canr is a smart base solution that utilizes Wi-Fi to relay information about the quantity of goods to a central node connecting to the Internet. This product can be used to manage most of the modern industries inventories. This concept of wirelessly relaying information to the central data server will help the administrators with and efficient decisions for maintaining the logistics, as the system provides useful real-time insights about the storage."
                icon: ""
                people:
                    faculty:
                        -   name: "Daipayan"
                    student:
                        -   name: "Tarun"
            -   name: "Project Mezi"
                description: "Project Mezi aims to create smart accessible technology for physics experiments and creative visualization of results.  Under Project Mezi meaning ‘measurement’ the group is developing devices and software for taking measurements in physics experiments with better precision and accuracy. The devices designed by the group shall act as a promoter for learning through practical work in the school and college level physics.  Some of the experiment modules and designs that are currently in progress are characteristics of simple and compound pendulums, co-efficient of restitution of surfaces, time of flight experiments and co-efficient of friction experiments."
                icon: ""
                people:
                    faculty:
                        -   name: "B. Biswal"
                    student:
                        -   name: "Anurag"
                        -   name: "Mayank"
                        -   name: "Tarun"
            -   name: "School Days"
                description: "School Days is a smart Canteen Management System that manages the inventory of the canteen. The system generates insight to the managers about the quantities of eatables that they should buy for a particular day based upon the sales statistics and social media data about the popularity of menu items. The system also helps in promoting customer relations by providing them incentives from time-to-time."
                icon: ""
                people:
                    faculty:
                        -   name: "Abhijeet"
                    student:
                        -   name: "Anurag"
                        -   name: "Mayank"
                        -   name: "Vasundhara"
    -   name: "What IF"
        description: "The group aims at developing innovative tools and solutions that can help individuals to cater the confusions created by Whats Ifs. The main goal of \"What IF\" is to converge the data from diversified sources, build generic framework to integrate them and look for relevant patterns that improves the understanding and generate meaningful insights."
        projects:
            -   name: "Project LNK"
                description: "Project LNK (pronounced Link) aims to shift the weight from speculation to certainty. The way human beings interact, depends largely on the kind of links they build in their social system constrained by the resources they have at their disposal. The project group focuses on the developing an interactive web based tool that can help people to understand better how they are connected to the people around them, how their action is going to affect their connections."
                link: ""
                icon: ""
                people:
                    faculty:
                        -   name: "Abhijeet"
                    student:
                        -   name: "Madhulika"
                        -   name: "Prashant"
                        -   name: "Tarun"
            -   name: "ReQ: A Recommendation System Application Based on Reality Mining"
                description: "In this project, we aim to find what appeals to the human psyche the most, judging by the behavioural patterns. Behavioural patterns are determined by his cellphone usage data, his online social presence, amongst many other parameters that speak of his personality. In a nutshell, the application makes use of reality mining and social media mining to draw out a definitive personality sketch for every user to generate custom recommendations."
                people:
                    faculty:
                        -   name: "Abhijeet"
                    student:
                        -   name: "Madhulika"
                        -   name: "Shreya"
            -   name: "Understanding the Nature of Mass Movements"
                description: "How does a single incident trigger a revolution? What causes some large revolutions to fail while other trivial uprisings achieve their aim? In this project we examine to find the factors that play a role in such mass uprisings and quantify their role by mining text data available from various digital channels. The model shall be able to create an index about the stage of the revolution and predict its larger outcome based on the incoming digital data feeds."
                people:
                    faculty:
                        -   name: "Abhijeet"
                        -   name: "B. Biswal"
                    student:
                        -   name: "Tarun"
    -   name: "Vox Pix Motion"
        description: "The Vox Pix motion group interacts with this important part of the human information system.  The systems we develop here help the machines to unfold the information in the complexities of visual signals. The objective of the group revolves around the visual human-machine-environment interaction. The group activities range from the analysis of visual inputs to producing effective visual experience. The group works on computer vision, image analysis, image processing, augmented reality, animations, creative visualization and a better machine-human interaction using vision."
---
<!--div class="container research">
    <div class="row">
        <div class="col-md-5">
            <h2>Research Groups</h2>
            <h3>IntSense</h3>
            <p class="foot">Graphics | Apps | Computational Creativity</p>
            <h3>Sensible Systems</h3>
            <p class="foot">IoT | Affective Computing | Pervasive Computing</p>
            <h3>What If</h3>
            <p class="foot">Big Data | Reality Mining | Machine Learning</p>
            <h3>Digital Humanities</h3>
            <p class="foot">Language | Culture | Society</p>
            <h3>Vox Pix Motion</h3>
            <p class="foot">Computer Vision | Augmented Reality | Animation</p>
        </div>
    </div>
</div-->

<div class="container research">

    {% for group in page.groups %}
        <div class="row">
            <h2>{{ group.name }}</h2>
            <p>{{ group.description }}</p>
            <h3>Research Projects</h3>

            <div class="project_showcase">
            {% for project in group.projects %}
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
            {% endfor %}
        </div>
    {% endfor %}
</div>