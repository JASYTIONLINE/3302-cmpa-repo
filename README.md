# CMPA 3302 Knowledge Base — Project Management Professional (PMP)

![GitHub Pages](https://img.shields.io/badge/hosted-GitHub%20Pages-blue)  
![Quartz](https://img.shields.io/badge/framework-Quartz%204.0-lightgrey)  
![Status](https://img.shields.io/badge/status-active-brightgreen)

---

## Overview

This repository is a **digital knowledge base** designed and published as part of  
**CMPA 3302 – Foundations of Information Organization and Management**  
at Texas Tech University.  

While it was created as a final project deliverable, the site is fully functional as a  
**reference resource for anyone preparing for the Project Management Professional (PMP) certification**.  
It demonstrates information organization principles, classification, and linking practices applied  
to a real-world study system.

**Live site:** [https://jasytionline.github.io/3302-cmpa-repo/](https://jasytionline.github.io/3302-cmpa-repo/)

---

## Purpose

- Showcase mastery of **information organization, classification, and navigation design**.  
- Deliver a **modern, user-friendly knowledge base** using Quartz + GitHub Pages.  
- Provide a **study companion** for PMP exam preparation, including glossary terms, process groups, and ITTOs.  
- Serve as a **portfolio piece** demonstrating technical and organizational skills beyond the classroom.  

---

## Repository Structure

```
content/                 # All published site content lives here
  index.md               # Homepage portal
  00-about/              # Project context + about page
  01-test-prep/          # PMP study prep content
  02-pmbok-6/            # (In progress) PMBOK 6 resources
  03-lifecycle/          # Process groups and lifecycle notes
  04-ittos/              # Inputs, Tools, Techniques, Outputs
  05-lore-door/          # Creative "Last Gate" knowledge framing
  references.md          # Citations and sources
reading-notes/           # Weekly module notes (CMPA 3302)
reflections/             # Lessons learned logs
```

- Each folder has its own `index.md` with navigation links.  
- Every content page includes **YAML frontmatter** (title, date, tags).  
- Cross-linking via Obsidian/Quartz **wikilinks** ensures easy navigation.

---

## Setup & Usage

Clone locally and preview with Quartz:

```bash
git clone https://github.com/JASYTIONLINE/3302-cmpa-repo.git
cd 3302-cmpa-repo
npm install
npx quartz build
npx quartz serve
```

Open `http://localhost:8080` to preview.  
Changes must be committed and pushed to update the live GitHub Pages site.

---

## Features

- **≥20 content-rich Markdown pages** (excluding template/starter content)  
- **Glossary of PMP concepts** cross-linked for study  
- **Process lifecycle mapping** (Initiating → Closing)  
- **ITTO reference section**  
- **Creative framing layer** (“The Last Gate”) to aid memory & engagement  

---

## Acknowledgments

- **Course:** CMPA 3302 – Foundations of Information Organization and Management  
- **Instructor:** Mr. Greg Gamel  
- **Frameworks:** [Quartz 4.0](https://quartz.jzhao.xyz/), [Obsidian](https://obsidian.md/)  
- **Textbook:** *The Discipline of Organizing* (Glushko, 4th Ed.)  

---

## License

This project is published for educational and professional demonstration purposes.  
All original content © 2025 John Barkle IV.  
See individual source attributions in `references.md`.
