<?php if (session_status() !== PHP_SESSION_ACTIVE) session_start();?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quote | A&#8203;M&#8203;Designed</title>
    <meta name="description" content="AMDesigned" />
    <meta property="og:locale" content="en_AU" />
    <meta property="og:url" content="https://www.amdesigned.com.au/" />
    <meta property="og:title" content="Quote | A&#8203;M&#8203;Designed" />
    <meta property="og:description" content="AMDesigned" />
    <meta property="og:image" content="" />
    <meta property="og:image:alt" content="" />
    <meta name="twitter:title" content="Quote | A&#8203;M&#8203;Designed" />
    <meta name="twitter:description" content="AMDesigned" />
    <meta name="twitter:image" content="" />
    <link href="/css/main.4ab0994b42770ab2559f2ee6a782dd0e.css" rel="stylesheet" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon.478ba290519eb28e.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/assets/img/android-chrome-512x512.7445bebac609ad72.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/assets/img/android-chrome-192x192.cf989685129b62c1.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32x32.fb29bbf81ec57714.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon-16x16.f68b7860c31a0afb.png" />
    <link rel="manifest" href="../favicon/site.webmanifest" />
  </head>
  <body class="quote"><span class="loading__wrapper" id="loading__wrapper"><span class="loader">Loading...</span></span>
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
          <li><a class="current" href="/quote" onclick="closeMenu()">quote</a></li>
          <li><a href="/contact/" onclick="closeMenu()">contact</a></li>
          <li><a href="/showcase/" onclick="closeMenu()">showcase</a></li>
          <li><a href="/articles/" onclick="closeMenu()">articles</a></li>
        </ul>
      </nav>
    </header>
    <main class="quote" id="main">
      <section><?php include_once('./quote_form.php') ?><span class="section__content">
          <h1>Quote</h1>
          <div class="wrapper">
            <p>Below is an indepth questionnaire to help us provide you with an accurate quote for your project. The
              more information you are able to provide the more accurate a quote we will be able to provide.</p><br />
            <p>However, if it seems a bit overwhelming, or not quite where you're at, please feel free to send a more
              simple message to us on
              <a class="link" href="/contact/" rel="bookmark">our contact page</a>.
            </p>
          </div>
          <form id="quote_form" action="../php/validate-quote-form.php?back=/quote/" method="POST"><label
              class="countable-label" for="contact_name">
              <p class="label" data-required="true">Contact name</p><input class="text_input" type="text"
                name="contact_name" id="contact_name" required aria-required="true" pattern="string"
                value="<?= $inputs['contact_name'] ?? null ?>" autocomplete="name">
              <p class="warning"></p>
            </label><label class="countable-label" for="email">
              <p class="label" data-required="true">Contact email address</p><input class="text_input" type="email"
                name="email" id="email" required aria-required="true" pattern="email"
                value="<?= $inputs['email'] ?? null ?>" autocomplete="email">
              <p class="warning"></p>
            </label><label class="countable-label" for="company">
              <p class="label" data-required="true">Company / Organisation name</p><input class="text_input" type="text"
                name="company" id="company" required aria-required="true" pattern="string"
                value="<?= $inputs['company'] ?? null ?>" autocomplete="organization" onblur="updateCompanyName(event)">
              <p class="warning"></p>
            </label><label class="countable-label" for="description">
              <p>Tell us a bit about <span class="company_name">your company / organisation</span></p><textarea
                class="textarea" name="description" id="description"
                aria-required="false"><?= $inputs['description'] ?? null ?></textarea>
              <p class="warning"></p>
            </label>
            <fieldset>
              <legend class="countable-label" id="purchase_domain">
                <p>Do you need us to buy your domain?</p>
              </legend>
              <p class="warning"></p><label class="radio" for="purchase_domain_yes">
                <p class="label" data-required="">Yes</p><input type="radio" id="purchase_domain_yes"
                  name="purchase_domain" value="purchase_domain_yes" aria-required="false" aria-checked="false"
                  aria-invalid="false">
              </label><label class="radio" for="purchase_domain_no">
                <p class="label" data-required="">No</p><input type="radio" id="purchase_domain_no"
                  name="purchase_domain" value="purchase_domain_no" aria-required="false" aria-checked="false"
                  aria-invalid="false">
              </label><label class="radio" for="purchase_domain_unknown">
                <p class="label" data-required="">Not sure yet</p><input type="radio" id="purchase_domain_unknown"
                  name="purchase_domain" value="purchase_domain_unknown" aria-required="false" aria-checked="false"
                  aria-invalid="false">
              </label>
            </fieldset>
            <fieldset>
              <legend class="countable-label" id="organise_hosting">
                <p>Do you need us to organise your hosting?</p>
              </legend>
              <p class="warning"></p><label class="radio" for="organise_hosting_yes">
                <p class="label" data-required="">Yes</p><input type="radio" id="organise_hosting_yes"
                  name="organise_hosting" value="organise_hosting_yes" aria-required="false" aria-checked="false"
                  aria-invalid="false">
              </label><label class="radio" for="organise_hosting_no">
                <p class="label" data-required="">No</p><input type="radio" id="organise_hosting_no"
                  name="organise_hosting" value="organise_hosting_no" aria-required="false" aria-checked="false"
                  aria-invalid="false">
              </label><label class="radio" for="organise_hosting_unknown">
                <p class="label" data-required="">Not sure yet</p><input type="radio" id="organise_hosting_unknown"
                  name="organise_hosting" value="organise_hosting_unknown" aria-required="false" aria-checked="false"
                  aria-invalid="false">
              </label>
            </fieldset>
            <div class="datepicker" id="a11y_date_picker">
              <div class="date"><label class="countable-label" for="id-textbox-1">
                  <p>What is your deadline for this project?
                    <span class="desc" id="id-description-1">(<span class="sr-only">date
                        format:</span>d&#8203;d/m&#8203;m/y&#8203;y&#8203;y&#8203;y)</span>
                  </p>
                  <div class="input"><input class="no_styling" id="id-textbox-1" name="deadline" type="text"
                      placeholder="dd/mm/yyyy" aria-describedby="id-description-1"><button class="calendar-icon btn"
                      id="calendar-btn" type="button" aria-label="Choose Date"><span
                        class="icon calendar"></span></button></div>
                </label></div>
              <div class="datepicker-dialog" id="id-datepicker-1" role="dialog" aria-modal="true"
                aria-label="Choose Date">
                <div class="header"><span class="btn__wrapper"><button class="btn double-chevron left prev-year"
                      type="button" aria-label="previous year"><span class="icon chevron left medium"></span><span
                        class="icon chevron left medium"></span></button><button class="btn prev-month" type="button"
                      aria-label="previous month"><span class="icon chevron left medium"></span></button></span>
                  <h2 class="month-year" id="id-grid-label" aria-live="polite">February 2020</h2><span
                    class="btn__wrapper"><button class="btn next-month" type="button" aria-label="next month"><span
                        class="icon chevron right medium"></span></button><button
                      class="btn double-chevron right next-year" type="button" aria-label="next year"><span
                        class="icon chevron right medium"></span><span
                        class="icon chevron right medium"></span></button></span>
                </div>
                <div class="table-wrap">
                  <table class="dates" role="grid" aria-labelledby="id-grid-label">
                    <thead>
                      <tr>
                        <th scope="col" abbr="Sunday">Su</th>
                        <th scope="col" abbr="Monday">Mo</th>
                        <th scope="col" abbr="Tuesday">Tu</th>
                        <th scope="col" abbr="Wednesday">We</th>
                        <th scope="col" abbr="Thursday">Th</th>
                        <th scope="col" abbr="Friday">Fr</th>
                        <th scope="col" abbr="Saturday">Sa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="disabled" tabindex="-1"></td>
                        <td class="disabled" tabindex="-1"></td>
                        <td class="disabled" tabindex="-1"></td>
                        <td class="disabled" tabindex="-1"></td>
                        <td class="disabled" tabindex="-1"></td>
                        <td class="disabled" tabindex="-1"></td>
                        <td tabindex="-1" data-date="2020-02-01">1</td>
                      </tr>
                      <tr>
                        <td tabindex="-1" data-date="2020-02-02">2</td>
                        <td tabindex="-1" data-date="2020-02-03">3</td>
                        <td tabindex="-1" data-date="2020-02-04">4</td>
                        <td tabindex="-1" data-date="2020-02-05">5</td>
                        <td tabindex="-1" data-date="2020-02-06">6</td>
                        <td tabindex="-1" data-date="2020-02-07">7</td>
                        <td tabindex="-1" data-date="2020-02-08">8</td>
                      </tr>
                      <tr>
                        <td tabindex="-1" data-date="2020-02-09">9</td>
                        <td tabindex="-1" data-date="2020-02-10">10</td>
                        <td tabindex="-1" data-date="2020-02-11">11</td>
                        <td tabindex="-1" data-date="2020-02-12">12</td>
                        <td tabindex="-1" data-date="2020-02-13">13</td>
                        <td tabindex="0" data-date="2020-02-14" role="gridcell" aria-selected="true">14</td>
                        <td tabindex="-1" data-date="2020-02-15">15</td>
                      </tr>
                      <tr>
                        <td tabindex="-1" data-date="2020-02-16">16</td>
                        <td tabindex="-1" data-date="2020-02-17">17</td>
                        <td tabindex="-1" data-date="2020-02-18">18</td>
                        <td tabindex="-1" data-date="2020-02-19">19</td>
                        <td tabindex="-1" data-date="2020-02-20">20</td>
                        <td tabindex="-1" data-date="2020-02-21">21</td>
                        <td tabindex="-1" data-date="2020-02-22">22</td>
                      </tr>
                      <tr>
                        <td tabindex="-1" data-date="2020-02-23">23</td>
                        <td tabindex="-1" data-date="2020-02-24">24</td>
                        <td tabindex="-1" data-date="2020-02-25">25</td>
                        <td tabindex="-1" data-date="2020-02-26">26</td>
                        <td tabindex="-1" data-date="2020-02-27">27</td>
                        <td tabindex="-1" data-date="2020-02-28">28</td>
                        <td tabindex="-1" data-date="2020-02-29">29</td>
                      </tr>
                      <tr>
                        <td tabindex="-1" data-date="2020-02-30">30</td>
                        <td tabindex="-1" data-date="2020-02-31">31</td>
                        <td class="disabled" tabindex="-1"></td>
                        <td class="disabled" tabindex="-1"></td>
                        <td class="disabled" tabindex="-1"></td>
                        <td class="disabled" tabindex="-1"></td>
                        <td class="disabled" tabindex="-1"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="dialog-ok-cancel-group"><button class="dialog-button btn mini"
                    value="cancel">Cancel</button><button class="dialog-button btn mini" value="ok">OK</button></div>
                <div class="dialog-message" aria-live="polite"></div>
              </div>
            </div>
            <script
              src="/js/runtime.6215ad7d9669b3713aae.js">
            </script><script
              src="/js/a11y_date_input.030ee332f63fdfe9d29f.js">
            </script><label class="currency_input countable-label" for="budget">
              <p>What is your estimated available budget for this website project?</p>
              <div class="input"><span aria-hidden="true">$</span><input class="no_styling" type="number" name="budget"
                  id="budget" aria-required="false" value="<?= $inputs['budget'] ?? null ?>"></div>
              <p class="warning"></p>
            </label>
            <fieldset for="reasons">
              <legend class="countable-label" id="reasons">
                <p>I want this site because</p>
              </legend>
              <p class="warning"></p><label class="checkbox" for="reasons_awareness">
                <p class="label" data-required="">I need to build awareness for my brand</p><input type="checkbox"
                  id="reasons_awareness" value="reasons_awareness" name="reasons[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['reasons']['reasons_awareness']) ? 'checked' : null ?>="<?= isset($inputs['reasons']['reasons_awareness']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="reasons_contact_point">
                <p class="label" data-required="">I need to offer a contact point to my clients</p><input
                  type="checkbox" id="reasons_contact_point" value="reasons_contact_point" name="reasons[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['reasons']['reasons_contact_point']) ? 'checked' : null ?>="<?= isset($inputs['reasons']['reasons_contact_point']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="reasons_improve_image">
                <p class="label" data-required="">I need my company to have a better image online</p><input
                  type="checkbox" id="reasons_improve_image" value="reasons_improve_image" name="reasons[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['reasons']['reasons_improve_image']) ? 'checked' : null ?>="<?= isset($inputs['reasons']['reasons_improve_image']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="reasons_e-commerce">
                <p class="label" data-required="">I need to sell my product/service through my site</p><input
                  type="checkbox" id="reasons_e-commerce" value="reasons_e-commerce" name="reasons[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['reasons']['reasons_e-commerce']) ? 'checked' : null ?>="<?= isset($inputs['reasons']['reasons_e-commerce']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="reasons_customer_loyalty">
                <p class="label" data-required="">I need to use it to build customer loyalty</p><input type="checkbox"
                  id="reasons_customer_loyalty" value="reasons_customer_loyalty" name="reasons[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['reasons']['reasons_customer_loyalty']) ? 'checked' : null ?>="<?= isset($inputs['reasons']['reasons_customer_loyalty']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="reasons_multilanguage">
                <p class="label" data-required="">I need to reach people in many languages</p><input type="checkbox"
                  id="reasons_multilanguage" value="reasons_multilanguage" name="reasons[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['reasons']['reasons_multilanguage']) ? 'checked' : null ?>="<?= isset($inputs['reasons']['reasons_multilanguage']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="reasons_promote_latest">
                <p class="label" data-required="">I need somewhere to promote my latest product/service</p><input
                  type="checkbox" id="reasons_promote_latest" value="reasons_promote_latest" name="reasons[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['reasons']['reasons_promote_latest']) ? 'checked' : null ?>="<?= isset($inputs['reasons']['reasons_promote_latest']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="reasons_other">Other<input
                  0="<?= isset($inputs['reasons']['reasons_other']) ? 'checked' : '' ?>" type="checkbox"
                  id="reasons_other" value="other" name="reasons[]" aria-required="false"
                  onchange="toggleCheckboxInputVisibility(event, 'reasons_checkbox__input')"></label><label
                class="other_checkbox_input" for="reasons_other_checkbox_input" id="reasons_checkbox__input"
                style="display: none" aria-hidden="true">
                <p>Please explain a little further</p><input type="hidden" name="reasons_other_checkbox_input"
                  id="reasons_other_checkbox_input">
              </label>
            </fieldset>
            <fieldset for="client_types">
              <legend class="countable-label" id="client_types">
                <p>My site will be built to target</p>
              </legend>
              <p class="warning"></p><label class="checkbox" for="client_types_business_customers">
                <p class="label" data-required="">Business customers</p><input type="checkbox"
                  id="client_types_business_customers" value="client_types_business_customers" name="client_types[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['client_types']['client_types_business_customers']) ? 'checked' : null ?>="<?= isset($inputs['client_types']['client_types_business_customers']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="client_types_consumers">
                <p class="label" data-required="">Consumers</p><input type="checkbox" id="client_types_consumers"
                  value="client_types_consumers" name="client_types[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['client_types']['client_types_consumers']) ? 'checked' : null ?>="<?= isset($inputs['client_types']['client_types_consumers']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="client_types_awareness">
                <p class="label" data-required="">Awareness</p><input type="checkbox" id="client_types_awareness"
                  value="client_types_awareness" name="client_types[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['client_types']['client_types_awareness']) ? 'checked' : null ?>="<?= isset($inputs['client_types']['client_types_awareness']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="client_types_other">Other<input
                  0="<?= isset($inputs['client_types']['client_types_other']) ? 'checked' : '' ?>" type="checkbox"
                  id="client_types_other" value="other" name="client_types[]" aria-required="false"
                  onchange="toggleCheckboxInputVisibility(event, 'client_types_checkbox__input')"></label><label
                class="other_checkbox_input" for="client_types_other_checkbox_input" id="client_types_checkbox__input"
                style="display: none" aria-hidden="true">
                <p>Please explain a little further</p><input type="hidden" name="client_types_other_checkbox_input"
                  id="client_types_other_checkbox_input">
              </label>
            </fieldset>
            <fieldset for="client_ages">
              <legend class="countable-label" id="client_ages">
                <p>I'd like to target clients who are</p>
              </legend>
              <p class="warning"></p><label class="checkbox" for="client_ages_kids_teens">
                <p class="label" data-required="">Kids & teens</p><input type="checkbox" id="client_ages_kids_teens"
                  value="client_ages_kids_teens" name="client_ages[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['client_ages']['client_ages_kids_teens']) ? 'checked' : null ?>="<?= isset($inputs['client_ages']['client_ages_kids_teens']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="client_ages_twenties">
                <p class="label" data-required="">In their <span aria-hidden="true">20's</span><span
                    class="sr-only">twenties</span></p><input type="checkbox" id="client_ages_twenties"
                  value="client_ages_twenties" name="client_ages[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['client_ages']['client_ages_twenties']) ? 'checked' : null ?>="<?= isset($inputs['client_ages']['client_ages_twenties']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="client_ages_thirties">
                <p class="label" data-required="">In their <span aria-hidden="true">30's</span><span
                    class="sr-only">thirties</span></p><input type="checkbox" id="client_ages_thirties"
                  value="client_ages_thirties" name="client_ages[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['client_ages']['client_ages_thirties']) ? 'checked' : null ?>="<?= isset($inputs['client_ages']['client_ages_thirties']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="client_ages_forties">
                <p class="label" data-required="">In their <span aria-hidden="true">40's</span><span
                    class="sr-only">forties</span></p><input type="checkbox" id="client_ages_forties"
                  value="client_ages_forties" name="client_ages[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['client_ages']['client_ages_forties']) ? 'checked' : null ?>="<?= isset($inputs['client_ages']['client_ages_forties']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="client_ages_fifties">
                <p class="label" data-required="">In their <span aria-hidden="true">50's</span><span
                    class="sr-only">fifties</span></p><input type="checkbox" id="client_ages_fifties"
                  value="client_ages_fifties" name="client_ages[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['client_ages']['client_ages_fifties']) ? 'checked' : null ?>="<?= isset($inputs['client_ages']['client_ages_fifties']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="client_ages_seniors">
                <p class="label" data-required="">Senior citizens</p><input type="checkbox" id="client_ages_seniors"
                  value="client_ages_seniors" name="client_ages[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['client_ages']['client_ages_seniors']) ? 'checked' : null ?>="<?= isset($inputs['client_ages']['client_ages_seniors']) ? 'checked' : null ?>">
              </label>
            </fieldset><label class="countable-label" for="seo_keywords">
              <p>Someone is searching the web for the solution your business provides. What words or phrases are they
                using to search.</p>
              <p class="disclaimer"><em>Do not include <span class="company_name">your business name</span>; imagine
                  someone who has never heard of your business</em></p><textarea class="textarea" name="seo_keywords"
                id="seo_keywords" aria-required="false"><?= $inputs['seo_keywords'] ?? null ?></textarea>
              <p class="warning"></p>
            </label>
            <fieldset for="include_in_website">
              <legend class="countable-label" id="include_in_website">
                <p>Our new website would need to include</p>
              </legend>
              <p class="warning"></p><label class="checkbox" for="include_in_website_html">
                <p class="label" data-required="">A basic HTML site</p><input type="checkbox"
                  id="include_in_website_html" value="include_in_website_html" name="include_in_website[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['include_in_website']['include_in_website_html']) ? 'checked' : null ?>="<?= isset($inputs['include_in_website']['include_in_website_html']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="include_in_website_html_css">
                <p class="label" data-required="">An HTML5/ CSS3 website</p><input type="checkbox"
                  id="include_in_website_html_css" value="include_in_website_html_css" name="include_in_website[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['include_in_website']['include_in_website_html_css']) ? 'checked' : null ?>="<?= isset($inputs['include_in_website']['include_in_website_html_css']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="include_in_website_responsive">
                <p class="label" data-required="">Responsive design for use on tablets & mobiles</p><input
                  type="checkbox" id="include_in_website_responsive" value="include_in_website_responsive"
                  name="include_in_website[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['include_in_website']['include_in_website_responsive']) ? 'checked' : null ?>="<?= isset($inputs['include_in_website']['include_in_website_responsive']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="include_in_website_wordpress">
                <p class="label" data-required="">WordPress-based CMS</p><input type="checkbox"
                  id="include_in_website_wordpress" value="include_in_website_wordpress" name="include_in_website[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['include_in_website']['include_in_website_wordpress']) ? 'checked' : null ?>="<?= isset($inputs['include_in_website']['include_in_website_wordpress']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="include_in_website_magazine">
                <p class="label" data-required="">Online Magazine</p><input type="checkbox"
                  id="include_in_website_magazine" value="include_in_website_magazine" name="include_in_website[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['include_in_website']['include_in_website_magazine']) ? 'checked' : null ?>="<?= isset($inputs['include_in_website']['include_in_website_magazine']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="include_in_website_forum_blog">
                <p class="label" data-required="">Online forum/ blog</p><input type="checkbox"
                  id="include_in_website_forum_blog" value="include_in_website_forum_blog" name="include_in_website[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['include_in_website']['include_in_website_forum_blog']) ? 'checked' : null ?>="<?= isset($inputs['include_in_website']['include_in_website_forum_blog']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="include_in_website_newsletter_system">
                <p class="label" data-required="">Newsletter system</p><input type="checkbox"
                  id="include_in_website_newsletter_system" value="include_in_website_newsletter_system"
                  name="include_in_website[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['include_in_website']['include_in_website_newsletter_system']) ? 'checked' : null ?>="<?= isset($inputs['include_in_website']['include_in_website_newsletter_system']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="include_in_website_socials_integration">
                <p class="label" data-required="">Social network integration</p><input type="checkbox"
                  id="include_in_website_socials_integration" value="include_in_website_socials_integration"
                  name="include_in_website[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['include_in_website']['include_in_website_socials_integration']) ? 'checked' : null ?>="<?= isset($inputs['include_in_website']['include_in_website_socials_integration']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="include_in_website_multiple_landing_pages">
                <p class="label" data-required="">Separate, dedicated landing pages</p><input type="checkbox"
                  id="include_in_website_multiple_landing_pages" value="include_in_website_multiple_landing_pages"
                  name="include_in_website[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['include_in_website']['include_in_website_multiple_landing_pages']) ? 'checked' : null ?>="<?= isset($inputs['include_in_website']['include_in_website_multiple_landing_pages']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="include_in_website_site_redesign">
                <p class="label" data-required="">A redesign of a current website</p><input type="checkbox"
                  id="include_in_website_site_redesign" value="include_in_website_site_redesign"
                  name="include_in_website[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['include_in_website']['include_in_website_site_redesign']) ? 'checked' : null ?>="<?= isset($inputs['include_in_website']['include_in_website_site_redesign']) ? 'checked' : null ?>">
              </label>
            </fieldset>
            <fieldset for="special_includes">
              <legend class="countable-label" id="special_includes">
                <p>We want the following special features to be included in our new website</p>
              </legend>
              <p class="warning"></p><label class="checkbox" for="special_includes_registration_form">
                <p class="label" data-required="">Registration form</p><input type="checkbox"
                  id="special_includes_registration_form" value="special_includes_registration_form"
                  name="special_includes[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['special_includes']['special_includes_registration_form']) ? 'checked' : null ?>="<?= isset($inputs['special_includes']['special_includes_registration_form']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="special_includes_video_streaming">
                <p class="label" data-required="">Video streaming</p><input type="checkbox"
                  id="special_includes_video_streaming" value="special_includes_video_streaming"
                  name="special_includes[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['special_includes']['special_includes_video_streaming']) ? 'checked' : null ?>="<?= isset($inputs['special_includes']['special_includes_video_streaming']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="special_includes_mysql_db">
                <p class="label" data-required="">MySQL Database</p><input type="checkbox"
                  id="special_includes_mysql_db" value="special_includes_mysql_db" name="special_includes[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['special_includes']['special_includes_mysql_db']) ? 'checked' : null ?>="<?= isset($inputs['special_includes']['special_includes_mysql_db']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="special_includes_search_panel">
                <p class="label" data-required="">Search panel</p><input type="checkbox"
                  id="special_includes_search_panel" value="special_includes_search_panel" name="special_includes[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['special_includes']['special_includes_search_panel']) ? 'checked' : null ?>="<?= isset($inputs['special_includes']['special_includes_search_panel']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="special_includes_email_sign_up_form">
                <p class="label" data-required="">Newsletter/ Email sign up forms</p><input type="checkbox"
                  id="special_includes_email_sign_up_form" value="special_includes_email_sign_up_form"
                  name="special_includes[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['special_includes']['special_includes_email_sign_up_form']) ? 'checked' : null ?>="<?= isset($inputs['special_includes']['special_includes_email_sign_up_form']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="special_includes_information_request_forms">
                <p class="label" data-required="">Information/ request forms</p><input type="checkbox"
                  id="special_includes_information_request_forms" value="special_includes_information_request_forms"
                  name="special_includes[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['special_includes']['special_includes_information_request_forms']) ? 'checked' : null ?>="<?= isset($inputs['special_includes']['special_includes_information_request_forms']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="special_includes_uploads_downloads">
                <p class="label" data-required="">Uploads/ downloads</p><input type="checkbox"
                  id="special_includes_uploads_downloads" value="special_includes_uploads_downloads"
                  name="special_includes[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['special_includes']['special_includes_uploads_downloads']) ? 'checked' : null ?>="<?= isset($inputs['special_includes']['special_includes_uploads_downloads']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="special_includes_customer_login">
                <p class="label" data-required="">Customer login</p><input type="checkbox"
                  id="special_includes_customer_login" value="special_includes_customer_login" name="special_includes[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['special_includes']['special_includes_customer_login']) ? 'checked' : null ?>="<?= isset($inputs['special_includes']['special_includes_customer_login']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="special_includes_registration">
                <p class="label" data-required="">Registration</p><input type="checkbox"
                  id="special_includes_registration" value="special_includes_registration" name="special_includes[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['special_includes']['special_includes_registration']) ? 'checked' : null ?>="<?= isset($inputs['special_includes']['special_includes_registration']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="special_includes_e-commerce">
                <p class="label" data-required="">An online store/shopping cart</p><input type="checkbox"
                  id="special_includes_e-commerce" value="special_includes_e-commerce" name="special_includes[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['special_includes']['special_includes_e-commerce']) ? 'checked' : null ?>="<?= isset($inputs['special_includes']['special_includes_e-commerce']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="special_includes_online_payment_gateway">
                <p class="label" data-required="">Online payment gateway</p><input type="checkbox"
                  id="special_includes_online_payment_gateway" value="special_includes_online_payment_gateway"
                  name="special_includes[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['special_includes']['special_includes_online_payment_gateway']) ? 'checked' : null ?>="<?= isset($inputs['special_includes']['special_includes_online_payment_gateway']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="special_includes_blog">
                <p class="label" data-required="">Blog</p><input type="checkbox" id="special_includes_blog"
                  value="special_includes_blog" name="special_includes[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['special_includes']['special_includes_blog']) ? 'checked' : null ?>="<?= isset($inputs['special_includes']['special_includes_blog']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="special_includes_image_gallery">
                <p class="label" data-required="">Image gallery</p><input type="checkbox"
                  id="special_includes_image_gallery" value="special_includes_image_gallery" name="special_includes[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['special_includes']['special_includes_image_gallery']) ? 'checked' : null ?>="<?= isset($inputs['special_includes']['special_includes_image_gallery']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="special_includes_image_slider">
                <p class="label" data-required="">Image slider</p><input type="checkbox"
                  id="special_includes_image_slider" value="special_includes_image_slider" name="special_includes[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['special_includes']['special_includes_image_slider']) ? 'checked' : null ?>="<?= isset($inputs['special_includes']['special_includes_image_slider']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="special_includes_other">Other<input
                  0="<?= isset($inputs['special_includes']['special_includes_other']) ? 'checked' : '' ?>"
                  type="checkbox" id="special_includes_other" value="other" name="special_includes[]"
                  aria-required="false"
                  onchange="toggleCheckboxInputVisibility(event, 'special_includes_checkbox__input')"></label><label
                class="other_checkbox_input" for="special_includes_other_checkbox_input"
                id="special_includes_checkbox__input" style="display: none" aria-hidden="true">
                <p>Please explain a little further</p><input type="hidden" name="special_includes_other_checkbox_input"
                  id="special_includes_other_checkbox_input">
              </label>
            </fieldset><span class="table_radio_btns__wrapper countable-label"><span class="table_radio_btns__legend">
                <p class="label">Who will provide the following</p>
              </span>
              <fieldset class="fieldset_as_row" for="provide_stock_photography"><span class="content__wrapper">
                  <legend id="provide_stock_photography">Stock photography</legend>
                  <p class="warning"></p><span class="radios__wrapper"><label class="radio"
                      for="provide_stock_photography_customer">Us<input type="radio"
                        id="provide_stock_photography_customer" name="provide_stock_photography"
                        value="provide_stock_photography_customer" aria-required="false"></label><label class="radio"
                      for="provide_stock_photography_amdesigned">AMDesigned<input type="radio"
                        id="provide_stock_photography_amdesigned" name="provide_stock_photography"
                        value="provide_stock_photography_amdesigned" aria-required="false"></label></span>
                </span></fieldset>
              <fieldset class="fieldset_as_row" for="provide_company_photography"><span class="content__wrapper">
                  <legend id="provide_company_photography">Company photography</legend>
                  <p class="warning"></p><span class="radios__wrapper"><label class="radio"
                      for="provide_company_photography_customer">Us<input type="radio"
                        id="provide_company_photography_customer" name="provide_company_photography"
                        value="provide_company_photography_customer" aria-required="false"></label><label class="radio"
                      for="provide_company_photography_amdesigned">AMDesigned<input type="radio"
                        id="provide_company_photography_amdesigned" name="provide_company_photography"
                        value="provide_company_photography_amdesigned" aria-required="false"></label></span>
                </span></fieldset>
              <fieldset class="fieldset_as_row" for="provide_artwork_illustrations"><span class="content__wrapper">
                  <legend id="provide_artwork_illustrations">Other Artwork/ Illustrations</legend>
                  <p class="warning"></p><span class="radios__wrapper"><label class="radio"
                      for="provide_artwork_illustrations_customer">Us<input type="radio"
                        id="provide_artwork_illustrations_customer" name="provide_artwork_illustrations"
                        value="provide_artwork_illustrations_customer" aria-required="false"></label><label
                      class="radio" for="provide_artwork_illustrations_amdesigned">AMDesigned<input type="radio"
                        id="provide_artwork_illustrations_amdesigned" name="provide_artwork_illustrations"
                        value="provide_artwork_illustrations_amdesigned" aria-required="false"></label></span>
                </span></fieldset>
              <fieldset class="fieldset_as_row" for="provide_copywriting_text"><span class="content__wrapper">
                  <legend id="provide_copywriting_text">Copywriting text</legend>
                  <p class="warning"></p><span class="radios__wrapper"><label class="radio"
                      for="provide_copywriting_text_customer">Us<input type="radio"
                        id="provide_copywriting_text_customer" name="provide_copywriting_text"
                        value="provide_copywriting_text_customer" aria-required="false"></label><label class="radio"
                      for="provide_copywriting_text_amdesigned">AMDesigned<input type="radio"
                        id="provide_copywriting_text_amdesigned" name="provide_copywriting_text"
                        value="provide_copywriting_text_amdesigned" aria-required="false"></label></span>
                </span></fieldset>
              <fieldset class="fieldset_as_row" for="provide_logo"><span class="content__wrapper">
                  <legend id="provide_logo">Professional logo</legend>
                  <p class="warning"></p><span class="radios__wrapper"><label class="radio"
                      for="provide_logo_customer">Us<input type="radio" id="provide_logo_customer" name="provide_logo"
                        value="provide_logo_customer" aria-required="false"></label><label class="radio"
                      for="provide_logo_amdesigned">AMDesigned<input type="radio" id="provide_logo_amdesigned"
                        name="provide_logo" value="provide_logo_amdesigned" aria-required="false"></label></span>
                </span></fieldset>
              <fieldset class="fieldset_as_row" for="provide_graphic_design"><span class="content__wrapper">
                  <legend id="provide_graphic_design">Graphic design</legend>
                  <p class="warning"></p><span class="radios__wrapper"><label class="radio"
                      for="provide_graphic_design_customer">Us<input type="radio" id="provide_graphic_design_customer"
                        name="provide_graphic_design" value="provide_graphic_design_customer"
                        aria-required="false"></label><label class="radio"
                      for="provide_graphic_design_amdesigned">AMDesigned<input type="radio"
                        id="provide_graphic_design_amdesigned" name="provide_graphic_design"
                        value="provide_graphic_design_amdesigned" aria-required="false"></label></span>
                </span></fieldset>
              <fieldset class="fieldset_as_row" for="provide_metatags_descriptions"><span class="content__wrapper">
                  <legend id="provide_metatags_descriptions">Metatags/ description</legend>
                  <p class="warning"></p><span class="radios__wrapper"><label class="radio"
                      for="provide_metatags_descriptions_customer">Us<input type="radio"
                        id="provide_metatags_descriptions_customer" name="provide_metatags_descriptions"
                        value="provide_metatags_descriptions_customer" aria-required="false"></label><label
                      class="radio" for="provide_metatags_descriptions_amdesigned">AMDesigned<input type="radio"
                        id="provide_metatags_descriptions_amdesigned" name="provide_metatags_descriptions"
                        value="provide_metatags_descriptions_amdesigned" aria-required="false"></label></span>
                </span></fieldset>
            </span>
            <fieldset>
              <legend class="countable-label" id="has_design_guides">
                <p>Does <span class="company_name">your company</span> have a logo/established image & branding
                  guidelines (eg. fonts, colour schemes)?</p>
              </legend>
              <p class="warning"></p><label class="radio" for="has_design_guides_yes">
                <p class="label" data-required="">Yes</p><input type="radio" id="has_design_guides_yes"
                  name="has_design_guides" value="has_design_guides_yes" aria-required="false" aria-checked="false"
                  aria-invalid="false">
              </label><label class="radio" for="has_design_guides_no">
                <p class="label" data-required="">No</p><input type="radio" id="has_design_guides_no"
                  name="has_design_guides" value="has_design_guides_no" aria-required="false" aria-checked="false"
                  aria-invalid="false">
              </label>
            </fieldset>
            <fieldset>
              <legend class="countable-label" id="has_print_material">
                <p>Are there print materials (such as business cards or brochures) that we need to match?</p>
              </legend>
              <p class="warning"></p><label class="radio" for="has_print_material_yes">
                <p class="label" data-required="">Yes</p><input type="radio" id="has_print_material_yes"
                  name="has_print_material" value="has_print_material_yes" aria-required="false" aria-checked="false"
                  aria-invalid="false">
              </label><label class="radio" for="has_print_material_no">
                <p class="label" data-required="">No</p><input type="radio" id="has_print_material_no"
                  name="has_print_material" value="has_print_material_no" aria-required="false" aria-checked="false"
                  aria-invalid="false">
              </label>
            </fieldset><label class="countable-label" for="competitors">
              <p>Could you give us the websites of your top 3 competitors</p><textarea class="textarea"
                name="competitors" id="competitors"
                aria-required="false"><?= $inputs['competitors'] ?? null ?></textarea>
              <p class="warning"></p>
            </label><label class="countable-label" for="favourite_websites">
              <p>If you had to pick 3 websites you would love to have, which would they be and why?</p><textarea
                class="textarea" name="favourite_websites" id="favourite_websites"
                aria-required="false"><?= $inputs['favourite_websites'] ?? null ?></textarea>
              <p class="warning"></p>
            </label>
            <fieldset>
              <legend class="countable-label" id="updates">
                <p>Would you like us to update your website or would you like to be responsible for updates?</p>
              </legend>
              <p class="warning"></p><label class="radio" for="updates_customer_update">
                <p class="label" data-required="">We will update</p><input type="radio" id="updates_customer_update"
                  name="updates" value="updates_customer_update" aria-required="false" aria-checked="false"
                  aria-invalid="false">
              </label><label class="radio" for="updates_builder_update">
                <p class="label" data-required="">We want A&#8203;M&#8203;Designed to update the site</p><input
                  type="radio" id="updates_builder_update" name="updates" value="updates_builder_update"
                  aria-required="false" aria-checked="false" aria-invalid="false">
              </label>
            </fieldset><label class="countable-label" for="extra_input">
              <p>Is there anything else you'd like to tell us?</p><textarea class="textarea" name="extra_input"
                id="extra_input" aria-required="false"><?= $inputs['extra_input'] ?? null ?></textarea>
              <p class="warning"></p>
            </label>
            <fieldset for="extra_services">
              <legend class="countable-label" id="extra_services">
                <p>Any other service required apart from web development?</p>
              </legend>
              <p class="warning"></p><label class="checkbox" for="extra_services_email">
                <p class="label" data-required="">Email</p><input type="checkbox" id="extra_services_email"
                  value="extra_services_email" name="extra_services[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['extra_services']['extra_services_email']) ? 'checked' : null ?>="<?= isset($inputs['extra_services']['extra_services_email']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="extra_services_social_media_creation">
                <p class="label" data-required="">Social media account creation</p><input type="checkbox"
                  id="extra_services_social_media_creation" value="extra_services_social_media_creation"
                  name="extra_services[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['extra_services']['extra_services_social_media_creation']) ? 'checked' : null ?>="<?= isset($inputs['extra_services']['extra_services_social_media_creation']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="extra_services_seo">
                <p class="label" data-required="">Search Engine Optimization</p><input type="checkbox"
                  id="extra_services_seo" value="extra_services_seo" name="extra_services[]" aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['extra_services']['extra_services_seo']) ? 'checked' : null ?>="<?= isset($inputs['extra_services']['extra_services_seo']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="extra_services_email_newsletters">
                <p class="label" data-required="">Email Newsletter (Promotional Emails)</p><input type="checkbox"
                  id="extra_services_email_newsletters" value="extra_services_email_newsletters" name="extra_services[]"
                  aria-required="false"
                  onchange="this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false')"
                  aria-checked="false"
                  <?= isset($inputs['extra_services']['extra_services_email_newsletters']) ? 'checked' : null ?>="<?= isset($inputs['extra_services']['extra_services_email_newsletters']) ? 'checked' : null ?>">
              </label><label class="checkbox" for="extra_services_other">Other<input
                  0="<?= isset($inputs['extra_services']['extra_services_other']) ? 'checked' : '' ?>" type="checkbox"
                  id="extra_services_other" value="other" name="extra_services[]" aria-required="false"
                  onchange="toggleCheckboxInputVisibility(event, 'extra_services_checkbox__input')"></label><label
                class="other_checkbox_input" for="extra_services_other_checkbox_input"
                id="extra_services_checkbox__input" style="display: none" aria-hidden="true">
                <p>Please explain a little further</p><input type="hidden" name="extra_services_other_checkbox_input"
                  id="extra_services_other_checkbox_input">
              </label>
            </fieldset><label for="pot" aria-hidden="true"><input type="hidden" name="pot"
                readonly="readonly" /></label><input type="hidden" name="token" value="<?= $token ?>" /><span
              class="sr-only" aria-live="polite"></span><button class="btn full-width" onclick="showLoadingBtn(this)"
              type="submit" value="submit" name="submit">Submit<span class="icon paper-plane"
                aria-hidden="true"></span></button>
          </form>
        </span></section>
      <script src="/js/quote_page.28dfaadc4d0300a2c3e0.js"></script>
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
        <li><a class="current" href="/quote">quote</a></li>
        <li><a href="/contact/">contact</a></li>
        <li><a href="/showcase/">showcase</a></li>
        <li><a href="/articles/">articles</a></li>
      </ul>
      <ul>
        <li> <a href="/terms-and-conditions">Terms and conditions</a></li>
        <li> <a href="/privacy-policy">Privacy policy</a></li>
      </ul>
    </footer>
    <script src="/js/common.6dfe874d4eed07968fc9.js"> </script>
    <script src="/js/lightDarkMode.0d53ad7aa4e22f193d50.js"> </script>
    <script src="/js/posthog.d90645040e27fcfdde8e.js"></script>
  </body>
</html>
