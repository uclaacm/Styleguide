---
layout: page
title: ACM Design
permalink: "/"
---

<div class="landing-container">
    <div class="landing-text">
        <h1>
            UCLA ACM<br>
            Styleguide
        </h1>
        <h2>
            Welcome to the UCLA ACM branding guideline website!<br>
            Here you can find information about our branding alongside a collection of resources and assets.
        </h2>
    </div><img src="{{ site.baseurl }}/assets/partials/landing-page-graphic.svg">
    <div class="landing-subheading">
        Before You Start Designing
    </div>
    <div class="landing-page-links">
        <img src="{{ site.baseurl }}/assets/logos/acm-wordmark-lightcolor.png">
    </div>
    <div class="landing-subheading">
        Assets
    </div>
{% for committee in committees %}
<div class="landing-page-links">
    <a href="{{ site.baseurl }}/committees/{{ committee.filename }}" ><img src="{{ site.baseurl }}/assets/logos/{{ committee.filename }}-wordmark-lightcolor.png"></a>
</div>
{% endfor %}
</div>