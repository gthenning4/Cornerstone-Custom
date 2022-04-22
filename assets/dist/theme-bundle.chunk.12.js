(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _theme_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/cart */ "./assets/js/theme/cart.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);

  function Category(context) {
    var _this;

    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__["createTranslationDictionary"])(context);
    return _this;
  }

  var _proto = Category.prototype;

  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };

  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;

    if (!$('[data-shop-by-price]').length) return;

    if ($('.navList-action').hasClass('is-active')) {
      $('a.navList-action.is-active').focus();
    }

    $('a.navList-action').on('click', function () {
      return _this2.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive');
    });
  };

  _proto.onReady = function onReady() {
    var _this3 = this;

    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }

    $('a.reset-btn').on('click', function () {
      return _this3.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    this.ariaNotifyNoProducts(); //check if cart exists and add delete button

    this.checkCartForItems(); //setup srcSet for img swap

    function buildSrcSet(src) {
      var newSrc = src.replace('500x659', '80w') + " 80w, ";
      newSrc += src.replace('500x659', '160w') + " 160w, ";
      newSrc += src.replace('500x659', '320w') + " 320w, ";
      newSrc += src.replace('500x659', '640w') + " 640w, ";
      newSrc += src.replace('500x659', '960w') + " 960w, ";
      newSrc += src.replace('500x659', '1280w') + " 1280w, ";
      newSrc += src.replace('500x659', '1920w') + " 1920w, ";
      newSrc += src.replace('500x659', '2560w') + " 2560w";
      return newSrc;
    } //Event listener for img swap


    $(".card-figure").on('mouseover', function () {
      var newImgSrc = $(this).find('img').attr('hoverimg');
      newImgSrc = newImgSrc.replace('{:size}', '500x659');
      $(this).find('img').attr('srcSet', buildSrcSet(newImgSrc));
    }).on('mouseleave', function () {
      var defaultImgSrc = $(this).find('img').attr('data-srcset');
      $(this).find('img').attr('srcSet', defaultImgSrc);
      console.log(defaultImgSrc);
    }); //Event listener for 'Add All to Cart'

    $('.add-btn').on('click', function () {
      console.log('made it to add-btn listener');
      var prodId = $('.card').attr('data-test');
      prodId = prodId.substring(5);
      var cart = new _theme_cart__WEBPACK_IMPORTED_MODULE_6__["default"]();
      cart.handleCart(prodId);
    });
  };

  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');

    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this$validationDicti = this.validationDictionary,
        onMinPriceError = _this$validationDicti.price_min_evaluation,
        onMaxPriceError = _this$validationDicti.price_max_evaluation,
        minPriceNotEntered = _this$validationDicti.price_min_not_entered,
        maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
        onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  } //Checks if cart has items and inserts delete button, if it does
  ;

  _proto.checkCartForItems = function checkCartForItems() {
    console.log('checking cart for items');
    fetch('/api/storefront/cart', {
      credentials: 'include'
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.length > 0) {
        $('.cart-buttons').append('<input class="button deleteBtn" type="submit" value="Remove All Items" />');
        $('.deleteBtn').on('click', function () {
          var cart = new _theme_cart__WEBPACK_IMPORTED_MODULE_6__["default"]();
          cart.deleteCart();
        });
      }
    });
  };

  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJjb250ZXh0IiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJzZXRMaXZlUmVnaW9uQXR0cmlidXRlcyIsIiRlbGVtZW50Iiwicm9sZVR5cGUiLCJhcmlhTGl2ZVN0YXR1cyIsImF0dHIiLCJyb2xlIiwibWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSIsIiQiLCJsZW5ndGgiLCJoYXNDbGFzcyIsImZvY3VzIiwib24iLCJvblJlYWR5IiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCJlIiwiY3VycmVudFRhcmdldCIsIm5leHQiLCJjb21wYXJlUHJvZHVjdHMiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsImhvb2tzIiwic2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzIiwiYXJpYU5vdGlmeU5vUHJvZHVjdHMiLCJjaGVja0NhcnRGb3JJdGVtcyIsImJ1aWxkU3JjU2V0Iiwic3JjIiwibmV3U3JjIiwicmVwbGFjZSIsIm5ld0ltZ1NyYyIsImZpbmQiLCJkZWZhdWx0SW1nU3JjIiwiY29uc29sZSIsImxvZyIsInByb2RJZCIsInN1YnN0cmluZyIsImNhcnQiLCJDYXJ0IiwiaGFuZGxlQ2FydCIsIiRub1Byb2R1Y3RzTWVzc2FnZSIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImFwcGVuZCIsImRlbGV0ZUNhcnQiLCJDYXRhbG9nUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFHcUJBLFE7OztBQUNqQixvQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixvQ0FBTUEsT0FBTjtBQUNBLFVBQUtDLG9CQUFMLEdBQTRCQywwR0FBMkIsQ0FBQ0YsT0FBRCxDQUF2RDtBQUZpQjtBQUdwQjs7OztTQUVERyx1QixHQUFBLGlDQUF3QkMsUUFBeEIsRUFBa0NDLFFBQWxDLEVBQTRDQyxjQUE1QyxFQUE0RDtBQUN4REYsWUFBUSxDQUFDRyxJQUFULENBQWM7QUFDVkMsVUFBSSxFQUFFSCxRQURJO0FBRVYsbUJBQWFDO0FBRkgsS0FBZDtBQUlILEc7O1NBRURHLCtCLEdBQUEsMkNBQWtDO0FBQUE7O0FBQzlCLFFBQUksQ0FBQ0MsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJDLE1BQS9CLEVBQXVDOztBQUV2QyxRQUFJRCxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkUsUUFBckIsQ0FBOEIsV0FBOUIsQ0FBSixFQUFnRDtBQUM1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LGtCQUhxQjtBQUlyQkUsMEJBQWtCLEVBQWxCQSxrQkFKcUI7QUFLckJFLHNCQUFjLEVBQWRBO0FBTHFCO0FBRDFCLEtBVGtCLENBQXJCO0FBa0JILEcsQ0FFRDs7O1NBQ0F4QixpQixHQUFBLDZCQUFvQjtBQUNoQlEsV0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7QUFDQXVDLFNBQUssQ0FBQyxzQkFBRCxFQUF5QjtBQUMxQkMsaUJBQVcsRUFBRTtBQURhLEtBQXpCLENBQUwsQ0FFR0MsSUFGSCxDQUVRLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBRmhCLEVBR0tGLElBSEwsQ0FHVSxVQUFBRyxJQUFJLEVBQUk7QUFDVixVQUFJQSxJQUFJLENBQUNyRSxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDakJELFNBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJ1RSxNQUFuQixDQUEwQiwyRUFBMUI7QUFDQXZFLFNBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JJLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFlBQVk7QUFDcEMsY0FBSXlCLElBQUksR0FBRyxJQUFJQyxtREFBSixFQUFYO0FBQ0FELGNBQUksQ0FBQzJDLFVBQUw7QUFDSCxTQUhEO0FBSUg7QUFDSixLQVhMO0FBWUgsRzs7O0VBckppQ0MsZ0QiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbmltcG9ydCB7IGluY2x1ZGVzIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgeyBhbGVydE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgQ2FydCBmcm9tICcuLi90aGVtZS9jYXJ0JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIHNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRlbGVtZW50LCByb2xlVHlwZSwgYXJpYUxpdmVTdGF0dXMpIHtcbiAgICAgICAgJGVsZW1lbnQuYXR0cih7XG4gICAgICAgICAgICByb2xlOiByb2xlVHlwZSxcbiAgICAgICAgICAgICdhcmlhLWxpdmUnOiBhcmlhTGl2ZVN0YXR1cyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpIHtcbiAgICAgICAgaWYgKCEkKCdbZGF0YS1zaG9wLWJ5LXByaWNlXScpLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICgkKCcubmF2TGlzdC1hY3Rpb24nKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAgICQoJ2EubmF2TGlzdC1hY3Rpb24uaXMtYWN0aXZlJykuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2EubmF2TGlzdC1hY3Rpb24nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCQoJ3NwYW4ucHJpY2UtZmlsdGVyLW1lc3NhZ2UnKSwgJ3N0YXR1cycsICdhc3NlcnRpdmUnKSk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLWJ1dHRvbi10eXBlPVwiYWRkLWNhcnRcIl0nKS5vbignY2xpY2snLCAoZSkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKGUuY3VycmVudFRhcmdldCkubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpKTtcblxuICAgICAgICB0aGlzLm1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKTtcblxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2EucmVzZXQtYnRuJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMoJCgnc3Bhbi5yZXNldC1tZXNzYWdlJyksICdzdGF0dXMnLCAncG9saXRlJykpO1xuXG4gICAgICAgIHRoaXMuYXJpYU5vdGlmeU5vUHJvZHVjdHMoKTtcblxuICAgICAgICAvL2NoZWNrIGlmIGNhcnQgZXhpc3RzIGFuZCBhZGQgZGVsZXRlIGJ1dHRvblxuICAgICAgICB0aGlzLmNoZWNrQ2FydEZvckl0ZW1zKCk7XG5cbiAgICAgICAgLy9zZXR1cCBzcmNTZXQgZm9yIGltZyBzd2FwXG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkU3JjU2V0KHNyYykge1xuICAgICAgICAgICAgdmFyIG5ld1NyYyA9IHNyYy5yZXBsYWNlKCc1MDB4NjU5JywgJzgwdycpICsgXCIgODB3LCBcIjtcbiAgICAgICAgICAgIG5ld1NyYyArPSBzcmMucmVwbGFjZSgnNTAweDY1OScsICcxNjB3JykgKyBcIiAxNjB3LCBcIjtcbiAgICAgICAgICAgIG5ld1NyYyArPSBzcmMucmVwbGFjZSgnNTAweDY1OScsICczMjB3JykgKyBcIiAzMjB3LCBcIjtcbiAgICAgICAgICAgIG5ld1NyYyArPSBzcmMucmVwbGFjZSgnNTAweDY1OScsICc2NDB3JykgKyBcIiA2NDB3LCBcIjtcbiAgICAgICAgICAgIG5ld1NyYyArPSBzcmMucmVwbGFjZSgnNTAweDY1OScsICc5NjB3JykgKyBcIiA5NjB3LCBcIjtcbiAgICAgICAgICAgIG5ld1NyYyArPSBzcmMucmVwbGFjZSgnNTAweDY1OScsICcxMjgwdycpICsgXCIgMTI4MHcsIFwiO1xuICAgICAgICAgICAgbmV3U3JjICs9IHNyYy5yZXBsYWNlKCc1MDB4NjU5JywgJzE5MjB3JykgKyBcIiAxOTIwdywgXCI7XG4gICAgICAgICAgICBuZXdTcmMgKz0gc3JjLnJlcGxhY2UoJzUwMHg2NTknLCAnMjU2MHcnKSArIFwiIDI1NjB3XCI7XG4gICAgICAgICAgICByZXR1cm4gbmV3U3JjO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9FdmVudCBsaXN0ZW5lciBmb3IgaW1nIHN3YXBcbiAgICAgICAgJChcIi5jYXJkLWZpZ3VyZVwiKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IG5ld0ltZ1NyYyA9ICQodGhpcykuZmluZCgnaW1nJykuYXR0cignaG92ZXJpbWcnKTtcbiAgICAgICAgICAgIG5ld0ltZ1NyYyA9IG5ld0ltZ1NyYy5yZXBsYWNlKCd7OnNpemV9JywgJzUwMHg2NTknKTtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnaW1nJykuYXR0cignc3JjU2V0JywgYnVpbGRTcmNTZXQobmV3SW1nU3JjKSk7XG4gICAgICAgIH0pLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGRlZmF1bHRJbWdTcmMgPSAkKHRoaXMpLmZpbmQoJ2ltZycpLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2ltZycpLmF0dHIoJ3NyY1NldCcsIGRlZmF1bHRJbWdTcmMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGVmYXVsdEltZ1NyYyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vRXZlbnQgbGlzdGVuZXIgZm9yICdBZGQgQWxsIHRvIENhcnQnXG4gICAgICAgICQoJy5hZGQtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21hZGUgaXQgdG8gYWRkLWJ0biBsaXN0ZW5lcicpO1xuICAgICAgICAgICAgbGV0IHByb2RJZCA9ICQoJy5jYXJkJykuYXR0cignZGF0YS10ZXN0Jyk7XG4gICAgICAgICAgICBwcm9kSWQ9IHByb2RJZC5zdWJzdHJpbmcoNSk7XG4gICAgICAgICAgICBjb25zdCBjYXJ0ID0gbmV3IENhcnQoKTtcbiAgICAgICAgICAgIGNhcnQuaGFuZGxlQ2FydChwcm9kSWQpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFyaWFOb3RpZnlOb1Byb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCAkbm9Qcm9kdWN0c01lc3NhZ2UgPSAkKCdbZGF0YS1uby1wcm9kdWN0cy1ub3RpZmljYXRpb25dJyk7XG4gICAgICAgIGlmICgkbm9Qcm9kdWN0c01lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbm9Qcm9kdWN0c01lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vQ2hlY2tzIGlmIGNhcnQgaGFzIGl0ZW1zIGFuZCBpbnNlcnRzIGRlbGV0ZSBidXR0b24sIGlmIGl0IGRvZXNcbiAgICBjaGVja0NhcnRGb3JJdGVtcygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNraW5nIGNhcnQgZm9yIGl0ZW1zJyk7XG4gICAgICAgIGZldGNoKCcvYXBpL3N0b3JlZnJvbnQvY2FydCcsIHtcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5jYXJ0LWJ1dHRvbnMnKS5hcHBlbmQoJzxpbnB1dCBjbGFzcz1cImJ1dHRvbiBkZWxldGVCdG5cIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJSZW1vdmUgQWxsIEl0ZW1zXCIgLz4nKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmRlbGV0ZUJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXJ0ID0gbmV3IENhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnQuZGVsZXRlQ2FydCgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==