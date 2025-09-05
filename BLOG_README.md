# Sneaky Nuts Blog System

This blog system is built with Astro and includes all the features you requested:

## Features

✅ **Blog Page Navigation** - Accessible from the main navigation
✅ **Markdown Blog Posts** - Write posts in markdown format
✅ **Filter by Author** - Filter posts by specific authors
✅ **Filter by Tags/Categories** - Filter posts by tags
✅ **Sort by Published Date** - Posts are automatically sorted by publication date (newest first)
✅ **Responsive Design** - Works on all devices
✅ **Beautiful UI** - Matches the Sneaky Nuts brand aesthetic

## File Structure

```
src/
├── pages/
│   ├── blog/
│   │   ├── index.astro          # Main blog listing page
│   │   └── [slug].astro         # Individual blog post template
│   └── index.astro              # Homepage (updated with blog link)
├── content/
│   ├── config.ts                # Content collection configuration
│   └── blog/                    # Blog post markdown files
│       ├── welcome-to-sneaky-nuts-blog.md
│       ├── building-epic-quest-behind-scenes.md
│       ├── mobile-gaming-trends-2024.md
│       └── team-spotlight-sarah-chen.md
└── styles/
    └── globals.css              # Global styles
```

## How to Add New Blog Posts

1. Create a new markdown file in `src/content/blog/`
2. Add the required frontmatter:

```markdown
---
title: "Your Blog Post Title"
description: "A brief description of your post"
author: "Author Name"
pubDate: 2024-01-15
tags: ["tag1", "tag2", "tag3"]
emoji: "🎮"
featured: false
---

# Your Blog Post Content

Write your content in markdown here...
```

3. The post will automatically appear on the blog page

## Available Features

### Filtering
- **Author Filter**: Dropdown to filter by specific authors
- **Tag Filter**: Dropdown to filter by tags/categories
- **Clear Filters**: Button to reset all filters
- **Live Search**: Filters update in real-time

### Blog Post Features
- **Rich Markdown Support**: Full markdown rendering with custom styling
- **Responsive Images**: Images automatically adapt to screen size
- **Code Syntax Highlighting**: Code blocks are properly styled
- **Social Sharing**: Share buttons for each post
- **Reading Time**: Automatic reading time calculation
- **Related Posts**: Suggestions for similar content

### Navigation
- **Breadcrumb Navigation**: Easy navigation between pages
- **Back to Blog**: Quick return to blog listing
- **Homepage Integration**: Blog link in main navigation

## Example Blog Posts

The system includes 4 example blog posts:

1. **Welcome to the Sneaky Nuts Blog** - Company announcement
2. **Building Epic Quest: A Behind-the-Scenes Look** - Development insights
3. **Mobile Gaming Trends to Watch in 2024** - Industry analysis
4. **Team Spotlight: Meet Sarah Chen** - Team member interview

## Customization

### Adding New Authors
Authors are automatically detected from blog post frontmatter. No additional configuration needed.

### Adding New Tags
Tags are automatically detected from blog post frontmatter. No additional configuration needed.

### Styling
The blog uses the same design system as the main site with CSS custom properties for easy theming.

## Running the Blog

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The blog will be available at `/blog` on your site.

## Technical Details

- **Framework**: Astro 5.x
- **Content**: Markdown with frontmatter
- **Styling**: Tailwind CSS with custom CSS variables
- **TypeScript**: Full TypeScript support
- **Responsive**: Mobile-first design
- **Performance**: Static site generation for fast loading
