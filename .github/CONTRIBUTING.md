# Contributing to NGX-Notitia

First off, thank you for considering contributing to NGX-Notitia! 🎉

It's people like you that make NGX-Notitia such a great tool for the Angular community.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Convention](#commit-convention)
- [Testing Guidelines](#testing-guidelines)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- Use the bug report template
- Provide a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Provide specific examples and code samples
- Describe the behavior you observed and what you expected
- Include screenshots or GIFs if applicable
- Specify your Angular version, NGX-Notitia version, and browser

### Suggesting Features

Feature suggestions are welcome! Please:

- Use the feature request template
- Provide a clear and detailed explanation of the feature
- Explain why this feature would be useful
- Provide examples of how it would be used
- Consider if this fits the project's scope and goals

### Improving Documentation

Documentation improvements are always appreciated:

- Fix typos or grammatical errors
- Add missing examples
- Clarify confusing sections
- Add new guides or tutorials
- Improve API documentation

### Submitting Code Changes

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following our coding standards
3. **Add tests** for any new functionality
4. **Update documentation** if needed
5. **Ensure tests pass** by running `npm test`
6. **Lint your code** with `npm run lint`
7. **Submit a pull request** with a clear description

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ and npm 9+
- Angular CLI 21+
- Git

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/ngx-notitia.git
cd ngx-notitia

# Add upstream remote
git remote add upstream https://github.com/klajdm/ngx-notitia.git

# Install dependencies
npm install

# Start development server (demo app)
ng serve

# Build the library
npm run build

# Run tests
npm test

# Run linter
npm run lint
```

### Project Structure

```
ngx-notitia/
├── src/
│   ├── lib/                    # Library source code
│   │   ├── toastr.css          # Toast styles
│   │   ├── toastr.service.ts   # ToastrService
│   │   ├── toast.component.ts  # Animated Toast component
│   │   ├── toast-noanimation.component.ts  # Base Toast (no animations)
│   │   ├── toast-container.directive.ts    # Container directive
│   │   ├── toastr.module.ts    # NgModule setup
│   │   ├── overlay.ts          # Overlay/portal system
│   │   └── toastr-config.ts    # Config interfaces and defaults
│   ├── app/                    # Demo application
│   │   ├── main/               # Page components (home, docs, etc.)
│   │   └── components/         # Shared UI components
│   └── public-api.ts           # Public API exports
└── .github/                    # GitHub configuration
```

## 🔄 Pull Request Process

### Before Submitting

1. **Update your fork** with the latest changes from upstream:

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Create a feature branch**:

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes** and commit them using conventional commits

4. **Push to your fork**:
   ```bash
   git push origin feature/amazing-feature
   ```

### PR Requirements

- ✅ All tests pass (`npm test`)
- ✅ Code is linted (`npm run lint`)
- ✅ New features have tests
- ✅ Documentation is updated
- ✅ Commit messages follow convention
- ✅ PR description clearly explains changes
- ✅ No merge conflicts with main branch

### PR Review Process

1. A maintainer will review your PR within 3-5 business days
2. Address any requested changes
3. Once approved, a maintainer will merge your PR
4. Your contribution will be included in the next release!

## 💻 Coding Standards

### TypeScript

- Use **TypeScript strict mode**
- Provide **explicit return types** for all functions
- Use **interfaces** for object types
- Avoid `any` type - use proper typing
- Use **readonly** where applicable

```typescript
// ✅ Good
function formatMessage(message: string, enableHtml: boolean): string {
  // implementation
}

// ❌ Bad
function formatMessage(message: any, enableHtml: any) {
  // implementation
}
```

### Angular

- Use **standalone components** by default
- Follow **Angular style guide**
- Use **signals** for reactive state where appropriate
- Add **ARIA attributes** for accessibility

```typescript
// ✅ Good
@Component({
  selector: '[toast-component]',
  standalone: true,
  // ...
})
export class Toast extends ToastBase {
  // implementation
}
```

### CSS

- Use **CSS custom properties** for theming
- Ensure **responsive design**
- Support **dark mode** via `prefers-color-scheme` or `colorScheme` option

### Accessibility

- Add proper **ARIA labels** and roles
- Support **keyboard navigation**
- Ensure **screen reader compatibility**
- Maintain **color contrast ratios**

## 📝 Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### Examples

```bash
feat(toast): add colorScheme option for per-toast dark/light override

- Add 'auto' | 'light' | 'dark' config option
- Auto mode follows page color scheme
- Override applies data-attribute to host element

Closes #42

fix(service): prevent duplicate toasts from resetting incorrectly

resetTimeoutOnDuplicate was firing even when preventDuplicates was false.
Guard added to check preventDuplicates before resetting.

Fixes #38

docs(readme): add showBorder and colorScheme to options table

test(service): add coverage for countDuplicates edge cases
```

## 🧪 Testing Guidelines

### Unit Tests

- Write tests for **all new features**
- Maintain **>90% code coverage**
- Test **edge cases** and **error conditions**
- Use **descriptive test names**

```typescript
describe('ToastrService', () => {
  describe('Duplicate prevention', () => {
    it('should not show duplicate toast when preventDuplicates is true', () => {
      // Arrange
      const service = createService({ preventDuplicates: true });

      // Act
      service.success('same message');
      service.success('same message');

      // Assert
      expect(service.toasts.length).toBe(1);
    });
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:ci

# Run tests in watch mode
npm test -- --watch
```

## 🎨 Toast Development Checklist

When adding a new feature or toast variant:

- [ ] Implement changes in `src/lib/`
- [ ] Export new symbols from `src/public-api.ts`
- [ ] Update `ToastrConfig` interfaces if adding new options
- [ ] Add defaults to `DefaultNoComponentGlobalConfig`
- [ ] Write unit tests
- [ ] Add ARIA attributes for accessibility
- [ ] Update README options table
- [ ] Add demo usage in `src/app/main/home/`
- [ ] Update CHANGELOG

## 📚 Documentation Standards

### Code Comments

Only add comments when the **why** is non-obvious. Prefer self-documenting code.

```typescript
// Run outside Angular zone to avoid triggering CD on every animation frame
this.ngZone.runOutsideAngular(() => {
  this.progressInterval = window.setInterval(() => this.updateProgress(), 10);
});
```

### README Updates

- Update the options table if adding new config properties
- Add usage examples for new features
- Keep the feature list current

## 🐛 Debugging Tips

### Common Issues

1. **Tests failing**: Ensure you've run `npm install` after pulling latest changes
2. **Linter errors**: Run `npm run lint -- --fix` to auto-fix formatting issues
3. **Toast not showing**: Verify `provideToastr()` or `ToastrModule.forRoot()` is in your providers

### Useful Commands

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Angular cache
npx ng cache clean

# Build library in watch mode
npm run build -- --watch
```

## 🏆 Recognition

Contributors will be:

- Listed in the [Contributors](https://github.com/klajdm/ngx-notitia/graphs/contributors) page
- Mentioned in release notes

## 📞 Getting Help

- 💬 [GitHub Discussions](https://github.com/klajdm/ngx-notitia/discussions) - Ask questions
- 🐛 [Issue Tracker](https://github.com/klajdm/ngx-notitia/issues) - Report bugs
- 🚀 [Demo App](https://ngx-notitia.vercel.app) - See it in action

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to NGX-Notitia! 🎉
