(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);

  function CatalogPage(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    window.addEventListener('beforeunload', function () {
      if (document.activeElement.id === 'sort') {
        window.localStorage.setItem('sortByStatus', 'selected');
      }
    });
    return _this;
  }

  var _proto = CatalogPage.prototype;

  _proto.arrangeFocusOnSortBy = function arrangeFocusOnSortBy() {
    var $sortBySelector = $('[data-sort-by="product"] #sort');

    if (window.localStorage.getItem('sortByStatus')) {
      $sortBySelector.focus();
      window.localStorage.removeItem('sortByStatus');
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2___default.a.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };

  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");











var defaultOptions = {
  accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
  blockerSelector: '#facetedSearch .blocker',
  clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
  componentSelector: '#facetedSearch-navList',
  facetNavListSelector: '#facetedSearch .navList',
  priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
  priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
  priceRangeFormSelector: '#facet-range-form',
  priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
  priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
  showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
  facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
  modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('#modal')[0],
  modalOpen: false
};
/**
 * Faceted search view component
 */

var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;

    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = []; // Init collapsibles

    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // Show limited items by default

    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    }); // Mark initially collapsed accordions

    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');

      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    }); // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped

    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    }); // Observe user events

    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  } // Public methods


  var _proto = FacetedSearch.prototype;

  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    } // Init collapsibles


    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // Restore view state

    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems(); // Bind events

    this.bindEvents();
  };

  _proto.updateView = function updateView() {
    var _this2 = this;

    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();

      if (err) {
        throw new Error(err);
      } // Refresh view with new content


      _this2.refreshView(content);
    });
  };

  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id'); // Remove

    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };

  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');

    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };

  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id'); // Toggle depending on `collapsed` flag

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;

    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl();

    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }

        _this3.options.modal.open();

        _this3.options.modalOpen = true;

        _this3.options.modal.updateContent(response);
      });
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();

      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };

  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };

  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };

  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this4.collapseFacet($accordionToggle);
    });
  };

  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this5.expandFacet($accordionToggle);
    });
  } // Private methods
  ;

  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }

    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_10__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__["Validators"].setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };

  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;

    var $navLists = $(this.options.facetNavListSelector); // Restore collapsed state for each facet

    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);

      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };

  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);

      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents(); // DOM events

    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation(); // Update URL

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);
  };

  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href')); // Prevent default

    event.preventDefault(); // Toggle visible items

    this.toggleFacetItems($navList);
  };

  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected'); // Update URL

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page; // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead

    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };

  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();

    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].constants.VALID)) {
      return;
    }

    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParams = decodeURI($(currentTarget).serialize()).split('&');
    queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].parseQueryParams(queryParams);

    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    } // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead


    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };

  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };

  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;

    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };

  _proto.onPopState = function onPopState() {
    var currentUrl = window.location.href;
    var searchParams = new URLSearchParams(currentUrl); // If searchParams does not contain a page value then modify url query string to have page=1

    if (!searchParams.has('page')) {
      var linkUrl = $('.pagination-link').attr('href');
      var re = /page=[0-9]+/i;
      var updatedLinkUrl = linkUrl.replace(re, 'page=1');
      window.history.replaceState({}, document.title, updatedLinkUrl);
    }

    $(window).trigger('statechange');
  };

  return FacetedSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");


function decrementCounter(counter, item) {
  var index = counter.indexOf(item);

  if (index > -1) {
    counter.splice(index, 1);
  }
}

function incrementCounter(counter, item) {
  counter.push(item);
}

