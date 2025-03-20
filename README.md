# Infinite Scroll Image Gallery

## Description
This is a simple **Infinite Scroll Image Gallery** that fetches random images from the **Unsplash API** and displays them dynamically as the user scrolls down. The project enhances user experience by providing a seamless infinite scrolling feature, a dark mode toggle, and a back-to-top button.

## Hosted Link
You can view the live project here:
[Live Demo](https://premgchavan.github.io/infinite-image-scroll/)

## Features
- **Infinite Scrolling**: Automatically loads more images as the user scrolls.
- **Unsplash API Integration**: Fetches high-quality images dynamically.
- **Dark Mode Toggle**: Users can switch between light and dark themes.
- **Responsive Design**: Images are displayed neatly regardless of screen size.
- **Back to Top Button**: Easily scroll back to the top with a single click.

## Technologies Used
- HTML5
- CSS3 
- JavaScript 
- Unsplash API


## API Configuration
To use the Unsplash API, replace `your_api_key` in `script.js`:
```js
const apiKey = "your_api_key";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=10`;
```
Sign up at [Unsplash Developers](https://unsplash.com/developers) to get an API key.

## Future Enhancements
- Add category-based filtering for images.
- Implement a loading skeleton for better user experience.
- Optimize API calls to reduce usage.

## License
This project is licensed under the MIT License.
