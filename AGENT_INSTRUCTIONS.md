# AI Agent Instructions for <PRIME_REACH_PUBLISHERS>

**Version:** 1.0  
**Last Updated:** 2026-01-03  
**Purpose:** Guide AI agents to work safely and effectively in this codebase

---

## A. Mission & Scope

### What You Should Do
- **Implement requested changes** with minimal scope and maximum safety
- **Follow existing patterns** discovered in the codebase
- **Ask clarifying questions** when requirements are ambiguous or risky
- **Test your changes** thoroughly before marking work complete
- **Document decisions** and tradeoffs clearly
- **Maintain code quality** at or above current standards

### What You Should NOT Do
- **Never commit secrets** (API keys, passwords, tokens, credentials)
- **Never make breaking changes** without explicit approval and migration path
- **Never add dependencies** without discussing necessity and security implications
- **Never skip tests** or quality gates that exist in the project
- **Never assume** you know the business logic without verification
- **Never deploy** or trigger production releases autonomously

### Escalation Criteria
Ask for human guidance when:
- Changes affect security, authentication, or authorization
- Work requires adding new dependencies or upgrading major versions
- Multiple valid approaches exist with significant tradeoffs
- Requirements conflict with existing architecture
- Changes impact data privacy, compliance, or legal requirements
- You encounter insufficient test coverage for critical paths
- The change requires database migrations or schema changes

### Autonomy Boundaries
You may proceed autonomously with:
- Bug fixes with clear reproduction steps and test coverage
- Refactoring that preserves existing behavior with tests
- Documentation improvements and clarifications
- Code style and formatting corrections
- Adding tests for existing functionality
- Minor version dependency updates (with testing)

---

## B. First 30 Minutes - Repository Discovery

### Discovery Checklist

#### 1. Identify Project Type & Stack (5 minutes)
```bash
# Check root directory for configuration files
ls -la

# Common files to look for:
# - package.json, yarn.lock, pnpm-lock.yaml → Node.js/JavaScript
# - requirements.txt, setup.py, pyproject.toml → Python
# - Gemfile, Gemfile.lock → Ruby
# - go.mod, go.sum → Go
# - Cargo.toml → Rust
# - pom.xml, build.gradle → Java
# - composer.json → PHP
# - *.csproj, *.sln → .NET/C#
# - index.html, static HTML → Static site
```

**For this project:** Look for web framework indicators, build tools, and runtime configuration.

#### 2. Locate Build & Test Commands (5 minutes)
Check these files in order:
1. `README.md` or `README.rst` - Often contains setup and run instructions
2. `package.json` - Check `scripts` section for `build`, `test`, `lint`, `start`, `dev`
3. `Makefile` - Look for targets like `make build`, `make test`
4. `.github/workflows/*.yml` - CI configuration reveals exact commands
5. `Dockerfile` - Build steps show how to compile/run
6. `pyproject.toml` or `setup.py` - Python project commands
7. `Cargo.toml` - Rust project commands
8. Language-specific task runners: `Taskfile.yml`, `justfile`, `Rakefile`

**Discovery commands:**
```bash
# Node.js projects
cat package.json | grep -A 20 '"scripts"'

# Python projects
cat setup.py pyproject.toml requirements*.txt 2>/dev/null

# Check CI/CD
find .github .gitlab-ci.yml .travis.yml circle.yml -type f 2>/dev/null

# Check for task runners
ls Makefile Taskfile.yml justfile Rakefile 2>/dev/null
```

**Document your findings:**
- `<BUILD_COMMAND>`: _______________________
- `<TEST_COMMAND>`: _______________________
- `<LINT_COMMAND>`: _______________________
- `<FORMAT_COMMAND>`: _______________________
- `<DEV_SERVER_COMMAND>`: _______________________

#### 3. Understand Project Structure (5 minutes)
```bash
# Get directory structure (limit depth)
tree -L 3 -d -I 'node_modules|__pycache__|.git|dist|build'

# Or without tree command:
find . -type d -maxdepth 3 ! -path '*/.*' ! -path '*/node_modules/*'
```

**Identify key directories:**
- Source code: `src/`, `lib/`, `app/`, `pkg/`, `internal/`
- Tests: `test/`, `tests/`, `__tests__/`, `spec/`, `*_test.go`, `*_test.py`
- Configuration: `config/`, `configs/`, `.config/`
- Documentation: `docs/`, `documentation/`, `wiki/`
- Build output: `dist/`, `build/`, `target/`, `out/`
- Static assets: `public/`, `static/`, `assets/`

#### 4. Find Coding Standards & Style Guides (5 minutes)
Check for these files:
- `.editorconfig` - Cross-editor coding styles
- `.prettierrc`, `.prettierrc.json`, `prettier.config.js` - Prettier config
- `.eslintrc`, `.eslintrc.json`, `eslint.config.js` - ESLint config
- `pyproject.toml`, `.flake8`, `.pylintrc` - Python linting
- `.rubocop.yml` - Ruby style
- `rustfmt.toml` - Rust formatting
- `.golangci.yml` - Go linting
- `CONTRIBUTING.md` - Contribution guidelines
- `CODE_STYLE.md` - Project style guide
- `.git/hooks/` - Git hooks that enforce standards

**Read these files to understand:**
- Indentation (tabs vs spaces, width)
- Line length limits
- Naming conventions
- Import/require ordering
- Comment styles

#### 5. Check Existing Tests & Coverage (5 minutes)
```bash
# Find test files
find . -name "*test*" -o -name "*spec*" | grep -v node_modules | head -20

# Look for coverage configuration
cat .coveragerc jest.config.js vitest.config.js pytest.ini 2>/dev/null

# Check CI for coverage requirements
grep -r "coverage" .github/ 2>/dev/null
```

**Document:**
- Test framework: _______________________
- Coverage tool: _______________________
- Coverage threshold: ___________________
- How to run tests: _______________________

#### 6. Understand Dependencies (5 minutes)
```bash
# List dependencies based on project type
# Node.js
cat package.json | jq '.dependencies, .devDependencies'

# Python
cat requirements.txt requirements-dev.txt

# Check for security scanning
ls .snyk .dependabot/ renovate.json 2>/dev/null
```

**Note:**
- Are dependencies pinned to exact versions?
- Is there a lockfile?
- Are there known vulnerabilities?

---

## C. Coding Standards & Architecture Rules

### How to Discover Existing Patterns

