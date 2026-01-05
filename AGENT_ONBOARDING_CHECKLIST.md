# AI Agent Onboarding Checklist

**Project:** <PRIME_REACH_PUBLISHERS>  
**Date:** _______________  
**Agent:** _______________

---

## Phase 1: Discovery (First 30 Minutes)

### Repository Reconnaissance
- [ ] Identify project type (language, framework, stack)
- [ ] Locate and read README.md or main documentation
- [ ] Map directory structure (src, tests, config, docs)
- [ ] Find dependency files (package.json, requirements.txt, etc.)
- [ ] Check for .editorconfig, linter, and formatter configs

### Build & Test Discovery
- [ ] Document build command: `________________`
- [ ] Document test command: `________________`
- [ ] Document lint command: `________________`
- [ ] Document format command: `________________`
- [ ] Document dev server command: `________________`
- [ ] Run tests successfully: `<TEST_COMMAND>`
- [ ] Run linter successfully: `<LINT_COMMAND>`

### Standards Discovery
- [ ] Review 3-5 similar files to understand patterns
- [ ] Note naming conventions (files, variables, functions)
- [ ] Note import/require organization patterns
- [ ] Note comment and documentation styles
- [ ] Check for CONTRIBUTING.md or CODE_STYLE.md
- [ ] Review recent commits for commit message patterns
- [ ] Check for PR templates in .github/

### Safety Checks
- [ ] Verify .gitignore includes .env, secrets, credentials
- [ ] Locate CI/CD configuration (.github/workflows/, etc.)
- [ ] Check for security scanning tools (dependabot, snyk)
- [ ] Identify where environment variables are documented

---

## Phase 2: Pre-Work (Before Each Task)

### Requirement Clarification
- [ ] Understand the "what" (feature/fix description)
- [ ] Understand the "why" (motivation, problem solved)
- [ ] Understand the "who" (users affected)
- [ ] Identify edge cases and error scenarios
- [ ] Clarify ambiguous requirements (ask questions)
- [ ] Confirm acceptance criteria

### Planning
- [ ] Find similar existing code for patterns
- [ ] Identify files that need changes
- [ ] Plan test strategy (unit, integration, e2e)
- [ ] Identify risks (security, breaking changes, dependencies)
- [ ] Create branch: `<type>/<description>`
- [ ] Document assumptions clearly

---

## Phase 3: Development (During Work)

### Coding Standards
- [ ] Follow existing code patterns exactly
- [ ] Reuse existing utilities and libraries
- [ ] Match indentation and formatting style
- [ ] Add comments explaining "why" for complex logic
- [ ] Validate inputs and sanitize outputs
- [ ] Handle errors gracefully with user feedback
- [ ] Use environment variables for config/secrets
- [ ] Keep changes minimal and focused

### Testing Requirements
- [ ] Write unit tests for new functions/methods
- [ ] Write integration tests for component interactions
- [ ] Write e2e tests for user workflows (if applicable)
- [ ] Test happy path (100% coverage)
- [ ] Test error cases (100% coverage)
- [ ] Test edge cases (null, empty, large inputs)
- [ ] Achieve or exceed project coverage threshold
- [ ] All tests pass: `<TEST_COMMAND>`

### Security Checklist
- [ ] No secrets, keys, or credentials in code
- [ ] No PII or sensitive data in logs
- [ ] Input validation on all user data
- [ ] Output sanitization for rendered data
- [ ] Use parameterized queries (no SQL injection)
- [ ] Authentication checked before authorization
- [ ] HTTPS enforced (if network code)

---

## Phase 4: Pre-PR (Before Requesting Review)

### Code Quality Gates
- [ ] Build succeeds: `<BUILD_COMMAND>`
- [ ] All tests pass: `<TEST_COMMAND>`
- [ ] Linter passes: `<LINT_COMMAND>`
- [ ] Formatter applied: `<FORMAT_COMMAND>`
- [ ] No console.log or debug statements
- [ ] No commented-out code
- [ ] No TODOs without issue references
- [ ] Coverage meets threshold

