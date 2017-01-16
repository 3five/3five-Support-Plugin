## 3five WordPress Support Plugin

This plugin connects to our FreshDesk system by sending an email from a WordPress site to wpsupport@3five.com thus generating a new ticket within the FreshDesk system.

#### Changelog

**1.1**
* Cleaned up some PHPCS notices and returned public method early to stop loading files on the front end.
* Added the Content-Type header for the outgoing email.
* Added full support for multiple file upload. Files are sent to a custom folder in the WP install and then added as attachments. 
* Changed the email address to the new FreshDesk email.

**1.0**
* Initial Release