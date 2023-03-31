<?php include_once('./load_articles.php') ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Articles | AMDesigned</title>
    <meta name="description" content="AMDesigned" />
    <meta property="og:locale" content="en_AU" />
    <meta property="og:url" content="https://www.amdesigned.com.au/" />
    <meta property="og:title" content="Articles | AMDesigned" />
    <meta property="og:description" content="AMDesigned" />
    <meta property="og:image" content="" />
    <meta property="og:image:alt" content="" />
    <meta name="twitter:title" content="Articles | AMDesigned" />
    <meta name="twitter:description" content="AMDesigned" />
    <meta name="twitter:image" content="" />
    <script src="/js/runtime.6215ad7d9669b3713aae.js"> </script><script src="/js/common.eee5d1964e08124eab65.js"> </script>
    <link href="/css/main.376e4829200c3057b34844cf8170f6a8.css" rel="stylesheet" />
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
  <body><span class="loading__wrapper" id="loading__wrapper"><span class="loader">Loading...</span></span>
    <header class="chevron-down"><a class="skip-to-content-link" href="#main">Skip to content</a><a class="logo"
        href="/">
        <p class="company-name">AMDesigned</p>
      </a><button class="menu__button" id="hamburger" onclick="toggleMenu()" tabindex="0" aria-controls="main-menu"
        aria-label="Open the menu"><span aria-hidden="true" focusable="false"></span><span aria-hidden="true"
          focusable="false"></span><span aria-hidden="true" focusable="false"></span></button>
      <nav id="main-menu" role="navigation" aria-label="Main menu">
        <ul>
          <li><a href="/" onclick="closeMenu()">home</a></li>
          <li><a href="/contact/" onclick="closeMenu()">contact</a></li>
          <li><a href="/showcase/" onclick="closeMenu()">showcase</a></li>
          <li><a class="current" href="/articles/" onclick="closeMenu()">articles</a></li>
        </ul>
      </nav>
    </header>
    <main class="articles" id="main">
      <section class="articles-section"><span class="section__content" id="articles"><span>
            <h1>Recent articles</h1>
            <p>Informative articles for businesses with, or wanting, a website</p>
          </span><span class="articles__wrapper"><?php foreach ($articles as $article): ?>
            <?php $webpFile = $article->hero_img_filename . '.webp'; ?>
            <?php $small = $img_path . 'large/' . $webpFile . $webpFile . ' 425w' ?>
            <?php $medium = $img_path . 'medium/' . $webpFile . ' 900w' ?>
            <?php $srcset = array( $small, $medium) ?>
            <?php $srcset = implode(',', $srcset) ?><a class="article__card" href="/article/<?= $article->slug ?>">
              <figure class="image-w-placeholder"><img class="placeholder-image"
                  src="<?= $img_path . 'thumbnail/' . $article->hero_img_filename ?>.jpg">
                <picture>
                  <source srcset="<?= $srcset ?>" type="image/webp"><img
                    src="<?= $img_path . 'medium/' .  $article->hero_img_filename?>.jpg"
                    alt="<?= $article->hero_img_alt ?>">
                </picture>
              </figure><span class="content"><span>
                  <p class="title"><?= $article->title ?></p>
                  <p class="author"><?= $article->author_name ?></p>
                </span>
                <p class="summary"><?= $article->summary ?></p>
              </span>
            </a><?php endforeach ?></span></span></section>
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
    </script>
    <footer>
      <ul>
        <li><a href="/">home</a></li>
        <li><a href="/contact/">contact</a></li>
        <li><a href="/showcase/">showcase</a></li>
        <li><a class="current" href="/articles/">articles</a></li>
      </ul>
      <ul>
        <li> <a href="/terms-and-conditions">Terms and conditions</a></li>
        <li> <a href="/privacy-policy">Privacy policy</a></li>
      </ul>
    </footer>
  </body>
</html>
