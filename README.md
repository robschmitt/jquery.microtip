# MicroTip for jQuery

A very lightweight plugin for displaying nicely formatted tooltips above or below the attached element.

## Usage

Usage is simple:

    $(".microtip").microtip();

This will attach the plugin to any element with a class of 'microtip'. By default it grabs the value of the element's title attribute and displays a neatly formatted tooltip below the element.

You can also override some of the default settings:

    $(".microtip").microtip({
      bg: true, // Set to false to remove .bg class, gradient background, rounded corners and dropdown
      attr: 'title', // The tooltip text will be read from this attribute
      position: 'bottom', // Set to 'top' to position the tooltip above the element
      width: '', // Constrain the tooltip to a fix width in pixels (e.g. 200)
      minWidth: 100, // Tooltip should be no narrower than minWidth (pixels). Ignored when width is specified.
      maxWidth: 175, // Tooltip should be no wider than maxWidth (pixels). Ignored when width is specified.
      textColor: '', // Override the default text color (specified in CSS file)
      offset: 8 // Amount in pixels tooltip should be offset from the element
    });

## Copyright

Copyright (c) 2012 Rob Schmitt. See LICENSE for details.