#### 1. Find Similar Code
When implementing a feature, first find similar existing implementations:
```bash
# Example: Adding a new API endpoint
grep -r "router\|route\|endpoint" src/ | head -20

# Example: Adding a new React component
find src/ -name "*.tsx" -o -name "*.jsx" | head -10

# Example: Adding a new database model
grep -r "class.*Model\|Schema" src/ | head -20
```

#### 2. Analyze Code Patterns
Look at 3-5 similar files and note:
- File naming conventions (kebab-case, PascalCase, snake_case)
- Import ordering and grouping
- Function/method organization
- Comment styles and JSDoc/docstring presence
- Error handling patterns
- Logging patterns
- Test file naming and location

#### 3. Check Architecture Documentation
```bash
# Look for architecture docs
find . -name "ARCHITECTURE*" -o -name "DESIGN*" -o -name "ADR*"
ls docs/architecture docs/design docs/adr 2>/dev/null

# Check for diagrams
find . -name "*.mmd" -o -name "*.puml" -o -name "*.drawio"
```

### How to Comply with Project Conventions

#### Before Writing Code
1. **Read** at least 2-3 similar files completely
2. **Note** patterns: naming, structure, error handling, imports
3. **Match** the existing style exactly
4. **Use** the same libraries/utilities that already exist

#### While Writing Code
1. **Follow** indentation and formatting from `.editorconfig` or style configs
2. **Copy** import patterns from similar files
3. **Reuse** existing utilities before creating new ones
4. **Match** comment density and style

#### After Writing Code
1. **Run** the formatter: `<FORMAT_COMMAND>`
2. **Run** the linter: `<LINT_COMMAND>`
3. **Compare** your file side-by-side with a similar existing file
4. **Fix** any deviations from patterns

### When Standards Conflict

