---

# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Explore Data Snack's"
  text: "Data Hub framework"
  tagline: Self-hostable, open-source engine for reproducible data harmonization, dataset building & exploration
  actions:
    - theme: brand
      text: Setup & Usage
      link: /guide/
    - theme: alt
      text: Examples
      link: /our-work

features:
  - title: OPEN SOURCE
    details: Self-hostable software built on Python/Django, licensed under MIT for maximum flexibility and full transparency
  - title: DATA HARMONIZATION
    details: Ingests diverse data types and formats, customizable for seamless data integration across temporal and spatial dimensions
  - title: DATA GOVERNANCE
    details: Effective metadata management in line with FAIR data principles, enhancing data discoverability, interoperability and reuse
  - title: REPRODUCIBLE
    details: Every step of data processing and output generation is coded, ensuring reproducibility and verifiable workflows

---
<script setup>
import { VPButton } from 'vitepress/theme'
import TeamMember from './.vitepress/components/TeamMemberComponent.vue'
</script>


<br>


The **Data Hub** is a flexible, self-hostable, open-source engine designed for reproducible data harmonization, dataset creation, and exploratory visualization, specifically tailored for stakeholders in Global Health research and action. It seamlessly integrates diverse data across temporal and spatial dimensions using source code, laying a solid data foundation for complex data analyses. By fostering **Data Collaboration** across various disciplines, our software framework empowers teams to effectively share, manage, and bring together heterogeneous data, ensuring the consistency and reproducibility vital for building collaborative intelligence.

Explore our **Data Hub Demo** focused on Ghana, showcasing a variety of open health and contextual data, and discover its development story shared at Django Day Copenhagen 2024. We welcome your input on data needs and preparation through our User Survey – thank you for contributing!

<div class="buttons">
  <VPButton tag="a" href="https://demo.datasnack.org/" text="Data Hub Demo" />
  <VPButton tag="a" href="https://2024.djangoday.dk/talks/jonathan/" text="Development Talk" theme="alt" />
  <VPButton tag="a" href="https://redcap.bibbox.bnitm.de/surveys/?s=4NJ4D9D8M8PTRETF" text="User Survey" theme="alt" />  
</div>


<h2 class="h1 brand">Data Snack</h2>

### Crunching Digital Resources<br> to Strengthen Global Health Research and Action

Data Snack, based at the **Bernhard Nocht Institute for Tropical Medicine** (BNITM) in Hamburg, Germany, is an initiative dedicated to empowering Global Health research, education, and action through leveraging digital resources and software tools. At the core of our work is the Data Hub, supported by various activities aimed at enhancing data and Global Health collaboration. This project is primarily empowered and funded by the "Innovate! Academy" at the
**Joachim Herz Foundation** (JHS), based in Hamburg, Germany.

Operating at the intersection of health and computer sciences, we collaborate with stakeholders in research, data management, data analysis, epidemiology and public health. Alongside various research groups at the BNITM, a key partner in our efforts is the **Charité Center for Global Health** (CCGH) at **Charité - University Medicine Berlin**, Germany. In addition, we receive support in drafting new features and tools from the **Hamburg University of Applied Sciences** (HAW Hamburg) through its Bachelor's and Master's programs in Computer Sciences and its Multi-Agent Research & Simulation group (MARS), based in Hamburg, Germany.

<div class="buttons">
  <VPButton tag="a" theme="alt" text="Data Snack One Pager" href="./DataSnack_Infosheet.pdf" />
  <VPButton tag="a" theme="alt" text="Meet the BNITM" href="https://www.bnitm.de/en/" />
  <VPButton tag="a" theme="alt" text="Meet the JHS" href="https://www.joachim-herz-stiftung.de/en/research/research-and-application/innovation-academy"  />
  <VPButton tag="a" theme="alt" text="Meet the CCGH" href="https://globalhealth.charite.de/en/" />
  <VPButton tag="a" theme="alt" text="Meet the HAW Hamburg" href="https://www.mars-group.org/" />
</div>


<br>
<br>


### The Team

Data Snack is a collaborative research and development initiative at the nexus of health and computer sciences. The core team includes **Juliane Boenecke**, a health scientist active in infectious disease and Global Health research, and **Jonathan Ströbele**, a computer scientist with expertise in data harmonization, architecture and user-centered software development.

<TeamMember 
  name="Juliane Boenecke"
  image="/images/JB_Pic.jpg"
  :links="[
      {text: 'LinkedIn', href: 'https://www.linkedin.com/in/juliane-boenecke/'},
      {text: 'ORCID', href: 'https://orcid.org/0000-0002-6327-8152'},
      {text: 'ResearchGate', href: 'https://www.researchgate.net/profile/Juliane-Boenecke-2'},
      {text: 'Gamification', href: 'https://www.bnitm.de/en/training/zentrum-fuer-fort-und-weiterbildung/iace/projects/collaborative-projects/eddi'},
      {text: 'Bluesky', href: 'https://bsky.app/profile/jlnbnck.bsky.social'},
  ]"
  ><!-- blank line is required -->

**Juliane Boenecke** (she/her) | BSc, MSc | is a health scientist at BNITM (Department Infectious Disease Epidemiology, 2020) and visiting researcher at CCGH (Institute of Virology, 2024), driven by a passion for interdisciplinary and multimethod research in infectious disease epidemiology, specifically targeting epidemic preparedness and response within the One Health framework. Following her academic foundation with a BSc (Charité - University Medicine Berlin) and MSc (HAW Hamburg) in Health Sciences, she has built her expertise through diverse projects since 2017, spanning public health intelligence, collaborative surveillance, and climate change and health. With her background as a physiotherapist, she adds a unique clinical perspective to her work. Juliane's career is further distinguished by her international collaborations across various disciplines in regions such as South America, Sub-Saharan Africa, and the Pacific Islands. Through Data Snack, she is ambitious about developing innovative digital resources to enhance 	interdisciplinary collaboration and training, including the use of gamification, all while promoting an Open Science culture.
</TeamMember>

<TeamMember 
  name="Jonathan Ströbele"
  image="/images/JS_Pic.jpg"
  :links="[
      {text: 'LinkedIn', href: 'https://de.linkedin.com/in/jonathan-stroebele/'},
      {text: 'ORCID', href: 'https://orcid.org/0000-0002-9757-8030'},
      {text: 'ResearchGate', href: 'https://www.researchgate.net/profile/Jonathan-Stroebele'},
      {text: 'GitHub', href: 'https://github.com/stroebjo'},
      {text: 'Mastodon', href: 'https://norden.social/@stroebjo'},
  ]"
  ><!-- blank line is required -->

**Jonathan Ströbele** | BA, MSc | holds a MSc in Computer Science from the Hamburg University of Applied Sciences (HAW Hamburg), where he also completed his BA in Technical Computer Science. Before his studies he worked several years in the field of web development where he designed and built complex web applications for clients from various domains. This laid the foundation for a profound passion for open source, user-centered design, and participatory software development. During his Masters he worked as a research associate in different international, multi-domain projects, where he primarily focused on the development of a user-specific GIS web application (Data Hub) for processing heterogeneous data aiding epidemiological research and field work. Since 2023 he works as a computer scientist in the field of Global Health research, affiliated to the BNITM (Department Infectious Disease Epidemiology, 2023) and CCGH (visiting researcher at Institute of Virology, 2024), to continue developing the GIS framework and innovative software solutions in an interdisciplinary setting.
</TeamMember>
