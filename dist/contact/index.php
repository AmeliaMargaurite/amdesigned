<?php session_start() ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact | A&#8203;M&#8203;Designed</title>
    <meta name="description"
      content="Contact us now for a fast, easy website for your business. SEO and accessibility focused, your customers will love your new website" />
    <meta property="og:locale" content="en_AU" />
    <meta property="og:url" content="https://www.amdesigned.com.au//contact" />
    <meta property="og:title" content="Contact | A&#8203;M&#8203;Designed" />
    <meta property="og:description"
      content="Contact us now for a fast, easy website for your business. SEO and accessibility focused, your customers will love your new website" />
    <meta property="og:image"
      content="/assets/img/amdesigned-business-websites-australia-get-online.f6cc952806268e89.png" />
    <meta property="og:image:alt"
      content="Large computer monitor sitting behind smaller open laptop, both screens showing web sites. Text overlay reads: "
      Let's build something special together. AMDesigned for all your business website needs"" />
    <meta name="twitter:title" content="Contact | A&#8203;M&#8203;Designed" />
    <meta name="twitter:description"
      content="Contact us now for a fast, easy website for your business. SEO and accessibility focused, your customers will love your new website" />
    <meta name="twitter:image"
      content="/assets/img/amdesigned-business-websites-australia-get-online.f6cc952806268e89.png" />
    <script src="/js/runtime.6215ad7d9669b3713aae.js"> </script><script src="/js/common.6dfe874d4eed07968fc9.js"> </script>
    <link href="/css/main.4e5e74f547015abafd36c0839d2543d2.css" rel="stylesheet" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon.478ba290519eb28e.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/assets/img/android-chrome-512x512.7445bebac609ad72.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/assets/img/android-chrome-192x192.cf989685129b62c1.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32x32.fb29bbf81ec57714.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon-16x16.f68b7860c31a0afb.png" />
    <link rel="manifest" href="../favicon/site.webmanifest" />
    <script>
      !(function (t, e) {
        var o, n, p, r;
        e.__SV ||
          ((window.posthog = e),
            (e._i = []),
            (e.init = function (i, s, a) {
              function g(t, e) {
                var o = e.split(".");
                2 == o.length && ((t = t[o[0]]), (e = o[1])),
                  (t[e] = function () {
                    t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
                  });
              }
              ((p = t.createElement("script")).type = "text/javascript"), (p.async = !0), (p.src = s.api_host +
                "/static/array.js"), (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
              var u = e;
              for (
                void 0 !== a ? (u = e[a] = []) : (a = "posthog"),
                u.people = u.people || [],
                u.toString = function (t) {
                  var e = "posthog";
                  return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e;
                },
                u.people.toString = function () {
                  return u.toString(1) + ".people (stub)";
                },
                o =
                "capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags"
                .split(" "),
                n = 0; n < o.length; n++
              )
                g(u, o[n]);
              e._i.push([i, s, a]);
            }),
            (e.__SV = 1));
      })(document, window.posthog || []);
      const getUserId = () => {
        let user_id;
        if (window.localStorage.getItem("user_id")) {
          user_id = JSON.parse(window.localStorage.getItem("user_id"));
        } else {
          user_id = Date.now();
          window.localStorage.setItem("user_id", user_id);
        }
        return [user_id];
      };
      posthog.init("phc_IECNjEcCsaDAmsFD1y49ormP3Xj7Fzh6aHCqYWd6pNE", {
        api_host: "https://eu.posthog.com",
        loaded: (posthog) => {
          posthog.identify(getUserId());
          const toolbarJSON = new URLSearchParams(window.location.hash.substring(1)).get("__posthog");
          if (toolbarJSON) {
            posthog.loadToolbar(JSON.parse(toolbarJSON));
          }
        },
        persistence: "memory",
      });
    </script>
  </head>
  <body class="contact"><span class="loading__wrapper" id="loading__wrapper"><span
        class="loader">Loading...</span></span>
    <header class="chevron-down" id="header"><a class="skip-to-content-link" href="#main">Skip to content</a><a
        class="logo" href="/">
        <p class="company-name">A&#8203;M&#8203;Designed</p>
        <p class="tagline">We make and manage customer converting business websites</p>
      </a><button class="menu__button" id="hamburger" onclick="toggleMenu()" tabindex="0" aria-controls="main-menu"
        aria-label="Open the menu"><span aria-hidden="true" focusable="false"></span><span aria-hidden="true"
          focusable="false"></span><span aria-hidden="true" focusable="false"></span></button>
      <nav id="main-menu" role="navigation" aria-label="Main menu">
        <ul>
          <li><a href="/" onclick="closeMenu()">home</a></li>
          <li><a href="/quote" onclick="closeMenu()">quote</a></li>
          <li><a class="current" href="/contact/" onclick="closeMenu()">contact</a></li>
          <li><a href="/showcase/" onclick="closeMenu()">showcase</a></li>
          <li><a href="/articles/" onclick="closeMenu()">articles</a></li>
        </ul>
      </nav>
    </header>
    <main class="contact" id="main">
      <section><span class="section__content"><span class="contact-form__wrapper">
            <h1>Let's connect</h1><?php require('../php/contact_form.php') ?><form class="contact-form"
              id="contact-form" action="../php/validate-contact-form.php?back=/contact" method="POST"><label
                for="subject">
                <p>Subject:</p><input id="subject" type="subject" name="subject" required pattern="string"
                  value="<?= $inputs['subject'] ?? "I'd like a website" ?>" title="Alphanumeric with accents allowed">
                <p class="warning"></p>
              </label><label for="name">
                <p>Name:</p><input id="name" type="text" name="name" required pattern="string"
                  title="Alphanumeric with accents allowed" value="<?= $inputs['name'] ?? '' ?>">
                <p class="warning"></p>
              </label><label for="email">
                <p>Email:</p><input id="email" type="email" name="email" pattern="email" required
                  value="<?= $inputs['email'] ?? '' ?>">
                <p class="warning"></p>
              </label>
              <fieldset for="services">
                <legend id="services">Services you may be interested in:</legend>
                <p class="warning"></p><label for="design">
                  <p>Design</p><input id="design" type="checkbox" value="design" name="services[]">
                </label><label for="build">
                  <p>Build</p><input id="build" type="checkbox" value="build" name="services[]">
                </label><label for="hosting">
                  <p>Hosting</p><input id="hosting" type="checkbox" value="hosting" name="services[]">
                </label><label for="domain-purchase">
                  <p>Domain purchase</p><input id="domain-purchase" type="checkbox" value="domain-purchase"
                    name="services[]">
                </label><label for="seo-accessibility">
                  <p>S&#8203;E&#8203;O & Accessibility</p><input id="seo-accessibility" type="checkbox"
                    value="seo-accessibility" name="services[]">
                </label><label for="analytics">
                  <p>Analytics</p><input id="analytics" type="checkbox" value="analytics" name="services[]">
                </label><label for="maintenance">
                  <p>Ongoing maintenance</p><input id="maintenance" type="checkbox" value="maintenance"
                    name="services[]">
                </label><label for="ecommerce">
                  <p>E-commerce / Web store</p><input id="ecommerce" type="checkbox" value="ecommerce"
                    name="services[]">
                </label><label for="blog">
                  <p>Blog</p><input id="blog" type="checkbox" value="blog" name="services[]">
                </label><label for="other">
                  <p>Other</p><input id="other" type="checkbox" value="other" name="services[]">
                </label>
              </fieldset><label for="message"><span>
                  <p>Let us know a bit about your business:</p>
                  <p class="subtext">What do you do, what are your customers like, what area do you service.<br>What do
                    you want to achieve with having a website?</p>
                </span><textarea id="message" name="message" cols="30" rows="10" required
                  title="Not allowed: equals sign, greater than or less than signs, curly or square brackets"><?= $inputs['message'] ?? '' ?></textarea>
                <p class="warning"></p>
              </label><label for="pot" aria-hidden="true"><input type="hidden" name="pot" readonly></label><input
                type="hidden" name="token" value="<?= $token ?>"><input id="package-type" type="hidden"
                name="package_type"><button class="btn primary" onclick="showLoadingBtn(this)" type="submit"
                name="submit" value="submit">Send<span class="icon paper-plane" aria-hidden="true"></span></button>
            </form>
            <p class="warning">
              <script
                src="/js/contact_form.0a1d9470141bb46463ae.js">
              </script>
            </p>
          </span><span class="mock-chat__wrapper" aria-hidden="true">
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
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Baarn, The Netherlands",
          "postalCode": "3743BR",
          "streetAddress": "Nieuw Baarnstraat"
        },
        "email": "hello(at)amdesigned.com.au",
        "name": "AMDesigned",
        "currenciesAccepted": "AUD, EUR, USD",
        "url": "https://amdesigned.com.au",
        "contactPoint": [{
          "@type": "ContactPoint",
          "email": "hello(at)amdesigned.com.au",
          "contactType": "customer service"
        }]
      }
    </script><a class="scroll-to-top" id="scroll-to-top"
      title="Scrolls to top of page and focuses on the header element" onclick="scrollToTop()" tabindex="0"
      href="#header"><span class="icon arrow up"></span>Back to Top</a>
    <footer>
      <ul>
        <li><a href="/">home</a></li>
        <li><a href="/quote">quote</a></li>
        <li><a class="current" href="/contact/">contact</a></li>
        <li><a href="/showcase/">showcase</a></li>
        <li><a href="/articles/">articles</a></li>
      </ul>
      <ul>
        <li> <a href="/terms-and-conditions">Terms and conditions</a></li>
        <li> <a href="/privacy-policy">Privacy policy</a></li>
      </ul>
    </footer>
  </body>
</html>