**If linter rules conflict with existing code:**
1. Follow the linter rules (they're enforced)
2. If many files violate the rule, ask before mass refactoring
3. Check git history to see if this is a recent standard change

**If documentation conflicts with code:**
1. Trust the code (it's the source of truth)
2. Note the discrepancy
3. Update documentation as part of your PR

**If team members have different styles:**
1. Follow the automated tools (linter/formatter)
2. If no automation exists, follow the majority pattern
3. Propose adding automation to prevent future inconsistency

---

## D. Workflows

### Bug Fix Workflow

#### 1. Investigation (30-50% of time)
```
┌─────────────────────────────────────────┐
│ 1. Reproduce the bug locally            │
│    - Get exact steps from issue         │
│    - Verify current behavior            │
│    - Document reproduction steps        │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│ 2. Locate the root cause                │
│    - Add debug logging                  │
│    - Use debugger/breakpoints           │
│    - Check git blame for context        │
│    - Review related code                │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│ 3. Understand the intended behavior     │
│    - Check specs/requirements           │
│    - Review existing tests              │
│    - Check related issues/PRs           │
└─────────────────────────────────────────┘
```

**Investigation Template:** See Templates section below.

#### 2. Fix (20-30% of time)
- **Make the smallest change** that fixes the root cause
- **Avoid refactoring** unless necessary for the fix
- **Preserve existing behavior** for unrelated code paths
- **Add defensive checks** if the bug was due to missing validation

**Before committing the fix:**
- [ ] Fix addresses root cause, not just symptoms
- [ ] Change is minimal and focused
- [ ] No unrelated changes included
- [ ] Comments explain "why" if logic is non-obvious

#### 3. Test (30-40% of time)
- **Write a test** that would have caught this bug
- **Verify the test fails** without your fix (proves it's testing the bug)
- **Verify the test passes** with your fix
- **Run all existing tests** to ensure no regressions
- **Test edge cases** related to the bug

**Test checklist:**
- [ ] New test reproduces the original bug (fails on main branch)
- [ ] New test passes with fix applied
- [ ] All existing tests pass
- [ ] Edge cases covered
- [ ] Test has clear name explaining what it verifies

#### 4. Document & PR
- **Commit message:** Describe what and why
  ```
  fix: <brief description of what was broken>
  
  <WHY it was broken>
  <HOW the fix works>
  <Any side effects or limitations>
  
  Fixes #<issue-number>
  ```

- **PR description:** Use template in section K
- **Link to issue** that reported the bug
- **Include** before/after behavior description

---

### Feature Workflow

#### 1. Design (20-30% of time)
```
┌─────────────────────────────────────────┐
│ 1. Understand requirements fully        │
│    - What problem does this solve?      │
│    - Who are the users?                 │
│    - What are edge cases?               │
│    - What are non-requirements?         │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│ 2. Check for existing similar features  │
│    - Can we extend existing code?       │
│    - What patterns should we follow?    │
│    - What libraries are already used?   │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│ 3. Design the minimal solution          │
│    - What's the simplest approach?      │
│    - Where does code go?                │
│    - What needs to change?              │
│    - What tests are needed?             │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│ 4. Get design approval if needed        │
│    - Security implications?             │
│    - Performance implications?          │
│    - Breaking changes?                  │
│    - New dependencies?                  │
└─────────────────────────────────────────┘
```

**Ask for approval before implementing if:**
- Adding new dependencies
- Changes affect security/auth
- Changes affect public API
- Implementation approach has significant tradeoffs

#### 2. Implement (40-50% of time)
**Build incrementally:**
1. **Start with types/interfaces** (if applicable)
2. **Implement core logic** with TODO comments for edge cases
3. **Add error handling**
4. **Add logging/observability**
5. **Handle edge cases**
6. **Add input validation**

**Keep commits focused:**
- One logical change per commit
- Each commit should build/test successfully
- Write descriptive commit messages

**Development checklist:**
- [ ] Follows existing code patterns
- [ ] Reuses existing utilities
- [ ] Handles errors gracefully
- [ ] Includes logging at appropriate level
- [ ] Validates inputs
- [ ] No hardcoded values (use config)
- [ ] No secrets in code

#### 3. Test (20-30% of time)
**Test layers:**
1. **Unit tests** - Test functions/methods in isolation
2. **Integration tests** - Test component interactions
3. **E2E tests** - Test full user workflows (if applicable)

**Test coverage goals:**
- Happy path: 100%
- Error cases: 100%
- Edge cases: 100%
- Overall coverage: Match or exceed project threshold

**Manual testing:**
- [ ] Test in development environment
- [ ] Test with real-world data
- [ ] Test error scenarios
- [ ] Test edge cases
- [ ] Test on different browsers/devices (if UI)

#### 4. Document
**Code documentation:**
- Public APIs: Document parameters, return values, exceptions
- Complex logic: Explain "why" not "what"
- Edge cases: Document assumptions and limitations

**User documentation (if applicable):**
- Update README if feature changes setup/usage
- Update API docs if endpoints changed
- Add examples for new functionality
- Update changelog

**Documentation checklist:**
- [ ] Public API documented
- [ ] README updated if needed
- [ ] Examples added for complex features
- [ ] Migration guide if breaking change
- [ ] Changelog entry added

---

### Refactor Workflow

#### 1. Analyze (30-40% of time)
**Understand current state:**
```bash
# Find all usages of code to refactor
grep -r "functionName\|ClassName" src/

# Check test coverage
<COVERAGE_COMMAND>

# Review git history
git log --follow -p -- path/to/file.ext
```

**Document:**
- What needs to change and why
- All files that will be affected
- Current test coverage
- Risks and mitigation strategies

#### 2. Plan (10-20% of time)
**Create a step-by-step plan:**
1. Add missing tests for current behavior
2. Refactor step 1 (smallest change)
3. Run tests
4. Refactor step 2
5. Run tests
6. ...
7. Clean up and optimize

**Each step should:**
- Be independently committable
- Preserve all tests passing
- Move incrementally toward goal

#### 3. Execute (30-40% of time)
**Follow the plan:**
- ✅ Make one change at a time
- ✅ Run tests after each change
- ✅ Commit after each successful step
- ❌ Don't combine refactoring with behavior changes
- ❌ Don't skip tests "just this once"

**If tests fail:**
1. Don't proceed to next step
2. Fix the issue or revert the change
3. Understand why tests failed
4. Update plan if needed

#### 4. Verify (10-20% of time)
**Verification checklist:**
- [ ] All tests pass
- [ ] Coverage hasn't decreased
- [ ] Performance hasn't regressed (if performance-sensitive)
- [ ] No new linter warnings
- [ ] Git diff shows only intended changes
- [ ] Deployment/build still works

**Before PR:**
- [ ] Squash commits if needed (preserve meaningful history)
- [ ] Update commit messages
- [ ] Add PR description explaining motivation
- [ ] Note that behavior is unchanged

---

## E. Testing & Quality Gates

### How to Find Test Infrastructure

#### Locate Test Framework
```bash
# Check package.json for test-related dependencies
grep -i "test\|spec\|jest\|mocha\|vitest\|pytest\|rspec" package.json

# Check for test config files
ls jest.config.* vitest.config.* pytest.ini .rspec 2>/dev/null

# Check CI for test commands
grep -r "test" .github/workflows/ 2>/dev/null
```

**Common frameworks by language:**
- **JavaScript/TypeScript:** Jest, Vitest, Mocha, Jasmine, AVA
- **Python:** pytest, unittest, nose
- **Ruby:** RSpec, Minitest
- **Go:** testing package, testify
- **Rust:** built-in test framework
- **Java:** JUnit, TestNG
- **C#:** NUnit, xUnit, MSTest

#### Locate Test Files
```bash
# Find test files
find . -type f \( -name "*test*" -o -name "*spec*" \) \
  ! -path "*/node_modules/*" ! -path "*/.git/*" | head -30

# Count tests by type
find . -name "*unit.test*" | wc -l  # Unit tests
find . -name "*integration.test*" | wc -l  # Integration tests
find . -name "*e2e*" -o -name "*e2e.test*" | wc -l  # E2E tests
```

### How to Run Tests

#### Run All Tests
```bash
# Try these commands in order
<TEST_COMMAND>  # From your discovery phase

# Common commands:
npm test
npm run test
yarn test
python -m pytest
pytest
cargo test
go test ./...
dotnet test
mvn test
bundle exec rspec
```

#### Run Specific Tests
```bash
# Jest/Vitest
npm test -- path/to/test.test.js
npm test -- --testNamePattern="specific test name"

# Pytest
pytest path/to/test_file.py::test_function_name

# Go
go test ./pkg/specific/...

# Cargo
cargo test test_name

# RSpec
bundle exec rspec path/to/spec.rb:42  # line number
```

#### Run Tests in Watch Mode
```bash
# Jest/Vitest
npm test -- --watch

# Pytest
pytest-watch
ptw
```

### Coverage Requirements

#### Measure Coverage
```bash
# JavaScript/TypeScript
npm test -- --coverage

# Python
pytest --cov=src --cov-report=html --cov-report=term

# Go
go test -cover ./...
go test -coverprofile=coverage.out ./...
go tool cover -html=coverage.out

# Rust
cargo tarpaulin --out Html
```

#### Coverage Thresholds
Check these files for required coverage:
- `jest.config.js` → `coverageThreshold`
- `vitest.config.js` → `coverage.threshold`
- `.coveragerc` or `pyproject.toml` → `[tool.coverage.report]`
- `sonar-project.properties` → `sonar.coverage.minimum`

**Default safe assumption:** Aim for 80%+ coverage on new code.

**Coverage checklist:**
- [ ] Line coverage meets threshold
- [ ] Branch coverage meets threshold
- [ ] Function coverage meets threshold
- [ ] All new code paths covered
- [ ] Error cases covered

### Linting & Formatting

#### Find Linting Tools
```bash
# Check package.json scripts
grep "lint\|format" package.json

# Look for config files
ls .eslintrc* .prettierrc* .pylintrc* .flake8 .rubocop.yml 2>/dev/null
```

#### Run Linting
```bash
<LINT_COMMAND>  # From your discovery phase

# Common commands:
npm run lint
npx eslint .
flake8 src/
pylint src/
rubocop
cargo clippy
golangci-lint run
```

#### Auto-fix Issues
```bash
# JavaScript/TypeScript
npm run lint -- --fix
npx prettier --write .

# Python
black src/
autopep8 --in-place --recursive src/

# Ruby
rubocop -a

# Go
gofmt -w .
go fmt ./...
```

### Pre-PR Quality Checklist

Before creating a PR, verify:

#### Build & Tests
- [ ] `<BUILD_COMMAND>` succeeds
- [ ] `<TEST_COMMAND>` passes all tests
- [ ] `<LINT_COMMAND>` shows no errors
- [ ] `<FORMAT_COMMAND>` shows no changes needed
- [ ] Coverage meets or exceeds threshold

#### Code Quality
- [ ] No console.log / print() debugging statements
- [ ] No commented-out code
- [ ] No TODO comments without issue numbers
- [ ] No hardcoded secrets or sensitive data
- [ ] No unnecessary dependencies added
- [ ] No large files committed (images, binaries)

#### Documentation
- [ ] Public APIs documented
- [ ] Complex logic has explanatory comments
- [ ] README updated if needed
- [ ] Migration guide if breaking change

#### Git Hygiene
- [ ] Meaningful commit messages
- [ ] No merge commits (rebase if needed)
- [ ] No commits with "WIP" or "temp" unless still in progress
- [ ] Branch is up to date with target branch

---

## F. Safety & Compliance

### Secrets Handling

#### ❌ NEVER Commit These
- API keys, tokens, credentials
- Passwords, private keys, certificates
- Database connection strings with credentials
- OAuth client secrets
- Encryption keys
- Cloud provider credentials (AWS keys, etc.)
- Third-party service credentials

#### ✅ Safe Practices

**1. Use Environment Variables**
```bash
# .env.example (commit this)
API_KEY=your_api_key_here
DATABASE_URL=postgresql://user:pass@localhost/db

# .env (DO NOT commit, add to .gitignore)
API_KEY=actual_secret_key_12345
DATABASE_URL=postgresql://realuser:realpass@prod.db/mydb
```

**2. Verify .gitignore**
```bash
# Check that secrets files are ignored
cat .gitignore | grep -E "\.env$|\.env\.local|secrets|credentials"

# Test before committing
git status --ignored
```

**3. Scan for Secrets Before Commit**
```bash
# Manual check
git diff --cached | grep -i "password\|secret\|key\|token"

# Use tools (if available)
git secrets --scan
trufflehog git file://. --only-verified
```

**4. If You Accidentally Commit a Secret**
1. **STOP** - Don't push if you haven't already
2. **Rotate the secret immediately** (invalidate the compromised credential)
3. **Remove from git history:**
   ```bash
   # If not pushed yet
   git reset HEAD~1
   git add -p  # Re-add without secret
   
   # If pushed, requires force push (get approval first)
   # Use git-filter-repo or BFG Repo Cleaner
   ```
4. **Notify** the team and security contact

### Dependency Management

#### When to Ask Permission
**Always ask before:**
- Adding new dependencies
- Upgrading major versions
- Downgrading versions
- Adding dependencies with:
  - Native code requirements
  - Large bundle size impact
  - Permissive or unknown licenses
  - Known security vulnerabilities
  - Lack of maintenance (no updates >2 years)

#### Safe Dependency Practices
```bash
# Check for known vulnerabilities
npm audit
pip-audit
bundle audit
cargo audit

# Check dependency licenses
npx license-checker --summary
pip-licenses

# Check dependency size (JavaScript)
npx bundle-phobia [package-name]
```

**Before adding a dependency, verify:**
- [ ] Can't implement simply in-house?
- [ ] Is actively maintained (commits in last 6 months)?
- [ ] Has reasonable download/usage numbers?
- [ ] License is compatible (MIT, Apache 2.0, BSD)?
- [ ] No known security vulnerabilities?
- [ ] Reasonable size/performance impact?

#### Updating Dependencies
**Minor/patch updates (usually safe):**
```bash
# Update within semver range
npm update
pip install --upgrade -r requirements.txt
```

**Major updates (ask first):**
- Check changelog for breaking changes
- Review migration guide
- Test thoroughly in development
- Update incrementally (one major dep at a time)

### Data Privacy

#### Personal Data Handling
**If code touches personal data:**
- [ ] Minimize data collected/stored
- [ ] Check for consent requirements
- [ ] Use encryption at rest and in transit
- [ ] Implement data retention policies
- [ ] Enable user data deletion/export
- [ ] Log access to personal data (audit trail)
- [ ] Never log personal data (even debug logs)

#### PII Examples
- Names, email addresses, phone numbers
- Addresses, location data
- IP addresses (in some jurisdictions)
- Biometric data
- Financial information
- Health information
- Government IDs

**Safe practices:**
```javascript
// ❌ BAD: Logging PII
console.log('User registered:', user.email, user.name);

// ✅ GOOD: Log without PII
console.log('User registered:', user.id);

// ✅ GOOD: Hash/redact if logging needed
console.log('User registered:', hashEmail(user.email));
```

### Security-Sensitive Code

#### Authentication & Authorization
**If touching auth code, verify:**
- [ ] Passwords are hashed (bcrypt, argon2, scrypt)
- [ ] Never log auth tokens or session IDs
- [ ] Session tokens are cryptographically random
- [ ] Token expiration is enforced
- [ ] Authorization checks happen server-side
- [ ] Least privilege principle applied

#### Input Validation
**Always validate/sanitize:**
```javascript
// ✅ Validate input
function processUser(username, email) {
  if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) {
    throw new Error('Invalid username');
  }
  if (!isValidEmail(email)) {
    throw new Error('Invalid email');
  }
  // ... process
}

// ✅ Sanitize for SQL (use parameterized queries)
db.query('SELECT * FROM users WHERE id = ?', [userId]);

// ❌ NEVER: String concatenation in SQL
db.query('SELECT * FROM users WHERE id = ' + userId);

// ✅ Sanitize for HTML
const safe = escapeHtml(userInput);
```

#### Common Vulnerabilities to Avoid
- **SQL Injection:** Use parameterized queries/ORMs
- **XSS:** Sanitize user input before rendering
- **CSRF:** Use CSRF tokens for state-changing operations
- **Path Traversal:** Validate/sanitize file paths
- **Command Injection:** Never use user input in shell commands
- **Open Redirects:** Validate redirect URLs

#### Security Checklist
Before committing security-sensitive code:
- [ ] Input validation on all user-provided data
- [ ] Output encoding when rendering user data
- [ ] Authentication checked before authorization
- [ ] Authorization checked before data access
- [ ] Secrets loaded from environment, never hardcoded
- [ ] Errors don't leak sensitive information
- [ ] Logging doesn't include secrets or PII
- [ ] Rate limiting on sensitive endpoints
- [ ] HTTPS enforced (if applicable)

---

## G. Change Management

### Branching Strategy Discovery

#### Find the Strategy
```bash
# Check documentation
cat README.md CONTRIBUTING.md docs/development.md 2>/dev/null | grep -i "branch"

# Look at existing branches
git branch -a

# Check protected branches in .git/config or ask
git remote show origin | grep "HEAD branch"

# Look at recent PRs for naming patterns
git log --oneline --graph --all --decorate | head -30
```

**Common strategies:**
- **Git Flow:** `main`, `develop`, `feature/*`, `hotfix/*`, `release/*`
- **GitHub Flow:** `main`, `feature/*`
- **GitLab Flow:** `main`, `feature/*`, `production`
- **Trunk-Based:** `main`, short-lived feature branches

#### Default Safe Assumption
If strategy is unclear:
1. Create feature branch from `main` (or `develop` if it exists)
2. Name it: `feature/short-description` or `fix/short-description`
3. Keep branch short-lived (< 3 days)
4. Rebase before creating PR

### Branch Naming Conventions

**Discover conventions:**
```bash
# Look at recent branch names
git for-each-ref --sort=-committerdate refs/remotes/ --format='%(refname:short)' | head -20
```

**Common patterns:**
- `feature/description` or `feature/issue-123-description`
- `fix/bug-description` or `fix/issue-456`
- `refactor/what-changed`
- `docs/what-documented`
- `test/what-tested`
- `username/feature-description`

**Safe defaults:**
```bash
# For new features
git checkout -b feature/add-user-export

# For bug fixes
git checkout -b fix/resolve-login-timeout

# For refactoring
git checkout -b refactor/extract-auth-service
```

### Commit Message Conventions

#### Discover Conventions
```bash
# Look at recent commit messages
git log --oneline -30

# Check for conventional commits
git log --oneline | head -20 | grep -E "^[a-f0-9]+ (feat|fix|docs|style|refactor|test|chore)"

# Check if commitlint is used
cat package.json | grep commitlint
ls .commitlintrc* commitlint.config.js 2>/dev/null
```

#### Common Conventions

**Conventional Commits (most common):**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates

**Examples:**
```bash
git commit -m "feat(auth): add password reset functionality"

git commit -m "fix(api): handle null response from user service

The user service can return null when user is deleted.
Added null check and appropriate error handling.

Fixes #123"

git commit -m "docs: update API documentation for v2 endpoints"

git commit -m "refactor: extract validation logic to separate module"
```

**If no convention is obvious, use:**
```
<Short summary in imperative mood>

<Detailed explanation of what and why>

<References to issues>
```

### PR Description Requirements

#### Discover Requirements
```bash
# Check for PR template
cat .github/PULL_REQUEST_TEMPLATE.md 2>/dev/null

# Check for multiple templates
ls .github/PULL_REQUEST_TEMPLATE/ 2>/dev/null

# Look at recent merged PRs for patterns
```

#### Standard PR Template
If no template exists, use the template from Section K.

**Minimum required information:**
1. **What** changed (summary)
2. **Why** it changed (motivation/context)
3. **How** to test it
4. **Screenshots** (if UI changed)
5. **Breaking changes** (if any)
6. **Issue links**

### Review-Ready Checklist

#### Code Quality
- [ ] Code follows project conventions
- [ ] No linter errors or warnings
- [ ] No commented-out code
- [ ] No debug statements (console.log, print, etc.)
- [ ] Meaningful variable/function names
- [ ] Complex logic has explanatory comments

#### Testing
- [ ] All tests pass locally
- [ ] New tests added for new functionality
- [ ] Edge cases covered
- [ ] Coverage meets threshold
- [ ] Manual testing completed

#### Documentation
- [ ] Code comments explain "why" not "what"
- [ ] Public APIs documented
- [ ] README updated if needed
- [ ] Breaking changes documented
- [ ] Migration guide provided (if applicable)

#### Git
- [ ] Branch is up to date with base branch
- [ ] Meaningful commit messages
- [ ] No merge commits (rebased)
- [ ] PR description is complete
- [ ] Linked to relevant issues

#### Security & Safety
- [ ] No secrets committed
- [ ] No PII logged
- [ ] Input validation added
- [ ] Dependencies vetted
- [ ] No obvious security issues

#### CI/CD
- [ ] All CI checks pass
- [ ] Build succeeds
- [ ] Tests pass in CI
- [ ] Coverage check passes
- [ ] No new security vulnerabilities

---

## H. Communication Protocol

### When to Provide Progress Updates

#### Always Update When:
- Starting work on a task
- Completing a major milestone
- Blocked or waiting on something
- Discovering scope is larger than expected
- Finding issues that change approach
- Finishing work (with summary)

#### Progress Update Format
```markdown
## Progress Update: <Task Name>

**Status:** In Progress / Blocked / Complete
**Time Spent:** ~X hours
**Progress:** X% (estimate)

### Completed
- [x] Item 1
- [x] Item 2

### In Progress
- [ ] Item 3 (50% complete)

### Blocked
- [ ] Item 4 - Waiting on: <reason>

### Next Steps
- Item 5
- Item 6

### Notes / Issues Discovered
- Issue 1
- Issue 2
```

### When to Ask Questions

#### Ask Before Proceeding When:
1. **Requirements are ambiguous**
   - "Should feature X behave like Y in case Z?"
   - "What should happen when user does X?"

2. **Multiple valid approaches with significant tradeoffs**
   - Present 2-3 options with pros/cons
   - Recommend one with rationale
   - Ask for preference

3. **Discovered technical constraints**
   - "Found that approach X won't work because Y"
   - "Need to change approach from X to Y"

4. **Scope is growing**
   - "Fixing bug X requires also changing Y and Z"
   - "Should we expand scope or handle separately?"

5. **Security or data implications**
   - "This change will access PII"
   - "This requires storing sensitive data"

6. **Breaking changes needed**
   - "Fix requires breaking API"
   - "Migration path needed"

7. **New dependencies or major updates**
   - "Need to add dependency X for feature Y"
   - "Need to upgrade library from v1 to v2"

#### Proceed with Best-Effort When:
1. **Clear requirements** with obvious implementation
2. **Standard bug fixes** with clear root cause
3. **Style/formatting** issues
4. **Documentation** improvements
5. **Test additions** for existing code
6. **Minor refactoring** that preserves behavior

**Label assumptions clearly:**
```markdown
## Assumptions Made
1. Assuming X should behave like Y because Z
2. Assuming error should return 400 (Bad Request) status
3. Assuming backwards compatibility must be maintained

Please confirm these assumptions are correct.
```

### How to Present Options & Tradeoffs

#### Option Format
```markdown
## Approach Options for <Problem>

### Context
<Brief description of the problem and constraints>

### Option 1: <Name>
**Description:** <How it works>

**Pros:**
- Pro 1
- Pro 2

**Cons:**
- Con 1
- Con 2

**Effort:** <Low/Medium/High> (~X hours)
**Risk:** <Low/Medium/High>

### Option 2: <Name>
**Description:** <How it works>

**Pros:**
- Pro 1
- Pro 2

**Cons:**
- Con 1
- Con 2

**Effort:** <Low/Medium/High> (~X hours)
**Risk:** <Low/Medium/High>

### Recommendation
I recommend **Option X** because:
- Reason 1
- Reason 2

### Questions
- Question 1?
- Question 2?
```

#### Comparison Table (Alternative Format)
```markdown
| Criteria | Option 1 | Option 2 | Option 3 |
|----------|----------|----------|----------|
| Effort | Low | Medium | High |
| Risk | High | Medium | Low |
| Maintainability | Good | Better | Best |
| Performance | Fast | Faster | Fastest |
| Complexity | Complex | Moderate | Simple |

**Recommendation:** Option 2 provides the best balance of...
```

### How to Document Decisions

#### Decision Record Format
```markdown
## Decision: <Title>

**Date:** YYYY-MM-DD
**Status:** Proposed / Accepted / Rejected / Superseded
**Deciders:** <Who was involved>

### Context
<What's the issue we're facing?>

### Decision
<What did we decide to do?>

### Consequences
**Positive:**
- Consequence 1
- Consequence 2

**Negative:**
- Consequence 1
- Consequence 2

**Neutral:**
- Consequence 1

### Alternatives Considered
- Alternative 1: <why rejected>
- Alternative 2: <why rejected>
```

**Where to document:**
- In PR description for PR-specific decisions
- In `docs/decisions/` or `docs/adr/` for architectural decisions
- In code comments for implementation-specific decisions
- In issue comments for feature-design decisions

---

## I. Definition of Done

### Code Complete Checklist

#### Functionality
- [ ] Feature/fix works as specified
- [ ] All acceptance criteria met
- [ ] Edge cases handled
- [ ] Error cases handled gracefully
- [ ] User feedback provided (loading states, errors, success)
- [ ] Backwards compatibility maintained (unless breaking change approved)

#### Code Quality
- [ ] Code follows project conventions
- [ ] Follows DRY principle (no unnecessary duplication)
- [ ] Functions/methods are focused and single-purpose
- [ ] Reasonable code complexity (no deeply nested logic)
- [ ] No code smells (long functions, god classes, etc.)
- [ ] Reuses existing utilities/patterns

#### Testing
- [ ] Unit tests written and passing
- [ ] Integration tests written and passing (if applicable)
- [ ] E2E tests written and passing (if applicable)
- [ ] Test coverage meets or exceeds threshold
- [ ] Edge cases tested
- [ ] Error cases tested
- [ ] Manual testing completed
- [ ] Tested on target browsers/devices (if UI)

#### Documentation
- [ ] Public APIs documented (JSDoc, docstrings, etc.)
- [ ] Complex logic explained with comments
- [ ] README updated (if usage changed)
- [ ] API docs updated (if applicable)
- [ ] Migration guide provided (if breaking change)
- [ ] Changelog entry added
- [ ] Comments explain "why" not "what"

#### Security & Safety
- [ ] No secrets or credentials in code
- [ ] Input validation implemented
- [ ] Output sanitization implemented
- [ ] No PII in logs
- [ ] Security best practices followed
- [ ] Dependencies vetted (if new ones added)
- [ ] No known vulnerabilities introduced

#### Performance
- [ ] No unnecessary database queries
- [ ] No N+1 query problems
- [ ] Efficient algorithms used
- [ ] No memory leaks
- [ ] No blocking operations in critical paths
- [ ] Bundle size impact acceptable (if frontend)

#### Build & Deploy
- [ ] Build succeeds locally
- [ ] All linter checks pass
- [ ] All formatter checks pass
- [ ] No console warnings or errors
- [ ] CI pipeline passes
- [ ] Deployment succeeds (if deploying)

#### Git & PR
- [ ] Branch up to date with base branch
- [ ] Meaningful commit messages
- [ ] No merge commits (rebased if needed)
- [ ] PR description complete and clear
- [ ] Linked to relevant issues
- [ ] Screenshots/videos added (if UI)
- [ ] Breaking changes called out
- [ ] Reviewers assigned

#### Communication
- [ ] Progress updates provided
- [ ] Assumptions documented
- [ ] Questions answered
- [ ] Decisions documented
- [ ] Tradeoffs explained

---

## J. Common Pitfalls & How to Avoid Them

### 1. Breaking Changes Without Migration Path

**Pitfall:**
Making changes that break existing functionality or APIs without providing a migration path.

**Examples:**
- Removing or renaming public functions
- Changing function signatures
- Changing API response formats
- Changing database schema

**How to Avoid:**
- [ ] Check git blame and usages before changing public APIs
- [ ] Search codebase for all usages: `grep -r "functionName" .`
- [ ] Provide deprecation warnings before removal
- [ ] Version your APIs
- [ ] Write migration scripts for data/schema changes
- [ ] Document breaking changes clearly
- [ ] Get approval for breaking changes

**Safe approach:**
```javascript
// ❌ Breaking change
function getUserData(id) { ... }
// Renamed to:
function fetchUserInfo(id) { ... }

// ✅ Safe migration
function fetchUserInfo(id) { ... }

// Deprecated but still works
function getUserData(id) {
  console.warn('getUserData is deprecated, use fetchUserInfo instead');
  return fetchUserInfo(id);
}
```

### 2. Introducing Unvetted Dependencies

**Pitfall:**
Adding dependencies without checking maintenance status, security, license, or size.

**How to Avoid:**
- [ ] Check if functionality can be implemented in-house (small utils)
- [ ] Verify package is actively maintained
- [ ] Check for security vulnerabilities
- [ ] Verify license compatibility
- [ ] Check bundle size impact (frontend)
- [ ] Review download statistics (indicates usage/trust)
- [ ] Ask team before adding dependencies

**Vetting checklist:**
```bash
# Check last update
npm info <package> time

# Check security
npm audit

# Check license
npx license-checker | grep <package>

# Check size
npx bundle-phobia <package>

# Check downloads
npm info <package> downloads
```

### 3. Skipping Tests or Quality Gates

**Pitfall:**
Committing code without running tests, linter, or other quality checks.

**How to Avoid:**
- [ ] Set up git pre-commit hooks
- [ ] Run tests before committing: `<TEST_COMMAND>`
- [ ] Run linter before committing: `<LINT_COMMAND>`
- [ ] Check CI status before requesting review
- [ ] Never use `--no-verify` flag on commits
- [ ] Set up local development environment same as CI

**Set up pre-commit hook:**
```bash
# .git/hooks/pre-commit
#!/bin/sh
npm test && npm run lint
```

Or use tools like `husky`:
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test && npm run lint"
    }
  }
}
```

### 4. Over-Engineering Simple Fixes

**Pitfall:**
Turning a simple bug fix into a large refactoring or adding unnecessary abstraction.

**Examples:**
- Creating abstract base classes for 2 implementations
- Adding configuration systems for single use cases
- Refactoring unrelated code while fixing a bug
- Adding frameworks/libraries for simple problems

**How to Avoid:**
- [ ] Make the smallest change that fixes the issue
- [ ] Follow the "Rule of Three" for abstraction (need 3 cases)
- [ ] Keep refactoring separate from bug fixes
- [ ] Ask: "Is this necessary for the current task?"
- [ ] Focus on solving the immediate problem
- [ ] Create separate issues for improvements

**Example:**
```javascript
// ❌ Over-engineered fix for "date format is wrong"
class DateFormatterFactory {
  createFormatter(type) { ... }
}
class ISODateFormatter extends DateFormatter { ... }
// ... 200 lines later

