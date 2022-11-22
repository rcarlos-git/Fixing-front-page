const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `

    <div class="header-top">
            <div class="container">
                <div class="wrapper flexitem">
                    <div class="left">
                        <ul class="flexitem main-links">
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Featured Products</a></li>
                            <li><a href="#">Wishlist</a></li>
                        </ul>
                    </div>
                    <div class="right">
                        <ul class="flexitem main-links">
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Order Tracking</a></li>
                            <li><a href="#">USD<span class="icon-small"><i class="fa-regular fa-angle-down"></i></span></a>
                                <ul>
                                    <li class="currency"><a href="#">USD</a></li>
                                    <li><a href="#">EURO</a></li>
                                    <li><a href="#">GBP</a></li>
                                    <li><a href="#">JPY</a></li>
                                </ul>
                            </li>
                                <li><a href="#">English <span class="icon-small"><i class="fa-regular fa-angle-down"></i></span></a>
                                    <ul>
                                        <li class="currency"><a href="#">English</a></li>
                                        <li><a href="#">Spanish</a></li>
                                        <li><a href="#">German</a></li>
                                        <li><a href="#">Japanese</a></li>
                                    </ul>
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        <div class="nav">
            <img src="img/elogo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <div class="icon-text">
                </div>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Home</a></li>
            <li class="link-item"><a href="Fashion.html" class="link">Fashion</a></li>
            <li class="link-item"><a href="Electronics.html" class="link">Electronics</a></li>
            <li class="link-item"><a href="Sports.html" class="link">Sports</a></li>
            <li class="link-item"><a href="Accessories.html" class="link">accessories</a></li>
        </ul>
    `;
}

createNav();
