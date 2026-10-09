# Network Port Map — Monitoring Dashboard (Demo)

**Live demo:** https://itkhurshed.github.io/network-portmap-demo/

A switch-faceplate style network dashboard: one RJ45 port per IP address, with link/activity LEDs
that show what is up, down or unverified. It is the front end of an enterprise monitoring system I
built and run on Windows Server:

- **NetMonitor (PowerShell 7 / 5.1)** — parallel ICMP + TCP probing of every subnet every 5 minutes,
  flap protection, DOWN / UP / NEW-device / MAC-change alerts by email, business-hours rules, daily report.
- **SecurityWatch** — Windows Event Forwarding + Microsoft Defender + Sysmon, deployed by Group Policy.
  Emails within a minute when a virus is detected, antivirus is disabled, unapproved software is installed,
  a new service appears or an executable is downloaded. Agentless, no extra licences.
- **Dashboard** — vanilla HTML/JS, no framework, filters, search, device drawer, security alert panel,
  auto-refresh, reduced-motion support. Served internally from IIS with subnet restrictions.

> All networks, hostnames, people and alerts in this demo are **fictional**. The production version runs
> on an internal server only; no real infrastructure data is published.

## Tech
PowerShell · .NET async ping · Windows Event Forwarding (WEF/WEC) · Sysmon · Microsoft Defender ·
Task Scheduler · IIS · Group Policy · HTML/CSS/JavaScript

## Author
Mohammad Khurshed Alam — IT Infrastructure Engineer (AZ-104, CCNP Enterprise)