// ✅ Simple fix
function formatDate(date) {
  return date.toISOString().split('T')[0];
}
```

### 5. Leaking Sensitive Information

**Pitfall:**
Committing secrets, logging sensitive data, or exposing PII.

**How to Avoid:**
- [ ] Never hardcode secrets
- [ ] Use environment variables
- [ ] Add secret files to `.gitignore`
- [ ] Scan commits before pushing
- [ ] Never log PII or secrets
- [ ] Redact sensitive data in error messages
- [ ] Use secret scanning tools

**Prevention:**
```bash
# Check .gitignore
cat .gitignore | grep -E "\.env|secret|credential"

# Scan before commit
git diff --cached | grep -iE "password|secret|key|token"

# Use automated tools
npm install -D @commitlint/cli git-secrets
git secrets --install
```

### 6. Ignoring Edge Cases

**Pitfall:**
Only testing the happy path and missing edge cases.

**Common edge cases:**
- Empty inputs (null, undefined, empty string/array)
- Very large inputs
- Special characters in strings
- Concurrent operations
- Network failures
- Permission denied cases
- Race conditions

**How to Avoid:**
- [ ] List edge cases before implementing
- [ ] Write tests for edge cases
- [ ] Use property-based testing (if available)
- [ ] Review similar code for edge case handling
- [ ] Think about what can go wrong

**Edge case checklist:**
- [ ] Null/undefined inputs
- [ ] Empty collections
- [ ] Single-item collections
- [ ] Very large inputs
- [ ] Special characters
- [ ] Invalid data types
- [ ] Boundary values (0, -1, max int)
- [ ] Concurrent access
- [ ] Network/service failures
- [ ] Timeout scenarios

### 7. Not Reading Error Messages Carefully

**Pitfall:**
Guessing at solutions instead of reading and understanding error messages.

**How to Avoid:**
- [ ] Read the entire error message
- [ ] Note the file and line number
- [ ] Check the stack trace
- [ ] Search for the exact error message
- [ ] Understand the root cause before fixing

**Debugging process:**
1. Read full error message
2. Identify the exact location (file, line)
3. Understand what the code is trying to do
4. Understand why it's failing
5. Fix the root cause
6. Verify fix resolves error

### 8. Mixing Concerns in Commits

**Pitfall:**
Combining multiple unrelated changes in a single commit or PR.

**Examples:**
- Bug fix + refactoring + new feature
- Multiple unrelated bug fixes
- Code changes + dependency updates
- Feature implementation + formatting changes

**How to Avoid:**
- [ ] One logical change per commit
- [ ] Separate refactoring from behavior changes
- [ ] Create separate PRs for unrelated changes
- [ ] Use `git add -p` to stage partial files
- [ ] Split large changes into multiple PRs

**Good commit history:**
```
feat: add user export feature
test: add tests for user export
docs: update README with export instructions
```

**Bad commit history:**
```
fix stuff, add feature, update deps, refactor
```

### 9. Not Verifying Assumptions

**Pitfall:**
Proceeding based on assumptions without verification.

**How to Avoid:**
- [ ] Test assumptions with actual code execution
- [ ] Read documentation
- [ ] Check existing usages in codebase
- [ ] Ask questions when uncertain
- [ ] Add assertions to verify assumptions
- [ ] Document assumptions explicitly

**Verify assumptions:**
```javascript
// ❌ Assuming without verification
// Assuming this API always returns an array
const users = await fetchUsers();
users.forEach(user => ...);  // Might break!

