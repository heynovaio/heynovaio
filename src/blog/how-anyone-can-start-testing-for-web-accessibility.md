---
date: 2020-10-24
author: Stephen Belyea
title: How anyone can start testing for web accessibility
featuredImage: ../images/woman-in-wheelchair.jpeg
category: accessibility
bio: Husband, father, habitual dork, front end developer + accessibility instigator, attempted writer, ex-pat Maritimer. 
bioImage: ../images/stephen.jpeg
---

_**Before we start, let’s set expectations**: the tips and testing methods ahead are for anyone to use. You don’t need to be a web designer or developer, and you don’t need specific product experience._

_**Web accessibility is for everyone; so basic testing can be done by anyone!**_

---

Digital accessibility can feel like a complex and daunting subject to jump into. Building a case for your clients, co-workers, or leadership can be a big challenge. When seeking help from accessibility specialists (like **Hey Nova**!), there are a number of important steps to get your online services in order. These can include detailed auditing and reporting, usability testing, remediation, training for your team, and ongoing monitoring and support. Each of these will have an associated timeline and cost which can vary depending on the size of the project, the number of issues found, the severity of impact, etc.

This can be an awful lot for someone to consider when first thinking about digital accessibility. It is entirely possible that no one in your company is even _aware_ of how good or bad the online experience may currently be for users with disabilities! Even employees with disabilities may not yet have come into contact with features which would cause a barrier to them. 

**Side note**: this is a great case for not only _building_ a highly diverse team; but seeking out input and perspective from _across_ that team.

## Fear not!

With all this in mind, it can be tough to even figure out where to begin!

Fortunately, there are a few initial steps that _anyone_ in an organization can take -- regardless of title, responsibilities, or budget. Only two things are required in order to begin testing for accessibility:

1. Access to the company’s online material
2. Someone or some channel with which to share your findings

## <u>Test #1</u>: Use a keyboard

![hands poised at the keys of a mechanical style keyboard](../images/hands-on-mechanical-keyboard.jpeg)

