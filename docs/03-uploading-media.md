---
sidebar_position: 3
---
# Uploading Media to the Website

## Alt Text Spreadsheet

All files that aren’t text (JPG, JPEG, PNG, GIF, webp, PDF, videos, audio) must be included in the Alt Text spreadsheet in the organization drive. This spreadsheet tracks where raw file sources are located inside the magazine’s Google Drive, file URLs for the website, alt text for accessibility, and file size for overall hosting capacity (5 GB). This improves internal management because files can be easily found via the spreadsheet’s links instead of clicking around through folders. The file URLs can be copy-pasted into src=”” elements to make updates faster. 

## File Naming

All uploaded files must not include spaces or punctuation excluding dash and underscore in their filenames. Spaces, periods, and quotation marks will conflict with scripts used to process file URLs on compilation, so the final output of the image will not be correct. A list of valid filenames can be found in the Alt Text spreadsheet where all images should be tracked for easy viewing and file management. I use dashes in “kebab-case”, yet it is not standardized whether to keep the words capitalized or not. You are permitted to use “snake_case” using underscores, but my choice for kebab was to match css styling standards.

## File Size Management
The file size numbers are gathered by opening the file directory and checking the file size from there because those numbers are accurate to what gets pushed to GitHub. Getting the file size from Google Drive file info is not accurate.

The size of uploaded images, GIFs, PDFs, audio is recommended to be under 2 MB (2048 KB), and strictly limited to under 5 MB. The size of videos should seriously be compressed and hopefully under 5 MB. Since video files are rarer, the upper limit should be at most 10-20 MB. 

Compressing files can be done in various ways such as online tools, creative editors (photoshop, Krita), ImageMagik, and ffmpeg. I use Krita because I don’t have Photoshop and Krita’s “save as” allows me to specify how much I want to compress and keep changing it to get the file smaller. Online tools have privacy concerns with sending the image to third-party servers, so that may not be the best option to ensure we have the raw files for copyright protection.

Videos can be compressed really well using the ffmpeg library if you install it on your local device. Compressing videos larger than 1 GB should make use of downloaded video editing software (Blender, FFMPEG, etc.). 

:::tip

If we ever have large film media that exceeds 20 MB in size, it is better to upload it to YouTube as an unlisted video and embed it. In this way, we can keep the repository size of the website low, maintain file organization, and maintain the client-side configuration of the website. If Other People upgrades the website to a server, then there are other ways to store and serve large files!

:::

## Alt Text

You may think alt text is limited to people with visual deficiencies, but it helps you too. You’ve been in situations where you had a slow internet connection and images failed to load, or the image path was lost. The text that replaces the image is alt text, allowing you to figure out what you would have been looking at.

The alt text column on the spreadsheet allows content writers or artists a familiar space to write a low-fidelity description of the image for people with visual deficiencies. After the spreadsheet is filled out, copy and paste it into the alt=”” attribute in HTML. This means including images on the website has to be written in HTML instead of using Markdown’s convenient `[alt-text](src)`. Why HTML? If entering in an image in markdown format, the image will stretch to the width of the article space. It is more reliable to use HTML with CSS classes to handle the image display, and it can be maintained longer since it is already in the rendered HTML language. Large file displays make it hard to fully appreciate the image, so that’s why predefined classes like “w650”, “w450” set a max-width of the rendered image. Alternatively, images can be cropped, but we still keep the compressed files of original size so as to not reduce the quality of art.

The alt text on thumbnails should be the illustration title. The artist’s name can be included but sometimes we get emails where artists want to change their name, so this description could easily be overlooked since all they see is the Contributor section and not the file’s name. Please be attentive to what is kept in a file’s details!!!
