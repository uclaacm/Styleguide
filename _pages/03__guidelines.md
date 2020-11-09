---
layout: page
title: Guidelines
permalink: "/guidelines/"
tags: nav
date: 2000-01-02
---

# Logos

For each group, we’ve created a logomark and a wordmark. There’s currently no guidelines on using the two together. For using either of them in general though, we suggest making sure the margins for logomarks are at least ¼ its height/width, and the margins for wordmarks are ½ of its height.

![Logo Margin Diagram]({{ site.baseurl }}/assets/logos/logo-margins.png){: .image-full-width}

An exception to this would be when using them in conjunction with each other, or with extra “branded” elements like the committee taglines.

![AI Cover Photo]({{ site.baseurl }}/assets/logos/ai-motif-applied.png){: .image-full-width}

{% include "button.html", file: "allmarks.zip", filename:"all-logos", content: "Download all logomarks and wordmarks" %}

## Logomarks

Our logomark takes inspiration from ACM's official diamond-shaped logo. Each has an icon representing each committee's topic of focus.

{% include "assetbox-light.html", title: "UCLA ACM logomark", file: "logos/acm-logo.png" %}
{% include "assetbox-light.html", title: "ACM-W logomark", file: "logos/w-logo.png" %}
{% include "assetbox-light.html", title: "ACM Hack logomark", file: "logos/hack-logo.png" %}
{% include "assetbox-light.html", title: "ACM ICPC logomark", file: "logos/icpc-logo.png" %}
{% include "assetbox-light.html", title: "ACM AI logomark", file: "logos/ai-logo.png" %}
{% include "assetbox-light.html", title: "ACM Studio logomark", file: "logos/studio-logo.png" %}
{% include "assetbox-light.html", title: "ACM Cyber logomark", file: "logos/cyber-logo.png" %}
{% include "assetbox-light.html", title: "ACM Design logomark", file: "logos/design-logo.png" %}
{% include "assetbox-light.html", title: "ACM TeachLA logomark", file: "logos/teachla-logo.png" %}

### Suggested Usage for logomarks

Use logomarks when you are limited in the space you're given to insert branding. (Ex: Laptop Sticker)

{% include "button.html", file: "_Logomarks.zip", filename: "logomarks", content: "Download all logomarks" %}

## Wordmarks

{% include "assetbox-light.html", title: "UCLA ACM wordmark", file: "logos/acm-wordmark-dark-gradient.png" %}
{% include "assetbox-light.html", title: "ACM-W wordmark", file: "logos/w-wordmark-dark-gradient.png" %}
{% include "assetbox-light.html", title: "ACM Hack wordmark", file: "logos/hack-wordmark-dark-gradient.png" %}
{% include "assetbox-light.html", title: "ACM ICPC wordmark", file: "logos/icpc-wordmark-dark-gradient.png" %}
{% include "assetbox-light.html", title: "ACM AI wordmark", file: "logos/ai-wordmark-dark-gradient.png" %}
{% include "assetbox-light.html", title: "ACM Studio wordmark", file: "logos/studio-wordmark-dark-gradient.png" %}
{% include "assetbox-light.html", title: "ACM Cyber wordmark", file: "logos/cyber-wordmark-dark-gradient.png" %}
{% include "assetbox-light.html", title: "ACM Design wordmark", file: "logos/design-wordmark-dark-gradient.png" %}
{% include "assetbox-light.html", title: "ACM TeachLA wordmark", file: "logos/teachla-wordmark-dark-gradient.png" %}

### Suggested Usage for wordmarks

Try to use wordmarks in conjunction with the logomarks. If this isn't possible, make sure the sizing of the wordmark clearly establishes the committee as the group of ownership.

{% include "button.html", file: "_Wordmarks.zip", filename: "wordmarks", content: "Download all wordmarks" %}

# Colors

Each group in UCLA ACM has four colors: a primary color, a lighter and darker version of the primary color, and a secondary color.

{% include "ok-bad-partials.html", title: "OK", file: "partials/acmGood01partial.svg" %}
{% include "ok-bad-partials.html", title: "OK", file: "partials/acmGood02partial.svg" %}
{% include "ok-bad-partials.html", title: "BAD", file: "partials/acmBad03partial.svg" %}
{% include "ok-bad-partials.html", title: "BAD", file: "partials/acmBad04partial.svg" %}

## Primary Colors

