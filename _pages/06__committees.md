---
layout: page
title: Committees
permalink: /committees/
---
# Committees #
The six committees that make up ACM—W, Hack, ICPC, AI, Studio, and NetSec—each focus on different topics inside the world of computer science and tech. In addition to having a unique logo and color palette, each committee has a tagline on what they do, and a visual motif that distinguishes them from the others.

{% for committee in site.committees %}
<div class="committee-container">
    <a href="{{ committee.url }}"><div class="committee-logo">
        <img src="{{ site.baseurl }}/assets/logos/{{ committee.filename }}-logo.png">
    </div></a>
    <a href="{{ committee.url }}"><div class="committee-description">
        <h1> ACM <span style="color: #{{ committee.hex }}; font-weight:400">{{ committee.title }}</span></h1>
        <p> {{ committee.tagline }} </p>
    </div></a>
</div>
{% endfor %}

To go to a committee's individual branding, click on the corresponding committee above or in the sidebar on the left.
