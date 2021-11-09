---
layout: page
title: ACM Design
permalink: "/"
---

<section class="landing-page-welcome">
    <div class="container">
        <h2>Welcome</h2>
        <p>
            ACM Styleguide is the one-stop location to know<br>
            everything about our branding.
        </p>
    </div>
</section>

<section class="landing-page-grid">
    <div class="container is-widescreen">
        <div class="grid">
            <div class="landing-page-guidelines">
                <p class="is-size-7-touch">
                    First time? <br>
                    Read the <a href="{{ site.baseurl }}/guidelines">Guidelines</a> &rarr;
                </p>
            </div>
            <div class="landing-page-links">
                <a href="{{ site.baseurl }}/committees/acm"><img id="acm" src="{{ site.baseurl }}/assets/logos/acm-logo-wordmark.png"></a>
            </div>
            {% for committee in committees limit:8 %}<div class="landing-page-links"><a href="{{ site.baseurl }}/committees/{{ committee.filename }}"><img src="{{ site.baseurl }}/assets/logos/{{ committee.filename }}-wordmark-dark-gradient.png"></a></div>{% endfor %}
            </div>
        </div>
    </div>
<section>