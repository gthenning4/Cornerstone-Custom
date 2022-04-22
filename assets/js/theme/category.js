import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import compareProducts from './global/compare-products';
import FacetedSearch from './common/faceted-search';
import { createTranslationDictionary } from '../theme/common/utils/translations-utils';
import { includes } from 'lodash';
import Modal from './global/modal';
import { alertModal } from './global/modal';
import { showAlertModal } from './global/modal';
import { defaultModal } from './global/modal';
import Cart from '../theme/cart';


export default class Category extends CatalogPage {
    constructor(context) {
        super(context);
        this.validationDictionary = createTranslationDictionary(context);
    }

    setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
        $element.attr({
            role: roleType,
            'aria-live': ariaLiveStatus,
        });
    }

    makeShopByPriceFilterAccessible() {
        if (!$('[data-shop-by-price]').length) return;

        if ($('.navList-action').hasClass('is-active')) {
            $('a.navList-action.is-active').focus();
        }

        $('a.navList-action').on('click', () => this.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive'));
    }

    onReady() {
        this.arrangeFocusOnSortBy();

        $('[data-button-type="add-cart"]').on('click', (e) => this.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite'));

        this.makeShopByPriceFilterAccessible();

        compareProducts(this.context);

        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }

        $('a.reset-btn').on('click', () => this.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite'));

        this.ariaNotifyNoProducts();

        //check if cart exists and add delete button
        this.checkCartForItems();

        //setup srcSet for img swap
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
        }

        //Event listener for img swap
        $(".card-figure").on('mouseover', function () {
            let newImgSrc = $(this).find('img').attr('hoverimg');
            newImgSrc = newImgSrc.replace('{:size}', '500x659');
            $(this).find('img').attr('srcSet', buildSrcSet(newImgSrc));
        }).on('mouseleave', function () {
            let defaultImgSrc = $(this).find('img').attr('data-srcset');
            $(this).find('img').attr('srcSet', defaultImgSrc);
            console.log(defaultImgSrc);
        });

        //Event listener for 'Add All to Cart'
        $('.add-btn').on('click', function () {
            console.log('made it to add-btn listener');
            let prodId = $('.card').attr('data-test');
            prodId= prodId.substring(5);
            const cart = new Cart();
            cart.handleCart(prodId);
        })
    }

    ariaNotifyNoProducts() {
        const $noProductsMessage = $('[data-no-products-notification]');
        if ($noProductsMessage.length) {
            $noProductsMessage.focus();
        }
    }

    initFacetedSearch() {
        const {
            price_min_evaluation: onMinPriceError,
            price_max_evaluation: onMaxPriceError,
            price_min_not_entered: minPriceNotEntered,
            price_max_not_entered: maxPriceNotEntered,
            price_invalid_value: onInvalidPrice,
        } = this.validationDictionary;
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            $('body').triggerHandler('compareReset');

            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        }, {
            validationErrorMessages: {
                onMinPriceError,
                onMaxPriceError,
                minPriceNotEntered,
                maxPriceNotEntered,
                onInvalidPrice,
            },
        });
    }

    //Checks if cart has items and inserts delete button, if it does
    checkCartForItems() {
        console.log('checking cart for items');
        fetch('/api/storefront/cart', {
            credentials: 'include'
        }).then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    $('.cart-buttons').append('<input class="button deleteBtn" type="submit" value="Remove All Items" />');
                    $('.deleteBtn').on('click', function () {
                        let cart = new Cart();
                        cart.deleteCart();
                    })
                }
            })
    }
}
