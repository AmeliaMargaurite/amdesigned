<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact | AMDesigned</title>
    <meta name="description"
      content="Contact us now for a fast, easy website creation for your business. SEO and accessibility focused, your customers will love your new website" />
    <meta property="og:locale" content="en_AU" />
    <meta property="og:url" content="https://amdesigned.com.au//contact" />
    <meta property="og:title" content="Contact | Company Name" />
    <meta property="og:description"
      content="Contact us now for a fast, easy website creation for your business. SEO and accessibility focused, your customers will love your new website" />
    <meta property="og:image"
      content="https://amdesigned.com.au//assets/img/contact-order-online-small-medium-business-website.f684525854ca2d7d.jpg" />
    <meta property="og:image:alt"
      content="Laptop open, on screen is a small business website for interior design, blogging, articles" />
    <meta name="twitter:title" content="Contact | Company Name" />
    <meta name="twitter:description"
      content="Contact us now for a fast, easy website creation for your business. SEO and accessibility focused, your customers will love your new website" />
    <meta name="twitter:image"
      content="https://amdesigned.com.au//assets/img/contact-order-online-small-medium-business-website.f684525854ca2d7d.jpg" />
    <script src="/js/runtime.6924b43834953277efd8.js"> </script><script src="/js/index.8.7f07256b3062bd39d24d.js"> </script>
    <link href="/css/main.03546416cad0407bd541c031ce78b93e.css" rel="stylesheet" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon.478ba290519eb28e.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/assets/img/android-chrome-512x512.7445bebac609ad72.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/assets/img/android-chrome-192x192.cf989685129b62c1.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32x32.fb29bbf81ec57714.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon-16x16.f68b7860c31a0afb.png" />
    <link rel="manifest" href="../favicon/site.webmanifest" />
    <script>
      ! function (t, e) {
        var o, n, p, r;
        e.__SV || (window.posthog = e, e._i = [], e.init = function (i, s, a) {
          function g(t, e) {
            var o = e.split(".");
            2 == o.length && (t = t[o[0]], e = o[1]), t[e] = function () {
              t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
            }
          }(p = t.createElement("script")).type = "text/javascript", p.async = !0, p.src = s.api_host +
            "/static/array.js", (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
          var u = e;
          for (void 0 !== a ? u = e[a] = [] : a = "posthog", u.people = u.people || [], u.toString = function (t) {
              var e = "posthog";
              return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e
            }, u.people.toString = function () {
              return u.toString(1) + ".people (stub)"
            }, o =
            "capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags"
            .split(" "), n = 0; n < o.length; n++) g(u, o[n]);
          e._i.push([i, s, a])
        }, e.__SV = 1)
      }(document, window.posthog || []);
      posthog.init('phc_Q5ZatJXkoZzmKWt3AMoS43jKkUdAKFU6IjSfMf3WYqP', {
        api_host: 'https://app.posthog.com'
      })
    </script>
  </head>
  <body>
    <header class="chevron-down"><a class="skip-to-content-link" href="#main">Skip to content</a><a class="logo"
        href="/">
        <p class="company-name">AMDesigned</p>
      </a><button class="menu__button" id="hamburger" onclick="toggleMenu()" tabindex="0" aria-controls="main-menu"
        aria-label="Open the menu"><span aria-hidden="true" focusable="false"></span><span aria-hidden="true"
          focusable="false"></span><span aria-hidden="true" focusable="false"></span></button>
      <nav id="main-menu" role="navigation" aria-label="Main menu">
        <ul>
          <li><a href="/">home</a></li>
          <li><a class="current" href="/contact">contact</a></li>
          <li><a href="/showcase">showcase</a></li>
        </ul>
      </nav>
    </header>
    <main class="contact" id="main">
      <section><span class="section__content"><span class="contact-form__wrapper">
            <h1>Let's connect </h1><?php require('../php/contact_form.php') ?><form class="contact-form"
              action="../php/validate-contact-form.php?back=/contact" method="POST" id="contact-form"> <label
                for="subject">
                <p>Subject: </p><input type="subject" id="subject" name="subject" required pattern="string"
                  value="<?= $inputs['subject'] ?? "I'd like a website" ?>" title="Alphanumeric with accents allowed">
                <p class="warning"></p>
              </label><label for="name">
                <p>Name:</p><input type="text" id="name" name="name" required pattern="string"
                  title="Alphanumeric with accents allowed" value="<?= $inputs['name'] ?? '' ?>">
                <p class="warning"></p>
              </label><label for="email">
                <p>Email: </p><input type="email" id="email" name="email" pattern="email" required
                  value="<?= $inputs['email'] ?? '' ?>">
                <p class="warning"></p>
              </label>
              <fieldset for="services">
                <legend id="services">Services you may be interested in:</legend>
                <p class="warning"></p><label for="design">
                  <p>Design</p><input type="checkbox" required id="design" value="design" name="services[]">
                </label><label for="build">
                  <p>Build</p><input type="checkbox" required id="build" value="build" name="services[]">
                </label><label for="hosting">
                  <p>Hosting</p><input type="checkbox" required id="hosting" value="hosting" name="services[]">
                </label><label for="domain-purchase">
                  <p>Domain purchase</p><input type="checkbox" required id="domain-purchase" value="domain-purchase"
                    name="services[]">
                </label><label for="seo-accessibility">
                  <p>SEO & Accessibility</p><input type="checkbox" required id="seo-accessibility"
                    value="seo-accessibility" name="services[]">
                </label><label for="analytics">
                  <p>Analytics</p><input type="checkbox" required id="analytics" value="analytics" name="services[]">
                </label><label for="maintenance">
                  <p>Ongoing maintenance</p><input type="checkbox" required id="maintenance" value="maintenance"
                    name="services[]">
                </label><label for="other">
                  <p>Other</p><input type="checkbox" required id="other" value="other" name="services[]">
                </label>
              </fieldset><label for="message">
                <p>Message: </p><textarea name="message" id="message" cols="30" rows="10" required
                  title="Not allowed: equals sign, greater than or less than signs, curly or square brackets"><?= $inputs['message'] ?? '' ?></textarea>
                <p class="warning"></p>
              </label><label for="pot" aria-hidden="true"><input type="hidden" name="pot" readonly></label><input
                type="hidden" name="token" value="<?= $token ?>"><input type="hidden" name="package-type"
                id="package-type"><button class="btn primary" type="submit" name="submit" onclick="validateCheckboxes()"
                value="submit"> Send<span class="icon paper-plane"></span></button>
            </form>
            <p class="warning">
              <script
                src="/js/contact_form.0a58198a100e334b17bc.js">
              </script>
            </p>
          </span><span class="mock-chat__wrapper">
            <h3>It usually goes something like...</h3><span class="mock-chat"> <span class="chat-bubble you">
                <p class="user">you</p>
                <p class="chat">Hi, I need a website, can you help?</p>
              </span><span class="chat-bubble us">
                <p class="chat">Absolutely! Let's make something amazing</p>
                <p class="user">us</p>
              </span><span class="chat-bubble you">
                <p class="user">you</p>
                <p class="chat emoji">&#128170;</p>
              </span></span>
          </span></span></section>
    </main>
    <footer>
      <ul>
        <li><a href="/">home</a></li>
        <li><a class="current" href="/contact">contact</a></li>
        <li><a href="/showcase">showcase</a></li>
      </ul>
      <ul>
        <li> <a href="/terms-and-conditions">Terms and conditions</a></li>
        <li> <a href="/privacy-policy">Privacy policy</a></li>
      </ul>
    </footer>
  </body>
</html>
