---
date: 2023-05-03
author: Stephen Belyea
title: "When is Accessibility Complete?"
featuredImage: ../images/woman-using-braille-keyboard.jpeg
metaImage: "src/images/woman-using-braille-keyboard.jpeg"
category: accessibility
bio: Husband, father, habitual dork, accessibility instigator + designery front-end dev, attempted writer, alleged handyman, ex-pat Maritimer. He/him.
bioImage: ../images/stephen.jpeg
---

> “When will we hit 100% compliance?”
>
> “How much is left until we are accessible?”
>
> “When will accessibility be done?”

These are common questions from clients, managers, product teams, and anyone else who works in or around websites or applications. They aren’t unreasonable questions in theory. Stakeholders view accessibility compliance as a requirement to be met and expect a checklist which can be completed. Finish that, and you’re done with accessibility, right?

**Not _quite_.**

The first trouble with that perspective is the core assumption that accessibility is a one-and-done requirement; the belief that once your product is compliant, it will be fully accessible. This is an understandable mistake since many formal requirements within an ongoing project are addressed once and can be moved on from. This includes one-off features, designs, content, automated testing, server configuration, etc. These may be in flux while the project is underway, but they’re settled when it has shipped.

![A flipboard covered in sticky notes citing various features, with a boardroom filled with people off in the background](../images/stickies-on-board.jpeg)

