# Graph Report - namialusweb  (2026-06-10)

## Corpus Check
- 30 files · ~8,753 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 236 nodes · 253 edges · 28 communities (13 shown, 15 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `084f010b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

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
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `compilerOptions` - 16 edges
3. `🚀 Portfolio Website - Build Complete!` - 13 edges
4. `useScrollAnimation()` - 11 edges
5. `Portfolio Website - Component Architecture` - 10 edges
6. `App Component` - 10 edges
7. `Animation System` - 8 edges
8. `useScrollAnimation` - 7 edges
9. `Frontend Design` - 6 edges
10. `Responsive Behavior` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Favicon Link` --references--> `Purple Gradient Logo Icon`  [EXTRACTED]
  index.html → public/favicon.svg
- `Key Animations Reference` --cites--> `Animation System`  [EXTRACTED]
  PORTFOLIO_GUIDE.md → ARCHITECTURE.md
- `📱 Responsive Breakpoints` --cites--> `Responsive Behavior`  [EXTRACTED]
  PORTFOLIO_GUIDE.md → ARCHITECTURE.md
- `Navigation Component` --implements--> `React Root Entry Point`  [INFERRED]
  ARCHITECTURE.md → index.html
- `Build and push Docker image Step` --references--> `Docker Compose Web Service`  [INFERRED]
  .github/workflows/deploy.yml → docker-compose.yaml

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Component Rendering Pipeline** — architecture_app_tsx, architecture_navigation_component, architecture_hero_component, architecture_about_component, architecture_skills_component, architecture_experience_component, architecture_projects_component, architecture_contact_component, architecture_footer_component [EXTRACTED 1.00]
- **Reusable Components System** — architecture_skillbadge_component, architecture_projectcard_component, architecture_timelineitem_component [EXTRACTED 1.00]
- **Custom Hooks System** — architecture_usetheme, architecture_usescrollanimation [EXTRACTED 1.00]
- **CI/CD Deployment Pipeline** — workflows_deploy_build_and_push_image, workflows_deploy_deploy_it_on_vps, docker_compose_service_web [EXTRACTED 1.00]
- **Social Media Icons Sprite** — icons_github_icon, icons_x_icon, icons_discord_icon, icons_bluesky_icon [EXTRACTED 1.00]

## Communities (28 total, 15 thin omitted)

### Community 0 - "Reusable Component Library"
Cohesion: 0.09
Nodes (24): ProjectCard(), ProjectCardProps, SkillBadge(), SkillBadgeProps, TimelineItem(), TimelineItemProps, About(), highlights (+16 more)

### Community 1 - "React Dependencies"
Cohesion: 0.12
Nodes (17): devDependencies, @babel/core, babel-plugin-react-compiler, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+9 more)

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
Cohesion: 0.08
Nodes (29): About Component, Animation Delays, Animation System, classNames, Contact Component, CSS Modules Structure, Data Flow, Desktop (1200px+) (+21 more)

### Community 6 - "Design System & Tokens"
Cohesion: 0.15
Nodes (13): App.tsx Root Component, CSS Modules Architecture, Custom Hooks, Global Design Tokens, Navigation Component, useTheme, Purple Gradient Logo Icon, Favicon Link (+5 more)

### Community 7 - "Docker Deployment"
Cohesion: 0.22
Nodes (9): Port Mapping 2000:80, Docker Compose Web Service, Volume Mounting Configuration, build-and-push-image Job, Build and push Docker image Step, Checkout code Step, deploy-it-on-vps Job, Login to Docker Hub Step (+1 more)

### Community 8 - "Package Scripts"
Cohesion: 0.15
Nodes (12): dependencies, react, react-dom, name, private, scripts, build, dev (+4 more)

### Community 9 - "Project Features"
Cohesion: 0.10
Nodes (19): Component Tree, Build, 🚢 Deployment, Development, Docker, Portfolio Features Implemented, ✨ Features Implemented, 🚀 Getting Started (+11 more)

### Community 22 - "Community 22"
Cohesion: 0.25
Nodes (7): computedHash, skillPath, source, sourceType, skills, frontend-design, version

### Community 23 - "Community 23"
Cohesion: 0.29
Nodes (6): Design principles, Frontend Design, Ground it in the subject, More on writing in design, Process: brainstorm, explore, plan, critique, build, critique again, Restraint and self-critique

## Knowledge Gaps
- **139 isolated node(s):** `PreToolUse`, `name`, `private`, `version`, `type` (+134 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `🚀 Portfolio Website - Build Complete!` connect `Project Features` to `Component Documentation`, `Design System & Tokens`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Why does `Portfolio Website - Component Architecture` connect `Component Documentation` to `Project Features`, `Design System & Tokens`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `PreToolUse`, `name`, `private` to the rest of the system?**
  _139 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Reusable Component Library` be split into smaller, more focused modules?**
  _Cohesion score 0.08846153846153847 - nodes in this community are weakly interconnected._
- **Should `React Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Build & Lint Config` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `TypeScript Node Config` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._