## 3five WordPress Support Plugin

This plugin connects to our FreshDesk system by sending an email from a WordPress site to wpsupport@3five.com thus generating a new ticket within the FreshDesk system.

#### Changelog

**1.2.3**

* Bugfix for file upload field. Was returning a blocking error when submitting without a file attached.

**1.2.2**

* Readme and composer file minor updates. Fixes version number issue on the WP Admin.

**1.2.1**

* Added composer support.

**1.2**

* Added full support for multiple file upload. Files are sent to a custom folder in the WP install and then added as attachments.
* Changed the email address to the new FreshDesk email.

**1.1**

* Cleaned up some PHPCS notices and returned public method early to stop loading files on the front end.
* Added the Content-Type header for the outgoing email.

**1.0**

* Initial Release