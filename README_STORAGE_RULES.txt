IMPORTANT — ONE-TIME FIREBASE SETUP

The app uses Firebase Storage for teacher attachments. If the Teacher screen gets stuck at “Uploading…”, Firebase Storage rules are blocking the upload.

On your phone:
1. Open Firebase Console for the SAMISHA project.
2. Open Storage → Rules.
3. Replace the existing Storage rules with the contents of storage.rules in this folder.
4. Tap Publish.
5. Then reopen SAMISHA and create a NEW test assignment with one small PNG.

This app does NOT need StackBlitz.

The rules intentionally allow assignment files to be read publicly because the app has no Firebase login and Vidushi needs to open the teacher's files. Keep this Firebase project dedicated to SAMISHA.
