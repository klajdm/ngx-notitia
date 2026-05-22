# Security Policy

## Supported Versions

Only the latest published version of ngx-notitia receives security fixes.

| Version | Supported |
| ------- | --------- |
| latest  | ✅        |
| older   | ❌        |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Report vulnerabilities privately via GitHub's built-in security advisories:

1. Go to the [Security Advisories](https://github.com/klajdm/ngx-notitia/security/advisories/new) page
2. Click **Report a vulnerability**
3. Fill in the details - affected version, reproduction steps, and potential impact

Alternatively, you can email **klajdimurati3@gmail.com** with the subject line `[ngx-notitia] Security Vulnerability`.

## What to Expect

- **Acknowledgement** within 48 hours
- **Status update** within 7 days (confirmed, invalid, or fix in progress)
- A patched release and public disclosure once a fix is ready

## Scope

This library is a client-side Angular toast notification package. Relevant security concerns include:

- **XSS via `enableHtml: true`** - HTML content passed to toasts is sanitized by Angular's `DomSanitizer`, but enabling `enableHtml` with untrusted user input is the responsibility of the consuming application
- **Dependency vulnerabilities** - issues in `tslib` or Angular peer dependencies

Out of scope: issues in the demo site (ngx-notitia.vercel.app) that do not affect the published npm package.
