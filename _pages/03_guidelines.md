---
layout: page
title: Guidelines
permalink: "/guidelines/"
tags: nav
date: 2000-01-02
---
<div>
    <img class="image-full-width" src="/assets/partials/guidelines-banner.svg">
</div>

<section class="section-guidelines">
    <h2 class="upper">Logomarks</h2>
    <p class="big left ">ACM at UCLA logomarks are visual cues of what each committees, and ACM as a whole, does.</p> 
    <section>
        <h3>Spacing and Sizing</h3>
        <p class="big left wide">Standard logomark images are pre-formatted to meet clearspace requirements. In cases where you need to modify these assests to create custom logomarks, use the following templates to maintain sufficent clearspace. </p>
        <section>   
            <p style="color: #434343;" class="left">For stand-alone logos, use the following template.</p>
            <p style="color: #434343;" class="right">For wordmarks-logo combo, use the following template. If no committee name is present, 
            remove the dot and treat the ‘m’ as the rightmost character</p>
        </section>
        <section>
            {% include "assetbox-template-large.html", title: "Download Template" , file: "partials/large-partial-01.svg" %}
            {% include "assetbox-template-large.html", title: "Download Template" , file: "partials/large-partial-02.png" %}     
        </section>
    </section>
    <section>
        <h3>Color</h3>
        <p class="big left wide">All logos come in two types - light and dark. Makes sure to use the version that maintains a color contrast of at least 0.7 between the background and the color of the diamond.  </p>
        <section>
            {% include "ok-bad-partials.html", title: "OK", file: "partials/acmGood01partial.svg" %}
            {% include "ok-bad-partials.html", title: "OK", file: "partials/acmGood02partial.svg" %}
            {% include "ok-bad-partials.html", title: "BAD", file: "partials/acmBad03partial.svg" %}
            {% include "ok-bad-partials.html", title: "BAD", file: "partials/acmBad04partial.svg" %}
        </section>
    </section>
</section>

<section class="section-guidelines">
    <h2 class="upper">Wordmarks</h2>
    <p class="big left wide">ACM at UCLA Wordmarks are used when the name of the comittee has to be clarified. Built using the proprietary Westwood Sans font, they are designed to be legible in large print while keeping it aligned with ACM’s geometric art style. They can either be used alongside the logomark, or by itself.</p> 
    <section>
        <h3>Spacing and Sizing</h3>
        <p class="big left wide">Standard logomark images are pre-formatted to meet clearspace requirements. In cases where you need to modify these assests to create custom logomarks, use the following templates to maintain sufficent clearspace.  </p>
        <section>   
            <p class="left">For wordmarks-logo combo, use the following template. Note that this is the same as the template in the “Logomark” section</p>
            <p class="right">For wordmarks-logo combo, use the following template. If no committee name is present, remove the dot and treat the ‘m’ as the rightmost character.</p>
            {% include "assetbox-template-large.html", title: "Download Template" , file: "partials/spacing-01.png" %}
            {% include "assetbox-template-large.html", title: "Download Template" , file: "partials/spacing-02.svg" %}    
        </section>
    </section>
    <section>
        <h3>Color</h3>
        <p class="big left wide">
        Comittee wordmarks, in addition to light/dark versions, have a “basic” version and the gradient version. Whenever possible, the gradient version should be used. The basic version should be reserved for cases where colors are limited, such as physical merchandise, or when the gradient has a low color contrast compared to the background.</p>
        <section>
            {% include "ok-bad-partials.html", title: "OK", file: "partials/color-good-01.svg" %}
            {% include "ok-bad-partials.html", title: "OK", file: "partials/color-good-02.svg" %}
            {% include "ok-bad-partials.html", title: "BAD", file: "partials/color-bad-01.svg" %}
            {% include "ok-bad-partials.html", title: "BAD", file: "partials/color-bad-02.svg" %}
        </section>
    </section>
    <section>
        <h3>In Type</h3>
        <p class="left wide">When typing out wordmarks as text, capitalize ACM as well as the first letter in the second word. The dot should be converted to a space.</p>
        <img src="{{ site.baseurl}}/assets/partials/in-type.svg"
        alt="In Type Graphic"
        class="col-1 narrow"/>
        <p class="left wide" style="padding-top:30px; padding-bottom:0;">To add subtitles, use a vertical line separated by a single space:</p>
        <p style="font-size:1.6rem; margin-top:0;">ACM Hack | Hackschool Series</p>
    </section>
</section>

<section class="section-guidelines">
    <h2 class="upper">Compliance</h2>
    <p class="big left wide">In order to comply with UCLA and ACM’s branding policies, there are several rules to follow.  </p> 
    <section>
        <h3>UCLA Policies</h3>
        <p class="left wide" style="margin-top:30px; margin-bottom:10px;">These rules apply for all activities on campus</p>
        <img src="{{ site.baseurl}}/assets/partials/ucla-compliance.png"
        alt="In Type Graphic"
        class="col-1"/>
    </section>
    <section>
        <h3>ACM Policies</h3>
        <p class="left wide">These rules apply for all activities/materials <b>directly</b> dealing with <b>ACM HQ</b>.</p>
        <img src="{{ site.baseurl}}/assets/partials/acm-compliance.png"
        alt="Compliance-graphic"
        class="col-1"/>
    </section>
