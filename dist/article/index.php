<?php include_once('./load_article.php') ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?= $article ? $article->title : 'Whoops!' ?> | AMDesigned</title>
    <meta name="description" content="<?= $article ? $article->summary : 'Whoops' ?> " />
    <meta property="og:locale" content="en_AU" />
    <meta property="og:url" content="https://www.amdesigned.com.au/article/<?= $article ? $article->slug : '' ?>" />
    <meta property="og:title" content="<?= $article ? $article->title : 'Whoops!' ?> | AMDesigned" />
    <meta property="og:description" content="<?= $article ? $article->summary : 'Whoops' ?> " />
    <meta property="og:image"
      content="<?= $article ? $img_path . 'medium/' . $article->hero_img_filename . '.jpg' : '' ?>" />
    <meta property="og:image:alt" content="<?= $article ? $article->hero_img_alt : ''?>" />
    <meta name="twitter:title" content="<?= $article ? $article->title : 'Whoops!' ?> | AMDesigned" />
    <meta name="twitter:description" content="<?= $article ? $article->summary : 'Whoops' ?> " />
    <meta name="twitter:image"
      content="<?= $article ? $img_path . 'medium/' . $article->hero_img_filename . '.jpg' : '' ?>" />
    <script src="/js/runtime.6215ad7d9669b3713aae.js"> </script><script src="/js/common.eee5d1964e08124eab65.js"> </script>
    <link href="/css/main.6cf8052a834df7fa72fe6faad8f3cf7a.css" rel="stylesheet" />
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
  <body class="<?= $article ? 'article' : 'no-article' ?>"><span class="loading__wrapper" id="loading__wrapper"><span
        class="loader">Loading...</span></span>
    <header class="chevron-down"><a class="skip-to-content-link" href="#main">Skip to content</a><a class="logo"
        href="/">
        <p class="company-name">AMDesigned</p>
        <p class="tagline">We make and manage customer converting business websites</p>
      </a><button class="menu__button" id="hamburger" onclick="toggleMenu()" tabindex="0" aria-controls="main-menu"
        aria-label="Open the menu"><span aria-hidden="true" focusable="false"></span><span aria-hidden="true"
          focusable="false"></span><span aria-hidden="true" focusable="false"></span></button>
      <nav id="main-menu" role="navigation" aria-label="Main menu">
        <ul>
          <li><a href="/" onclick="closeMenu()">home</a></li>
          <li><a href="/quote" onclick="closeMenu()">quote</a></li>
          <li><a href="/contact/" onclick="closeMenu()">contact</a></li>
          <li><a href="/showcase/" onclick="closeMenu()">showcase</a></li>
          <li><a href="/articles/" onclick="closeMenu()">articles</a></li>
        </ul>
      </nav>
    </header>
    <main class="<?= $article ? 'article' : 'no-article' ?>" id="main"><?php if ($article !== null) :?><section><span
          class="section__content header"><span class="breadcrumbs" aria-label="Breadcrumb">
            <h3 class="breadcrumbs__title">You are here:</h3>
            <ul>
              <li><a href="/" rel="bookmark">home</a></li><span aria-hidden="true">&gt;</span>
              <li><a href="/articles" rel="bookmark">articles</a></li><span aria-hidden="true">&gt;</span>
              <li class="current" aria-current="page"><?= strtolower($article->title) ?></li>
            </ul>
          </span><span class="title__wrapper"><?php $created_date = new DateTime($article->created_at)  ?>
            <?php $created_date_str = $created_date->format('jS F Y') ?>
            <?php $updated_date = new DateTime($article->updated_at) ?>
            <?php $updated_date_str = $updated_date->format('jS F Y') ?><h1 class="title"><?= $article->title?></h1>
            <span class="dates">
              <p class="last_updated">Created <?= $created_date_str ?></p>
              <?php if ( strtotime($created_date_str) !==  strtotime($updated_date_str)) : ?><p class="last_updated">
                Updated <?= $updated_date_str ?></p><?php endif ?>
            </span></span><span class="hero_img">
            <figure class="image-w-placeholder" style="max-height: 400px"><img class="placeholder-image"
                src="<?= $img_path . 'thumbnail/' . $article->hero_img_filename ?>.jpg" width="100%" height="400px"
                style="height: 400px !important" alt="Placeholder image for next hero image">
              <picture>
                <source srcset="<?= $img_path . 'medium/' . $article->hero_img_filename ?>.webp" type="image/webp"
                  width="100%" height="400px"><img sizes="(max-width: 1400px) 100vw, 1400px"
                  src="<?= $img_path . 'medium/' . $article->hero_img_filename ?>.jpg"
                  alt="<?= $article->hero_img_alt ?>" width="100%" height="400px" style="height: 400px !important">
              </picture>
            </figure>
          </span></span></section>
      <section><span class="section__content"><span class="article-content"
            id="content"><?= $article->content?></span><span class="categories">
            <p>Read more about these categories</p>
            <ul class="horizontal-list pills"><?php if ($article->categories): ?>
              <?php foreach(json_decode($article->categories) as $category) : ?><li><a
                  href="/articles/?categories=<?= $category ?>" rel="tag"><?= $category ?></a></li><?php endforeach ?>
              <?php endif ?></ul>
          </span>
          <script type="application/ld+json">
            {
              "@content": "https://schema.org",
              "@type": "BlogPosting",
              "@id": "https://www.amdesigned.com.au/article/<?= $article->slug ?>#content",
              "mainEntityOfPage": "https://www.amdesigned.com.au/article/<?= $article->slug ?>#content",
              "headline": "<?= $article->title ?>",
              "name": "<?= $article->title ?>",
              "description": "<?= $article->summary ?>",
              "datePublished": "<?= $article->created_at ?>",
              "dateModified": "<?= $article->updated_at ?>",
              "author": {
                "@type": "Person",
                "name": "Amelia Margaurite",
                "url": "https://www.linkedin.com/in/amelia-margaurite-150456201/"
              },
              "image": {
                "@type": "ImageObject",
                "@id": "https://www.access.amdesigned.com.au/storage/gallery/small/<?= $article->hero_img_filename ?>.jpg",
                "url": "https://www.access.amdesigned.com.au/storage/gallery/small/<?= $article->hero_img_filename ?>.jpg"
              },
              "url": "https://www.amdesigned.com.au/article/<?= $article->slug ?>"
            }
          </script>
        </span></section><?php elseif ($error) : ?><section><span class="section__content"><span>
            <h1>Whoops</h1>
            <p>There seems to have been an error. We'll get right on that. Please do try again later.</p>
          </span></span></section><?php else : ?><section><span class="section__content"><span>
            <h1>Whoops</h1>
            <p>The article you were looking for doesn't seem to exist. Maybe you'll find the one you're after
              <a class="link" href="/articles/" rel="bookmark">on the articles page.</a>
            </p>
          </span></span></section><?php endif ?>
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
        <li><a href="/quote">quote</a></li>
        <li><a href="/contact/">contact</a></li>
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
