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

<!-- {% include 'landing-page-links.html', file: "ai" %}
{% include 'landing-page-links.html', file: "cyber" %}
{% include 'landing-page-links.html', file: "design" %}
{% include 'landing-page-links.html', file: "hack" %}
{% include 'landing-page-links.html', file: "icpc" %}
{% include 'landing-page-links.html', file: "studio" %}
{% include 'landing-page-links.html', file: "teachla" %}
{% include 'landing-page-links.html', file: "w" %} -->

{% for committee in committees %}
<div class="landing-page-links">
    <img src="{{ site.baseurl }}/assets/logos/{{ committee.filename }}-wordmark-lightcolor.png">
</div>
{% endfor %}
</div>