It is flabbergasting to see, time and time again, how infrequently design and development teams seem to test their products with a keyboard! This isn’t limited to small companies and startups, either. This extends to [the highest levels of the tech industry](https://www.cnet.com/news/for-people-with-disabilities-accessibility-techs-still-not-all-it-could-be/).

This testing approach is incredibly simple. It boils down to this:

1. Identify a workflow or action that users should be able to complete (eg. login to their account)
2. (Optional) Unplug your mouse
3. Using only your keyboard (eg. Tab, arrows, Enter, etc.), step through the intended path
4. Repeat steps 1-3 for other areas of the website

**Congratulations**: you’ve now done more accessibility testing than the majority of web designers, product managers, and developers working in the business today! 

Many people rely on a keyboard to use the web. This can include: 

* Mobility or dexterity issues
* Tremors or other motor control factors
* Screen reader users (including, but not limited to, people with visual impairments)

Keyboards are also helpful for temporary situations, such as someone eating lunch with their dominant hand while catching up on work.

## <u>Test #2</u>: Use a screen reader

![young woman in a cubicle wearing headphones smiles with her hands on a keyboard](../images/woman-wearing-headphones.jpeg)

Once you’ve tested the usability of your company’s website via keyboard, a helpful next step is to explore it using a screen reader. This can be a confusing experience if you’ve never used one before -- and that’s ok! This test method involves a bit more effort than the keyboard; but it can still be done for free and with no previous testing experience.

Start by watching a few [demonstrations online by people who use a screen reader regularly](https://www.youtube.com/watch?v=dEbl5jvLKGQ). Their navigation keys and shortcuts will be different, [depending on the device or operating system used](https://www.youtube.com/watch?v=TiP7aantnvE), but it helps to get a clear idea of the conventions and [general experience of navigating the web by ear](https://www.youtube.com/watch?v=wueLXCbm_KY). 

Next, you’ll need to identify the screen reader and text-to-speech application to use. If you’re on Windows, [the default is Narrator](https://support.microsoft.com/en-us/windows/hear-text-read-aloud-with-narrator-040f16c1-4632-b64e-110a-da4a0ac56917). For Mac and iOS (iPhone, iPad), [it is VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html). For Android, [it is TalkBack](https://support.google.com/accessibility/android/answer/6007100?hl=en). There are third-party options available for free, like [NVDA](https://www.nvaccess.org/about-nvda/) or [Window-Eyes](https://www.perkinselearning.org/technology/getting-started/window-eyes), or for a fee, [like JAWS](https://www.freedomscientific.com/products/software/jaws/) -- but starting with your device’s default is the simplest way to get up and running. Every screen reader application should come with basic “getting started” instructions to help you identify navigation controls. 

Now you’re ready to test with a screen reader! Once you’ve put in the up-front work of identifying and getting to know your screen reader, the test process is simple:

1. Identify a workflow or action that users should be able to complete (this can be the same as identified for the keyboard test)
2. Turn on your screen reader
3. (Optional) Turn off your monitor
4. Using your keyboard or touchscreen, step through the intended path
5. Repeat steps 1-4 for other areas of the website

If you’ve made it through the keyboard and screen reader test steps, you are officially a more caring and inclusive-minded tester than many Quality Assurance (QA) professionals working in the business today. That’s a huge congratulations to you!

For people who rely on a screen reader, the tool is often vital for their ability to navigate and use the web. This can include: 

* Partial or total visual impairment 
* Eye conditions (such as glaucoma)
* Cognitive impairments
* Learning disabilities

As with a keyboard, screen readers (especially on a phone or tablet) are helpful for temporary situations. This could include someone attempting to follow a recipe while focused on the frying pan in front of them, or a patient recovering from laser eye surgery.

## <u>Test #3</u>: Use an auditing tool

![woman seated in wheelchair with headphones at a desk and two monitors both showing code onscreen](../images/woman-in-wheelchair.jpeg)

Keyboard and screen reader testing is focused on the user’s experience of navigating your company’s website. This is a vital place to start, as it helps identify some of the largest barriers between your customer and their success! This next test, on the other hand, is more focused on the details of design and development compliance with established guidelines (generally based on [WCAG standards](https://www.w3.org/WAI/standards-guidelines/wcag/)).

Auditing tools come in many forms. Some are as simple as [entering your site’s address into a field and submitting it](https://wave.webaim.org/). Others require [downloading and installing extensions for your browser](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd). Many browsers in 2020 have [built-in tools as well](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector). There are also auditing tools that can be [installed and run entirely using a command line](https://www.npmjs.com/package/@axe-core/cli).

Your choice of tool(s) for this step is entirely up to your comfort level and the public or private nature of your organization’s online material. If you are looking at a public site, with no login or accounts, the easiest way to start is likely [a free online service, such as WAVE](https://wave.webaim.org/). This test method is as simple as:

1. Visit [wave.webaim.org](http://wave.webaim.org)
2. Copy and paste your website’s URL into the “Web page address” field
3. Hit Enter/Return or click the submit arrow
4. Check out the results

If your website requires that users login before accessing most of the content or services, [WAVE is available as a browser extension](https://wave.webaim.org/extension/) that will take advantage of your browser cookies or session data to audit the logged-in content. Built-in browser tools have similar access and each will have helpful instructions available online. 

It is important to remember that automated auditing tools will not catch _all issues_! They will, however, help call attention to many basic and frequent issues faced by your users. This can include barriers for:

* Keyboard users
* Screen reader users
* People who are colour blind, have difficulty with low contrast, or who rely on larger text
* Document reading software (screen readers, feed generators, search engines, etc.) 
* Slow or restricted internet connections

Results generated by an auditing tool will be much more technical-focused. These can be tough to comprehend without a deeper knowledge of design, code, and [WCAG documentation](https://www.w3.org/WAI/standards-guidelines/wcag/). Fortunately, your design and development team(s) should be able to make use of the tool’s output when you share it with them!

## What next?

Detailed auditing and remediation can be a technical and involved process. Getting started with an accessibility plan takes _a lot_ of work. Sometimes, just knowing whether your company’s website _has_ issues can feel like a massive hurdle. By following the first steps outlined here, you can set your organization on a much clearer and fruitful path to offering an accessible experience! 

**Next month**, we'll continue looking at accessibility testing resources for anyone and everyone -- without even having to touch your computer!
