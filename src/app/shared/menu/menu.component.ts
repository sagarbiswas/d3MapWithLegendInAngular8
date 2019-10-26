import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { MatNativeDateModule } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  region: string[] = [];
  country = [
    {
        "country": "Afghanistan",
        "region": "Asia"
    },
    {
        "country": "Albania",
        "region": "Europe"
    },
    {
        "country": "Algeria",
        "region": "Africa"
    },
    {
        "country": "American Samoa",
        "region": "Oceania"
    },
    {
        "country": "Andorra",
        "region": "Europe"
    },
    {
        "country": "Angola",
        "region": "Africa"
    },
    {
        "country": "Anguilla",
        "region": "North America"
    },
    {
        "country": "Antarctica",
        "region": "Antarctica"
    },
    {
        "country": "Antigua and Barbuda",
        "region": "North America"
    },
    {
        "country": "Argentina",
        "region": "South America"
    },
    {
        "country": "Armenia",
        "region": "Asia"
    },
    {
        "country": "Aruba",
        "region": "North America"
    },
    {
        "country": "Australia",
        "region": "Oceania"
    },
    {
        "country": "Austria",
        "region": "Europe"
    },
    {
        "country": "Azerbaijan",
        "region": "Asia"
    },
    {
        "country": "Bahamas",
        "region": "North America"
    },
    {
        "country": "Bahrain",
        "region": "Asia"
    },
    {
        "country": "Bangladesh",
        "region": "Asia"
    },
    {
        "country": "Barbados",
        "region": "North America"
    },
    {
        "country": "Belarus",
        "region": "Europe"
    },
    {
        "country": "Belgium",
        "region": "Europe"
    },
    {
        "country": "Belize",
        "region": "North America"
    },
    {
        "country": "Benin",
        "region": "Africa"
    },
    {
        "country": "Bermuda",
        "region": "North America"
    },
    {
        "country": "Bhutan",
        "region": "Asia"
    },
    {
        "country": "Bolivia",
        "region": "South America"
    },
    {
        "country": "Bosnia and Herzegovina",
        "region": "Europe"
    },
    {
        "country": "Botswana",
        "region": "Africa"
    },
    {
        "country": "Bouvet Island",
        "region": "Antarctica"
    },
    {
        "country": "Brazil",
        "region": "South America"
    },
    {
        "country": "British Indian Ocean Territory",
        "region": "Africa"
    },
    {
        "country": "Brunei",
        "region": "Asia"
    },
    {
        "country": "Bulgaria",
        "region": "Europe"
    },
    {
        "country": "Burkina Faso",
        "region": "Africa"
    },
    {
        "country": "Burundi",
        "region": "Africa"
    },
    {
        "country": "Cambodia",
        "region": "Asia"
    },
    {
        "country": "Cameroon",
        "region": "Africa"
    },
    {
        "country": "Canada",
        "region": "North America"
    },
    {
        "country": "Cape Verde",
        "region": "Africa"
    },
    {
        "country": "Cayman Islands",
        "region": "North America"
    },
    {
        "country": "Central African Republic",
        "region": "Africa"
    },
    {
        "country": "Chad",
        "region": "Africa"
    },
    {
        "country": "Chile",
        "region": "South America"
    },
    {
        "country": "China",
        "region": "Asia"
    },
    {
        "country": "Christmas Island",
        "region": "Oceania"
    },
    {
        "country": "Cocos (Keeling) Islands",
        "region": "Oceania"
    },
    {
        "country": "Colombia",
        "region": "South America"
    },
    {
        "country": "Comoros",
        "region": "Africa"
    },
    {
        "country": "Congo",
        "region": "Africa"
    },
    {
        "country": "Cook Islands",
        "region": "Oceania"
    },
    {
        "country": "Costa Rica",
        "region": "North America"
    },
    {
        "country": "Croatia",
        "region": "Europe"
    },
    {
        "country": "Cuba",
        "region": "North America"
    },
    {
        "country": "Cyprus",
        "region": "Asia"
    },
    {
        "country": "Czech Republic",
        "region": "Europe"
    },
    {
        "country": "Denmark",
        "region": "Europe"
    },
    {
        "country": "Djibouti",
        "region": "Africa"
    },
    {
        "country": "Dominica",
        "region": "North America"
    },
    {
        "country": "Dominican Republic",
        "region": "North America"
    },
    {
        "country": "East Timor",
        "region": "Asia"
    },
    {
        "country": "Ecuador",
        "region": "South America"
    },
    {
        "country": "Egypt",
        "region": "Africa"
    },
    {
        "country": "El Salvador",
        "region": "North America"
    },
    {
        "country": "England",
        "region": null
    },
    {
        "country": "Equatorial Guinea",
        "region": "Africa"
    },
    {
        "country": "Eritrea",
        "region": "Africa"
    },
    {
        "country": "Estonia",
        "region": "Europe"
    },
    {
        "country": "Ethiopia",
        "region": "Africa"
    },
    {
        "country": "Falkland Islands",
        "region": "South America"
    },
    {
        "country": "Faroe Islands",
        "region": "Europe"
    },
    {
        "country": "Fiji Islands",
        "region": "Oceania"
    },
    {
        "country": "Finland",
        "region": "Europe"
    },
    {
        "country": "France",
        "region": "Europe"
    },
    {
        "country": "French Guiana",
        "region": "South America"
    },
    {
        "country": "French Polynesia",
        "region": "Oceania"
    },
    {
        "country": "French Southern territories",
        "region": "Antarctica"
    },
    {
        "country": "Gabon",
        "region": "Africa"
    },
    {
        "country": "Gambia",
        "region": "Africa"
    },
    {
        "country": "Georgia",
        "region": "Asia"
    },
    {
        "country": "Germany",
        "region": "Europe"
    },
    {
        "country": "Ghana",
        "region": "Africa"
    },
    {
        "country": "Gibraltar",
        "region": "Europe"
    },
    {
        "country": "Greece",
        "region": "Europe"
    },
    {
        "country": "Greenland",
        "region": "North America"
    },
    {
        "country": "Grenada",
        "region": "North America"
    },
    {
        "country": "Guadeloupe",
        "region": "North America"
    },
    {
        "country": "Guam",
        "region": "Oceania"
    },
    {
        "country": "Guatemala",
        "region": "North America"
    },
    {
        "country": "Guinea",
        "region": "Africa"
    },
    {
        "country": "Guinea-Bissau",
        "region": "Africa"
    },
    {
        "country": "Guyana",
        "region": "South America"
    },
    {
        "country": "Haiti",
        "region": "North America"
    },
    {
        "country": "Heard Island and McDonald Islands",
        "region": "Antarctica"
    },
    {
        "country": "Holy See (Vatican City State)",
        "region": "Europe"
    },
    {
        "country": "Honduras",
        "region": "North America"
    },
    {
        "country": "Hong Kong",
        "region": "Asia"
    },
    {
        "country": "Hungary",
        "region": "Europe"
    },
    {
        "country": "Iceland",
        "region": "Europe"
    },
    {
        "country": "India",
        "region": "Asia"
    },
    {
        "country": "Indonesia",
        "region": "Asia"
    },
    {
        "country": "Iran",
        "region": "Asia"
    },
    {
        "country": "Iraq",
        "region": "Asia"
    },
    {
        "country": "Ireland",
        "region": "Europe"
    },
    {
        "country": "Israel",
        "region": "Asia"
    },
    {
        "country": "Italy",
        "region": "Europe"
    },
    {
        "country": "Ivory Coast",
        "region": "Africa"
    },
    {
        "country": "Jamaica",
        "region": "North America"
    },
    {
        "country": "Japan",
        "region": "Asia"
    },
    {
        "country": "Jordan",
        "region": "Asia"
    },
    {
        "country": "Kazakstan",
        "region": null
    },
    {
        "country": "Kenya",
        "region": "Africa"
    },
    {
        "country": "Kiribati",
        "region": "Oceania"
    },
    {
        "country": "Kuwait",
        "region": "Asia"
    },
    {
        "country": "Kyrgyzstan",
        "region": "Asia"
    },
    {
        "country": "Laos",
        "region": "Asia"
    },
    {
        "country": "Latvia",
        "region": "Europe"
    },
    {
        "country": "Lebanon",
        "region": "Asia"
    },
    {
        "country": "Lesotho",
        "region": "Africa"
    },
    {
        "country": "Liberia",
        "region": "Africa"
    },
    {
        "country": "Libyan Arab Jamahiriya",
        "region": "Africa"
    },
    {
        "country": "Liechtenstein",
        "region": "Europe"
    },
    {
        "country": "Lithuania",
        "region": "Europe"
    },
    {
        "country": "Luxembourg",
        "region": "Europe"
    },
    {
        "country": "Macao",
        "region": "Asia"
    },
    {
        "country": "Macedonia",
        "region": "Europe"
    },
    {
        "country": "Madagascar",
        "region": "Africa"
    },
    {
        "country": "Malawi",
        "region": "Africa"
    },
    {
        "country": "Malaysia",
        "region": "Asia"
    },
    {
        "country": "Maldives",
        "region": "Asia"
    },
    {
        "country": "Mali",
        "region": "Africa"
    },
    {
        "country": "Malta",
        "region": "Europe"
    },
    {
        "country": "Marshall Islands",
        "region": "Oceania"
    },
    {
        "country": "Martinique",
        "region": "North America"
    },
    {
        "country": "Mauritania",
        "region": "Africa"
    },
    {
        "country": "Mauritius",
        "region": "Africa"
    },
    {
        "country": "Mayotte",
        "region": "Africa"
    },
    {
        "country": "Mexico",
        "region": "North America"
    },
    {
        "country": "Micronesia, Federated States of",
        "region": null
    },
    {
        "country": "Moldova",
        "region": "Europe"
    },
    {
        "country": "Monaco",
        "region": "Europe"
    },
    {
        "country": "Mongolia",
        "region": "Asia"
    },
    {
        "country": "Montserrat",
        "region": "North America"
    },
    {
        "country": "Morocco",
        "region": "Africa"
    },
    {
        "country": "Mozambique",
        "region": "Africa"
    },
    {
        "country": "Myanmar",
        "region": "Asia"
    },
    {
        "country": "Namibia",
        "region": "Africa"
    },
    {
        "country": "Nauru",
        "region": "Oceania"
    },
    {
        "country": "Nepal",
        "region": "Asia"
    },
    {
        "country": "Netherlands",
        "region": "Europe"
    },
    {
        "country": "Netherlands Antilles",
        "region": "North America"
    },
    {
        "country": "New Caledonia",
        "region": "Oceania"
    },
    {
        "country": "New Zealand",
        "region": "Oceania"
    },
    {
        "country": "Nicaragua",
        "region": "North America"
    },
    {
        "country": "Niger",
        "region": "Africa"
    },
    {
        "country": "Nigeria",
        "region": "Africa"
    },
    {
        "country": "Niue",
        "region": "Oceania"
    },
    {
        "country": "Norfolk Island",
        "region": "Oceania"
    },
    {
        "country": "North Korea",
        "region": "Asia"
    },
    {
        "country": "Northern Ireland",
        "region": null
    },
    {
        "country": "Northern Mariana Islands",
        "region": "Oceania"
    },
    {
        "country": "Norway",
        "region": "Europe"
    },
    {
        "country": "Oman",
        "region": "Asia"
    },
    {
        "country": "Pakistan",
        "region": "Asia"
    },
    {
        "country": "Palau",
        "region": "Oceania"
    },
    {
        "country": "Palestine",
        "region": "Asia"
    },
    {
        "country": "Panama",
        "region": "North America"
    },
    {
        "country": "Papua New Guinea",
        "region": "Oceania"
    },
    {
        "country": "Paraguay",
        "region": "South America"
    },
    {
        "country": "Peru",
        "region": "South America"
    },
    {
        "country": "Philippines",
        "region": "Asia"
    },
    {
        "country": "Pitcairn",
        "region": "Oceania"
    },
    {
        "country": "Poland",
        "region": "Europe"
    },
    {
        "country": "Portugal",
        "region": "Europe"
    },
    {
        "country": "Puerto Rico",
        "region": "North America"
    },
    {
        "country": "Qatar",
        "region": "Asia"
    },
    {
        "country": "Reunion",
        "region": "Africa"
    },
    {
        "country": "Romania",
        "region": "Europe"
    },
    {
        "country": "Russian Federation",
        "region": "Europe"
    },
    {
        "country": "Rwanda",
        "region": "Africa"
    },
    {
        "country": "Saint Helena",
        "region": "Africa"
    },
    {
        "country": "Saint Kitts and Nevis",
        "region": "North America"
    },
    {
        "country": "Saint Lucia",
        "region": "North America"
    },
    {
        "country": "Saint Pierre and Miquelon",
        "region": "North America"
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "region": "North America"
    },
    {
        "country": "Samoa",
        "region": "Oceania"
    },
    {
        "country": "San Marino",
        "region": "Europe"
    },
    {
        "country": "Sao Tome and Principe",
        "region": "Africa"
    },
    {
        "country": "Saudi Arabia",
        "region": "Asia"
    },
    {
        "country": "Scotland",
        "region": null
    },
    {
        "country": "Senegal",
        "region": "Africa"
    },
    {
        "country": "Seychelles",
        "region": "Africa"
    },
    {
        "country": "Sierra Leone",
        "region": "Africa"
    },
    {
        "country": "Singapore",
        "region": "Asia"
    },
    {
        "country": "Slovakia",
        "region": "Europe"
    },
    {
        "country": "Slovenia",
        "region": "Europe"
    },
    {
        "country": "Solomon Islands",
        "region": "Oceania"
    },
    {
        "country": "Somalia",
        "region": "Africa"
    },
    {
        "country": "South Africa",
        "region": "Africa"
    },
    {
        "country": "South Georgia and the South Sandwich Islands",
        "region": "Antarctica"
    },
    {
        "country": "South Korea",
        "region": "Asia"
    },
    {
        "country": "South Sudan",
        "region": "Africa"
    },
    {
        "country": "Spain",
        "region": "Europe"
    },
    {
        "country": "SriLanka",
        "region": null
    },
    {
        "country": "Sudan",
        "region": "Africa"
    },
    {
        "country": "Suriname",
        "region": "South America"
    },
    {
        "country": "Svalbard and Jan Mayen",
        "region": "Europe"
    },
    {
        "country": "Swaziland",
        "region": "Africa"
    },
    {
        "country": "Sweden",
        "region": "Europe"
    },
    {
        "country": "Switzerland",
        "region": "Europe"
    },
    {
        "country": "Syria",
        "region": "Asia"
    },
    {
        "country": "Tajikistan",
        "region": "Asia"
    },
    {
        "country": "Tanzania",
        "region": "Africa"
    },
    {
        "country": "Thailand",
        "region": "Asia"
    },
    {
        "country": "The Democratic Republic of Congo",
        "region": null
    },
    {
        "country": "Togo",
        "region": "Africa"
    },
    {
        "country": "Tokelau",
        "region": "Oceania"
    },
    {
        "country": "Tonga",
        "region": "Oceania"
    },
    {
        "country": "Trinidad and Tobago",
        "region": "North America"
    },
    {
        "country": "Tunisia",
        "region": "Africa"
    },
    {
        "country": "Turkey",
        "region": "Asia"
    },
    {
        "country": "Turkmenistan",
        "region": "Asia"
    },
    {
        "country": "Turks and Caicos Islands",
        "region": "North America"
    },
    {
        "country": "Tuvalu",
        "region": "Oceania"
    },
    {
        "country": "Uganda",
        "region": "Africa"
    },
    {
        "country": "Ukraine",
        "region": "Europe"
    },
    {
        "country": "United Arab Emirates",
        "region": "Asia"
    },
    {
        "country": "United Kingdom",
        "region": "Europe"
    },
    {
        "country": "United States",
        "region": "North America"
    },
    {
        "country": "United States Minor Outlying Islands",
        "region": "Oceania"
    },
    {
        "country": "Uruguay",
        "region": "South America"
    },
    {
        "country": "Uzbekistan",
        "region": "Asia"
    },
    {
        "country": "Vanuatu",
        "region": "Oceania"
    },
    {
        "country": "Venezuela",
        "region": "South America"
    },
    {
        "country": "Vietnam",
        "region": "Asia"
    },
    {
        "country": "Virgin Islands, British",
        "region": null
    },
    {
        "country": "Virgin Islands, U.S.",
        "region": null
    },
    {
        "country": "Wales",
        "region": null
    },
    {
        "country": "Wallis and Futuna",
        "region": "Oceania"
    },
    {
        "country": "Western Sahara",
        "region": "Africa"
    },
    {
        "country": "Yemen",
        "region": "Asia"
    },
    {
        "country": "Yugoslavia",
        "region": "Europe"
    },
    {
        "country": "Zambia",
        "region": "Africa"
    },
    {
        "country": "Zimbabwe",
        "region": "Africa"
    }
];
  selectedCountry: any[] = [];

  constructor() { }

  ngOnInit() {
    this.region = this.country.map(item => item.region)
  .filter((value, index, self) => self.indexOf(value) === index)
    console.log('region' + JSON.stringify(this.region));
  }
  onSelect(countryId) {
    this.selectedCountry = [];
    this.country.filter((item) => item.region === countryId)
    .map((item) => {
      console.log('filtered item' + JSON.stringify(item));
      this.selectedCountry.push(item);
    })
}
onSelect1(countryId) {
  console.log(countryId);
  // this.selectedCountry = [];
  // this.country.filter((item) => item.region === countryId)
  // .map((item) => {
  //   console.log('filtered item' + JSON.stringify(item));
  //   this.selectedCountry.push(item);
  // })
}

}
