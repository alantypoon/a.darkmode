# a.darkmode

## Introduction
a.darkmode is to be added in a web page to switch between light and dark mode. It will detect and monitor the OS system settings by prefers-color-scheme. For those browsers which do not support the use of prefers-color-scheme, a variable stored in local storage will be used to keep track of the changes instead.

This project supports Bootstrap 4, AdmLTE 3 or customized page.

## Installation

In the body of the web page, add the following:
```
    <div class="mode-switch"></div>
```
In the head of the web page, add the following:
```
	<script src="a.darkmode.js"></script>
	<link href="a.darkmode.css" type="text/css" rel="stylesheet">
```
If it is not a AdminLTE 3 project, add the following too:
```
	<link href="a.darkmode-custom.css" type="text/css" rel="stylesheet">
```
## Demo page

Refer to the demo.html for a demonstration with Bootstrap 4 test page.


![alt text](https://github.com/alantypoon/a.darkmode/blob/main/images/mode-light.png?raw=true)

![alt text](https://github.com/alantypoon/a.darkmode/blob/main/images/mode-dark.png?raw=true)