// ✅ Verify assumption
const users = await fetchUsers();
if (!Array.isArray(users)) {
  throw new Error('Expected users to be an array');
}
users.forEach(user => ...);
```

### 10. Insufficient PR Descriptions

**Pitfall:**
Creating PRs with minimal descriptions like "fix bug" or "add feature".

**How to Avoid:**
- [ ] Use PR template (Section K)
- [ ] Explain what and why
- [ ] Provide testing instructions
- [ ] Add screenshots for UI changes
- [ ] Link to relevant issues
- [ ] Document tradeoffs
- [ ] Note breaking changes

**Bad PR description:**
```
fix bug
```

**Good PR description:**
```
fix: resolve login timeout issue

## Problem
Users were experiencing timeouts when logging in during peak hours.
The issue was caused by synchronous password hashing blocking the
event loop.

## Solution
Moved password hashing to async/await pattern using bcrypt's async
methods. This prevents blocking and improves response times.

## Testing
- Tested locally with 100 concurrent login requests
- Verified no timeouts occur
- All existing tests pass

Fixes #123
```

---

## K. Templates

### PR Description Template

```markdown
## Description
<!-- Brief description of what this PR does -->

## Motivation & Context
<!-- Why is this change needed? What problem does it solve? -->
<!-- Link to issue: Fixes #123 -->

