---
layout:   index
hero:     /assets/img/the-mechanism-of-418198_1280.jpg
caption:  Open Source 3D Printing Technology Workshop
details:  Registrations opening soon.
---
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