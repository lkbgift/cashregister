// Generated by CoffeeScript 1.4.0
(function(){jQuery(function(){var e,t,n;e=new Meal;t=$("#meal-template").html();n=Handlebars.compile(t);$("#entry").focus();return $("#entry_form").submit(function(t){var r;t.preventDefault();r=new Dish($("#entry").val());e.add(r);$("ul#meal").html(n(e.toJSON()));return $("#entry").val("")})})}).call(this);