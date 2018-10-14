/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/static/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/static/ts/index.ts":
/*!********************************!*\
  !*** ./src/static/ts/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

;
$(function () {
    var $modal = $('#modal');
    $('.news__cell__desc a').on({
        click: function () {
            $.ajax('./NewAjax.html')
                .done(function (resp) {
                $modal.html(resp).foundation('open');
            });
        }
    });
    $('#billingAddressBtn').on({
        click: function () {
            var addHtml = " <div class=\"grid-x grid-padding-x\">\n                                <div class=\"small-3 cell\">\n                                    <label for=\"right-label\" class=\"text-left\">Address</label>\n                                </div>\n                                <div class=\"small-8 cell\">\n                                    <input type=\"text\" placeholder=\"\">\n                                </div>\n                            </div>\n                            <div class=\"grid-x grid-padding-x\">\n                                <div class=\"small-3 cell\">\n                                    <label for=\"right-label\" class=\"text-left\">Country</label>\n                                </div>\n                                <div class=\"small-8 cell text-left\">\n                                    <input type=\"text\" placeholder=\"\">\n                                </div>\n                            </div>";
            $('#billingAddress').append(addHtml);
        }
    });
    $('.qty__input').on('click', '.cart__sub__btn', function () {
        var $cart__qty = $(this).next('.cart__qty');
        var qty = $cart__qty.val();
        var qtyNum = (Number(qty) - 1) === 0 ? 1 : (Number(qty) - 1);
        $cart__qty.val(qtyNum);
    });
    $('.qty__input').on('click', '.cart__add__btn', function () {
        var $cart__qty = $(this).prev('.cart__qty');
        var qty = $cart__qty.val();
        var qtyNum = (Number(qty) + 1);
        $cart__qty.val(qtyNum);
    });
    $('.add__to__cart__wishust').on({
        click: function (e) {
            var target = e.target;
            console.log(target);
            if ($(target).find('.iconfont').hasClass('open')) {
                $(target).find('.iconfont').html('&#xe66c;');
                $(target).find('.iconfont').removeClass('open');
            }
            else {
                $(target).find('.iconfont').html('&#xe697;');
                $(target).find('.iconfont').addClass('open');
            }
        }
    });
    $('#stroreInput').change(function (e) {
        var target = e.target;
        if ($(target).val() != "") {
            $('.store__seach__list').addClass('change');
        }
        else {
            $('.store__seach__list').removeClass('change');
        }
    });
    $(window).scroll(function (e) {
        var target = e.target;
        if ($(target).scrollTop() > 120) {
            $(target).find('.header').addClass('open');
        }
        else {
            $(target).find('.header').removeClass('open');
        }
    });
    $('.phone__news__cell .swiper-wrapper').css({
        'transform': 'translate3d(-' + ($('.swiper-slide').width() / 2) + 'px, 0px, 0px)',
        'transition-duration': '0ms'
    });
    $('.phone__news__cell .swiper-slide').on({
        click: function () {
            $.ajax('./NewAjax.html')
                .done(function (resp) {
                $modal.html(resp).foundation('open');
            });
        }
    });
    $('.company__content .about__ventris__content ').each(function (element, val) {
        console.log(val);
        $(val).parents('.about__items').find('.bg__base').height($(val).height());
    });
    $('.header__close').on({
        click: function () {
            $('.header__contern').css({
                'transform': 'translateX(-100%)'
            });
        }
    });
    $('.toobar__menu').on({
        click: function () {
            $('.header__contern').css({
                'transform': 'translateX(0)'
            });
        }
    });
    $('.shoping__add__detailes').on({
        click: function () {
            $('.shop__hide__box').toggle();
        }
    });
    $('.backtotop').on({
        click: function () {
            $(window).scrollTop(0);
        }
    });
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
});


/***/ })

/******/ });
//# sourceMappingURL=index.js.map