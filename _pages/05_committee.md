---
title: ""
pagination:
  data: committees
  size: 1
  alias: committee
  addAllPagesToCollections: true
layout: page.html
renderData:
  title: "{{ committee.title }}"
permalink: "/committees/{{ committee.filename }}/"
tags:
---

<div>  
  <img class="image-full-width" src="{{ site.baseurl }}/assets/logos/{{ committee.filename }}-motif-applied.png">

  <div style="padding-bottom: 3rem; padding-top: 3rem;">
  <h2>Logomarks</h2>
  <p>We suggest using the white and black logomarks in situations where the primary logomark may not be clearly visible.</p>
  {% capture logomark_filepath %}logos/{{committee.filename}}-logo.png{% endcapture %}
  {% capture white_logomark_filepath %}logos/{{committee.filename}}-logo-light.png{% endcapture %}
  {% capture black_logomark_filepath %}logos/{{committee.filename}}-logo-dark.png{% endcapture %}

{% include "assetbox-light.html", title: "Primary logomark", file: logomark_filepath %}
{% include "assetbox-dark.html", title: "White logomark", file: white_logomark_filepath %}
{% include "assetbox-light.html", title: "Black logomark", file: black_logomark_filepath %}

{% capture logomark_dl %}{{committee.filename}}-assets.zip{% endcapture %}
{% capture logomark_dl_button %}Download all {{committee.title}} logomarks{% endcapture %}
{% include "button.html", file: logomark_dl, filename: logomark_dl, content: logomark_dl_button %}

</div>

<div style="padding-bottom: 3rem; padding-top: 3rem;">
  <h2>Wordmarks</h2>
  <p>We suggest using the wordmark contrasts the most with the background.</p>
  {% capture darkcolor_wordmark_filepath %}logos/{{committee.filename}}-wordmark-light-gradient.png{% endcapture %} 
  {% capture lightcolor_wordmark_filepath %}logos/{{committee.filename}}-wordmark-dark-gradient.png{% endcapture %}
  {% capture light_wordmark_filepath %}logos/{{committee.filename}}-wordmark-light.png{% endcapture %}
  {% capture dark_wordmark_filepath %}logos/{{committee.filename}}-wordmark-dark.png{% endcapture %}
  
  {% include "assetbox-light.html", title: "Primary wordmark", file: lightcolor_wordmark_filepath %}
  {% include "assetbox-dark.html", title: "Secondary wordmark", file: darkcolor_wordmark_filepath %}
  {% include "assetbox-dark.html", title: "Light wordmark", file: light_wordmark_filepath %}
  {% include "assetbox-light.html", title: "Dark wordmark", file: dark_wordmark_filepath %}

</div>

<div style="padding-bottom: 3rem; padding-top: 3rem;">
  <h2 style="padding: 0.5rem;">Colors</h2>
  {{ content }}

{% include "color-grid-committees.html", committeePg: committee %}

</div>

<div style="padding-bottom: 3rem; padding-top: 3rem;">
  <h2>Pattern/Motif</h2>
  <p>Unfortunately no pattern assets exist on their own, but we suggest using the corresponding facebook group cover photos for reference:</p>
  <p>Applied Motif:<p>
  <img class="image-full-width" id="bottom-img" src="{{ site.baseurl }}/assets/logos/{{ committee.filename }}-motif-applied.png">
  <p>Base Motif:<p>
  <img class="image-full-width" id="bottom-img" src="{{ site.baseurl }}/assets/logos/{{ committee.filename }}-motif-base.png">
</div>

</div>
