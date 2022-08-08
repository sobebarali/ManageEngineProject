function navbar(){
    return `<div id="navbar">
    <div class="navImg">
      <a href="index.html"
        ><img
          src="https://www.manageengine.com/images/logo/manageengine-logo.svg"
          alt="navImg1"
      /></a>
    </div>
    <div class="options">
      <h3><a href="#">Products</a>
        <div class="productSubmenu">
          <ul>
            <li><a href="#">Identity and access management</a>
              <div id="productSubmenu1">
                <ul>
                  <li><a href="#">ADManager Plus</a></li>
                  <li><a href="#">ADAudit Plus</a></li>
                  <li><a href="#">AD self service Plus</a></li>
                  <li><a href="#">Exchange reporter Plus</a></li>
                  <li><a href="#">RecoveryManager Plus</a></li>
                  <li><a href="#">AD360</a></li>
                  <li><a href="#">M365 Manager</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Enterprise service managenment</a>
              <div id="productSubmenu1">
                <ul>
                  <li><a href="#">Endpoint Central</a></li>
                  <li><a href="#">Mobile Device Manager Plus</a></li>
                  <li><a href="#">Patch Manager Plus</a></li>
                  <li><a href="#">Patch Connect Plus</a></li>
                  <li><a href="#">OS Developer</a></li>
                  <li><a href="#">Remote Access Plus</a></li>
                  <li><a href="#">M365 Manager</a></li>
                </ul>
              </div></li>
            <li><a href="#">Unified endpoint management and security</a>
              <div id="productSubmenu1">
                <ul>
                  <li><a href="#">Vulneribilty Manager Plus</a></li>
                  <li><a href="#">ADAudit Plus</a></li>
                  <li><a href="#">Device Control Plus</a></li>
                  <li><a href="#">Application Control Plus</a></li>
                  <li><a href="#">Browser Security Plus</a></li>
                  <li><a href="#">AD360</a></li>
                  <li><a href="#">Endpoint DLP</a></li>
                </ul>
              </div></li>
            <li><a href="#">IT operations management</a>
              <div id="productSubmenu1">
                <ul>
                  <li><a href="#">ADManager Plus</a></li>
                  <li><a href="#">ADAudit Plus</a></li>
                  <li><a href="#">AD self service Plus</a></li>
                  <li><a href="#">Exchange reporter Plus</a></li>
                  <li><a href="#">RecoveryManager Plus</a></li>
                  <li><a href="#">AD360</a></li>
                  <li><a href="#">M365 Maneger</a></li>
                </ul>
              </div></li>
            <li><a href="#">Security Information and event management</a></li>
            <li><a href="">Advanced IT analytics</a></li>
            <li><a href="#">Low-code app development</a></li>
            <li><a href="#">cloud Solutions for enterprise IT</a></li>
            <li id="viewProduct"><a href="../productsPage.html">View all products</a></li>
          </ul>
        </div>
      </h3>
      <h3><a href="#">Solutions</a></h3>
      <h3>
        <a href="#">Company</a>
        <div id="eventSubmenu">
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Customers</a></li>
            <li>
              <a href="#">Media</a>
            </li>
            <li>
              <a href="#">Analyst Relations</a>
            </li>
            <li>
              <a href="#">Insights</a>
            </li>
            <li>
              <a href="#">Academy</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Affiliate</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </h3>
      <h3>
        <a href="#">Events</a>
        <div id="eventSubmenu">
          <ul>
            <li><a href="#">Webinars</a></li>
            <li><a href="#">On-demand Webinars</a></li>
            <li>
              <a href="#">Virtual Events</a>
            </li>
            <li>
              <a href="#">Online workshop</a>
            </li>
            <li>
              <a href="#">Prodcasts</a>
            </li>
            <li>
              <a href="#">Seminars</a>
            </li>
            <li>
              <a href="#">Workshops</a>
            </li>
            <li>
              <a href="#">User conference</a>
            </li>
            <li>
              <a href="#">Industry Events</a>
            </li>
          </ul>
        </div>
      </h3>
    </div>
    <div id="login">
      <i class="fa-solid fa-user">
        <div class="loginSubmenu">
          <ul>
            <li><a href="../log.html">login</a></li>
            <li><a href="../signup.html">Register</a></li>
          </ul>
        </div>
      </i>
      <!-- <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a> -->
    </div>
  </div>`
}

export {navbar}