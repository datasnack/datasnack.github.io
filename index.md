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
      link: /examples

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
</script>


<!--
color codes
hellblau 1 (e.g., headline color) #a8b1ff
hellblau 2 (e.g., mouse hover blue button) #5c72e6
dunkelblau (e.g., blue button) #3e63de
hellgrau #99989
mitteldunkles grau #9b9aa2
dunkelgrau 1 (e.g., mouse hover grey button) #32363f
dunkelgrau 2 #202127
-->

<br>


<!-- SECTION 1 DESCRIPTION DATA HUB + DEMO -->

The **Data Hub** is a flexible, self-hostable, open-source engine designed for reproducible data harmonization, dataset creation, and exploratory visualization, specifically tailored for stakeholders in Global Health research and action. It seamlessly integrates diverse data across temporal and spatial dimensions using source code, laying a solid data foundation for complex data analyses. By fostering **Data Collaboration** across various disciplines, our software framework empowers teams to effectively share, manage, and bring together heterogeneous data, ensuring the consistency and reproducibility vital for building collaborative intelligence.

Try out our **Data Hub Demo**, featuring Ghana, which utilizes diverse open health and contextual data, and delve into its development journey presented at Django Day 2024.

<div class="buttons">
  <VPButton tag="a" href="https://demo.datasnack.org/" text="Data Hub Demo" />
  <VPButton tag="a" href="https://2024.djangoday.dk/talks/jonathan/" text="Development Talk" theme="alt" />
</div>


<!-- SECTION 2 INTROCUDING DATA SNACKS -->


<h2 class="h1 brand">Data Snack</h2>

<p class="tagline">Crunching Digital Resources<br> to Strengthen Global Health Research and Action</p>

Data Snack, based at the **Bernhard Nocht Institute for Tropical Medicine** (BNITM) in Hamburg, Germany, is an initiative dedicated to empowering Global Health research, education, and action through leveraging digital resources and software tools. At the core of our work is the Data Hub, supported by various activities aimed at enhancing data and Global Health collaboration. This project is primarily empowered and funded by the "Innovate! Academy" at the
**Joachim Herz Foundation** (JHS), based in Hamburg, Germany.

Operating at the intersection of health and computer sciences, we collaborate with stakeholders in research, data management, data analysis, epidemiology and public health. Alongside various research groups at the BNITM, a key partner in our efforts is the **Charité Center for Global Health** (CCGH) at **Charité - University Medicine Berlin**, Germany. In addition, we receive support in drafting new features and tools from the **Hamburg University of Applied Sciences** (HAW Hamburg) through its Bachelor's and Master's programs in Computer Sciences and its Multi-Agent Research & Simulation group (MARS), based in Hamburg, Germany.

<div class="buttons">
  <VPButton tag="a" theme="alt" text="Data Snack One Pager" href="./DataSnack_Infosheet.pdf" />
  <VPButton tag="a" theme="alt" text="Meet the BNITM" href="https://www.bnitm.de/en/research/research-groups/population/infectious-disease-epidemiology-department/research-topics/surveillance-and-digital-epidemiology/data-snack" />
  <VPButton tag="a" theme="alt" text="Meet the JHS" href="https://www.joachim-herz-stiftung.de/en/research/research-and-application/innovation-academy"  />
  <VPButton tag="a" theme="alt" text="Meet the CCGH" href="https://globalhealth.charite.de/en/" />
  <VPButton tag="a" theme="alt" text="Meet the HAW Hamburg" href="https://www.mars-group.org/" />
</div>
