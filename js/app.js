// Require configuration
require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery/jquery-2.1.0.min', //
        handlebars: 'handlebars/handlebars-1.3.0'
    }
});

// Load modules
require(['modules/sample.js','handlebars'], function() { });