However, this just isn’t the case with accessibility. The fundamental purpose of accessibility is to remove the barriers we (knowingly or not) have placed in front of people with impairments. Disability as a concept is commonly defined as [“the result of combinations of impairments and environmental barriers”](https://www.ohrc.on.ca/en/policy-ableism-and-discrimination-based-disability/2-what-disability#:~:text=A%20disability%20may%20be%20the,people%27s%20full%20participation%20in%20society). This means that until we’ve tested and confirmed the full experience with every person alive, we can not claim accessibility is “100% done”. Even if we could hit this marker today, that result will change over time, as [rates of disability increase as people age](https://www150.statcan.gc.ca/n1/pub/89-654-x/89-654-x2021003-eng.htm). Not to mention the roughly 15% of [385,000 new people born every day](https://www.theworldcounts.com/stories/how-many-babies-are-born-each-day) who will have some form of impairment. As long as your website is still running, accessibility is still ongoing!

Don’t be discouraged by the work ahead, though. See this situation for what it is: an opportunity to learn, grow, and improve - as a product, a team, and an individual. Each improvement made for accessibility means new people can use your application, consume your content, and spend money on your products. [Business-to-Customer (B2C) companies spend 5-10% of their revenue](https://www.bdc.ca/en/articles-tools/marketing-sales-export/marketing/what-average-marketing-budget-for-small-business#:~:text=In%20the%20simplest%20terms%2C%20your,%E2%80%94between%205%20and%2010%25.) trying to attract new users with a marketing team. Imagine how much more effective that budget can be when you aren’t blocking access for [over 20% of potential users](https://www150.statcan.gc.ca/n1/pub/89-654-x/89-654-x2018002-eng.htm)!

## What about compliance and checklists?

While accessibility itself is an ongoing effort, accessibility compliance is mostly measurable. Compliance standards like the [**Web Content Accessibility Guidelines**](https://www.w3.org/WAI/standards-guidelines/wcag/) (**WCAG**) have a finite number of success criteria that are designed to be a basis for formal and legal requirements. [Most accessibility checklists you’ll find online](https://www.a11yproject.com/checklist/) are based on the **WCAG** and seek to [make the criteria more digestible](https://tetralogical.com/blog/2020/04/10/wcag-primer/), actionable, and measurable. Some of these improve on the core success criteria set by [offering alternative implementation patterns and widely-accepted best practices](https://www.w3.org/WAI/test-evaluate/preliminary/). It is also worth noting that the **WCAG**’s governing body, the [**World Wide Web Consortium**](https://www.w3.org/Consortium/) (**W3C**) is constantly working to [draft updated versions of the guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/) as they build on feedback from professionals and users with disabilities. Even the compliance guidelines aren’t 100% complete!

The big difference between accessibility and compliance comes down to the quality of a user’s barrier-reduced experience. Meeting compliance does not guarantee that you’ll be perfectly accessible. It is only meant as a tool to push for the most basic, formalized methods for reducing barriers. Compliance won’t help _everyone_, but it is certainly better than doing _nothing_. [Depending on your jurisdiction, it may also be the law](https://heynova.io/blog/lets-talk-legal-the-cross-canada-accessibility-checkup/)!

## What about overlay widgets?

Overlays are those popup accessibility widgets, billed as one-and-done solutions, which many websites use to offer contrast, font size, colour mode, and other settings. They are a [highly contentious approach for improving accessibility](https://overlayfactsheet.com/), with limited results according to many who are [“experts in this field… or are end users with disabilities (or both)”](https://overlayfactsheet.com/#statement-from-sponsors-and-signatories-to-this-fact-sheet).

![An overlay vendor's homepage declaring web accessibility solved, along with focus on compliance, ADA law, and citing a million clients and users with disabilities who trust the product](../images/web-accessibility-solved.png "From the homepage of [UserWay](https://userway.org/), an overlay vendor and product")

[Accessibility consultancies](https://www.levelaccess.com/) and [overlay vendors](https://accessibe.com/) primarily focus on bringing their clients up to **WCAG** compliance. Unfortunately, the marketing around them often [blurs that line between accessible and compliant](https://userway.org/). In short, they [_may_ help with compliance](https://overlayfactsheet.com/#fitness-for-achieving-compliance-with-accessibility-standards) but are [unlikely to substantially improve accessibility](https://www.a11yproject.com/posts/should-i-use-an-accessibility-overlay/#quality).

If you do choose to move ahead with an overlay for your product, it helps to treat the service more like a [“temporary bandage”](https://www.a11yproject.com/posts/should-i-use-an-accessibility-overlay/#temporary-bandage-solutions) rather than a complete solution. It can help cover some of the basics for a little while, but you still need to work on fixing the underlying issues!

## What about automation or AI?

The next tool which many teams will reach for comes in the form of [automated tests and auditing tools](https://www.w3.org/WAI/ER/tools/). Some of these work by submitting a URL and letting the application [crawl through your website to generate results](https://wave.webaim.org/report#/https://google.ca). Others make use of [developer tools, browser extensions](https://www.deque.com/axe/), or are included as [native browser functionality](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/). These can all be helpful options for catching many of the basic accessibility issues, such as [missing “alt” text on images](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html), form fields [without a corresponding label](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html), or [low colour contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) on text elements. While [automated tools won’t catch everything](https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/), they should be considered important tools to start building a more accessible experience. This is especially true when paired with manual testing to catch what the automated tools would otherwise miss!

![A woman sitting at a desktop computer and navigating using the touch keys of a braille display while two other women smile and look on](../images/woman-using-braille-keyboard.jpeg "Testing with daily assistive tech users is especially helpful for meaningful results")

Reaching beyond strictly programmed automatic, we start to get into [Artificial Intelligence (AI) for assisting with web accessibility](https://ialabs.ie/how-is-ai-tech-like-chatgpt-improving-digital-accessibility/). Focused AI tools already exist to help [extract meaningful “alt” text from images](https://alttext.ai/) or [generate captions and transcripts](https://verbit.ai/). More complex AI models, like **OpenAI**’s **ChatGPT**, are being used to automate [larger pieces of the accessibility testing and remediation process](https://equally.ai/flowy). Beyond accessibility compliance, navigation, and interaction online, **ChatGPT** and others like it are [proving useful for communications, translation, and accessing information](https://verbit.ai/a-ctos-take-on-chatgpt-ai-and-its-effects-on-accessibility/).

Will AI make your website 100% accessible? No, and not likely ever. But it does seem like a promising path for more and more robust and low-friction implementation and remediation of accessibility barriers.

...

The next time you’re curious of the status of accessibility work within a product, [keep this thought in mind](https://macaw.social/@sommer/110271263217329587), from **Sommer Panage**, Accessibility Manager at **Slack**:

> Accessibility isn’t something you add to your product. It is your product.
>
> I think 90% of my job is trying to convey this. If the button isn’t labeled, if the text cannot be seen, if the action cannot be performed, then it may as well not be there for some subset of people.

If your website or online product still exists, accessibility is still a part of it!