### Documentation
- [ ] Public APIs documented (JSDoc, docstrings)
- [ ] Complex logic has explanatory comments
- [ ] README updated (if usage changed)
- [ ] Migration guide (if breaking change)
- [ ] Changelog entry added

### Git Hygiene
- [ ] Branch up to date with base branch
- [ ] Meaningful commit messages following convention
- [ ] No merge commits (rebased if needed)
- [ ] No commits with "WIP" or "temp" messages
- [ ] PR description complete (what, why, how to test)
- [ ] Screenshots added (if UI changes)
- [ ] Related issues linked (Fixes #123)
- [ ] Breaking changes clearly documented

### Final Verification
- [ ] Manually tested the feature/fix
- [ ] Tested on target browsers/devices (if UI)
- [ ] Verified no regressions in related features
- [ ] Checked for memory leaks or performance issues
- [ ] Reviewed own code (line by line)
- [ ] Compared changes with similar existing code

---

## Phase 5: Communication

### Progress Updates
- [ ] Notify when starting task
- [ ] Update when blocked or waiting
- [ ] Update when scope changes
- [ ] Notify when complete with summary

### When to Ask Questions
Ask before proceeding if:
- [ ] Requirements are ambiguous
- [ ] Multiple approaches with significant tradeoffs
- [ ] Security or privacy implications
- [ ] Breaking changes needed
- [ ] New dependencies required
- [ ] Scope is growing beyond initial estimates

### Decision Documentation
- [ ] Document key decisions in PR description
- [ ] Explain tradeoffs considered
- [ ] Note alternatives and why rejected
- [ ] Clearly label assumptions made

---

## Definition of Done

A task is complete when ALL of the following are true:

**Functionality:**
- [ ] Feature/fix works as specified
- [ ] All acceptance criteria met
- [ ] Edge cases and errors handled

**Quality:**
- [ ] Code follows project conventions
- [ ] Tests written and passing (meets coverage)
- [ ] Linter and formatter checks pass
- [ ] No new warnings or errors

**Safety:**
- [ ] No secrets committed
- [ ] No security vulnerabilities introduced
- [ ] Input validated, output sanitized

**Documentation:**
- [ ] Code documented appropriately
- [ ] User docs updated (if needed)
- [ ] PR description complete

**Process:**
- [ ] PR created with complete description
- [ ] All CI checks passing
- [ ] Ready for human review

---

## Emergency Stop Conditions

**STOP and ask for help if:**
- ⚠️ About to commit secrets or credentials
- ⚠️ Making breaking changes without approval
- ⚠️ Adding dependencies without approval
- ⚠️ Modifying security/auth code
- ⚠️ Accessing or storing PII without privacy review
- ⚠️ Tests are failing and you don't understand why
- ⚠️ Making changes that affect production data

---

## Quick Reference

### Common Commands
```bash
# Discovery
ls -la                          # List files
tree -L 3 -d                    # Directory structure
cat package.json | grep scripts # Find npm scripts

# Development
<BUILD_COMMAND>                 # Build project
<DEV_SERVER_COMMAND>            # Start dev server
<TEST_COMMAND>                  # Run tests
<TEST_COMMAND> --watch          # Run tests in watch mode
<LINT_COMMAND>                  # Run linter
<FORMAT_COMMAND>                # Format code

# Git
git status                      # Check status
git diff                        # Review changes
git log --oneline -10           # Recent commits
git blame <file>                # See who changed what
```

### Files to Check
- `README.md` - Setup and usage instructions
- `CONTRIBUTING.md` - Contribution guidelines
- `package.json` (or equivalent) - Scripts and dependencies
- `.github/workflows/` - CI/CD configuration
- `.editorconfig` - Editor settings
- `.eslintrc*` - Linting rules
- `.prettierrc*` - Formatting rules
- `.gitignore` - Ignored files (should include secrets)

### Where to Find Help
- Full instructions: `AGENT_INSTRUCTIONS.md`
- System prompt: `SYSTEM_PROMPT.txt`
- Templates: Section K in `AGENT_INSTRUCTIONS.md`
- Human reviewer: When in doubt, ask!

---

**Signature:** _________________ **Date:** _______________

**Notes:**

_______________________________________________________________

_______________________________________________________________

_______________________________________________________________




