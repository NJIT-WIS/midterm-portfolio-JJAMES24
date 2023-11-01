# Midterm Webdev 1

# Videos and Reference starter project Reference
https://github.com/kaw393939/webdev1project/tree/master

## Introduction
For this midterm project, you are tasked with crafting a professional landing page and at least one additional page that is suitable for both desktop and mobile devices. By completing this mid-term you will learn the basics of project management, product design, quality assurance, and technical implementation. Ensure that you do not include any private information, such as address, phone, or email. LinkedIn will be your main means of contact, while your GitHub account will host your showcased projects issues / code / etc.

## The Employer Journey
The aim is to design a seamless Employer Journey. Much like a customer journey, the employer journey encapsulates the experience of a potential employer from their discovery of your portfolio site to understanding your professional, cultural, and technical fit for a position. The ultimate goal of this journey is to provide a prospective employer with the tools to evaluate your fit for your intended position / career and have a means to contact you via LinkedIn after being impressed by your portfolio.

## Design and Content
Your site's design and content should be a reflection of your brand archetype, thereby portraying your personality and professional ethos effectively. This can be achieved by showcasing projects, testimonials, and evidence of your skills through specific contributions and resolutions on GitHub. Furthermore, linking to your Figma site design will underline your proficiency in visual communication and design implementation.

## Project Requirements
There are four main areas that your project will be evaluated on:

### Product Design - 30 Points
Your portfolio / product must address a potential employer's 3 big questions, which most employers will try to answer when evaluating your resume/portfolio. Essentially, employers want to know if you are a cultural, professional, and technical/skill fit for a position. Your product / portfolio needs to make it easy for a potential employer to determine the following questions:

1. Does the design communicate my personality and objectives to a potential employer i.e. does my design communicate my brand archetype?
2. Does the user/employer easily find information that helps them decide on if I have the professional qualities to be successful in the position? I.e. Does the portfolio demonstrate an understanding of project management through my GitHub issues? Does it show an attention to detail? Does it show that I follow a professional process? Does it show that I can communicate effectively?
3. Does the user/employer find proof of my technical skills by finding good examples of using the skill through GitHub, a project, Figma, or some other demonstration.

### How should I prepare for this?
Create a Figma design and find at least two people willing to test it with you iteratively and write down their feedback. Try to implement a basic version of the “Think out loud” protocol described here:

