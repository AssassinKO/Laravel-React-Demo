<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <title>Jumbo - Admin Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="keywords" content="Responsive, HTML5, admin theme, business, professional, React, web design, CSS3, JSS"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <meta name="msapplication-TileColor" content="#6200EE"/>
    <meta name="msapplication-TileImage"     content="{{ asset('logo512.png') }}"/>
    <meta name="theme-color" content="#6200EE"/>
    <meta name="description" content="Web site created using create-react-app"/>
    <meta property="og:description" content="Web site created using create-react-appn"/>
    <meta property="og:title" content="Jumbo - Admin Dashboard"/>
    <meta property="og:image" content="{{ asset('logo512.png') }}"/>
    <meta property="og:site_name" content="Jumbo Admin Template"/>
    <meta name="keywords" content="react,react-component,stickies"/>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:title" content="Jumbo - Admin Dashboard"/>
    <meta name="twitter:description" content="Web site created using create-react-appn"/>

    <link rel="icon" href="{{ asset('favicon.ico') }}"/>
    <link rel="apple-touch-icon" href="{{ asset('logo192.png') }}"/>
    <link rel="manifest" href="{{ asset('manifest.json') }}"/>

    <link rel="stylesheet" href="{{ asset('vendors/flag/sprite-flags-24x24.css') }}" />
    <link rel="stylesheet" href="{{ asset('vendors/fonts.css') }}" />
    <link rel="stylesheet" href="{{ asset('vendors/weather-icons/css/weather-icons.min.css') }}" />

    <!-- Map API -->
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places,geometry,drawing&key=AIzaSyBgqAomc9Vukt12AV3tJLasBnNehSNKuOY"></script>
</head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
