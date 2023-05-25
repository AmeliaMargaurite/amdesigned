<?php

namespace App\Controllers;

include_once(dirname(__DIR__, 1) . '/config.php');
include_once(SEND_WITH_PHP_MAILER);

class QuoteFormController extends FormController
{

	public $inputFields = [
		["name" => "contact_name", 'type' => 'string', 'required' => true],
		["name" => "email", 'type' => 'string', 'required' => true],
		["name" => "company", 'type' => 'string', 'required' => true],
		["name" => "description", 'type' => 'string', 'required' => false],
		["name" => "purchase_domain", 'type' => 'string', 'required' => false],
		["name" => "organise_hosting", 'type' => 'string', 'required' => false],
		["name" => "deadline", 'type' => 'string', 'required' => false],
		["name" => "budget", 'type' => 'string', 'required' => false],
		["name" => "reasons", 'type' => 'string_array', 'required' => false],
		["name" => "reasons_other_checkbox_input", 'type' => 'string', 'required' => false],
		["name" => "client_types", 'type' => 'string_array', 'required' => false],
		["name" => "client_types_other_checkbox_input", 'type' => 'string', 'required' => false],
		["name" => "client_ages", 'type' => 'string_array', 'required' => false],
		["name" => "seo_keywords", 'type' => 'string', 'required' => false],
		["name" => "include_in_website", 'type' => 'string_array', 'required' => false],
		["name" => "special_includes", 'type' => 'string_array', 'required' => false],
		["name" => "special_includes_other_checkbox_input", 'type' => 'string', 'required' => false],
		["name" => "provide_stock_photography", 'type' => 'string', 'required' => false],
		["name" => "provide_company_photography", 'type' => 'string', 'required' => false],
		["name" => "provide_artwork_illustrations", 'type' => 'string', 'required' => false],
		["name" => "provide_copywriting_text", 'type' => 'string', 'required' => false],
		["name" => "provide_logo", 'type' => 'string', 'required' => false],
		["name" => "provide_graphic_design", 'type' => 'string', 'required' => false],
		["name" => "provide_metatags_descriptions", 'type' => 'string', 'required' => false],
		["name" => "has_design_guides", 'type' => 'string', 'required' => false],
		["name" => "has_print_material", 'type' => 'string', 'required' => false],
		["name" => "competitors", 'type' => 'string', 'required' => false],
		["name" => "favourite_websites", 'type' => 'string', 'required' => false],
		["name" => "updates", 'type' => 'string', 'required' => false],
		["name" => "extra_input", 'type' => 'string', 'required' => false],
		["name" => "extra_services", 'type' => 'string_array', 'required' => false],
		["name" => "extra_services_other_checkbox_input", 'type' => 'string', 'required' => false],
	];
	public $contact_name;
	public $email;
	public $company;
	public $description;
	public $purchase_domain;
	public $organise_hosting;
	public $deadline;
	public $budget;
	public $reasons;
	public $reasons_other_checkbox_input;
	public $client_types;
	public $client_types_other_checkbox_input;
	public $client_ages;
	public $seo_keywords;
	public $include_in_website;
	public $special_includes;
	public $special_includes_other_checkbox_input;
	public $provide_stock_photography;
	public $provide_company_photography;
	public $provide_artwork_illustrations;
	public $provide_copywriting_text;
	public $provide_logo;
	public $provide_graphic_design;
	public $provide_metatags_descriptions;
	public $has_design_guides;
	public $has_print_material;
	public $competitors;
	public $favourite_websites;
	public $updates;
	public $extra_input;
	public $extra_services;
	public $extra_services_other_checkbox_input;

	public function sendForm()
	{
		$errors = [];
		$subject = "Quote request from " . $_ENV['SITE_NAME'];

		$class_vars = get_class_vars(__CLASS__);


		$ignore = [
			'contact_name',
			'email',
			'company',
			'description',
			'inputFields'
		];
		$services = '<div>';

		foreach ($class_vars as $key => $value) {
			if (!in_array($key, $ignore)) {
				$title = implode(' ', explode('_', $key));

				if (!$this->$key) {
					$services .= "<strong>$title</strong><br/><em>-</em><br/>";
				} else if (gettype($this->$key) === 'array') {
					// Checkboxes
					$services .= "<strong>$title</strong><br/>
												<ul>";
					foreach ($this->$key as $sub_value) {
						$input = $key;
						$reg = "/$input/";

						$display_value = htmlspecialchars(preg_replace([$reg, '/_/'], ['', ' '], $sub_value));
						$services .= "<li>													
													<em>$display_value<em>
													</li>";
					}
					$services .= '</ul>';
				} else {
					// If the entered value contains the questions key, key is removed and answer
					// split on '_' per original formatting
					$print_value = explode($key, $this->$key);
					if (isset($print_value[1])) {
						echo $print_value[1];
						$print_value = $this->$key ? htmlspecialchars(trim($print_value[1], '_')) : '-';
					} else {
						$print_value = htmlspecialchars($print_value[0]);
					}
					$services .= "<strong>$title</strong><br/><em>$print_value</em><br/>";
				}
			}
		}

		$services .= '</div>';

		$template_variables = [
			'title' => $title,
			'preview' => $this->contact_name . ' has sent you a quote request',
			'contact_name' => $this->contact_name,
			'contact_email' => $this->email,
			'company' => $this->company,
			'description' => $this->description,
			'services' => $services
		];

		$email_template = file_get_contents(MJML_FOLDER . 'quote-enquiry.php');
		var_dump($services);

		foreach ($template_variables as $key => $value) {
			if (!$value) {
				$value = '-';
			}
			$email_template = str_replace('{{ ' . $key . ' }}', $value, $email_template);
		}

		$email_to = new \MailTo;
		$email_to->address = $_ENV['SITE_EMAIL'];
		$email_to->name = 'Site Quote Form';

		$reply_to = new \MailTo;
		$reply_to->address = $this->email;
		$reply_to->name = $this->contact_name;
		exit();
		$siteOwnerError = sendToSiteOwner(email_body: $email_template, subject: $subject, reply_to: $reply_to, email_to: $email_to);

		if ($siteOwnerError) {
			$errors['failed_submit'] = $siteOwnerError;
		}

		if (count($errors) > 0) {
			return $errors;
		}
	}
}