## Type of Change
<!-- Mark relevant items with [x] -->
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Refactoring (no functional changes)
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Test additions/updates

## Changes Made
<!-- List the main changes made in this PR -->
- Change 1
- Change 2
- Change 3

## How to Test
<!-- Provide step-by-step testing instructions -->
1. Step 1
2. Step 2
3. Expected result: ...

## Screenshots / Videos
<!-- If UI changes, add screenshots or videos -->
<!-- Before: -->
<!-- After: -->

## Breaking Changes
<!-- If breaking changes, describe them and provide migration path -->
<!-- None / Describe breaking changes -->

## Checklist
<!-- Mark completed items with [x] -->
- [ ] Code follows project conventions
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] All tests pass locally
- [ ] No new linter warnings
- [ ] No secrets or sensitive data committed
- [ ] Branch is up to date with base branch

## Dependencies
<!-- List any new dependencies or dependency updates -->
<!-- None / List dependencies -->

## Additional Notes
<!-- Any other context, concerns, or discussion points -->
```

### Investigation Notes Template

```markdown
## Bug Investigation: <Title>

**Date:** YYYY-MM-DD  
**Investigator:** <Your Name>  
**Issue:** #<issue-number>  
**Priority:** Low / Medium / High / Critical

---

### Reported Problem
<!-- Copy the bug report or describe what was reported -->