[Using Think Aloud Methods for Student Usability Testing](https://le.unimelb.edu.au/news/articles/using-think-aloud-methods-for-student-usability-testing)

At a basic level, you want to create a minimal design and test it with someone by telling them a scenario of why they are looking at your design. For example, you could say “Pretend you're looking to hire a ____________(Developer, Designer, Project Manager, etc…), and you are reviewing portfolios to determine if the candidate(you) is a cultural, technical, and professional fit for your company by trying to find information about the candidate by navigating the portfolio site. Then see if they can easily find the information on the portfolio. It's better to try early in your design process and then iteratively i.e. test multiple times and see if the person testing your design is able to answer the questions more easily with each successive iteration of your design. Remember, your trying to go from a “Push” process of pushing a feature on users to a “pull” process where your customer/intended audience/prospective employer tells you what you need to change. Remember that you’re designing to solve a problem i.e. you need a job; however, you need to address the needs and thought process of the customer / employer, which may be very different than how you think. It's more effective to do too little at first and gradually improve the design through feedback versus “imagining” all the possibilities.

### How will this be assessed?
Your portfolio website will be viewed, and the grader will evaluate if they can easily find answers to the questions above.

### Project Management - 25 Points
Create and resolve at least 50 issues, encompassing features, bug fixes, feedback issues to fix your Figma design, and documentation such as the project installation or hosting instructions. Craft issues as a user, technical story, or a bug/feedback issue with explicit acceptance criteria. The acceptance criteria just specifies what action did the user attempt to take and how do you verify success. Use these issues to demonstrate professionalism and technical proficiency in your design. Try to point users to specifically well-crafted issues and resolutions that demonstrate a professional process. Not all issues need to be perfect, but you should have some that serve as good examples that are appropriate for your portfolio.

### How will this be evaluated?
The grader will look for your 50 issues and determine if you have made an attempt to follow the issue description / resolution process above. Each issue is worth 0.5 points for a total of 25 points.

### Quality Assurance - 30 Points
Develop both manual and automated quality assurance processes for your project.  
Your live site should be an exact replica of your Figma design.
Incorporate all mandatory WCAG 2.0 / ARIA accessibility features, especially for images, menus, and the color scheme.
Utilize Lighthouse to identify potential issues. Log these issues on GitHub and implement automated tests (where feasible) to validate their resolution.
Ensure site compatibility for both mobile and desktop, with the latter having a width of 1280px.

Your quality assurance process has three components:

1. Manual Testing - Verify the Figma design matches the site implementation. - 10 Points.
2. Automated Playwright Testing - Have 20 Playwright automated tests - 15 Points
3. Lighthouse Testing score 90% or better on all areas of lighthouse other than PWA (Performance, Accessibility, Best Practice, SEO) - 5 Points 

Engage at least two testers to identify and log issues on your GitHub repo. These issues must then be addressed and resolved. Your testers should check if the site’s Figma design matches your implementation. Testers need to check that the site functions properly on mobile and desktop devices. Your automated playwright tests should check if the site has the correct metadata and other features that can be tested through playwright. You should take an issue found by your testers and file it as an issue and resolve it. 

Draft a minimum of 20 Playwright tests. Derive these tests by examining your user stories and acceptance criteria, thereby identifying aspects requiring automated or manual testing.

Potential Automated Test Areas: metadata, site features, social media links, favicon, mobile responsiveness, functional links, and content accuracy.

### How will this be evaluated?
The grader will look for 20 playwright tests, run lighthouse, and overlay your Figma design on your implemented site and evaluate the accuracy of the implementation. You will lose an appropriate amount of points for issues.

### Visual Design - 15 points
- Begin by crafting a Figma design optimized for both desktop and mobile interfaces.
- Research fonts to pick ones appropriate for your archetype
- Select a color scheme appropriate for your archetype - Ask ChatGPT for help
- Select imagery that supports your archetype 
- Have a clear call to actions that guide the user to the information you want to present.
- Think of each question your addressing in your design as a billboard that is calling out to the user to find the information they need on your site
- Find content such as notable quotes or other intriguing information to get your potential employer interested
- Focus on pivotal design elements: well-composed hero sections, utilization of the golden ratio for layout, and font sizing. The golden ratio (approximately 1.618) is a mathematical principle that, when used in design, fosters aesthetic balance. For instance, you might use it to determine the ideal width of a content area relative to the sidebar, or even in determining spacing. Other mathematical techniques, such as using square roots, can be used to determine the optimal margins and padding for elements.
- Develop a brand archetype mirroring your individuality, leveraging imagery and textual content. Integrate hero sections with explicit call-to-actions that expertly guide the site visitor through your showcased work, professional demeanor, and technical aptitude.

### How will this be evaluated?
The site’s visual appearance will be evaluated on whether or not the design looks well thought out and professional. Not everyone is an “artist”; however, it should be apparent that you attempted to have a clean professional layout, well-thought-out color choices, clear call to action, and address the project requirements of the project.

## Project Timeline
### Week 1: Planning, Design, and Initial Implementation
#### Days 1-2: Research & Planning
- Understand the concept of an Employer Journey.
- Start brainstorming the design, content, and features for your site.
- Get a very basic design completed that at least has your content or expected content. Don’t focus so much on the colors / fonts just focus on the data and the process to address the 3 questions.
- Begin with the Figma design for desktop and mobile interfaces.

#### Days 3-7: Figma Design Testing and Refinement
- Get at least one person to try out your initial design and resolve their design issues. Once you have the design improved by iterating with that person find another person to iterate the design with and resolve the issues.

### Week 2: Implementation, Testing, Refinement, and Final Implementation
#### Initial Website Implementation
- Start the actual coding of the website once you have a tested figma design.
- Regularly commit changes and address GitHub issues.

#### Days 8-9: Testing
- Begin with manual tests. Engage your testers.
- Draft automated Playwright tests based on user stories.

#### Days 10-13: Refinement
- Refine your website based on feedback and identified issues.
- Set up required WCAG 2.0 / ARIA features. Resolve all Lighthouse issues.

#### Day 14: Final Review & Submission
- Do a final review of your website and ensure all GitHub issues are resolved.

## Submission Instructions
1. **GitHub Classroom Project**
   - Accept the GitHub Classroom project to create a new repository.
   - Commit and push changes to this repository.

2. **Hosting Your Site**
   - Host your site using GitHub Pages.
   - Set the main branch as the source for your GitHub Pages.
   - Put a link to it on the readme.

3. **Figma Screenshot**
   - Export a full-size image of your site design from Figma.
   - Add this image to your repository's README.  This image will be used to check your design implementation.

4. **Submitting on Canvas**
   - Provide the link to your live website and the link to your GitHub repository in Canvas.
   - Ensure the README contains the exported Figma image.

5. **Final Check**
   - Double-check all links, ensure the website is accessible from GitHub Pages, and verify the Figma image in the README.
