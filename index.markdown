---
layout:   index
hero:     /assets/img/the-mechanism-of-418198_1280.jpg
caption:  Open Source 3D Printing Technology Workshop
details:  Registrations opening soon.
---
<div class="fluid-hero lg" id="opportunities">
    <div class="row">
        <div class="col-xs-6">
            <div class="center vertical">
                <h2>Learn More About </h2>
                <h3><a href="/about/">The Lab</a></h3>
                <h3><a href="/research-and-innovations/">Research and Innovations</a></h3>
                <h3><a href="/student-associateship-program/">Student Associateship Program</a></h3>
                <h3><a href="/student-associateship-program/">Summer Internship Program</a></h3>
                <h3><a href="/contact/">Contact Information</a></h3>
            </div>
        </div>
        <div class="col-xs-6">
            <div class="center vertical">
                <img src="/assets/img/icon.diversity.png">
                <img src="/assets/img/icon.culture.png">
                <img src="/assets/img/icon.intense.competition.png">
                <img src="/assets/img/icon.fuzzy.processes.png">
            </div>
        </div>
    </div>
</div>

<div class="posts">
  {% for post in site.posts %}
    <!--article class="post">    
      
      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      <div class="entry">
        {{ post.content | truncatewords:40}}
      </div>
      
      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article-->
  {% endfor %}
</div>