---

### Reproduction Steps
1. Step 1
2. Step 2
3. Step 3

**Expected Behavior:** ...

**Actual Behavior:** ...

**Frequency:** Always / Sometimes / Rarely

---

### Environment
- **OS:** 
- **Browser/Runtime:** 
- **Version:** 
- **Configuration:** 

---

### Investigation Process

#### Hypothesis 1: <Description>
**Tested:** YYYY-MM-DD  
**Method:** <How you tested>  
**Result:** ✅ Confirmed / ❌ Disproven / ⚠️ Partial  
**Notes:** 

#### Hypothesis 2: <Description>
**Tested:** YYYY-MM-DD  
**Method:** <How you tested>  
**Result:** ✅ Confirmed / ❌ Disproven / ⚠️ Partial  
**Notes:** 

---

### Root Cause
<!-- Describe the root cause once identified -->

**Location:** `file.ext:line-number`

**Cause:** 

**Why it wasn't caught:** 

---

### Proposed Solution

**Approach:** 

**Changes Required:**
- File 1: Change description
- File 2: Change description

**Risks:**
- Risk 1
- Risk 2

**Testing Strategy:**
- Test 1
- Test 2

**Estimated Effort:** <hours/days>

---

### Alternatives Considered
1. **Alternative 1:** <description> - Rejected because ...
2. **Alternative 2:** <description> - Rejected because ...

