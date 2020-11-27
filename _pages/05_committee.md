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


{% if committee.filename != "acm" %}
<img class="image-full-width" src="{{ site.baseurl }}/assets/resized-banners/{{ committee.filename }}-banner.svg">
{% endif %}

<section section="padding-bottom: 3rem; padding-top: 3rem;">
  <h4 class="upper">Logomarks</h4>
  
  {% capture logomark_filepath %}logos/{{committee.filename}}-logo.png{% endcapture %}
  {% capture white_logomark_filepath %}logos/{{committee.filename}}-logo-light.png{% endcapture %}
  {% capture black_logomark_filepath %}logos/{{committee.filename}}-logo-dark.png{% endcapture %}

  {% include "assetbox-light.html", title: "Primary logomark", file: logomark_filepath %}
  {% include "assetbox-dark.html", title: "White logomark", file: white_logomark_filepath %}
  {% include "assetbox-light.html", title: "Black logomark", file: black_logomark_filepath %}
  {% capture logomark_dl %}{{committee.filename}}-assets.zip{% endcapture %}
  {% capture logomark_dl_button %}Download all {{committee.title}} logomarks{% endcapture %}
  {% include "button.html", file: logomark_dl, filename: logomark_dl, content: logomark_dl_button %}

</section>

<section section="padding-bottom: 3rem; padding-top: 3rem;">
  <h4 class="upper">Wordmarks</h4>
    
  {% if committee.filename != "acm" %}
  {% capture darkcolor_wordmark_filepath %}logos/{{committee.filename}}-wordmark-light-gradient.png{% endcapture %} 
  {% capture lightcolor_wordmark_filepath %}logos/{{committee.filename}}-wordmark-dark-gradient.png{% endcapture %}
  {% capture light_wordmark_filepath %}logos/{{committee.filename}}-wordmark-light.png{% endcapture %}
  {% capture dark_wordmark_filepath %}logos/{{committee.filename}}-wordmark-dark.png{% endcapture %}
  {% include "assetbox-light.html", title: "Primary wordmark", file: lightcolor_wordmark_filepath %}
  {% include "assetbox-dark.html", title: "Secondary wordmark", file: darkcolor_wordmark_filepath %}
  {% include "assetbox-dark.html", title: "Light wordmark", file: light_wordmark_filepath %}
  {% include "assetbox-light.html", title: "Dark wordmark", file: dark_wordmark_filepath %}

  {% else %}
  {% capture logo_wordmark_filepath %}logos/{{committee.filename}}-logo-wordmark.png{% endcapture %}
  {% capture light_logo_wordmark_filepath %}logos/{{committee.filename}}-logo-wordmark-light.png{% endcapture %}
  {% capture dark_logo_wordmark_filepath %}logos/{{committee.filename}}-logo-wordmark-dark.png{% endcapture %}
  {% capture logo_wordmark_extended_filepath %}logos/{{committee.filename}}-logo-wordmark-extended.png{% endcapture %}
  {% capture light_logo_wordmark_extended_filepath %}logos/{{committee.filename}}-logo-wordmark-extended-light.png{% endcapture %}
  {% capture dark_logo_wordmark_extended_filepath %}logos/{{committee.filename}}-logo-wordmark-extended-dark.png{% endcapture %}
  {% capture light_wordmark_filepath %}logos/{{committee.filename}}-wordmark-light.png{% endcapture %}
  {% capture dark_wordmark_filepath %}logos/{{committee.filename}}-wordmark-dark.png{% endcapture %}
  {% include "assetbox-light.html", title: "Logo wordmark", file: logo_wordmark_filepath %}
  {% include "assetbox-dark.html", title: "Light logo wordmark", file: light_logo_wordmark_filepath %}
  {% include "assetbox-light.html", title: "Dark logo wordmark", file: dark_logo_wordmark_filepath %}
  {% include "assetbox-light.html", title: "Wordmark extended", file: logo_wordmark_extended_filepath %}
  {% include "assetbox-dark.html", title: "Light wordmark extended", file: light_logo_wordmark_extended_filepath %}
  {% include "assetbox-light.html", title: "Dark wordmark extended", file: dark_logo_wordmark_extended_filepath %}
  {% include "assetbox-dark.html", title: "Light wordmark", file: light_wordmark_filepath %}
  {% include "assetbox-light.html", title: "Dark wordmark", file: dark_wordmark_filepath %}
  {% endif %}
</section>

<section>
  <h4 class="upper">Colors</h4>
  {{ content }}
  {% include "color-grid-committees.html", committeePg: committee %}
</section>

{% if committee.filename != "acm" %}
<section>
  <h4 class="upper">Pattern/Motif</h4>
  <h5>Base Motif:</h5>
  <img class="col-1" src="{{ site.baseurl }}/assets/logos/{{ committee.filename }}-motif-base.png">
  <h5>Applied Motif:</h5>
  <img class="col-1" src="{{ site.baseurl }}/assets/logos/{{ committee.filename }}-motif-applied.png">
</section>
{% endif %}


