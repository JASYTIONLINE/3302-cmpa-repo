---
title: "CMPA 3302 Knowledge Base Repository (ReadMe)"
description: "First README for CMPA 3302. States the topic, explains structure, and points to the live site."
tags:
  - cmpa3302
  - readme
  - project-management
  - pmp
draft: false
date: "2025-09-13"
---
# JASYTI's PMP KB (README)

This repository is for my work in CMPA 3302 – Foundations of Information Organization and Management.  The assignment requires building a single-topic knowledge base using GitHub, Obsidian, and Quartz.
## Topic
The topic I chose is **Project Management and preparation for the PMP Certification Exam**.  
This knowledge base will collect notes and resources tied to PMI’s framework, the PMBOK guide, and exam study strategies.
## Structure
- All published content lives inside the `content/` folder (Quartz treats this as the site root).
- The homepage is `content/index.md`.
- The about page is `content/about.md`.
- Each published file begins with Quartz frontmatter so it renders correctly.
## What I Learned About Structure

This site still has a “root” index page — it’s **`content/index.md`** instead of an `index.html` at the repo root. Quartz treats **`content/`** as the site root for anything that gets published. I write everything there in Markdown. The repo can be bigger than `content/`, but only what’s inside **`content/`** is part of the published knowledge base.

Day to day, I author in Obsidian using the `content/` vault. When the site is published with GitHub Pages, it behaves like a normal website with a home page and internal pages you can click through. That difference — authoring in Obsidian vs. what Quartz/GitHub Pages actually publishes — finally clicked for me this week.

--- 
## Quick Links
- [[index|Home]]
- [[about|About JASYTI]]
- Live Site (Published with GH Pages): https://jasytionline.github.io/3302-cmpa-repo/
