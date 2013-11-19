<?php ?>
<!DOCTYPE html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <style>
        body {
            padding-top: 50px;
            padding-bottom: 20px;
        }
    </style>

    <link rel="stylesheet" href="css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/bootstrap.css">
    <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

    <link rel="stylesheet" href="css/styles.css">
    <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
    <script type="text/javascript" src="js/riskmap.js"></script>
</head>
<body id="body">
<!--[if lt IE 7]>
<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade
    your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to
    improve your experience.</p>
<![endif]-->
<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Risk Map</a>
        </div>
        <div class="navbar-collapse collapse">


          <ul class="nav navbar-nav">
            <li><a href="#" class="test-headbar">Тест ризику
			</a></li>
            <li><a href="/about.html">Про проект</a></li>
            <li><a href="/contact.html">Зв'язок</a></li>
            <!--li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li class="dropdown-header">Nav header</li>
                <li><a href="#">Separated link</a></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li-->
          </ul>
          <form class="navbar-form navbar-right">
			<a href="#">
				<img src="img/facebook-login.png" />
			</a>
          </form>
        </div><!--/.navbar-collapse -->
      </div>

    </div>
</div>

<!-- Main jumbotron for a primary marketing message or call to action -->
<div class="top-info">
<div class="jumbotron">
<div class="container">
<div style="padding-top: 50px;">
<h1>Вирушаєш за кордон?</h1>

<p>Отримай потрібну інформацію та забезпеч себе від можливості потрапити в рабство. Не стань наступним!</p>

<!--p><a class="btn btn-warning btn-lg" href="test.html">Оціни рівень свого ризику! &raquo;</a></p-->

<p>
    <button class="btn btn-warning btn-lg" data-toggle="modal" data-target="#genderModal">
        Оціни рівень свого ризику!
    </button>
</p>

<!-- Gender -->
<div class="modal fade" id="genderModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Ваша стать</h4>
            </div>
            <div class="modal-body">
                <div class="btn-group-horizontal">
                    <button type="button" class="btn btn-default toAge" data-dismiss="modal">Чоловік
                    </button>
                    <button type="button" class="btn btn-default toAge" data-dismiss="modal">Жінка</button>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default buildPath" data-dismiss="modal">До карти
                </button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<!-- Age -->
<div class="modal fade" id="ageModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Ваш вік</h4>
            </div>
            <div class="modal-body">
                <div class="btn-group-horizontal">
                    <button type="button" class="btn btn-default toExperience" data-dismiss="modal">до 16
                        років
                    </button>
                    <button type="button" class="btn btn-default toExperience" data-dismiss="modal">18-24
                    </button>
                    <button type="button" class="btn btn-default toExperience" data-dismiss="modal">25-39
                    </button>
                    <button type="button" class="btn btn-default toExperience" data-dismiss="modal">більше
                        40 років
                    </button>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default buildPath" data-dismiss="modal">До карти
                </button>
                <button id="toResults" type="button" class="btn btn-warning toResults" data-dismiss="modal">
                    Рівень мого ризику
                </button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<!-- Experience -->
<div class="modal fade" id="experienceModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Чи є у вас досвід роботи за кордоном?</h4>
            </div>
            <div class="modal-body">
                <div class="btn-group-horizontal">
                    <button type="button" class="btn btn-default toCountry" data-dismiss="modal">Так
                    </button>
                    <button type="button" class="btn btn-default toCountry" data-dismiss="modal">Ні</button>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default buildPath" data-dismiss="modal">До карти
                </button>
                <button id="toResults" type="button" class="btn btn-warning toResults" data-dismiss="modal">
                    Рівень мого ризику
                </button>

            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<!-- Country -->
<div class="modal fade" id="countryModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">До якої краіни плануєте поїхати на роботу?</h4>
            </div>
            <div class="modal-body">
                <div class="btn-group-vertical">
                    <button type="button" class="btn btn-default toLanguage" data-dismiss="modal">Російська
                        Федерація
                    </button>
                    <button type="button" class="btn btn-default toLanguage" data-dismiss="modal">Польща
                    </button>
                    <button type="button" class="btn btn-default toLanguage" data-dismiss="modal">Чеська
                        Республіка
                    </button>
                    <button type="button" class="btn btn-default toLanguage" data-dismiss="modal">
                        Туреччина
                    </button>
                    <button type="button" class="btn btn-default toLanguage" data-dismiss="modal">Італія
                    </button>
                    <button type="button" class="btn btn-default toLanguage" data-dismiss="modal">Інші
                        країни
                    </button>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default buildPath" data-dismiss="modal">До карти
                </button>
                <button id="toResults" type="button" class="btn btn-warning toResults" data-dismiss="modal">
                    Рівень мого ризику
                </button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<!-- Language -->
<div class="modal fade" id="languageModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Чи володієте іноземними мовами?</h4>
            </div>
            <div class="modal-body">
                <div class="btn-group-vertical">
                    <button type="button" class="btn btn-default toEducational" data-dismiss="modal">Так (2
                        і більше)
                    </button>
                    <button type="button" class="btn btn-default toEducational" data-dismiss="modal">Так
                        (іноземна мова країни, куди я їду)
                    </button>
                    <button type="button" class="btn btn-default toEducational" data-dismiss="modal">Так
                        (іноземна мова, крім країни, куди я їду)
                    </button>
                    <button type="button" class="btn btn-default toEducational" data-dismiss="modal">Ні
                    </button>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default buildPath" data-dismiss="modal">До карти
                </button>
                <button id="toResults" type="button" class="btn btn-warning toResults" data-dismiss="modal">
                    Рівень мого ризику
                </button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<!-- Educational -->
