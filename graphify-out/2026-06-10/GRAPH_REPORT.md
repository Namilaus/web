# Graph Report - .  (2026-06-06)

## Corpus Check
- Corpus is ~5,283 words - fits in a single context window. You may not need a graph.

## Summary
- 168 nodes · 184 edges · 22 communities (11 shown, 11 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Reusable Component Library|Reusable Component Library]]
- [[_COMMUNITY_React Dependencies|React Dependencies]]
- [[_COMMUNITY_Build & Lint Config|Build & Lint Config]]
- [[_COMMUNITY_TypeScript Node Config|TypeScript Node Config]]
- [[_COMMUNITY_Main Section Components|Main Section Components]]
- [[_COMMUNITY_Component Documentation|Component Documentation]]
- [[_COMMUNITY_Design System & Tokens|Design System & Tokens]]
- [[_COMMUNITY_Docker Deployment|Docker Deployment]]
- [[_COMMUNITY_Package Scripts|Package Scripts]]
- [[_COMMUNITY_Project Features|Project Features]]
- [[_COMMUNITY_TypeScript Root Config|TypeScript Root Config]]
- [[_COMMUNITY_Footer Component|Footer Component]]
- [[_COMMUNITY_Hero Component|Hero Component]]
- [[_COMMUNITY_ClassNames Function|ClassNames Function]]
- [[_COMMUNITY_Bluesky Icon|Bluesky Icon]]
- [[_COMMUNITY_Discord Icon|Discord Icon]]
- [[_COMMUNITY_Documentation Icon|Documentation Icon]]
- [[_COMMUNITY_GitHub Icon|GitHub Icon]]
- [[_COMMUNITY_Social Profile Icon|Social Profile Icon]]
- [[_COMMUNITY_Icons Sprite|Icons Sprite]]
- [[_COMMUNITY_XTwitter Icon|X/Twitter Icon]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `compilerOptions` - 16 edges
3. `useScrollAnimation()` - 11 edges
4. `App Component` - 10 edges
5. `useScrollAnimation Custom Hook` - 6 edges
6. `scripts` - 5 edges
7. `useTheme()` - 5 edges
8. `useScrollAnimation Hook` - 5 edges
9. `Animation System Keyframes` - 5 edges
10. `build-and-push-image Job` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Favicon Link` --references--> `Purple Gradient Logo Icon`  [EXTRACTED]
  index.html → public/favicon.svg
- `Navigation Component` --implements--> `React Root Entry Point`  [INFERRED]
  ARCHITECTURE.md → index.html
- `Key Animations Reference` --cites--> `Animation System Keyframes`  [EXTRACTED]
  PORTFOLIO_GUIDE.md → ARCHITECTURE.md
- `Build and push Docker image Step` --references--> `Docker Compose Web Service`  [INFERRED]
  .github/workflows/deploy.yml → docker-compose.yaml
- `Portfolio Features Implemented` --cites--> `Component Tree Structure`  [EXTRACTED]
  PORTFOLIO_GUIDE.md → ARCHITECTURE.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Component Rendering Pipeline** — architecture_app_tsx, architecture_navigation_component, architecture_hero_component, architecture_about_component, architecture_skills_component, architecture_experience_component, architecture_projects_component, architecture_contact_component, architecture_footer_component [EXTRACTED 1.00]
- **Reusable Components System** — architecture_skillbadge_component, architecture_projectcard_component, architecture_timelineitem_component [EXTRACTED 1.00]
- **Custom Hooks System** — architecture_usetheme, architecture_usescrollanimation [EXTRACTED 1.00]
- **CI/CD Deployment Pipeline** — workflows_deploy_build_and_push_image, workflows_deploy_deploy_it_on_vps, docker_compose_service_web [EXTRACTED 1.00]
- **Social Media Icons Sprite** — icons_github_icon, icons_x_icon, icons_discord_icon, icons_bluesky_icon [EXTRACTED 1.00]

## Communities (22 total, 11 thin omitted)

### Community 0 - "Reusable Component Library"
Cohesion: 0.12
Nodes (17): ProjectCard(), ProjectCardProps, SkillBadge(), SkillBadgeProps, TimelineItem(), TimelineItemProps, About(), Contact() (+9 more)

### Community 1 - "React Dependencies"
Cohesion: 0.08
Nodes (24): dependencies, react, react-dom, devDependencies, @babel/core, babel-plugin-react-compiler, eslint, @eslint/js (+16 more)

### Community 2 - "Build & Lint Config"
Cohesion: 0.09
Nodes (19): Package Configuration, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 3 - "TypeScript Node Config"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, moduleResolution, noEmit (+9 more)

### Community 4 - "Main Section Components"
Cohesion: 0.18
Nodes (15): About Component, App Component, Contact Component, Experience Component, Footer Component, Hero Component, Main Entry Point, Navigation Component (+7 more)

### Community 5 - "Component Documentation"
Cohesion: 0.16
Nodes (14): About Component, Animation System Keyframes, Contact Component, Experience Component with Timeline, Performance Optimizations, ProjectCard Reusable Component, Projects Component, Responsive Design Behavior (+6 more)

### Community 6 - "Design System & Tokens"
Cohesion: 0.20
Nodes (10): App.tsx Root Component, CSS Modules Architecture, Global Design Tokens, Navigation Component, useTheme Custom Hook, Purple Gradient Logo Icon, Favicon Link, HTML Head with SEO Meta Tags (+2 more)

### Community 7 - "Docker Deployment"
Cohesion: 0.22
Nodes (9): Port Mapping 2000:80, Docker Compose Web Service, Volume Mounting Configuration, build-and-push-image Job, Build and push Docker image Step, Checkout code Step, deploy-it-on-vps Job, Login to Docker Hub Step (+1 more)

### Community 8 - "Package Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

### Community 9 - "Project Features"
Cohesion: 0.67
Nodes (3): Component Tree Structure, Portfolio Features Implemented, Tech Stack

## Knowledge Gaps
- **96 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+91 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `name`, `private`, `version` to the rest of the system?**
  _96 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Reusable Component Library` be split into smaller, more focused modules?**
  _Cohesion score 0.12298387096774194 - nodes in this community are weakly interconnected._
- **Should `React Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Build & Lint Config` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `TypeScript Node Config` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._