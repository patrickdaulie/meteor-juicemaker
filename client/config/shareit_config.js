 ShareIt.configure({
    sites: {                // nested object for extra configurations
        'facebook': {
            'appId': null   // use sharer.php when it's null, otherwise use share dialog
        },
        'twitter': {},
        'googleplus': {},
        'pinterest': {}
    }
  });