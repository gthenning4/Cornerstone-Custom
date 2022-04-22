(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");

/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */

function buildDateValidation($formField, validation, requiredMessage) {
  // No date range restriction, skip
  if (validation.min_date && validation.max_date) {
    var invalidMessage = "Your chosen date must fall between " + validation.min_date + " and " + validation.max_date + ".";
    var formElementId = $formField.attr('id');
    var minSplit = validation.min_date.split('-');
    var maxSplit = validation.max_date.split('-');
    var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
    var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);
    return {
      selector: "#" + formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = Number($formField.find('select[data-label="day"]').val());
        var month = Number($formField.find('select[data-label="month"]').val()) - 1;
        var year = Number(val);
        var chosenDate = new Date(year, month, day);
        cb(chosenDate >= minDate && chosenDate <= maxDate);
      },
      errorMessage: invalidMessage
    };
  } // Required Empty Date field


  if (validation.required && (!validation.min_date || !validation.max_date)) {
    var _formElementId = $formField.attr('id');

    return {
      selector: "#" + _formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + _formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = $formField.find('select[data-label="day"]').val();
        var month = $formField.find('select[data-label="month"]').val();
        var year = val;
        cb(day && month && year);
      },
      errorMessage: requiredMessage
    };
  }
}
/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 * @param errorText provides error validation message
 */


function buildRequiredCheckboxValidation(validation, $formField, errorText) {
  var formFieldId = $formField.attr('id');
  var primarySelector = "#" + formFieldId + " input:first-of-type";
  var secondarySelector = "#" + formFieldId + " input";
  return {
    selector: primarySelector,
    triggeredBy: secondarySelector,
    validate: function validate(cb) {
      var result = false;
      $(secondarySelector).each(function (index, checkbox) {
        if (checkbox.checked) {
          result = true;
          return false;
        }
      });
      cb(result);
    },
    errorMessage: errorText
  };
}

function buildRequiredValidation(validation, selector, errorText) {
  return {
    selector: selector,
    validate: function validate(cb, val) {
      cb(val.length > 0);
    },
    errorMessage: errorText
  };
}

function buildNumberRangeValidation(validation, formFieldSelector) {
  var invalidMessage = "The value for " + validation.label + " must be between " + validation.min + " and " + validation.max + ".";
  var min = Number(validation.min);
  var max = Number(validation.max);
  return {
    selector: formFieldSelector + " input[name=\"" + validation.name + "\"]",
    validate: function validate(cb, val) {
      var numberVal = Number(val);
      cb(numberVal >= min && numberVal <= max);
    },
    errorMessage: invalidMessage
  };
}

function buildValidation($validateableElement, errorMessage) {
  var validation = $validateableElement.data('validation');
  var fieldValidations = [];
  var formFieldSelector = "#" + $validateableElement.attr('id');

  if (validation.type === 'datechooser') {
    var dateValidation = buildDateValidation($validateableElement, validation, errorMessage);

    if (dateValidation) {
      fieldValidations.push(dateValidation);
    }
  } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
    fieldValidations.push(buildRequiredCheckboxValidation(validation, $validateableElement, errorMessage));
  } else {
    $validateableElement.find('input, select, textarea').each(function (index, element) {
      var $inputElement = $(element);
      var tagName = $inputElement.get(0).tagName;
      var inputName = $inputElement.attr('name');
      var elementSelector = formFieldSelector + " " + tagName + "[name=\"" + inputName + "\"]";

      if (validation.type === 'numberonly') {
        fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
      }

      if (validation.required) {
        fieldValidations.push(buildRequiredValidation(validation, elementSelector, errorMessage));
      }
    });
  }

  return fieldValidations;
}
/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @param context provides access for error messages on required fields validation
 * @returns {Array}
 */


/* harmony default export */ __webpack_exports__["default"] = (function ($form, context) {
  var validationsToPerform = [];

  var _createTranslationDic = Object(_utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__["createTranslationDictionary"])(context),
      requiredFieldValidationText = _createTranslationDic.field_not_blank;

  $form.find('[data-validation]').each(function (index, input) {
    var getLabel = function getLabel($el) {
      return $el.first().data('validation').label;
    };

    var requiredValidationMessage = getLabel($(input)) + requiredFieldValidationText;
    validationsToPerform = validationsToPerform.concat(buildValidation($(input), requiredValidationMessage));
  });
  return validationsToPerform;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");






/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */

function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });

  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');

  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }

  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }

  return $newElement;
}
/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */


