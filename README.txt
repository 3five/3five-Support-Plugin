=== Plugin Name ===
Contributors: 3five, VincentListrani
Donate link: 
Tags: support, help desk, FreshDesk
Requires at least: 4.1
Tested up to: 4.7.1
Stable tag: 1.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Submit a support ticket to 3five, Inc. and get help with your website.

== Description ==

This plugin is designed to submit support tickets directly to the 3five support system at FreshDesk.

== Installation ==

1. Upload `/threefive-support` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

= No FAQ's at this time. =

== Screenshots ==

There are no screenshots at this time.

== Changelog ==

= 1.1 =
* Cleaned up some PHPCS notices and returned public method early to stop loading files on the front end.
* Added the Content-Type header for the outgoing email.
* Added full support for multiple file upload. Files are sent to a custom folder in the WP install and then added as attachments.
* Changed the email address to the new FreshDesk email.

= 1.0 =
* Initial Release

== Upgrade Notice ==
* Tickets will now be submitted to FreshDesk in stead of HelpSpot