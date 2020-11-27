---
layout: page
title: ACM Design
permalink: "/"
---

<section>
    <div class="landing-text left">
        <h2>
            ACM at UCLA<br>
            Styleguide
        </h2>
        <p>
            Welcome to the ACM at UCLA branding guideline website!<br>
            Here you can find information about our branding<br>
            alongside a collection of resources and assets.
        </p>
    </div>
    <img class="right" src="{{ site.baseurl }}/assets/partials/landing-page-graphic.svg">
</section>
<section>
    <h3>Before You Start Designing</h3>
    <div class="landing-page-links col-4">
        <a href="{{ site.baseurl }}/guidelines"><p id="guidelines">Guidelines</p></a>
    </div>
    <h3>Assets</h3>
    <div class="landing-page-links col-4">
        <a href="{{ site.baseurl }}/committees/acm"><img id="acm" src="{{ site.baseurl }}/assets/logos/acm-logo-wordmark.png"></a>
    </div>
    {% for committee in committees limit:8 %}<div class="landing-page-links col-4"><a href="{{ site.baseurl }}/committees/{{ committee.filename }}"><img src="{{ site.baseurl }}/assets/logos/{{ committee.filename }}-logo-wordmark-dark-gradient.png"></a></div>{% endfor %}
    </div>
<section>