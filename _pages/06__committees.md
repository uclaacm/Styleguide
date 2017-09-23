---
layout: page
title: Committees
permalink: /committees/
---
These are our committees.

{% for committee in site.committees %}
  <a href="{{ committee.url }}" class="committee-link">{{ committee.title }}</a>
{% endfor %}
