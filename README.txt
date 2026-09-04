SAMISHA fixed index.html

Replace the repository's live index.html with this file.
Keep your existing manifest.json, sw.js, icons, etc.
Do not rename this to indexfix.html.

This fix:
- keeps the RPG and Teacher navigation
- loads teacher assignment attachments from Firestore subcollections
- fixes missing Firebase Storage imports used by student photo uploads
- keeps teacher attachments as Firestore data URLs
