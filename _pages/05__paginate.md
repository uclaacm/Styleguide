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
permalink:  "/committees/{{ committee.filename }}/"
tags: 
---

<div>
  <div class="committee-container committee-title">
      <div class="committee-logo">
        <img src="{{ site.baseurl }}/assets/logos/{{ committee.filename }}-logo.png">
      </div>
      <div class="committee-description">
        <h1> ACM
          <span style="color: #{{ committee.hex }}; font-weight:400">{{ committee.title }}</span>
        </h1>
        <p> {{ committee.tagline }} </p>
      </div>
  </div>

  <h2>Logomarks</h2>
  <p>We suggest using the white and black logomarks in situations where the primary logomark may not be clearly visible.</p>
  {% capture logomark_filepath %}logos/{{committee.filename}}-logo.png{% endcapture %}
  {% capture white_logomark_filepath %}logos/{{committee.filename}}-logo-white.png{% endcapture %}
  {% capture black_logomark_filepath %}logos/{{committee.filename}}-logo-black.png{% endcapture %}

  {% include "assetbox.html", title: "Primary logomark", file: logomark_filepath %}
  {% include "assetbox.html", title: "White logomark", file: white_logomark_filepath %}
  {% include "assetbox.html", title: "Black logomark", file: black_logomark_filepath %}

  {% capture logomark_dl %}{{committee.filename}}-logomarks.zip{% endcapture %}
  {% capture logomark_dl_button %}Download all {{committee.title}} logomarks{% endcapture %}
  {% include "button.html", file: logomark_dl, filename: logomark_dl, content: logomark_dl_button %}
  
  <h3>Social media logomarks</h3>
  <p>Social media doesn't let you add margins to profile pictures, so we've done it for you. Use these files for social media profiles.</p>
  {% capture logomark_dl_sm %}{{committee.filename}}-logomarks-sm.zip{% endcapture %}
  {% capture logomark_dl_sm_button %}Download all {{committee.title}} logomarks for social media{% endcapture %}
  {% include "button.html", file: logomark_dl_sm, filename: logomark_dl_sm, content: logomark_dl_sm_button %}
  

  <h2>Wordmarks</h2>
  <p>We suggest using the wordmark contrasts the most with the background.</p>
  {% capture darkcolor_wordmark_filepath %}logos/{{committee.filename}}-wordmark-darkcolor.png{% endcapture %} 
  {% capture lightcolor_wordmark_filepath %}logos/{{committee.filename}}-wordmark-lightcolor.png{% endcapture %}
  {% capture light_wordmark_filepath %}logos/{{committee.filename}}-wordmark-light.png{% endcapture %}
  {% capture dark_wordmark_filepath %}logos/{{committee.filename}}-wordmark-dark.png{% endcapture %}
  {% capture fullcolor_wordmark_filepath %}logos/{{committee.filename}}-wordmark-fullcolor.png{% endcapture %}
  
  {% include "assetbox.html", title: "Primary wordmark", file: darkcolor_wordmark_filepath %}
  {% include "assetbox.html", title: "Secondary wordmark", file: lightcolor_wordmark_filepath %}
  {% include "assetbox.html", title: "Light wordmark", file: light_wordmark_filepath %}
  {% include "assetbox.html", title: "Dark wordmark", file: dark_wordmark_filepath %}
  {% include "assetbox.html", title: "Full color wordmark", file: fullcolor_wordmark_filepath %}

  {% capture wordmark_dl %}{{committee.filename}}-wordmarks.zip{% endcapture %}
  {% capture wordmark_dl_button %}Download all {{committee.title}} wordmarks{% endcapture %}
  {% include "button.html", file: wordmark_dl, filename: wordmark_dl, content: wordmark_dl_button %}

  <h2>Colors</h2>
  {{ content }}

  {%- for color in committee.colors %}
  {% include "colorswatch.html", name: color.name, hex: color.hex, rgb: color.rgb %}
  {% endfor -%}

  <h2>Pattern/Motif</h2>
  <p>Unfortunately no pattern assets exist on their own, but we suggest using the corresponding facebook group cover photos for reference:</p>
  <img class="image-full-width" src="{{ site.baseurl }}/assets/logos/{{ committee.filename }}-coverphoto.png">
</div>
