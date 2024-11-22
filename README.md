## Parsa Sedghi Paragraphs Regarding Process
This project involved implementing two web pages using Next.js (the Home page and the About page). The main goal was to create responsive, visually appealing designs that follow the accessibility standards (Levels A and AA) and has a theme throughout the pages. Both pages reflect thoughtful design decisions based on initial mockups I created and incorporates modern features for an engaging user experience.

Both of these pages had heavy inspirations from my original mock-up as I liked the design and wanted to elaborate off of the design. One of the main challenges during development was adhering to accessibility requirements. For instance, initial color combinations for the text boxes did not meet minimum contrast standards, so the background was updated to a lighter shade, and text colors were adjusted to a darker shade to improve visability (and now it looks much better). Another challenge was ensuring responsiveness across screen sizes. On smaller devices, components such as the profile picture and staggered text on the Home page overlapped so I had to spend some time adjusting their positioning on smaller screens. Hover animations and transitions were implemented using Tailwind CSS utility classes. Icon sizes were adjusted for better visibility, and spacing was made to avoid crowdedness.

I also made the Navbar componenet so that I can just reuse the same component throughout all of the pages. This was really helpful since instead of copying and pasting code, I could just import it.

My next steps are going into more detail on my other pages and I want to go into more detail for the final product!
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


## Note for Parsa 
Here are some sources of inspiration:
https://www.reddit.com/r/Frontend/comments/o1sbve/how_do_i_present_projects_on_my_portfolio_website/