---

### Prevention
<!-- How can we prevent this class of bugs in the future? -->
- [ ] Add test coverage
- [ ] Add linter rule
- [ ] Add validation
- [ ] Update documentation
- [ ] Improve error messages

---

### Related Issues / PRs
- Related: #<issue>
- Similar: #<issue>
- Previous: #<PR>
```

### Test Plan Template

```markdown
## Test Plan: <Feature/Fix Name>

**Date:** YYYY-MM-DD  
**Author:** <Your Name>  
**Related PR:** #<pr-number>  
**Related Issue:** #<issue-number>

---

### Scope
**In Scope:**
- Item 1
- Item 2

**Out of Scope:**
- Item 1
- Item 2

---

### Test Strategy

**Test Levels:**
- [ ] Unit Tests
- [ ] Integration Tests
- [ ] E2E Tests
- [ ] Manual Testing
- [ ] Performance Testing
- [ ] Security Testing

---

### Test Cases

#### Unit Tests

| ID | Test Case | Input | Expected Output | Status |
|----|-----------|-------|-----------------|--------|
| U1 | Test case 1 | Input 1 | Output 1 | ⬜ TODO / ✅ PASS / ❌ FAIL |
| U2 | Test case 2 | Input 2 | Output 2 | ⬜ TODO / ✅ PASS / ❌ FAIL |

#### Integration Tests

| ID | Test Case | Preconditions | Steps | Expected Result | Status |
|----|-----------|---------------|-------|-----------------|--------|
| I1 | Test case 1 | Precond 1 | Steps | Result | ⬜ TODO / ✅ PASS / ❌ FAIL |

#### E2E Tests

| ID | User Story | Steps | Expected Result | Status |
|----|------------|-------|-----------------|--------|
| E1 | As a user... | 1. Step 1<br>2. Step 2 | Result | ⬜ TODO / ✅ PASS / ❌ FAIL |

---

### Edge Cases

| ID | Edge Case | How to Test | Expected Behavior | Status |
|----|-----------|-------------|-------------------|--------|
| EC1 | Null input | Call function with null | Should throw error | ⬜ TODO / ✅ PASS / ❌ FAIL |
| EC2 | Empty array | Pass [] | Should return empty | ⬜ TODO / ✅ PASS / ❌ FAIL |
| EC3 | Very large input | Pass 10000 items | Should handle gracefully | ⬜ TODO / ✅ PASS / ❌ FAIL |

---

### Error Cases

| ID | Error Scenario | How to Trigger | Expected Error Handling | Status |
|----|----------------|----------------|-------------------------|--------|
| ER1 | Network failure | Disconnect | Show error message | ⬜ TODO / ✅ PASS / ❌ FAIL |
| ER2 | Invalid data | Send malformed | Return 400 error | ⬜ TODO / ✅ PASS / ❌ FAIL |

---

### Manual Testing Checklist

#### Functionality
- [ ] Feature works as expected
- [ ] All acceptance criteria met
- [ ] Edge cases handled
- [ ] Error cases handled

#### UI/UX (if applicable)
- [ ] Layout correct on desktop
- [ ] Layout correct on mobile
- [ ] Responsive at all breakpoints
- [ ] Loading states work
- [ ] Error states work
- [ ] Success feedback shown
- [ ] Accessible (keyboard navigation, screen readers)

#### Browser Testing (if applicable)
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

#### Performance
- [ ] Fast enough (<200ms for interactions)
- [ ] No memory leaks
- [ ] Efficient queries
- [ ] No unnecessary re-renders

---

### Test Coverage

**Current Coverage:** ___%  
**Target Coverage:** ___%

**Files with <80% Coverage:**
- file1.ext: __%
- file2.ext: __%

---

### Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Risk 1 | Low/Med/High | Low/Med/High | Mitigation plan |

---

### Test Environment

**Environment:** Development / Staging / Production  
**Test Data:** <Description of test data used>  
**Configuration:** <Any special config needed>

---

### Results Summary

**Total Tests:** __  
**Passed:** __  
**Failed:** __  
**Skipped:** __

**Coverage:** __%

**Sign-off:** Ready for Production / Needs Work

**Issues Found:**
- Issue 1: <description>
- Issue 2: <description>
```

---

## Summary

This guide provides a framework for working safely and effectively in any codebase. Remember:

1. **Discover** before acting - understand the project structure, conventions, and requirements
2. **Follow** existing patterns - consistency is more valuable than personal preference
3. **Test** thoroughly - automated and manual testing prevents regressions
4. **Communicate** clearly - update progress, ask questions, document decisions
5. **Stay safe** - never commit secrets, always validate input, minimize risk

When in doubt:
- Make the smallest change that works
- Ask questions before proceeding
- Follow existing patterns
- Add tests
- Document your decisions

Good luck! 🚀

---

**Document Maintenance:**
- Review this document quarterly
- Update based on team feedback
- Keep examples current with project tech stack
- Add common issues to pitfalls section

