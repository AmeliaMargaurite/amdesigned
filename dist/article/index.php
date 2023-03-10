<?php include_once('./load_article.php') ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?= $article ? $article->title : 'Whoops!' ?> | AMDesigned</title>
    <meta name="description" content="AMDesigned" />
    <meta property="og:locale" content="en_AU" />
    <meta property="og:url" content="https://www.amdesigned.com.au//showcase" />
    <meta property="og:title" content="&lt;?= $article ? $article-&gt;title : 'Whoops!' ?&gt; | AMDesigned" />
    <meta property="og:description" content="AMDesigned" />
    <meta property="og:image" content="" />
    <meta property="og:image:alt" content="" />
    <meta name="twitter:title" content="&lt;?= $article ? $article-&gt;title : 'Whoops!' ?&gt; | AMDesigned" />
    <meta name="twitter:description" content="AMDesigned" />
    <meta name="twitter:image" content="" />
    <script src="/js/runtime.6924b43834953277efd8.js"> </script><script src="/js/index.10.a394cfe2feb1edba2c53.js"> </script>
    <link href="/css/main.78f273f530d35ea3420894c275b80c9f.css" rel="stylesheet" />
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
      posthog.init("phc_Q5ZatJXkoZzmKWt3AMoS43jKkUdAKFU6IjSfMf3WYqP", {
        api_host: "https://app.posthog.com"
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
          <li><a href="/contact" onclick="closeMenu()">contact</a></li>
          <li><a href="/showcase" onclick="closeMenu()">showcase</a></li>
        </ul>
      </nav>
    </header>
    <main class="<?= $article ? 'article' : 'no-article' ?>" id="main"><?php if ($article !== null) :?>
      <?php $date = new DateTime($article->updated_at); ?><span
        class="hero_img"><?php $sizes = ['small/' => '425w', 'medium/' => '900w', 'large/' => '1024w', 'xLarge/' => '1440w'] ?>
        <?php $webp_srcset = buildSrcsets($img_path, $article->hero_img_filename, $sizes, '.webp') ?>
        <?php $jpg_srcset = buildSrcsets($img_path, $article->hero_img_filename, $sizes, '.jpg') ?><figure width="100%"
          height="400">
          <picture>
            <source srcset="<?= $webp_srcset ?>" type="image/webp" width="100%" height="400" /><img
              sizes="(max-width: 1400px) 100vw, 1400px" srcset="<?= $jpg_srcset ?>"
              src="<?= $img_path . 'medium/' . $article->hero_img_filename ?>.jpg" alt="<?= $article->hero_img_alt ?>"
              width="100%" height="400" />
          </picture>
        </figure></span>
      <section class="article__section"><span class="section__content"><span class="title__wrapper"><span class="title">
              <h1><?= $article->title?></h1>
            </span><span class="last_updated">Last updated <?= $date->format('jS F Y') ?></span></span><span
            class="article-content" id="content"><?= $article->content?></span><span id="published_at"></span>
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
        </span></section><?php else : ?><section><span class="section__content"><span>
            <h1>Whoops</h1>
            <p>The article you were looking for doesn't seem to exist</p>
          </span></span></section><?php endif ?>
    </main>
    <footer>
      <ul>
        <li><a href="/">home</a></li>
        <li><a href="/contact">contact</a></li>
        <li><a href="/showcase">showcase</a></li>
      </ul>
      <ul>
        <li> <a href="/terms-and-conditions">Terms and conditions</a></li>
        <li> <a href="/privacy-policy">Privacy policy</a></li>
      </ul>
    </footer>
  </body>
</html>
