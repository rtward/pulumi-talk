% Pulumi 101
% Robert Ward <robert@rtward.com>
%![](static/qrcode.png)<br/>Talk: [${TALK_URL}](${TALK_URL})<br/>Repo: [${REPO_URL}](${REPO_URL})

# Pulumi 101

# The old way
![](static/mouse.png)
![](static/keyboard.jpg)

::: notes

Doing things manually, clicking around on cloud consoles, and typing into terminals

:::

# The new way

![](static/iac.png)

::: notes

Describe how you want things to be, and let the system make it right

:::

# What is Pulumi?

- Write IaC in a common language
- Wide support for resource types
- Supports easy "dynamic" resource types

::: notes

Supports Python, TypeScript, C#, and Go
Supports Terraform providers so you can leverage that ecosystem
Can make your own resources / providers fairly easily

:::

# Compared to Terraform

- More flexible

::: notes

- You have a full programming language available instead of a DSL

:::

# Compared to CloudFormation

 - It's multi-cloud

::: notes

- You're not limited to just AWS

:::

# Compared to Ansible

- Apples and Oranges

::: notes

- Ansible is primarily for manageing machines
- Pets vs Cattle

:::

# Key Pulumi Concepts

## Core Architectural Components
- Stacks
- Resources
- Providers
- State management

## Language Support
- Supported programming languages
  - Python
  - TypeScript/JavaScript
  - C#
  - Go
  - YAML
- Benefits of using familiar programming languages for infrastructure

# Getting Started
- Installation process
- Setting up first Pulumi project
- Required tools and configurations
- Community resources and documentation

## IV. How Pulumi Works
- Project structure
- Configuration management
- Deployment workflow
- State tracking and management
- Difference between preview, update, and destroy operations

## V. Practical Example Walkthrough
- Simple infrastructure example
- Creating a cloud resource using Pulumi
- Demonstrating code-based infrastructure definition
- Showing preview and deployment steps

# Best Practices
- Infrastructure code organization
- State management strategies
- Security considerations
- Continuous integration and deployment (CI/CD) integration

# Q&A and Further Learning
- Common questions
- Recommended learning resources
- Community forums and support channels
- Future of infrastructure as code

---

Robert Ward <robert@rtward.com>

![](static/qrcode.png)

Talk: [${TALK_URL}](${TALK_URL})

Repo: [${REPO_URL}](${REPO_URL})