function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });

  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');

  if ($newElement.length !== 0) {
    Object(_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__["insertStateHiddenField"])($newElement);
    $newElement.prev().find('small').hide();
  }

  return $newElement;
}
/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */


function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()($selectElement)) {
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(statesArray.states, function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + (stateObj.label ? stateObj.label : stateObj.name) + "</option>");
      }
    });

    $selectElement.html(container.join(' '));
  }
}
/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */


/* harmony default export */ __webpack_exports__["default"] = (function (stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }

  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }

  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();

    if (countryName === '') {
      return;
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_5__["showAlertModal"])(context.state_error);
        return callback(err);
      }

      var $currentInput = $('[data-field-type="State"]');

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/*! exports provided: createTranslationDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationDictionary", function() { return createTranslationDictionary; });
var TRANSLATIONS = 'translations';

var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};

var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);

    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};
/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */


var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
      validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
      validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3N0YXRlLWNvdW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiXSwibmFtZXMiOlsiYnVpbGREYXRlVmFsaWRhdGlvbiIsIiRmb3JtRmllbGQiLCJ2YWxpZGF0aW9uIiwicmVxdWlyZWRNZXNzYWdlIiwibWluX2RhdGUiLCJtYXhfZGF0ZSIsImludmFsaWRNZXNzYWdlIiwiZm9ybUVsZW1lbnRJZCIsImF0dHIiLCJtaW5TcGxpdCIsInNwbGl0IiwibWF4U3BsaXQiLCJtaW5EYXRlIiwiRGF0ZSIsIm1heERhdGUiLCJzZWxlY3RvciIsInRyaWdnZXJlZEJ5IiwidmFsaWRhdGUiLCJjYiIsInZhbCIsImRheSIsIk51bWJlciIsImZpbmQiLCJtb250aCIsInllYXIiLCJjaG9zZW5EYXRlIiwiZXJyb3JNZXNzYWdlIiwicmVxdWlyZWQiLCJidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uIiwiZXJyb3JUZXh0IiwiZm9ybUZpZWxkSWQiLCJwcmltYXJ5U2VsZWN0b3IiLCJzZWNvbmRhcnlTZWxlY3RvciIsInJlc3VsdCIsIiQiLCJlYWNoIiwiaW5kZXgiLCJjaGVja2JveCIsImNoZWNrZWQiLCJidWlsZFJlcXVpcmVkVmFsaWRhdGlvbiIsImxlbmd0aCIsImJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uIiwiZm9ybUZpZWxkU2VsZWN0b3IiLCJsYWJlbCIsIm1pbiIsIm1heCIsIm5hbWUiLCJudW1iZXJWYWwiLCJidWlsZFZhbGlkYXRpb24iLCIkdmFsaWRhdGVhYmxlRWxlbWVudCIsImRhdGEiLCJmaWVsZFZhbGlkYXRpb25zIiwidHlwZSIsImRhdGVWYWxpZGF0aW9uIiwicHVzaCIsImVsZW1lbnQiLCIkaW5wdXRFbGVtZW50IiwidGFnTmFtZSIsImdldCIsImlucHV0TmFtZSIsImVsZW1lbnRTZWxlY3RvciIsIiRmb3JtIiwiY29udGV4dCIsInZhbGlkYXRpb25zVG9QZXJmb3JtIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwicmVxdWlyZWRGaWVsZFZhbGlkYXRpb25UZXh0IiwiZmllbGRfbm90X2JsYW5rIiwiaW5wdXQiLCJnZXRMYWJlbCIsIiRlbCIsImZpcnN0IiwicmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZSIsImNvbmNhdCIsIm1ha2VTdGF0ZVJlcXVpcmVkIiwic3RhdGVFbGVtZW50IiwiYXR0cnMiLCJwcm9wIiwiaXRlbSIsInJldCIsInZhbHVlIiwicmVwbGFjZW1lbnRBdHRyaWJ1dGVzIiwiaWQiLCJyZXBsYWNlV2l0aCIsIiRuZXdFbGVtZW50IiwiJGhpZGRlbklucHV0IiwicmVtb3ZlIiwicHJldiIsImFwcGVuZCIsInNob3ciLCJtYWtlU3RhdGVPcHRpb25hbCIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCJoaWRlIiwiYWRkT3B0aW9ucyIsInN0YXRlc0FycmF5IiwiJHNlbGVjdEVsZW1lbnQiLCJvcHRpb25zIiwiY29udGFpbmVyIiwicHJlZml4Iiwic3RhdGVzIiwic3RhdGVPYmoiLCJ1c2VJZEZvclN0YXRlcyIsImh0bWwiLCJqb2luIiwiY2FsbGJhY2siLCJvbiIsImV2ZW50IiwiY291bnRyeU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwidXRpbHMiLCJhcGkiLCJjb3VudHJ5IiwiZ2V0QnlOYW1lIiwiZXJyIiwicmVzcG9uc2UiLCJzaG93QWxlcnRNb2RhbCIsInN0YXRlX2Vycm9yIiwiJGN1cnJlbnRJbnB1dCIsIm5ld0VsZW1lbnQiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiaSIsIkpTT04iLCJwYXJzZSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwibWFwIiwia2V5IiwicG9wIiwicmVkdWNlIiwiYWNjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLG1CQUFULENBQTZCQyxVQUE3QixFQUF5Q0MsVUFBekMsRUFBcURDLGVBQXJELEVBQXNFO0FBQ2xFO0FBQ0EsTUFBSUQsVUFBVSxDQUFDRSxRQUFYLElBQXVCRixVQUFVLENBQUNHLFFBQXRDLEVBQWdEO0FBQzVDLFFBQU1DLGNBQWMsMkNBQXlDSixVQUFVLENBQUNFLFFBQXBELGFBQW9FRixVQUFVLENBQUNHLFFBQS9FLE1BQXBCO0FBQ0EsUUFBTUUsYUFBYSxHQUFHTixVQUFVLENBQUNPLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBdEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdQLFVBQVUsQ0FBQ0UsUUFBWCxDQUFvQk0sS0FBcEIsQ0FBMEIsR0FBMUIsQ0FBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUdULFVBQVUsQ0FBQ0csUUFBWCxDQUFvQkssS0FBcEIsQ0FBMEIsR0FBMUIsQ0FBakI7QUFDQSxRQUFNRSxPQUFPLEdBQUcsSUFBSUMsSUFBSixDQUFTSixRQUFRLENBQUMsQ0FBRCxDQUFqQixFQUFzQkEsUUFBUSxDQUFDLENBQUQsQ0FBUixHQUFjLENBQXBDLEVBQXVDQSxRQUFRLENBQUMsQ0FBRCxDQUEvQyxDQUFoQjtBQUNBLFFBQU1LLE9BQU8sR0FBRyxJQUFJRCxJQUFKLENBQVNGLFFBQVEsQ0FBQyxDQUFELENBQWpCLEVBQXNCQSxRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWMsQ0FBcEMsRUFBdUNBLFFBQVEsQ0FBQyxDQUFELENBQS9DLENB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Y2h1bmsuNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGF0IHRoZSBnaXZlbiBkYXRlIGZvciB0aGUgZGF5L21vbnRoL3llYXIgc2VsZWN0IGlucHV0cyBpcyB3aXRoaW4gcG90ZW50aWFsIHJhbmdlXG4gKiBAcGFyYW0gJGZvcm1GaWVsZFxuICogQHBhcmFtIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHt7c2VsZWN0b3I6IHN0cmluZywgdHJpZ2dlcmVkQnk6IHN0cmluZywgdmFsaWRhdGU6IEZ1bmN0aW9uLCBlcnJvck1lc3NhZ2U6IHN0cmluZ319XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkRGF0ZVZhbGlkYXRpb24oJGZvcm1GaWVsZCwgdmFsaWRhdGlvbiwgcmVxdWlyZWRNZXNzYWdlKSB7XG4gICAgLy8gTm8gZGF0ZSByYW5nZSByZXN0cmljdGlvbiwgc2tpcFxuICAgIGlmICh2YWxpZGF0aW9uLm1pbl9kYXRlICYmIHZhbGlkYXRpb24ubWF4X2RhdGUpIHtcbiAgICAgICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgWW91ciBjaG9zZW4gZGF0ZSBtdXN0IGZhbGwgYmV0d2VlbiAke3ZhbGlkYXRpb24ubWluX2RhdGV9IGFuZCAke3ZhbGlkYXRpb24ubWF4X2RhdGV9LmA7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50SWQgPSAkZm9ybUZpZWxkLmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IG1pblNwbGl0ID0gdmFsaWRhdGlvbi5taW5fZGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICBjb25zdCBtYXhTcGxpdCA9IHZhbGlkYXRpb24ubWF4X2RhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgbWluRGF0ZSA9IG5ldyBEYXRlKG1pblNwbGl0WzBdLCBtaW5TcGxpdFsxXSAtIDEsIG1pblNwbGl0WzJdKTtcbiAgICAgICAgY29uc3QgbWF4RGF0ZSA9IG5ldyBEYXRlKG1heFNwbGl0WzBdLCBtYXhTcGxpdFsxXSAtIDEsIG1heFNwbGl0WzJdKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VsZWN0b3I6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3RbZGF0YS1sYWJlbD1cInllYXJcIl1gLFxuICAgICAgICAgICAgdHJpZ2dlcmVkQnk6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3Q6bm90KFtkYXRhLWxhYmVsPVwieWVhclwiXSlgLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJkYXlcIl0nKS52YWwoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGggPSBOdW1iZXIoJGZvcm1GaWVsZC5maW5kKCdzZWxlY3RbZGF0YS1sYWJlbD1cIm1vbnRoXCJdJykudmFsKCkpIC0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hvc2VuRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuXG4gICAgICAgICAgICAgICAgY2IoY2hvc2VuRGF0ZSA+PSBtaW5EYXRlICYmIGNob3NlbkRhdGUgPD0gbWF4RGF0ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBpbnZhbGlkTWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gUmVxdWlyZWQgRW1wdHkgRGF0ZSBmaWVsZFxuICAgIGlmICh2YWxpZGF0aW9uLnJlcXVpcmVkICYmICghdmFsaWRhdGlvbi5taW5fZGF0ZSB8fCAhdmFsaWRhdGlvbi5tYXhfZGF0ZSkpIHtcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnRJZCA9ICRmb3JtRmllbGQuYXR0cignaWQnKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VsZWN0b3I6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3RbZGF0YS1sYWJlbD1cInllYXJcIl1gLFxuICAgICAgICAgICAgdHJpZ2dlcmVkQnk6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3Q6bm90KFtkYXRhLWxhYmVsPVwieWVhclwiXSlgLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gJGZvcm1GaWVsZC5maW5kKCdzZWxlY3RbZGF0YS1sYWJlbD1cImRheVwiXScpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gJGZvcm1GaWVsZC5maW5kKCdzZWxlY3RbZGF0YS1sYWJlbD1cIm1vbnRoXCJdJykudmFsKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IHZhbDtcblxuICAgICAgICAgICAgICAgIGNiKGRheSAmJiBtb250aCAmJiB5ZWFyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHJlcXVpcmVkTWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8qKlxuICogV2UgdmFsaWRhdGUgY2hlY2tib3hlcyBzZXBhcmF0ZWx5IGZyb20gc2luZ2xlIGlucHV0IGZpZWxkcywgYXMgdGhleSBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGNoZWNrZWQgb3B0aW9uXG4gKiBmcm9tIG1hbnkgZGlmZmVyZW50IGlucHV0c1xuICogQHBhcmFtICRmb3JtRmllbGRcbiAqIEBwYXJhbSB2YWxpZGF0aW9uXG4gKiBAcGFyYW0gZXJyb3JUZXh0IHByb3ZpZGVzIGVycm9yIHZhbGlkYXRpb24gbWVzc2FnZVxuICovXG5mdW5jdGlvbiBidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uKHZhbGlkYXRpb24sICRmb3JtRmllbGQsIGVycm9yVGV4dCkge1xuICAgIGNvbnN0IGZvcm1GaWVsZElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xuICAgIGNvbnN0IHByaW1hcnlTZWxlY3RvciA9IGAjJHtmb3JtRmllbGRJZH0gaW5wdXQ6Zmlyc3Qtb2YtdHlwZWA7XG4gICAgY29uc3Qgc2Vjb25kYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0YDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdG9yOiBwcmltYXJ5U2VsZWN0b3IsXG4gICAgICAgIHRyaWdnZXJlZEJ5OiBzZWNvbmRhcnlTZWxlY3RvcixcbiAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAkKHNlY29uZGFyeVNlbGVjdG9yKS5lYWNoKChpbmRleCwgY2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvclRleHQsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24odmFsaWRhdGlvbiwgc2VsZWN0b3IsIGVycm9yVGV4dCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdG9yLFxuICAgICAgICB2YWxpZGF0ZShjYiwgdmFsKSB7XG4gICAgICAgICAgICBjYih2YWwubGVuZ3RoID4gMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JUZXh0LFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSB7XG4gICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgVGhlIHZhbHVlIGZvciAke3ZhbGlkYXRpb24ubGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke3ZhbGlkYXRpb24ubWlufSBhbmQgJHt2YWxpZGF0aW9uLm1heH0uYDtcbiAgICBjb25zdCBtaW4gPSBOdW1iZXIodmFsaWRhdGlvbi5taW4pO1xuICAgIGNvbnN0IG1heCA9IE51bWJlcih2YWxpZGF0aW9uLm1heCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUZpZWxkU2VsZWN0b3J9IGlucHV0W25hbWU9XCIke3ZhbGlkYXRpb24ubmFtZX1cIl1gLFxuICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlclZhbCA9IE51bWJlcih2YWwpO1xuXG4gICAgICAgICAgICBjYihudW1iZXJWYWwgPj0gbWluICYmIG51bWJlclZhbCA8PSBtYXgpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGludmFsaWRNZXNzYWdlLFxuICAgIH07XG59XG5cblxuZnVuY3Rpb24gYnVpbGRWYWxpZGF0aW9uKCR2YWxpZGF0ZWFibGVFbGVtZW50LCBlcnJvck1lc3NhZ2UpIHtcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gJHZhbGlkYXRlYWJsZUVsZW1lbnQuZGF0YSgndmFsaWRhdGlvbicpO1xuICAgIGNvbnN0IGZpZWxkVmFsaWRhdGlvbnMgPSBbXTtcbiAgICBjb25zdCBmb3JtRmllbGRTZWxlY3RvciA9IGAjJHskdmFsaWRhdGVhYmxlRWxlbWVudC5hdHRyKCdpZCcpfWA7XG5cbiAgICBpZiAodmFsaWRhdGlvbi50eXBlID09PSAnZGF0ZWNob29zZXInKSB7XG4gICAgICAgIGNvbnN0IGRhdGVWYWxpZGF0aW9uID0gYnVpbGREYXRlVmFsaWRhdGlvbigkdmFsaWRhdGVhYmxlRWxlbWVudCwgdmFsaWRhdGlvbiwgZXJyb3JNZXNzYWdlKTtcblxuICAgICAgICBpZiAoZGF0ZVZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChkYXRlVmFsaWRhdGlvbik7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRpb24ucmVxdWlyZWQgJiYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ2NoZWNrYm94c2VsZWN0JyB8fCB2YWxpZGF0aW9uLnR5cGUgPT09ICdyYWRpb3NlbGVjdCcpKSB7XG4gICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uKHZhbGlkYXRpb24sICR2YWxpZGF0ZWFibGVFbGVtZW50LCBlcnJvck1lc3NhZ2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkdmFsaWRhdGVhYmxlRWxlbWVudC5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXRFbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXRFbGVtZW50LmdldCgwKS50YWdOYW1lO1xuICAgICAgICAgICAgY29uc3QgaW5wdXROYW1lID0gJGlucHV0RWxlbWVudC5hdHRyKCduYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50U2VsZWN0b3IgPSBgJHtmb3JtRmllbGRTZWxlY3Rvcn0gJHt0YWdOYW1lfVtuYW1lPVwiJHtpbnB1dE5hbWV9XCJdYDtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ251bWJlcm9ubHknKSB7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZFJlcXVpcmVkVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBlbGVtZW50U2VsZWN0b3IsIGVycm9yTWVzc2FnZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGRWYWxpZGF0aW9ucztcbn1cblxuLyoqXG4gKiBCdWlsZHMgdGhlIHZhbGlkYXRpb24gbW9kZWwgZm9yIGR5bmFtaWMgZm9ybXNcbiAqIEBwYXJhbSAkZm9ybVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIGZvciBlcnJvciBtZXNzYWdlcyBvbiByZXF1aXJlZCBmaWVsZHMgdmFsaWRhdGlvblxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoJGZvcm0sIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGlvbnNUb1BlcmZvcm0gPSBbXTtcbiAgICBjb25zdCB7IGZpZWxkX25vdF9ibGFuazogcmVxdWlyZWRGaWVsZFZhbGlkYXRpb25UZXh0IH0gPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG5cbiAgICAkZm9ybS5maW5kKCdbZGF0YS12YWxpZGF0aW9uXScpLmVhY2goKGluZGV4LCBpbnB1dCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRMYWJlbCA9ICRlbCA9PiAkZWwuZmlyc3QoKS5kYXRhKCd2YWxpZGF0aW9uJykubGFiZWw7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkVmFsaWRhdGlvbk1lc3NhZ2UgPSBnZXRMYWJlbCgkKGlucHV0KSkgKyByZXF1aXJlZEZpZWxkVmFsaWRhdGlvblRleHQ7XG5cbiAgICAgICAgdmFsaWRhdGlvbnNUb1BlcmZvcm0gPSB2YWxpZGF0aW9uc1RvUGVyZm9ybS5jb25jYXQoYnVpbGRWYWxpZGF0aW9uKCQoaW5wdXQpLCByZXF1aXJlZFZhbGlkYXRpb25NZXNzYWdlKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFsaWRhdGlvbnNUb1BlcmZvcm07XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGluc2VydFN0YXRlSGlkZGVuRmllbGQgfSBmcm9tICcuL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuXG4vKipcbiAqIElmIHRoZXJlIGFyZSBubyBvcHRpb25zIGZyb20gYmNhcHAsIGEgdGV4dCBmaWVsZCB3aWxsIGJlIHNlbnQuIFRoaXMgd2lsbCBjcmVhdGUgYSBzZWxlY3QgZWxlbWVudCB0byBob2xkIG9wdGlvbnMgYWZ0ZXIgdGhlIHJlbW90ZSByZXF1ZXN0LlxuICogQHJldHVybnMge2pRdWVyeXxIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gbWFrZVN0YXRlUmVxdWlyZWQoc3RhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cnMgPSBfLnRyYW5zZm9ybShzdGF0ZUVsZW1lbnQucHJvcCgnYXR0cmlidXRlcycpLCAocmVzdWx0LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcbiAgICAgICAgcmV0W2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgICBpZDogYXR0cnMuaWQsXG4gICAgICAgICdkYXRhLWxhYmVsJzogYXR0cnNbJ2RhdGEtbGFiZWwnXSxcbiAgICAgICAgY2xhc3M6ICdmb3JtLXNlbGVjdCcsXG4gICAgICAgIG5hbWU6IGF0dHJzLm5hbWUsXG4gICAgICAgICdkYXRhLWZpZWxkLXR5cGUnOiBhdHRyc1snZGF0YS1maWVsZC10eXBlJ10sXG4gICAgfTtcblxuICAgIHN0YXRlRWxlbWVudC5yZXBsYWNlV2l0aCgkKCc8c2VsZWN0Pjwvc2VsZWN0PicsIHJlcGxhY2VtZW50QXR0cmlidXRlcykpO1xuXG4gICAgY29uc3QgJG5ld0VsZW1lbnQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcbiAgICBjb25zdCAkaGlkZGVuSW5wdXQgPSAkKCdbbmFtZSo9XCJGb3JtRmllbGRJc1RleHRcIl0nKTtcblxuICAgIGlmICgkaGlkZGVuSW5wdXQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICRoaWRkZW5JbnB1dC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAoJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIFN0cmluZyBpcyBpbmplY3RlZCBmcm9tIGxvY2FsaXplclxuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuYXBwZW5kKGA8c21hbGw+JHtjb250ZXh0LnJlcXVpcmVkfTwvc21hbGw+YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuc2hvdygpO1xuICAgIH1cblxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBJZiBhIGNvdW50cnkgd2l0aCBzdGF0ZXMgaXMgdGhlIGRlZmF1bHQsIGEgc2VsZWN0IHdpbGwgYmUgc2VudCxcbiAqIEluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gc3dpdGNoIHRvIGFuIGlucHV0IGZpZWxkIGFuZCBoaWRlIHRoZSByZXF1aXJlZCBmaWVsZFxuICovXG5mdW5jdGlvbiBtYWtlU3RhdGVPcHRpb25hbChzdGF0ZUVsZW1lbnQpIHtcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50QXR0cmlidXRlcyA9IHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBpZDogYXR0cnMuaWQsXG4gICAgICAgICdkYXRhLWxhYmVsJzogYXR0cnNbJ2RhdGEtbGFiZWwnXSxcbiAgICAgICAgY2xhc3M6ICdmb3JtLWlucHV0JyxcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcbiAgICB9O1xuXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxpbnB1dCAvPicsIHJlcGxhY2VtZW50QXR0cmlidXRlcykpO1xuXG4gICAgY29uc3QgJG5ld0VsZW1lbnQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcblxuICAgIGlmICgkbmV3RWxlbWVudC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCgkbmV3RWxlbWVudCk7XG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLmhpZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogQWRkcyB0aGUgYXJyYXkgb2Ygb3B0aW9ucyBmcm9tIHRoZSByZW1vdGUgcmVxdWVzdCB0byB0aGUgbmV3bHkgY3JlYXRlZCBzZWxlY3QgYm94LlxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlc0FycmF5XG4gKiBAcGFyYW0ge2pRdWVyeX0gJHNlbGVjdEVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGFkZE9wdGlvbnMoc3RhdGVzQXJyYXksICRzZWxlY3RFbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gW107XG5cbiAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIlwiPiR7c3RhdGVzQXJyYXkucHJlZml4fTwvb3B0aW9uPmApO1xuXG4gICAgaWYgKCFfLmlzRW1wdHkoJHNlbGVjdEVsZW1lbnQpKSB7XG4gICAgICAgIF8uZWFjaChzdGF0ZXNBcnJheS5zdGF0ZXMsIChzdGF0ZU9iaikgPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudXNlSWRGb3JTdGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIiR7c3RhdGVPYmouaWR9XCI+JHtzdGF0ZU9iai5uYW1lfTwvb3B0aW9uPmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIiR7c3RhdGVPYmoubmFtZX1cIj4ke3N0YXRlT2JqLmxhYmVsID8gc3RhdGVPYmoubGFiZWwgOiBzdGF0ZU9iai5uYW1lfTwvb3B0aW9uPmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkc2VsZWN0RWxlbWVudC5odG1sKGNvbnRhaW5lci5qb2luKCcgJykpO1xuICAgIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtqUXVlcnl9IHN0YXRlRWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGVFbGVtZW50LCBjb250ZXh0ID0ge30sIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgLyoqXG4gICAgICogQmFja3dhcmRzIGNvbXBhdGlibGUgZm9yIHRocmVlIHBhcmFtZXRlcnMgaW5zdGVhZCBvZiBmb3VyXG4gICAgICpcbiAgICAgKiBBdmFpbGFibGUgb3B0aW9uczpcbiAgICAgKlxuICAgICAqIHVzZUlkRm9yU3RhdGVzIHtCb29sfSAtIEdlbmVyYXRlcyBzdGF0ZXMgZHJvcGRvd24gdXNpbmcgaWQgZm9yIHZhbHVlcyBpbnN0ZWFkIG9mIHN0cmluZ3NcbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICB9XG5cbiAgICAkKCdzZWxlY3RbZGF0YS1maWVsZC10eXBlPVwiQ291bnRyeVwiXScpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50cnlOYW1lID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKTtcblxuICAgICAgICBpZiAoY291bnRyeU5hbWUgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5hcGkuY291bnRyeS5nZXRCeU5hbWUoY291bnRyeU5hbWUsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoY29udGV4dC5zdGF0ZV9lcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRjdXJyZW50SW5wdXQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcblxuICAgICAgICAgICAgaWYgKCFfLmlzRW1wdHkocmVzcG9uc2UuZGF0YS5zdGF0ZXMpKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgbWF5IGhhdmUgYmVlbiByZXBsYWNlZCB3aXRoIGEgc2VsZWN0LCByZXNlbGVjdCBpdFxuICAgICAgICAgICAgICAgIGNvbnN0ICRzZWxlY3RFbGVtZW50ID0gbWFrZVN0YXRlUmVxdWlyZWQoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBhZGRPcHRpb25zKHJlc3BvbnNlLmRhdGEsICRzZWxlY3RFbGVtZW50LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAkc2VsZWN0RWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBtYWtlU3RhdGVPcHRpb25hbCgkY3VycmVudElucHV0LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=