These are the main differentiating components between committees. They make up each committees' logos and are the key elements to the committees' graphics.
{% include "colorswatch.html", name: "ACM Cobalt", hex: "#3B59ED", rgb: "(59, 89, 237)" %}
{% for committee in committees %}

<div class="color-container">
    <div style="background-color: {{ committee.colors[0].hex }}" class="color"></div>
    <div class="color-label">
        <p class="color-name">{{ committee.colors[0].name }}</p>
        <p>HEX: {{ committee.colors[0].hex }}</p>
        <p>RGB: {{ committee.colors[0].rgb }}</p>
    </div>
</div>
{% endfor %}

## Light Primary Colors

Use these where you would like to have committee branding, without as much emphasis.
{% include "colorswatch.html", name: "ACM Tint", hex: "#ACBAFA", rgb: "(172, 186, 250)" %}
{% for committee in committees %}

<div class="color-container">
    <div style="background-color: {{ committee.colors[1].hex }}" class="color"></div>
    <div class="color-label">
        <p class="color-name">{{ committee.colors[1].name }}</p>
        <p>HEX: {{ committee.colors[1].hex }}</p>
        <p>RGB: {{ committee.colors[1].rgb }}</p>
    </div>
</div>
{% endfor %}

## Dark Primary Colors

Use these shades in situations where you would normally use black.
{% include "colorswatch.html", name: "ACM Black", hex: "#262938", rgb: "(38, 41, 56)" %}
{% for committee in committees %}

<div class="color-container">
    <div style="background-color: {{ committee.colors[2].hex }}" class="color"></div>
    <div class="color-label">
        <p class="color-name">{{ committee.colors[2].name }}</p>
        <p>HEX: {{ committee.colors[2].hex }}</p>
        <p>RGB: {{ committee.colors[2].rgb }}</p>
    </div>
</div>
{% endfor %}

## Secondary Colors

Each committee's secondary color is one of the other committee's primary color (ex. Hack's secondary is Studio's Raspberry).
{% include "colorswatch.html", name: "ACM Secondary", hex: "#FFBA44", rgb: "(255, 186, 68)" %}
{% for committee in committees %}

<div class="color-container">
    <div style="background-color: {{ committee.colors[3].hex }}" class="color"></div>
    <div class="color-label">
        <p class="color-name">{{ committee.colors[3].name }}</p>
        <p>HEX: {{ committee.colors[3].hex }}</p>
        <p>RGB: {{ committee.colors[3].rgb }}</p>
    </div>
</div>
{% endfor %}

## Supplementary Colors

These colors are always available to use, regardless of committee. When normally using pure black (#000000), opt for the black below instead.
{% include "colorswatch.html", name: "White", hex: "#FFFFFF", rgb: "(255, 255, 255)" %}
{% include "colorswatch.html", name: "Black", hex: "#242424", rgb: "(24, 24, 24)" %}

# Typography

UCLA ACM uses three main typefaces: Poppins, Palanquin Dark, and Chivo.

{% include "type.html", family: "Poppins", weight: "700" %}
As our main display typeface, [Poppins](https://fonts.google.com/specimen/Poppins "Poppins on Google Fonts") is used for virtually all content with ACM branding. It's fun and friendly, and represents what we want our events to be like. As such, Poppins is the foundation for all our committees' wordmarks. We suggest using this whenever you want your content to have a strong association with ACM.

{% include "type.html", family: "Palanquin Dark", weight: "700" %}
[Palanquin Dark](https://fonts.google.com/specimen/Palanquin+Dark "Palanquin Dark on Google Fonts") is our main header typeface, which we use on all our websites when we have copy/headings that speak, not show. It has a more organic vibe compared to Poppins. We suggest using Palanquin Dark on your website headings, but not for graphics.

{% include "type.html", family: "Chivo", weight: "400" %}
[Chivo](https://fonts.google.com/specimen/Chivo "Chivo on Google Fonts") is our main body typeface. It's design is more similar to tech aesthetics, and can be used for casual copy, or more serious situations. We suggest using Chivo for smaller UI elements and body text.

## Keep it Poppins'

There aren't really strict guidelines on how to use these typefaces—designing with them is up to your discretion. Likewise, there's no need to adhere to these type families, as they may change in the future. That being said, when in doubt and don't care about font specifics, use Poppins.

{% include "assetbox-template-large.html", title: "Download Template" , file: "partials/large-partial-01.svg" %}
{% include "assetbox-template-large.html", title: "Download Template" , file: "partials/large-partial-02.png" %}

{% include "color-grid-committees.html" %}