<div class="modal fade" id="educationalModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Який рівень вашої освіти?</h4>
            </div>
            <div class="modal-body">
                <button type="button" class="btn btn-default toResults" data-dismiss="modal">Початкова
                    середня
                </button>
                <button type="button" class="btn btn-default toResults" data-dismiss="modal">Середня
                </button>
                <button type="button" class="btn btn-default toResults" data-dismiss="modal">Неповна вища
                </button>
                <button type="button" class="btn btn-default toResults" data-dismiss="modal">Повна вища
                </button>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default buildPath" data-dismiss="modal">До карти
                </button>
                <button type="button" class="btn btn-warning toResults" data-dismiss="modal">Рівень мого
                    ризику
                </button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<!-- Results -->
<div class="modal fade" id="resultsModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Ваш рівень ризику - <b>червоний!</b></h4>
            </div>
            <div class="modal-body">
                <img src="img/stop.png" width="270"/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default buildPath" data-dismiss="modal">Чому?</button>
                <button type="button" class="btn btn-primary buildPath" data-dismiss="modal">Як це
                    виправити?
                </button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<!-- Stolen -->
<div class="modal fade" id="stolenModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Поки ви думали...</h4>
            </div>
            <div class="modal-body">
            	<object width="400" height="350"
				classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
				codebase="http://fpdownload.macromedia.com/
				pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0">
				<param name="SRC" value="bookmark.swf">
				<embed src="robber.swf" width="400" height="350">
				</embed>
				</object>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Повернутись до тесту
                </button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

</div>
</div>
</div>
</div>
<div class="map">

    <!--h2>Карта ризику потрапляння в рабство</h2-->
    <div id="heatmapArea" ></div>

</div>

<script src="js/vendor/heatmap.js"></script>
<script src="js/vendor/heatmap-gmaps.js"></script>
<script src="js/app.js"></script>

    var map;
    var heatmap;

    var buildPath;

    window.onload = function () {
        var myLatlng = new google.maps.LatLng(50.4501, 30.5234);
        // sorry - this demo is a beta
        // there is lots of work todo
        // but I don't have enough time for eg redrawing on dragrelease right now
        var myOptions = {
            zoom: 5,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            scrollwheel: false,
            draggable: true,
            navigationControl: true,
            mapTypeControl: false,
            scaleControl: true,
            disableDoubleClickZoom: false
        };
        map = new google.maps.Map(document.getElementById("heatmapArea"), myOptions);

        buildPath = function () {
            // attempt to build risk path to Russia
            var riskPath = new google.maps.Polyline({
                path: russiaRiskPathCoordinates,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 3
            });

            var windows = new Array()
            var markers = new Array()
            for (var i = 0; i < russiaSteps.length; i++) {
                var window = new google.maps.InfoWindow({
                    content: russiaSteps[i]
                });
                windows.push(window);
                var marker = new google.maps.Marker({
                    position: russiaRiskPathCoordinates[2 * i + 1],
                    map: map,
                    title: 't',
                    icon: 'img/warning.png'
                });
                markers.push(marker);
            }
            for (var i = 0; i < russiaSteps.length; i++) {
                var window = windows[i];
                var marker = markers[i];
                console.log(windows[i].content);

                (function (_td, _marker, _window) {
                    _td.addListener(_marker, 'click', function () {
                        console.log(_window.content);
                        _window.open(map, _marker);
                    });
                })(google.maps.event, marker, window);

            }

            riskPath.setMap(map);
        };

        var manControlDiv = document.createElement('div');
        var manControl = new GenderControl(manControlDiv, map);

        manControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(manControlDiv);

        var ageControlDiv = document.createElement('div');
        var ageControl = new AgeControl(ageControlDiv, map);

        ageControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(ageControlDiv);

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(
                document.getElementById('legend'));


        heatmap = new HeatmapOverlay(map, {"radius": 25, "visible": true, "opacity": 60});


        // this is important, because if you set the data set too early, the latlng/pixel projection doesn't work
        google.maps.event.addListenerOnce(map, "idle", function () {
            heatmap.setDataSet(testData);
        });

    };

</script>

<!--div class="bottom-info">
<div class="container">
  <div class="row">
    <div class="col-lg-4">
      <h2>Простий тест</h2>
      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      <p><a class="btn btn-default" href="#">View details &raquo;</a></p>
        </div>
        <div class="col-lg-4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a class="btn btn-default" href="#">View details &raquo;</a></p>
       </div>
        <div class="col-lg-4">
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a class="btn btn-default" href="#">View details &raquo;</a></p>
        </div>
      </div>
      </div>
      <hr>
</div-->
<footer>
    <p>&copy; Company 2013</p>
</footer>

<div id="legend">
    Карта ризику потрапляння в рабство
</div>
</div> <!-- /container -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>

<script src="js/vendor/bootstrap.min.js"></script>
<script src="js/vendor/jquery.ba-dotimeout.js"></script>

<script src="js/main.js"></script>
<script src="js/test.js"></script>

<script>
    var _gaq = [
        ['_setAccount', 'UA-XXXXX-X'],
        ['_trackPageview']
    ];
    (function (d, t) {
        var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
        g.src = '//www.google-analytics.com/ga.js';
        s.parentNode.insertBefore(g, s)
    }(document, 'script'));
</script>
</body>
</html>
