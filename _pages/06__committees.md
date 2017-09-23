---
layout: page
title: Committees
permalink: /committees
---
These are our committees.

{% for committee in site.committees %}
  <p>{{ committee.title }}</p>
{% endfor %}