</section>

<section class="section-guidelines-colors">
    <h2 class="upper">Colors</h2>
    <p class="big left wide">Each committee, including the general ACM at UCLA, has 4 colors defined, as well as a “gradient”. </p> 
    {% include "guidelines-color-grid.html"%}
    <section>
        <h3 style="padding-top:55px">Ratio</h3>
        <p class="left wide" style="margin-top:40px; margin-bottom:30px;">New ACM branding recommends light theme. The bottom chart shows a recommended ratios of colors. The exact ratios are not specified to allow flexibility in design.  </p>
        <img src="{{ site.baseurl}}/assets/partials/ratio-guidelines.svg"
        alt="In Type Graphic"
        class="col-1"/>
    </section>
</section>

<section class="section-guidelines-colors" style="padding-top:100px">
    <h2 class="upper">Typography</h2>
    <p class="big left wide">ACM at UCLA has 4 fonts defined for various uses.</p> 
    <section>
        <div class="col-2">
            <img src="{{ site.baseurl}}/assets/partials/westwood-sans.svg"
            alt="In Type Graphic" />
            <h4>Wordmark Font</h4>
            <p>Westwood Sans is a proprietary font made by ACM to be used in wordmarks, and wordmarks only.</p>
        </div>
        <div class="col-2">
            <img src="{{ site.baseurl}}/assets/partials/poppins.svg"
            alt="In Type Graphic" />
            <h4>Header Font</h4>
            <p>Poppins is the header font, used for headers in posters and websites. As such, any text using Poppins should not exceed about dozen words. For longer phrases, use the body font.</p>
        </div>
        <div class="col-2">
            <img src="{{ site.baseurl}}/assets/partials/open-sans.svg"
            alt="In Type Graphic" />
            <h4>Body Font</h4>
            <p>Open Sans is the body text, generally used for sentences and paragraphs.</p>
        </div>
        <div class="col-2">
            <img src="{{ site.baseurl}}/assets/partials/source-code-pro.svg"
            alt="In Type Graphic" />
            <h4>Code Font</h4>
            <p>Source Code Pro is used when writing code. </p>
        </div>
    </section>
</section>


<section class="section-guidelines-colors" style="padding-top:100px">
    <h2 class="upper">Art</h2>
    <p class="big left wide" style="padding-top:30px; padding-bottom:30px;">ACM at UCLA, like many other tech-related organizations, predominatly use vector-based art, However, in order to help it stand out from other organizations, there are several key art directions to follow.</p> 
    <section>
        <div class="col-3">
            <img src="{{ site.baseurl}}/assets/partials/art01.svg"
            alt="In Type Graphic"
            style="width:100%; height:auto; margin:0" />
            <h4 style="margin-top:20px; margin-bottom:10px">Vector is the basics</h4>
            <p style="margin-top:5px; margin-bottom:5px">Pixel-based art should rarely, if ever, be used. This is to make inmplementations on digital media easier, as well as to speed up production.</p>
        </div>
        <div class="col-3">
            <img src="{{ site.baseurl}}/assets/partials/art02.svg"
            alt="In Type Graphic"
            style="width:100%; height:auto; margin:0" />
            <h4 style="margin-top:20px; margin-bottom:10px">Light Theme</h4>
            <p style="margin-top:5px; margin-bottom:5px">ACM branding recommends light theme, and this should be applied to art as well.</p>
        </div>
        <div class="col-3">
            <img src="{{ site.baseurl}}/assets/partials/art03.svg"
            alt="In Type Graphic"
            style="width:100%; height:auto; margin:0; border-radius: 13.3004px;" />
            <h4 style="margin-top:20px; margin-bottom:10px">Soak it up</h4>
            <p style="margin-top:5px; margin-bottom:5px">The overall color of art should reflect the committee’s color palette - even for things that usually don’t have color.</p>
        </div>
        <div class="col-3">
            <img src="{{ site.baseurl}}/assets/partials/art04.svg"
            alt="In Type Graphic"
            style="width:100%; height:auto; margin:0" />
            <h4 style="margin-top:20px; margin-bottom:10px">Bold and Brilliant</h4>
            <p style="margin-top:5px; margin-bottom:5px">Do not shy away from using vivid colors, unusual color palettes, etc.</p>
        </div>
        <div class="col-3">
            <img src="{{ site.baseurl}}/assets/partials/art05.svg"
            alt="In Type Graphic"
            style="width:100%; height:auto; margin:0" />
            <h4 style="margin-top:20px; margin-bottom:10px">Details</h4>
            <p style="margin-top:5px; margin-bottom:5px">Strike a balance between realism and abstract. Above, the keyboard has detailed bumps, while indivisual letters are removed to avoid clutter.</p>
        </div>
        <div class="col-3">
            <img src="{{ site.baseurl}}/assets/partials/art06.svg"
            alt="In Type Graphic"
            style="width:100%; height:auto; margin:0" />
            <h4 style="margin-top:20px; margin-bottom:10px">Give it depth</h4>
            <p style="margin-top:5px; margin-bottom:5px">Whenever possible, create perception of depth using color, gradients, and/or shadows.</p>
        </div>
    </section>
</section>

<section class="section-guidelines">
    <h2 style="padding-top:100px">Questions?</h2>
    <p>Contact Haki or Tomoki.</p>
</section>