function updateCounterNav(counter, $link, urls) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }

    $link.attr('href', urls.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var noCompareMessage = _ref.noCompareMessage,
      urls = _ref.urls;
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urls);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');

    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }

    updateCounterNav(compareCounter, $clickedCompareLink, urls);
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');

    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showAlertModal"])(noCompareMessage);
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJDYXRhbG9nUGFnZSIsImNvbnRleHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCIkc29ydEJ5U2VsZWN0b3IiLCIkIiwiZ2V0SXRlbSIsImZvY3VzIiwicmVtb3ZlSXRlbSIsIm9uU29ydEJ5U3VibWl0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidXJsIiwiVXJsIiwicGFyc2UiLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsInNlcmlhbGl6ZSIsInNwbGl0IiwicXVlcnkiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsInVybFV0aWxzIiwiYnVpbGRRdWVyeVN0cmluZyIsIlBhZ2VNYW5hZ2VyIiwiZGVmYXVsdE9wdGlvbnMiLCJhY2NvcmRpb25Ub2dnbGVTZWxlY3RvciIsImJsb2NrZXJTZWxlY3RvciIsImNsZWFyRmFjZXRTZWxlY3RvciIsImNvbXBvbmVudFNlbGVjdG9yIiwiZmFjZXROYXZMaXN0U2VsZWN0b3IiLCJwcmljZVJhbmdlRXJyb3JTZWxlY3RvciIsInByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yIiwicHJpY2VSYW5nZUZvcm1TZWxlY3RvciIsInByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yIiwicHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IiLCJzaG93TW9yZVRvZ2dsZVNlbGVjdG9yIiwiZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zIiwibW9kYWwiLCJtb2RhbEZhY3RvcnkiLCJtb2RhbE9wZW4iLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJjb2xsYXBzZWRGYWNldHMiLCJjb2xsYXBzZWRGYWNldEl0ZW1zIiwiY29sbGFwc2libGVGYWN0b3J5IiwiaW5pdFByaWNlVmFsaWRhdG9yIiwiZWFjaCIsImluZGV4IiwibmF2TGlzdCIsImNvbGxhcHNlRmFjZXRJdGVtcyIsImFjY29yZGlvblRvZ2dsZSIsIiRhY2NvcmRpb25Ub2dnbGUiLCJjb2xsYXBzaWJsZSIsImRhdGEiLCJpc0NvbGxhcHNlZCIsInB1c2giLCJ0YXJnZXRJZCIsInNldFRpbWVvdXQiLCJpcyIsImNvbGxhcHNlQWxsRmFjZXRzIiwib25TdGF0ZUNoYW5nZSIsImJpbmQiLCJvblRvZ2dsZUNsaWNrIiwib25BY2NvcmRpb25Ub2dnbGUiLCJvbkNsZWFyRmFjZXQiLCJvbkZhY2V0Q2xpY2siLCJvblJhbmdlU3VibWl0IiwiZmlsdGVyRmFjZXRJdGVtcyIsImJpbmRFdmVudHMiLCJyZWZyZXNoVmlldyIsImNvbnRlbnQiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRzIiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMiLCJ1cGRhdGVWaWV3Iiwic2hvdyIsImFwaSIsImdldFBhZ2UiLCJnZXRVcmwiLCJlcnIiLCJoaWRlIiwiRXJyb3IiLCJleHBhbmRGYWNldEl0ZW1zIiwiJG5hdkxpc3QiLCJhdHRyIiwiaGFzTW9yZVJlc3VsdHMiLCJ0b2dnbGVGYWNldEl0ZW1zIiwiZ2V0TW9yZUZhY2V0UmVzdWx0cyIsImZhY2V0IiwiZmFjZXRVcmwiLCJzaG93TW9yZSIsInRlbXBsYXRlIiwicGFyYW1zIiwibGlzdF9hbGwiLCJyZXNwb25zZSIsIm9wZW4iLCJ1cGRhdGVDb250ZW50IiwiJGl0ZW1zIiwidmFsIiwidG9Mb3dlckNhc2UiLCJlbGVtZW50IiwidGV4dCIsImluZGV4T2YiLCJleHBhbmRGYWNldCIsImNvbGxhcHNlRmFjZXQiLCJjbG9zZSIsIiRhY2NvcmRpb25Ub2dnbGVzIiwiZXhwYW5kQWxsRmFjZXRzIiwibGVuZ3RoIiwidmFsaWRhdG9yIiwibm9kIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsIlZhbGlkYXRvcnMiLCJzZXRNaW5NYXhQcmljZVZhbGlkYXRpb24iLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsInByaWNlUmFuZ2VWYWxpZGF0b3IiLCIkbmF2TGlzdHMiLCJzaG91bGRDb2xsYXBzZSIsInVuYmluZEV2ZW50cyIsIm9uIiwib25Qb3BTdGF0ZSIsImhvb2tzIiwib2ZmIiwiJGxpbmsiLCJzdG9wUHJvcGFnYXRpb24iLCJnb1RvVXJsIiwiJHRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwidXJsUXVlcnlQYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJhcmVBbGwiLCJjb25zdGFudHMiLCJWQUxJRCIsImRlY29kZVVSSSIsInBhcnNlUXVlcnlQYXJhbXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImN1cnJlbnRVcmwiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJoYXMiLCJsaW5rVXJsIiwicmUiLCJ1cGRhdGVkTGlua1VybCIsInJlcGxhY2UiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJ0cmlnZ2VyIiwiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpdGVtIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInVwZGF0ZUNvdW50ZXJOYXYiLCJ1cmxzIiwiYWRkQ2xhc3MiLCJjb21wYXJlIiwiam9pbiIsImZpbmQiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJub0NvbXBhcmVNZXNzYWdlIiwiY29tcGFyZUNvdW50ZXIiLCIkY29tcGFyZUxpbmsiLCIkY2hlY2tlZCIsIm1hcCIsInZhbHVlIiwiZ2V0IiwidHJpZ2dlckhhbmRsZXIiLCJwcm9kdWN0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCIsInNob3dBbGVydE1vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFcUJBLFc7OztBQUNqQix1QkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixvQ0FBTUEsT0FBTjtBQUVBQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLGNBQXhCLEVBQXdDLFlBQU07QUFDMUMsVUFBSUMsUUFBUSxDQUFDQyxhQUFULENBQXVCQyxFQUF2QixLQUE4QixNQUFsQyxFQUEwQztBQUN0Q0osY0FBTSxDQUFDSyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixjQUE1QixFQUE0QyxVQUE1QztBQUNIO0FBQ0osS0FKRDtBQUhpQjtBQVFwQjs7OztTQUVEQyxvQixHQUFBLGdDQUF1QjtBQUNuQixRQUFNQyxlQUFlLEdBQUdDLENBQUMsQ0FBQyxnQ0FBRCxDQUF6Qjs7QUFFQSxRQUFJVCxNQUFNLENBQUNLLFlBQVAsQ0FBb0JLLE9BQXBCLENBQTRCLGNBQTVCLENBQUosRUFBaUQ7QUFDN0NGLHFCQUFlLENBQUNHLEtBQWhCO0FBQ0FYLFlBQU0sQ0FBQ0ssWUFBUCxDQUFvQk8sVUFBcEIsQ0FBK0IsY0FBL0I7QUFDSDtBQUNKLEc7O1NBRURDLGMsR0FBQSx3QkFBZUMsS0FBZixFQUFzQkMsYUFBdEIsRUFBcUM7QUFDakMsUUFBTUMsR0FBRyxHQUFHQywwQ0FBRyxDQUFDQyxLQUFKLENBQVVsQixNQUFNLENBQUNtQixRQUFQLENBQWdCQyxJQUExQixFQUFnQyxJQUFoQyxDQUFaO0FBQ0EsUUFBTUMsV0FBVyxHQUFHWixDQUFDLENBQUNNLGFBQUQsQ0FBRCxDQUFpQk8sU0FBakIsR0FBNkJDLEtBQTdCLENBQW1DLEdBQW5DLENBQXBCO0FBRUFQLE9BQUcsQ0FBQ1EsS0FBSixDQUFVSCxXQUFXLENBQUMsQ0FBRCxDQUFyQixJQUE0QkEsV0FBVyxDQUFDLENB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QUFDLENBQUMscUJBQUQsQ0FBN0I7O0FBRUEsUUFBSUssS0FBSyxDQUFDQyxhQUFOLENBQW9CNkssT0FBeEIsRUFBaUM7QUFDN0JuQixzQkFBZ0IsQ0FBQ1UsY0FBRCxFQUFpQk8sT0FBakIsQ0FBaEI7QUFDSCxLQUZELE1BRU87QUFDSHJCLHNCQUFnQixDQUFDYyxjQUFELEVBQWlCTyxPQUFqQixDQUFoQjtBQUNIOztBQUVEaEIsb0JBQWdCLENBQUNTLGNBQUQsRUFBaUJRLG1CQUFqQixFQUFzQ2hCLElBQXRDLENBQWhCO0FBQ0gsR0FYRDtBQWFBbEssR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVNkgsRUFBVixDQUFhLE9BQWIsRUFBc0IscUJBQXRCLEVBQTZDLFlBQU07QUFDL0MsUUFBTXVELG9CQUFvQixHQUFHcEwsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVc0ssSUFBVixDQUFlLG9DQUFmLENBQTdCOztBQUVBLFFBQUljLG9CQUFvQixDQUFDdkUsTUFBckIsSUFBK0IsQ0FBbkMsRUFBc0M7QUFDbEN3RSxtRUFBYyxDQUFDWixnQkFBRCxDQUFkO0FBQ0EsYUFBTyxLQUFQO0FBQ0g7QUFDSixHQVBEO0FBUUgsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMvdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWQgPT09ICdzb3J0Jykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc29ydEJ5U3RhdHVzJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFycmFuZ2VGb2N1c09uU29ydEJ5KCkge1xuICAgICAgICBjb25zdCAkc29ydEJ5U2VsZWN0b3IgPSAkKCdbZGF0YS1zb3J0LWJ5PVwicHJvZHVjdFwiXSAjc29ydCcpO1xuXG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRCeVN0YXR1cycpKSB7XG4gICAgICAgICAgICAkc29ydEJ5U2VsZWN0b3IuZm9jdXMoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc29ydEJ5U3RhdHVzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbGxhcHNpYmxlJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XG5cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLW5hdmlnYXRpb24sICNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLXRvZ2dsZScsXG4gICAgYmxvY2tlclNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmJsb2NrZXInLFxuICAgIGNsZWFyRmFjZXRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLWNsZWFyTGluaycsXG4gICAgY29tcG9uZW50U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaC1uYXZMaXN0JyxcbiAgICBmYWNldE5hdkxpc3RTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5uYXZMaXN0JyxcbiAgICBwcmljZVJhbmdlRXJyb3JTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWlubGluZU1lc3NhZ2UnLFxuICAgIHByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0tZmllbGRzZXQnLFxuICAgIHByaWNlUmFuZ2VGb3JtU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybScsXG4gICAgcHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1tYXhfcHJpY2VdJyxcbiAgICBwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1pbl9wcmljZV0nLFxuICAgIHNob3dNb3JlVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLWNvbnRlbnQgLnRvZ2dsZUxpbmsnLFxuICAgIGZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtczogJyNmYWNldGVkU2VhcmNoLWZpbHRlckl0ZW1zIC5mb3JtLWlucHV0JyxcbiAgICBtb2RhbDogbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXSxcbiAgICBtb2RhbE9wZW46IGZhbHNlLFxufTtcblxuLyoqXG4gKiBGYWNldGVkIHNlYXJjaCB2aWV3IGNvbXBvbmVudFxuICovXG5jbGFzcyBGYWNldGVkU2VhcmNoIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBPYmplY3Qgd2l0aCBvcHRpb25zIGZvciB0aGUgYWpheCByZXF1ZXN0c1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBmZXRjaGluZyB0ZW1wbGF0ZXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIGxldCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgKiAgICAgIHRlbXBsYXRlczoge1xuICAgICAqICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgKiAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcidcbiAgICAgKiAgICAgfVxuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgdGVtcGxhdGVzRGlkTG9hZCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgKiAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICogICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IGZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgdGVtcGxhdGVzRGlkTG9hZCk7XG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVxdWVzdE9wdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICAgIC8vIFByaXZhdGUgcHJvcGVydGllc1xuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gXy5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBTaG93IGxpbWl0ZWQgaXRlbXMgYnkgZGVmYXVsdFxuICAgICAgICAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3RvcikuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCQobmF2TGlzdCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNYXJrIGluaXRpYWxseSBjb2xsYXBzZWQgYWNjb3JkaW9uc1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzLnB1c2goY29sbGFwc2libGUudGFyZ2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb2xsYXBzZSBhbGwgZmFjZXRzIGlmIGluaXRpYWxseSBoaWRkZW5cbiAgICAgICAgLy8gTk9URTogTmVlZCB0byBleGVjdXRlIGFmdGVyIENvbGxhcHNpYmxlIGdldHMgYm9vdHN0cmFwcGVkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLmNvbXBvbmVudFNlbGVjdG9yKS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBPYnNlcnZlIHVzZXIgZXZlbnRzXG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSA9IHRoaXMub25BY2NvcmRpb25Ub2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsZWFyRmFjZXQgPSB0aGlzLm9uQ2xlYXJGYWNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRmFjZXRDbGljayA9IHRoaXMub25GYWNldENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SYW5nZVN1Ym1pdCA9IHRoaXMub25SYW5nZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZpbHRlckZhY2V0SXRlbXMgPSB0aGlzLmZpbHRlckZhY2V0SXRlbXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgdmlldyBzdGF0ZVxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpO1xuXG4gICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3Rvcikuc2hvdygpO1xuXG4gICAgICAgIGFwaS5nZXRQYWdlKHVybFV0aWxzLmdldFVybCgpLCB0aGlzLnJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldyhjb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gUmVtb3ZlXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBoYXNNb3JlUmVzdWx0cyA9ICRuYXZMaXN0LmRhdGEoJ2hhc01vcmVSZXN1bHRzJyk7XG5cbiAgICAgICAgaWYgKGhhc01vcmVSZXN1bHRzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBUb2dnbGUgZGVwZW5kaW5nIG9uIGBjb2xsYXBzZWRgIGZsYWdcbiAgICAgICAgaWYgKF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGZhY2V0ID0gJG5hdkxpc3QuZGF0YSgnZmFjZXQnKTtcbiAgICAgICAgY29uc3QgZmFjZXRVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcblxuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSkge1xuICAgICAgICAgICAgYXBpLmdldFBhZ2UoZmFjZXRVcmwsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6IGZhY2V0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLm9wZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWxPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZmlsdGVyRmFjZXRJdGVtcyhldmVudCkge1xuICAgICAgICBjb25zdCAkaXRlbXMgPSAkKCcubmF2TGlzdC1pdGVtJyk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICRpdGVtcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9ICQoZWxlbWVudCkudGV4dCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKHF1ZXJ5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5vcGVuKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIGluaXRQcmljZVZhbGlkYXRvcigpIHtcbiAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbm9kKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH07XG5cbiAgICAgICAgVmFsaWRhdG9ycy5zZXRNaW5NYXhQcmljZVZhbGlkYXRpb24odmFsaWRhdG9yLCBzZWxlY3RvcnMsIHRoaXMub3B0aW9ucy52YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyk7XG5cbiAgICAgICAgdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCkge1xuICAgICAgICBjb25zdCAkbmF2TGlzdHMgPSAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gUmVzdG9yZSBjb2xsYXBzZWQgc3RhdGUgZm9yIGVhY2ggZmFjZXRcbiAgICAgICAgJG5hdkxpc3RzLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQobmF2TGlzdCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gQ2xlYW4tdXBcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vbignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9uKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQod2luZG93KS5vZmYoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9mZignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vZmYoJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICBvbkNsZWFyRmFjZXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgb25Ub2dnbGVDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKCR0b2dnbGUuYXR0cignaHJlZicpKTtcblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBUb2dnbGUgdmlzaWJsZSBpdGVtc1xuICAgICAgICB0aGlzLnRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgIH1cblxuICAgIG9uRmFjZXRDbGljayhldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRsaW5rLnRvZ2dsZUNsYXNzKCdpcy1zZWxlY3RlZCcpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kYWxPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIC8vIFVybCBvYmplY3QgYHF1ZXJ5YCBpcyBub3QgYSB0cmFkaXRpb25hbCBKYXZhU2NyaXB0IE9iamVjdCBvbiBhbGwgc3lzdGVtcywgY2xvbmUgaXQgaW5zdGVhZFxuICAgICAgICBjb25zdCB1cmxRdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHVybFF1ZXJ5UGFyYW1zLCB1cmwucXVlcnkpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XG4gICAgfVxuXG4gICAgb25SYW5nZVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yLmFyZUFsbChub2QuY29uc3RhbnRzLlZBTElEKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gZGVjb2RlVVJJKCQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkpLnNwbGl0KCcmJyk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gdXJsVXRpbHMucGFyc2VRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5W2tleV0gPSBxdWVyeVBhcmFtc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24odXJsUXVlcnlQYXJhbXMsIHVybC5xdWVyeSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgb25BY2NvcmRpb25Ub2dnbGUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG5cbiAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldHMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUG9wU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhjdXJyZW50VXJsKTtcbiAgICAgICAgLy8gSWYgc2VhcmNoUGFyYW1zIGRvZXMgbm90IGNvbnRhaW4gYSBwYWdlIHZhbHVlIHRoZW4gbW9kaWZ5IHVybCBxdWVyeSBzdHJpbmcgdG8gaGF2ZSBwYWdlPTFcbiAgICAgICAgaWYgKCFzZWFyY2hQYXJhbXMuaGFzKCdwYWdlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmtVcmwgPSAkKCcucGFnaW5hdGlvbi1saW5rJykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgY29uc3QgcmUgPSAvcGFnZT1bMC05XSsvaTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRMaW5rVXJsID0gbGlua1VybC5yZXBsYWNlKHJlLCAncGFnZT0xJyk7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cGRhdGVkTGlua1VybCk7XG4gICAgICAgIH1cbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xuIiwiaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcblxuZnVuY3Rpb24gZGVjcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb3VudGVyLnB1c2goaXRlbSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXJOYXYoY291bnRlciwgJGxpbmssIHVybHMpIHtcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkbGluay5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxzLmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XG4gICAgICAgICRsaW5rLmZpbmQoJ3NwYW4uY291bnRQaWxsJykuaHRtbChjb3VudGVyLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IG5vQ29tcGFyZU1lc3NhZ2UsIHVybHMgfSkge1xuICAgIGxldCBjb21wYXJlQ291bnRlciA9IFtdO1xuXG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjb21wYXJlUmVzZXQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgY29tcGFyZUNvdW50ZXIgPSAkY2hlY2tlZC5sZW5ndGggPyAkY2hlY2tlZC5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiBlbGVtZW50LnZhbHVlKS5nZXQoKSA6IFtdO1xuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY29tcGFyZUxpbmssIHVybHMpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxzKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKG5vQ29tcGFyZU1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9