# Cornerstone-Custom Readme
preview code: bhmud1bqe8

[Link to Store](https://my-trial-store.mybigcommerce.com/)



This repository contains a BigCommerce theme that was customized according to specific business requirements.

### Requirements:
- Create a new category called “Special Items”. In this category, create exactly one product called “Special Item”. The product should have at least two images. 

- Create a feature that displays the product’s second image when it is hovered on.

- Create a button labeled “Add All To Cart” at the top of the category page. When clicked, this button adds the “Special Item” to the cart and notifies the user that the product was successfully added. This button should utilize the Storefront API.

- If the cart contains any items, show a button labeled “Remove All Items” next to the “Add All To Cart Button”. When clicked, the “Remove All Items” button should clear the cart and notify the user. This button should also utilize the Storefront API.

- Create a banner at the top of the category page that displays information about the customer, if a customer is logged in. This feature should utilize data rendered via Handlebars on the customer object.

## Special Items category	and Special Item product
This task was completed through BigCommerce’s online site management tool.

## Display Second Product Image on Hover
To accomplish this task, I added a custom attribute called “hoverImg” to the responsive-image component. The hoverImg attribute contains the url resource for the product’s second image. The url is retrieved in the product grid component (grid.html) and passed to the product-listing component, before being injected into the html rendered in the responsive-img component. 

Then, in the category.js file, I created an event listener that retrieves the hoverImg attribute when a product is hovered on and builds a new “”srcSet” attribute with the new image url. There is also an event listener that restores the original image when the user is not hovering on the product.

This is probably not the most efficient solution. It’s likely possible there is a better way to retrieve the second image, but being relatively inexperienced with the BigCommerce cdn, this was a solution that worked for me.

## Add All To Cart and Remove All Items buttons
To create the Add All To Cart button, I inserted a button and containing div into the category.html component. In category.js, I created an event listener that calls handleCart() in cart.js when the Add button is clicked. The callback in the event listener also passes the productId. The handleCart method uses the Add to Cart URL, described [here](https://developer.bigcommerce.com/docs/ZG9jOjIyMDU4Nw-add-to-cart-ur-ls) in the Storefront API section. The item is added to the cart via the jQuery post() method. In its callback, the user is notified via a modal and UI elements are adjusted to match the cart’s content. The “Remove All Items” button and its event listener are created via jQuery, if they do not yet exist.

To create the Remove button, I wrote a function in category.js called checkCartForItems. The function uses the Fetch API and the Storefront API endpoint described [here](https://developer.bigcommerce.com/api-reference/b3A6MjMxMzQ3Nw-get-a-cart) to check if a cart already exists. If a cart already exists, the Remove button is inserted into the DOM and its event listener is set up. When the button is clicked, the event listener is triggered, calling the deleteCart method in cart.js. The deleteCart method uses Fetch API and Storefront API to retrieve the id of the cart. It then uses the Storefront API to delete the previously retrieved cart. The deleteCart method then removes the “Remove” button from the DOM, adjusts the cart UI elements, and notifies the user of the cart’s destruction via a modal.

## Banner with Customer Information
To create this feature, I edited the category.html. Near the top of the file, I used Handlebars’ #if helper to check if customer information has been injected into context.  If it has, some basic information about the customer is rendered in a banner div.


